import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/gameService";
import {
    StatCardWrapper,
    StatCardStatContainer,
    StatCardStatName,
    StatCardStatValue,
    PlayerName
} from "./PlayerStatCard.style";
import { ConfigService } from "../../services/configServive";

export const PlayerStatCard = () => {
    const { gameInfo } = useContext(GameInfoContext);
    const spectatedPlayer = GameService.getPlayerFromTarget(gameInfo.players, gameInfo.target);

    const getTeamColor = (team: number) => {
        return team === 0 ? ConfigService.getTeamBlueColor() : ConfigService.getTeamOrangeColor();
    };

    return (
        <>
            {spectatedPlayer && (
                <StatCardWrapper>
                    <PlayerName $teamColor={getTeamColor(spectatedPlayer.team)}>{spectatedPlayer.name}</PlayerName>
                    <StatCardStatContainer>
                        <div>
                            <StatCardStatName>GOALS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.goals}</StatCardStatValue>
                        </div>
                        <div>
                            <StatCardStatName>SHOTS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.shots}</StatCardStatValue>
                        </div>
                        <div>
                            <StatCardStatName>ASSISTS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.assists}</StatCardStatValue>
                        </div>
                        <div>
                            <StatCardStatName>SAVES</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.saves}</StatCardStatValue>
                        </div>
                    </StatCardStatContainer>
                </StatCardWrapper>
            )}
        </>
    );
};