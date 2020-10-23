/* Utiliza el proyecto con Spring que has creado en el módulo de DWES para acceder consumirlo desde el frontend.

Desde el Frontend deberás crear un botón que realice una petición POST hacia el endpoint correspondiente de tu backend.
Deberás pasarle los valores necesarios (recomendado crear un formulario para enviar estos valores).

Creo otro botón que haga una petición GET al endpoint de tu proyecto backend para poder listar 
alguno de los datos de tu proyecto */


const tabla = document.getElementById('tablaListado');

const botonListado = document.getElementById('botonListado');
const botonCrearPeli = document.getElementById('botonCrearPeli');
const botonBuscar = document.getElementById('botonBuscar');

const selectCategory = document.getElementById('selectCategory');

const urlGetList = "http://localhost:8080/netflix/products";
const urlPostMovie = "http://localhost:8080/netflix/products/movie";
const urlCategories = "http://localhost:8080/netflix/products/categories"



// Función que inserta las distintas opciones de categorías en forma de select (desplegable)
const mostrarCategorias = () => {
    fetch(urlCategories)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let cat = res[i];

                let opt = document.createElement("option");
                opt.value = cat;
                opt.textContent = cat;

                selectCategory.appendChild(opt);
            }
        });
}

mostrarCategorias();



botonBuscar.addEventListener('click', (e) => {
    e.preventDefault();

    const inputId = document.getElementById('id').value;
    const urlBuscarId = `http://localhost:8080/netflix/products/${inputId}`;

    let inputTitle = document.getElementById('title');
    let inputCategory = document.getElementById('selectCategory');
    let inputContent = document.getElementById('selectTipeContent');
    let inputSuscription = document.getElementById('selectTipeSuscription');


    if (inputId == "") {
        alert("ERROR. Introduce un id para buscar el producto.")
    } else {
        fetch(urlBuscarId)
            .then(res => {
                if (!res.ok) throw Error(res.status);
                return res;
            })
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {
                let title = res.title;
                let category = res.categoria;
                let content = res.tipoContenido;
                let suscription = res.tipoSuscripcion;

                inputTitle.value = title;
                inputCategory.value = category;
                inputContent.value = content;
                inputSuscription.value = suscription;
            })
            .catch(error => alert(error + `. El producto no existe (id: ${inputId})`));
    }

});





botonListado.addEventListener('click', () => {

    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);


    // Se elimina la clase oculto para mostrar la tabla
    tabla.classList.remove("oculto");


    fetch(urlGetList)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let id = res[i].idProduct;
                let title = res[i].title;
                let category = res[i].categoria;
                let content = res[i].tipoContenido;
                let suscription = res[i].tipoSuscripcion;

                let tr = document.createElement("tr");
                tr.classList.add("celda");

                let tdId = document.createElement("td");
                let tdTitle = document.createElement("td");
                let tdCategory = document.createElement("td");
                let tdContent = document.createElement("td");
                let tdSuscription = document.createElement("td");

                tdId.textContent = id;
                tdTitle.textContent = title;
                tdCategory.textContent = category;
                tdContent.textContent = content;
                tdSuscription.textContent = suscription;

                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdCategory);
                tr.appendChild(tdContent);
                tr.appendChild(tdSuscription)

                tabla.appendChild(tr);
            }
        })
});



botonCrearPeli.addEventListener('click', () => {

    const inputTitle = document.getElementById('title').value;
    const inputCategory = document.getElementById('selectCategory').value;
    const inputContent = document.getElementById('selectTipeContent').value;
    const inputSuscription = document.getElementById('selectTipeSuscription').value;


    fetch(urlPostMovie, {
            method: 'POST',
            body: JSON.stringify({
                // idProduct: inputId, (ID autogenerado)
                title: inputTitle,
                categoria: inputCategory,
                tipoContenido: inputContent,
                tipoSuscripcion: inputSuscription
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => {
            if (!res.ok) throw Error(res.status);
            return res;
        })
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => alert("Producto creado correctamente."))
        .catch(error => {
            if (error == 'Error: 400') {
                alert(error + `. Faltan campos por rellenar.`);
            } else if (error == 'Error: 409') {
                alert(error + `. El producto introducido ya existe.`);
            }
        });
});