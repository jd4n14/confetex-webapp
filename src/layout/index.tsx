import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  ActionIcon,
  Group,
} from "@mantine/core";
import { Scrollbars } from "react-custom-scrollbars";
import { MainLinks } from "./mainLinks";
import { Outlet } from "react-router-dom";
import { EnterFullScreenIcon, SunIcon } from "@radix-ui/react-icons";
import { HeaderActions } from "./header";

export function Layout() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 250 }}
        >
          <Navbar.Section grow>
            <Scrollbars>
              <MainLinks />
            </Scrollbars>
          </Navbar.Section>
          <Navbar.Section>Last section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <Group style={{ height: "100%", alignItems: "center" }} position="apart">
            <Group spacing="sm">
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={"gray"}
                  mr="xl"
                />
              </MediaQuery>
              <Text weight={700}>Confetex</Text>
            </Group>
            <Group>
              <HeaderActions />
            </Group>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <div style={{ paddingRight: 16, height: "100%" }}>
        <Outlet />
      </div>
    </AppShell>
  );
}
