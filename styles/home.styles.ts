import styled from 'styled-components';
import { shade } from 'polished';

export const FolderWrapper = styled.section`
  display: flex;
  height: 50rem;
  margin-top: 1rem;
`;

export const FolderContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 55vw;
  height: 100%;
  align-items: center;
  text-align: center;
  padding-bottom: 8rem;

    h1{
      font-weight: 700;
      font-size: 3.4rem;
      word-spacing: 0.6rem;

      span{
        color: #AC0086;
      }
    }
`;

export const FolderImage = styled.div`
  width: 45vw;
  background-image: url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
`;

export const InfoButton = styled.a`
  display: flex;
  background: #1983ff;
  color: #FFF;
  height: 4rem;
  width: 14rem;
  margin-top: 3rem;
  font-size: 1.8rem;
  border: solid 2px;
  border-color: #1983ff;; //#1983ff;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover{
    background: ${shade(0.2, '#1983ff')};
    border-color: ${shade(0.2, '#1983ff')};
  }
`