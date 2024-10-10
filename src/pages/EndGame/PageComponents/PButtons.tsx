import React from "react";
import { Div, Paragraph, Button } from "../../../components";
import colors from "../../../styles/colors";
import getDeviceType from "../../../hooks/getDeviceType";

interface ButtonsProps {
  onClick1: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onClick1 }) => {
  const deviceType = getDeviceType();

  return (
    <Div
      width={"70%"}
      direction={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "column" : "row"}
      gap={deviceType === "smartphone" ? 10 : 30}
    >
      <Button
        width={deviceType === "smartphone" ? "80%" : (deviceType === "tablet-portrait" ? "70%" : "20%")}
        margin={0}
        padding={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "30px 0px" : "20px 0px"}
        borderRadius={30}
        onClick={onClick1}
        backgroundColor={colors.castanha}
        hoverBackgroundColor="#4d3d1e"
        boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
        hoverScale={1.1}
        animationDuration="0.4s"
      >
        <Paragraph
          fontWeight={700}
          fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? 30 : 25}
        >
          Novo jogo
        </Paragraph>
      </Button>
    </Div>
  )
}

export default React.memo(Buttons);