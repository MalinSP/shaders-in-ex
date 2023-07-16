import React, { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import ShaderMaterialComp from './ShaderMaterialComp'
import * as THREE from 'three'

//extend({ ShaderMaterialComp })

const Sphere = () => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh>
      <planeGeometry args={[5, 5]} />
      <shaderMaterialComp ref={ref} />
    </mesh>
  )
}

export default Sphere
