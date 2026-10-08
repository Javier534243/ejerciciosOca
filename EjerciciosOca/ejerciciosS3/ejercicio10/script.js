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

let posicionActual = casillas[0]

console.log(casillas)

function movimientoFicha() {
    window.addEventListener("keydown", (e) => {
        e.preventDefault()
        if (e.key === "ArrowLeft") {
            if (posicionActual !== 0) {
                posicionActual--
            }
            
            
        } else if(e.key === "ArrowRight") {
            if (posicionActual !== 20) {
                posicionActual++
            }
            
        }
        imprimirCuadricula()
    })
}

function imprimirCuadricula() {
    let htmlContenido = ""
    for (let i = 0;i < casillas.length;i++) {
        if (i == posicionActual ) {
            htmlContenido += `<div class="casilla ficha"></div>`
        } else {
            htmlContenido += `<div class="casilla">${i}</div>`
        }
        
    }
    tabla.innerHTML = htmlContenido
}

movimientoFicha()
imprimirCuadricula()