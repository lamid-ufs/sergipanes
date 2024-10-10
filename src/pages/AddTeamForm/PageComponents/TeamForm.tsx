import React from "react";
import { Div, Input, Paragraph } from "../../../components";
import colors from "../../../styles/colors";
import getDeviceType from "../../../hooks/getDeviceType";

interface TeamFormProps {
  team1: string;
  team2: string;
  onChangeTeam1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTeam2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TeamForm: React.FC<TeamFormProps> = ({
  team1,
  team2,
  onChangeTeam1,
  onChangeTeam2,
}) => {
  const deviceType = getDeviceType();

  return (
    <Div width={deviceType !== "desktop" ? "100%" : "45%"} gap={30}>
      <Div width={"90%"} gap={10}>
        <Paragraph
          width={"98%"}
          fontWeight={600}
          fontSize={
            deviceType === "smartphone"
              ? 20
              : deviceType === "tablet-portrait"
              ? 25
              : 30
          }
          color={colors.preto}
        >
          Nome da Equipe 1
        </Paragraph>
        <Input
          type="text"
          value={team1}
          onChange={onChangeTeam1}
          placeholder="Digite aqui o nome da equipe"
          height={
            deviceType === "smartphone"
              ? 60
              : deviceType === "tablet-portrait"
              ? 80
              : 80
          }
          width={"100%"}
          padding={"0px 0px 0px 30px"}
          borderRadius={30}
          numericOnly={false}
          maxLength={12}
          fontSize={20}
          isPasswordVisible={true}
        />
      </Div>
      <Div width={"90%"} gap={10}>
        <Paragraph
          width={"98%"}
          fontWeight={600}
          fontSize={
            deviceType === "smartphone"
              ? 20
              : deviceType === "tablet-portrait"
              ? 25
              : 30
          }
          color={colors.preto}
        >
          Nome da Equipe 2
        </Paragraph>
        <Input
          type="text"
          value={team2}
          onChange={onChangeTeam2}
          placeholder="Digite aqui o nome da equipe"
          height={
            deviceType === "smartphone"
              ? 60
              : deviceType === "tablet-portrait"
              ? 80
              : 80
          }
          width={"100%"}
          padding={"0px 0px 0px 30px"}
          borderRadius={30}
          numericOnly={false}
          maxLength={12}
          fontSize={20}
          isPasswordVisible={true}
        />
      </Div>
    </Div>
  );
};

export default React.memo(TeamForm);
