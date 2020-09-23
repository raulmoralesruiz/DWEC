//Dada la siguiente galería, como harías para añadir un evento a cada uno de los div y saber en cual se ha hecho click
const galeria = document.getElementById('gallery');

galeria.addEventListener("click", (e) => {
    /* console.log(e.target.textContent); */
    /* console.log(e.target); */
    let numDiv = e.target.textContent;
    let it = document.getElementsByClassName('gallery__item')[numDiv - 1];

    let claseActual = it.classList.value;
    console.log(claseActual);

    if (e.target.className.match("gallery__item")) {
        e.target.className.replace('gallery__item', 'gallery__itemYellow');
    }

    /* if (claseActual == "gallery__item") {
        it.classList.replace('gallery__item', 'gallery__itemYellow');
    } else {
        it.classList.replace('gallery__itemYellow', 'gallery__item');
    } */


    //className
    //match


    /* console.log(it); */
    /* console.log(it.classList.value) */


    /* it.classList.replace('gallery__item', 'gallery__itemYellow'); */
});