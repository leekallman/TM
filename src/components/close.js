
import React from "react"
import closeStyles from './close.module.css'
import cancel from '../images/cancel.png'

const Close = ({close}) => {

    return (
        <button aria-label="Close" onClick={close} className={closeStyles.closeBtn}>
            <img alt="close-button" src={cancel}/>
        </button>
    )
}

export default Close

