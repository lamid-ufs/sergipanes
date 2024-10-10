import React from "react";
import { Div, Button, Paragraph } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

interface ButtonsProps {
  onClick1: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCLick2: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onClick1, onCLick2 }) => {
  const deviceType = getDeviceType();

  return (
    <Div
      direction={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "column" : "row"}
      width={"80%"}
      height={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "" : "20%"}
      gap={deviceType === "smartphone" ? 10 : 20}
    >
      <Button
        width={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "80%" : "20%"}
        margin={0}
        padding={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "30px 0px" : "20px 0px"}
        borderRadius={30}
        onClick={onClick1}
        backgroundColor={colors.green}
        hoverBackgroundColor={"#76ac35"}
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
        hoverScale={1.1}
        animationDuration="0.9s"
      >
        <Paragraph
          fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? 30 : 25}
          fontFamily="Neulis"
          fontWeight={500}
          color={"#2C1F26"}
        >
          Novo Jogo
        </Paragraph>
      </Button>
      <Button
        width={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "80%" : (deviceType === "tablet" ? "50%" : "20%")}
        margin={0}
        padding={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "30px 0px" : "20px 0px"}
        borderRadius={30}
        onClick={onCLick2}
        backgroundColor={colors.red}
        hoverBackgroundColor={"#bb271c"}
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
        hoverScale={1.1}
        animationDuration="0.9s"
      >
        <Paragraph
          fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? 30 : 25}
          fontFamily="Neulis"
          fontWeight={500}
          color="#f5f7cd"
        >
          Baixar placar (.txt)
        </Paragraph>
      </Button>
    </Div>
  )
}

export default React.memo(Buttons);