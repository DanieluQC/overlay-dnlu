import React, { useContext } from 'react';
import { GameInfoContext } from '../../contexts/GameInfoContext';
import { GameService } from '../../services/gameService';
import { BoostService } from '../../services/boostService';
import { PlayerCard, PlayerListContainer, TeamColumn, PlayerName, BoostBar, BoostText } from './PlayerList.style';

export const PlayerList: React.FC = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const renderPlayerCard = (player: any) => (
        <PlayerCard key={player.id} $teamColor={player.team === 0 ? '#4CA3FF' : '#FF8C3F'}>
            <PlayerName>{player.name}</PlayerName>
            <BoostBar $boost={player.boost} $teamColor={player.team === 0 ? '#4CA3FF' : '#FF8C3F'} />
            <BoostText>{player.boost}</BoostText>
        </PlayerCard>
    );

    const orangeTeam = GameService.getOrangeTeam(gameInfo.players);
    const blueTeam = GameService.getBlueTeam(gameInfo.players);

    return (
        <PlayerListContainer>
            <TeamColumn>
                {orangeTeam.map(renderPlayerCard)}
            </TeamColumn>
            <TeamColumn>
                {blueTeam.map(renderPlayerCard)}
            </TeamColumn>
        </PlayerListContainer>
    );
};