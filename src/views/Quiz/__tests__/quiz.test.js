import React from 'react';
import { render, fireEvent, within} from '@testing-library/react-native';
import Quiz from "../index"
import {getQuestions} from "../../Quiz/data/index"


test('check if initial ui is rendererd correctly', () => {
  const { getByText} = render(<Quiz getQuestions={getQuestions} />);
    getByText('Score: 0%');
    getByText('Max Score: 100%');
    getByText('Questions 1 of 20');
    getByText('Dirk the Daring');
    getByText('Arthur');
    getByText('Sir Toby Belch');
    getByText('Guy of Gisbourne');
});

test("test if buttons adjust from choice type multiple to choice type boolean",()=>{
  const { getAllByTestId, getByTestId} = render(<Quiz getQuestions={getQuestions} />);
    expect(getAllByTestId('Choice.Button').length).toBe(4);
    for(i=0; i < 7; i++){
        // go to question 8, a boolean question
        fireEvent.press(getAllByTestId('Choice.Button')[0])
        fireEvent.press(getByTestId('Next.Button'))


    }
    console.log(getAllByTestId('Choice.Button'))
    expect(getAllByTestId('Choice.Button').length).toBe(2);

})


test('test if question number is updated correctly after next is clicked.',()=>{
    const { getByText, getByTestId, getAllByTestId} = render(<Quiz getQuestions={getQuestions} />);
    getByText('Questions 1 of 20')
    fireEvent.press(getAllByTestId('Choice.Button')[0])
    fireEvent.press(getByTestId('Next.Button'))
    getByText('Questions 2 of 20')

   
})

test('test if progress stats and AnswerResultArea text is updated correctly after correct choice selected',()=>{
    const { getByText, getByTestId, getAllByTestId, UNSAFE_getByProps} = render(<Quiz getQuestions={getQuestions} />);
    fireEvent.press(UNSAFE_getByProps({testAnswer:'Dirk the Daring'}))
    
    getByText('Score: 100%')
    getByText('Max Score: 100%')
    getByText('Correct!')
    

   
})

test('test if progress stats  and AnswerResultArea text is updated correctly after wrong choice selected',()=>{
    const { getByText, getByTestId, getAllByTestId, UNSAFE_getByProps} = render(<Quiz getQuestions={getQuestions} />);
    fireEvent.press(UNSAFE_getByProps({testAnswer:'Guy of Gisbourne'}))
    
    getByText('Score: 0%')
    getByText('Max Score: 95%')
    getByText('Sorry!')
    

   
})