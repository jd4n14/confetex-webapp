import { Title } from "@mantine/core";
import { TileData } from "../core/components";

export function LogDetails() {
  return (
    <div>
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Detalles de la bitacora
      </Title>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <TileData text="Mecanico" />
        <TileData text="Fecha de creacion" />
      </div>
    </div>
  );
}
