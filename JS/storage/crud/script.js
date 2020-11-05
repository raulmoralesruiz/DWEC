// formulario
const formulario = document.getElementById("formulario");

// botones
const btGetDni = document.getElementById("getDni");
const btLast = document.getElementById("btLast");
const btLimpiar = document.getElementById("btLimpiar");
const submit = document.getElementById("submit");
const btBorrar = document.getElementById("borrar");
const btModificar = document.getElementById("modificar");
const btBorrarTodo = document.getElementById("borrarTodo");

// inputs
const inputDni = document.getElementById("dni");
const inputEmail = document.getElementById("email");
const inputUsuario = document.getElementById("usuario");


/* const btGetDni = document.getElementById("getDni");
const btDelDni = document.getElementById("delDni");
const btGetEmail = document.getElementById("getEmail");
const btDelEmail = document.getElementById("delEmail");
const btGetUser = document.getElementById("getUser");
const btDelUser = document.getElementById("delUser"); */

// select - desplegable dni
const selectDni = document.getElementById("select-dni");




// funcionamiento botón submit
submit.addEventListener('click', (e) => {
    e.preventDefault();

    // inputs -> se guardan valores introducidos
    const dni = inputDni.value;
    const email = inputEmail.value;
    const usuario = inputUsuario.value;

    if (dni != "") {
        // se crea objeto user con los valores anteriores
        const userObject = {
            dni: dni,
            email: email,
            usuario: usuario
        }

        const lastUserObject = {
            dni: dni,
            email: email,
        }


        // se guarda el objeto en localStorage
        localStorage.setItem(dni, JSON.stringify(userObject));

        // --- extra--- guardar último email registrado
        localStorage.setItem('lastemail', JSON.stringify(lastUserObject));


        // se borran los datos del formulario
        formulario.reset();
    } else {
        alert("ERROR al crear. El campo DNI está vacío");
    }

});


btLimpiar.addEventListener('click', (e) => {
    // se borran los datos actuales del formulario
    formulario.reset();
});



// GET ------------------------------------------
btGetDni.addEventListener('click', (e) => {
    e.preventDefault();

    // input -> se guarda el valor introducido
    const dni = inputDni.value;

    // se crea variable objeto que guarda el usuario completo
    let objeto = JSON.parse(localStorage.getItem(dni));

    inputEmail.value = objeto.email;
    inputUsuario.value = objeto.usuario;
});


// GET ------------------------------------------
btLast.addEventListener('click', (e) => {
    e.preventDefault();

    // se crea variable objetoMail que guarda el último mail registrado
    let objetoMail = JSON.parse(localStorage.getItem('lastemail'));

    // const mailObtenido = objetoMail.email;
    const dniObtenido = objetoMail.dni;

    // se crea variable objeto que guarda el usuario completo
    let objetoUsuario = JSON.parse(localStorage.getItem(dniObtenido));

    inputDni.value = objetoUsuario.dni;
    inputEmail.value = objetoUsuario.email;
    inputUsuario.value = objetoUsuario.usuario;
});


// BORRAR -----------------------------------------
btBorrar.addEventListener('click', (e) => {
    e.preventDefault();

    // input -> se guarda el valor introducido
    const dni = document.getElementById("dni").value;

    // se elimina el usuario
    localStorage.removeItem(dni);
});


// BORRAR TODO ------------------------------------
btBorrarTodo.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
});


// MODIFICAR --------------------------------------
btModificar.addEventListener('click', (e) => {
    e.preventDefault();

    const dni = inputDni.value;

    if (dni != "") {
        btBorrar.click();
        submit.click();
    }

});


/* 
“Consultar último login”:
mostrará en la página web toda la información del usuario que se ha dado de alta por última vez en el sistema. 
Deberá buscar porfecha de alta.
*/