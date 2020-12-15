import React, { Component } from "react"
import * as THREE from "three"
import './posts.css';

    class Image extends Component {
        componentDidMount() {
          const img = document.querySelector("postImg")
            //Create the scene
            var scene = new THREE.Scene();
    
            //Create the camera
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.5, 1000);
            camera.position.z = 5;
    
            // Create the renderer and add it to the page's body element
            var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth*0.2, window.innerHeight*0.25, 0.5, 1000);
    
            img.appendChild(renderer.domElement);

    
            // Load the textures
            var loader = new THREE.TextureLoader();

            // Create the material
            var geometry = new THREE.PlaneGeometry(5, 7, 50, 70)

            // Create the material
            var material = new THREE.MeshBasicMaterial ({
                map: loader.load( this.props.fluid )
            });
            // Create the image filter and add it to the scene
            var filter = new THREE.Mesh (geometry, material);
            scene.add( filter );
            
    
             // add subtle ambient lighting
            var ambientLight = new THREE.AmbientLight(0x555555);
            scene.add(ambientLight);
    
            // add directional light source
            var directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(1, 1, 1).normalize();
            scene.add(directionalLight);

            filter.rotation.set(-0.1, 0, 0)

            const clock = new THREE.Clock()
    
            function animate(){
                const t = clock.getElapsedTime();

                filter.geometry.vertices.map(v => {
                    const waveX1 = 0.5 * Math.sin(v.x * 2 + t)
                    const waveY1 = 0.1 * Math.sin(v.y * 5 + t)

                    v.z = waveX1 + waveY1
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
                <div ref={(mount) => { this.mount = mount }} className='postImg'>
                </div>
            )
        }
    }
    

export default Image