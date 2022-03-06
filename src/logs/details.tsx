import { TileData } from "../core/components";
import { MdOutlineReport, MdViewModule } from "react-icons/md";
import { Page } from "../core/components/Page";

export function LogDetails() {
  return (
    <Page title="Log details">
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <TileData text="Mechanic" color="grape" icon={<MdOutlineReport />} />
        <TileData text="Created At" color="yellow" icon={<MdViewModule />} />
      </div>
    </Page>
  );
}
