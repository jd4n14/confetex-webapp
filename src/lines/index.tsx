import { Button, LoadingOverlay } from "@mantine/core";
import { PlusIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery } from "react-query";
import { Line } from "../core/types";
import { LinesCard } from "./components/LinesCard";
import { createNewLine } from "./api";
import { useHotkeys } from "@mantine/hooks";
import { queryClient } from "../core/api/queryClient";
import { Page } from "../core/components/Page";

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
    <Page
      title="Production Lines"
      actions={
        <Button
          variant="light"
          leftIcon={<PlusIcon />}
          disabled={addNewLineMutation.isLoading}
          onClick={handleCreateNewLine}
        >
          Add new
        </Button>
      }
    >
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
            name={`Production line ${line.id}`}
            key={`line-${line.id}`}
            id={line.id}
          />
        ))}
      </div>
    </Page>
  );
}
