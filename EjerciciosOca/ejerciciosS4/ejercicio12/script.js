function dqs(sel) {
    return document.querySelector(sel)
}

tirarDado = () => Math.floor(Math.random()*6)+1

const boton = dqs("#boton")

const resultado = dqs("#resultado")

boton.addEventListener("click", () => resultado.textContent = `El resultado és: ${tirarDado()}`)