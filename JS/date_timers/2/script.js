/* Ejercicio 2:
Desarrolla una aplicación web que funcione de alarma.
Mostrar hora actual y preguntar al usuario a qué hora sonará.

Una vez que llegue a la hora introducida por el usuario, 
debe preguntarle si quiere descansar un poco más y vuelva a mostrar el mensaje a los dos minutos. */


// Divs que contienen la fecha y la alarma
const divFecha = document.getElementById("fecha");
const divAlarma = document.getElementById("alarma");

// Botones para interactuar con la alarma
const botonAlarma = document.getElementById("setAlarm");
const botonPosponer = document.getElementById("posponer");
const botonDesactivar = document.getElementById("desactivar");
const audio = document.getElementById("audio_alarma");


// Variables hora y minuto de la alarma.
let alarmaHora;
let alarmaMin;

// Funcionamiento del botón "Programar alarma"
botonAlarma.addEventListener('click', () => {
    
    // Se establece -1 para entrar en el bucle la primera vez.
    // También es necesario para poder usar la alarma varias veces.
    alarmaHora = -1;
    alarmaMin = -1;    

    // Se pide la hora de la alarma. (Si es un valor incorrecto, se volverá a pedir).
    while (alarmaHora < 0 || alarmaHora > 23) {
        alarmaHora = prompt("Introduce la hora (0-23) de la alarma:");    
    }
    
    // Se pide el minuto de la alarma. (Si es un valor incorrecto, se volverá a pedir).
    while (alarmaMin < 0 || alarmaMin > 59) {
        alarmaMin = prompt("Introduce los minutos (0-59) de la alarma:");
    }   
});



// Función reloj. Muestra fecha y hora actual.
const reloj = () => {
    let fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();

    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    
    // Inserta 0 al minuto para mejorar el formato, si es menor de 10
    if (minuto < 10) {
        minuto = "0" + minuto;
    };

    // Inserta 0 a los segundos para mejorar el formato, si es menor de 10
    if (segundos < 10) {
        segundos = "0" + segundos;
    };

    // Se agrupa todo el contenido y se inserta el texto en el div "Fecha"
    let final = `Fecha/hora actual: ${dia}/${mes}/${year} - ${hora}:${minuto}:${segundos}`;
    divFecha.textContent = final;

    // Si la hora actual coincide con la hora de la alarma... (en el segundo 0)
    if (alarmaHora == hora && alarmaMin == minuto && segundos == 0) {

        // Se muestran los siguientes elementos (Se elimina la clase oculto)
        divAlarma.classList.remove("oculto");
        botonDesactivar.classList.remove("oculto");
        botonPosponer.classList.remove("oculto");

        // Suena la alarma
        audio.play();
    }
};



// Se repite la función reloj cada segundo (cada 1000 ms).
setInterval(reloj, 1000);



// Funcionamiento del botón Desactivar.
botonDesactivar.addEventListener('click', () => {
    
    // Se ocultan todos los elementos necesarios.
    divAlarma.classList.add("oculto");
    botonDesactivar.classList.add("oculto");
    botonPosponer.classList.add("oculto");

    // Se pausa la alarma y se pone al principio.
    audio.pause();
    audio.currentTime = 0;
});



// Funcionamiento del botón Posponer.
botonPosponer.addEventListener('click', () => {
    
    // Aprovechamos el botón desactivar, para ocultar todos los elementos necesarios.
    botonDesactivar.click();

    // En el tiempo indicado, volverán a mostrarse todos los elementos necesarios.
    setTimeout(() => {
        // Se ocultan todos los elementos necesarios.
        divAlarma.classList.add("oculto");
        botonDesactivar.classList.add("oculto");
        botonPosponer.classList.add("oculto");

        // Se pausa la alarma y se pone al principio.
        audio.pause();
        audio.currentTime = 0;
    }, 10000); //10 segundos. Según el ejercicio serían 120000
});