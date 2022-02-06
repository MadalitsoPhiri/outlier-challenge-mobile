import React from "react";
import {  View } from "react-native";
import styled,{css} from "styled-components";
import QuizChoiceButton from "../QuizChoiceButton";


const ButtonRow = styled.View`
flex-direction: row;
display: flex;
justify-content:space-between;
width: 100%;


`

export default ButtonGrid = ({data})=>{
 
    return (
        // <Grid
        // data={data}
        // contentContainerStyle={{flex:1,alignItems:"center"}}
        // numColumns={2}
        // renderItem={({ item }) => <QuizChoiceButton />}
        // />
        <View>
             <ButtonRow>
            <QuizChoiceButton text={data[0].text} right={false}/>
            <QuizChoiceButton text={data[1].text} right={true}/>

        </ButtonRow>

        <ButtonRow>
            <QuizChoiceButton text={data[2].text} right={false}/>
            <QuizChoiceButton text={data[3].text} right={true}/>

        </ButtonRow>
        </View>
       
    )
}
