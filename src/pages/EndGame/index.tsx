import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Div, Paragraph, PlantBoxCarousel } from "../../components";
import { useGame } from "../../context/GameContext";
import colors from "../../styles/colors";
import Confetti from "react-confetti";
import getDeviceType from "../../hooks/getDeviceType";
import { Buttons, Scores, Thanks } from "./PageComponents";
import { saveGameData, exportGameHistory } from "../../storage/functions/saveGameData";

const EndGameScreen: React.FC = () => {
  const { teamAScore, teamBScore, teamAName, teamBName, resetGame, winner } = useGame();
  const deviceType = getDeviceType();
  const navigate = useNavigate();

  const { innerWidth: width, innerHeight: height } = window;

  const handleStartGame = () => {
    const gameData = `
    Nome da Equipe A: ${teamAName}
    Nome da Equipe B: ${teamBName}
    Pontuação da Equipe A: ${teamAScore}
    Pontuação da Equipe B: ${teamBScore}
    Equipe Vencedora: ${winner}
    Data e Horário de Finalização da partida: ${new Date().toLocaleString()}
    `;

    saveGameData(gameData);
    resetGame();
    navigate("/new-game");
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.branco}
      direction="column"
      justify="space-between"
      gap={deviceType === "smartphone" ? 30 : 40}
    >
      <Confetti width={width} height={height} />
      <PlantBoxCarousel width={"100%"} height={"12%"} />
      <Div gap={deviceType === "smartphone" ? 30 : 40} width={"100%"}>
        <Thanks />
        <Scores
          team1Name={teamAName}
          team1Score={teamAScore}
          team2Name={teamBName}
          team2Score={teamBScore}
        />
        <Div>
          <Paragraph
            color={colors.preto}
            fontSize={25}
          >
            O vencedor é a equipe
          </Paragraph>
          <Paragraph
            color={colors.preto}
            fontSize={50}
          >
            {winner}
          </Paragraph>
        </Div>
        <Buttons onClick1={() => handleStartGame()} />
      </Div>
      <PlantBoxCarousel width={"100%"} height={"12%"} />
    </Div>
  );
};

export default React.memo(EndGameScreen);
