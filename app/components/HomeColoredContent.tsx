/*
 *     FRAMEWORK
 */
import React from "react";
/*
 *     COMPONENTS
 */
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import HomeHeader from "./HomeHeader";
/*
 *     HOOKS
 */
import { useCurrentBgColor } from "@/hooks/useCurrentBgColor";
/*
 *     UTILS
 */
import { APP_COLORS } from "@/utils/colors";
import { gerRGBfromColor, getBrightness } from "@/utils";
import { BRIGHTNESS_THRESHOLD } from "@/utils/constants";

const HomeColoredContent: React.FC = () => {
  const { setColorName } = useCurrentBgColor();
  const bgColor = useSharedValue(APP_COLORS.white);
  const textColor = useSharedValue(APP_COLORS.black);

  const generateRandomColor = () => {
    const randomRGB = () => Math.floor(Math.random() * 256);
    const newColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;

    const rgb = gerRGBfromColor(newColor);

    const brightness = getBrightness(rgb);

    const newTextColor =
      brightness >= BRIGHTNESS_THRESHOLD ? APP_COLORS.black : APP_COLORS.white;
    bgColor.value = newColor;
    setColorName(newColor);
    textColor.value = newTextColor;
  };

  const animatedBgStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(bgColor.value, { duration: 500 }),
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(textColor.value, { duration: 500 }),
    };
  });

  return (
    <TouchableWithoutFeedback onPress={generateRandomColor}>
      <Animated.View style={[styles.container, animatedBgStyle]}>
        <HomeHeader />
        <View style={styles.container}>
          <Animated.Text style={[styles.text, animatedTextStyle]}>
            Hello{"\n"}there
          </Animated.Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 70,
    fontFamily: "EduAUVICWANTArrows-Bold",
  },
});

export default HomeColoredContent;
