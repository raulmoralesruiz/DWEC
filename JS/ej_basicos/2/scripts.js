const caja = document.getElementById('box');
const text = document.getElementById('texto');

// Cuando el ratón entre dentro de la caja, se cambiará el color a verde.
caja.addEventListener("mouseenter", () => {
    caja.style.background="green";
});


// Cuando el ratón salga de la caja el color deberá cambiar a rojo.
caja.addEventListener("mouseleave", () => {
    caja.style.background="red";
});


// Cuando pulsemos el botón izquierdo del ratón estando situados sobre la caja, aparecerá por consola el mensaje “Has pulsado la caja".
caja.addEventListener('mousedown', () => {
    console.log("Has pulsado la caja");
});


// Al soltar el botón izquierdo del ratón en la caja, aparecerá por consola el mensaje ”Has soltado el botón izquierdo dentro de la caja”.
caja.addEventListener("mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja");
});


// Al pulsar una tecla deberá aparecer el mensaje por consola “Has pulsado una tecla”
text.addEventListener("keypress", () => {
    let codigo = event.which || event.keyCode;
    console.log("Has pulsado una tecla: " + String.fromCharCode(codigo));
});

// Al soltar la tecla deberá aparecer el mensaje por consola “Has soltado una tecla”
text.addEventListener("keyup", () => {
    console.log("Has soltado una tecla");
});