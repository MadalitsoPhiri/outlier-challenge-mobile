export const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
export const getMinimumScore = (numberOfQuestionsAnsweredCorrectly,totalNumberOfQuestions)=>{
    if(numberOfQuestionsAnsweredCorrectly == 0) return 0
    return numberOfQuestionsAnsweredCorrectly / totalNumberOfQuestions * 100
}
export const getMaximumScore = (numberOfQuestionsAvailable, totalNumberOfQuestions)=>{
    
    return Math.round(numberOfQuestionsAvailable / totalNumberOfQuestions * 100)
}  
export const getCurrentScore = (numberOfQuestionsAnswered,numberOfQuestionsAnsweredCorrectly)=>{
    if(numberOfQuestionsAnswered === 0) return 0;
     return Math.round(numberOfQuestionsAnsweredCorrectly / numberOfQuestionsAnswered * 100)
}
export const isCorrect = (i, questions) => questions[i].choices[questions[i].status.answerIndex]?.isCorrect