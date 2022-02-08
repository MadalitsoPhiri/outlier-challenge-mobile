import React from "react";
import {  View, Text } from "react-native";
import styled,{css} from "styled-components";


const Result = styled.Text`
font-size: 25px;
font-weight: 500;
color:black;
margin-bottom: 5%;


`
const Button = styled.Pressable`
  padding: 8px 20px;
  border:black 1px solid ;
  border-radius: 5px;
  background-color:#ddd ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
display: flex;
justify-content: center;
align-items: center;
margin-top: 8%;
`
const ButtonText = styled.Text`
font-size: 15px;
color: black;
font-weight: 500;

`

export default ResultContainer = (props)=>{
    const answer = props.data.questions[props.data.currentQuestionIndex].answer;
    const answered = props.data.questions[props.data.currentQuestionIndex].answered;
    const isCorrect = props.data.questions[props.data.currentQuestionIndex].correct_answer === answer;
    const isLastQuestion = props.data.questions.length - 1 === props.data.currentQuestionIndex


    return (answered &&
        <Container>
           <Result>{isCorrect?"Correct!":"Sorry!"}</Result>
            <Button {...props} disabled={isLastQuestion}>
                <ButtonText>{isLastQuestion?"Finish":"Next Question"}</ButtonText>
            </Button>
            
        </Container>
       
    )
}
