import { Button, MantineColor } from "@mantine/core";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

interface ChipButtonProps {
  text: string;
  to: To;
  options?: NavigateOptions;
  color: MantineColor;
  rightIcon?: JSX.Element;
}
export const ChipButton = (props: ChipButtonProps) => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(props.to, props.options);
  };
  return (
    <Button
      variant="light"
      radius="xl"
      size="xs"
      color={props.color}
      compact
      onClick={handleClick}
      rightIcon={props.rightIcon || undefined}
    >
      {props.text}
    </Button>
  );
};
