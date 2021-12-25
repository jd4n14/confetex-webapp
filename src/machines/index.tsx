import { Group, Button, Text, Table, Pagination, Input } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { ChevronRightIcon, MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { ChipButton } from "../core/components";
import { InputSearch } from "../core/components/InputSearch";
import { UserAvatar } from "../core/components/UserAvatar";
import { MachineForm } from "./components/MachineForm";

const elements = [
  { identifier: 6, model: "Model #1", brand: "Machine #1", operator: "C" },
  { identifier: 7, model: "Model #2", brand: "Machine #2", operator: "N" },
  { identifier: 39, model: "Model #3", brand: "Machine #3", operator: "Y" },
  { identifier: 56, model: "Model #4", brand: "Machine #4", operator: "Ba" },
  { identifier: 58, model: "Model #5", brand: "Machine #5", operator: "Ce" },
];

export function Machines() {
  const modals = useModals();

  useHotkeys([["mod+C", () => handleShowModal()]]);

  const handleShowModal = () => {
    modals.openModal({
      title: "Agregar Maquina",
      children: <MachineForm />,
    });
  };

  const rows = elements.map((element) => (
    <tr key={element.identifier}>
      <td>{element.identifier}</td>
      <td>{element.model}</td>
      <td>{element.brand}</td>
      <td>
        <UserAvatar label={element.operator} color="blue" to="/usuarios" />
      </td>
      <td>
        <ChipButton text="Ver" color="blue" to="/maquinas/1" rightIcon={<ChevronRightIcon />} />
      </td>
    </tr>
  ));
  return (
    <>
      <Group position="apart" style={{ marginTop: 20, marginBottom: 20 }}>
        <Text size="xl" weight={600}>
          Maquinas
        </Text>
        <Group>
          <InputSearch onChange={(val: string) => {}} />
          <Button variant="light" leftIcon={<PlusIcon />} onClick={handleShowModal}>
            Agregar
          </Button>
        </Group>
      </Group>
      <Table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Operador</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Group position="center" style={{ marginTop: 30 }}>
        <Pagination total={5} page={1} color="blue" onChange={() => {}} />
      </Group>
    </>
  );
}
