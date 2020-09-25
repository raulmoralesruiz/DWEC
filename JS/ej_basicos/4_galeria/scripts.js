//Dada la siguiente galería, como harías para añadir un evento a cada uno de los div y saber en cual se ha hecho click
const galeria = document.getElementById('gallery');

// FORMA 1 - funciona
galeria.addEventListener('click', (e) => {
    //se guarda la lista de clases
    let clase = e.target.classList;
    
    //se guarda el número del div seleccionado y se muestra por consola (solo celdas)
    let div = e.target.textContent;
    if (div.length === 1) {
        console.log("Div seleccionado: " + div);
    }

    //si la lista de clases contiene es gallery_item
    if (clase.contains('gallery_item')) {
        //se elimina gallery_item
        clase.remove('gallery_item');

        //se añade gallery_yellow
        clase.add('gallery_yellow');
        
    //si la clase es gallery_yellow
    } else {
        //se elimina gallery_yellow
        clase.remove('gallery_yellow');

        //se añade gallery_item
        clase.add('gallery_item');
    }
});



// FORMA 2
// galeria.addEventListener('click', (e) => {

//     //e.preventDefault();
//     if (e.target.className.match("gallery_item")) {
//         e.target.classList.replace('gallery_item', 'gallery_yellow');
//     }
//     else{
//         e.target.classList.replace('gallery_yellow', 'gallery_item');
//     }

// })