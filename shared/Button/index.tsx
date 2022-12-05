import React from "react";
import { Button } from "./style";

const ButtonComponent = ({
  text,
  disabled,
  handleButton
}: {
  text: string;
  disabled: boolean;
  handleButton?: () => void;
}): JSX.Element => {
  return <Button onClick={handleButton} disabled={disabled}>{text}</Button>;
};

export default ButtonComponent;
