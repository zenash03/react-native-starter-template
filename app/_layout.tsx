import '../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  const [fontsLoaded, error] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito/static/Nunito-Black.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito/static/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito/static/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
  })
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
