import { Button, Group, LoadingOverlay, Text } from "@mantine/core";
import { PlusIcon } from "@radix-ui/react-icons";
import { useQuery } from "react-query";
import { Line } from "../core/types";
import { LinesCard } from "./components/LinesCard";

export function Lines() {
  const { data: lines, isFetching } = useQuery<Line[]>("/lines");
  return (
    <div>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Lineas de produccion
        </Text>
        <Button variant="light" leftIcon={<PlusIcon />}>
          Agregar
        </Button>
      </Group>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <LoadingOverlay visible={isFetching} />
        {lines?.map((line) => (
          <LinesCard name={`Linea ${line.id}`} />
        ))}
      </div>
    </div>
  );
}
