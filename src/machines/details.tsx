import { Table, Title } from "@mantine/core";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useParams } from "react-router-dom";

import { ChipButton } from "../core/components";
import { UserAvatar } from "../core/components/UserAvatar";
import { MachineInfo } from "./components/MachineInfo";
import { ParamsId } from "../core/types";
import { Page } from "../core/components/Page";

const elements = [
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "2 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "3 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "4 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "5 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "6 horas" },
];

export function MachineDetails() {
  const params = useParams<ParamsId>();
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>
        <UserAvatar color="teal" label={element.mass} to="/users" />
      </td>
      <td>
        <UserAvatar color="teal" label={element.symbol} to="/users" />
      </td>
      <td>{element.name}</td>
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
    <Page title="Machine Details">
      <MachineInfo id={Number(params.id)} />
      <Table style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Notified</th>
            <th>Repaired</th>
            <th>Repair time</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Page>
  );
}
