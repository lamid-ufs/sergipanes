import React from "react";
import { Div, Image, Paragraph, PlantBoxCarousel } from "../../../components";
import getDeviceType from "../../../hooks/getDeviceType";
import colors from "../../../styles/colors";

interface TeamNameProps {
  name: string;
  timeLeft: number;
}

const TeamNameLine: React.FC<TeamNameProps> = ({ name, timeLeft }) => {
  const deviceType = getDeviceType();

  return (
    <Div width={"100%"} gap={15}>
      <Div width={"90%"} height={5} direction="row">
        <Div width={"20%"} height={"100%"} backgroundColor={colors.lightBlue} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.orange} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.green} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.red} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.yellow} />
      </Div>
      <Div direction="row" gap={10}>
        <Paragraph
          color={colors.preto}
          fontWeight={500}
          fontSize={
            deviceType === "smartphone"
              ? 30
              : deviceType === "tablet-portrait"
              ? 30
              : 50
          }
        >
          Equipe:
        </Paragraph>
        <Paragraph
          color={colors.preto}
          fontWeight={800}
          fontSize={
            deviceType === "smartphone"
              ? 30
              : deviceType === "tablet-portrait"
              ? 30
              : 50
          }
        >
          {name}
        </Paragraph>
      </Div>
      <Div width={"90%"} height={5} direction="row">
        <Div width={"20%"} height={"100%"} backgroundColor={colors.yellow} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.red} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.orange} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.lightBlue} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.green} />
      </Div>
    </Div>
  );
};

export default React.memo(TeamNameLine);
