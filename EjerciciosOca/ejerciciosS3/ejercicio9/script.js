const arrayPreguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Madrid","París","Londres","Berlín"],
        correcta: 1,
    },
    {
        pregunta: "¿Cuanto es 2 + 2?",
        respuestas: ["3","4","5"],
        correcta: 1,
    },
    {
        pregunta: "¿Que idioma es este?",
        respuestas: ["Catalan","Ingles","Español","Catalan"],
        correcta: 2,
    },
]

const seccion = document.querySelector("#seccion")

const mensaje = document.querySelector("#mensaje")

function imprimirPregunta() {

    const preguntaActual = arrayPreguntas[0]
    
    let htmlContenido = `<div>${preguntaActual.pregunta}</div>`

    htmlContenido += '<div>'

    for (const respuesta of preguntaActual.respuestas) {
        htmlContenido += `<button>${respuesta}</button>`
    }

    htmlContenido += '</div>'

    seccion.innerHTML = htmlContenido

    const botones = seccion.querySelectorAll('button')

    for (let i = 0;i < botones.length;i++) {
        botones[i].addEventListener('click', () => {
            
            if (preguntaActual.correcta === i) {
                mensaje.textContent = '¡Correcto!'
            } else {
                mensaje.textContent = 'Incorrecto...'
            }
        })
    }
}

imprimirPregunta()