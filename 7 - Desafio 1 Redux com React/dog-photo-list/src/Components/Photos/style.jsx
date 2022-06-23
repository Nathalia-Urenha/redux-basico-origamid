import styled from "styled-components";

export const ListPhotos = styled.ul`
    padding: 0px;
    margin: 0px;
    list-style: none;
`;

export const ItemPhoto = styled.li`
    display: grid;
    grid-template-columns: 50px 1fr auto;
    grid-template-rows: 50px;
    align-items: center;
    gap: 1rem;
    background: #f9f9f9;
    border-radius: 4px;
    margin-bottom: 1rem;
    padding-right: 1rem;
`;

export const Image = styled.img`
    max-width: 100%;
    border-radius:  4px;;
`;

export const Title = styled.h2`
    font-size: 1rem;
    margin: 0px;
`;

export const Acessos = styled.span`
    font-family: monospace;
    font-size:  0.875rem;
    color: #999;
`;