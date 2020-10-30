// formulario
const formulario = document.getElementById("formulario");

// botón submit
const submit = document.getElementById("submit");

// botones
const btGetDni = document.getElementById("getDni");
const btDelDni = document.getElementById("delDni");
const btGetEmail = document.getElementById("getEmail");
const btDelEmail = document.getElementById("delEmail");
const btGetUser = document.getElementById("getUser");
const btDelUser = document.getElementById("delUser");
const btBorrarTodo = document.getElementById("borrarTodo");


// funcionamiento botón submit
submit.addEventListener('click', (e) => {
    e.preventDefault();

    // inputs
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;

    // validaciones
    validateDni(dni);
    validateEmail(email);
    validateUsername(usuario);

    sessionStorage.setItem('dni', dni);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('usuario', usuario);
});


// DNI ------------------------------------------
btGetDni.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.getItem('dni');

    alert(`DNI: ${sessionStorage.getItem('dni')}`);
    console.log(sessionStorage.getItem('dni'));
});

btDelDni.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(sessionStorage.removeItem('dni'));
});


// EMAIL ---------------------------------------
btGetEmail.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.getItem('email');

    alert(`Email: ${sessionStorage.getItem('email')}`);
    console.log(sessionStorage.getItem('email'));
});

btDelEmail.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(sessionStorage.removeItem('email'));
});


// USER ---------------------------------------
btGetUser.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.getItem('usuario');

    alert(`Usuario: ${sessionStorage.getItem('usuario')}`);
    console.log(sessionStorage.getItem('usuario'));
});

btDelUser.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(sessionStorage.removeItem('usuario'));
});


// ------------------------------------------
btBorrarTodo.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
});