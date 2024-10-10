import React from "react";
import { Div, Paragraph } from "../../../components";
import colors from "../../../styles/colors";
import getDeviceType from "../../../hooks/getDeviceType";

interface NonDesktopTimerProps {
  timeLeft: number;
}

const NonDesktopTimer: React.FC<NonDesktopTimerProps> = ({ timeLeft }) => {
  const deviceType = getDeviceType();
  return (
    <Div direction="row" gap={5}>
      <Paragraph
        color={colors.preto}
        fontSize={
          deviceType === "smartphone"
            ? 15
            : deviceType === "tablet-portrait"
            ? 20
            : 30
        }
      >
        Tempo restante:
      </Paragraph>
      <Paragraph
        fontSize={
          deviceType === "smartphone"
            ? 15
            : deviceType === "tablet-portrait"
            ? 20
            : 30
        }
        color={timeLeft <= 10 ? colors.red : colors.preto}
        fontWeight={800}
      >
        {timeLeft}s
      </Paragraph>
    </Div>
  );
};

export default React.memo(NonDesktopTimer);
