import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from '../shaders/vertex'
import fragmentShader from '../shaders/fragment'
import texture from '../assets/texture.jpg'

const SphereMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.TextureLoader().load(texture),
  },
  vertexShader,
  fragmentShader
)

export default SphereMaterial
