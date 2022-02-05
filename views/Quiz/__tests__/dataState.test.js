import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';
import {getRandomInt,generateData,getQuestionNumber} from "../data/index"


// a test for getQuestionNumber function
describe('test getQuestionNumber function',()=>{
    it('getQuestionNumber function gets Correct question number normally', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 11
            if(index < 10){
                //set each 
                item.status.answered = true,
    
            // select random answer
            item.status.answerIndex = getRandomInt(1,4)
            return item
            }
            return item
        })
      
        expect(getQuestionNumber(data)).toEqual({ currentQuestion:11,
            numberOfQuestionsAnswered:10,
            progress:55,
            totalQuestions:20})
         //   
       
    
    });

    it('getQuestionNumber function gets Correct question number when on last question', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 19
            if(index < 19){
                //set each answer to true except the last one
                item.status.answered = true,
    
            // select random answer
            item.status.answerIndex = getRandomInt(1,4)
            return item
            }
            return item
        })
     
        expect(getQuestionNumber(data)).toEqual({ currentQuestion:20,
            numberOfQuestionsAnswered:19,
            progress:100,
            totalQuestions:20})
          
       
    
    });


    it('getQuestionNumber function gets Correct question number when all questions are answered.', () => {
        // prepare dummy data
        let data = generateData().questions 
        
       
        //set question progress dummy example 
        data = data.map((item,index)=>{
            // set answered questions up to 11
            if(index < 20){
                //set each 
                item.status.answered = true,
    
            // select random answer
            item.status.answerIndex = getRandomInt(1,4)
            return item
            }
            return item
        })
      
        expect(getQuestionNumber(data)).toEqual({ currentQuestion:null,
            numberOfQuestionsAnswered:20,
            progress:100,
            totalQuestions:20})
           
       
    
    });

    it('getQuestionNumber function gets Correct question number when no question answered.',()=>{
        let data = generateData().questions
       
        expect(getQuestionNumber(data)).toEqual({ currentQuestion:1,
            numberOfQuestionsAnswered:0,
            progress:5,
            totalQuestions:20})
    })
})