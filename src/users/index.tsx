import { ActionIcon, Button, Group, Menu } from "@mantine/core";
import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";
import { useModals } from "@mantine/modals";
import { UserForm } from "./components/UserForm";
import { InputSearch } from "../core/components/InputSearch";
import { Page } from "../core/components/Page";
import { UserCard } from "./components/UserCard";

export function User() {
  const modals = useModals();
  return (
    <Page
      title="Users"
      actions={
        <Group>
          <InputSearch onChange={() => {}} />
          <Button
            variant="light"
            leftIcon={<PlusIcon />}
            onClick={() => {
              modals.openModal({
                title: "add user",
                children: <UserForm onSubmit={() => ({})} />,
              });
            }}
          >
            Add user
          </Button>
          <Menu
            control={
              <ActionIcon color="blue">
                <DotsVerticalIcon />
              </ActionIcon>
            }
          >
            <Menu.Label>Rol</Menu.Label>
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
        <UserCard name="Juan Diego" plant="" />
      </div>
    </Page>
  );
}
