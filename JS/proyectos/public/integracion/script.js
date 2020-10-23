/* Utiliza el proyecto con Spring que has creado en el módulo de DWES para acceder consumirlo desde el frontend.

Desde el Frontend deberás crear un botón que realice una petición POST hacia el endpoint correspondiente de tu backend.
Deberás pasarle los valores necesarios (recomendado crear un formulario para enviar estos valores).

Creo otro botón que haga una petición GET al endpoint de tu proyecto backend para poder listar 
alguno de los datos de tu proyecto */


// Se define el objeto tabla
const tabla = document.getElementById('tablaListado');

// Se definen los botones del formulario
const botonListado = document.getElementById('botonListado');
const botonCrearProducto = document.getElementById('botonCrearProducto');
const botonBuscar = document.getElementById('botonBuscar');
const botonReset = document.getElementById('botonReset');

// Se define el desplegable que recoge los datos desde spring.
// El resto de desplegables están con valores a mano en index.html
const selectCategory = document.getElementById('selectCategory');

// Se definen los diferentes enlaces para realizar GET/POST
const urlGetList = "http://localhost:8080/netflix/products";
const urlPostMovie = "http://localhost:8080/netflix/products/movie";
const urlCategories = "http://localhost:8080/netflix/products/categories"



// Función que inserta las distintas opciones de categorías en forma de select (desplegable)
const mostrarCategorias = () => {

    // Se realiza Fetch (GET) para obtener las categorías.
    fetch(urlCategories)
        // Se obtiene promesa, tanto si el resultado es correcto o da error
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        // Se muestra resultado en formato JSON
        .then(res => res.json())
        .then(res => {
            // Se recorren todos los resultados
            for (let i = 0; i < res.length; i++) {
                // Se obtiene la categoría
                let cat = res[i];

                // Se crea un elemento de tipo option
                let opt = document.createElement("option");

                // se asigna al objeto el valor y el texto mostrado en html
                opt.value = cat;
                opt.textContent = cat;

                // Se inserta el objeto en el desplegable de categorías.
                selectCategory.appendChild(opt);
            }
        });
}

// Se ejecuta la función anterior para insertar todas las categorías en el desplegable.
mostrarCategorias();


// Botón que resetea el formulario (recarga la página)
botonReset.addEventListener('click', (e) => {
    location.reload();
});



// Botón que busca el producto creado en spring.
botonBuscar.addEventListener('click', (e) => {
    // Se evita el comportamiento por defecto, para evitar errores.
    e.preventDefault();

    // Se obtiene el id de producto
    const inputId = document.getElementById('id').value;

    // Se guarda la URL para realizar fetch con el id obtenido
    const urlBuscarId = `http://localhost:8080/netflix/products/${inputId}`;


    // Se guardan los objetos donde insertaremos los datos después.
    let inputTitle = document.getElementById('title');
    let inputCategory = document.getElementById('selectCategory');
    let inputContent = document.getElementById('selectTipeContent');
    let inputSuscription = document.getElementById('selectTipeSuscription');


    // Se comprueba si el ID introducido está vacío.
    if (inputId == "") {
        alert("ERROR. Introduce un id para buscar el producto.")
    } else {
        // Se realiza fetch (GET) con el id obtenido
        fetch(urlBuscarId)
            // Si hay algún error, guardamos el código correspondiente.
            .then(res => {
                if (!res.ok) throw Error(res.status);
                return res;
            })
            // Se obtiene promesa, tanto si el resultado es correcto o da error
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            // Se muestra resultado en formato JSON
            .then(res => res.json())
            .then(res => {
                // Se guardan los valores correspondientes para cada campo
                let title = res.title;
                let category = res.categoria;
                let content = res.tipoContenido;
                let suscription = res.tipoSuscripcion;

                // Se insertan los valores anteriores en cada campo correspondiente
                inputTitle.value = title;
                inputCategory.value = category;
                inputContent.value = content;
                inputSuscription.value = suscription;
            })
            // Se muestra alerta con error si el producto no existe.
            .catch(error => alert(error + `. El producto no existe (id: ${inputId})`));
    }

});



// Botón que muestra el listado de productos creados en spring
botonListado.addEventListener('click', () => {

    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);


    // Se elimina la clase oculto para mostrar la tabla
    tabla.classList.remove("oculto");


    // Se realiza fetch (GET) sobre el listado de productos
    fetch(urlGetList)
        // Se obtiene promesa, tanto si el resultado es correcto o da error
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        // Se muestra resultado en formato JSON
        .then(res => res.json())
        .then(res => {
            // Se recorren todos los resultados
            for (let i = 0; i < res.length; i++) {
                // Se guardan los valores correspondientes para cada campo
                let id = res[i].idProduct;
                let title = res[i].title;
                let category = res[i].categoria;
                let content = res[i].tipoContenido;
                let suscription = res[i].tipoSuscripcion;

                // Se crea un objeto de tipo "tr" (fila) y se le añade la clase "celda"
                let tr = document.createElement("tr");
                tr.classList.add("celda");

                // Se crean las celdas para cada campo
                let tdId = document.createElement("td");
                let tdTitle = document.createElement("td");
                let tdCategory = document.createElement("td");
                let tdContent = document.createElement("td");
                let tdSuscription = document.createElement("td");

                // Se asigna el valor a cada campo
                tdId.textContent = id;
                tdTitle.textContent = title;
                tdCategory.textContent = category;
                tdContent.textContent = content;
                tdSuscription.textContent = suscription;

                // Se inserta cada celda en la fila creada
                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdCategory);
                tr.appendChild(tdContent);
                tr.appendChild(tdSuscription)

                // Se inserta la fila creada en la tabla
                tabla.appendChild(tr);
            }
        })
});



// Botón que crea un producto (se inserta mediante post en spring)
botonCrearProducto.addEventListener('click', () => {

    // Se guardan los valores de cada campo insertados en el formulario
    const inputTitle = document.getElementById('title').value;
    const inputCategory = document.getElementById('selectCategory').value;
    const inputContent = document.getElementById('selectTipeContent').value;
    const inputSuscription = document.getElementById('selectTipeSuscription').value;

    // Se realiza fetch (POST) para insertar el producto
    fetch(urlPostMovie, {
            // se especifica el tipo de método
            method: 'POST',
            // se especifica el cuerpo del json (valores obtenidos antes)
            body: JSON.stringify({
                // idProduct: inputId, (ID autogenerado)
                title: inputTitle,
                categoria: inputCategory,
                tipoContenido: inputContent,
                tipoSuscripcion: inputSuscription
            }),
            // se especifica en la cabecera que el tipo de contenido es json
            headers: {
                "Content-type": "application/json"
            }
        })
        // Si hay algún error, guardamos el código correspondiente.
        .then(res => {
            if (!res.ok) throw Error(res.status);
            return res;
        })
        // Se obtiene promesa, tanto si el resultado es correcto o da error
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        // Se muestra resultado en formato JSON
        .then(res => res.json())
        // Se informa mediante alerta si el producto se ha creado correctamente.
        .then(res => alert("Producto creado correctamente."))
        // Se informa mediante alerta si el producto no se ha creado correctamente.
        .catch(error => {
            if (error == 'Error: 400') {
                alert(error + `. Faltan campos por rellenar.`);
            } else if (error == 'Error: 409') {
                alert(error + `. El producto introducido ya existe.`);
            }
        });
});