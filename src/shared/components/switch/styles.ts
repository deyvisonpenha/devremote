import styled from 'styled-components';

interface ITheme {
  theme: {
    background: string,
    color: string,
  }
}

export const Container = styled.label`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;

export const SwitchToggleButton = styled.input`
  visibility: hidden;
  position: absolute;
  left: -1000px; 
  top: -1000px;

  &:checked + span {
    background-color: ${(props: ITheme) => props.theme.color };

    &:before {
      left: 15px;
      background-color: ${(props: ITheme) => props.theme.background};
    }
  }
`;

export const Toggle = styled.span`
  display: flex;
  cursor: pointer;
  width: 3em;
  height: 2em;
  border-radius: 2em;
  background: ${(props: ITheme) => props.theme.color};
  position: relative;
  transition: background-color 0.2s;
  
  &:before {
    content: "";
    position: absolute;
    left: 4px;
    top: calc(50% - 1.6em/2);
    width: 1.6em;
    height: 1.6em;
    background: ${(props: ITheme) => props.theme.background};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3em;
    transition: 0.2s;
  }
`;
