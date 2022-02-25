import { Title } from "@mantine/core";
import { TileData } from "../core/components";
import { MdOutlineReport, MdViewModule } from "react-icons/md";

export function LogDetails() {
  return (
    <div>
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Log detail
      </Title>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <TileData text="Mechanic" color="grape" icon={<MdOutlineReport />} />
        <TileData text="Created At" color="yellow" icon={<MdViewModule />} />
      </div>
    </div>
  );
}
