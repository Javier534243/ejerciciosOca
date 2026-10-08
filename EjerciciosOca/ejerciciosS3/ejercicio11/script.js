function dqs(sel) {
    return document.querySelector(sel)
}

const tirarDado = dqs("#botonDado")

const tablero = dqs("#tablero")

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

function tirar() {
    tirarDado.addEventListener("click", (e) => {
        e.preventDefault()
        moverJugador()
    })
}


const arrayTablero = []

function rellenarTablero(cantidad) {
    for (let i = 0;i <= cantidad;i++) {
        arrayTablero.push(i)
    }
}

function comprobarVictoria() {
    if (jugadorA.posicion > 20) {
        alert("Ha ganado el jugador A")
        tirarDado.classList.add('hidden')
    } else if (jugadorB.posicion > 20) {
        alert("Ha ganado el jugado B")
        tirarDado.classList.add('hidden')
    }
}

rellenarTablero(20)

function imprimirTablero() {
    let htmlContendio = ""
    for(let i = 0;i < arrayTablero.length;i++) {
        if(jugadorA.posicion === i && jugadorB.posicion === i) {
            htmlContendio += `<div class="celda ficha-jugadorA_B"></div>`
        }else if(jugadorA.posicion === i) {
            htmlContendio += `<div class="celda ficha-jugadorA"></div>`
        } else if(jugadorB.posicion === i) {
            htmlContendio += `<div class="celda ficha-jugadorB"></div>`
        } else {
            htmlContendio += `<div class="celda">${i}</div>`
        }

    }
    tablero.innerHTML = htmlContendio
}

function actualizarInformacion(num) {
    let htmlContendio = ""
    if (jugadorA.activado === true) {
        const { nombre } = jugadorA
        htmlContendio += `
        <div>Es el turno del jugador: ${nombre}</div>
        ${num !== undefined ? `<div id="contadorEscondido">El ${nombre} ha sacado ${num}` : "El jugador A es el primero en lanzar el dado" }`
    } else {
        const {nombre}  = jugadorB
        htmlContendio += `Es el turno del jugador: ${nombre}
        <div>El ${nombre} ha sacado ${num}`
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
    actualizarInformacion(dado)
    imprimirTablero()
    comprobarVictoria()
}

imprimirTablero()

tirar()

actualizarInformacion()