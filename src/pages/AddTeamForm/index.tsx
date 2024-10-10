import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../styles/colors";
import { Button, Div, Paragraph, PlantBoxCarousel } from "../../components";
import getDeviceType from "../../hooks/getDeviceType";
import TeamForm from "./PageComponents/TeamForm";
import { useGame } from "../../context/GameContext";

const NewGameForm: React.FC = () => {
  const deviceType = getDeviceType();
  const navigate = useNavigate();
  const [team1name, setTeam1name] = useState("")
  const [team2name, setTeam2name] = useState("")
  const { setTeamAName, setTeamBName } = useGame();

  const handleNavigate = () => {
    setTeamAName(team1name);
    setTeamBName(team2name);

    navigate("/gameTeam01");
  };

  const handleNavigateHome = () => {
    navigate("/sergipanes");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
    setState(value);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      navigate("/sergipanes");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.lightBlue}
      justify="space-between"
    >
      <PlantBoxCarousel width={"100%"} height={"12%"} />
      <Div
        width={"100%"}
        height={"60%"}
        justify="space-evenly"
      >
        <Paragraph color={colors.preto} fontWeight={800} fontSize={70}>
          Novo Jogo
        </Paragraph>
        <TeamForm
          team1={team1name}
          team2={team2name}
          onChangeTeam1={(e) => handleInputChange(e, setTeam1name)}
          onChangeTeam2={(e) => handleInputChange(e, setTeam2name)}
        />
        <Div width={"100%"} gap={20} >
          <Button
            width={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "60%" : "20%"}
            margin={0}
            padding={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "30px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigate()}
            backgroundColor={team1name === "" || team2name === "" ? colors.cinzaEscuro : colors.green}
            hoverBackgroundColor={"#76ac35"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
            disabled={team1name === "" || team2name === ""}
          >
            <Paragraph
              fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? 30 : 25}
              fontWeight={500}
              color={"#2C1F26"}
            >
              Iniciar partida
            </Paragraph>
          </Button>
          <Button
            width={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "60%" : "20%"}
            margin={0}
            padding={deviceType === "smartphone" || deviceType === "tablet-portrait" ? "30px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigateHome()}
            backgroundColor={colors.green}
            hoverBackgroundColor={"#76ac35"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
          >
            <Paragraph
              fontSize={deviceType === "smartphone" || deviceType === "tablet-portrait" ? 30 : 25}
              fontWeight={500}
              color={"#2C1F26"}
            >
              Voltar para home
            </Paragraph>
          </Button>
        </Div>
      </Div>
      <PlantBoxCarousel width={"100%"} height={"12%"} />
    </Div >
  );
};

export default React.memo(NewGameForm);
