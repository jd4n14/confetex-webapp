import { ActionIcon, Button, Group, Input, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { DotsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { InputSearch } from "../core/components/InputSearch";
import { LogCard } from "./components/LogCard";
import LogForm from "./components/LogForm";

export function Log() {
  const modals = useModals();

  return (
    <div>
      <Group position="right" style={{ marginTop: 20, marginBottom: 20 }}>
        <InputSearch onChange={() => {}} />
        <Button
          variant="light"
          leftIcon={<PlusIcon />}
          onClick={() => {
            modals.openModal({
              title: "Agregar bitacora",
              children: <LogForm />,
            });
          }}
        >
          Agregar
        </Button>
        <Menu
          control={
            <ActionIcon color="blue">
              <DotsVerticalIcon />
            </ActionIcon>
          }
        >
          <Menu.Label>Filtrar</Menu.Label>
          <Menu.Item>Planta 1</Menu.Item>
        </Menu>
      </Group>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
        <LogCard title="Bitacora 1" to="/bitacoras/1" />
      </div>
    </div>
  );
}
