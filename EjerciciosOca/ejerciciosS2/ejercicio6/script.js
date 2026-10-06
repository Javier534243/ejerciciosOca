function dqs(sel) {
    return document.querySelector(sel)
}

const estado = ["jugador A","jugador B"]

let estadoActual = 0

const turnoJugador = dqs("#turnoJugador")

const botonDado = dqs("#botonDado")

const numeroEleguido = dqs('#numeroEleguido')

botonDado.addEventListener("click", () => {
    let numero = Math.floor(Math.random() * 6) +1
    let jugadorQueTira = estado[estadoActual]

    estadoActual = estadoActual === 0 ? 1 : 0
    let proximoJugador = estado[estadoActual]
    
    turnoJugador.innerHTML =
    `<div><p>${jugadorQueTira} ha sacado ${numero}</p>
    <p> Turno del ${proximoJugador}
    </div>`
    
})