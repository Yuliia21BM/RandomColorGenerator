/*
 *     FRAMEWORK
 */
import React from "react";
/*
 *     NAVIGATION
 */
import { Stack } from "expo-router";
/*
 *     HOOKS
 */
import { CurrentBgColorProvider } from "@/hooks/useCurrentBgColor";

export default function RootLayout() {
  return (
    <CurrentBgColorProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </CurrentBgColorProvider>
  );
}
