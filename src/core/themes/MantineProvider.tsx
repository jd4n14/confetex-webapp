import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider as MP,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { useHotkeys, useLocalStorageValue} from "@mantine/hooks";
import React from "react";

interface MantineProviderProps {
  children: React.ReactNode;
}
const THEME_KEY = 'color-scheme';

export const MantineProvider = (props: MantineProviderProps) => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MP withGlobalStyles withNormalizeCSS theme={{ colorScheme, loader: "dots"}}>
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
