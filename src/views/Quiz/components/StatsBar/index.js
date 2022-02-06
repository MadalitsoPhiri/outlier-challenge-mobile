import React from 'react';
import styled from 'styled-components/native';
import {  Text } from 'react-native';

const StatsContainer = styled.View`
border:black 1px solid;
width: 100%;
border-radius: 5px;
height: 25px;
position: relative;
`
const Container = styled.View`
width: 100%;

`
const StatsLabelContainer = styled.View`
width: 100%;
flex-direction: row;
display: flex;
margin-bottom: 2%;
justify-content: space-between;

`
const StatsLabelText = styled.Text`
font-size: 13px;
font-weight: 500;
`
const CurrentScoreView = styled.View`
background-color: gray;
width: ${props=>props.data.currentScore}%;
height: 100%;
opacity:1;

`

const MaximumScoreView = styled.View`
background-color: gray;
width: ${props=>props.data.currentMaximumScore}%;
height: 100%;
opacity:0.5;
position: absolute;
`

const MinimumScoreView = styled.View`
background-color: black;
width: ${props=>props.data.currentMinimumScore}%;
height: 100%;
opacity:1;
position: absolute;
`
export default ({data})=>{
    return(
        <Container>
            <StatsLabelContainer>
                <StatsLabelText>{`Score: ${data.currentScore}%`}</StatsLabelText>
                <StatsLabelText>{`Max Score: ${data.currentMaximumScore}%`}</StatsLabelText>
            </StatsLabelContainer>
            <StatsContainer>
                <CurrentScoreView data={data}/>
                <MaximumScoreView data={data}/>
                <MinimumScoreView data={data}/>
            </StatsContainer>
        </Container>
     
    )
}