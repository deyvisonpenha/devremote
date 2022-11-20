import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { shade, lighten } from 'polished';

interface ITheme {
    theme: {
      background: string,
      color: string,
    }
  }

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    padding: 0 2em;
    background-color: #292929;
`;

export const ArrowBack = styled(BiArrowBack)`
    cursor: pointer;
    stroke: ${(props: ITheme) => props.theme.color};; 
    stroke-width: 2;
`;

export const ContentLinkPages = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin-left: 8rem;

    a {
        cursor: pointer;
        color: ${props => props.theme.type === 'dark' ? shade(0.1, props.theme.color) : lighten(0.4, props.theme.color)};

        &:hover{
            color: ${props => props.theme.type === 'dark' ? shade(0.4, props.theme.color) : lighten(0.1, props.theme.color)};
        }

        &+a{
            margin-left: 3rem;
        }
    }
`;
