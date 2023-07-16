const fragmentShader = /*glsl */ `
#define PI 3.1415926535897932384626433832795
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTime;

void main () {

 vec2 vUv = vUv * 2.0;
   
    vUv -=  1.0;
    
    // get angle and radius
    float radius = length(vUv);
    float angle = atan(vUv.y, vUv.x);
   
   angle *= 12.0;
   angle /= PI * 2.0;    
   
   if (mod(angle, 2.0) >= 1.0) {
    angle = fract(angle);
    } else {
    angle = 1.0 - fract(angle);
    }
 
   angle += uTime * 0.25;
    angle /= 12.0;
    angle *= PI * 2.0;



    vec2 point2 = vec2(radius * cos(angle), radius * sin(angle));
    point2 = 1.0 - fract(point2);
    point2 = fract(point2);
    
    vec4 color = texture(uTexture, point2);
    
    gl_FragColor = vec4(color);
}
`

export default fragmentShader
