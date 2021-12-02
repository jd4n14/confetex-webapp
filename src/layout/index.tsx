import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { Scrollbars } from "react-custom-scrollbars";
import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import { MainLinks } from "./mainLinks";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          width={{ sm: 250 }}
        >
          {/* Grow section will take all available space that is not taken by first and last sections */}
          <Navbar.Section grow>
            <Scrollbars>
              <MainLinks />
            </Scrollbars>
          </Navbar.Section>

          {/* Last section with normal height (depends on section content) */}
          <Navbar.Section>Last section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* You can handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
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
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <div style={{ paddingRight: 16, height: "100%" }}>{props.children}</div>
    </AppShell>
  );
}
