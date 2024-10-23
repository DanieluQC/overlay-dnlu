import styled from "styled-components";

export const BoostMeterRing = styled.circle<{ $dashOffset: number, $teamColor: string }>`
    stroke-dashOffset: ${props => props.$dashOffset};
    stroke: ${props => props.$teamColor};
    transition: stroke-dashoffset 0.3s ease;
`;

export const BoostMeterInnerCircle = styled.circle<{ $teamColor: string }>`
    fill: ${props => props.$teamColor};
    opacity: 0.4;

`;

export const BoostMeterText = styled.text`
    font-family: 'Bahnschrift', Arial, sans-serif;
    font-size: 90px;
    fill: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const BoostMeterWrapper = styled.div`
    position: absolute;
    bottom: 120px;
    right: 120px;
    height: 150px;
    width: 150px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
    svg > circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
`;