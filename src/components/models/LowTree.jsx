import React from 'react'
import { useGLTF } from '@react-three/drei'

export function LowTree(props) {
  const { nodes, materials } = useGLTF('/models/low-poly_tree.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Trunk_Trunk_0.geometry} material={materials.Trunk} position={[0, 98.735, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Leaves_Leaves_0.geometry} material={materials.Leaves} position={[165.433, 600.867, 80.251]} rotation={[-0.68, -0.37, 0.691]} scale={63.457} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/low-poly_tree.glb')
