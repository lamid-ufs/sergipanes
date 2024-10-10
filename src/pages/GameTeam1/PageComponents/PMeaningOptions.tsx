import React from "react";
import { Div, Paragraph, Button } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

interface MeaningOptionsProps {
  answers: string[];
  selectedAnswer: string | null;
  showAnswerColors: boolean;
  symbol: (answer: string) => string;
  handleAnswer: (answer: string) => void;
  isCorrect: (answer: string) => boolean;
}

const MeaningOptions: React.FC<MeaningOptionsProps> = ({
  answers,
  selectedAnswer,
  showAnswerColors,
  symbol,
  handleAnswer,
  isCorrect,
}) => {
  const deviceType = getDeviceType();

  return (
    <Div width={deviceType !== "desktop" ? "100%" : "40%"} gap={25}>
      {answers.map((answer, index) => (
        <Button
          key={index}
          width={"100%"}
          margin={0}
          borderRadius={30}
          padding={
            deviceType === "smartphone"
              ? "15px"
              : deviceType === "tablet-portrait"
              ? "25px"
              : "30px"
          }
          onClick={() => handleAnswer(answer)}
          backgroundColor={
            showAnswerColors
              ? isCorrect(answer)
                ? colors.cinzaEscuro
                : selectedAnswer === answer
                ? colors.cinzaEscuro
                : colors.branco
              : selectedAnswer === answer
              ? colors.darkBlue
              : colors.cinza
          }
          hoverBackgroundColor={colors.cinzaEscuro}
          boxShadow={
            showAnswerColors || selectedAnswer === answer
              ? "none"
              : "2px 2px 10px rgba(0, 0, 0, 0.1123)"
          }
          hoverBoxShadow={
            showAnswerColors || selectedAnswer === answer
              ? "none"
              : "4px 4px 15px rgba(0, 0, 0, 0.5)"
          }
          hoverScale={1.05}
          animationDuration="0.4s"
          disabled={showAnswerColors}
        >
          <Div justify="space-between" direction="row" width={"100%"}>
            <Paragraph
              color={selectedAnswer === answer ? colors.branco : colors.preto}
              fontWeight={500}
              fontSize={
                deviceType === "smartphone"
                  ? 15
                  : deviceType === "tablet-portrait"
                  ? 20
                  : 25
              }
            >
              {answer}
            </Paragraph>
            <Paragraph
              color={colors.preto}
              fontWeight={500}
              fontSize={
                deviceType === "smartphone"
                  ? 15
                  : deviceType === "tablet-portrait"
                  ? 20
                  : 23
              }
            >
              {symbol(answer)}
            </Paragraph>
          </Div>
        </Button>
      ))}
    </Div>
  );
};

export default React.memo(MeaningOptions);
