import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from 'styled-components';
import { HARD, MEDIUM } from '../../../../helpers/constants';


const Container = styled.View`
display: flex;
flex-direction: row;
margin-bottom: 8%;
`

export default Difficulty = ({value})=>{
   const difficultyArray = [1,2,3]
   const difficultyIndex = value === HARD ?2:value === MEDIUM ?1:0
  return <Container>
      {difficultyArray.map((item, index)=>{
          return <Entypo key={index} name="star" size={12} color={`${index <= difficultyIndex?"black":"gray"}`} />
      })}  
  </Container>
}