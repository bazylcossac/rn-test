import React from "react";
import { ImageBackground, Pressable, Text, StyleSheet, View } from "react-native";
import {Link} from "expo-router"
import styled from "styled-components/native";

//@ts-ignore
import legoZiomek from "@/assets/images/legoziomek.jpg";

function Shop() {
  return (
    <ImageBackground source={legoZiomek} resizeMode="cover">
      <StyledView>
        <StyledText>TO JEST SZOP</StyledText>
        <View style={styles.buttonView}>
          <Link href="/explore" asChild>
            <Pressable>
              <Text style={styles.pressableText}>Go to Explore page</Text>
            </Pressable>
          </Link>
          <Link href="/explore" asChild>
            <Pressable>
              <Text style={styles.pressableText}>Go to Explore page</Text>
            </Pressable>
          </Link>
        </View>
      </StyledView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pressableText: {
    backgroundColor: "lightblue",
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 20
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  }
})

const StyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 25px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Shop;
