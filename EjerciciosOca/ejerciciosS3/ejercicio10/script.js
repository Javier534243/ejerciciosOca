function dqs(sel) {
    return document.querySelector(sel)
}

const casillas = []

function rellenarArray(cantidad) {
    for (let i = 0;i <= cantidad;i++) {
        casillas.push(i)
}
}

rellenarArray(20)

console.log(casillas)

function imprimirCuadricula() {
    let htmlContenido = ""
    for (const casilla of casillas) {
        htmlContenido += `<div class="casilla"></div>`
    }
}