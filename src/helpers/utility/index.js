export const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
export const getMinimumScore = (data)=>{
    const totalNumberOfQuestions = data.questions.length
   if(data.numCorrectAnswers == 0) return 0;

    return Math.round((data.numCorrectAnswers) / totalNumberOfQuestions * 100)
}
export const getMaximumScore = (data)=>{
   const totalNumberOfQuestions = data.questions.length
   if(totalNumberOfQuestions == 0) return 0;

    return Math.round((totalNumberOfQuestions - data.numWrongAnswers) / totalNumberOfQuestions * 100)
}  
export const getCurrentScore = (data)=>{
    const totalQuestionsAnswered = data.numWrongAnswers + data.numCorrectAnswers;
    if(totalQuestionsAnswered == 0) return 0;
     return Math.round(data.numCorrectAnswers / totalQuestionsAnswered * 100)
}
export const getQuizProgress = (data)=>{
    if(data.questions.length === 0) return 0
    return Math.round((data.currentQuestionIndex + 1)/ data.questions.length * 100)
}
