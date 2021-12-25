import { Group, Input, PasswordInput, Button } from "@mantine/core";

interface LoginFormProps {
  onSubmit: () => void;
}

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Group direction="column" grow>
      <Input placeholder="Correo electronico" />
      <PasswordInput placeholder="Contrasenia" />
      <Button onClick={props.onSubmit}>Iniciar</Button>
    </Group>
  );
};
