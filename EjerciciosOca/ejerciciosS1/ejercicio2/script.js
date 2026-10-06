function dqs(selector) {
  return document.querySelector(selector);
}

function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

const numero1 = dqs("#numero1");

const numero2 = dqs("#numero2");

const botonSumar = dqs("#botonSumar");

const botonMultiplicar = dqs("#botonMutiplicar")

const total = dqs("#total");


botonSumar.addEventListener("click", (e) => {
    e.preventDefault()

    const valor1 = Number(numero1.value)
    const valor2 = Number(numero2.value)
    
    total.innerHTML = sumar(valor1, valor2)
})

botonMultiplicar.addEventListener("click", (e) => {
  e.preventDefault()

  const valor1 = Number(numero1.value)
  const valor2 = Number(numero2.value)

  total.innerHTML = multiplicar(valor1, valor2)
})