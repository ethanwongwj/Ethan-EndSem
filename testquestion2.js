let pokemons = ["Pikachu" , "Raichu" , "Bulbasaur" , "Mewtwo" , "Charizad"];
let yPos = 50
function setup() {
    createCanvas(200,300);
    background("black");
}
function draw() {
    fill("pink");
    textSize(20);
    textAlign( CENTER , CENTER );
    for(let i = 0 ; i < 5 ; i++ ) {
        Text( 100 , yPos , pokemons[i] );
        yPos += 50
    }
}