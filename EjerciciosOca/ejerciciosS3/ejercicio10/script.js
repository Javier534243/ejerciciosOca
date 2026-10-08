function dqs(sel) {
    return document.querySelector(sel)
}

const tabla = dqs("#tabla")

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
    for (let i = 0;i < casillas.length;i++) {
        htmlContenido += `<div class="casilla"></div>`
    }
    tabla.innerHTML = htmlContenido
}

imprimirCuadricula()