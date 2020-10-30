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

    localStorage.setItem('dni', dni);
    localStorage.setItem('email', email);
    localStorage.setItem('usuario', usuario);
});


// DNI ------------------------------------------
btGetDni.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.getItem('dni');

    alert(`DNI: ${localStorage.getItem('dni')}`);
    console.log(localStorage.getItem('dni'));
});

btDelDni.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(localStorage.removeItem('dni'));
});


// EMAIL ---------------------------------------
btGetEmail.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.getItem('email');

    alert(`Email: ${localStorage.getItem('email')}`);
    console.log(localStorage.getItem('email'));
});

btDelEmail.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(localStorage.removeItem('email'));
});


// USER ---------------------------------------
btGetUser.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.getItem('usuario');

    alert(`Usuario: ${localStorage.getItem('usuario')}`);
    console.log(localStorage.getItem('usuario'));
});

btDelUser.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(localStorage.removeItem('usuario'));
});


// ------------------------------------------
btBorrarTodo.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
});