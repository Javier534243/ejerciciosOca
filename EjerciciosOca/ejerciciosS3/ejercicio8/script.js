const casillas = ["Start","Poble","Pont","Casa","Bosc","Mola","Final"]

const mostrarResultado = document.querySelector("#mostrarResultado")

const dado = Math.floor((Math.random()) * 7 )
const nombreCasilla = casillas[dado]

mostrarResultado.textContent = `Te ha salido el numero ${dado}. Has caido en ${nombreCasilla}`