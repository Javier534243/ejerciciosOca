function dqs(sel) {
    return document.querySelector(sel)
}

const tirarDado = dqs("#botonDado")

const informacionTurno = dqs("#informacionTurno")

const jugadorA = {
    nombre: "A",
    posicion: 0,
    activado: true,
}

const jugadorB = {
    nombre: "B",
    posicion: 0,
    activado: false,
}

tirarDado.addEventListener("click", (e) => {
    e.preventDefault()
    moverJugador() 
})

function actualizarInformacion() {
    let htmlContendio = ""
    if (jugadorA.activado === true) {
        htmlContendio = `Es el turno del jugador: ${jugadorA.nombre}`
    } else {
        htmlContendio = `Es el turno del jugador: ${jugadorB.nombre}`
    }
    informacionTurno.innerHTML = htmlContendio
}

function moverJugador() {
    
    let dado = Math.floor((Math.random() * 6) + 1)
    if (jugadorA.activado === true) {
        jugadorA.posicion += dado
        jugadorA.activado = false
        jugadorB.activado = true
    } else {
        jugadorB.posicion += dado
        jugadorA.activado = true
        jugadorB.activado = false
    }
    actualizarInformacion()
}

actualizarInformacion()