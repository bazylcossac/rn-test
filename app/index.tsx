  // adb shell am start -n host.exp.exponent/.experience.HomeActivity
import React from "react"
import {Link} from "expo-router";
import {View, Text, Pressable} from "react-native"
import styled from "styled-components/native"



const App = () => {
    return (
      <MainContainer>
        <LogoWrapper>
          <LogoContainer>
            <TextLogoFirst>Sac</TextLogoFirst>
            <TextLogoSecond>ker</TextLogoSecond>
          </LogoContainer>
          <LogoContainer>
            <DescText>expense manager</DescText>
          </LogoContainer>
        </LogoWrapper>
      </MainContainer>
    )
}



const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: white;
`

const LogoWrapper = styled.View`
    display: flex;
    flex-direction: column;
    padding:40px; 
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const TextLogoFirst = styled.Text`
    color: gray;
    font-size: 30px;
`
const TextLogoSecond = styled.Text`
    color:dodgerblue;
    font-size: 30px;
`
const DescText = styled.Text`
    font-size:12px;
    color:gray;
    opacity: 0.7;
`

export default App

