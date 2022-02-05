export const Constants = {
    EASY:"easy",
    MEDIUM:"easy",
    HARD:"hard",
}
export const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
export const getQuestionNumber = (questions)=>{
    for(let i = 0; i < questions.length; i++){
         if(!questions[i].status.answered){
            return {
                current:i+1,
                total:questions.length
            }
         }
    }
    return {
        current:0+1,
        total:questions.length
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