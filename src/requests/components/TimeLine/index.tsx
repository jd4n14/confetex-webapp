import { Timeline, Text } from "@mantine/core";
import { BadgeIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const RequestTimeline = () => {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<BadgeIcon />} title="Nueva solicitud">
        <Text color="dimmed" size="sm">
          Solicitud creada por{" "}
          <Text variant="link" inherit component={Link} to="/usuarios">
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
          <Text variant="link" inherit component={Link} to="/usuarios">
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
  );
};
