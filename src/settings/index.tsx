import { Tabs } from "@mantine/core";
import {
  ImageIcon,
  ChatBubbleIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";
import { Page } from "../core/components/Page";

export function Settings() {
  return (
    <Page title="Settings">
      <Tabs variant="outline" position="center">
        <Tabs.Tab label="Catalogo" icon={<ChatBubbleIcon />}>
          Catalog
        </Tabs.Tab>
        <Tabs.Tab label="Eventos" icon={<MixerVerticalIcon />}>
          Log
        </Tabs.Tab>
      </Tabs>
    </Page>
  );
}
