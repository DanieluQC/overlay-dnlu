import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import {
    ScorebugWrapper,
    TeamLogo,
    TeamSection,
    TeamName,
    TeamScore,
    ScorebugClock,
    MatchIndicatorsWrapper,
    MatchIndicator,
    BestOfText,
    ClockAndIndicatorsWrapper,
    ScorebugContainer
} from "./Scorebug.style";
import { GameService } from "../../services/gameService";

export const Scorebug = () => {
    const { gameInfo } = useContext(GameInfoContext);

    // Asumimos que estos datos vienen del contexto de GameInfo
    const orangeWins = 1; // Ejemplo: Orange ha ganado 1 partido
    const blueWins = 2; // Ejemplo: Blue ha ganado 2 partidos
    const totalMatches = 5; // Best of 5

    const renderMatchIndicators = () => {
        return Array(totalMatches).fill(null).map((_, index) => {
            const isOrangeWin = index < orangeWins;
            const isBlueWin = index >= totalMatches - blueWins;
            return (
                <MatchIndicator
                    key={index}
                    $isOrangeWin={isOrangeWin}
                    $isBlueWin={isBlueWin}
                />
            );
        });
    };

    return (
        <ScorebugContainer>
            <ScorebugWrapper>
                <TeamLogo src={process.env.PUBLIC_URL + "/sources/orange-logo.png"} alt="Orange Team Logo" />
                <TeamSection $isOrange>
                    <TeamName>ORANGE</TeamName>
                    <TeamScore>{gameInfo.score.orange}</TeamScore>
                </TeamSection>
                <ClockAndIndicatorsWrapper>
                    <ScorebugClock>
                        {GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT)}
                    </ScorebugClock>
                    <MatchIndicatorsWrapper>
                        {renderMatchIndicators()}
                    </MatchIndicatorsWrapper>
                </ClockAndIndicatorsWrapper>
                <TeamSection $isOrange={false}>
                    <TeamScore>{gameInfo.score.blue}</TeamScore>
                    <TeamName>BLUE</TeamName>
                </TeamSection>
                <TeamLogo src={process.env.PUBLIC_URL + "/sources/blue-logo.png"} alt="Blue Team Logo" />
            </ScorebugWrapper>
            <BestOfText>Best of {totalMatches}</BestOfText>
        </ScorebugContainer>
    );
};