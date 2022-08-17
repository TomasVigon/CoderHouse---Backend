export class Quiz {
    constructor(questions) {
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
    }

    getCurrentQuestions() {
        return this.questions[this.questionIndex]
    }

    validateAndContinue(answer) {
        if (this.getCurrentQuestions().isCorrectAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }

}