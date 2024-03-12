"use client"
// import { motion, useScroll } from "framer-motion"
import { gsap } from 'gsap'
import * as THREE from 'three';

import { Suspense, useRef , useState ,useEffect} from 'react'
import { Canvas  , useFrame} from '@react-three/fiber'
import {OrbitControls , useGLTF , PerspectiveCamera , OrthographicCamera ,   } from '@react-three/drei'


function Model(props) {
  
    useEffect(() => {
        
        const handleScroll = () => {
          if (groupRef.current) {
            // const positionX = gsap.utils.mapRange(
            //     0, // Start of the scroll range
            //     window.innerHeight, // End of the scroll range
            //     -100, // Starting position on the x-axis
            //     100, // Ending position on the x-axis
            //     window.scrollY
            //   );
            //  groupRef.current.rotation.x -= window.scrollY * 0.001; // Rotate on X-axis based on scroll position
            gsap.to(groupRef.current.rotation, {
                y: window.scrollY * 0.005, // Adjust the factor for rotation speed
                duration: 1, // Adjust the animation duration
                ease: 'power2.out', // Use a power2 easing for a more natural feel
        
              });
              
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const groupRef = useRef();  // Add this line to create the ref
 const { nodes, materials } = useGLTF('/assets/lopoly_dna_GLTF.gltf');
//  useFrame(() => {
//     if (groupRef.current) {
//       // Rotate the model in all three dimensions
//     //   groupRef.current.rotation.x += 0.005;
//       groupRef.current.rotation.y += 0.000
//     //   groupRef.current.rotation.z += 0.005;
//     }
//   });
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    return (
        // rotation={[0, Math.PI / 2, 0]}
    <group ref={groupRef} {...props} dispose={null} >
    <group {...props} dispose={null}>
      <group scale={0.004} > 
        <group position={[261.789, -168.767, 148.756]} rotation={[0, 0, -0.587]} scale={20}>
          <mesh geometry={nodes.DNA3.geometry} material={nodes.DNA3.material}>
          
            <group position={[-16.387, 3.191, -3.472]} rotation={[0, 0, 0.436]} scale={0}>
            <mesh geometry={nodes.Sphere_CTRL.geometry}>
                  <meshStandardMaterial
                    metalness={5} // Adjust the metalness property for shininess
                    roughness={2} // Adjust the roughness property for shininess
                  />
                </mesh>            </group>
            <group position={[-14.046, 2.207, -0.531]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_1.geometry} material={nodes.Sphere_CTRL_1.material} scale={0.7} />
            </group>
            <group position={[-12.146, -4.047, 1.374]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_2.geometry} material={nodes.Sphere_CTRL_2.material} scale={0.7} />
            </group>
            <group position={[-18.681, 2.405, -1.936]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_3.geometry} material={nodes.Sphere_CTRL_3.material} scale={0.7} />
            </group>
            <group position={[-19.751, -0.104, 3.223]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_4.geometry} material={nodes.Sphere_CTRL_4.material} scale={0.7} />
            </group>
            <group position={[-22.992, -0.144, 3.223]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh  geometry={nodes.Sphere_CTRL_5.geometry} material={nodes.Sphere_CTRL_5.material} scale={0.7} />
            </group>
            <group position={[-11.77, -2.446, -0.88]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_6.geometry} material={nodes.Sphere_CTRL_6.material} scale={0.7} />
            </group>
            <group position={[-11.726, 4.546, 0.56]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_7.geometry} material={nodes.Sphere_CTRL_7.material} scale={0.7} />
            </group>
            <group position={[-15.51, -3.179, 0.632]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_8.geometry} material={nodes.Sphere_CTRL_8.material} scale={0.7} />
            </group>
            <group position={[-14.663, -1.281, -0.245]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_9.geometry} material={nodes.Sphere_CTRL_9.material} scale={0.7} />
            </group>
            <group position={[-17.83, 0.639, 0.03]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_10.geometry} material={nodes.Sphere_CTRL_10.material} scale={0.7} />
            </group>
            <group position={[-18.689, -3.039, 2.401]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_11.geometry} material={nodes.Sphere_CTRL_11.material} scale={0.7} />
            </group>
            <group position={[-15.629, -2.552, 3.192]} rotation={[0, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_12.geometry} material={nodes.Sphere_CTRL_12.material} scale={0.7} />
            </group>
            <group position={[-21.505, 1.939, -2.915]} rotation ={[1, 0, 0.436]} scale={0}>
              <mesh geometry={nodes.Sphere_CTRL_13.geometry} material={nodes.Sphere_CTRL_13.material} scale={0.7} />
            </group>
          </mesh>
          <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
        </group>
        <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={35} position={[0, 20, 513.86]} rotation={[-0.03, 0.023, 0.001]} />
      
        <OrthographicCamera makeDefault={false} far={100000} near={0} position={[-965.593, -1742.45, 188.687]} rotation = {[1.569, -0.629, 1.568]} />
      </group>
    </group>
    </group>
  )
}
function App() {
   
  // for scrolling purpose
  //  const materials = useRef(null);
  //   const{scrollYprogress} = useScroll({
  //     target: materials ,
  //     offset : ['start end ', 'end start' ]
  //   })
  // ref = {materials}
  const gradientStyle = {
    // background: 'linear-gradient(180deg, #FFD2DB 0%, #FF9BA8 100%)',
    // width: '100vw',
    // height: '100vh',
  };
    return (
        <>
      <div className="App "style={{gradientStyle}} >
         {/* <div className='wrapper'> */}
        <Canvas style={{height:'40vw', width:'45vw'}} >  
        {/* camera={{ position: [30, 10, 40], fov: 40 }} */}

        <OrbitControls
          enablePan={false}
          enableZoom={false}
        //   minPolarAngle={Math.PI / 4}
        //   maxPolarAngle={Math.PI / 1.5}
        />
          <Suspense fallback = {null}>
            <ambientLight intensity={0.66}/>
            <directionalLight color="pink" position={[5, 2, 40]} />
            <mesh > 
            <Model/>
            
            </mesh>
            
            
            </Suspense>

            </Canvas>
            <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro placeat saepe nam neque fugit debitis quasi ratione illum sapiente maxime, veniam, dicta voluptas facilis voluptate, vel a? Assumenda repellendus dignissimos neque sit. Nesciunt, aut molestias doloribus, aliquam mollitia esse inventore libero a minima cum iste ipsum sit saepe voluptates rem, quasi fugit? Totam assumenda rem exercitationem quibusdam esse reiciendis explicabo commodi nam molestiae sint debitis eveniet similique laudantium autem dolorem non quo ex omnis labore, pariatur tempore corrupti? Debitis, non vero ratione exercitationem excepturi provident officiis. Nam eum vitae doloremque tempora maxime nemo ipsum, velit, sunt esse animi quo fugiat assumenda praesentium voluptate debitis eveniet laboriosam, officiis excepturi. Quis et voluptate ullam repellendus dolore necessitatibus tempore impedit, optio nobis cumque nostrum aliquam, similique, vitae reprehenderit mollitia voluptas accusamus totam. Nulla atque accusamus, similique quos explicabo totam, illo ab aliquam nisi tempora voluptatibus cumque quaerat facilis asperiores assumenda nihil aspernatur sed aut consectetur id eius minus, adipisci provident voluptatum. Esse, incidunt accusamus ipsum similique ipsa animi quibusdam odit quasi veritatis sapiente beatae itaque maxime accusantium aliquid velit quod amet vitae excepturi aspernatur quo repudiandae reprehenderit sint? Totam consectetur atque, vel velit voluptas omnis delectus quaerat illo aut aspernatur asperiores, ipsa est, laboriosam vitae libero fugiat odio amet reprehenderit debitis mollitia cum quae maxime quam! Possimus numquam provident deserunt quis inventore quod iusto? Veniam earum commodi architecto explicabo voluptates ut eveniet. Necessitatibus neque tempore non dolor consequatur temporibus animi, aspernatur voluptas. Adipisci quisquam, consequuntur quo repellendus praesentium veritatis tempora molestiae recusandae amet facilis odio quod voluptatem, veniam nam ratione asperiores natus dolore quidem eum aspernatur numquam doloribus qui aliquam! Temporibus sequi tenetur quisquam quasi laudantium ratione alias repellat consectetur hic, possimus nobis assumenda repellendus. Nisi mollitia animi enim, nam obcaecati necessitatibus culpa in natus repellendus voluptatibus. Quam quaerat incidunt, non quia quasi nam in veritatis dolores, molestias, quisquam architecto libero. Sunt esse sint culpa beatae quisquam eum, sed soluta inventore rerum asperiores voluptatibus quam voluptatum aperiam eligendi nam facere eaque magnam unde autem error necessitatibus aliquid. Maxime, fugit consequatur animi accusantium dolores totam officiis hic pariatur eveniet provident at harum voluptates placeat aspernatur et! Eligendi impedit debitis aliquam autem commodi architecto iusto dignissimos alias. Incidunt eum quia aliquid velit inventore perferendis ea fuga quaerat distinctio debitis non tempora maxime neque ex sed natus saepe, laudantium iusto! Amet reiciendis, soluta, deserunt autem porro ipsum odio facilis error quos pariatur quia. Ex laudantium sapiente quod necessitatibus consectetur beatae architecto alias quidem earum inventore. Nostrum quis earum corporis voluptate quod, ex similique illo error iste perferendis vero tempora autem eligendi vitae veniam adipisci officia minus nulla exercitationem dolor magnam fuga nisi dicta magni. Veniam exercitationem repellendus quasi quidem nemo illo eius sint sit. Ipsam a est hic deleniti architecto harum neque temporibus quia ad sunt deserunt iure obcaecati magni in laborum, numquam praesentium distinctio. Nihil iure ipsum exercitationem eligendi deleniti, obcaecati voluptate nesciunt et possimus, quis, quas soluta vero eius tempora hic. Obcaecati consequatur iste, quae quibusdam molestiae asperiores error cum est consectetur rerum a repellat, accusantium nesciunt odio velit! Similique, pariatur magnam! Dolorem porro molestiae blanditiis eaque doloribus voluptates minima quas sunt possimus ratione nemo perspiciatis placeat fugit, delectus sed quis. Vitae dolorem perferendis esse! Minima harum aspernatur ab est similique, officiis labore voluptatibus veritatis inventore aliquid? Doloribus quibusdam temporibus, ipsam repellendus neque laudantium? Fugit vero cum natus obcaecati eos, perferendis dolor possimus cumque laborum corrupti libero dolore voluptatibus quis expedita dolores explicabo, illo nihil! Aliquam reprehenderit at, explicabo quas quis voluptate animi sunt facilis ipsum ipsam earum, corrupti deleniti placeat totam suscipit! Sapiente molestiae nesciunt ipsa doloribus voluptas quis! Porro suscipit, fugit, officiis placeat ullam hic illum cupiditate id magnam cumque dignissimos, amet velit quae! Reiciendis aperiam, nobis mollitia, illum consectetur numquam quia impedit pariatur exercitationem rem itaque doloribus! Obcaecati dignissimos, deserunt repellendus nisi nesciunt ducimus numquam iste similique fuga veritatis sapiente voluptas voluptates at. Quisquam vitae dolorem minus debitis nam! Quod iure blanditiis esse vitae fuga dolores cum sit et. Odio sunt rem omnis assumenda non itaque minima tempora eaque, mollitia ipsam. Illo ad corporis minima, rem eos odit ullam adipisci dolores, repellat modi ex? Cum, saepe dignissimos vero ad et optio a voluptatem praesentium fuga expedita nulla quae veritatis placeat enim soluta voluptates recusandae ab necessitatibus aperiam est, tenetur, suscipit sequi ex! Officiis et totam animi quisquam magnam illo eius quidem tempore eos minima! Nobis eius vero, exercitationem aut explicabo nisi distinctio corporis sint voluptatibus numquam minima. Itaque deserunt veritatis saepe atque enim eos architecto amet laudantium quam? Tenetur assumenda perspiciatis nisi illum tempore officia aliquam eos, neque magnam? Repellat labore maxime, reprehenderit, ipsam alias modi eos rem vel quisquam voluptate distinctio quibusdam cum deserunt reiciendis quasi sint harum delectus quis. Inventore maxime atque molestiae voluptates ut modi debitis nostrum consequatur facere natus eius, corporis, esse id ipsum veritatis error laborum quasi, dolorum ipsa. Repudiandae rem maxime expedita cupiditate explicabo error aperiam temporibus pariatur? Hic officia exercitationem adipisci neque accusamus perferendis voluptates et nesciunt fugit maiores unde nam, nobis reiciendis possimus illum ut est deleniti ullam molestias magni velit repellat? Voluptates nesciunt accusantium repudiandae aperiam nam incidunt non perferendis eos, suscipit earum nulla, quisquam facere quis illum corporis nihil! Totam impedit obcaecati harum numquam, aperiam magnam quasi quibusdam incidunt architecto distinctio et, nemo nesciunt officia dolores voluptatum quae laborum voluptatem dicta? Tempora cupiditate perferendis, delectus at laborum nemo libero aspernatur? Praesentium, dolorum iusto. Officia rerum architecto veritatis dignissimos, neque placeat cupiditate perferendis aliquam quidem sit, aliquid excepturi reprehenderit sapiente! Nobis eligendi deserunt nam, natus voluptatem accusamus excepturi libero quaerat placeat expedita incidunt velit sequi totam repellendus aliquid assumenda quia, nemo voluptatibus aperiam quod laboriosam! Obcaecati suscipit nihil nisi mollitia cumque, fuga tempora neque nesciunt alias itaque. Repellat illo iure magni ipsam pariatur adipisci assumenda! Distinctio ducimus blanditiis exercitationem perspiciatis, nihil, sapiente recusandae aspernatur illum repellat, doloremque hic quibusdam commodi corrupti voluptate nostrum esse. Illum, adipisci laborum neque suscipit magni sint ad dolore voluptatum. Repudiandae in nihil voluptates praesentium laboriosam, id excepturi at nam? Autem est magnam illo nobis. Distinctio, omnis! Ipsum?</p></div>
        {/* </div> */}
  
      </div>
      </>
    );
  }
  
  export default App;