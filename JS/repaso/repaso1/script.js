
function comprobarDatos() {
    let resultado = 0;


    //variable que guarda la posición del equipo nuevo
    let posTeam = document.getElementById("pos").value;

    //variable que guarda el nombre del equipo nuevo
    let newTeam = document.getElementById("team").value;

    //variable que guarda los puntos del equipo nuevo
    let newTeamPoints = document.getElementById("points").value;

    if (posTeam === "") {
        resultado += 1;
    }

    if (newTeam === "") {
        resultado += 1;
    }

    if (newTeamPoints === "") {
        resultado += 1;
    }

    return resultado;
}



function agregarEquipo() {

/*
Al pulsar el botón aplicar, se añadirá una nueva fila en la posición indicada en la caja de texto 
con el nombre del equipo nuevo y los puntos que tiene.
Por ejemplo: si introducimos los valores Posición= 2, Equipo=Betis y Puntos=18.
Al pulsar el botón Aplicar debe aparecer de la siguiente forma
*/
    if (comprobarDatos() !== 0) {
        alert("ERROR. Comprueba los datos introducidos");
    } else {

        //variable que guarda la posición del equipo nuevo
        let posTeam = document.getElementById("pos").value;

        //variable que guarda el nombre del equipo nuevo
        let newTeam = document.getElementById("team").value;

        //variable que guarda los puntos del equipo nuevo
        let newTeamPoints = document.getElementById("points").value;

        //variable que guarda el número de equipos en la tabla
        let totalEquipos = document.getElementById("teams").rows.length - 1;


        // si la posición del equipo aparece en la tabla... 
        if (posTeam >= 1 && posTeam <= totalEquipos) {

            //modificamos el nombre del equipo
            document.getElementById("teams").rows[posTeam].cells[1].innerText = newTeam;

            //modificamos los puntos del equipo
            document.getElementById("teams").rows[posTeam].cells[2].innerText = newTeamPoints;

        // Si no aparece...
        } else {
            //se muestra error por consola
            alert("La posición no es correcta");
            console.log("eeeeerror");
        }

    }

}


/*
miTabla = document.getElementById(“miTabla”);
viejoNodo = miTabla.getElementsByTagName(“td”)[0];
nuevoNodo = document.createElement(“tr”);

nuevoNodo.appendChild(document.createTextNode(“Otrotexto”);
miTabla.replaceChild(viejoNodo, nuevoNodo);
*/