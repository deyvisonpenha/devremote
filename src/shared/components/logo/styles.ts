import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-bottom: 0;
    letter-spacing: 0.2em;
    font-size: 1em;
`;

export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        margin: 0 0 0 0.3em;
        letter-spacing: 0.3em;
        font-size: 2em;
    }
    
`;