import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/gameService";
import { StatCardStatName, StatCardStatValue, StatCardWrapper, StatCardStatContainer } from "./PlayerStatCard.style";

export const PlayerStatCard = () => {
    const {gameInfo} = useContext(GameInfoContext);
    const spectatedPlayer = GameService.getPlayerFromTarget(gameInfo.players, gameInfo.target);

    return (
        <>
            {spectatedPlayer && (
                <StatCardWrapper>
                    <p>{spectatedPlayer.name}</p>
                    <StatCardStatContainer>
                        <div>
                            <StatCardStatName>GOALS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.goals}</StatCardStatValue>
                        </div>
                        <div style={{marginLeft: "40px"}}>
                            <StatCardStatName>ASSITS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.assists}</StatCardStatValue>
                        </div>
                        <div style={{marginLeft: "40px"}}>
                            <StatCardStatName>SAVES</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.saves}</StatCardStatValue>
                        </div>
                        <div style={{marginLeft: "40px"}}>
                            <StatCardStatName>SHOTS</StatCardStatName>
                            <StatCardStatValue>{spectatedPlayer.shots}</StatCardStatValue>
                        </div>
                    </StatCardStatContainer>
                </StatCardWrapper>
            )}
        </>
    );

};