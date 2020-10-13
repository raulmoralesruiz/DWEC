const users = [{
        id: 1,
        name: 'Alvaro'
    },
    {
        id: 2,
        name: 'Yi'
    },
    {
        id: 3,
        name: 'Abraham'
    },
    {
        id: 4,
        name: 'Raul'
    }
];

const getUser = (id, cb) => {
    let user = users.find(user => user.id == id);
    if (!user) {
        cb(`Not exist a user with id: ${id}`);
    } else {
        cb(null, user);
    }
}

let id = prompt("Enter user id:");

getUser(id, (err, user) => {
    if (err) {
        document.write(err);
        return console.log(err);
    } else {
        document.write(`The user is: ${user.name}`);
        console.log(`The user is: ${user.name}`);
    }
});