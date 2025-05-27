// adb shell am start -n host.exp.exponent/.experience.HomeActivity
import React from "react"
import {Link} from "expo-router";
import {View, Text, Pressable} from "react-native"
import styled from "styled-components/native"



const App = () => {
    return (

        <StyledView>
            <StyledText>
                Witam
            </StyledText>
            <StyledText>
                <Link href="/(tabs)/explore" asChild>
                    <Button>
                        <Text>Explore</Text>
                    </Button>
                </Link>
            </StyledText>

        </StyledView> )
}





const StyledView = styled.View`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:40;
    justify-content: center;
    width:100%;
    height: 100%;
    background-color: grey;
`

const Button = styled.Pressable`
    padding:10px;
    background-color: red;
    border-radius: 10px;
`

const StyledText = styled.Text`
    color:white;
    font-size: 35px;

`;
export default App

