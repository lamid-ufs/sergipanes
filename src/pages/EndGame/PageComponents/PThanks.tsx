import React from "react";
import { Div, Paragraph } from "../../../components";
import colors from "../../../styles/colors";
import getDeviceType from "../../../hooks/getDeviceType";

const Thanks = () => {
  const deviceType = getDeviceType();

  return (
    <Div>
      <Paragraph
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
        fontSize={deviceType === "smartphone" ? 45 : 60}
        fontWeight={700}
        margin={0}
        color={colors.preto}
      >
        Fim de jogo
      </Paragraph>
      <Paragraph
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
        fontSize={deviceType === "smartphone" ? 20 : 25}
        fontWeight={400}
        margin={0}
        color={colors.preto}
      >
        Obrigado por participar!
      </Paragraph>
    </Div>
  );
};

export default React.memo(Thanks);
