import React from "react"
import {View, Text} from "react-native"
import styled from "styled-components/native"


const App = () => {
    return <StyledView><StyledText>Witam</StyledText></StyledView>
}



const StyledView = styled.View`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    background-color: grey;
`

const StyledText = styled.Text`
    color:white;
    font-size: 35px;

`;
export default App

