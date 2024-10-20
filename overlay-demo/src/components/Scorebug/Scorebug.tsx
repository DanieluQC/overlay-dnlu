import { useEffect, useState, useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import {
    ScorebugWrapper,
    TeamLogo,
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
import { ConfigService } from "../../services/configServive";

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
    const totalMatches = ConfigService.getTotalMatches(); // Best of 7
    const winsNeeded = totalMatches/2 +0.5;
    const [totalGames, setTotalGames] = useState(() => {
        const saved = localStorage.getItem('totalGames');
        return saved !== null ? parseInt(saved,10) : 1;    
    });

    // Agregar un estado para controlar si se ha actualizado el puntaje en el último render
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        if (gameInfo.winner && gameInfo.winner !== '' && !updated) {
            if (gameInfo.score.orange > gameInfo.score.blue && orangeWins < winsNeeded && orangeWins + blueWins < totalMatches) {
                setOrangeWins((prev:number) => {
                    const newValue = prev + 1;
                    localStorage.setItem('orangeWins', newValue.toString());
                    setUpdated(true);
                    return newValue;
                });
            } else if (gameInfo.score.blue > gameInfo.score.orange && blueWins < winsNeeded && orangeWins + blueWins < totalMatches) {
                setBlueWins((prev:number) => {
                    const newValue = prev + 1;
                    localStorage.setItem('blueWins', newValue.toString());
                    setUpdated(true);
                    return newValue;
                });
            }
        }
    }, [gameInfo.winner, gameInfo.score.orange, gameInfo.score.blue, orangeWins, blueWins, winsNeeded, totalMatches, updated]);

    // Agregar un efecto para resetear el estado de actualizado cuando se cambia el ganador
    useEffect(() => {
        setUpdated(false);
    }, [gameInfo.winner]);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if ((blueWins < winsNeeded) && (orangeWins < winsNeeded) && (orangeWins + blueWins < totalMatches)) {
                setTotalGames((prev:number) => {
                    const newValue = blueWins+orangeWins+1;
                    localStorage.setItem('totalGames', newValue.toString());
                    return newValue;
                });
            }
        }, 15000);
        return () => clearTimeout(timeoutId);
    }, [blueWins, orangeWins, winsNeeded, totalMatches]);    
    // Función para reiniciar manualmente (puedes llamarla desde donde necesites)
    const resetWins = () => {
        setTotalGames(1);
        setOrangeWins(0);
        setBlueWins(0);
        localStorage.removeItem('orangeWins');
        localStorage.removeItem('blueWins');
        localStorage.removeItem('totalGames');
    };
    const plusWinBlue = () => {
        if (blueWins < winsNeeded && orangeWins + blueWins < totalMatches) {
            setBlueWins(prev => {
                const newValue = prev + 1;
                localStorage.setItem('blueWins', newValue.toString());
                return newValue;
            });
        }
    };
    const plusWinOrange = () => {
        if (orangeWins < winsNeeded && orangeWins + blueWins < totalMatches) {
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
                    <TeamName>{ConfigService.getTeamOrangeName()}</TeamName>
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
                    <TeamName>{ConfigService.getTeamBlueName()}</TeamName>
                </ScorebugBlue>
                <TeamLogo src={process.env.PUBLIC_URL + "/images/blue_logo.png"} alt="Blue Team Logo" />
            </ScorebugWrapper>
            <BestOfText onClick={resetWins}>Game {totalGames} | Best of {totalMatches}</BestOfText>
        </ScorebugContainer>
    );
};