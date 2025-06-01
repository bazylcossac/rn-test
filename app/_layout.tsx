import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";
import { Appearance } from "react-native";

export default function TabLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: theme.backgroundHeader },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          headerShown: true,
          title: "Explore",
          headerTitle: "EEEE",
        }}
      />
      <Stack.Screen
        name="shop"
        options={{
          title: "Shop",
        }}
      />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
