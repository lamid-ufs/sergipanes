import React from "react";
import styled from "styled-components";
import Div from "../Div";
import Button from "../Button";
import { Paragraph } from "..";
import colors from "../../../styles/colors";

// Definição das props que o componente vai receber
interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  borderRadius?: string | number;
  padding?: string | number;
  margin?: string | number;
  fontSize?: string | number;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
  boxShadow?: string;
  disabled?: boolean;
  numericOnly?: boolean;
  maxLength?: number;
  isPasswordVisible?: boolean;  // Nova propriedade
  togglePasswordVisibility?: () => void;
}

// Componente estilizado para o input de texto, removendo as props específicas do DOM
const StyledInput = styled.input<Partial<Omit<TextInputProps, 'onChange' | 'value'>>>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height)};
  border: 1px solid ${(props) => props.borderColor || "#ccc"};
  border-radius: ${(props) =>
    typeof props.borderRadius === "number" ? `${props.borderRadius}px` : props.borderRadius};
  padding: ${(props) => (typeof props.padding === "number" ? `${props.padding}px` : props.padding)};
  margin: ${(props) => (typeof props.margin === "number" ? `${props.margin}px` : props.margin)};
  font-family: "Neulis";
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (typeof props.fontSize === "number" ? `${props.fontSize}px` : props.fontSize)};
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  box-shadow: ${(props) => props.boxShadow};
  outline: none;

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

// Componente funcional para o TextInput
const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  numericOnly = false,
  maxLength,
  isPasswordVisible = false,
  togglePasswordVisibility,
  ...props
}) => {

  // Lógica para restringir a entrada apenas a números
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (numericOnly) {
      // Permite apenas números
      if (/^\d*$/.test(inputValue)) {
        onChange(e); // Chama o onChange apenas se o valor for numérico
      }
    } else {
      onChange(e); // Chama o onChange normalmente se numericOnly for false
    }
  };
  return (
    <Div width={"100%"} direction="row" gap={10}>
      <StyledInput
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        inputMode={numericOnly ? "numeric" : undefined}
        maxLength={maxLength}
        {...props}
      />
      {(type === "password" || isPasswordVisible !== undefined) && togglePasswordVisibility && (
        <Button
          onClick={togglePasswordVisibility}
          hoverBackgroundColor={colors.cinzaEscuro}
          padding={"10px"}
          borderRadius={20}
        >
          <Paragraph fontWeight={700} fontSize={15}>
            {isPasswordVisible ? "Ocultar" : "Mostrar"}
          </Paragraph>
        </Button>
      )}

    </Div>
  );
};

export default TextInput;
