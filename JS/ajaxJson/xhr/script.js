const button = document.getElementById('button');
const lista = document.getElementById('lista');


button.addEventListener('click', () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        console.log(JSON.parse(data.target.response));

        const personas = JSON.parse(data.target.response);

        for (let i = 0; i < personas.length; i++) {
            let id = JSON.parse(data.target.response)[i].id;
            let name = JSON.parse(data.target.response)[i].name;

            let li = document.createElement("li");
            li.textContent = `${id} - ${name}`;

            lista.appendChild(li);
        }

        button.disabled = true;
    })

    xhr.send();
})