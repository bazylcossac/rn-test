import { Stack } from 'expo-router';
import React from 'react';
import { Platform, Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: theme.backgroundHeader},
        headerTintColor: theme.text

      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          headerShown: true,
          title: 'Explore',
          headerTitle: "EEEE"
        }}
      />
        <Stack.Screen
            name="shop"
            options={{
                title: 'Shop',
            }}
        />
      <Stack.Screen name="+not-found" options={{headerShown: false}}/>
    </Stack>
  );
}
