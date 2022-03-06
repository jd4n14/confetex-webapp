import { createStyles } from "@mantine/styles";
import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { ActionIcon, Card, Group, Text, useMantineTheme } from "@mantine/core";
import { TrashIcon } from "@radix-ui/react-icons";
import { useMutation, useQueryClient } from "react-query";
import { deleteLine } from "../api";

const useStyles = createStyles((theme) => ({
  cardGroup: {
    gap: 0,
  },
}));

interface UserCardProps {
  id: number;
  name: string;
}

export const LinesCard = (props: UserCardProps) => {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();
  const modals = useModals();
  const queryClient = useQueryClient();
  const deleteLineMutation = useMutation(deleteLine, {
    onSuccess: () => queryClient.invalidateQueries("lines"),
  });

  return (
    <Card
      shadow="sm"
      padding="lg"
      ref={ref}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme == "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        height: 90,
      })}
    >
      <div style={{ width: "100%" }}>
        <Group>
          <Group
            position="apart"
            className={classes.cardGroup}
            direction="column"
          >
            <Text weight={500} style={{ margin: 0 }}>
              {props.name}
            </Text>
          </Group>
        </Group>
        {hovered && (
          <Group position="right">
            <ActionIcon
              color="red"
              onClick={() => {
                modals.openConfirmModal({
                  title: "Confirma tu accion",
                  labels: {
                    cancel: "Cancelar",
                    confirm: "Confirmar",
                  },
                  confirmProps: {
                    color: "red",
                  },
                  onConfirm: () => deleteLineMutation.mutate(props.id),
                });
              }}
            >
              <TrashIcon />
            </ActionIcon>
          </Group>
        )}
      </div>
    </Card>
  );
};
