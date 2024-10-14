import styled from "styled-components";

export const StatCardWrapper = styled.div`
  background: green;
  color: #ffffff;
  height: 150px;
  width: 450px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  align-items: center;
  bottom: 20px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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