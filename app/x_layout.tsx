import { Stack } from 'expo-router';
import React from 'react';
import { Platform, Appearance } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

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
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
        <Stack.Screen
            name="shop"
            options={{
                title: 'Shop',
            }}
        />
    </Stack>
  );
}
