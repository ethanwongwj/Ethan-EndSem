let xPos, xSpeed;
let diameter = 50;

function setup(){
    createCanvas(600, 400);
    xPos = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw() {
    background("lightblue");
    circle( xPos , height/2 , diameter);
    xPos = xPos + xSpeed;
    if( xPos > ( width - 25 ) ) {
        xSpeed = -5;
    }
    if( xPos < ( width - 575 ) ) {
        xSpeed = 5;
    }
}