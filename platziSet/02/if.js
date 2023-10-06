// Las condicionales son unas reglas qeu se aplican para validar si algo es 
// verdadero o falso, para generar reglas
if(true){
    // en el if lo que se ponga en la condicion tine que ser verdad 
    //para que se ejecute lo que hay dentro del codigo
    console.log("Hola");
}else{
    //si es falso entonces de lo contrario que va a pasar
    console.log("Soy falso");
}

// Tambien existe otra forma de validar si algo es verdadero despues de la priumera 
//Condicion 


/* Vamos a validar si una persona es mayor de edad, entonces puede votar, 
    de lo contrario no puede votar, pero si tiene 18 años entonces es la primera
    vez que vota */

var edad = 18;
/* Nota: el === compara si el valor es estrictamente igual */

if(edad === 18){
    // en el if lo que se ponga en la condicion tine que ser verdad 
    //para que se ejecute lo que hay dentro del codigo
    console.log("Puede votar, sera tu primera votación");
}else if (edad > 18){
   /* Pero si es mayor de 18 años que tambien es una condicion verdadera para 
   mayor de edad */

    console.log("Puedes votar de nuevo");
}else {
    console.log("Aun no puedes votar")
}

/* Tenemos un operador ternario */
// sintaxis es como un if 
condition ? true : false;

var numero = 1;

// si numero es estrictamente igual a 1
var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno";

/* validacion  reto */

//var juegoCpu = "Pepel";
var juegoCpu;
if(juegoCpu === manoUno || juegoCpu === manoDos || juegoCpu === manoTres){
    //console.log("empate")
    if(user === manoTres){
        console.log("perdiste")
    }
}