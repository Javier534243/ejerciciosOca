const casillasEspeciales = [4,11,16]

const casillaActual = 0

const turnoJugador = 0

function funcionCasillas() {
    const cE = casillasEspeciales
    const cA = casillaActual
    if (cE[0] === cA) {
        cA = 9
        console.log("Abanza a la casilla 9")
    } else if (cE[1] === cA) {
        cA = 0
        console.log("Vuelves a la entrada")
    } else if (cE[2] === cA) {
        if (turnoJugador === 0) {
            turnoJugador = 1
        } else {
            turnoJugador = 0
        }
        console.log("Turno perdido.")
    }
}