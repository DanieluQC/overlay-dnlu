import { useContext } from "react"
import { GameInfoContext } from "../../contexts/GameInfoContext"
import { GameService } from "../../services/gameService";
import { BoostMeterInnerCircle, BoostMeterRing, BoostMeterText, BoostMeterWrapper } from "./PlayerBoostMeter.style";
import { BoostService } from "../../services/boostService";

export const PlayerBoostMeter = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const spectatedPlayer = GameService.getPlayerFromTarget(gameInfo.players, gameInfo.target);

    const normalizedRadius = 110 - 10 * 2;// inner radius - thickness of ring *2

    const size = 200;
    const strokeWidth = 20;
    const radius = (size + strokeWidth) / 2.5;
    const getTeamColor = (team: number) => {
        return team === 0 ? "#4CA3FF" : "#FF8C3F";
    };
    const circumference = radius * 2 * Math.PI;

    const teamColor = spectatedPlayer ? getTeamColor(spectatedPlayer.team) : "#FFFFFF";
    // Función para crear las líneas de rejilla
    const createGridLines = () => {
        const lines = [];
        for (let i = 0; i < 360; i += 45) {
            const x1 = size / 2 + (radius - strokeWidth) * Math.cos(i * Math.PI / 180);
            const y1 = size / 2 + (radius - strokeWidth) * Math.sin(i * Math.PI / 180);
            const x2 = size / 2 + radius * Math.cos(i * Math.PI / 180);
            const y2 = size / 2 + radius * Math.sin(i * Math.PI / 180);
            lines.push(
                <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="3"
                    opacity="0.6"
                />
            );
        }
        return lines;
    };
    return (
        <BoostMeterWrapper>
            {spectatedPlayer && (
                <svg height={size} width={size}>
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="0" stdDeviation="3" floodOpacity="0.5" />
                        </filter>
                    </defs>
                    <g filter="url(#shadow)">
                        <BoostMeterRing
                            stroke={teamColor}
                            strokeDasharray={`${circumference} ${circumference}`}
                            $dashOffset={BoostService.getBoostBarCircumference(spectatedPlayer.boost, circumference)}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            r={radius}
                            cx={size / 2}
                            cy={size / 2}
                            $teamColor={teamColor}
                            transform={`rotate(90 ${size / 2} ${size / 2})`}
                        />
                        <BoostMeterInnerCircle
                            r={radius - strokeWidth / 2}
                            cx={size / 2}
                            cy={size / 2}
                            $teamColor={teamColor}
                        />
                        {createGridLines()}
                        <BoostMeterText
                            x={size / 2}
                            y={size / 2}
                            textAnchor="middle"
                            dominantBaseline="central"
                        >
                            {spectatedPlayer.boost}
                        </BoostMeterText>
                    </g>
                </svg>
            )}
        </BoostMeterWrapper>
    );
};