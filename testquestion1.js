let xPos, xSpeed;

function setup(){
    createCanvas(600, 400);
    xPos = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw() {
    background("lightblue");
    circle( xPos , height/2 , 50);
    xPos += xSpeed;
    if(xPos = width - 50 ) {
        xSpeed = -5
    }
    if(xPos = 0 ) {}
}