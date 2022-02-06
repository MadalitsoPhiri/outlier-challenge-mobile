import React from "react";
import { FlatList, View } from "react-native";
import styled,{css} from "styled-components";
import QuizChoiceButton from "../QuizChoiceButton";

const Grid = styled.FlatList`
width: 100%;
`
const ButtonRow = styled.View`
flex-direction: row;
display: flex;
justify-content: space-between;

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
            <QuizChoiceButton/>
            <QuizChoiceButton/>

        </ButtonRow>

        <ButtonRow>
            <QuizChoiceButton/>
            <QuizChoiceButton/>

        </ButtonRow>
        </View>
       
    )
}
