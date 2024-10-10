import React from "react";
import { Div, Image, Paragraph } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

const LogoImage = () => {
  const deviceType = getDeviceType();

  return (
    <Div>
      <Image
        width={deviceType === "smartphone" ? 150 : (deviceType === "tablet-portrait" ? 250 : 200)}
        src={require("../../../assets/Icons/icone-srgpn.png")}
        alt="Logo"
      />
      <Paragraph
        textShadow="2px 2px 2px rgba(0, 0, 0, 0.149)"
        fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "80px" : (deviceType === "tablet" ? "55px" : "60px")}
        fontWeight={700}
        color={colors.preto}
      >
        Sergipanês
      </Paragraph>
    </Div>
  )
}

export default React.memo(LogoImage);