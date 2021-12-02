import {
  Avatar,
  ActionIcon,
  Button,
  Card,
  Group,
  Input,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
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

const UserCard = (props: UserCardProps) => {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  return (
    <Card shadow="sm" padding="lg" style={{ height: 130 }} ref={ref}>
      <UnstyledButton style={{ width: "100%" }}>
        <Group>
          <Avatar radius="xl" color="blue" size="lg">
            JD
          </Avatar>
          <Group
            position="apart"
            className={classes.cardGroup}
            direction="column"
          >
            <Text weight={500} style={{ margin: 0 }}>
              {props.name}
            </Text>
            <Text size="xs" color="gray" style={{ margin: 0 }}>
              Planta 1
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

export function User() {
  return (
    <div>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Usuarios
        </Text>
        <Group>
          <Input icon={<MagnifyingGlassIcon />} placeholder="Buscar" />
          <Button variant="light" leftIcon={<PlusIcon />}>
            Agregar
          </Button>
          <Menu
            control={
              <ActionIcon color="blue">
                <DotsVerticalIcon />
              </ActionIcon>
            }
          >
            <Menu.Label>Rol</Menu.Label>
            <Menu.Item>Supervisor</Menu.Item>
            <Menu.Item>Mecanico</Menu.Item>
            <Menu.Label>Planta</Menu.Label>
            <Menu.Item>Planta 1</Menu.Item>
            <Menu.Item>Planta 2</Menu.Item>
            <Menu.Item>Planta 3</Menu.Item>
            <Menu.Item>Planta 4</Menu.Item>
          </Menu>
        </Group>
      </Group>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <UserCard name="Juan Diego" />
        <UserCard name="Juan Diego" />
        <UserCard name="Juan Diego" />
        <UserCard name="Juan Diego" />
      </div>
    </div>
  );
}
