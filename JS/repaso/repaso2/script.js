//utilizar función flecha
const anadir = document.getElementById("but_add");
anadir.addEventListener('click', () => {

})


function comprobarDatos() {
    let resultado = 0;

    //variable que guarda el nombre del elemento
    let newElemento = document.getElementById("newElem").value;

    //variable que guarda la posición del elemento
    let posElemento = document.getElementById("posElem").value;

    if (newElemento === "") {
        resultado += 1;
    }

    if (posElemento === "") {
        resultado += 1;
    }

    return resultado;
}

function comprobarPos() {
    let resultado = 0;

    //almacenamos la longitud de la lista
    let listaLen = document.getElementsByTagName("li").length;

    //variable que guarda la posición del elemento
    let posElemento = document.getElementById("posElem").value;

    //comprobamos si la posición del elemento está vacía
    if (posElemento === "") {
        resultado += 1;
    }

    //comprobamos si la posición de elemento es correcta
    if ((posElemento > listaLen) || (posElemento < 1)) {
        alert("ERROR. La posición no es correcta");
    }

    return resultado;
}




function addElem() {

    //se comprueba que no hay campos vacíos
    if ((comprobarDatos() !== 0) && (comprobarPos() !== 0)) {
        alert("ERROR. Comprueba los datos introducidos");
    } else {

        //variable que guarda la lista
        let lis = document.getElementById("lista");

        //sin parseInt lo detecta como texto
        let posE = parseInt(document.getElementById("posElem").value);

        //variable que guarda el elemento de la lista en la posición indicada
        let addE = document.getElementsByTagName("li")[posE - 1];
        
        //variable que crea un elemento en la lista
        let newLi = document.createElement("li");

        //variable que guarda el valor del elemento a introducir
        let elem = document.getElementById("newElem").value;

        //variable que crea un nuevo nodo de texto
        let content = document.createTextNode(elem);

        //se incluye el contenido (texto) al elemento creado antes
        newLi.appendChild(content);

        //se inserta el elemento en la posición indicada
        lis.insertBefore(newLi, addE);
    }
}

function delElem() {

    //se comprueba que la posición del elemento a borrar no esté vacía
    if (comprobarPos() !== 0) {
        alert("ERROR. Comprueba la posición del elemento");
    } else {

        //variable que guarda la lista
        let lis = document.getElementById("lista");

        //sin parseInt lo detecta como texto
        let posE = parseInt(document.getElementById("posElem").value);

        //elemento a borrar
        let delE = document.getElementsByTagName("li")[posE - 1];

        //se borra el elemento de la lista
        lis.removeChild(delE);
    }

}