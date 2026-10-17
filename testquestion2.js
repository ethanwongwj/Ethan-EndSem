let pokemons = ["Pikachu" , "Raichu" , "Bulbasaur" , "Mewtwo" , "Charizad"];
let yPos = 90;
function setup() {
    createCanvas(200,300);
    background("black");
    fill("pink");
    textSize(20);
    textAlign( CENTER , CENTER );
    for(let i = 0 ; i < 5 ; i++ ) {
        text( pokemons[i] , 100 , yPos );
        yPos += 30;
    }
}