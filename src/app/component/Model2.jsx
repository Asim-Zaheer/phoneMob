// "use client";
// import * as THREE from "three";
// import { gsap } from 'gsap'
// import { Tween, Easing } from 'tween.js';

// import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

// import React, { useEffect,Suspense,useRef,useState } from "react";
// import { useGLTF,PerspectiveCamera,  OrthographicCamera, OrbitControls} from "@react-three/drei";
// import { Canvas ,useFrame} from "react-three-fiber";
// export function Model(props) {
//   const { nodes, materials } = useGLTF("assets/3d_model.gltf");
//   const shinyMaterial = new THREE.MeshStandardMaterial({
//     // color: 'white',
//     metalness: 0.8,  // Set to 1 for a metallic look
//     // roughness: 0.5,  // Adjust as needed (0.1 is a relatively low value for shine)
//     color: 'white',
//     emissive: 'white',
//      // The emissive color represents emitted light
//     emissiveIntensity: 20, // Adjust the intensity as needed
//     roughness: 2, // Adjust the roughness for shine
//   });
//   // const reflectiveMaterial = new THREE.MeshStandardMaterial({
//   //   // emissive: '#81689D',
//   //   color: '#81689D', // Adjust the color of the second ball
//   //   roughness: 2.5, // Adjust the roughness for reflection
//   //   // position:[15, 2, 40]
//   // });
//   const groupRef = useRef();  // Add this line to create the ref

//   const [isHovered, setIsHovered] = useState(false);

//   // State to store the updated positions of the spheres
//   const [spherePositions, setSpherePositions] = useState({
//   });
  
//   // Event handlers for hover
//   const handleHover = () => {
//     setIsHovered(true);
//   };
  
//   const handleUnhover = () => {
//     setIsHovered(false);
//   };
//   const bigBallPosition = [0, 0, 0]; // Assuming the big ball is at the center (adjust as needed)

//   // Original positions for all spheres
//   const originalPositions = {
//     sphere0: [-125.191, 134.508, -62.016],
//     sphere1: [-187.032, 41.171, -35.17],
//     sphere2:[-115.344, -29.344, 73.656],
//     // sphere3:[-104.572, 81.956, 112.494],
//     sphere4:[26.17, 22.65, 181.656],
//     sphere5:[64.405, 179.801, 19.416],
//     sphere6:[-51.344, 169.656, 78.656],
//     sphere7:[-30.301, -58.213, -178.041],
//     sphere8:[-161.344, -85.344, -14.344],
//     sphere9:[50.374, 62.176, -156.33],
//     sphere10:[-1.344, 154.922, -69.344],
//     sphere11:[11.82, 130.575, 157.446],
//     sphere13:[91.969, -37.192, -144.406],
//     sphere14:[-106.344, 42.656, -155.344],
//     sphere15:[-97.735, -139.678, -91.367],
//     sphere16:[7.656, -167.179, -77.493],
//     sphere17:[48.262, -145.18, 45.859],
//     sphere18:[-24.39, -166.3, 98.521],
//     sphere19:[109.656, -140.344, -52.344],
//     sphere20:[-99.532, -17.081, 142.606],
//     sphere21:[180.656, -10.344, -66.344],
//     sphere22:[158.46, 12.388, 64.463],
//     sphere23:[114.656, 125.656, 110.656],
//     sphere25:[135.216, 110.037, -64.054]
//     // ... (add original positions for other spheres)
//   };

//   const [scrollAnimation, setScrollAnimation] = useState({
//     distance: 0, // Initial distance value
//   });

//   // Scroll event handler
//   const handleScroll = () => {
//     if (groupRef.current) {
//       // Calculate the distance based on scroll position
//       const distance = window.scrollY * 0.01;  // Adjust the factor for distance speed

