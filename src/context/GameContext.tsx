import React, { createContext, useContext, useState } from "react";

type GameContextType = {
  teamAScore: number;
  teamBScore: number;
  teamAName: string;
  teamBName: string;
  winner: string | null;
  setTeamAScore: React.Dispatch<React.SetStateAction<number>>;
  setTeamBScore: React.Dispatch<React.SetStateAction<number>>;
  setTeamAName: React.Dispatch<React.SetStateAction<string>>; // Adicionado
  setTeamBName: React.Dispatch<React.SetStateAction<string>>; // Adicionado
  resetGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [teamAName, setTeamAName] = useState("Equipe A");
  const [teamBName, setTeamBName] = useState("Equipe B");

  // Determina a equipe vencedora
  const winner =
    teamAScore > teamBScore
      ? teamAName
      : teamBScore > teamAScore
        ? teamBName
        : null;

  // Função para resetar o estado do jogo
  const resetGame = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setTeamAName("Equipe A");
    setTeamBName("Equipe B");
  };

  return (
    <GameContext.Provider
      value={{
        teamAScore,
        teamBScore,
        teamAName,
        teamBName,
        winner,
        setTeamAScore,
        setTeamBScore,
        setTeamAName, // Adicionado
        setTeamBName, // Adicionado
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
