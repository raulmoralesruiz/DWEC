/* Modifica el ejercicio anterior para que se muestre un select en el que se carguen los distintos "Aligment" 
que hay en la base de datos y un radio button con los distintos "Gender" que hay. 

El usuario seleccionará del select un tipo de Aligment y una opción del radio button y 
deberá mostrarse en una tabla los resultados obtenidos que cuadren con el filtro de búsqueda.. */




// Botón que ejecuta la función
const button = document.getElementById('button');

// Tabla que muestra los datos del superheroe seleccionado
const tabla = document.getElementById('tabla');

//desplegable (select) que incluye los nombres de los superheroes
const alinea = document.getElementById('alinea');
const genero = document.getElementById('genero');
const divRadio = document.getElementById('divRadio');


// URL del servidor
const url = "http://192.168.33.10/marvel/marvel.php";
const urlGen = "http://192.168.33.10/marvel/marvel.php?gen";
const urlAli = "http://192.168.33.10/marvel/marvel.php?ali";



// Función que inserta las distintas opciones de orientación/alineamiento en forma de select (desplegable)
const mostrarAlinea = () => {
    fetch(urlAli)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let alig = res[i].Alignment;

                let opt = document.createElement("option");
                opt.value = alig;
                opt.textContent = alig;
                // opt.id = res[i].ID;

                alinea.appendChild(opt);
            }
        });
}

mostrarAlinea();


// Función que inserta las distintas opciones de género en forma de input radio
const mostrarGenero = () => {
    fetch(urlGen)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let gen = res[i].Gender;

                let inp = document.createElement("input");
                inp.type = "radio";
                inp.name = "gender";
                inp.value = gen;
                inp.id = `gender_${inp.value}`;
                divRadio.appendChild(inp);

                let lab = document.createElement("label");
                lab.setAttribute("for", inp.id);
                lab.textContent = gen;
                divRadio.appendChild(lab);
            }
        });
}

mostrarGenero();



// Obtener el valor del input radio seleccionado
const obtenerRadio = () => {
    let radios = document.getElementsByName("gender");
    let radEncontrado = false;
    let resul;

    for (let i = 0; i < radios.length && radEncontrado == false; i++) {
        if (radios[i].checked) {
            radEncontrado = true;
            resul = radios[i].value;
        }
    }

    return resul;
}



// Funcionamiento botón -> GET DATA
button.addEventListener('click', () => {

    // variable que establece si los campos son correctos.
    let estado = 0;

    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);

    // Se obtiene el género y se comprueba si está vacío
    let gen = obtenerRadio();
    if (gen == undefined || gen == "") {
        alert("ERROR. You must select a gender.")
        estado = -1;
    }

    // Se obtiene la orientación/alineamiento y se comprueba si está vacío
    let ali = alinea.value;
    if (ali == undefined || ali == "") {
        alert("ERROR. You must select an alignment.")
        estado = -1;
    }

    if (estado == 0) {
        // Se elimina la clase oculto para mostrar la tabla
        tabla.classList.remove("oculto");


        const urlGenAli = `http://192.168.33.10/marvel/marvel.php?gen=${gen}&ali=${ali}`;

        fetch(urlGenAli)
            .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    let name = res[i].Name;
                    let skills = res[i].Fighting_Skills;

                    let tr = document.createElement("tr");
                    tr.classList.add("celda");

                    let tdName = document.createElement("td");
                    let tdGender = document.createElement("td");
                    let tdAli = document.createElement("td");
                    let tdSkill = document.createElement("td");

                    tdName.textContent = name;
                    tdGender.textContent = gen;
                    tdAli.textContent = ali;
                    tdSkill.textContent = skills;

                    tr.appendChild(tdName);
                    tr.appendChild(tdGender);
                    tr.appendChild(tdAli);
                    tr.appendChild(tdSkill);

                    tabla.appendChild(tr);
                }
            })
            .catch(res => "ERROR. Revise la configuración");
    }

});