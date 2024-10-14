import styled from "styled-components";

export const BoostMeterRing = styled.circle<{ $dashOffset: number }>`
    stroke-dashOffset: ${props => props.$dashOffset};

`;

export const BoostMeterInnerCircle = styled.circle``;

export const BoostMeterText = styled.text`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 70px;
    text-shadow: 1px 1px 10px grey;
    z-index: 5;
`;

export const BoostMeterWrapper = styled.div`
    background-color: #0000;
    position: absolute;
    bottom: 50px;
    right: 25px;
    height: 320px;
    width: 320px;
    margin: 0px auto;
    overflow: hidden;
    transform-origin: 0 0;

    svg > circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
`;