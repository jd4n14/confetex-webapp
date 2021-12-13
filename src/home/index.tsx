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
import { useNavigate } from "react-router-dom";
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
  to: string;
}

function ShowCard(props: ShowCardProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(props.to);
  };

  return (
    <Card shadow="sm" padding="lg">
      <Group position="apart" className={classes.cardGroup}>
        <Text weight={500}>{props.title}</Text>
      </Group>

      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={handleOnClick}
      >
        Ir
        <ChevronRightIcon />
      </Button>
    </Card>
  );
}

export function Home() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Title order={3} sx={(t) => ({ marginBottom: t.spacing.md })}>
        Bienvenido
      </Title>
      <div className={classes.layout}>
        <ShowCard title="Bitacoras" to="bitacoras" />
        <ShowCard title="Usuarios" to="usuarios" />
        <ShowCard title="Solicitudes" to="solicitudes" />
        <ShowCard title="Maquinas" to="maquinas" />
        <ShowCard title="Lineas de produccion" to="lineas" />
        <ShowCard title="Configuracion" to="configuracion" />
      </div>
    </>
  );
}
