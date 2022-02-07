import React from 'react';
import styled from 'styled-components/native';
import {  Text } from 'react-native';
import {getMaximumScore, getMinimumScore, getCurrentScore} from "../../../../helpers/utility"

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
width: ${props=>props.data}%;
height: 100%;
opacity:1;

`

const MaximumScoreView = styled.View`
background-color: gray;
width: ${props=>props.data}%;
height: 100%;
opacity:0.5;
position: absolute;
`

const MinimumScoreView = styled.View`
background-color: black;
width: ${props=>props.data}%;
height: 100%;
opacity:1;
position: absolute;
`
export default ({data})=>{
    return(
        <Container>
            <StatsLabelContainer>
                <StatsLabelText>{`Score: ${getCurrentScore(data)}%`}</StatsLabelText>
                <StatsLabelText>{`Max Score: ${getMaximumScore(data)}%`}</StatsLabelText>
            </StatsLabelContainer>
            <StatsContainer>
                <CurrentScoreView data={getCurrentScore(data)}/>
                <MaximumScoreView data={getMaximumScore(data)}/>
                <MinimumScoreView data={getMinimumScore(data)}/>
            </StatsContainer>
        </Container>
     
    )
}