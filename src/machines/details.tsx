import { Table, Title } from "@mantine/core";
import { TileData } from "../core/components/TileData";
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
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td>{element.name}</td>
      <td>Ver</td>
    </tr>
  ));
  return (
    <>
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Detalles de la maquina
      </Title>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <TileData text="Identificador" />
        <TileData text="Modelo" />
        <TileData text="Marca" />
        <TileData text="Operador" />
        <TileData text="Solicitudes" />
        <TileData text="Reparaciones" />
        <TileData text="Tiempo promedio de reparacion" />
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
