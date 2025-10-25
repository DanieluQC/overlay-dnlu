import styled from "styled-components";
import { ConfigService } from "../../services/configServive";
export const ScorebugContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    left: 560px;
    padding: 0;
    z-index:20;
`;
//fondo del scorebug:negro por default
export const ScorebugWrapper = styled.div<{ isSpectator: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${props => props.isSpectator ? '120px' : '90px'};
    background-color: ${props => props.isSpectator ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'};
    padding: 0px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    clip-path: polygon(0% 0%, 100% 0, 100% 85%, 98% 100%, 2% 100%, 0% 85%);

    
`;

export const TeamLogo = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 0px;

`;

export const TeamSection = styled.div`
    width: 280px;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 0px;
`;
export const ScorebugBlue = styled(TeamSection)<{ isSpectator: boolean }>`
    background-color: ${ConfigService.getTeamBlueColor()};
    justify-content: flex-start;
    padding-left: 10px;
    margin-right: ${props => props.isSpectator ? '0px' : '80px'};
    clip-path: ${props => props.isSpectator ? 'none' : 'polygon(0% 0%, 96% 0%, 100% 100%, 0% 100%)'};
`;


export const ScorebugOrange= styled(TeamSection)<{ isSpectator: boolean }>`
    background-color: ${ConfigService.getTeamOrangeColor()};
    justify-content: flex-end;
    padding-right: 10px;
    margin-left: ${props => props.isSpectator ? '0px' : '80px'};
    clip-path: ${props => props.isSpectator ? 'none' : 'polygon(4% 0, 100% 0, 100% 100%, 0% 100%)'};
`

export const ScoreBoxBlue = styled.div<{ isSpectator: boolean }>`
    background-color: white;
    color: white;
    padding: 5px 15px;
    height: 80px;
    width: 40px;
    display: ${props => props.isSpectator ? 'flex' : 'none'};
    justify-content: center;  // Centra horizontalmente
    align-items: center;      // Centra verticalmente
    position: absolute;
    right: -15px;
    top: -8px;
    clip-path: polygon(20% 0, 100% 0, 80% 100%, 0% 100%);

    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background: black;
        z-index: -1;
        clip-path: polygon(20% 0, 100% 0, 80% 100%, 0% 100%);
    }

    // Asegura que el contenido (el score) esté centrado y visible
    & > * {
        position: relative;
        z-index: 1;
    }
    cursor: pointer;
    user-select:none;
    &:hover {
    text-decoration: underline; // Opcional: añade un subrayado al pasar el mouse
    }
`;
export const ScoreBoxOrange = styled.div<{ isSpectator: boolean }>`
    background-color: white;
    color: white;
    padding: 5px 15px;
    height: 80px;
    width: 40px;
    display: ${props => props.isSpectator ? 'flex' : 'none'};
    justify-content: center;  // Centra horizontalmente
    align-items: center;      // Centra verticalmente
    position: absolute;
    left: -15px;
    top: -8px;
    clip-path: polygon(0% 0, 80% 0, 100% 100%, 20% 100%);
    
    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background: black;
        z-index: -1;
        clip-path: polygon(0% 0, 80% 0, 100% 100%, 20% 100%);
    }

    // Asegura que el contenido (el score) esté centrado y visible
    & > * {
        position: relative;
        z-index: 1;
    }
        cursor: pointer;
    user-select:none;
    &:hover {
    text-decoration: underline; // Opcional: añade un subrayado al pasar el mouse
    }
`;
export const TeamName = styled.div`
    font-family: 'Arial Black', Arial, sans-serif;

    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 0 0 px;
    z-index: 1;
`;

export const TeamScore = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

export const ScorebugClock = styled.div<{ isSpectator: boolean }>`
    height: 100px;
    width: 200px;
    display: ${props => props.isSpectator ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    color: #ffffff;
`;

export const ClockAndIndicatorsWrapper = styled.div<{ isSpectator: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.isSpectator ? '215px' : '350px'};
    top: 10px;
`;

export const MatchIndicatorsWrapper = styled.div<{ isSpectator: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: ${props => props.isSpectator ? '0px' : '65px'} 0 0 0;
    padding-bottom: ${props => props.isSpectator ? '5px' : 'px'};
`;

export const MatchIndicator = styled.div<{ $isOrangeWin: boolean, $isBlueWin: boolean }>`
    width: 50%;
    height: 8px;
    border-radius: 10%;
    margin: 0 3px;
    display: inline-block;
    background-color: ${props =>
        props.$isBlueWin ? ConfigService.getTeamBlueColor()
            : props.$isOrangeWin ? ConfigService.getTeamOrangeColor()
                : 'rgba(255, 255, 255, 0.3)'};
    border: 1px solid white;
`;
export const BestOfText = styled.div<{ isSpectator: boolean }>`
    font-size: 24px;
    font-weight: bold;
    color: white;
    width: 240px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.9);
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: ${props => props.isSpectator ? '0px' : '-5px'};
    cursor: pointer;
    user-select:none;
    &:hover {
    text-decoration: underline; // Opcional: añade un subrayado al pasar el mouse
    }
`;
