  // adb shell am start -n host.exp.exponent/.experience.HomeActivity
  import React, {useState} from "react"
  import styled from "styled-components/native"
  import useUserStore from "../store/store"



const App = () => {
    const [name, setName] = useState("")
  // const setUsername = useUserStore(state => state.setUsername)


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
        <LoginContainer>
          {name.length > 2 && <UsernameText>Hello, {name}</UsernameText>}
            <NameInput placeholder={"Enter your name"} placeholderTextColor="#888" value={name} onChangeText={setName}/>
            <TouchableOpacity>
              <ButtonText>Enter</ButtonText>
            </TouchableOpacity>
        </LoginContainer>
      </MainContainer>
    )
}



  const MainContainer = styled.View`
      width: 100%;
      height: 100%;
      background-color: white;
      position: relative;
  `

  const LogoWrapper = styled.View`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
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

  const LoginContainer = styled.View`
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      gap:30
  `

  const NameInput = styled.TextInput`
      width:300px;
      border-radius: 10px;
      border: 2px solid rgba(0,0,0,0.3);
  `

  const TouchableOpacity = styled.TouchableOpacity`
      padding:10px 30px;
      background-color: #999;
      border-radius: 10px;
      border:2px solid #888
      
  `
  const ButtonText = styled.Text`
      color: white
  `
  const UsernameText = styled.Text`
      font-weight: bold;
      color:black
  `

export default App
