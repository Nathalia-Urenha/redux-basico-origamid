import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(125%);
    }
`;

export const StyleLoading = styled.div`
    height: 2px;
    background: black;
    overflow: hidden;
    max-width: 25%;
    margin: 2rem auto;

    ::after {
        content: '';
        display: block;
        width: 75%;
        height: 2px;
        background: white;
        animation: ${LoadingAnimation} .5s linear forwards infinite;
    };

`;
