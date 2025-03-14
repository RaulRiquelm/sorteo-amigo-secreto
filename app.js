let amigos = [];

function agregarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nuevoAmigo = inputElement.value.trim()

    if (nuevoAmigo !== "") {
        amigos.push(nuevoAmigo)
        inputElement.value = ""
        listarAmigos()

    } else {
        console.log("ingrese un nombre valido")
    }


}
function listarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    amigos.forEach(amigo => {
        let li = document.createElement('li')
        li.textContent = amigo
        lista.appendChild(li)
    })
}
function resetList() {
    document.getElementById('listaAmigos').innerHTML = ""
}