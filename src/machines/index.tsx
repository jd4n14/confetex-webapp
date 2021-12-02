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
} from "@mantine/core";
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import Scrollbars from "react-custom-scrollbars";

const elements = [
  { position: 6, mass: 12.011, symbol: "C" },
  { position: 7, mass: 14.007, symbol: "N" },
  { position: 39, mass: 88.906, symbol: "Y" },
  { position: 56, mass: 137.33, symbol: "Ba" },
  { position: 58, mass: 140.12, symbol: "Ce" },
];

export function Machine() {
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
    </tr>
  ));
  return (
    <Scrollbars>
      <Group position="right" style={{ marginTop: 20, marginBottom: 20 }}>
        <Input icon={<MagnifyingGlassIcon />} placeholder="Buscar" />
        <Button variant="light" leftIcon={<PlusIcon />}>
          Agregar
        </Button>
      </Group>
      <Table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Operador</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Group position="center" style={{ marginTop: 30 }}>
        <Pagination total={5} page={1} color="blue" onChange={() => {}} />
      </Group>
    </Scrollbars>
  );
}
