import styled from "styled-components";

export const Title = styled.p`
    width: 100%;
    height: 24px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
`
export const RestContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap: 6%;
    width: 100%;
    height: 260px;
    overflow-x: scroll;
`
export const RestElement = styled.div`
    height: 250px;
    background: #F9F4EA;
    
`
export const RestName = styled.p`
    width: 70%;
    height: 21px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`
export const RestLocation = styled.p`
    width: 70%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    height: 20px;
`