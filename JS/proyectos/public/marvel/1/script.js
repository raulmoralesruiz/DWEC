/*  Un tabla cuyos títulos sean: Name, Gender, Fighting Skills
    Un campo de tipo select donde deberán mostrarse los superheroes que hay cargados en la base de datos.
    
    Crea un botón de tipo submit que se llame "Get Data"
    Al pulsar el botón se deberá modificar el comportamiento para que en lugar de realizar el submit por defecto
    se llame una nueva función llamada "getData".
    
    Crea una función que se llame getData y que reciba un id.
    Dentro de esta función, se deberá realizar una petición AJAX que recupere los datos de la base de datos en un JSON
    y que rellene el select creado de superheroes si este no está relleno.
    En caso de estar relleno, al seleccionar un superheroe del select y pulsar el botón "Get Data"
    deberá crear una fila en la tabla con las características del superheroe seleccionado. */



// Botón que ejecuta la función
const button = document.getElementById('button');

// Tabla que muestra los datos del superheroe seleccionado
const tabla = document.getElementById('tabla');

//desplegable (select) que incluye los nombres de los superheroes
const superheroes = document.getElementById('superheroes');

// URL del servidor
const url = "http://192.168.33.10/marvel/marvel.php";

let idSuperHeroe;
let encontrado = false;


const mostrarSuperheroes = () => {
    fetch(url)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let name = res[i].Name;

                let opt = document.createElement("option");
                opt.value = name;
                opt.textContent = name;
                opt.id = res[i].ID;

                superheroes.appendChild(opt);
            }
        });
}

mostrarSuperheroes();





button.addEventListener('click', (e) => {

    e.preventDefault();

    // Se elimina la clase oculto para mostrar la tabla
    tabla.classList.remove("oculto");


    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);


    let id = superheroes.options[superheroes.selectedIndex].id;
    let urlId = `http://192.168.33.10/marvel/marvel.php?id=${id}`;

    fetch(urlId)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let heroe = res[0];
            let name = heroe.Name;
            let gender = heroe.Gender;
            let skills = heroe.Fighting_Skills;


            let tr = document.createElement("tr");
            tr.classList.add("celda");

            let tdName = document.createElement("td");
            let tdGender = document.createElement("td");
            let tdSkill = document.createElement("td");

            tdName.textContent = name;
            tdGender.textContent = gender;
            tdSkill.textContent = skills;

            tr.appendChild(tdName);
            tr.appendChild(tdGender);
            tr.appendChild(tdSkill);
            tabla.appendChild(tr);

        })
        .catch(res => "ERROR. Revise la configuración");
});