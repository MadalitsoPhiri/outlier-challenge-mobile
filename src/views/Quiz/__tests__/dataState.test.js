import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';
import {getQuizProgress, getMaximumScore, getMinimumScore, getCurrentScore} from "../../../helpers/utility"



describe('Quiz data and State Tests',()=>{

    it('test if getProgress function returns correct progress percentage when at first question.',()=>{
        const data = {
            questions:[{},{},{},{}],
            currentQuestionIndex:0,
            
         }
         expect(getQuizProgress(data)).toEqual(25)

    })
    it('test if getProgress function returns correct progress normaly',()=>{
        const data = {
            questions:[{},{},{},{},{},{},{},{},{},{}],
            currentQuestionIndex:4,
            
         }
         expect(getQuizProgress(data)).toEqual(50)
    })
    it('test if getProgress function returns correct progress when at last question',()=>{
        const data = {
            questions:[{},{},{},{},{},{},{},{},{},{}],
            currentQuestionIndex:9,
            
         }
         expect(getQuizProgress(data)).toEqual(100)
    })
    it('test if getMaximumScore function returns correct score percentage',()=>{
          const data = {
            questions:[{},{},{},{},{}],
            currentQuestionIndex:0,
            numCorrectAnswers:1,
            numWrongAnswers:1,
            loading:true,
         }
         expect(getMaximumScore(data)).toEqual(80)
    })
    it('test if getMinimumScore function returns correct score percentage',()=>{
        const data = {
            questions:[{},{},{},{},{}],
            currentQuestionIndex:0,
            numCorrectAnswers:1,
            numWrongAnswers:1,
            loading:true,
         }
         expect(getMinimumScore(data)).toEqual(20)
    })
    it('test if getCurrentScore function returns correct score ',()=>{
        const data = {
            questions:[{},{},{},{},{}],
            currentQuestionIndex:0,
            numCorrectAnswers:1,
            numWrongAnswers:1,
            loading:true,
         }
       expect(getCurrentScore(data)).toBe(50)
    })

})