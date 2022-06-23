import styled from 'styled-components';

export const StyleHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin: 0px;
`;

export const ButtonLogin = styled.button`
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    display: block;
    background: white;
    width: 8px;
    height: 8px;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 50%;
    background: ${(props) => props.background};

`;


