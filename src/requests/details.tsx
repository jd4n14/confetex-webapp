import { Timeline, Text, Title } from "@mantine/core";
import { BadgeIcon } from "@radix-ui/react-icons";
import { TileData } from "../core/components";

export function RequestDetails() {
  return (
    <div>
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Detalles de la solicitud
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <TileData text="Problema" />
        <TileData text="Modulo" />
        <TileData text="Marca" />
        <TileData text="Supervisor" />
        <TileData text="Maquina" />
        <TileData text="Bitacora" />
        <TileData text="Creada" />
        <TileData text="Reparada" />
        <TileData text="Tiempo de reparacion" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Text>Detalles adicionales del supervisor</Text>
        <Text>Detalles adicionales del mecanico</Text>
      </div>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<BadgeIcon />} title="Nueva solicitud">
          <Text color="dimmed" size="sm">
            Solicitud creada por{" "}
            <Text variant="link" component="span" inherit>
              Juan
            </Text>
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<BadgeIcon />} title="Recibida">
          <Text color="dimmed" size="sm">
            Solicitud recibida por{" "}
            <Text variant="link" component="span" inherit>
              Diego
            </Text>
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="En camino" bullet={<BadgeIcon />}>
          <Text color="dimmed" size="sm">
            El mecanico esta en camino
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Reparada" bullet={<BadgeIcon />}>
          <Text color="dimmed" size="sm">
            El mecanico marco el problema{" "}
            <Text variant="link" component="span" inherit>
              problema
            </Text>{" "}
            al momento de realizar la repacion
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
