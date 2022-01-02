import {ThemeProvider} from 'styled-components';
import { useTheme } from '@context-theme';

import { Main } from './styles';

export const Container = ({children}: any)=> {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme} >
      <Main>
        {children}
      </Main>
    </ThemeProvider>
  )
}