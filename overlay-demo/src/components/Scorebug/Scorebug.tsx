import React, { useEffect, useState, useContext } from "react";
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
    const [orangeWins, setOrangeWins] = useState(() => {
        const saved = localStorage.getItem('orangeWins');
        return saved !== null ? parseInt(saved, 10) : 0;
    });
    const [blueWins, setBlueWins] = useState(() => {
        const saved = localStorage.getItem('blueWins');
        return saved !== null ? parseInt(saved, 10) : 0;
    });
    const totalMatches = 5; // Best of 7
    const [totalGames, setTotalGames] = useState(() => {
        const games = 1; // First game

        return games;
    });
    useEffect(() => {
        if (gameInfo.winner && gameInfo.winner !== '') {
            if (gameInfo.score.orange > gameInfo.score.blue) {
                setOrangeWins(prev => {
                    const newValue = prev + 1;
                    localStorage.setItem('orangeWins', newValue.toString());
                    return newValue;
                });
            } else if (gameInfo.score.blue > gameInfo.score.orange) {
                setBlueWins(prev => {
                    const newValue = prev + 1;
                    localStorage.setItem('blueWins', newValue.toString());
                    return newValue;
                });
            }
        }
    }, [gameInfo.winner, gameInfo.score.orange, gameInfo.score.blue]);
    useEffect(() => {
        if ((blueWins < totalMatches / 2) && (orangeWins < totalMatches / 2)) {
            setTotalGames(prev => {
                const newValue = blueWins + orangeWins + 1;
                return newValue;
            });
        }
    });
    // Función para reiniciar manualmente (puedes llamarla desde donde necesites)
    const resetWins = () => {
        setOrangeWins(0);
        setBlueWins(0);
        localStorage.removeItem('orangeWins');
        localStorage.removeItem('blueWins');
    };
    const plusWinBlue = () => {
        setBlueWins(prev => {
            const newValue = prev + 1;
            localStorage.setItem('blueWins', newValue.toString());
            return newValue;
        });
    };
    const plusWinOrange = () => {
        setOrangeWins(prev => {
            const newValue = prev + 1;
            localStorage.setItem('orangeWins', newValue.toString());
            return newValue;
        });
    };

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
                    <ScoreBoxOrange onClick={plusWinOrange}>
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
                    <ScoreBoxBlue onClick={plusWinBlue}>
                        <TeamScore>{gameInfo.score.blue}</TeamScore>
                    </ScoreBoxBlue>
                    <TeamName>22 - 1</TeamName>
                </ScorebugBlue>
                <TeamLogo src={process.env.PUBLIC_URL + "/images/blue_logo.png"} alt="Blue Team Logo" />
            </ScorebugWrapper>
            <BestOfText onClick={resetWins}>Game {totalGames} | Best of {totalMatches}</BestOfText>
        </ScorebugContainer>
    );
};