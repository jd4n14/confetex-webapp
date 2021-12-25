import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider as MP,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { ModalSettings } from "@mantine/modals/lib/context";
import { NotificationsProvider } from "@mantine/notifications";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";

interface MantineProviderProps {
  children: React.ReactNode;
}

export const MantineProvider = (props: MantineProviderProps) => {
  const theme = useMantineTheme();

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MP theme={{ colorScheme, loader: "dots" }}>
        <ModalsProvider
          modalProps={{
            centered: true,
          }}
        >
          <NotificationsProvider>{props.children}</NotificationsProvider>
        </ModalsProvider>
      </MP>
    </ColorSchemeProvider>
  );
};
