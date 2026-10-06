function dqs(sel) {
    return document.querySelector(sel)
}

const inputNumero = dqs("#inputNumero")

const resultado = dqs("#resultado")

const contenedor = dqs("#contenedor")

function comprobadorElseIF(num) {
    if (Number(num) < 0) {
        texto = `El numero ha de ser mas grande que 0`
    } else if(Number(num) > 10) {
        texto = `El numero ha de ser mas pequeño que 11`
    }
    else {
        texto = `La tabla de ${num} és: `
    }
    return texto
}

function comprobadorTernario(num) {
    const valor = Number(num)
    let texto = ""
    valor < 0 ? texto = `El numero ha de ser mas grande que 0` : valor > 10 ? texto= `El numero ha de ser mas pequeño que 11` : texto = `La tabla de ${num} és: `
    return texto
}

inputNumero.addEventListener("input", () => {
    const valor = Number(inputNumero.value)

    resultado.innerHTML = comprobadorElseIF(valor)
    let html = "<ul>"
    if (valor >= 0 && valor < 11) {
        for (let i = 0;i <= 10;i++) {
            html += `<li>${valor} * ${i} = ${valor * i}</li>`
        }
    }
    html += "</ul>"
    
    contenedor.innerHTML = html
    
})