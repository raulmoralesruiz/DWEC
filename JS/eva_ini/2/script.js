/*
Está página permitirá:

• Insertar nuevos empleados en la tabla.
    Deberá crear la función javascript correspondiente que permita insertar nuevos empleados.
    En el caso de insertar un nuevo empleado deberá actualizarse el número total de empleados.
    En el caso de ya existir el empleado deberá mostrarse una alerta indicando que ya existe el empleado.
    El DNI será el identificador del empleado.

• Borrar un empleado de la tabla.
    Deberá crear la función javascript correspondiente que permita borrar un empleado.
    Para borrar un empleado deberá introducirse el DNI del empleado que se desea borrar.
    En el caso de borrar un empleado deberá actualizarse el número total de empleados.
    En el caso de que no exista el empleado deberá mostrarse una alerta.

• Modificar un empleado de la tabla.
    Deberá crear la función javascript correspondiente.
    En el caso de que no exista el empleado a modificar 
    deberá mostrar una alerta indicando que el empleado a modificar no existe.
*/



//ubicación de línea que muestra el número de empleados
const numEmp = document.getElementById("num-emp");

//tabla que almacena todos los datos
const tabla = document.getElementById("tabla-emp");

//se obtiene el número de empleados (número total de filas - 1)
let totalEmpleados = tabla.rows.length - 1;

//se actualiza la línea anterior con el número actual de empleados
numEmp.innerText = "Número total de empleados: " + totalEmpleados;


function insertar() {
    let totalEmpleados = tabla.rows.length - 1;
    
    //se crea la fila del nuevo empleado
    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    //se crean las celdas para cada campo
    let celdaNum = document.createElement("td");
    fila.appendChild(celdaNum);

    let celdaDNI = document.createElement("td");
    fila.appendChild(celdaDNI);
    celdaDNI.classList.add("dniEmp");

    let celdaNom = document.createElement("td");
    fila.appendChild(celdaNom);

    let celdaApe = document.createElement("td");
    fila.appendChild(celdaApe);



    //se piden los datos
    let posEmp = totalEmpleados + 1;

    let dni = prompt("DNI del empleado:");

    //mientras el dni no tenga 9 caracteres, se volverá a pedir (hasta que no exista).
    while (dni.length != 9) {
        dni = prompt("El DNI debe tener 9 caracteres.");
    }

    //mientras el dni exista, se volverá a pedir (hasta que no exista).
    while (empleadoExiste(dni) == true) {
        dni = prompt("El empleado ya existe, introduce otro dni.");
    }

    let nombre = prompt("Nombre del empleado:");

    let ape = prompt("Apellidos del empleado:");


    // se incluyen los datos en cada celda
    celdaNum.innerText = posEmp;
    celdaDNI.innerText = dni;
    celdaNom.innerText = nombre;
    celdaApe.innerText = ape;

    numEmp.innerText = "Número total de empleados: " + (totalEmpleados + 1);
}


function empleadoExiste(emp) {
    //guarda todos las celdas con clase dniEmp en la variable empleados
    let empleados = document.getElementsByClassName("dniEmp");

    console.log(empleados);

    let encontrado = false;

    //buscamos si el empleado existe (cualquier celda de la tabla)
    for (let i = 0; i < empleados.length && encontrado != true; i++) {
        if (emp == empleados[i].textContent) {
            encontrado = true;
        }
    }

    return encontrado;
}




/*
• Borrar un empleado de la tabla.
    Deberá crear la función javascript correspondiente que permita borrar un empleado.
    Para borrar un empleado deberá introducirse el DNI del empleado que se desea borrar.
    En el caso de borrar un empleado deberá actualizarse el número total de empleados.
    En el caso de que no exista el empleado deberá mostrarse una alerta.
*/

/*
revisar: ---------------------------------------------------------------------------------------
    deleteRow
    indexOf
revisar: ---------------------------------------------------------------------------------------
*/

function borrar() {
    let resul = 0;

    //se pide el DNI del empleado
    let dniE = prompt("Introduce el DNI del empleado:");

    //variable que guardará la posición del empleado.
    let posE = -1;

    //si el empleado no existe, se muestra mensaje de alerta
    if (empleadoExiste(dniE) != true) {
        alert("No existe ningún empleado con el DNI indicado.");
        resul = 1;
    // si el empleado existe...
    } else {
        //se guardan todas las celdas que contienen los DNI de los empleados
        let empleados = document.getElementsByClassName("dniEmp");

        posEncontrada = false;

        //se busca la posición del dni introducido en el array "empleados"
        for (let i = 0; i < empleados.length && posEncontrada != true; i++) {

            //una vez encontrado, se guarda la posición del DNI
            if (dniE == empleados[i].textContent) {
                posE = i;
                posEncontrada = true;
            }
        }

        tabla.deleteRow(posE + 1);

        // ------- Otra forma de eliminar la fila del empleado introducido -------
        // //se guarda la celda concreta que contiene el DNI
        // td = empleados[posE];

        // //se guarda la fila que contiene todos los datos del empleado
        // tr = td.parentNode;

        // //se guarda la tabla
        // table = tr.parentNode;

        // //se elimina la fila anterior de la tabla
        // table.removeChild(tr);


        //se actualiza el número de empleados actuales
        numEmp.innerText = "Número total de empleados: " + (totalEmpleados - 1);

        resul = 2;
    }

    return resul;
}




/*
• Modificar un empleado de la tabla.
    Deberá crear la función javascript correspondiente.
    En el caso de que no exista el empleado a modificar 
    deberá mostrar una alerta indicando que el empleado a modificar no existe.
*/

function modificar() {

    if (borrar() == 2) {
        
        let totalEmpleados = tabla.rows.length - 1;
    
        //se crea la fila del nuevo empleado
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
    
        //se crean las celdas para cada campo
        let celdaNum = document.createElement("td");
        fila.appendChild(celdaNum);
    
        let celdaDNI = document.createElement("td");
        fila.appendChild(celdaDNI);
        celdaDNI.classList.add("dniEmp");
    
        let celdaNom = document.createElement("td");
        fila.appendChild(celdaNom);
    
        let celdaApe = document.createElement("td");
        fila.appendChild(celdaApe);
    
    
    
        //se piden los datos
        let posEmp = prompt("Posición del empleado:");
    
        let dni = prompt("DNI del empleado:");
    
        //mientras el dni no tenga 9 caracteres, se volverá a pedir (hasta que no exista).
        while (dni.length != 9) {
            dni = prompt("El DNI debe tener 9 caracteres.");
        }
    
        //mientras el dni exista, se volverá a pedir (hasta que no exista).
        while (empleadoExiste(dni) == true) {
            dni = prompt("El empleado ya existe, introduce otro dni.");
        }
    
        let nombre = prompt("Nombre del empleado:");
    
        let ape = prompt("Apellidos del empleado:");
    
    
        // se incluyen los datos en cada celda
        celdaNum.innerText = posEmp;
        celdaDNI.innerText = dni;
        celdaNom.innerText = nombre;
        celdaApe.innerText = ape;
    
        numEmp.innerText = "Número total de empleados: " + (totalEmpleados + 1);
    }
}