export default /* glsl */ `
uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

vec4 rgb(float r, float g, float b) {
    return vec4(r/255.0, g / 255.0, b / 255.0, 1.0 );
}

void main()
{
    vec2 point = fract(vUv * 0.51 + uTime*0.005);

    vec4 tl = rgb(251.0, 41.0, 212.0);
    vec4 tr = rgb(0.0, 255., 244.);
    vec4 bl = rgb(150.0, 155., 0.);
    vec4 br = rgb(131.0, 144., 255.);

    vec4 textureColor = texture2D(uTexture, point);

    float displacementX = mix(-0.5, 0.5, textureColor.r + cos(uTime * 0.05));
    float displacementY = mix(-0.25, 0.5, textureColor.g + sin(uTime * 0.15));

    vec4 finalColor =  mix(
    mix(tl, tr, vUv.x+ displacementX), 
    mix(bl,br, vUv.x - displacementY), 
    vUv.y + displacementY);


    // vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = finalColor;
}
`
