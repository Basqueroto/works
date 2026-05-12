import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {LowTree} from "./LowTree.jsx";

export default function PlantExperience() {
    return (
        <Canvas camera={{position:[0,0,15], fov: 45}}>
            <ambientLight intensity={0.2} color="#ffffff" />
            <directionalLight postion={[5,5,5]}/>

            <OrbitControls/>
            <group position={[0, -4, 0]}>
                <LowTree></LowTree>
            </group>
        </Canvas>
    )
}