import React,{useState} from "react";
import {  View } from "react-native";
import styled,{css} from "styled-components";
import QuizChoiceButton from "../QuizChoiceButton";
import {randomizeChoices} from "../../../../helpers/utility"

const ButtonRow = styled.View`
flex-direction: row;
display: flex;
justify-content:space-between;
width: 100%;


`

export default ButtonGrid = ({data, onSelect})=>{
  let options = data.questions[data.currentQuestionIndex].incorrect_answers;
  const correctAnswer = data.questions[data.currentQuestionIndex].correct_answer;
  const [choices] = useState(randomizeChoices(options,correctAnswer));
    return (
        <View>
             <ButtonRow>
            <QuizChoiceButton onPress={()=>onSelect(choices[0])} text={choices[0]} right={false}/>
            <QuizChoiceButton onPress={()=>onSelect(choices[1])} text={choices[1]} right={true}/>

        </ButtonRow>

        {data.questions[data.currentQuestionIndex].type === "multiple" && <ButtonRow>
            <QuizChoiceButton onPress={()=>onSelect(choices[2])}text={choices[2]} right={false}/>
            <QuizChoiceButton onPress={()=>onSelect(choices[3])} text={choices[3]} right={true}/>

        </ButtonRow>}
        </View>
       
    )
}
