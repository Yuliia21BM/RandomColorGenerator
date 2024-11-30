/*
 *     FRAMEWORK
 */
import React, { useEffect, useState } from "react";
/*
 *     COMPONENTS
 */
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as Clipboard from "expo-clipboard";
import { APP_COLORS } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
/*
 *     HOOKS
 */
import { useCurrentBgColor } from "@/hooks/useCurrentBgColor";
/*
 *     UTILS
 */
import { gerRGBfromColor, rgbToHex, isHexColor } from "@/utils";

const HomeHeader: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { colorName } = useCurrentBgColor();
  const [displayedColorName, setDisplayedColorName] =
    useState<string>(colorName);

  useEffect(() => {
    setDisplayedColorName(colorName);
  }, [colorName]);

  const handleSaveColor = async () => {
    await Clipboard.setStringAsync(displayedColorName);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const handleColorNameChanging = () => {
    if (isHexColor(displayedColorName)) {
      setDisplayedColorName(colorName);
    } else {
      const rgb = gerRGBfromColor(colorName);
      const hex = rgbToHex(rgb);
      setDisplayedColorName(hex);
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={handleColorNameChanging}
        style={styles.headerTextContainer}
      >
        <Text style={styles.headerText}>{displayedColorName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSaveColor}>
        {copied ? (
          <Ionicons
            name="checkmark-done-sharp"
            size={26}
            color={APP_COLORS.done}
          />
        ) : (
          <Ionicons name="copy" size={26} color={colorName} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: APP_COLORS.background,
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeHeader;
