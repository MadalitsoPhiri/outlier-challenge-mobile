import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import {ScrollView, Dimensions} from "react-native"
import { setQuizState } from '../Quiz/data/index';
import {View} from "react-native"
import ButtonGrid from './components/ButtonGrid';
import ProgressBar from './components/ProgressBar';
import Difficulty from './components/Difficulty';
import StatsBar from './components/StatsBar';
import { getQuizProgress } from '../../helpers/utility';
import AnswerResultArea from './components/AnswerResultArea';



const Container = styled.SafeAreaView`
flex:1;
height:100%;
display:flex;
background-color:white;
flex-direction:column;
`;

const InnerContainer = styled.View`
flex:1;
display: flex;
flex-direction: column;
background-color: white;


`
const QuestionTitle = styled.Text`
font-size: 25px;
color:black;
font-weight: 500;
margin-bottom: 5px;


`
const CategoryText = styled.Text`
font-size: 12px;
color:gray;
font-weight: 500;
margin-bottom: 1%;

`
const QuestionText = styled.Text`
font-size: 15px;
color:black;
font-weight: 500;
margin-bottom: 12%;


`
// const ContentContainer = styled.ScrollView`
// flex:1;
// height:100%;
// display: flex;
// flex-direction: column;
// /* justify-content: space-between; */
// padding: 10% 8%;
// `
const Spacer = styled.View`
flex:1;
`

export default ({getQuestions})=>{
   //TODO:Convert local state into global state with redux or context
   const [data, setData] = useState(setQuizState());
   const screenHeight = Dimensions.get('window').height
   

   const handleOnSelected = (answer)=>{
      const currentQuestions = data.questions
      const isCorrect = currentQuestions[data.currentQuestionIndex].correct_answer === answer
      currentQuestions[data.currentQuestionIndex] = {...currentQuestions[data.currentQuestionIndex],answered:true,answer}
      const correctCount = isCorrect?{numCorrectAnswers:data.numCorrectAnswers + 1}:{numWrongAnswers:data.numWrongAnswers + 1}

      setData({...data,questions:currentQuestions,...correctCount})
     
   }

   const handleOnNextQuestion = ()=>{
      
      setData({...data,currentQuestionIndex:data.currentQuestionIndex + 1})
   }
   
   useEffect(()=>{
      // get Questions
      const result = getQuestions()
 
      setData({...data,questions:result,loading:false})
      

   },[])

   useEffect(()=>{
// console.log("state changed:",data)
   },[data])
   
   //check if loading 
   if(data.loading) return null
  return(
     <Container>
        <ProgressBar progress={`${getQuizProgress(data)}%`}/>
        <ScrollView  contentContainerStyle={{justifyContent:"space-between",flexDirection:"column",height:"100%",display:"flex",paddingHorizontal:"8%",paddingVertical:"10%"}}>
      
           
           <QuestionTitle testID="Question.Label">{`Questions ${data.currentQuestionIndex + 1 } of ${data.questions.length}`}</QuestionTitle>
           <CategoryText>{data.questions[data.currentQuestionIndex].category}</CategoryText>
           <Difficulty value={data.questions[data.currentQuestionIndex].difficulty}/>
           
           
            <QuestionText>{data.questions[data.currentQuestionIndex].question}</QuestionText>

            <ButtonGrid data={data} onSelect={handleOnSelected} setter={setData}/> 
         
            <AnswerResultArea data={data} onPress={handleOnNextQuestion}/>
            <Spacer/>
            
            <StatsBar data={data}/>

      
       
        </ScrollView>

      
     </Container>
    )
}