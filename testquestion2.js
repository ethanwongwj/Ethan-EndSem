let pokemons = ["Pikachu" , "Raichu" , "Bulbasaur" , "Mewtwo" , "Charizad"];
let yPos;
function setup() {
    createCanvas(200,300);
    background("blue");
    textSize(20);
    textAlign(HORIZONTAL,VERTICAL);
    for(let i = 0 ; i < 5 ; i++ ) {
        text( 100 , yPos , pokemons[i] );
    }
}