import styled from "styled-components";

export const StatCardWrapper = styled.div`
    background: green;
    color: black;
    height: 400px;
    width: 600px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StatCardStatContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content:center;
    align-items: center;
    height: 250px;
    width: 600px;
`;

export const StatCardStatName = styled.p`
    font-size: 20px;
    margin: 0;
`;

export const StatCardStatValue = styled.p`
    font-size: 32px;
    margin: 0;
`;