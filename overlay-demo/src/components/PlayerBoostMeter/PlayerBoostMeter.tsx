import { useContext } from "react"
import { GameInfoContext } from "../../contexts/GameInfoContext"
import { GameService } from "../../services/gameService";
import { BoostMeterInnerCircle, BoostMeterRing, BoostMeterText, BoostMeterWrapper } from "./PlayerBoostMeter.style";
import { BoostService } from "../../services/boostService";

export const PlayerBoostMeter = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const spectatedPlayer = GameService.getPlayerFromTarget(gameInfo.players, gameInfo.target);

    const normalizedRadius = 110 - 10 * 2;// inner radius - thickness of ring *2

    const getTeamColor = (team: number) => {
        return team === 0 ? "#4CA3FF" : "#FF8C3F";
    };
    const circumference = normalizedRadius * 2 * Math.PI;

    const teamColor = spectatedPlayer ? getTeamColor(spectatedPlayer.team) : "#FFFFFF";
    return (
        <BoostMeterWrapper>
            {spectatedPlayer && (
                <svg
                    height={100 * 2} width={100 * 2}
                >
                    <BoostMeterRing
                        stroke={teamColor}
                        strokeDasharray={`${circumference} ${circumference}`}
                        $dashOffset={BoostService.getBoostBarCircumference(spectatedPlayer.boost, circumference)}
                        strokeWidth={20}
                        fill="transparent"
                        r={normalizedRadius}
                        cx={100}
                        cy={100}
                        $teamColor={teamColor}
                    />
                    <BoostMeterInnerCircle
                        r={90}
                        cx="100"
                        cy="100"
                        $teamColor={teamColor}
                    />
                    <BoostMeterText
                        x="100"
                        y="100"
                        textAnchor="middle"
                        dominantBaseline={"central"}
                    >
                        {spectatedPlayer.boost}
                    </BoostMeterText>
                </svg>
            )}
        </BoostMeterWrapper>

    );
};