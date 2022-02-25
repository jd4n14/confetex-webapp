import { Card, Center, Title, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useMutation } from "react-query";
import { login } from "./api";
import { AxiosError } from "axios";
import { Login as LoginModel } from "./types";

function Login() {
  const navigate = useNavigate();
  const loginMutation = useMutation(login);

  const handleLogin = (values: LoginModel) => {
    loginMutation.mutate(values);
    navigate("/home");
  };
  return (
    <Center sx={(theme) => ({ height: "100vh" })}>
      <Card shadow="sm">
        <Title order={3} sx={(theme) => ({ marginBottom: theme.spacing.md })}>
          Login
        </Title>
        <LoginForm
          onSubmit={handleLogin}
          loading={loginMutation.isLoading}
          isError={loginMutation.isError}
          error={loginMutation.error as AxiosError}
        />
      </Card>
    </Center>
  );
}

export { Login };
