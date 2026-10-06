function dqs(sel) {
    return document.querySelector(sel)
}

const nombreJugador = dqs("#nombreJugador")

const formulario = dqs("#formulario")

const botonSubmit = dqs("#botonSubmit")

const textoGenerado = dqs("#textoGenerado")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    textoGenerado.textContent = `Jugador 1: ${nombreJugador.value}`
    nombreJugador.value = ""
})

// botonSubmit.addEventListener("click", (e) => {
//     e.preventDefault()
//     textoGenerado.textContent = `Jugador 1: ${nombreJugador.value}`
//     nombreJugador.value = ""
// })