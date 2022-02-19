import { Button, Group, LoadingOverlay, Text } from "@mantine/core";
import { PlusIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Line } from "../core/types";
import { LinesCard } from "./components/LinesCard";
import { createNewLine } from "./api";
import { useHotkeys } from "@mantine/hooks";
import { queryClient } from "../core/api/queryClient";

export function Lines() {
  const { data: lines, isFetching } = useQuery<Line[]>("lines");
  const addNewLineMutation = useMutation(createNewLine, {
    onSuccess: () => queryClient.invalidateQueries("lines"),
  });

  const handleCreateNewLine = () => {
    addNewLineMutation.mutate();
  };

  useHotkeys([["mod+C", () => handleCreateNewLine()]]);

  return (
    <div>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Lineas de produccion
        </Text>
        <Button
          variant="light"
          leftIcon={<PlusIcon />}
          onClick={handleCreateNewLine}
        >
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
          <LinesCard
            name={`Linea ${line.id}`}
            key={`line-${line.id}`}
            id={line.id}
          />
        ))}
      </div>
    </div>
  );
}
