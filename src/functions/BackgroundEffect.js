import { Effect } from 'postprocessing'
import * as THREE from 'three'
import texture from '../assets/texture2.jpg'
import { Uniform } from 'three'

const fragmentShader = /*glsl */ `

uniform sampler2D uTexture;
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 vUv = vUv * 2.0;
    vUv -=  1.0;
  float radius = length(vUv);
    float angle = atan(vUv.y, vUv.x);
   
   angle *= 12.0;
   angle /= PI * 2.0;    
   
   if (mod(angle, 2.0) >= 1.0) {
    angle = fract(angle);
    } else {
    angle = 1.0 - fract(angle);
    }
 
   angle += time * 0.25;
    angle /= 12.0;
    angle *= PI * 2.0;


   vec2 point2 = vec2(radius * cos(angle), radius * sin(angle));
   point2 = 1.0 - fract(point2);
    point2 = fract(point2);
   vec4 textureColor = texture(uTexture, point2);   
   outputColor = textureColor;
	// outputColor = vec4(sin(time + vUv.x), 0.0, 0.0, 1.0);

}
`
export default class BackgroundEffect extends Effect {
  constructor() {
    super('BackgroundEffect', fragmentShader, {
      uniforms: new Map([
        ['uTexture', new Uniform(new THREE.TextureLoader().load(texture))],
      ]),
    })
  }
}
