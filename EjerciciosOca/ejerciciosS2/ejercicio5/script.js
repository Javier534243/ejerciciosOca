function dqs(sel) {
    return document.querySelector(sel)
}

const propaganda = dqs("#propaganda")

const input = dqs("#input")

const boton = dqs("#boton")

boton.addEventListener("click", (e) => {
    e.preventDefault()
    propaganda.textContent = `Maricarmen es una ${input.value}`
    input.value = ""
    propaganda.classList.add('alerta')
})