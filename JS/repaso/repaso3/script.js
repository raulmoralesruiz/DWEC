let ciudades = [];
ciudades[0] = 'Sevilla';
ciudades[1] = 'Cadiz';
ciudades[2] = 'Huelva';
ciudades[3] = 'Malaga';
ciudades[4] = 'Granada';
ciudades[5] = 'Almeria';
ciudades[6] = 'Jaen';
ciudades[7] = 'Cordoba';


function mostrarTabla() { 
    
    //se ordena la tabla ciudades
    ciudades.sort();

    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    let tablaBody = document.createElement("tbody");

    // Crea las celdas
    for (let i = 0; i < ciudades.length; i++) {

        // Crea la fila de la tabla
        let hilera = document.createElement("tr");

        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        let celda = document.createElement("td");
        let textoCelda = document.createTextNode(ciudades[i]);

        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tablaBody)
        tablaBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tablaBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "1";
    tabla.setAttribute("border", "1");

}