import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useFullscreen, useHotkeys } from "@mantine/hooks";
import { EnterFullScreenIcon, ExitFullScreenIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const HeaderActions = () => {
  const { toggle: toggleFullScreen, fullscreen: isFullScreen } = useFullscreen();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([["mod+T", () => toggleFullScreen()]]);
  return (
    <>
      <ActionIcon onClick={toggleFullScreen}>
        {isFullScreen ? <ExitFullScreenIcon /> : <EnterFullScreenIcon />}
      </ActionIcon>
      <ActionIcon onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? <MoonIcon /> : <SunIcon /> }
      </ActionIcon>
    </>
  );
};
