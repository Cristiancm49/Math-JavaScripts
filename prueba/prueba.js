const idUser = document.querySelector('#idUser');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', buscarUsuario);

function buscarUsuario () {
    const idU = Number(idUser.value);




    const users = [];

    users.push({
        id: 123,
        name: "juanito andres"
})

    users.push({
        id: 456,
        name: "Juanita andres"
    })

    function buscarUsuario (usuario) {
        return usuario.id == idU
    }

    const nameUser = users.find(buscarUsuario)

    if(nameUser) {
        
        resultado.innerText = nameUser.name;
    } else {
        resultado.innerText = "falso"
    }
}