import { shaderMaterial } from '@react-three/drei'
import vertexShader from '../shaders/vertex'
import fragmentShader from '../shaders/fragment'
import texture from '../assets/texture2.jpg'
import * as THREE from 'three'

const ShaderMaterialComp = shaderMaterial(
  { uTime: 0, uTexture: new THREE.TextureLoader().load(texture) },
  vertexShader,
  fragmentShader
)

export default ShaderMaterialComp
