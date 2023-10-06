// El switch es otro condicional 
/* Funciona por casos, si un caso no es verdad 
entonces se ejecuta el siguiente caso */
var numero = 1;

switch(numero){
    // se validan los casos 
    case 1: 
        console.log("soy uno");
        // si este caso se cumple entra al break y se sale 
        // del suwitch
        break;
    case 10: 
        console.log("soy un 10! marica");
        break;
    case 100:
        console.log("nada por aqui no fue soy un 100!");
        break;
    /*  En caso que si ningun caso se cumpla 
        entonces pasara que entra al default como un 
        else */
    default:
        // ya no se tiene que validar nada 
        /* entra a negativo  */
        console.log("no hay ningun caso")
}

/* El break es importante por que o sino no validaria  */

function solution(article) {
    // Tu código aquí 👈
    switch(article){
        case "computadora":
            //console.log("Con mi computadora puedo programar usando JavaScript");
            return "Con mi computadora puedo programar usando JavaScript";
            break;
        case "celular":
            //console.log("En mi celular puedo aprender usando la app de Platzi");
            return "En mi celular puedo aprender usando la app de Platzi";
            break;
        case "cable":
            //console.log("¡Hay un cable en mi bota!");
            return "¡Hay un cable en mi bota!";
            break;
        default:
            return "Artículo no encontrado";
            //console.log("Articulo no encontrado");

    }
}

/* Correccion codigo de arriba */
/*  */

function solution(article) {
    // Tu código aquí 👈
    switch(article){
        case "computadora":
            console.log("Con mi computadora puedo programar usando JavaScript");
            break;
        case "celular":
            console.log("En mi celular puedo aprender usando la app de Platzi");
            break;
        case "cable":
            console.log("¡Hay un cable en mi bota!");
            break;
        default:
            console.log("Articulo no encontrado");

    }
}

