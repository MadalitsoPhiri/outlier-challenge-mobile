import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { generateData, getQuestions, setQuizState } from '../Quiz/data/index';
import ButtonGrid from './components/ButtonGrid';
import ProgressBar from './components/ProgressBar';
import Difficulty from './components/Difficulty';
import StatsBar from './components/StatsBar';
import { HARD } from '../../helpers/constants';
import { getQuizProgress } from '../../helpers/utility';



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
const ContentContainer = styled.View`
flex:1;
height:100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10% 8%;
`

export default ()=>{
   const [data, setData] = useState(setQuizState());


   
   useEffect(()=>{
      // get Questions
      const result = getQuestions()
 
      setData({...data,questions:result,loading:false})
      

   },[])
   console.log(data)
   //check if loading 
   if(data.loading) return null
  return(
     <Container>
        <ProgressBar progress={`${getQuizProgress(data)}%`}/>
        <ContentContainer>
        <InnerContainer>
           <QuestionTitle>{`Questions ${data.currentQuestionIndex + 1 } of ${data.questions.length}`}</QuestionTitle>
           <CategoryText>{data.questions[data.currentQuestionIndex].category}</CategoryText>
           <Difficulty value={data.questions[data.currentQuestionIndex].difficulty}/>
            <QuestionText>{data.questions[data.currentQuestionIndex].question}</QuestionText>

            <ButtonGrid data={data} onSelect={(index)=>{
               console.log("onselect", index)
           }} setter={setData}/> 
        </InnerContainer>
        <StatsBar data={data}/>
        </ContentContainer>
      
     </Container>
    )
}