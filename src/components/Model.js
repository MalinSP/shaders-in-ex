import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import SphereMaterial from './SphereMaterial'
import { extend } from '@react-three/fiber'
import Sphere from './Sphere'

extend({ SphereMaterial })

const Model = () => {
  return (
    <CanvasContainerWrapper>
      <Canvas>
        <color args={['#191817']} attach='background' />
        <Sphere />
        <OrbitControls />
      </Canvas>
    </CanvasContainerWrapper>
  )
}

const CanvasContainerWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default Model
