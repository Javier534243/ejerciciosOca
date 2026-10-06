let nomJugador = ""

const MAX_TIRADES = ""

function dqs(e) {
    return document.querySelector(e);
}

const InputNombre = dqs("#Nombre");

const nombreColocado = dqs("#nombreColocado")

const boton = dqs("#boton")

InputNombre.addEventListener("input", function(){
    nombreColocado.innerHTML = `${InputNombre.value}`
})

boton.addEventListener("click", (e) => {
    e.preventDefault()
    nombreColocado.innerHTML = `${InputNombre.value}`
    
})