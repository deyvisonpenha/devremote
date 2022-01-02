import styled from 'styled-components';

interface ITheme {
  theme: {
    background: string,
    color: string,
  }
}

export const Main = styled.div`
    background-color: ${(props: ITheme) => props.theme.background};
    color: ${(props: ITheme) => props.theme.color};
`;