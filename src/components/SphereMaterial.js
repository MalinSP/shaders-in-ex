import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/ `
   void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}
  `,
  // fragment shader
  /*glsl*/ `
    uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }
  `
)

export default ColorShiftMaterial
