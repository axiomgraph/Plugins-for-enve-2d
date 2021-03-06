// Opengl version 3.3
#version 330 core

layout(location = 0) out vec4 fragColor;

in vec2 texCoord;

uniform sampler2D texture;
uniform float size;
uniform float x;
uniform float y;
void main(void) {
    
    float dx = x*(size/512);
    float dy = y*(size/512);
    // Magic Happens here
    vec2 coord = vec2(dx*floor(texCoord.x/dx),dy*floor(texCoord.y/dy));
    if (size <0.000001f){
        fragColor = texture2D(texture,texCoord);
    }
    else {
    fragColor = texture2D(texture, coord); 
    }
   

}
