import { Card, Group, Text, Title } from "@mantine/core";
import { TileData } from "../core/components";
import { RequestTimeline } from "./components/TimeLine";
import {
  MdOutlineReport,
  MdViewModule,
  MdOutlineBrandingWatermark,
  MdOnlinePrediction,
  MdReceipt,
  MdDateRange,
  MdAccessTime,
  MdPerson,
} from "react-icons/md";
import { Page } from "../core/components/Page";

export function RequestDetails() {
  return (
    <Page title="Request details">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <TileData text="Problema" color="grape" icon={<MdOutlineReport />} />
        <TileData text="Modulo" color="yellow" icon={<MdViewModule />} />
        <TileData
          text="Marca"
          color="green"
          icon={<MdOutlineBrandingWatermark />}
        />
        <TileData text="Supervisor" color="indigo" icon={<MdPerson />} />
        <TileData text="Maquina" color="lime" icon={<MdOnlinePrediction />} />
        <TileData text="Bitacora" color="orange" icon={<MdReceipt />} />
        <TileData text="Creada" color="pink" icon={<MdDateRange />} />
        <TileData text="Reparada" color="red" icon={<MdDateRange />} />
        <TileData
          text="Tiempo de reparacion"
          color="teal"
          icon={<MdAccessTime />}
        />
      </div>

      <Group style={{ marginBottom: "2rem" }} direction="column" grow>
        <Card>
          <Text color="gray" size="sm">
            Detalles adicionales del supervisor
          </Text>
        </Card>
        <Card>
          <Text color="gray" size="sm">
            Detalles adicionales del mecanico
          </Text>
        </Card>
      </Group>

      <RequestTimeline />
    </Page>
  );
}
