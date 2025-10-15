import styled from 'styled-components';

export const PlayerListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1920;
    right:20px;
    left:20px;
    position:absolute;
    top:40px;
    z-index:10;
`;

export const TeamColumn = styled.div<{ $isBlueTeam: boolean }>`
    display: flex;
    flex-direction: column;
    width: 48%;
    align-items: ${props => props.$isBlueTeam ? 'flex-start' : 'flex-end'};
`;

const darkenColor = (color: string, amount: number): string => {
    const rgb = hexToRgb(color);

    // Verifica si rgb es null
    if (!rgb) {
        throw new Error("Invalid color format");
    }

    return `rgb(${Math.max(rgb.r - amount * 255, 0)}, ${Math.max(rgb.g - amount * 255, 0)}, ${Math.max(rgb.b - amount * 255, 0)})`;
};

// Función para convertir un color hexadecimal a RGB
const hexToRgb = (hex: string): { r: number, g: number, b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

export const PlayerCard = styled.div<{ $teamColor: string, $isActive: boolean, $isBlueTeam: boolean }>`
    background-image: ${props => props.$isActive ?
        `linear-gradient(to top, ${props.$teamColor}, ${darkenColor(props.$teamColor, 0.5)})` :
        `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))`
    };
    background-color: ${props => props.$isActive ? props.$teamColor : 'rgba(0, 0, 0, 0.7)'};
    border-left: ${props => props.$isBlueTeam ? 'none' : props.$isActive ? '5px solid white' : '5px solid ' + props.$teamColor};
    border-right: ${props => props.$isBlueTeam ? props.$isActive ? '5px solid white' : '5px solid ' + props.$teamColor : 'none'};
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.$isBlueTeam ? 'flex-end' : 'flex-start'};
    width: 200px;
`;



export const PlayerName = styled.span<{ $isActive: boolean }>`
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const BoostInfo = styled.div<{ $isBlueTeam: boolean }>`
    display: flex;
    flex-direction: ${props => props.$isBlueTeam ? 'row-reverse' : 'row'};
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
`;

export const BoostBar = styled.div<{ $boost: number, $teamColor: string, $isActive: boolean, $isBlueTeam: boolean }>`
    width: 100%;
    height: 10px;
    background-color: black;
    position: relative;
    flex-direction:row-reverse;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: ${props => props.$isBlueTeam ? 'none' : '0'};
        right: ${props => props.$isBlueTeam ? '0' : 'none'};
        height: 100%;
        width: ${props => props.$boost}%;
        background-color: ${props => props.$isActive ? 'white' : props.$teamColor};
    }
`;

export const BoostText = styled.span<{ $isActive: boolean, $isBlueTeam: boolean }>`
    color: white;
    margin: ${props => props.$isBlueTeam ? '0 0 0 5px' : '0 5px 0 0'};
`;