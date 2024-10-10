import React from "react";
import { Div, Paragraph, Image, Button } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

interface ButtonLineProps {
  selectedAnswer: boolean;
  showAnswerColors: boolean;
  isCounting: boolean;
  countdown: number;
  currentQuestionIndex: number;
  questions: Array<any>;
  handleNextQuestion: () => void;
}

const ButtonLine: React.FC<ButtonLineProps> = ({
  selectedAnswer,
  showAnswerColors,
  isCounting,
  countdown,
  currentQuestionIndex,
  questions,
  handleNextQuestion,
}) => {
  const deviceType = getDeviceType();

  return (
    <Div direction="row" width={"100%"}>
      <Button
        borderRadius={30}
        padding={
          deviceType === "smartphone"
            ? "10px 25px"
            : deviceType === "tablet-portrait"
            ? "20px 50px"
            : "30px 50px"
        }
        onClick={handleNextQuestion}
        backgroundColor={!selectedAnswer ? colors.castanha : colors.cinzaEscuro}
        hoverBackgroundColor="#4d3d1e"
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
        hoverScale={1.1}
        animationDuration="0.4s"
        disabled={selectedAnswer || showAnswerColors}
      >
        <Paragraph
          fontWeight={700}
          fontSize={deviceType === "smartphone" ? 20 : 25}
          color={!selectedAnswer ? colors.branco : colors.preto}
        >
          {isCounting
            ? `${countdown}s`
            : currentQuestionIndex < questions.length - 1
            ? "Próxima"
            : "Finalizar"}
        </Paragraph>
      </Button>
    </Div>
  );
};

export default React.memo(ButtonLine);
