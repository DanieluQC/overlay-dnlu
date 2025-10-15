import React, { useContext } from 'react';
import { GameInfoContext } from '../../contexts/GameInfoContext';
import { GameService } from '../../services/gameService';
import { PlayerCard, PlayerListContainer, TeamColumn, PlayerName, BoostBar, BoostText, BoostInfo } from './PlayerList.style';
import { ConfigService } from '../../services/configServive';

export const PlayerList: React.FC = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const renderPlayerCard = (player: any, isBlueTeam: boolean) => {
        const isActive = player.id === gameInfo.target;
        const teamColor = isBlueTeam ? ConfigService.getTeamBlueColor() : ConfigService.getTeamOrangeColor();

        return (
            <PlayerCard key={player.id} $teamColor={teamColor} $isActive={isActive} $isBlueTeam={isBlueTeam}>
                <PlayerName $isActive={isActive}>{player.name}</PlayerName>
                <BoostInfo $isBlueTeam={isBlueTeam}>
                    <BoostText $isActive={isActive} $isBlueTeam={isBlueTeam}>{player.boost}</BoostText>

                    <BoostBar $boost={player.boost} $teamColor={teamColor} $isActive={isActive} $isBlueTeam={isBlueTeam} />
                </BoostInfo>
            </PlayerCard >
        );
    };

    const orangeTeam = GameService.getOrangeTeam(gameInfo.players);
    const blueTeam = GameService.getBlueTeam(gameInfo.players);

    return (
        <PlayerListContainer>
            <TeamColumn $isBlueTeam={true}>
                {blueTeam.map(player => renderPlayerCard(player, true))}
            </TeamColumn>
            <TeamColumn $isBlueTeam={false}>
                {orangeTeam.map(player => renderPlayerCard(player, false))}
            </TeamColumn>
            
        </PlayerListContainer>
    );
};