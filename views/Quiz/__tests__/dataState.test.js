import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';
import {getRandomInt,generateData,getQuestionNumber} from "../data/index"


// a test for getQuestionNumber function
it('getQuestionNumber function gets Correct question number', () => {
    // prepare dummy data
    let data = generateData()
   
    //set question progress dummy example 
    data = data.questions.map((item,index)=>{
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
    console.log(JSON.stringify(data));
    expect(getQuestionNumber(data)).toEqual({current:11,total:20})

});

