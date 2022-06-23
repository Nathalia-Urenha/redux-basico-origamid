import styled from 'styled-components';
import { css } from 'styled-components';

const StyledInCommon = css`
    font-family: Roboto, sans-serif;
    font-size: 1rem;
`;

export const Input = styled.input`
    ${StyledInCommon};

    border: 1px solid;
    border-radius: 3px;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    display: block;
`;

export const Label = styled.label`
    ${StyledInCommon};

    display: block;
    margin-bottom: 0.25rem;
`;

export const Button = styled.button`
    ${StyledInCommon};

    color: white;
    background: black;
    border: none;
    padding: 0.7rem 2rem;
    margin-top: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
`;