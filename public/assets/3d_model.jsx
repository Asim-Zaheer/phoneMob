

// import React, { useRef } from 'react'
// import { useGLTF, OrthographicCamera } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/3d_model.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <OrthographicCamera makeDefault={false} far={100000} near={0} position={[0, -1000, 0.1]} rotation={[1.571, 0, 0]} />
//         <mesh geometry={nodes.Trigger.geometry} material={nodes.Trigger.material} rotation={[0.017, 0, 0]} />
//         <mesh geometry={nodes.Sphere_0.geometry} material={nodes.Sphere_0.material} position={[-125.191, 134.508, -62.016]} rotation={[0.941, -0.834, 1.329]} />
//         <mesh geometry={nodes.Sphere_1.geometry} material={nodes.Sphere_1.material} position={[-187.032, 41.171, -35.17]} rotation={[1.397, -0.573, 1.647]} />
//         <mesh geometry={nodes.Sphere_2.geometry} material={nodes.Sphere_2.material} position={[-115.344, -49.344, 133.656]} rotation={[1.503, 0.422, 0.451]} />
//         <mesh geometry={nodes.Sphere_3.geometry} material={nodes.Sphere_3.material} position={[-104.572, 81.956, 112.494]} rotation={[-1.001, -0.671, -1.191]} />
//         <mesh geometry={nodes.Sphere_4.geometry} material={nodes.Sphere_4.material} position={[26.17, 22.65, 181.656]} rotation={[1.524, 0, 0]} />
//         <mesh geometry={nodes.Sphere_5.geometry} material={nodes.Sphere_5.material} position={[64.405, 179.801, 19.416]} rotation={[-0.695, -1.045, -0.955]} />
//         <mesh geometry={nodes.Sphere_6.geometry} material={nodes.Sphere_6.material} position={[-51.344, 169.656, 78.656]} rotation={[0.576, 0, 0.299]} />
//         <mesh geometry={nodes.Sphere_7.geometry} material={nodes.Sphere_7.material} position={[-30.301, -58.213, -178.041]} rotation={[-1.787, -0.592, 0.091]} />
//         <mesh geometry={nodes.Sphere_8.geometry} material={nodes.Sphere_8.material} position={[-161.344, -85.344, -14.344]} rotation={[-3.064, 0.214, 1.149]} />
//         <mesh geometry={nodes.Sphere_9.geometry} material={nodes.Sphere_9.material} position={[50.374, 62.176, -156.33]} rotation={[-1.225, -0.561, -0.32]} />
//         <mesh geometry={nodes.Sphere_10.geometry} material={nodes.Sphere_10.material} position={[-1.344, 154.922, -69.344]} rotation={[-0.449, 0, 0]} />
//         <mesh geometry={nodes.Sphere_11.geometry} material={nodes.Sphere_11.material} position={[11.82, 130.575, 157.446]} rotation={[1.215, -1.212, 0.111]} />
//         <mesh geometry={nodes.Sphere_13.geometry} material={nodes.Sphere_13.material} position={[91.969, -37.192, -144.406]} rotation={[-1.709, 0.012, -0.351]} />
//         <mesh geometry={nodes.Sphere_14.geometry} material={nodes.Sphere_14.material} position={[-106.344, 42.656, -155.344]} rotation={[-1.212, -0.097, 0.394]} />
//         <mesh geometry={nodes.Sphere_15.geometry} material={nodes.Sphere_15.material} position={[-97.735, -139.678, -91.367]} rotation={[-0.868, -0.957, 1.809]} />
//         <mesh geometry={nodes.Sphere_16.geometry} material={nodes.Sphere_16.material} position={[7.656, -167.179, -77.493]} rotation={[-2.85, 0, 0]} />
//         <mesh geometry={nodes.Sphere_17.geometry} material={nodes.Sphere_17.material} position={[48.262, -145.18, 45.859]} rotation={[-1.737, 1.07, -1.548]} />
//         <mesh geometry={nodes.Sphere_18.geometry} material={nodes.Sphere_18.material} position={[-24.39, -166.3, 98.521]} rotation={[-0.48, -0.676, 3.133]} />
//         <mesh geometry={nodes.Sphere_19.geometry} material={nodes.Sphere_19.material} position={[109.656, -140.344, -52.344]} rotation={[0.266, 0.288, -2.336]} />
//         <mesh geometry={nodes.Sphere_20.geometry} material={nodes.Sphere_20.material} position={[-99.532, -17.081, 142.606]} rotation={[-0.643, -0.525, 0.558]} />
//         <mesh geometry={nodes.Sphere_21.geometry} material={nodes.Sphere_21.material} position={[180.656, -10.344, -66.344]} rotation={[-0.055, 0.527, -1.462]} />
//         <mesh geometry={nodes.Sphere_22.geometry} material={nodes.Sphere_22.material} position={[158.46, 12.388, 64.463]} rotation={[-0.742, -0.138, -1.628]} />
//         <mesh geometry={nodes.Sphere_23.geometry} material={nodes.Sphere_23.material} position={[114.656, 125.656, 110.656]} rotation={[0.419, -0.406, -0.726]} />
//         <mesh geometry={nodes.Sphere_25.geometry} material={nodes.Sphere_25.material} position={[135.216, 110.037, -64.054]} rotation={[-0.17, 0.614, -0.866]} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/3d_model.gltf')
