/*
 *     FRAMEWORK
 */
import React, { useState } from "react";
/*
 *     COMPONENTS
 */
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as Clipboard from "expo-clipboard";
import { APP_COLORS } from "@/utils/colors";
/*
 *     HOOKS
 */
import { useCurrentBgColor } from "@/hooks/useCurrentBgColor";

import Ionicons from "@expo/vector-icons/Ionicons";

export const HomeHeader: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { colorName } = useCurrentBgColor();

  const handleSaveColor = async () => {
    await Clipboard.setStringAsync(colorName);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{colorName}</Text>
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
    padding: 20,
    backgroundColor: APP_COLORS.background,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
