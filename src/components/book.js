(() => {

    // fetch helpers
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }
    async function getData(url) {
        let countFetch = await fetch(url)
        return await countFetch.json()
    }

    // load edition number and replace it on the page
    let countJson
    let titleEditionEl = document.querySelector('#title-edition')
    let colophonEditionEl = document.querySelector('#colophon-edition')
    getData('/book-count').then((d) => {
        countJson = d
        let dateString = generateCoverDates()
        titleEditionEl.innerHTML = `Edition ${countJson.count}, Collated<br />
          ${dateString.cover}`
        colophonEditionEl.innerHTML = `Edition ${countJson.count}, Collated ${dateString.cover}`
    })

    // bane of web devs everywhere
    let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    let isAndroid = /(android)/i.test(navigator.userAgent);

    if (isIOS || isAndroid) {
        document.body.classList.add('mobile')
    }

    // show and hide up arrow based on scroll position
    let upArrow = document.querySelector('#up-arrow')

    function checkScroll() {
        if (window.scrollY < window.innerHeight * 2) {
            upArrow.classList.add('hide')
        } else {
            upArrow.classList.remove('hide')
        }
        window.requestAnimationFrame(checkScroll)
    }
    upArrow.classList.add('hide')
    window.requestAnimationFrame(checkScroll)

    // end note rendering for desktop
    let endNotes = document.querySelectorAll('.endNote')
    endNotes.forEach(note => {
        note.previousElementSibling.classList.add('lastBeforeEndNote')
    })

    // bookification
    const { makeBook, PageBreak, Footnote, PageReference } = Bindery;
    const html = document.querySelector('html')

    // polyfill for requestIdleCallback
    let soon = window.requestIdleCallback ? window.requestIdleCallback : setTimeout

    // callback for binder, low key a hack.
    function bookDone(n) {
        soon(() => {
            postData('/book-count', { 'key': 'count' }).then(e => console.log('Book Done'))
        })
    }

    let pages = page.children.filter(child => !child.meta.isUtility)

    async function doBook() {

        let book = document.createElement('div')
        let dates = generateCoverDates()

        // generate the book html from the raw content data
        let bookHTML = page.content

        // update dates to now
        bookHTML = bookHTML.replace('<span id="title-edition">Unlimited Edition, Compiled<br>Today</span>', `<span id="title-edition">Edition ${countJson.count}, Compiled<br>${dates.cover}</span>`)
        let sectionsInPrintList = document.querySelectorAll('.section-toggle')
        let enabledSectionIndexes = {}
        sectionsInPrintList.forEach(el => {
            enabledSectionIndexes[el.getAttribute('pageIndex') * 1] = el.checked
        })

        // check that one section is enabled
        function isTrue(element) {
            return element === true
        }
        let isOneTrue = Object.values(enabledSectionIndexes).some(isTrue)

        // append sections to toc if they are enabled
        bookHTML += `<div class="spread"><div class="page"></div>
        <div class="page toc">
          <h1>On Publishing</h1>
          <ul>
            ${pages.filter((child, i) => {
            return (child.meta.tocTitle || child.meta.header) && (enabledSectionIndexes[i] || !isOneTrue)
        }).map(child => {
            console.log(child)
            return `<li><a href="#${child.meta.title}">${child.meta.tocTitle ? child.meta.tocTitle : child.meta.header.text}</a></li>`

        }).join('')}
          </ul>
        </div></div>`

        // add sections
        let logos = []
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].meta.logo && enabledSectionIndexes[i]) {
                // add logos to the cover generation list if enabled
                if (pages[i].meta.logo.length == undefined) {
                    logos.push(pages[i].meta.logo)
                } else {
                    logos = logos.concat(pages[i].meta.logo)
                }
            }
            // add section to book block if enabled
            if (enabledSectionIndexes[i] || !isOneTrue) {
                let child = pages[i]
                if (child.meta.header) {
                    bookHTML += `<div class="spread image" id="${child.meta.title}">
              <img src="${child.meta.header.print.url}" class="${child.meta.header.print.format}" />
              <h1>${child.meta.header.text ? child.meta.header.text : ''}</h1>
              <h2>${child.meta.collectionDate ? child.meta.collectionDate : ''}</h2>
            </div>`
                } else {
                    bookHTML += `<div id="${child.meta.title}"></div>`
                }
                bookHTML += child.content
                // generate end note
                if (child.meta.studio) {
                    let url = ''
                    if (typeof child.meta.studio.url !== 'string') {
                        url = child.meta.studio.url.join(' ')
                    }
                    bookHTML += `<div class="endNote">
              ${child.meta.studio.interviewee ? `<span>${child.meta.studio.interviewee}</span>` : `<span>${child.meta.studio.name}</span>`}
              ${child.meta.studio.location ? `<span>${child.meta.studio.location}</span>` : ''}
              ${url ? `<span>${url.replace(/\//g, '/&ZeroWidthSpace;')}</span>` : ''}
            </div>`
                }
            }
        }

        // create colophon
        let colophon = page.children.filter(child => child.meta.title === 'colophon')[0].children.map(c => {
            return `<div class="colophon">${c.content}</div>`
        }).join('')
        // update date in colophon
        colophon = colophon.replace(
            /<span id="colophon-edition">(.*)<\/span>/g,
            `<span id="colophon-edition">Edition ${countJson.count}, Collated ${dates.cover}</span>`
        )

        bookHTML += colophon

        // set html into book
        book.innerHTML = bookHTML

        let placeholder = book.querySelector('.pattern')
        placeholder.parentNode.removeChild(placeholder)

        // disable web mode navigation for print preview
        html.classList.add('quickScroll')
        document.removeEventListener('mousemove', cursorUpdate)
        document.removeEventListener('keyup', pageFromKeys)
        document.body.style.cursor = 'default'
        document.body.classList.add('printPreview')

        // make cover image layer from the enabled section logos
        let imageHTML = generateCoverImages(logos)

        let coverTemplate = `<div id="print-cover">
      
        <!-- images -->
        ${imageHTML.join('')}
  
        <!-- back cover -->
        <div class="cover-back">
          <ul id="cover-toc">
            ${pages.filter((child, i) => {
            return (child.meta.header || child.meta.tocTitle) && (enabledSectionIndexes[i] || !isOneTrue)
        }).map(child => {
            return `<li><span class="print-page-number">✘</span>${child.meta.tocTitle ? child.meta.tocTitle : child.meta.header.text}</li>`

        }).join('')}
          </ul>
        </div>
  
        <!-- spine -->
        <div class="spine">
          <h2 id="spine-title">On Publishing: Graphic Designers Who Publish</h2>
          <h2 id="spine-timestamp">${dates.spine}</h2>
        </div>
  
        <!-- front cover -->
        <div class="cover-front">
          <h1>On Publishing:<br />
              Graphic Designers<br />
              Who Publish<br />
              <br />
              Edition ${countJson.count}<br />
              Compiled on<br />
              ${dates.cover} <br />
              <!-- in Berkeley CA -->
          </h2>
        </div>
      </div>`

        // call bindery with all this jazz
        makeBook({
            content: book,
            coverHTML: coverTemplate,
            rules: [
                Bindery.FullBleedSpread({
                    selector: '.spread.image',
                    continue: 'next'
                }),
                Bindery.PageBreak({
                    selector: '.page',
                    position: 'both',
                    continue: 'next'
                }),
                Bindery.PageBreak({
                    selector: '.breakStop',
                    position: 'avoid',
                    continue: 'next'
                }),
                Bindery.PageBreak({
                    selector: '.colophon',
                    position: 'before',
                    continue: 'left'
                }),
                Bindery.PageBreak({
                    selector: '.endNote',
                    position: 'after',
                    continue: 'next'
                }),
                Bindery.PageReference({
                    selector: '.toc a',
                    replace: (element, number) => {
                        let span = document.createElement('span')
                        number = number.split('–')[0]
                        span.innerHTML = `<span class="page-number-toc">${number}</span><span class="section-title">${element.textContent}</span>`
                        return span
                    }

                }),
                Bindery.RunningHeader({
                    render: (page) => {
                        if (page.isLeft) {
                            return `<div class="pageNum pageNum-${page.number}">${page.number}</div>`
                        } else {
                            return ''
                        }
                    },
                }),
                Bindery.Footnote({
                    selector: '.endNote',
                    render: (element, number) => {
                        return element.innerHTML;
                    },
                    replace: (element, number) => {
                        return document.createElement('span')
                    }
                }),

            ],
            pageSetup: {
                size: { width: '4.25in', height: '6.875in' },
                margin: { top: '24pt', inner: '36pt', outer: '24pt', bottom: '24pt' },
            },
            printSetup: {
                layout: Bindery.Layout.PAGES,
                paper: Bindery.Paper.AUTO,
                marks: Bindery.Marks.NONE,
                bleed: '12pt',
            },
            view: Bindery.View.PRINT
        }, bookDone)

    }

    // update the cover width with book size once its done rendering
    let coverStyleSheetEl = document.createElement('style');
    document.head.appendChild(coverStyleSheetEl);
    document.addEventListener('coverRenderDone', function (e) {
        let { spineWidth } = e.detail
        let stylesheet = coverStyleSheetEl.sheet

        let selector = '#print-cover .spine'

        if (spineWidth < 0.2) {
            stylesheet.insertRule(selector + '{' + 'display:none;' + '}', stylesheet.cssRules.length);
        } else {
            stylesheet.insertRule(selector + '{' + `width:${spineWidth}in;` + '}', stylesheet.cssRules.length);
        }

    })

    function generateCoverImages(logos) {

        function intersectRect(r1, r2) {
            return !(r2.left > r1.right ||
                r2.right < r1.left ||
                r2.top > r1.bottom ||
                r2.bottom < r1.top);
        }

        let color = Math.random() > 0.5 ? 'blue' : 'red'

        let sizes = [
            3.75,
            3,
            1,
            2,
            2.75
        ]

        let leftRange = [-2.25, 7]
        let topRange = [-1.125, 8]
        let imageHTML = []

        let rects = []

        let runCount = 0

        let coverRect = {
            left: 0,
            top: 0,
            right: 9,
            bottom: 6.875
        }

        // place cover images
        while (imageHTML.length < 5 && runCount < logos.length) {
            let w = sizes[Math.floor(Math.random() * sizes.length)]
            let x = (Math.random() * (leftRange[1] - leftRange[0])) + leftRange[0]
            let y = (Math.random() * (topRange[1] - topRange[0])) + topRange[0]
            let logoIndex = Math.floor(Math.random() * logos.length)

            let h = w * logos[logoIndex].ratio
            let proposedRect = {
                left: x,
                top: y,
                right: x + w,
                bottom: y + h
            }
            let intersects = false
            for (let i = 0; i < rects.length; i++) {
                intersects = intersects || intersectRect(proposedRect, rects[i])
                if (intersects) break
            }
            if (!intersects && intersectRect(proposedRect, coverRect)) {
                imageHTML.push(`<div class="cover-logo" style="background:url(static/img/logo/${color}/${logos[logoIndex].name}.png);background-size:cover;width: ${w}in;height: ${h}in; top: ${y}in; left: ${x}in;"></div>`)
                rects.push(proposedRect)
                logos.splice(logoIndex, 1)
            }
            runCount++
        }
        return imageHTML
    }

    function generateCoverDates() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let d = new Date()
        let fullYear = d.getFullYear() + ''
        let year = fullYear.substr(2, 2)
        let minutes = ('0' + d.getMinutes()).slice(-2)
        let spineDate = `${d.getDate()}.${d.getMonth() + 1}.${year} ${d.getHours()}:${minutes}`
        let coverDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${fullYear} at ${d.getHours()}:${minutes}`
        return { spine: spineDate, cover: coverDate }
    }

    // print controls behaviors
    let make = document.querySelector('#make-book');
    let cancel = document.querySelector('#cancel');

    let controlsSheet = document.querySelector('#controls')
    let printList = document.querySelector('#print-check')

    make.addEventListener('click', function () {
        if (controlsSheet.classList.contains('show')) {
            doBook()
            make.classList.add('hide')
            controlsSheet.classList.remove('show');
        } else {
            let sectionsForPrint = ''

            for (let i = 0; i < pages.length; i++) {

                let page = pages[i]

                let title = (page.meta.header && page.meta.header.text) ? page.meta.header.text : (page.meta.tocTitle ? page.meta.tocTitle : page.meta.title)
                let itemTemplate = `<li><input checked="true" pageindex="${i}" type="checkbox" class="section-toggle" id="${title}"><label for="${title}">${title}</label></li>`
                sectionsForPrint += itemTemplate
            }
            sectionsForPrint += `<li>—</li>
          <li><input checked="true" type="checkbox" id="select-all"><label for="select-all">Select All</label></li>`
            printList.innerHTML = sectionsForPrint
            let selectAllEl = printList.querySelector('#select-all')
            selectAllEl.addEventListener('change', selectAll)

            controlsSheet.classList.add('show');
            make.classList.add('checklist');
            make.innerHTML = 'Compile Book';
        }
    })

    cancel.addEventListener('click', function (e) {
        controlsSheet.classList.remove('show');
        make.classList.remove('checklist');
        make.innerHTML = 'Make Book';

        return blockEvent(e)
    })

    function selectAll(e) {
        let thisValue = this.checked
        let inputs = printList.querySelectorAll('input')
        inputs.forEach(input => input.checked = thisValue)
    }


    // web mode navigation behaviors
    let sections = document.querySelectorAll('section')
    let mouseDownLoc
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener('mousedown', scrollerDownCheck)
        sections[i].addEventListener('mouseup', scroller)
    }

    document.addEventListener('mousemove', cursorUpdate)
    function cursorUpdate(e) {
        let isControlsOpen = controlsSheet.classList.contains('show')
        if (window.innerWidth > 800 && !isControlsOpen) {
            if (e.clientX / window.innerWidth > 0.5) {
                document.body.style.cursor = 'e-resize'
            } else {
                document.body.style.cursor = 'w-resize'
            }
        } else {
            document.body.style.cursor = 'default'
        }
    }
    function close(a, b, dist) {
        return (a >= b - dist) && (a <= b + dist)
    }

    function scrollerDownCheck(e) {
        mouseDownLoc = { x: e.clientX, y: e.clientY }
    }
    function scroller(e) {
        let node = walkUpToSelector(e.target, 'a')
        if (!node && close(e.clientX, mouseDownLoc.x, 3) && close(e.clientY, mouseDownLoc.y, 3)) {
            let isControlsOpen = controlsSheet.classList.contains('show')
            if (!isControlsOpen) {
                scrollSection(this, e.clientX / window.innerWidth > 0.5)
            }
        }
    }
    function walkUpToSelector(node, selector) {

        while (node && !node.matches(selector) && node != document.body) {
            node = node.parentNode
        }
        return node != document.body ? node : false
    }
    document.addEventListener('keyup', pageFromKeys)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            return blockEvent(e)
        }
    })

    function blockEvent(e) {
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    function pageFromKeys(e) {
        let centerNode = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)

        let spread = walkUpToSelector(centerNode, 'section')
        switch (e.key) {
            case 'ArrowRight':
                scrollSection(spread, true)
                e.preventDefault()
                break;
            case 'ArrowLeft':
                scrollSection(spread, false)
                e.preventDefault()
                break;
        }
    }
    function scrollSection(element, forwards) {
        if (window.innerWidth > 800 && element.scrollTo) {
            let s = element.scrollLeft
            let spreadIndex = Math.floor((s / window.innerWidth) * 2) / 2

            if (forwards) {
                spreadIndex++
                if (Math.round(window.scrollY) == Math.round(element.offsetTop)) {
                    if (element.scrollLeft + window.innerWidth < element.scrollWidth) {
                        element.scrollTo(spreadIndex * window.innerWidth, 0)
                    } else {
                        let scrollTo = element.nextElementSibling ? element.nextElementSibling.offsetTop : undefined
                        if (scrollTo) {
                            window.scrollTo(0, scrollTo)
                            element.nextElementSibling.classList.add('quickScroll')
                            element.nextElementSibling.scrollTo(0, 0)
                            element.nextElementSibling.classList.remove('quickScroll')
                        }
                    }
                } else {
                    window.scrollTo(0, element.offsetTop)
                }
            } else {
                spreadIndex--
                if (Math.round(window.scrollY) == Math.round(element.offsetTop)) {
                    if (spreadIndex >= 0) {
                        element.scrollTo(spreadIndex * window.innerWidth, 0)
                    } else {
                        if (element.scrollLeft != 0) {
                            element.scrollTo(0, 0)
                        } else {
                            let scrollTo = element.previousElementSibling ? element.previousElementSibling.offsetTop : undefined
                            if (!isNaN(scrollTo)) {
                                window.scrollTo(0, scrollTo)
                                element.previousElementSibling.classList.add('quickScroll')
                                element.previousElementSibling.scrollTo(0, 0)
                                element.previousElementSibling.classList.remove('quickScroll')
                            }
                        }
                    }
                } else {
                    window.scrollTo(0, element.offsetTop)
                }
            }
        }
    }



})()