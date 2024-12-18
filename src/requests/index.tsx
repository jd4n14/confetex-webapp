import {
  Group,
  Button,
  Menu,
  Title,
  Table,
  Pagination,
  Avatar,
} from "@mantine/core";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ChipButton } from "../core/components/ChipButton";
import { UserAvatar } from "../core/components/UserAvatar";
import { Page } from "../core/components/Page";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon", log: 1 },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen", log: 2 },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium", log: 3 },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium", log: 4 },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium", log: 5 },
];

export function Request() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <UserAvatar label={element.symbol} color="teal" to="/usuarios" />
      </td>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>
        <ChipButton color="red" text={element.mass.toString()} to="/maquinas" />
      </td>
      <td>
        <ChipButton color="indigo" text={element.log + ""} to="/bitacoras" />
      </td>
      <td>2021-01-01 11:10</td>
      <td>
        <ChipButton
          text="Ver"
          color="blue"
          rightIcon={<ChevronRightIcon />}
          to="/solicitudes/1"
        />
      </td>
    </tr>
  ));
  return (
    <Page
      title="Requests"
      actions={
        <Group>
          <Menu control={<Button variant="light">Filter</Button>}>
            <Menu.Label>Created At</Menu.Label>
            <Menu.Item>Today</Menu.Item>
            <Menu.Item>This week</Menu.Item>
            <Menu.Item>This month</Menu.Item>
          </Menu>
        </Group>
      }
    >
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
    </Page>
  );
}
