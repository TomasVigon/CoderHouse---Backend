export class UI {
    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = '' //esto es para que no se acumulen las preguntas
        //sino cada vez que se cambia de pagina se muestran todas las preguntas nuevamente
        for (let i=0; i<choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i]
            button.className = "button" //para que tome los estilos del boton
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button) //para que se agregue el boton al DOM
        }
    }

    showScore(score) {
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your final score is: ${score} </h2>
        `
        const element = document.getElementById("quiz")
        element.innerHTML = quizEndHTML
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById("progress")
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}