import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import './global.css';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'QuiclSand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuiclSand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'QuiclSand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
    'QuiclSand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'QuiclSand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
  });

  useEffect(() => {
    if (error) {
      throw new Error('Error loading fonts: ' + error.message);
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
