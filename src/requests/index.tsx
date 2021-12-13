import {
  Group,
  Button,
  Menu,
  Text,
  Table,
  Tooltip,
  ActionIcon,
  Badge,
  Pagination,
  Avatar,
} from "@mantine/core";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Scrollbars } from "react-custom-scrollbars";
import { createStyles } from "@mantine/styles";
import { useNavigate } from "react-router-dom";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon", log: 1 },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen", log: 2 },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium", log: 3 },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium", log: 4 },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium", log: 5 },
];

export function Request() {
  const navigate = useNavigate();
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Tooltip label={element.symbol}>
          <ActionIcon>
            <Avatar size="sm" radius="xl" color="teal">
              JD
            </Avatar>
          </ActionIcon>
        </Tooltip>
      </td>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>
        <Badge>{element.mass}</Badge>
      </td>
      <td>
        <Badge color="indigo">{element.log}</Badge>
      </td>
      <td>2021-01-01 11:10</td>
      <td>
        <Button
          variant="light"
          radius="xl"
          size="xs"
          compact
          rightIcon={<ChevronRightIcon />}
          onClick={() => navigate("/solicitudes/1")}
        >
          Ver
        </Button>
      </td>
    </tr>
  ));
  return (
    <div>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Solicitudes
        </Text>
        <Group>
          <Menu control={<Button variant="light">Filtrar</Button>}>
            <Menu.Label>Fecha</Menu.Label>
            <Menu.Item>Hoy</Menu.Item>
            <Menu.Item>Esta semana</Menu.Item>
            <Menu.Item>Mes</Menu.Item>
          </Menu>
        </Group>
      </Group>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Supervisor</th>
              <th>Problema</th>
              <th>Modulo</th>
              <th>Maquina</th>
              <th>Bitacora</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
      <Group position="center" style={{ marginTop: 30 }}>
        <Pagination total={5} page={1} color="green" onChange={() => {}} />
      </Group>
    </div>
  );
}
