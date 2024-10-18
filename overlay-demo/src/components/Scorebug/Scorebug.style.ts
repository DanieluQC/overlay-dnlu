import styled from "styled-components";

export const ScorebugContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    margin: 0 auto;
`;

export const ScorebugWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.7);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TeamLogo = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 10px;

`;

export const TeamSection = styled.div<{ $isOrange: boolean }>`
    display : flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 80%;
    background-color: ${props => props.$isOrange ? '#FF6600' : '#4169E1'};
    clip-path: ${props => props.$isOrange
        ? 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)'
        : 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)'};
`;

export const ScoreBox = styled.div<{ $isOrange: boolean }>`
    display : flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    background-color: green;
    clip-path: ${props => props.$isOrange
        ? 'polygon(35% 0%, 100% 0, 65% 100%, 0% 100%)'
        : 'polygon(0% 0%, 65% 0%, 100% 100%, 35% 100%)'};
    border-color: white;
    border-width: 10px;
`;
export const TeamName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin: 0 10px;
`;

export const TeamScore = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: white;

`;

export const ScorebugClock = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: white;
    margin: 0 20px;
`;

export const ClockAndIndicatorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
`;

export const MatchIndicatorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`;

export const MatchIndicator = styled.div<{ $isOrangeWin: boolean; $isBlueWin: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    display: inline-block;
    background-color: ${props =>
        props.$isOrangeWin ? '#FF6600'
            : props.$isBlueWin ? '#4169E1'
                : 'rgba(255, 255, 255, 0.3)'};
    border: 2px solid ${props =>
        props.$isOrangeWin ? '#FF6600'
            : props.$isBlueWin ? '#4169E1'
                : 'rgba(255, 255, 255, 0.3)'};
`;

export const BestOfText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: white;
    width: 240px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 0px;
`;
