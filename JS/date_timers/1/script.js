/* Ejercicio 1
Crea una página que muestre por pantalla un cronómetro (reloj) y la fecha actual.
El formato que deberá aparecer es lo siguiente:
Hoy es 30 - 9 - 2019 y son las 21:4:23 horas */


const divFecha = document.getElementById("fecha");

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
    let final = `Hoy es ${dia} - ${mes} - ${year} y son las ${hora}:${minuto}:${segundos} horas.`;
    divFecha.textContent = final;
};



// Se repite la función reloj cada segundo (cada 1000 ms).
setInterval(reloj, 1000);