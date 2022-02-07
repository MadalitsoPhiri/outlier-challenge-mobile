import React from "react";
import {  View } from "react-native";
import styled,{css} from "styled-components";


const ButtonRow = styled.View`
flex-direction: row;
display: flex;
justify-content:space-between;
width: 100%;


`
const Button = styled.Pressable`
  margin-bottom:8% ;
  padding: 5px 13px;
  border:black 1px solid ;
  border-radius: 5px;
  background-color:#ccc ;
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
`;

export default ButtonGrid = ({data})=>{
 
    return (
    
        // />
        <View>
            <Button><Text></Text></Button>
            
        </View>
       
    )
}
