import React from "react"
import {ImageBackground} from "react-native"
import styled from "styled-components/native"

//@ts-ignore
import legoZiomek from "@/assets/images/legoziomek.jpg"

function Shop(){
    return (
            <ImageBackground source={legoZiomek} resizeMode="cover">
        <StyledView>
            <StyledText>TO JEST SZOP</StyledText>
        </StyledView>
            </ImageBackground>
    )
}

const StyledView = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: white;
    font-size:25px;
    width:100%;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.5);
`

export default Shop