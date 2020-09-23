/* Crea un formulario con un input de tipo texto y un botón “Enviar”.
Al pulsar el botón. Crea un evento para que al soltar una tecla 
se lance una función que vaya mostrando por consola todo lo que se escribe en el input.

¿cómo podemos sacar información del evento?
Averigua como podemos obtener la tecla concreta que se ha pulsado cada vez. */

const boton = document.getElementById('but');
const text = document.getElementById('texto');


boton.addEventListener("click", () => {

    text.addEventListener("keypress", (e) => {
        let letra = e.key;
        console.log("Has pulsado una tecla: " + letra)
    });

})
