import React, { Component } from "react"
import * as THREE from "three"
import './posts.css';
import ninos from '../images/ninos.jpeg'

    class Image extends Component {
        componentDidMount() {
          
            //Create the scene
            var scene = new THREE.Scene();

            const img = document.getElementById("postImg")
            //Create the camera
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.5, 1000);
            camera.position.z = 10;
    
            // Create the renderer and add it to the page's body element
            var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth*0.5, window.innerHeight, 0.5, 1000);
    
            img.appendChild(renderer.domElement);

    
            // Load the textures
            var loader = new THREE.TextureLoader();

            // Create the material
            var geometry = new THREE.PlaneGeometry(40, 20, 200, 200)

            // Create the material
            var material = new THREE.MeshBasicMaterial ({
                map: loader.load( ninos )
            });
            // Create the image filter and add it to the scene
            var filter = new THREE.Mesh (geometry, material);
            scene.add( filter );

            filter.rotation.set(-0.1, 0, 0)

            const clock = new THREE.Clock()
    
            function animate(){
                const t = clock.getElapsedTime();

                filter.geometry.vertices.map(v => {
                    const waveX1 = 0.1 * Math.sin(v.x * 5 + t)
                    const waveX2 = 0.1 * Math.sin(v.x * 3 + t)
                    const waveX3 = 0.1 * Math.sin(v.x * 2.3 + t)
                    const waveY1 = 0.1 * Math.sin(v.y * 5 + t)
                    const waveY2 = 0.1 * Math.sin(v.x * 3 + t)
                    const waveY3 = 0.1 * Math.sin(v.x * 1.5 + t)

                    v.z = waveX1 + waveY1 + waveX2 + waveY2 + waveX3 + waveY3
                })

                filter.geometry.verticesNeedUpdate = true

                requestAnimationFrame(animate);
                renderer.render(scene, camera)
            };
            animate();
    
            window.addEventListener("resize", function() {
              camera.aspect = img.clientWidth/img.clientHeight
              camera.updateProjectionMatrix()
              renderer.setSize(img.clientWidth, img.clientHeight);
            })
        }
        render(){
            return (
                <div ref={(mount) => { this.mount = mount }} id='postImg'>
                </div>
            )
        }
    }
    

export default Image