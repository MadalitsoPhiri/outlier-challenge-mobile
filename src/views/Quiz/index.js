import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { generateData, getQuizProgress } from '../Quiz/data/index';
import ButtonGrid from './components/ButtonGrid';
import ProgressBar from './components/ProgressBar';
import Difficulty from './components/Difficulty';
import StatsBar from './components/StatsBar';



const Container = styled.SafeAreaView`
flex:1;
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
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10% 8%;
`

export default ()=>{
   const [data, setData] = useState(generateData());
   const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
   const [Progress,setProgress] = useState(null);
   
   useEffect(()=>{
      const Progress = getQuizProgress(data.questions)
     setCurrentQuestionIndex(Progress.currentQuestion - 1)
     setProgress(Progress)
   
   //   console.log("current q index",JSON.stringify(progress))
     console.log("current data",JSON.stringify(Progress))

   },[])
   console.log(data)
  return(Progress != null ?
     <Container>
        <ProgressBar progress={`${Progress.progress}%`}/>
        <ContentContainer>
        <InnerContainer>
           <QuestionTitle>{`Questions ${Progress.currentQuestion} of ${data.questions.length}`}</QuestionTitle>
           <CategoryText>{data.questions[currentQuestionIndex].category}</CategoryText>
           <Difficulty value={data.questions[currentQuestionIndex].difficulty}/>
<QuestionText>{data.questions[currentQuestionIndex].text}</QuestionText>

           <ButtonGrid data={data.questions[currentQuestionIndex].choices}/>
        </InnerContainer>
        <StatsBar data={Progress}/>
        </ContentContainer>
      
     </Container>:null
    )
}