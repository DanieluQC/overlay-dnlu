import styled from "styled-components";

export const ScorebugContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    margin: 0 auto;
    padding: 0;
`;

export const ScorebugWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.8);
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
    width: 250px;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 0px;
`;
export const ScorebugOrange = styled(TeamSection)`
    background-color: #ff9900;
    justify-content: flex-start;
    padding-left: 10px;
`;

export const ScorebugBlue = styled(TeamSection)`
    background-color: blue;
    justify-content: flex-end;
    padding-right: 10px;
`;

export const ScoreBoxOrange = styled.div`
    background-color: white;
    color: white;
    padding: 5px 15px;
    height: 80px;
    width: 40px;
    display: flex;
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
`;
export const ScoreBoxBlue = styled.div`
    background-color: white;
    color: white;
    padding: 5px 15px;
    height: 80px;
    width: 40px;
    display: flex;
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
`;
export const TeamName = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin: 0 10px;
    z-index: 1;
`;

export const TeamScore = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

export const ScorebugClock = styled.div`
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: bold;
    color: #ffffff;
`;

export const ClockAndIndicatorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 215px;
    top: 10px;
`;

export const MatchIndicatorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin:0px;
    padding-bottom: 5px;
`;

export const MatchIndicator = styled.div<{ $isOrangeWin: boolean; $isBlueWin: boolean }>`
    width: 50%;
    height: 8px;
    border-radius: 10%;
    margin: 0 3px;
    display: inline-block;
    background-color: ${props =>
        props.$isOrangeWin ? '#FF6600'
            : props.$isBlueWin ? '#4169E1'
                : 'rgba(255, 255, 255, 0.3)'};
    border: 1px solid white;
`;

export const BestOfText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: white;
    width: 240px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.9);
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 0px;
`;
