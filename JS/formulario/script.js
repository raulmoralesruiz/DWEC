/*
Crea un formulario en el que es necesario que los siguientes aspectos sean validados con expresiones regulares:
• DNI
• Email
• Cuenta bancaria. De la cuenta bancaria validaremos el IBAN
• Complejidad de la password
• Nombre de usuario
• URL
• IP
• Tarjeta de crédito.

Para la validación se proporciona un archivo validate.js 
que contiene funcionesde validación con expresiones regulares que deberas utilizar en tu formulario.
*/

// formulario
const formulario = document.getElementById("formulario");

// botón submit
const submit = document.getElementById("submit");


// funcionamiento botón submit
submit.addEventListener('click', (e) => {
    e.preventDefault();

    // inputs
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const cuenta = document.getElementById("cuenta").value;
    const usuario = document.getElementById("usuario").value;
    const pass = document.getElementById("pass").value;
    const url = document.getElementById("url").value;
    const ip = document.getElementById("ip").value;
    const tarjeta = document.getElementById("tarjeta").value;

    // validaciones
    validateDni(dni);
    validateEmail(email);
    validateIban(cuenta);
    validateUsername(usuario);
    validatePasswordModerate(pass); //hG8bcz@ymZC9^j
    validateUrl(url);
    validateIP(ip);
    validateCreditCard(tarjeta); //4507670001000009
});

console.log("Valores para pruebas (pass y card):")
console.log("hG8bcz@ymZC9^j")
console.log("4507670001000009")