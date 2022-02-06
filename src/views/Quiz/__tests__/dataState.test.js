import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';
import {getRandomInt,generateData,getQuizProgress} from "../data/index"


// a test for getQuestionNumber function
describe('test getQuizProgress function',()=>{
    it('getQuizProgress function gets Correct progress  normally', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 10
            if(index < 10){
                //set each 
                item.status.answered = true,
    
            // select random answer
            item.status.answerIndex = 2
            return item
            }
            return item
        })
      
        expect(getQuizProgress(data)).toEqual({ currentQuestion:11,
            numberOfQuestionsAnswered:10,
            progress:55,
            currentScore:100,
            currentMaximumScore:100,
            totalQuestions:20})
         //   
       
    
    });

    it('getQuizProgress function gets Correct progress when on last question', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 19
        
            if(index < 10){
                item.status.answerIndex = 2;
                item.status.answered = true;

            }else if(index >= 10 && index < 19){
                item.status.answerIndex = 4;
                item.status.answered = true;
}            return item;
        })
     
        expect(getQuizProgress(data)).toEqual({ currentQuestion:20,
            numberOfQuestionsAnswered:19,
            progress:100,
            currentScore:53,
            currentMaximumScore:55,
            totalQuestions:20})
          
       
    
    });


    it('getQuizProgress function gets Correct progress when all questions are answered.', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 20
            
            if(index < 10){
                item.status.answerIndex = 2;
                item.status.answered = true;

            }else if(index >= 10 && index < 20){
                item.status.answerIndex = 4;
                item.status.answered = true;
}            return item;
        
            
            return item
        })
      
        expect(getQuizProgress(data)).toEqual({ currentQuestion:null,
            numberOfQuestionsAnswered:20,
            progress:100,
            currentScore:50,
            currentMaximumScore:50,
            totalQuestions:20})
           
       
    
    });

    it('getQuizProgress function gets Correct progress info when no question answered.',()=>{
        let data = generateData().questions
       
        expect(getQuizProgress(data)).toEqual({ currentQuestion:1,
            numberOfQuestionsAnswered:0,
            progress:5,
            currentScore:0,
            currentMaximumScore:100,
            totalQuestions:20})
    })
})