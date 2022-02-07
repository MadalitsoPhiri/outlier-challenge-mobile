import {HARD} from "../../../helpers/constants"
import Questions from "./questions.json";
import {getCurrentScore, getMaximumScore, getMinimumScore, isCorrect} from "../../../helpers/utility"

export const getQuizProgress = (questions)=>{
    const answeredCorrectly = []
    for(let i = 0; i < questions.length; i++){
      

         if(!questions[i].status.answered){
            return {
                currentQuestion:i+1,
                numberOfQuestionsAnswered:(i+1) - 1,
                progress:Math.floor((i+1)/questions.length * 100),
                currentScore:getCurrentScore((i+1) - 1,answeredCorrectly.length),
                currentMaximumScore:getMaximumScore(answeredCorrectly.length + (questions.length - ((i+1) - 1)),questions.length),
                currentMinimumScore:getMinimumScore(answeredCorrectly.length , questions.length ),
                totalQuestions:questions.length
            }
         }else{
           if(isCorrect(i, questions)){
            answeredCorrectly.push(questions[i].choices[questions[i].status.answerIndex])
           }
    
         }
    }
    return {
        currentQuestion:null,
        numberOfQuestionsAnswered:questions.length,
        progress:100,
        currentScore:getCurrentScore(questions.length,answeredCorrectly.length),
        currentMaximumScore:getMaximumScore(answeredCorrectly.length + (questions.length - questions.length),questions.length),
        currentMinimumScore:getMinimumScore(answeredCorrectly.length , questions.length ),
        totalQuestions:questions.length
    }
 }
export const getQuestions = ()=>Questions.map((item,index)=>{
    return {
        ...item,
        answered:false,
        answer:null
    }
})
export const setQuizState = ()=>{
    return {
       questions:[],
       currentQuestionIndex:0,
       numCorrectAnswers:0,
       numWrongAnswers:0,
       loading:true,
    }
}

     
    