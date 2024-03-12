"use client"
import * as THREE from "three"
import { SpotLight } from "@react-three/drei"
import {TextureLoader} from "three"
import React, { useRef,useEffect,Suspense,useState } from 'react'
import { useGLTF, PerspectiveCamera,OrbitControls} from '@react-three/drei'
import { Canvas,useFrame } from 'react-three-fiber'
import {gsap} from 'gsap'



export function Model(props) {

  const textureLoader = new THREE.TextureLoader().load('assets/Home 1.svg')   

  const textureMaterial = new THREE.MeshStandardMaterial({
    map:textureLoader,
    // metalness:0.3,
    roughness:0.5,
    shininess:100
  })
  const spotLight = (
    <SpotLight
      intensity={0.6}    // Adjust the intensity of the light
      angle={Math.PI / 4}   // Angle of the light cone (in radians)
      penumbra={0.9}   // Penumbra percentage (0 to 1)
      position={[-10, -5, -5]}  // Adjust the position of the light
      castShadow  // Enable shadow casting
    />
  );

     const metallicMaterial = new THREE.MeshStandardMaterial({
   
    color: '#2C2C2B',          // Color of the material
    metalness: 1,             // How much the material is a metal (0 to 1)
    roughness: 0.001,           // How rough the material is (0 to 1)
    // emissive: 0x0,            // Emissive color (no emissive color in this example)
    envMapIntensity: 1,     // Intensity of the reflection map
    side: THREE.FrontSide,   
  });

  const modelRef = useRef();
  // useFrame(({ mouse }) => {
  //   if (modelRef.current) {
  //     // Calculate the tilt angle based on the cursor position
  //     const tiltX = (mouse.x * Math.PI) / 4; // Adjust the multiplier to control the tilt intensity
  //     const tiltY = (mouse.y * Math.PI) / 4; // Adjust the multiplier to control the tilt intensity
      
  //     // Update the rotation of the model
  //     modelRef.current.rotation.set(tiltY, -tiltX, 0);
  //   }
  // });
  const tiltMultiplier = 0.5;

  // Function to tilt the model based on the cursor position
  useFrame(({ mouse }) => {
    if (modelRef.current) {
      // Calculate the tilt angles based on the cursor position
      const tiltY = mouse.x * tiltMultiplier;
      const tiltX = mouse.y *- tiltMultiplier;
      // const tiltY = (mouse.y * Math.PI) / 8;
      // const tiltX = (mouse.x * Math.PI) / 8; // Adjust the multiplier to control the tilt intensity

      // Update the rotation of the model
 gsap.to(modelRef.current.rotation, {
        x: tiltX,
        y: tiltY,
        duration: 1, // Adjust the duration of the transition
        ease: 'power1.out', // Adjust the easing function
        delay:0.3
      });    }
  });

  const { nodes, materials } = useGLTF('assets/phone.gltf')
  return (
    <group {...props} ref={modelRef} dispose={null}>
      <group scale={0.01} >
        <group position={[1.797, -0.842, -215.255]} rotation={[0, -0.285, 0]}>
          <group position={[-127.797, -549.158, 290.881]} rotation={[0.454, 0, 0]}>
            <group position={[126.483, 492.97, -254.241]} rotation={[-0.742, 0, 0]} scale={0.65}>
              <group position={[0, 0, -1.945]}>
                <mesh geometry={nodes.Boolean_2.geometry} material={metallicMaterial} position={[0.357, 358.929, 17.26]} rotation={[0.323, 0, 0]} scale={1.538} />
                <mesh geometry={nodes.Place_your_image_here_2.geometry} material={textureMaterial} position={[0, 0.5, 17.531]} />
                <mesh geometry={nodes.Front.geometry} material={metallicMaterial} position={[0, 0, 18.074]} rotation={[-Math.PI, 0, 0]} scale={1.429} />
                <mesh geometry={nodes.Body.geometry} material={metallicMaterial} position={[0, 0, 1.945]} scale={1.429} />
              </group>
            </group>
            <mesh geometry={nodes.hand.geometry} material={metallicMaterial} position={[-181.592, 8.78, -12.299]} rotation={[-0.355, 0, -0.661]} scale={3.36} />
            {spotLight}

          </group>
        </group>
        <directionalLight intensity={0.7} decay={2} rotation={[0, 0.884, 0]} />
        <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={45} position={[-457.478, 86.908, 999.314]} rotation={[-0.031, -0.021, -0.001]} />
        <PerspectiveCamera makeDefault={false} far={100000} near={5} fov={45} position={[-840.512, 73.034, 2109.627]} rotation={[-0.035, -0.379, -0.013]} />
      </group>
      {/* {spotLight} */}

    </group>
  )
}
function PhoneMod(){
  

  return(
    <>
    <Canvas>
    {/* <ambientLight  intensity={1} /> */}
    <directionalLight color="#ffffff" metalness={1} roughness={0.1} position={[-100, -202, 240]} />
    <directionalLight color="#fffff" metalness={1} roughness={0.1} position={[125, -150, 190]}/>
    <directionalLight color="#fffff" metalness={1} roughness={0.1} position={[-195, -60, -190]}/>
    <directionalLight color="#fffff" metalness={0.5} roughness={0.1} position={[-150, -150,800]}/>
    <directionalLight color="#fffff" metalness={1} roughness={0.1} position={[100, -50,-200]}/>

    

    {/* <directionalLight intensity={1} color="#ffff"  decay={2} position={[110, 10.884, 40]} /> */}

      <Suspense >



    <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
    <Model />
    
    </Suspense>
    </Canvas>
 
    </>
  )
}
export default PhoneMod
// useGLTF.preload('/phone.gltf')
