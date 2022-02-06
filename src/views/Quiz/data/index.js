export const Constants = {
    EASY:"easy",
    MEDIUM:"easy",
    HARD:"hard",
}
export const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
const getMinimumScore = ()=>{
    return 
}
const getMaximumScore = (numberOfQuestionsAvailable, totalNumberOfQuestions)=>{
    
    return Math.round(numberOfQuestionsAvailable / totalNumberOfQuestions * 100)
}  
const getCurrentScore = (numberOfQuestionsAnswered,numberOfQuestionsAnsweredCorrectly)=>{
    if(numberOfQuestionsAnswered === 0) return 0;
     return Math.round(numberOfQuestionsAnsweredCorrectly / numberOfQuestionsAnswered * 100)
}
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
                totalQuestions:questions.length
            }
         }else{
           if(questions[i].choices[questions[i].status.answerIndex]?.isCorrect){
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
        totalQuestions:questions.length
    }
 }
export const generateData = ()=>{return{
    score:"0%",
    maxScore:"100%",
    minScore:"0%",
    progress:"0%",
    questions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>{return {
        text:"At the start of a standard game of Monopoly, if you throw a double six, which square would you land on?",
        category:"Entertaiment: Board Games",
        difficulty:Constants.HARD,
        status:{
            answered:false,
            answerIndex:null
        },
        choices: [
            {isCorrect:false,text:"Chance"},
            {isCorrect:false,text:"Water Works"},
            {isCorrect:true,text:"Electric Company"},
            {isCorrect:false,text:"Community Chest"}
        ]
     }}),
     
    
}} 