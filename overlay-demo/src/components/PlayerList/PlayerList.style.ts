import styled from 'styled-components';

export const PlayerListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

export const TeamColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
`;

export const PlayerCard = styled.div<{ $teamColor: string }>`
    background-color: rgba(0, 0, 0, 0.7);
    border-left: 5px solid ${props => props.$teamColor};
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
`;

export const PlayerName = styled.span`
    color: white;
    font-weight: bold;
    margin-right: 10px;
`;

export const BoostBar = styled.div<{ $boost: number, $teamColor: string }>`
    width: 100px;
    height: 10px;
    background-color: #333;
    margin-right: 10px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.$boost}%;
        background-color: ${props => props.$teamColor};
    }
`;

export const BoostText = styled.span`
    color: white;
`;