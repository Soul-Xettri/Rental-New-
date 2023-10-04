import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Menu,
  Avatar,
  ActionIcon,
  useMantineColorScheme,
  Paper,
  keyframes,
  em,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import {
  IconHeart,
  IconHelp,
  IconHierarchy,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import {
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const smoothScroll = keyframes({
  "0%": { transform: "translateY(-40px)" },
  "100%": { transform: "translateY(0px)" },
});

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: 0,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    ...theme.fn.hover({
      backgroundColor: "transparent",
    }),
  },
  linkFixed: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: 0,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[3],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: 0,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  hiddenTab: {
    [`@media (max-width: ${em(876)})`]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  user: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    ...theme.fn.hover({
      backgroundColor: "transparent",
    }),

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  userFixed: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[3],
    }),

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  navbar: {
    position: "relative",
    maxHeight: "5rem",
    height: "5rem",
    background: "transparent",
    borderBottom: 0,
    zIndex: 4,
  },
  navbarFixed: {
    position: "fixed",
    top: "0",
    maxHeight: "5rem",
    height: "5rem",
    zIndex: 4,
    backgroundColor: theme.colorScheme === "dark" ? "#1A1B1E" : "#fff",
    animation: `${smoothScroll} 1s forwards`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
  },

  toggle: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toggleFixed: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[3],
    },
  },
}));

const mockdata = [
  {
    icon: IconBuildingCommunity,
    title: "Manage Rentals",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Advertise",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconHierarchy,
    title: "Agent Hub",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconHelp,
    title: "Help",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

interface HeaderTabsProps {
  user: { name: string; image: string };
}
export function TopHeader({ user }: HeaderTabsProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box>
      <Header
        height={60}
        px="md"
        className={navbar ? classes.navbarFixed : classes.navbar}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <MantineLogo size={30} />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavLink
              to="/"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/buy"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Buy
            </NavLink>
            <NavLink
              to="/rent"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Rent
            </NavLink>
            <NavLink
              to="sale"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Sale
            </NavLink>
            <NavLink
              to="home-loans"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Home Loans
            </NavLink>
            <NavLink
              to="agent-finder"
              className={navbar ? classes.linkFixed : classes.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).background
                    : "",

                  color: isActive
                    ? theme.fn.variant({
                        variant: "light",
                        color: theme.primaryColor,
                      }).color
                    : "",
                };
              }}
            >
              Agent Finder
            </NavLink>
            <HoverCard
              width={600}
              position="bottom"
              radius="0"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <NavLink
                  to="#"
                  className={navbar ? classes.linkFixed : classes.link}
                  // style={({ isActive }) => {
                  //   return {
                  //     backgroundColor: isActive
                  //       ? theme.fn.variant({
                  //           variant: "light",
                  //           color: theme.primaryColor,
                  //         }).background
                  //       : "",

                  //     color: isActive
                  //       ? theme.fn.variant({
                  //           variant: "light",
                  //           color: theme.primaryColor,
                  //         }).color
                  //       : "",
                  //   };
                  // }}
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Paper p="md" radius="0">
                  <Group position="apart" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                  />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" color="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">
                        <Anchor href="/auth">Get started</Anchor>
                      </Button>
                    </Group>
                  </div>
                </Paper>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenTab} style={{ gap: "0" }}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
              className={navbar ? classes.toggleFixed : classes.toggle}
            >
              {colorScheme === "dark" ? (
                <IconSun size="1.2rem" />
              ) : (
                <IconMoonStars size="1.2rem" />
              )}
            </ActionIcon>

            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(navbar ? classes.userFixed : classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })}
                >
                  <Group spacing={7}>
                    <Avatar
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={20}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user.name}
                    </Text>
                    <IconChevronDown size={rem(12)} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={
                    <IconHeart
                      size="0.9rem"
                      color={theme.colors.red[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Liked Propeties
                </Menu.Item>
                <Menu.Item
                  icon={
                    <IconStar
                      size="0.9rem"
                      color={theme.colors.yellow[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Saved Propeties
                </Menu.Item>
                <Menu.Item
                  icon={
                    <IconMessage
                      size="0.9rem"
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Your comments
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item
                  icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
                >
                  Change account
                </Menu.Item>
                <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                  Logout
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}
                >
                  Pause subscription
                </Menu.Item>
                <Menu.Item
                  color="red"
                  icon={<IconTrash size="0.9rem" stroke={1.5} />}
                >
                  Delete account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            {/* <Button variant="default">
              <a href="/auth">Log in</a>
            </Button>
            <Button className=" bg-blue-600 hover:bg-blue-700">
              {" "}
              <a href="/auth">Sign up</a>
            </Button> */}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
            className={navbar ? classes.toggleFixed : classes.toggle}
          >
            {colorScheme === "dark" ? (
              <IconSun size="1.2rem" />
            ) : (
              <IconMoonStars size="1.2rem" />
            )}
          </ActionIcon>
          <NavLink
            to="home"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="buy"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Buy
          </NavLink>
          <NavLink
            to="rent"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Rent
          </NavLink>
          <NavLink
            to="sale"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Sale
          </NavLink>
          <NavLink
            to="home-loans"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Home Loans
          </NavLink>
          <NavLink
            to="agent-finder"
            onClick={closeDrawer}
            className={navbar ? classes.linkFixed : classes.link}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).background
                  : "",

                color: isActive
                  ? theme.fn.variant({
                      variant: "light",
                      color: theme.primaryColor,
                    }).color
                  : "",
              };
            }}
          >
            Agent Finder
          </NavLink>
          <UnstyledButton
            className={navbar ? classes.linkFixed : classes.link}
            onClick={toggleLinks}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">
              <a href="/auth">Log in</a>
            </Button>
            <Button className=" bg-blue-600 hover:bg-blue-700">
              {" "}
              <a href="/auth">Sign up</a>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
