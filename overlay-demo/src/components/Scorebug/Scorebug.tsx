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
    ScoreBoxOrange,
    ScoreBoxBlue,
    ScorebugOrange,
    ScorebugBlue,
} from "./Scorebug.style";
import { GameService } from "../../services/gameService";

export const Scorebug = () => {
    const { gameInfo } = useContext(GameInfoContext);

    // Asumimos que estos datos vienen del contexto de GameInfo
    const orangeWins = 1; // Ejemplo: Orange ha ganado 1 partido
    const blueWins = 1; // Ejemplo: Blue ha ganado 2 partidos
    const totalMatches = 7; // Best of 5

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
                <ScorebugOrange>
                    <TeamName>ORANGE</TeamName>
                    <ScoreBoxOrange>
                        <TeamScore>{gameInfo.score.orange}</TeamScore>
                    </ScoreBoxOrange>
                </ScorebugOrange>
                <ClockAndIndicatorsWrapper>
                    <ScorebugClock>
                        {GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT)}
                    </ScorebugClock>
                    <MatchIndicatorsWrapper>
                        {renderMatchIndicators()}
                    </MatchIndicatorsWrapper>
                </ClockAndIndicatorsWrapper>
                <ScorebugBlue>
                    <ScoreBoxBlue>
                        <TeamScore>{gameInfo.score.blue}</TeamScore>
                    </ScoreBoxBlue>
                    <TeamName>BLUE</TeamName>
                </ScorebugBlue>
                <TeamLogo src={process.env.PUBLIC_URL + "/images/blue_logo.png"} alt="Blue Team Logo" />
            </ScorebugWrapper>
            <BestOfText>Best of {totalMatches}</BestOfText>
        </ScorebugContainer>
    );
};