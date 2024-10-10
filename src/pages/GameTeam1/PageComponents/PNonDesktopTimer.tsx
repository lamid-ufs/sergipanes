import React from "react";
import { Div, Paragraph } from "../../../components";
import colors from "../../../styles/colors";

interface NonDesktopTimerProps {
  timeLeft: number;
}

const NonDesktopTimer: React.FC<NonDesktopTimerProps> = ({ timeLeft }) => {
  return (
    <Div direction="row" gap={5}>
      <Paragraph color={colors.preto} fontSize={25}>
        Tempo restante:
      </Paragraph>
      <Paragraph fontSize={timeLeft <= 10 ? 30 : 25} color={timeLeft <= 10 ? colors.red : colors.preto} fontWeight={800}>
        {timeLeft}s
      </Paragraph>
    </Div>
  )
}

export default React.memo(NonDesktopTimer);