import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Sphere from './Sphere'
import Background from './Background'
import { EffectComposer } from '@react-three/postprocessing'

const CanvasContainer = () => {
  return (
    <CanvasContainerWrapper>
      <Canvas>
        <color args={['#191817']} attach='background' />
        {/* <Sphere /> */}
        <OrbitControls />
        <EffectComposer>
          <Background />
        </EffectComposer>
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

export default CanvasContainer
