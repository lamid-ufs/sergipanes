import React from "react";
import { Div, Paragraph } from "../../../components";
import colors from "../../../styles/colors";
import getDeviceType from "../../../hooks/getDeviceType";

interface ScoresProps {
  team1Name?: string;
  team2Name?: string;
  team1Score?: number;
  team2Score?: number;
}

const Scores: React.FC<ScoresProps> = ({ team1Name, team1Score, team2Name, team2Score }) => {
  const deviceType = getDeviceType();

  return (
    <Div padding={"20px 30px"} backgroundColor={colors.cinza} gap={15} radius={15} >
      <Paragraph
        fontWeight={600}
        fontSize={deviceType === "smartphone" ? 25 : 50}
        color={colors.preto}
      >
        Placar Final
      </Paragraph>
      <Div width={"90%"} height={5} direction="row">
        <Div width={"20%"} height={"100%"} backgroundColor={colors.yellow} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.red} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.orange} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.lightBlue} />
        <Div width={"20%"} height={"100%"} backgroundColor={colors.green} />
      </Div>
      <Div gap={10} padding={"10px"}>
        <Div gap={10} direction="row">
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 30}
            fontWeight={500}
            color={colors.preto}
          >
            Equipe {team1Name}:
          </Paragraph>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 30}
            fontWeight={700}
            color={colors.preto}
          >
            {team1Score}
          </Paragraph>
        </Div>
        <Div gap={10} direction="row">
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 30}
            fontWeight={500}
            color={colors.preto}
          >
            Equipe {team2Name}:
          </Paragraph>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 30}
            fontWeight={700}
            color={colors.preto}
          >
            {team2Score}
          </Paragraph>
        </Div>
      </Div>
    </Div>
  )
}

export default React.memo(Scores);