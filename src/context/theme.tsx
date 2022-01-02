import {
  createContext, 
  Dispatch, 
  SetStateAction, 
  useContext, 
  useState
} from 'react';

interface ITheme {
  theme: {
    background: string;
    color: string;
  },
  setTheme: Dispatch<SetStateAction<{
    background: string;
    color: string;
}>>
}

export const themes = {
    light: {
      background: '#F2F2F2',
      color: '#333',
    },
    dark: {
      background: '#333',
      color: '#F2F2F2',
    },
  };
  
const ThemeContext = createContext<ITheme>({
  theme: themes.light,
  setTheme: ()=>{},
});

export function ThemeContextProvider({ children }: any){
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
)}

export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return {theme, setTheme};
}