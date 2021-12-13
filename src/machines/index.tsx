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
  Input,
  Title,
} from "@mantine/core";
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const elements = [
  { position: 6, mass: 12.011, symbol: "C" },
  { position: 7, mass: 14.007, symbol: "N" },
  { position: 39, mass: 88.906, symbol: "Y" },
  { position: 56, mass: 137.33, symbol: "Ba" },
  { position: 58, mass: 140.12, symbol: "Ce" },
];

export function Machines() {
  const navigate = useNavigate();
  const rows = elements.map((element) => (
    <tr key={element.symbol}>
      <td>{element.position}</td>
      <td>{element.position}</td>
      <td>{element.mass}</td>
      <td>
        <Group>
          <Avatar color="blue" size="sm" radius="xl">
            JD
          </Avatar>
          <Text size="sm">Juan Diego Parra Mendez</Text>
        </Group>
      </td>
      <td>
        <Button
          variant="light"
          radius="xl"
          size="xs"
          compact
          rightIcon={<ChevronRightIcon />}
          onClick={() => navigate("/maquinas/1")}
        >
          Ver
        </Button>
      </td>
    </tr>
  ));
  return (
    <>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Maquinas
        </Text>
        <Group>
          <Input icon={<MagnifyingGlassIcon />} placeholder="Buscar" />
          <Button variant="light" leftIcon={<PlusIcon />}>
            Agregar
          </Button>
        </Group>
      </Group>
      <Table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Operador</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Group position="center" style={{ marginTop: 30 }}>
        <Pagination total={5} page={1} color="blue" onChange={() => {}} />
      </Group>
    </>
  );
}
