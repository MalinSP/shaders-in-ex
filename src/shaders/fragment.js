export default /* glsl */ `
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying vec2 vUv;
void main()
{
 
    gl_FragColor = vec4(vUv.x + uTime,0.0,0.0, 1.0);
}
`
