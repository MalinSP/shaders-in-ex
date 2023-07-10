import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import SphereMaterial from './SphereMaterial'
import { extend } from '@react-three/fiber'

extend({ SphereMaterial })

const Sphere = () => {
  const sphereMaterialRef = useRef()
  const meshRef = useRef()

  useFrame((state, delta) => {
    sphereMaterialRef.current.uTime += delta
    // meshRef.current.rotation.x += Math.sin(delta * 0.05)
    // meshRef.current.rotation.y += Math.sin(delta * 0.15)
  })
  return (
    <mesh scale={1.1} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <sphereMaterial ref={sphereMaterialRef} />
    </mesh>
  )
}

export default Sphere
