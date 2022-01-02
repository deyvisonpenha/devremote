import styled from 'styled-components';

export const FolderWrapper = styled.section`
  display: flex;
  height: 50rem;
  margin-top: 1rem;
`;

export const FolderContent = styled.div`
  width: 60vw;
  height: 100%;
  margin: 10rem 2rem 2rem 2rem;

  text-align: center;

    h1{
      font-weight: 700;
      font-size: 4rem;
      word-spacing: 0.6rem;

      span{
        color: #AC0086;
      }
    }
`;

export const FolderImage = styled.div`
  width: 40vw;
  margin: 2em 2em 2em 0;
  background-image: url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
`;