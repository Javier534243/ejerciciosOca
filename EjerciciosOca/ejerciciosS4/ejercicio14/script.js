const partida = document.querySelector("#partida")

const fechaActual = new Date()

const dia = fechaActual.getDate()
const mes = fechaActual.getMonth() + 1
const ano = fechaActual.getFullYear()

const dataPatida = `${dia}/${mes}/${ano}`

partida.innerHTML = `Partida iniciada: ${dataPatida}`