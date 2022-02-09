import React,{useState, useEffect} from "react";
import styled,{css} from "styled-components/native";
import QuizChoiceButton from "../QuizChoiceButton";
import {randomizeChoices} from "../../../../helpers/utility"

const ButtonRow = styled.View`
flex-direction: row;
display: flex;
justify-content:space-between;
width: 100%;


`
const Container = styled.View`

`

export default ButtonGrid = ({data, onSelect})=>{
    const options = data.questions[data.currentQuestionIndex].incorrect_answers;
    const [choices,setChoices] = useState(randomizeChoices(options,correctAnswer));
    
    const correctAnswer = data.questions[data.currentQuestionIndex].correct_answer;
    const question = data.questions[data.currentQuestionIndex];

  useEffect(()=>{

    setChoices(randomizeChoices(options,correctAnswer))
  },[data.currentQuestionIndex])
    return (
        <Container>
             <ButtonRow>
            <QuizChoiceButton selected={choices[0] === question.answer} disabled={question.answered} onPress={()=>onSelect(choices[0])} text={choices[0]} right={false}/>
            <QuizChoiceButton  selected={choices[1] === question.answer} disabled={question.answered} onPress={()=>onSelect(choices[1])} text={choices[1]} right={true}/>

        </ButtonRow>

        {data.questions[data.currentQuestionIndex].type === "multiple" && <ButtonRow>
            <QuizChoiceButton  selected={choices[2] === question.answer} disabled={question.answered} onPress={()=>onSelect(choices[2])}text={choices[2]} right={false}/>
            <QuizChoiceButton selected={choices[3] === question.answer} disabled={question.answered} onPress={()=>onSelect(choices[3])} text={choices[3]} right={true}/>

        </ButtonRow>}
        </Container>
       
    )
}
