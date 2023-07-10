import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
// import SphereMaterial from './SphereMaterial'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import vertexShader from '../shaders/vertex'
import fragmentShader from '../shaders/fragment'

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  vertexShader,
  fragmentShader
)
extend({ PortalMaterial })

const Model = () => {
  return (
    <CanvasContainerWrapper>
      <Canvas>
        <color args={['#191817']} attach='background' />
        <mesh scale={1.1}>
          <sphereGeometry args={[1, 32, 32]} />
          <portalMaterial />
        </mesh>
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
