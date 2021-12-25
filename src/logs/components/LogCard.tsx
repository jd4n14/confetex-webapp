import { Card, UnstyledButton, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { TrashIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { RequestForm } from "../../requests/components/RequestForm";
import { MechanicForm } from "../../users/components/MechanicForm";

interface LogCardProps {
  title: string;
  to: string;
}
function LogCard(props: LogCardProps) {
  const { hovered, ref } = useHover();
  const navigate = useNavigate();
  const modals = useModals();
  const handleMove = () => {
    navigate(props.to);
  };
  return (
    <Card shadow="sm" padding="lg" ref={ref} style={{ height: 100 }}>
      <div style={{ width: "100%" }} onClick={handleMove}>
        <Group position="apart">
          <Text weight={500}>{props.title}</Text>
          <Badge color={"green"}>Ok</Badge>
        </Group>
        <Group>
          <Text size="xs" color="gray">
            Planta 1
          </Text>
        </Group>
        {hovered && (
          <Group position="right">
            <ActionIcon
              color="red"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                modals.openConfirmModal({
                  title: "Confirma tu accion",
                  labels: {
                    cancel: "Cancelar",
                    confirm: "Confirmar",
                  },
                  confirmProps: {
                    color: "red",
                  },
                  onCancel: () => console.log("cancelled"),
                  onConfirm: () => console.log("confirmed"),
                });
              }}
            >
              <TrashIcon></TrashIcon>
            </ActionIcon>
            <ActionIcon color="blue" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.stopPropagation();
              modals.openModal({
                title: "Cambiar mecanico",
                children: <MechanicForm />,
              });
            }}>
              <PersonIcon />
            </ActionIcon>
            <ActionIcon
              color="green"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                modals.openModal({
                  title: "Crear solicitud",
                  children: <RequestForm />,
                });
              }}
            >
              <PlusIcon />
            </ActionIcon>
          </Group>
        )}
      </div>
    </Card>
  );
}

export { LogCard };
