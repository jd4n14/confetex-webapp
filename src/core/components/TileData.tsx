import { Group, MantineColor, Text, ThemeIcon, Tooltip } from "@mantine/core";

interface TileDataProps {
  label?: string;
  text: string;
  icon: JSX.Element;
  color?: MantineColor;
}

export function TileData(props: TileDataProps) {
  return (
    <Group>
      <ThemeIcon variant="light" size="lg" color={props.color}>
        {props.icon}
      </ThemeIcon>
      <Tooltip label={props.label || props.text}>
        <Text>{props.text}</Text>
      </Tooltip>
    </Group>
  );
}
