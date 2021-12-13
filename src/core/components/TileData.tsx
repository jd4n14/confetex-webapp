import { BackpackIcon } from "@radix-ui/react-icons";
import { Group, Text, ThemeIcon } from "@mantine/core";

interface TileDataProps {
  text: string;
}

export function TileData(props: TileDataProps) {
  return (
    <Group>
      <ThemeIcon variant="light" size="lg">
        <BackpackIcon />
      </ThemeIcon>
      <Text>{props.text}</Text>
    </Group>
  );
}
