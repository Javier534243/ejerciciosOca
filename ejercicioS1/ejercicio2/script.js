function dqs(selector) {
  return document.querySelector(selector);
}

function sumar(a, b) {
  return a + b;
}

const numero1 = dqs("#numero1");

const numero2 = dqs("#numero2");

const botonSumar = dqs("botonSumar");

const total = dqs("#total");


botonSumar.addEventListener("click", (e) => {
    e.preventDefault()
    
})