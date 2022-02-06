import React from 'react';
import styled from 'styled-components/native';



const Progress = styled.View`
width: ${props=>props.progress};
height: 12px;
background-color: gray;

`

const ProgressContainer = styled.View`
width: 100%;
height: 12px;
background-color: white;

`

export default ({progress})=>{
    return(
      <ProgressContainer>
        <Progress progress={progress} testID='progress'/>
      </ProgressContainer>
    )
}