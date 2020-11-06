// Botón que ejecuta la función
const button = document.getElementById('button');

// Tabla que muestra los datos
const tabla = document.getElementById('tabla');

// desplegable (select) que incluye los nombres de los usuarios
const usuarios = document.getElementById('usuarios');

// URL del servidor
const url = "https://jsonplaceholder.typicode.com/users";


const mostrarUsuarios = () => {
    fetch(url)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let name = res[i].name;

                let opt = document.createElement("option");
                opt.value = name;
                opt.textContent = name;
                opt.id = res[i].id;

                usuarios.appendChild(opt);
            }
        });
}

mostrarUsuarios();



button.addEventListener('click', (e) => {

    e.preventDefault();

    // Se elimina la clase oculto para mostrar la tabla
    tabla.classList.remove("oculto");


    // Se eliminan las celdas cada vez que se pulsa el botón GET DATA
    let celdas = document.getElementsByClassName("celda");
    while (celdas.length) celdas[0].parentElement.removeChild(celdas[0]);


    let id = usuarios.options[usuarios.selectedIndex].id;
    let urlId = `${url}/${id}`;

    console.log(urlId);


    fetch(urlId)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let user = res;

            let email = user.email;
            let iduser = user.id;
            let name = user.name;
            let phone = user.phone;

            console.log(user);
            console.log(email);
            console.log(iduser);
            console.log(name);
            console.log(phone);



            let tr = document.createElement("tr");
            tr.classList.add("celda");

            let tdEmail = document.createElement("td");
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdPhone = document.createElement("td");


            tdEmail.textContent = email;
            tdId.textContent = iduser;
            tdName.textContent = name;
            tdPhone.textContent = phone;

            tr.appendChild(tdEmail);
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdPhone);
            tabla.appendChild(tr);

        })
        .catch(res => "ERROR. Revise la configuración");
});




/* MOSTRAR DATOS DESDE DIRECCION HASTA TELEFONO

    address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
    company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
    email: "Sincere@april.biz"
    id: 1
    name: "Leanne Graham"
    phone: "1-770-736-8031 x56442"
*/