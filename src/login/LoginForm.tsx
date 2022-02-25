import {
  Group,
  PasswordInput,
  Button,
  LoadingOverlay,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React, { useState } from "react";
import { Login } from "./types";
import { AxiosError } from "axios";

interface LoginFormProps {
  onSubmit: (values: Login) => void;
  loading: boolean;
  error: AxiosError;
  isError: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
  const form = useForm<Login>({
    initialValues: {
      email: "mail@mail.com",
      password: "password",
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.length >= 6,
    },
    errorMessages: {
      email: "Invalid email",
      password: "Email must be 6 or more characters",
    },
  });
  const handleSubmit = (event: React.SyntheticEvent) => {
    form.validate();
    props.onSubmit(form.values);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Group direction="column" grow style={{ width: "300px" }}>
        <LoadingOverlay visible={props.loading} />
        <TextInput placeholder="Email" {...form.getInputProps("email")} />
        <PasswordInput
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        {props.isError && (
          <Text color="red">{props.error.response?.data.message}</Text>
        )}
        <Button type="submit" disabled={props.loading}>
          Login
        </Button>
      </Group>
    </form>
  );
};
