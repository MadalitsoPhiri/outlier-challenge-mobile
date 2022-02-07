export const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  export const randomizeChoices = (choicesArray,correctAnswer)=>{
      if(choicesArray.length == 0) return choicesArray
   const choicesLength = choicesArray.length + 1
   const randomSelectedIndex = getRandomInt(0,choicesLength - 1)
   if(randomSelectedIndex === choicesLength - 1) return [...choicesArray,correctAnswer]
   // swap out value with correct answer
   const previousValue = choicesArray[randomSelectedIndex] 
    const choicesArrayCopy = [...choicesArray]
    choicesArrayCopy[randomSelectedIndex] = correctAnswer
    choicesArrayCopy[choicesLength - 1] = previousValue
    return choicesArrayCopy

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
