var miAuto = {
    marca: "Ford",
    modelo: "Raptor",
    annio: 2023,
    //metodo del objeto
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
        // la variable this hace referencia al objeto como tal
    }
};

// y para acceder a la funcion entonces es 
miAuto.detalleDelAuto();

/* 
    Como generamos varios objetos  de 
    forma mas automatica, en el caso de tener 
    por ejemplo varios carros.
    la forma es con una funcion contructora.

    Se genera un template de este objeto,
    en donde se generan ciertas opcciones qeu son sus 
    parametros y sus propiedades en donde se generan nuevas instancias
    con un operador especial 
*/

/* La variable es la forma en la que guardamos un valor en 
memoria con el nombre de esa variable */

/* Vamos a iniciar con la funcion constructora
    las funciones son la forma de ejecutar tareas o procesos    
*/

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// forma de generar un objeto nuevo 
//con relacion a la funcion contructora
var autoNuevo = new auto("Ford", "raptor", 2020);

/*
    Reto:
    ya se sabe qeu es un loop o cilclos .
    objetos y funcion constructora 

    hacer una funcion constructora 
    y generar un ciclo para poder generar una lista de 30 carros 
    que se vayan construyendo solos

*/

function carro(MARCA, COLOR, MODELO, ANNIO){
    this.marca = MARCA;
    this.color = COLOR;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

// lista de datos vacia - array
var misAutos = [];

for(var i = 0; i < 30; i++){
    misAutos.push(new carro(marca, color, modelo, annio))
}

for(let i = 0; i < misAutos.length; i++){
    console.log(misAutos[i]);
}

/* 
    Reto Permiso para conducir.
    
    En este desafío vas a recibir un objeto car como 
    parámetro de la función solution.

    Este objeto puede contener diferentes propiedades. 
    Debes asegurarte de que tenga la propiedad 
    licensePlate (la placa del auto). Si sí la tiene, 
    devuelve el objeto original con la propiedad 
    drivingLicense como true. Si no la tiene, devuelve 
    el objeto original con la propiedad drivingLicense
    como false.
 */

export function solution(car) {
    // Tu código aquí 👈
  
    car.drivingLicense = Boolean(car.drivingLicense) === !Boolean(car.lincesePlate) ? true : false;
    return car;
  
    /*car.drivingLicense = Boolean(car.licensePlate);
    return car;*/
  
    /*
     function solution(car) {
    if (car.licensePlate === null || car.licensePlate === undefined) {
      car.drivingLicense = false;
    }
    else {
      car.drivingLicense = true;
    }
    return car;
  } 
     */
  
  }





