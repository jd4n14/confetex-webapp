import { Button, Group, MultiSelect, NativeSelect, Select } from "@mantine/core";

const data = [
  { value: 'react', label: 'Planta 1' },
  { value: 'ng', label: 'Planta 2' },
  { value: 'svelte', label: 'Planta 3' },
];

function LogForm() {
  return (<Group direction="column" grow>
    <Select
      data={data}
      label="Planta"
      placeholder="Selecciona la planta"
    />
    <Select
      data={data}
      label="Mecanico"
      placeholder="Selecciona la mecanico"
    />
    <Group position="right">
      <Button>Agregar</Button>
    </Group>
  </Group>)
}

export default LogForm