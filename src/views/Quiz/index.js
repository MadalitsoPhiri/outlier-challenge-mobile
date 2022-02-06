import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { generateData } from '../Quiz/data/index';
import ButtonGrid from './components/ButtonGrid';
import ProgressBar from './components/ProgressBar';



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
padding: 10% 8%;
`
const QuestionTitle = styled.Text`
font-size: 25px;
color:black;
margin-bottom: 5px;

`
const CategoryText = styled.Text`
font-size: 15px;
color:gray;
font-weight: 500;
margin-bottom: 8%;

`
const QuestionText = styled.Text`
font-size: 15px;
color:black;
font-weight: 500;
margin-bottom: 8%;


`

export default ()=>{
   const [data, setData] = useState(generateData())
  return(
     <Container>
        <ProgressBar progress={"35%"}/>
        <InnerContainer>
           <QuestionTitle>Questions 16 of 20</QuestionTitle>
           <CategoryText>Entertaiment:Board Games</CategoryText>
<QuestionText>At the start of a standard game of Monopoly, if you throw a double six, which square would you land on?</QuestionText>

           <ButtonGrid/>
        </InnerContainer>
     </Container>
    )
}