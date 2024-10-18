import styled from "styled-components";

export const StatCardWrapper = styled.div`
  color: #ffffff;
  height: 70px;
  width: 670px;
  font-family: 'Bahnschrift', Arial, sans-serif;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
`;

export const PlayerName = styled.div<{ $teamColor: string }>`
  background-color: ${props => props.$teamColor};
  position: absolute;
  width: 270px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
  left: 10px;
  bottom: 0px;
  padding: 0 20px;
  overflow: hidden;
  white-space: nowrap;

  // Ajuste dinámico del tamaño de fuente
  font-size: 30px;
  
  @media (max-width: 600px) {
    font-size: 24px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const StatCardStatContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    align-items: center;
    width: 370px;
    height: 70px;
    right: 0px;
    background-color: black;
    clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
`;

export const StatCardStatName = styled.p`
    font-size: 18px;
    margin: 0;
    text-transform: uppercase;
    opacity: 0.8;
`;

export const StatCardStatValue = styled.p`
    font-size: 28px;
    margin: 0;
    font-weight: bold;
    text-align:center;
`;