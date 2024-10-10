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
        fontSize={deviceType === "smartphone" ? (15) : (deviceType === "tablet" ? (20) : (25))}
      >
        Vocês sabem o que significa
      </Paragraph>
      <Div backgroundColor={colors.cinzaMedio} padding={"20px 80px"} radius={20}>
        <Paragraph
          color={colors.preto}
          fontWeight={800}
          fontSize={deviceType === "smartphone" ? (40) : (deviceType === "tablet" ? (65) : (90))}
        >
          {word}?
        </Paragraph>
      </Div>
    </Div>
  );
};

export default React.memo(CurrentWord);