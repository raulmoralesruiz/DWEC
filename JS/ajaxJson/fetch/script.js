const button = document.getElementById('button');
const lista = document.getElementById('lista');


button.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                let id = res[i].id;
                let name = res[i].name;

                let li = document.createElement("li");
                li.textContent = `${id} - ${name}`;

                lista.appendChild(li);
            }
        });
    button.disabled = true;
});