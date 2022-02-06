import React from 'react';
import styled from 'styled-components/native';
import {  Text } from 'react-native';






const ButtonContainer = styled.TouchableOpacity`
  width: auto;
  ${props=>props.right?"margin-left:8%":"margin-right:8%"};
  margin-bottom:8% ;
  padding: 5px 13px;
  border:black 1px solid ;
  border-radius: 8px;
  background-color:#ccc ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
font-size: 15px;
color: black;
`

export default ({})=>{
    return(
      <ButtonContainer>
        <ButtonText>Electric Company</ButtonText>
      </ButtonContainer>
    )
}