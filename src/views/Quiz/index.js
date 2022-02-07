import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { generateData, getQuestions, getQuizProgress, setQuizState } from '../Quiz/data/index';
import ButtonGrid from './components/ButtonGrid';
import ProgressBar from './components/ProgressBar';
import Difficulty from './components/Difficulty';
import StatsBar from './components/StatsBar';
import { HARD } from '../../helpers/constants';



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
   const [data, setData] = useState(setQuizState());


   
   useEffect(()=>{
      // get Questions
      const result = getQuestions()
      // console.log(data)
      setData({...data,questions:result,loading:false})
      // const Progress = getQuizProgress(data.questions)
   //   setCurrentQuestionIndex(Progress.currentQuestion - 1)
   //   setProgress(Progress)
   
   //   console.log("current q index",JSON.stringify(progress))
   //   console.log("current data",JSON.stringify(Progress))

   },[])
   console.log(data)
   //check if loading 
   if(data.loading) return null
  return(
     <Container>
        <ProgressBar progress={`${5}%`}/>
        <ContentContainer>
        <InnerContainer>
           <QuestionTitle>{`Questions ${1} of ${20}`}</QuestionTitle>
           <CategoryText>{"Games"}</CategoryText>
           <Difficulty value={HARD}/>
<QuestionText>{"what are you working on?"}</QuestionText>

           {/* <ButtonGrid data={data.questions[currentQuestionIndex].choices}/> */}
        </InnerContainer>
        {/* <StatsBar data={Progress}/> */}
        </ContentContainer>
      
     </Container>
    )
}