//       // Update state with the new distance value
//       setScrollAnimation({
//         distance: distance,
//       });
//     }
//   };

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Remove event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   useEffect(() => {
//     if (groupRef.current) {
//       // Update sphere positions logic based on your requirements
//       const updatedPositions = {};
  
//       // Iterate over the original positions and apply the desired offsets
//       Object.keys(originalPositions).forEach((sphereName) => {
//         const spherePositions = originalPositions[sphereName];

//         // Calculate the offsets based on the center ball's position and scroll distance
//         const xOffset = scrollAnimation.distance * (spherePositions[0] - bigBallPosition[0]);
//         const yOffset = scrollAnimation.distance * (spherePositions[1] - bigBallPosition[1]);
//         const zOffset = scrollAnimation.distance * (spherePositions[2] - bigBallPosition[2]);

//         updatedPositions[sphereName] = [
//           spherePositions[0] + xOffset,
//           spherePositions[1] + yOffset,
//           spherePositions[2] + zOffset,
//         ];
//       });

//       // Set the updated sphere positions
//       setSpherePositions(updatedPositions);
//     }
//   }, [scrollAnimation]);
//   // Update sphere positions when isHovered or any other dependency changes
//   useEffect(() => {
//     // const handlingScroll = () => {   

//     if (isHovered) {
//       // Update sphere positions logic based on your requirements
//       setSpherePositions((prevPositions) => {
//         const updatedPositions = {};
  
//         // Iterate over the original positions and apply the desired offsets
//         Object.keys(originalPositions).forEach((sphereName) => {
//           const spherePositions = prevPositions[sphereName];

//           // Calculate the offsets based on the big ball's position
//           const xOffset = bigBallPosition[0] + spherePositions[0];
//           const yOffset = bigBallPosition[1] + spherePositions[1];
//           const zOffset = bigBallPosition[2] + spherePositions[2];

//           updatedPositions[sphereName] = [
//             spherePositions[0] + xOffset,
//             spherePositions[1] + yOffset,
//             spherePositions[2] + zOffset,
//           ];
//         });
  
//         return updatedPositions;
//       });
//     } else {
//       // Revert sphere positions to their original positions
//       setSpherePositions(originalPositions);
//     }
 
//   }, [isHovered]); 

//  const cameraZoom = {
//     value: 1, // initial scale value
//     target: 1, // target scale value
//   };

 


//   useEffect(() => {
//     const handleScroll = () => {
//       if (groupRef.current) {
//         cameraZoom.target = window.scrollY > cameraZoom.value ? 0.5 : 1;

//         gsap.to(cameraZoom, {
//           value: cameraZoom.target,
//           duration: 1,
//           onUpdate: () => {
//             groupRef.current.scale.set(cameraZoom.value, cameraZoom.value, cameraZoom.value);
//           },
//           ease: 'power2.out',
//         });

    
//       }
      
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   useEffect(() => {
//     const handleScroll = () => {
//       if (groupRef.current) {
//         gsap.to(groupRef.current.rotation, {
//             y: window.scrollY * 0.01, // Adjust the factor for rotation speed
//             duration: 1, // Adjust the animation duration
//             ease: 'power2.out', // Use a power2 easing for a more natural feel
    
//           });
            
          
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Remove event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  
//   useFrame(() => {
//         if (groupRef.current) {
//           // Rotate the model in all three dimensions
//         //   groupRef.current.rotation.x += 0.005;
//           groupRef.current.rotation.y -= 0.009
//         //   groupRef.current.rotation.z += 0.005;
//         }
//       });

//   return (
//     // onPointerOver={handleHover} onPointerOut={handleUnhover} onClick={handleClick } 
//     <group    ref={groupRef}  {...props} dispose={null}    onPointerDown={handleHover} onPointerUp={handleUnhover} >
//       <group scale={0.007}>
//         <OrthographicCamera
//           makeDefault={false}
//           far={100}
//           near={1000}
//           position={[0, -2000, 0.1]}
//           rotation={[1.571, 0, 0]}
//         />
//         <mesh  ref={groupRef}
//         position={bigBallPosition}
//           geometry={nodes.Trigger.geometry}
//           material={shinyMaterial}
//           rotation={[0.017, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Sphere_0.geometry}
//           material={nodes.Sphere_0.material}
//           position={spherePositions.sphere0}
//           rotation={[0.941, -0.834, 1.329]}
// />
//         <mesh
//           geometry={nodes.Sphere_1.geometry}
//           material={nodes.Sphere_1.material}
//           position={spherePositions.sphere1}
//           rotation={[1.397, -0.573, 1.647]}
//         />
//         <mesh
//           geometry={nodes.Sphere_2.geometry}
//           material={nodes.Sphere_2.material}
//           position={spherePositions.sphere2}
//           rotation={[1.503, 0.422, 0.451]}
//         />
//         {/* <mesh
//           geometry={nodes.Sphere_3.geometry}
//           material={reflectiveMaterial}
//           position={spherePositions.sphere3}
//           rotation={[-1.001, -0.671, -1.191]}
//         /> */}
//         <mesh
//           geometry={nodes.Sphere_4.geometry}
//           material={nodes.Sphere_4.material}
//           position={spherePositions.sphere4}
//           rotation={[1.524, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Sphere_5.geometry}
//           material={nodes.Sphere_5.material}
//           position={spherePositions.sphere5}
//           rotation={[-0.695, -1.045, -0.955]}
//         />
//         <mesh
//           geometry={nodes.Sphere_6.geometry}
//           material={nodes.Sphere_6.material}
//           position={spherePositions.sphere6}
//           rotation={[0.576, 0, 0.299]}
//         />
//         <mesh
//           geometry={nodes.Sphere_7.geometry}
//           material={nodes.Sphere_7.material}
//           position={spherePositions.sphere7}
//           rotation={[-1.787, -0.592, 0.091]}
//         />
//         <mesh
//           geometry={nodes.Sphere_8.geometry}
//           material={nodes.Sphere_8.material}
//           position={spherePositions.sphere8}
//           rotation={[-3.064, 0.214, 1.149]}
//         />
//         <mesh
//           geometry={nodes.Sphere_9.geometry}
//           material={nodes.Sphere_9.material}
//           position={spherePositions.sphere9}
//           rotation={[-1.225, -0.561, -0.32]}
//         />
//         <mesh
//           geometry={nodes.Sphere_10.geometry}
//           material={nodes.Sphere_10.material}
//           position={spherePositions.sphere10}
//           rotation={[-0.449, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Sphere_11.geometry}
//           material={nodes.Sphere_11.material}
//           position={spherePositions.sphere11}
//           rotation={[1.215, -1.212, 0.111]}
//         />
//         <mesh
//           geometry={nodes.Sphere_13.geometry}
//           material={nodes.Sphere_13.material}
//           position={spherePositions.sphere13}
//           rotation={[-1.709, 0.012, -0.351]}
//         />
//         <mesh
//           geometry={nodes.Sphere_14.geometry}
//           material={nodes.Sphere_14.material}
//           position={spherePositions.sphere14}
//           rotation={[-1.212, -0.097, 0.394]}
//         />
//         <mesh
//           geometry={nodes.Sphere_15.geometry}
//           material={nodes.Sphere_15.material}
//           position={spherePositions.sphere15}
//           rotation={[-0.868, -0.957, 1.809]}
//         />
//         <mesh
//           geometry={nodes.Sphere_16.geometry}
//           material={nodes.Sphere_16.material}
//           position={spherePositions.sphere16}
//           rotation={[-2.85, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.Sphere_17.geometry}
//           material={nodes.Sphere_17.material}
//           position={spherePositions.sphere17}
//           rotation={[-1.737, 1.07, -1.548]}
//         />
//         <mesh
//           geometry={nodes.Sphere_18.geometry}
//           material={nodes.Sphere_18.material}
//           position={spherePositions.sphere18}
//           rotation={[-0.48, -0.676, 3.133]}
//         />
//         <mesh
//           geometry={nodes.Sphere_19.geometry}
//           material={nodes.Sphere_19.material}
//           position={spherePositions.sphere19}
//           rotation={[0.266, 0.288, -2.336]}
//         />
//         <mesh
//           geometry={nodes.Sphere_20.geometry}
//           material={nodes.Sphere_20.material}
//           position={spherePositions.sphere20}
//           rotation={[-0.643, -0.525, 0.558]}
//         />
//         <mesh
//           geometry={nodes.Sphere_21.geometry}
//           material={nodes.Sphere_21.material}
//           position={spherePositions.sphere21}
//           rotation={[-0.055, 0.527, -1.462]}
//         />
//         <mesh
//           geometry={nodes.Sphere_22.geometry}
//           material={nodes.Sphere_22.material}
//           position={spherePositions.sphere22}
//           rotation={[-0.742, -0.138, -1.628]}
//         />
//         <mesh
//           geometry={nodes.Sphere_23.geometry}
//           material={nodes.Sphere_23.material}
//           position={spherePositions.sphere23}
//           rotation={[0.419, -0.406, -0.726]}
//         />
//         <mesh
//           geometry={nodes.Sphere_25.geometry}
//           material={nodes.Sphere_25.material}
//           position={spherePositions.sphere25}
//           rotation={[-0.17, 0.614, -0.866]}
//         />
//       </group>
//     </group>
//   );
// }
// function App() {
//   return (
//     <>
//     {/* <div onScroll={handleScroll}> */}
//       <Canvas  >

//         <ambientLight  intensity={0.5} />
//         <directionalLight color="#005b96" metalness={0.9} roughness={0.5} position={[15, 2, 40]} />
// <directionalLight color="#BB0A21" metalness={0.9} roughness={0.1} />
// <meshStandardMaterial color=" #BF211E" metalness={1.5} roughness={0.5} />
// <pointLight position={[0, 0, 0]} intensity={2} />
// <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={0.5} />
// <EffectComposer>
//   {/* <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={0.5} /> */}
//   <Vignette eskil={false} offset={0.1} darkness={1.1} />
// </EffectComposer>
//         <Suspense fallback={null}>
//           <OrbitControls />
//           {/* <mesh> */}
//             <Model />
//           {/* </mesh> */}
//           {/* <Environment preset="forest" /> */}
//         </Suspense>
//       </Canvas>
//       {/* </div> */}
// <div className="bg-black" >
//   <p>
//     l
//     l
//     l
//     ;
//     loremmmmmmmmmmmmmmmmmmmmmm<br/>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm<br/>mmmmmmmmmmmmmmmmmmmmmmmmm <br/> mmmmmmmmmmmmmmmmmmmmmmmm<br/>mmmmmmmmmmmmmmmmmmmmmmmmmm<br/>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm<br/>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
//   </p>
//   </div>      
  
//     </>
//   );
// }
// export default App;
// // useGLTF.preload('/assets/3d_model.gltf')
