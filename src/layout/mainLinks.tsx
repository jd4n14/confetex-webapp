import { Group, ThemeIcon, UnstyledButton, Text } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import {
  ActivityLogIcon,
  CircleIcon,
  CommitIcon,
  HomeIcon,
  PersonIcon,
  ReloadIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router";
import React from "react";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
}

interface ButtonProps {
  active: boolean;
}

const useStyles = createStyles((theme) => ({
  button: {
    display: "block",
    width: "100%",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export function MainLink({ icon, color, label, url }: MainLinkProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <UnstyledButton className={classes.button} onClick={() => navigate(url)}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <HomeIcon />, color: "blue", label: "Home", url: "/" },
  {
    icon: <ActivityLogIcon />,
    color: "lime",
    label: "Logs",
    url: "/logs",
  },
  {
    icon: <PersonIcon />,
    color: "yellow",
    label: "Users",
    url: "/users",
  },
  {
    icon: <ReloadIcon />,
    color: "grape",
    label: "Requests",
    url: "/requests",
  },
  { icon: <CommitIcon />, color: "pink", label: "Machines", url: "/machines" },
  {
    icon: <UpdateIcon />,
    color: "cyan",
    label: "Production Lines",
    url: "/lines",
  },
  {
    icon: <CircleIcon />,
    color: "orange",
    label: "Settings",
    url: "/settings",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
