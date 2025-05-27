import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text} from "react-native"
import "react-native-reanimated";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";


import { useColorScheme } from "@/hooks/useColorScheme";

function CustomHeader(){
  return <View>
    <Text>Custom header</Text>
  </View>
}


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const client = new QueryClient()
  if (!loaded) {

    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={client}>
      <CustomHeader />
      <Stack>
        <Stack.Screen
          name="shop"
          options={{ title: "Shop", headerShown: false }}
        />

        <Stack.Screen
          name="cart"
          options={{ title: "cart", headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
