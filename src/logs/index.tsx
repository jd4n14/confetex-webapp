import { ActionIcon, Button, Group, Input, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";
import { InputSearch } from "../core/components/InputSearch";
import { LogCard } from "./components/LogCard";
import LogForm from "./components/LogForm";
import { Page } from "../core/components/Page";

export function Log() {
  const modals = useModals();

  return (
    <Page
      title=""
      actions={
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
            Add
          </Button>
          <Menu
            control={
              <ActionIcon color="blue">
                <DotsVerticalIcon />
              </ActionIcon>
            }
          >
            <Menu.Label>Filter</Menu.Label>
            <Menu.Item>Plant 1</Menu.Item>
          </Menu>
        </Group>
      }
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: 15,
        }}
      >
        <LogCard title="Bitacora 1" to="/logs/1" />
        <LogCard title="Bitacora 1" to="/logs/1" />
        <LogCard title="Bitacora 1" to="/logs/1" />
        <LogCard title="Bitacora 1" to="/logs/1" />
      </div>
    </Page>
  );
}
