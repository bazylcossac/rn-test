import React from "react"
import {View, Text} from "react-native"
import styled from "styled-components/native"
function Shop(){
    return (
        <StyledView>
            <StyledText>TO JEST SZOP</StyledText>
        </StyledView>
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
    font-size:25px
`

export default Shop