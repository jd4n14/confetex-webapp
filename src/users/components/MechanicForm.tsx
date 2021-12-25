import { Button, Group, Select } from "@mantine/core";

export function MechanicForm() {
  return <Group direction="column" grow>
      <Select
        label="Rol"
        placeholder="Selecciona el mecanico"
        data={[
          { value: "react", label: "Mecanico 1" },
          { value: "ng", label: "Mecanico 2" },
        ]}
      />
      <Button color="green">Guardar</Button>
  </Group>;
}
