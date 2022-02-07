import {HARD} from "../../../helpers/constants"
import Questions from "./questions.json";
import {getCurrentScore, getMaximumScore, getMinimumScore, isCorrect} from "../../../helpers/utility"

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

     
    