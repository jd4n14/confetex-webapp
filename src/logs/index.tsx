import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Input,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import {
  DotsVerticalIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export function Log() {
  return (
    <div>
      <Group position="right" style={{ marginTop: 20, marginBottom: 20 }}>
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
          <Menu.Label>Filtrar</Menu.Label>
          <Menu.Item>Planta 1</Menu.Item>
        </Menu>
      </Group>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
      </div>
    </div>
  );
}

interface LogCardProps {
  title: string;
  to: string;
}
function LogCard(props: LogCardProps) {
  const { hovered, ref } = useHover();
  const navigate = useNavigate();
  const handleMove = () => {
    navigate(props.to);
  };
  return (
    <Card shadow="sm" padding="lg" ref={ref} style={{ height: 100 }}>
      <UnstyledButton style={{ width: "100%" }} onClick={handleMove} >
        <Group position="apart">
          <Text weight={500}>{props.title}</Text>
          <Badge color={"green"}>Ok</Badge>
        </Group>
        <Group>
          <Text size="xs" color="gray">
            Planta 1
          </Text>
        </Group>
        {hovered && (
          <Group position="right">
            <UnstyledButton>
              <ActionIcon color="red">
                <TrashIcon></TrashIcon>
              </ActionIcon>
            </UnstyledButton>
            <UnstyledButton>
              <ActionIcon color="blue">
                <PersonIcon />
              </ActionIcon>
            </UnstyledButton>
            <UnstyledButton>
              <ActionIcon color="green">
                <PlusIcon />
              </ActionIcon>
            </UnstyledButton>
          </Group>
        )}
      </UnstyledButton>
    </Card>
  );
}
