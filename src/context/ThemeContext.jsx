import { createContext } from "react";

export const ThemeProvider = createContext();

export function ThemeContextProvider({ children }) {
  return (
    <ThemeProvider.Provider value={{ color: "pink" }}>
      {children}
    </ThemeProvider.Provider>
  );
}
