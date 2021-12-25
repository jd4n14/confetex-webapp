import { Button, Group, TextInput } from "@mantine/core";

export const MachineForm = () => {
  return (
    <Group direction="column" grow>
      <TextInput label="Identificador" placeholder="Identificador" />
      <TextInput label="Marca" placeholder="Marca de la maquina" />
      <TextInput label="Modelo" placeholder="Modelo" />
      <TextInput label="Operador" placeholder="Nombre del operador" />
      <Button>Guardar</Button>
    </Group>
  );
};
