import {
  Card,
  Text,
  Button,
  Group,
  useMantineTheme,
  Title,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { ChevronRightIcon } from "@radix-ui/react-icons";
const useStyles = createStyles((theme) => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gap: theme.spacing.lg,
  },
  cardGroup: {
    marginBottom: 5,
    marginTop: theme.spacing.sm,
  },
}));

interface ShowCardProps {
  title: string;
}

function ShowCard(props: ShowCardProps) {
  const { classes } = useStyles();
  return (
    <Card shadow="sm" padding="lg">
      <Group position="apart" className={classes.cardGroup}>
        <Text weight={500}>{props.title}</Text>
      </Group>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Ir
        <ChevronRightIcon />
      </Button>
    </Card>
  );
}

export function Home() {
  const { classes } = useStyles();
  return (
    <>
      <Title order={3} sx={(t) => ({ marginBottom: t.spacing.md })}>
        Bienvenido
      </Title>
      <div className={classes.layout}>
        <ShowCard title="Bitacoras" />
        <ShowCard title="Usuarios" />
        <ShowCard title="Solicitudes" />
      </div>
    </>
  );
}
