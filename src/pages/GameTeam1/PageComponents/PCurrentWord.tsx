import React from "react";
import { Div, Paragraph } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

interface CurrentWordProps {
  word: string;
}

const CurrentWord: React.FC<CurrentWordProps> = ({ word }) => {
  const deviceType = getDeviceType();

  return (
    <Div gap={15} width={"100%"}>
      <Paragraph
        color={colors.preto}
        fontWeight={400}
        fontSize={
          deviceType === "smartphone"
            ? 17
            : deviceType === "tablet-portrait"
            ? 20
            : 30
        }
      >
        Vocês sabem o que significa
      </Paragraph>
      <Div
        backgroundColor={colors.cinzaMedio}
        padding={
          deviceType === "smartphone"
            ? "20px 30px"
            : deviceType === "tablet-portrait"
            ? "20px 50px"
            : "20px 80px"
        }
        radius={20}
      >
        <Paragraph
          color={colors.preto}
          fontWeight={800}
          fontSize={
            deviceType === "smartphone"
              ? 40
              : deviceType === "tablet-portrait"
              ? 50
              : 90
          }
          textAlign="center"
        >
          {word}?
        </Paragraph>
      </Div>
    </Div>
  );
};

export default React.memo(CurrentWord);
