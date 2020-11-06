// formulario
const formulario = document.getElementById("formulario");

// botones
const btGet = document.getElementById("btGet");
const btLast = document.getElementById("btLast");
const btLimpiar = document.getElementById("btLimpiar");
const submit = document.getElementById("submit");
const btBorrarTodo = document.getElementById("borrarTodo");

// inputs
const inputNick = document.getElementById("nick");
const inputNombre = document.getElementById("nombre");
const inputPass = document.getElementById("pass");
const inputDni = document.getElementById("dni");
const inputEdad = document.getElementById("edad");

// Tabla que muestra los datos
const tabla = document.getElementById('tabla');



// funcionamiento botón submit
submit.addEventListener('click', (e) => {
    e.preventDefault();

    const nick = inputNick.value;
    const nombre = inputNombre.value;
    const pass = inputPass.value;
    const dni = inputDni.value;
    const edad = inputEdad.value;


    if (nick != "" && validatePasswordModerate(pass)) {

        // se crea objeto user con los valores anteriores
        const userObject = {
            nick: nick,
            nombre: nombre,
            pass: pass,
            dni: dni,
            edad: edad
        }


        //Calcular fecha actual
        let fecha = new Date();

        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let year = fecha.getFullYear();

        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let fechaFinal = `${dia}/${mes}/${year}-${hora}:${minuto}:${segundos}`;


        const lastUserObject = {
            nick: nick,
            fecha: fechaFinal
        }


        // se guarda el objeto en localStorage
        localStorage.setItem(nick, JSON.stringify(userObject));

        // --- extra--- guardar último usuario registrado
        localStorage.setItem('lastuser', JSON.stringify(lastUserObject));


        // se borran los datos del formulario
        formulario.reset();
    } else {
        alert("ERROR al crear el usuario.");
    }

});


btLimpiar.addEventListener('click', (e) => {
    // se borran los datos actuales del formulario
    formulario.reset();

    // Se oculta la tabla
    tabla.classList.add("oculto");
});



// GET ------------------------------------------
btGet.addEventListener('click', (e) => {
    e.preventDefault();

    // input -> se guarda el valor introducido
    // const dni = inputDni.value;
    const nick = inputNick.value;

    // se crea variable objeto que guarda el usuario completo
    let objeto = JSON.parse(localStorage.getItem(nick));

    inputNick.value = objeto.nick;
    inputNombre.value = objeto.nombre;
    inputPass.value = objeto.pass;
    inputDni.value = objeto.dni;
    inputEdad.value = objeto.edad;

    /* TABLA PARA MOSTRAR LOS DATOS OBTENIDOS */

    // Se elimina la clase oculto para mostrar la tabla
    tabla.classList.remove("oculto");


    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);


    let tr = document.createElement("tr");
    tr.classList.add("celda");


    let tdNick = document.createElement("td");
    let tdName = document.createElement("td");
    let tdPass = document.createElement("td");
    let tdDni = document.createElement("td");
    let tdEdad = document.createElement("td");

    tdNick.textContent = objeto.nick;
    tdName.textContent = objeto.nombre;
    tdPass.textContent = objeto.pass;
    tdDni.textContent = objeto.dni;
    tdEdad.textContent = objeto.edad;

    tr.appendChild(tdNick);
    tr.appendChild(tdName);
    tr.appendChild(tdPass);
    tr.appendChild(tdDni);
    tr.appendChild(tdEdad);
    tabla.appendChild(tr);
});


// LAST USER ------------------------------------------
btLast.addEventListener('click', (e) => {
    e.preventDefault();

    // se crea variable objetoLastUser que guarda el último usuario registrado
    let objetoLastUser = JSON.parse(localStorage.getItem('lastuser'));

    const nickObtenido = objetoLastUser.nick;

    // se crea variable objeto que guarda el usuario completo
    let objetoUsuario = JSON.parse(localStorage.getItem(nickObtenido));

    inputNick.value = objetoUsuario.nick;
    inputNombre.value = objetoUsuario.nombre;
    inputPass.value = objetoUsuario.pass;
    inputDni.value = objetoUsuario.dni;
    inputEdad.value = objetoUsuario.edad;

});


// BORRAR TODO ------------------------------------
btBorrarTodo.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
});





const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    let resultado = false;

    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if (passwordRegex.test(password)) {
        console.log('password válido')
        resultado = true;
    } else {
        console.log('password incorrecto')
    }

    return resultado;
}