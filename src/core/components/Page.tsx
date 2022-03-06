import React from "react";
import { Group, Title } from "@mantine/core";

interface PageProps {
  title?: string | undefined;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const Page = (props: PageProps) => {
  return (
    <>
      <Group position="apart" style={{ marginBottom: 10 }}>
        <Title order={3} style={{ marginBottom: "1rem" }}>
          {props.title}
        </Title>
        {props.actions && props.actions}
      </Group>
      {props.children}
    </>
  );
};
