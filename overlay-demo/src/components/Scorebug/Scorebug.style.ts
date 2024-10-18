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
    width: 200px;
    height: 100%;
    background-color: ${props => props.$isOrange ? '#FF6600' : '#4169E1'};
    clip-path: ${props => props.$isOrange
        ? 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'
        : 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)'};
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
    background-color: rgba(0, 0, 0, 0.7);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 0px;
`;