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
  { identifier: 6, model: 'Model #1', brand: 'Machine #1', operator: "C" },
  { identifier: 7, model: 'Model #2', brand: 'Machine #2', operator: "N" },
  { identifier: 39, model: 'Model #3', brand: 'Machine #3', operator: "Y" },
  { identifier: 56, model: 'Model #4', brand: 'Machine #4', operator: "Ba" },
  { identifier: 58, model: 'Model #5', brand: 'Machine #5', operator: "Ce" },
];

export function Machines() {
  const navigate = useNavigate();
  const rows = elements.map((element) => (
    <tr key={element.identifier}>
      <td>{element.identifier}</td>
      <td>{element.model}</td>
      <td>{element.brand}</td>
      <td>
        <Group>
          <Avatar color="blue" size="sm" radius="xl">
            {element.operator}
          </Avatar>
          <Text size="sm">{element.operator}</Text>
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
            <th>Ver</th>
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
