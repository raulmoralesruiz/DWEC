const caja = document.getElementById('box');

// Cuando el ratón entre dentro de la caja, se cambiará el color a verde.
caja.addEventListener("mouseenter", () => {
    caja.style.background="green";
})


// Cuando el ratón salga de la caja el color deberá cambiar a rojo.
caja.addEventListener("mouseleave", () => {
    caja.style.background="red";
})


// Cuando pulsemos el botón izquierdo del ratón estando situados sobre la caja, aparecerá por consola el mensaje “Has pulsado la caja".
caja.addEventListener('mousedown', () => {
    console.log("Has pulsado la caja")
})


// Al soltar el botón izquierdo del ratón en la caja, aparecerá por consola el mensaje ”Has soltado el botón izquierdo dentro de la caja”.
caja.addEventListener("mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja")
})


