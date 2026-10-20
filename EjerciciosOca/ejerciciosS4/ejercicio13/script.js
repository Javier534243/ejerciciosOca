const jugadores = []

const letras = ["A","B","C","D"]

const nombreJugador = document.querySelector("#nombreJugador")

const anyadirJugador = document.querySelector("#anyadirJugador")

const jugadoresCreados = document.querySelector("#jugadoresCreados")
 

function crearArrayjugadores() {
    let posicion = 0
    anyadirJugador.addEventListener("click", (e) => {
        e.preventDefault()
        jugadores.push({jugador: letras[posicion],nombre: nombreJugador.value})
        nombreJugador.value = ""
        posicion++
        console.log(jugadores)
        anyadirJugadores()
    })
}

function anyadirJugadores() {
    let htmlcontenido = ""
    for(const juga of jugadores) {
        htmlcontenido += `<div>Jugador ${juga.jugador}: ${juga.nombre}</div>`
    }
    jugadoresCreados.innerHTML = htmlcontenido
}

crearArrayjugadores()