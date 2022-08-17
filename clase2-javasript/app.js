import { questionsArray } from './questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'
//const question = new Question(data[0].question, data[0].choices, data[0].answer)
//const result = question.isCorrectAnswer('High Level Languages')
//const result = questionsArray[0].isCorrectAnswer('hola')
//console.log(result)

const renderPage = (quiz, ui) => {
    if(quiz.isEnded()) {
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getCurrentQuestions().text)
        ui.showChoices(quiz.getCurrentQuestions().choices, (currentChoice) => {
            quiz.validateAndContinue(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex + 1, questionsArray.length)
    }
    

}

const main = () => {
    const quiz = new Quiz(questionsArray)
    const ui = new UI()

    renderPage(quiz, ui)
}

main()