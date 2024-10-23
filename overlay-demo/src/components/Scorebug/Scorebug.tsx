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
    const totalMatches = 7; // Best of 7
    const winsNeeded = Math.ceil(totalMatches / 2); // 4 victorias necesarias

    const [totalGames, setTotalGames] = useState(() => {
        const saved = localStorage.getItem('totalGames');
        return saved !== null ? parseInt(saved, 10) : 1;
    });
    useEffect(() => {
        if ((gameInfo.winner && gameInfo.winner !== '') && (totalGames < totalMatches)) {
            if ((orangeWins < winsNeeded) && (blueWins < winsNeeded)) {
                if (gameInfo.score.orange > gameInfo.score.blue) {
                    setOrangeWins((prev: number) => {
                        const newValue = prev + 1;
                        localStorage.setItem('orangeWins', newValue.toString());
                        return newValue;
                    });
                } else if (gameInfo.score.blue > gameInfo.score.orange) {
                    setBlueWins((prev: number) => {
                        const newValue = prev + 1;
                        localStorage.setItem('blueWins', newValue.toString());
                        return newValue;
                    });
                };
            }
        }
    });

    useEffect(() => {
        if ((orangeWins < winsNeeded) && (blueWins < winsNeeded)) {
            setTotalGames(orangeWins + blueWins + 1);
        }
    });



    const resetWins = () => {
        setOrangeWins(0);
        setBlueWins(0);
        setTotalGames(1);
        localStorage.removeItem('orangeWins');
        localStorage.removeItem('blueWins');
        localStorage.removeItem('setTotalGames');
    };
    const plusWinBlue = () => {
        if (blueWins < winsNeeded) {
            setBlueWins(prev => {
                const newValue = prev + 1;
                localStorage.setItem('blueWins', newValue.toString());
                return newValue;
            });
        }
    };
    const plusWinOrange = () => {
        if (orangeWins < winsNeeded) {
            setOrangeWins(prev => {
                const newValue = prev + 1;
                localStorage.setItem('orangeWins', newValue.toString());
                return newValue;
            });
        }
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