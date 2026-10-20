const resultado = document.querySelector("#resultado")

const botonRetornar = document.querySelector("#botonRetornar")

const turnos = [
    {
        jugador: "A",
    },
    {
        jugador: "B"
    },
]

let posicion = 0

console.log(turnos[posicion].jugador)

botonRetornar.addEventListener("click", (e) => {
    e.preventDefault()
    let htmlContenido = ""
    switch (turnos[posicion].jugador) {
        case "A":
            htmlContenido += `Es el turno del Jugador A `
            posicion++
            break
        case "B":
            htmlContenido += `Es el turno del Jugador B `
            posicion--
            break
    }
    const tirarDau = () => Math.floor(Math.random() * 6) + 1
    htmlContenido += `Y ha sacado ${tirarDau()}`
    resultado.innerHTML = htmlContenido
}) 