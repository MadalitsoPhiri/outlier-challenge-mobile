import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';



const Progress = styled.View`
width: ${props=>props.progress};
height: 12px;
background-color: gray;

`

const ProgressConatiner = styled.View`
width: 100%;
height: 12px;
background-color: white;

`

export default ({progress})=>{
    return(
      <ProgressConatiner>
      <Progress progress={progress}/>
      </ProgressConatiner>
    )
}