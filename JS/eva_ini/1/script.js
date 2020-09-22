/*
Esta página tendrá un botón cuyo nombre será “Inicializa array”.
Al pulsar el botón se llamará a la función javascript “inicializar()”.

Esta función javascript solicitará 5 nombres mediante cuadros de diálogo que deberán ir apareciendo de uno en uno.
Deberá crearse un array vacío al que se irán añadiendo de uno en uno cada uno de los nombres introducidos.
Deberá controlarse que no se pueden introducir en el array nombres repetidos.

Si el nombre ya existe en el array deberá mostrarse una alerta indicando que ya existe y que debe introducir otro nombre.
Una vez introducidos los 5 nombres,
deberá mostrarse por consola la primera letra en mayúscula de cada uno de los nombres introducidos en el array ordenadas por orden alfabético.
*/

let nombres = []; 
const maxNombres = 5;

function inicializar() {
    //pedir los 5 nombres
    for (let cont = 0; cont < maxNombres; cont++) {

        //variable que guarda el nombre solicitado por pantalla
        let nomb;

        //se pide el nombre
        nomb = prompt("Introduce nombre. (" + (cont + 1) + " de " + maxNombres + ")");

        //mientras el nombre solicitado exista, se volverá a pedir (hasta que no exista).
        while (existeNombre(nomb) === true) {
            nomb = prompt("El nombre ya existe, introduce otro nombre. (" + (cont + 1) + " de " + maxNombres + ")");
        }

        //una vez comprobado que el nombre es único, se guarda en el array.
        nombres[cont] = nomb;

    }

    //se ordena el array de nombres
    nombres.sort();


    console.log("SUBSTR");
    //imprimir por consola el array de nombres
    for (let i = 0; i < nombres.length; i++) {

        //se muestra la primera letra del nombre, junto al nombre completo
        console.log(nombres[i].charAt(0).toUpperCase() + nombres[i].substr(1));
        
    }

    console.log("\nSLICE");
    //imprimir por consola el array de nombres
    for (let i = 0; i < nombres.length; i++) {
        //se ordena el array de nombres
        nombres.sort();

        //se muestra la primera letra del nombre, junto al nombre completo        
        console.log(nombres[i].charAt(0).toUpperCase() + nombres[i].slice(1));
    }

}


function existeNombre(name) {
    let encontrado = false;

    for (let i = 0; i < nombres.length && encontrado !== true; i++) {
        if (name === nombres[i]) {
            encontrado = true;
        }
    }

    return encontrado;
}
