import React, { Component } from 'react'
import * as THREE from "three"
import front from '../images/front.svg'
import spine from '../images/spine.svg'
import back from '../images/back.svg'
import side from '../images/side.svg'
import bottom from '../images/bottom.svg'

class IssueOne extends Component {
    componentDidMount() {
        //Create the scene
        var scene = new THREE.Scene();

        //Create the camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.5, 1000);
        camera.position.z = 4;

        // Create the renderer and add it to the page's body element
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth*0.2, window.innerHeight*0.25, 0.5, 1000);
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setClearColor( 0xffffff, 0);
        // scene.background = new THREE.Color( 0xff0000 );
        document.getElementById("canvas").appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);

        // Load the textures (book images)
        var textureLoader = new THREE.TextureLoader();
        var bookCoverTexture = textureLoader.load( front);
        var bookSpineTexture = textureLoader.load( spine);
        var bookBackTexture = textureLoader.load( back );
        var bookPagesTexture = textureLoader.load( side );
        var bookPagesTopBottomTexture = textureLoader.load( bottom );


        // Use the linear filter for the textures to avoid blurriness
        bookCoverTexture.minFilter
          = bookSpineTexture.minFilter
          = bookBackTexture.minFilter
          = bookPagesTexture.minFilter
          = bookPagesTopBottomTexture.minFilter
          = THREE.LinearFilter;

          // Create the materials
        var bookCover = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookCoverTexture } );
        var bookSpine = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookSpineTexture } );
        var bookBack = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookBackTexture } );
        var bookPages = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookPagesTexture } );
        var bookPagesTopBottom = new THREE.MeshLambertMaterial( { color: 0xffffff, map: bookPagesTopBottomTexture } );

        var materials = [
          bookPages,          // Right side
          bookSpine,          // Left side
          bookPagesTopBottom, // Top side
          bookPagesTopBottom, // Bottom side
          bookCover,          // Front side
          bookBack            // Back side
        ];

        // Create the book and add it to the scene
        var book = new THREE.Mesh( new THREE.BoxGeometry( 3.5, 4, 0.3 ), materials );
        scene.add( book );
        // width, height, depth

         // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x555555);
        scene.add(ambientLight);

        // add directional light source
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);


        // function resizeCanvasToDisplaySize() {
        //   const canvas = renderer.domElement;
        //   const width = canvas.clientWidth;
        //   const height = canvas.clientHeight;
        //   if (canvas.width !== width ||canvas.height !== height) {
        //     // you must pass false here or three.js sadly fights the browser
        //     renderer.setSize(width, height, false);
        //     camera.aspect = width / height;
        //     camera.updateProjectionMatrix();
        
        //     // set render target sizes here
        //   }
        // }


        function animate(){
            requestAnimationFrame(animate);
            // cube.rotation.x +=0.01;
            // resizeCanvasToDisplaySize();
            book.rotation.y +=0.01;
            renderer.render(scene, camera)
        };
        animate();
    }

    render(){
        return (
         <div ref={(mount) => { this.mount = mount }} id='canvas'>
         </div>
        )
  }
}

export default IssueOne
