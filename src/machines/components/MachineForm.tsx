import { Button, Group, TextInput } from "@mantine/core";
import { Machine } from "../types";
import { useForm } from "@mantine/hooks";

interface MachineFormProps {
  onSave: (machine: Omit<Machine, "id">) => void;
  values?: Omit<Machine, "id"> | null;
}
export const MachineForm = (props: MachineFormProps) => {
  const form = useForm<Omit<Machine, "id">>({
    initialValues: props.values || {
      identifier: "",
      model: "",
      brand: "",
      operator: "",
    },
    validationRules: {
      identifier: (value) => value.length > 3,
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => props.onSave(values))}>
      <Group direction="column" grow>
        <TextInput
          label="Identificador"
          placeholder="Identificador"
          {...form.getInputProps("identifier")}
        />
        <TextInput
          label="Marca"
          placeholder="Marca de la maquina"
          {...form.getInputProps("brand")}
        />
        <TextInput
          label="Modelo"
          placeholder="Modelo"
          {...form.getInputProps("model")}
        />
        <TextInput
          label="Operador"
          placeholder="Nombre del operador"
          {...form.getInputProps("operator")}
        />
        <Button type="submit">Guardar</Button>
      </Group>
    </form>
  );
};
