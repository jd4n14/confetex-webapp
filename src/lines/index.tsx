import {
  ActionIcon,
  Button,
  Card,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { createStyles } from "@mantine/styles";
import { useHover } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  cardGroup: {
    gap: 0,
  },
}));

interface UserCardProps {
  name: string;
}

const LinesCard = (props: UserCardProps) => {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  return (
    <Card shadow="sm" padding="lg" style={{ height: 90 }} ref={ref}>
      <UnstyledButton style={{ width: "100%" }}>
        <Group>
          <Group
            position="apart"
            className={classes.cardGroup}
            direction="column"
          >
            <Text weight={500} style={{ margin: 0 }}>
              {props.name}
            </Text>
          </Group>
        </Group>
        {hovered && (
          <Group position="right">
            <UnstyledButton>
              <ActionIcon color="red">
                <TrashIcon></TrashIcon>
              </ActionIcon>
            </UnstyledButton>
          </Group>
        )}
      </UnstyledButton>
    </Card>
  );
};

export function Lines() {
  return (
    <div>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Lineas de produccion
        </Text>
        <Button variant="light" leftIcon={<PlusIcon />}>
          Agregar
        </Button>
      </Group>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <LinesCard name="Linea 1" />
        <LinesCard name="Linea 2" />
        <LinesCard name="Linea 3" />
        <LinesCard name="Linea 5" />
      </div>
    </div>
  );
}
