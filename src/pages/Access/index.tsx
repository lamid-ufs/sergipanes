import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import { Div, PlantBoxCarousel } from "../../components";
import { Buttons, LogoImage } from "./PageComponents";
import { exportGameHistory } from "../../storage/functions/saveGameData";

const Access: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new-game");
  };

  const handleNavigateResults = () => {
    exportGameHistory();
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.blue}
      justify="space-between"
    >
      <PlantBoxCarousel width={"100%"} height={"12%"} />
      <Div
        width={"100%"}
        height={"50%"}
        gap={35}
      >
        <LogoImage />
        <Buttons onClick1={() => handleNavigate()} onCLick2={() => handleNavigateResults()} />
      </Div>
      <PlantBoxCarousel width={"100%"} height={"12%"} />
    </Div >
  );
};

export default React.memo(Access);
