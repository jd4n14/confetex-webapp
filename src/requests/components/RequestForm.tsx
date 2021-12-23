import { Button, Group, MultiSelect, Select, Slider, TextInput } from "@mantine/core";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];
const MARKS = [
  { value: 0, label: "bajo" },
  { value: 25, label: "normal" },
  { value: 50, label: "medio" },
  { value: 75, label: "alto" },
  { value: 100, label: "urgente" },
];

function RequestForm() {
  return (
    <Group direction="column" grow>
      <Slider
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        defaultValue={50}
        step={25}
        radius={0}
        marks={MARKS}
        styles={{ markLabel: { display: "none" } }}
      />
      <Select
        label="Problema"
        placeholder="Selecciona el problema"
        data={[
          { value: "react", label: "Salta la puntada" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <TextInput placeholder="Operacion" label="Operacion" />
      <TextInput placeholder="Modulo" label="Modulo" />
      <Select
        label="Maquina"
        placeholder="Escoje una"
        searchable
        nothingFound="Maquina no encontrada"
        data={data}
      />
      <Group position="right">
          <Button>Guardar</Button>
      </Group>
    </Group>
  );
}

export { RequestForm };
