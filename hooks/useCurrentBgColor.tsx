/*
 *     FRAMEWORK
 */
import React, { createContext, useState, useContext, ReactNode } from "react";

interface CurrentBgColorContextType {
  colorName: string;
  setColorName: (color: string) => void;
}

const CurrentBgColorContext = createContext<
  CurrentBgColorContextType | undefined
>(undefined);

export const useCurrentBgColor = (): CurrentBgColorContextType => {
  const context = useContext(CurrentBgColorContext);
  if (!context) {
    throw new Error(
      "useCurrentBgColor must be used within a CurrentBgColorProvider"
    );
  }
  return context;
};

interface CurrentBgColorProviderProps {
  children: ReactNode;
}

export const CurrentBgColorProvider: React.FC<CurrentBgColorProviderProps> = ({
  children,
}) => {
  const [colorName, setColorName] = useState<string>("rgb(255,255,255)");

  return (
    <CurrentBgColorContext.Provider value={{ colorName, setColorName }}>
      {children}
    </CurrentBgColorContext.Provider>
  );
};
