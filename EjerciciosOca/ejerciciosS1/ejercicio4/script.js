const estado = ["Inicio","turnoA","turnoB","final"]

const turno = document.querySelector("#turno")

let estadoActual = estado[1];

switch (estadoActual) {
    case "Inicio":
        turno.textContent = `Inicio del juego`
        break
    case "turnoA":
        turno.textContent = `Es el turno del jugador A`
        break
    case "turnoB":
        turno.textContent = `Es el turno del jugador B`
        break
    case "final":
        turno.textContent = 'Final del juego'
        break
    default:
        turno.textContent = 'Estado desconocido'
}