import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div } from "../../components";
import colors from "../../styles/colors";
import questions from "../../data/words";
import { useGame } from "../../context/GameContext";
import getDeviceType from "../../hooks/getDeviceType";
import { ButtonLine, CurrentWord, MeaningOptions, NonDesktopTimer, TeamNameLine } from "./PageComponents";

type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const GameTeam01: React.FC = () => {
  const {
    teamAScore,
    teamBScore,
    setTeamAScore,
    setTeamBScore,
    teamAName,
    teamBName
  } = useGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTeamATurn, setIsTeamATurn] = useState(true);
  const [showAnswerColors, setShowAnswerColors] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate();
  const deviceType = getDeviceType();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const currentTeamName = isTeamATurn ? teamAName : teamBName;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const isCorrect = (answer: string) => answer === currentQuestion.correctAnswer;

  const getAnswerSymbol = (answer: string) => {
    if (showAnswerColors) {
      return isCorrect(answer) ? "✔" : selectedAnswer === answer ? "✘" : "";
    }
    return "";
  };

  const handleNextQuestion = () => {
    setShowAnswerColors(true);
    setIsCounting(true);
    setCountdown(5);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setIsCounting(false);

      if (selectedAnswer === currentQuestion.correctAnswer) {
        if (isTeamATurn) {
          setTeamAScore((prevScore) => prevScore + 1);
        } else {
          setTeamBScore((prevScore) => prevScore + 1);
        }
      }

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setIsTeamATurn((prevTurn) => !prevTurn);
        setCurrentQuestionIndex(nextIndex);
        setCurrentQuestion(questions[nextIndex]);
        setSelectedAnswer(null);
        setShowAnswerColors(false);
        setTimeLeft(30);
      } else {
        navigate("/endgame");
      }
    }, 5000);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.blue}
      direction="column"
      justify="center"
    >
      <Div
        width={
          deviceType === "smartphone" ? ("75%") :
            (deviceType === "tablet-portrait" ? ("85%") : ("90%"))
        }
        height={
          deviceType === "smartphone" ? ("") :
            (deviceType === "tablet-portrait" ? ("85%") : ("90%"))
        }
        backgroundColor={colors.branco}
        radius={20}
        shadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        justify={deviceType === "smartphone" ? ("center") : ("space-evenly")}
        gap={deviceType === "smartphone" ? (20) : (0)}
        padding={deviceType === "smartphone" ? ("35px 30px") :
          (deviceType === "tablet-portrait" ? ("30px") : ("20px 30px"))
        }
      >
        <TeamNameLine name={currentTeamName} timeLeft={timeLeft} />
        <CurrentWord word={currentQuestion.word} />
        <MeaningOptions
          answers={currentQuestion.answers}
          selectedAnswer={selectedAnswer}
          showAnswerColors={showAnswerColors}
          symbol={getAnswerSymbol}
          handleAnswer={handleAnswer}
          isCorrect={isCorrect}
        />
        {deviceType !== 'desktop' && <NonDesktopTimer timeLeft={timeLeft} />}
        <ButtonLine
          handleNextQuestion={handleNextQuestion}
          selectedAnswer={!selectedAnswer}
          isCounting={isCounting}
          countdown={countdown}
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
          showAnswerColors={showAnswerColors}
        />
      </Div>
    </Div>
  );
};

export default React.memo(GameTeam01);