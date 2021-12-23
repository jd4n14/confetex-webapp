import { Button, Group, PasswordInput, Select, TextInput } from "@mantine/core";

export const UserForm = () => {
  return (
    <Group direction="column" grow>
      <TextInput placeholder="Nombre completo" label="Nombre" />
      <TextInput placeholder="Correo" label="Correo" type="email" />
      <PasswordInput placeholder="Contrasenia" label="Contrasenia" />
      <Select
        label="Rol"
        placeholder="Selecciona el rol"
        data={[
          { value: "react", label: "Mecanico" },
          { value: "ng", label: "Supervisor" },
        ]}
      />
      <Select
        label="Linea de produccion"
        placeholder="Lina de produccion"
        data={[
          { value: "react", label: "Mecanico" },
          { value: "ng", label: "Supervisor" },
        ]}
      />
      <Group position="right">
        <Button type="submit">Agregar</Button>
      </Group>
    </Group>
  );
};
