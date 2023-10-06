/* Metodo para recorrer arrays */

var articulos = [
    /* Array de objetos */
    {nombre: "Bici", costo: 3000},
    {nombre : "tv", costo: 1000000},
    {nombre: "Libro", costo: 10000},
    {nombre: "computador", costo: 3000000},
    {nombre: "teclado", costo: 300000}
]

/* 
    Metodos para recorrer este array de objetos:
    1. Metodo : Filter : el filter ayuda a filtrar
    ciertas cosas, valida si algo es verdad o falso 
    y lo mete en un nuevo array, no medifica el array 
    actual 
*/

var articulosfiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 10000
});

articulosfiltrados

/*  
    2 Metodo Map: me ayuda a mapear ciertos elementos
 */

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulo

/*
    metodo find : este metodonos ayuda a encontrar 
    un elemento en el array
*/

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "computador";
});

/*
    metodo forEach: este metodo a difernecia de los anteriores 
    no genera un nuevo array, solo hace el filtrado sobre el array 
    que existe sin modificarlo 
 */


articulos.forEach(function(articulo){
    console.log(articulo.nombre);
    /* Regresa los nombres de los objetos 
    sin modificar el array */
});

/* 
    Metodo some : regresa una validsacion de verdadero o 
    falso para articulos que cumplan esa validacion 
*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 10000;
});