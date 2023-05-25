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
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import { IconHelp, IconHierarchy } from "@tabler/icons-react";
import {
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

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

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
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

export function TopHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

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

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <MantineLogo size={30} />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavLink
              to="/home"
              className={classes.link}
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
              className={classes.link}
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
              className={classes.link}
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
              className={classes.link}
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
              className={classes.link}
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
              className={classes.link}
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
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <NavLink
                  to="#"
                  className={classes.link}
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
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">
              <a href="/auth">Log in</a>
            </Button>
            <Button className=" bg-blue-600 hover:bg-blue-700">
              {" "}
              <a href="/auth">Sign up</a>
            </Button>
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

          <NavLink
            to=""
            className={classes.link}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink to="" className={classes.link}>
            Buy
          </NavLink>
          <NavLink to="" className={classes.link}>
            Rent
          </NavLink>
          <NavLink to="" className={classes.link}>
            Sale
          </NavLink>
          <NavLink to="" className={classes.link}>
            Home Loans
          </NavLink>
          <NavLink to="" className={classes.link}>
            Agent Finder
          </NavLink>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
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
              <NavLink to="/auth">Log in</NavLink>
            </Button>
            <Button className=" bg-blue-600 hover:bg-blue-700">
              {" "}
              <NavLink to="/auth">Sign up</NavLink>
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
