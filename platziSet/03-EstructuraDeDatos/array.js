/* Crear un array 
    en esta variable con este nombre guarda todo su valor en la memoria que 
    que ya se ha reservado para este nombre */
var frutas = ["manzana", "banano", "cereza", "fresa"];
//Lista de frutas
console.log(frutas.length); 

/* Metodos en los arrays que nos ayudan a mutar

vamos a afrefar mas elementos al array*/

var masfrutas = frutas.push();
// push agrega o empuja un nuevo elemento al final de la lista o del array

var ultimo = frutas.pop();
// elimina el ultimo elemento del array


var nuevaLongitud = frutas.unshift();
// agrega un elemento al inicio de array 

var borrarfruta = frutas.shift();
//Elimina el elemento en la primera posicion 

var posicion = frutas.indexOf();
// Trae la posicion de un elemento en el array

/*  reto detecta el elemento impostor  */
export function solution(arraySecreto) {
    // Tu código aquí 👈
    return (typeof arraySecreto[0] === "string" ? true : false)
    
}

function solution(arraySecreto) {
    // Tu código aquí 👈
    //return (typeof arraySecreto[0] === "string" ? true : false);
    //return typeof arraySecreto[0] === "string";
    if(typeof arraySecreto[0] === "string"){
        return true; 
    }else{
        return false;
    };
}

/* Metodos para recoorrer lo elementos del array */
/* Looṕs o ciclos:
 los ciclos tienen una tarea espesifica .
 es decir un ciclo genera una funcion o una tarea espesifica
 y mientras dentro de este ciclo sea verdad o se cuimpla una condicion esta tarea 
 se repetira */


var estudiantes = ["Salomé", "Loreinis", "Oscar", "Sandra"];

function saludarEstudiantes(estudiante){
    //la funcion recibe un parametro que va a ser estudiante
    console.log(`Hola, ${estudiante}` )
}

//ciclo para saludar 
for(var i = 0; i<estudiantes.length; i++){
    /*  se genera una variable
        mientras la variable i sea menor a la longitud del array 
        la variable i se va a umentar */

    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

/*  Entonces : tenemos un array el cual tiene 4 elementos 
    La funcion tiene la tarea; y la tarea es saludar a los estudiantes
    y la forma de recorrer ese array para saludar a cada estuduantes 
    es con un ciclo for :
    que es un loop en el cual se hace una variable inicial, y 
    mientras esa variable se menor a la longitud del array 
    entonces llamra la funcion¿, y en esa funcion se manda 
    como parametro el array en la posicion de i 
*/

// otra forma 
// for con esteroides 
// ng for en angular 
for (var estudiante of estudiantes){
    /*  tenemos un array de estudiantes 
        aqui lo que se hace es que se llama un estudiante
        de ese array estudiantes
    */
   saludarEstudiantes(estudiante);
}


/*  Ciclo While  */

var empleados = ["Lorenis", "salomé", "Tommy"];

function saludarEmpleados(empleado){
    console.log(`hola, ${empleado}`);
}

/*  While : se ejecuita mientras la condicion 
    lo de andentro de la funcion se cumple 
*/

while(empleados.length > 0){
    //mientras se cumpla la condicion 
    //este codigo se va a ejecutar
    console.log(estudiantes);
    /*  */
    var empleado = empleados.shift();
    /* Shift es un metodo de mutacion  
    y lo que hace es que va ir sacando elementos
    del array cada que se cumpla un loop, 
    es decir el ciclo o  la condicion*/
    saludarEmpleados(empleado);


}


/* ####### #### DEsafio ### ######## */
/*  En este desafio tu funcion 
    recibira 3 paramtros : 
    Estudiantes[] --> array con varios estudiantes
    deathCount : numero entero
    nuevo: string con el nombre de un nuevo estudiante
    
    La funcion retornmara un array de elementos si 
    se cumplen las siguientes condiciones:

    si el parametro deathCount es mayor a 0
    entonces se retorna un array con los mismos elementos que 
    tenia el array estudiantes y agregando el elemento 
    nuevo al final (metodo push)

    Si el paramentro deathCount es mayor a 0 
    entonces se retorna un array con los mismo elementos 
    del array estudiantes, pero eliminando la cantidad 
    de elementos que indica en numero en la variable deathCount
    y agregando el elemento nuevo 
*/

var estudiantes1 = ["Salomé", "Loreinis", "Oscar", "Sandra"];
var deathCount;
var nuevo;

/* while(deathCount === 0){

} */
function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    while(deathCount === 0){
        estudiantes.push(nuevo);
    }

    return estudiantes;
}

// Seguir ejercitando esta parte
