import { ActionIcon, Avatar, MantineColor, Tooltip } from "@mantine/core";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

interface UserAvatarProps {
  label: string;
  text?: string;
  color: MantineColor;
  to: To;
  options?: NavigateOptions;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const navigate = useNavigate();
  const text =
    props.text ||
    props.label
      .split(" ")
      .map((s) => s[0])
      .join("") ||
    props.label[0];

  const handleClick = () => {
    navigate(props.to, props.options);
  };
  
  return (
    <Tooltip label={props.label}>
      <ActionIcon onClick={handleClick}>
        <Avatar size="sm" radius="xl" color={props.color}>
          {text}
        </Avatar>
      </ActionIcon>
    </Tooltip>
  );
};
