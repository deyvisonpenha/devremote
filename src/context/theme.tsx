import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ITheme {
  theme: {
    background: string;
    color: string;
    type: string;
  };
  setTheme: Dispatch<
    SetStateAction<{
      background: string;
      color: string;
      type: string;
    }>
  >;
}

export const themes = {
  light: {
    background: "#F2F2F2",
    color: "#0a0a0a",
    type: "light",
  },
  dark: {
    background: "#181717",
    color: "#F2F2F2",
    type: "dark",
  },
};

const ThemeContext = createContext<ITheme>({
  theme: themes.dark,
  setTheme: () => {},
});

export function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};
