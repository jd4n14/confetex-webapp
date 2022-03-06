import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { ActionIcon, Avatar, Card, Group, Text } from "@mantine/core";
import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { createStyles } from "@mantine/styles";
import React from "react";
import { UserForm } from "./UserForm";

const useStyles = createStyles((theme) => ({
  cardGroup: {
    gap: 0,
  },
}));

interface UserCardProps {
  name: string;
  plant: string;
}

export const UserCard = (props: UserCardProps) => {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  const modals = useModals();

  const handleDeleteUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    modals.openConfirmModal({
      title: "Confirm your action",
      labels: {
        cancel: "Cancel",
        confirm: "Delete",
      },
      confirmProps: {
        color: "red",
      },
      onCancel: () => console.log("cancelled"),
      onConfirm: () => console.log("confirmed"),
    });
  };
  const handleUpdateUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    return modals.openModal({
      title: "Update user",
      children: <UserForm onSubmit={() => ({})} />,
    });
  };

  return (
    <Card shadow="sm" padding="lg" style={{ height: 110 }} ref={ref}>
      <Group>
        <Avatar radius="xl" color="blue" size="lg">
          JD
        </Avatar>
        <Group
          position="apart"
          className={classes.cardGroup}
          direction="column"
        >
          <Text weight={500} style={{ margin: 0 }}>
            {props.name}
          </Text>
          <Text size="xs" color="gray" style={{ margin: 0 }}>
            Production Line 1
          </Text>
        </Group>
      </Group>
      {hovered && (
        <Group position="right">
          <ActionIcon color="red" onClick={handleDeleteUser}>
            <TrashIcon />
          </ActionIcon>
          <ActionIcon color="green" onClick={handleUpdateUser}>
            <Pencil1Icon />
          </ActionIcon>
        </Group>
      )}
    </Card>
  );
};
