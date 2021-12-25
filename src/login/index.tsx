import { Card, Center, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";

function Login() {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Center sx={(theme) => ({ height: "100vh", background: theme.colors.white })}>
      <Card shadow="sm" >
        <LoginForm onSubmit={() => {}} />
      </Card>
    </Center>
  );
}

export { Login };
