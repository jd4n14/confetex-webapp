import { Button, Group, PasswordInput, Select, TextInput } from "@mantine/core";
import { Role, User } from "../types";
import { useForm } from "@mantine/hooks";

interface UserFormProps {
  onSubmit: (user: Partial<User>) => void;
  values?: Omit<User, "id"> | null;
}

export const UserForm = (props: UserFormProps) => {
  const form = useForm<Partial<User>>({
    initialValues: props.values || {
      email: "",
      name: "",
      password: "",
      role: Role.MECHANIC,
    },
  });
  return (
    <form onSubmit={form.onSubmit(props.onSubmit)}>
      <Group direction="column" grow>
        <TextInput
          placeholder="Name"
          label="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          placeholder="Email"
          label="Email"
          type="email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Select
          label="Rol"
          placeholder="Select role"
          data={[
            { value: "MECHANIC", label: "Mechanic" },
            { value: "ng", label: "Supervisor" },
          ]}
          {...form.getInputProps("role")}
        />
        <Select
          label="Production Line"
          placeholder="Production line"
          data={[
            { value: "MECHANIC", label: "Mechanic" },
            { value: "ng", label: "Supervisor" },
          ]}
          {...form.getInputProps("role")}
        />
        <Group position="right">
          <Button type="submit">{props.values ? "Update" : "New"} user</Button>
        </Group>
      </Group>
    </form>
  );
};
