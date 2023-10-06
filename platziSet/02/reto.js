/*  Reto: Juego de piedra papel o tijera
    1: identificar las variables --> piedra, papel o tijera */

/* Variables */

var manoUno = "piedra";

var manoDos = "Papel";

var manoTres = "Tijera";

/* Funcion 
    En la funcion al momento de llamarse se pasa el parametro
    de la variable con la cual voy a jugar, es decir si es piedra 
    papel o tijera: es decir juego(manoUno); la funcion devolvera 
    la validacion de acuerdo a la variable, y esta debolvera si gane 
    o perdi.

    Recomendado empezar por la validacion 

*/

function juego(user){
    //var juegoCpu = "Pepel";
    var juegoCpu;
    if(juegoCpu === manoUno || juegoCpu === manoDos || juegoCpu === manoTres){
        //console.log("empate")
        if(user === manoTres){
            console.log("perdiste")
        }
    }
}


var manoUno = "piedra";

var manoDos = "Papel";

var manoTres = "Tijera";


function juego(user){
    //var juegoCpu = "Pepel";
    var juegoCpu = manoDos;
    if (juegoCpu === user) {
        console.log("empate");
    }else if (user === manoUno) {
        console.log("perdiste");
    }else{
        console.log("ganaste");
    }
    
}

