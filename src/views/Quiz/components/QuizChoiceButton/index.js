import React from 'react';
import styled from 'styled-components/native';
import {  Text } from 'react-native';






const ButtonContainer = styled.Pressable`
  
  ${props=>props.isRight?"margin-left:2%;":"margin-right:8%;"};
  margin-bottom:8% ;
  padding: 5px 13px;
  border:${props=>props.disabled?"gray":"black"} 1px solid ;
  border-radius: 5px;
  background-color:${props=>props.selected?"black":"#ddd"} ;
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
font-size: 14px;
color: ${props=>props.selected?"white":props.disabled?"gray":"black"};
font-weight: 400;

`

export default (props)=>{
    return(
      <ButtonContainer testAnswer={props.text} testID="Choice.Button" {...props}>
        <ButtonText choice {...props}>{props.text}</ButtonText>
      </ButtonContainer>
    )
}