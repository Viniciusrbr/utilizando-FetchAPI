const url = "http://localhost:5500/api"

// fazendo GET 
function getUsers() {
    fetch(url)
        .then(response => response.json()) //esse then passa a responsta para o de baixo
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

// fazendo POST  
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = data)
        .catch(error => console.error(error))
}

const newUser = {
    name: "Rafael Garcia",
    avatar: "https://picsum.photos/200/300",
    city: "Belém"
}

// fazendo PUT
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = data)
        .catch(error => console.error(error))
}

const updatedUser = {
    name: "Mayk Brito",
    avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
    city: "Recife"
}

// fazendo DELETE
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",// não ussamos um body aqui, pois nao estamos enviando dados para a API
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertAPI.textContent = data)
        .catch(error => console.error(error))
}


//chamada de metodos

//addUser(newUser) // adicionando usuarios 
//updateUser(updatedUser, 9) // atualizando inforamção de um usuario
//deleteUser(2) // deletando um usuario em especifico
getUsers()
getUser()