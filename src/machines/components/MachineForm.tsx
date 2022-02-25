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
          label="Identifier"
          placeholder="Identifier"
          {...form.getInputProps("identifier")}
        />
        <TextInput
          label="Brand"
          placeholder="Brand"
          {...form.getInputProps("brand")}
        />
        <TextInput
          label="Model"
          placeholder="Model"
          {...form.getInputProps("model")}
        />
        <TextInput
          label="Operator"
          placeholder="Operator"
          {...form.getInputProps("operator")}
        />
        <Button type="submit">Save</Button>
      </Group>
    </form>
  );
};
