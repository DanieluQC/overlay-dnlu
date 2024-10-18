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
    ScorebugContainer,
    ScoreBox,
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
                <TeamLogo src={process.env.PUBLIC_URL + "/images/orange_logo.png"} alt="Orange Team Logo" />
                <TeamSection $isOrange>
                    <TeamName>ORANGE</TeamName>
                </TeamSection>
                <ScoreBox $isOrange>
                    <TeamScore>{gameInfo.score.orange}</TeamScore>
                </ScoreBox>
                <ClockAndIndicatorsWrapper>
                    <ScorebugClock>
                        {GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT)}
                    </ScorebugClock>
                    <MatchIndicatorsWrapper>
                        {renderMatchIndicators()}
                    </MatchIndicatorsWrapper>
                </ClockAndIndicatorsWrapper>
                <ScoreBox $isOrange={false}>
                    <TeamScore>{gameInfo.score.blue}</TeamScore>
                </ScoreBox>
                <TeamSection $isOrange={false}>
                    <TeamName>BLUE</TeamName>
                </TeamSection>
                <TeamLogo src={process.env.PUBLIC_URL + "/images/blue_logo.png"} alt="Blue Team Logo" />
            </ScorebugWrapper>
            <BestOfText>Best of {totalMatches}</BestOfText>
        </ScorebugContainer>
    );
};