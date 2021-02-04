import React, { Component } from 'react'
import * as THREE from "three"
import front from '../images/front.png'
import spine from '../images/spine.png'
import back from '../images/back.png'
import side from '../images/side.png'
import bottom from '../images/bottom.png'

class IssueOne extends Component {
    componentDidMount() {
      
        //Create the scene
        var scene = new THREE.Scene();

        const canvas = document.getElementById("canvas")
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        //Create the camera
        var camera = new THREE.PerspectiveCamera(65, canvas.clientWidth/canvas.clientHeight, 0.5, 1000);
        camera.position.z = 5;

        // Create the renderer and add it to the page's body element
        var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio );

        canvas.appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);

        // Load the textures (book images)
        var textureLoader = new THREE.TextureLoader();
        var bookCoverTexture = textureLoader.load(front);
        var bookSpineTexture = textureLoader.load(spine);
        var bookBackTexture = textureLoader.load(back);
        var bookPagesTexture = textureLoader.load(side);
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
        var book = new THREE.Mesh( new THREE.BoxGeometry( 2.5, 4, 0.2 ), materials );
        scene.add( book );
        // width, height, depth

         // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x555555);
        scene.add(ambientLight);

        // add directional light source
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        function animate(){
            requestAnimationFrame(animate);
            // cube.rotation.x +=0.01;
            // resizeCanvasToDisplaySize();
            book.rotation.y +=0.01;
            renderer.render(scene, camera)
        };
        animate();

        window.addEventListener("resize", function() {
          camera.aspect = canvas.clientWidth/canvas.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        })

    }

    render(){
        return (
         <div style={{ width: "150px", height: "200px" }} ref={(mount) => { this.mount = mount }} id='canvas'>
         </div>
        )
  }
}

export default IssueOne
