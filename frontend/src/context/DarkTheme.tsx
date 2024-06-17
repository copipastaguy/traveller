import { createContext, ReactNode, useContext, useState } from "react";

type Mode = "light" | "dark";

interface IDarkThemeContext {
  mode: Mode;
  toggleMode: () => void;
}

export const DarkThemeContext = createContext<IDarkThemeContext | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const DarkThemeProvider = (props: Props) => {
  const [mode, setMode] = useState<Mode>("light");



  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return <DarkThemeContext.Provider value={{ mode, toggleMode }}>{props.children}</DarkThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
