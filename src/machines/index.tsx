import {
  Group,
  Button,
  Text,
  Pagination,
  LoadingOverlay,
  ScrollArea,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { PlusIcon } from "@radix-ui/react-icons";
import { InputSearch } from "../core/components/InputSearch";
import { MachineForm } from "./components/MachineForm";
import { MachineTable } from "./components/MachineTable";
import { useMutation, useQuery } from "react-query";
import { Machine } from "./types";
import { Paginate } from "../core/types";
import { queryClient } from "../core/api/queryClient";
import { createMachine } from "./api";

export function Machines() {
  const modals = useModals();
  const { data, isFetching } = useQuery<Paginate<Machine>>("machines");
  const addNewMachineMutation = useMutation(createMachine, {
    onSuccess: () => queryClient.invalidateQueries("machines"),
  });

  useHotkeys([["mod+C", () => handleShowModal()]]);
  const handleSaveMachine = (id: string, machine: Omit<Machine, "id">) => {
    modals.closeModal(id);
    addNewMachineMutation.mutate(machine);
  };

  const handleShowModal = () => {
    const id = modals.openModal({
      title: "Agregar Maquina",
      children: <MachineForm onSave={(data) => handleSaveMachine(id, data)} />,
    });
  };

  return (
    <>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Maquinas
        </Text>
        <Group>
          <InputSearch onChange={(val: string) => {}} />
          <Button
            variant="light"
            leftIcon={<PlusIcon />}
            onClick={handleShowModal}
          >
            Agregar
          </Button>
        </Group>
      </Group>
      <LoadingOverlay visible={isFetching} />
      <ScrollArea>
        <MachineTable machines={data?.data} />
      </ScrollArea>
      <Group position="center" style={{ marginTop: 30 }}>
        <Pagination
          total={data?.meta?.totalPages!}
          page={data?.meta.currentPage!}
          color="blue"
          onChange={() => {}}
        />
      </Group>
    </>
  );
}
