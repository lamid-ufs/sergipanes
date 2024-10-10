import React from "react";
import { Div, Image } from "../../atoms";
import getDeviceType from "../../../hooks/getDeviceType";

interface PlantBoxProps {
  backgroundColor: string;
  imageURL: string;
  totalPlants: number;
}

const PlantBox: React.FC<PlantBoxProps> = ({
  backgroundColor,
  imageURL,
  totalPlants,
}) => {
  const deviceType = getDeviceType();

  const width = `${100 / totalPlants}%`;

  return (
    <Div height={"100%"} width={width} backgroundColor={backgroundColor}>
      <Image
        height={deviceType === "smartphone" ? "" : "45%"}
        width={deviceType === "smartphone" ? 40 : ""}
        src={imageURL}
        alt="Plant BG"
        animate={true}
      />
    </Div>
  );
};

export default PlantBox;
