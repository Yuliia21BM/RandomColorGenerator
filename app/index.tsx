/*
 *     FRAMEWORK
 */
import React, { useEffect } from "react";
/*
 *     COMPONENTS
 */
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeColoredContent from "./components/HomeColoredContent";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
/*
 *     UTILS
 */
import { APP_COLORS } from "@/utils/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "EduAUVICWANTArrows-Regular": require("../assets/fonts/EduAUVICWANTArrows-Regular.ttf"),
    "EduAUVICWANTArrows-Bold": require("../assets/fonts/EduAUVICWANTArrows-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={APP_COLORS.background} />
      <HomeColoredContent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: APP_COLORS.background,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
