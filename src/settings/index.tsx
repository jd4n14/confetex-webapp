import { Tabs } from "@mantine/core";
import {
  ImageIcon,
  ChatBubbleIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";

export function Settings() {
  return (
    <Tabs variant="outline" position="center">
      <Tabs.Tab label="Catalogo" icon={<ChatBubbleIcon />}>
        Catalogo
      </Tabs.Tab>
      <Tabs.Tab label="Eventos" icon={<MixerVerticalIcon />}>
        Eventos
      </Tabs.Tab>
    </Tabs>
  );
}
