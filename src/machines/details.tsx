import { Table, Title } from "@mantine/core";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {
  MdAccessTime,
  MdOutlineCallToAction,
  MdOutlineConfirmationNumber,
  MdPerson,
} from "react-icons/md";
import { ChipButton } from "../core/components";
import { TileData } from "../core/components/TileData";
import { UserAvatar } from "../core/components/UserAvatar";
const elements = [
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "2 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "3 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "4 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "5 horas" },
  { position: "2021-01-01", mass: "Diego", symbol: "Juan", name: "6 horas" },
];
export function MachineDetails() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>
        <UserAvatar color="teal" label={element.mass} to="/usuarios" />
      </td>
      <td>
        <UserAvatar color="teal" label={element.symbol} to="/usuarios" />
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
    <>
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Detalles de la maquina
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <TileData
          color="blue"
          text="Identificador"
          icon={<MdOutlineConfirmationNumber />}
        />
        <TileData color="cyan" text="Modelo" icon={<MdOutlineCallToAction />} />
        <TileData color="grape" text="Marca" icon={<MdOutlineCallToAction />} />
        <TileData color="green" text="Operador" icon={<MdPerson />} />
        <TileData color="indigo" text="Solicitudes" icon={<MdAccessTime />} />
        <TileData color="lime" text="Reparaciones" icon={<MdAccessTime />} />
        <TileData
          color="orange"
          text="Tiempo promedio de reparacion"
          icon={<MdAccessTime />}
        />
      </div>
      <Table style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Notificado</th>
            <th>Reparado</th>
            <th>Tiempo de repacion</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}
