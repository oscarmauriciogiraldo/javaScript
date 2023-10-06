//Que son las funciones
/* Son un conjunto de sentencias, que se pueden utilizar para 
realizar ciertas acciones con las variables o valores que guardamos en las variables.
Se pueden ver como procesdimientos o tareas, el conjutno de sentencias que se tienen dentro de la 
funcion para hacer siertos pasops o calculos: 
los cuales pueden ser: para poder regresar un valor 
validar ciertos datos, o generar algun valor o alguna cosa
 */

// hay dos tipos de funciones 

//Funciones declarativas

// se utiliza la palabra reservada de javScript function

function miFuncion(){
    //  las funciones declarativas guarda ciertos valores
    //Se utiliza el nombre de la fucnion para guardar un espacio
    // en memoria para guardar el calculo o la operacion que se este 
    //haciendo dentro de la funcion
    return 3;
}

//  Funcion de Expresion
// Tambien se conocen como funciones anonimas
var miFuncion = function(a, b){
    //una variable que esta guardando una funcion 
    return a + b; // Como no se estan declarando variables 
    // entonces por el momento son valores nullos
    // las funciones utilizan parametos
}
miFuncion();

