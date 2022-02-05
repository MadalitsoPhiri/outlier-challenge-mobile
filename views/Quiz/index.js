import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';



const Container = styled.SafeAreaView`
flex:1;
display:flex;
background-color:white;
flex-direction:column;
`;

export default ()=>{
  return(
     <Container>
        <ProgressBar progress={"35%"}/>
     </Container>
    )
}