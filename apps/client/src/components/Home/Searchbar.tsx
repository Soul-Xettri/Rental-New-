import { Box, Tabs, createStyles, rem } from "@mantine/core";
import BuySearchbar from "./BuySearchbar";
import RentSearchbar from "./RentSearchbar";

const useStyles = createStyles((theme) => ({
  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    color: theme.white,
    backgroundColor: "transparent",
    // borderColor: theme.fn.variant({
    //   variant: "filled",
    //   color: theme.primaryColor,
    // }).background,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "transparent",
      borderBottom: 0,
    },

    "&[data-active]": {
      backgroundColor: theme.colorScheme === "dark" ? "#1a2d3f" : "#e7f5ff",
      borderColor: theme.colorScheme === "dark" ? "#1a2d3f" : "#e7f5ff",
      color: "#228be6",
    },
  },
}));

export function Searchbar() {
  const { classes } = useStyles();

  return (
    <>
      <Box
        mt="60px"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? "rgba(0,16,34,0.5)"
              : "rgba(0,16,34,0.5)",
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: 0,
          //   cursor: "pointer",

          //   "&:hover": {
          //     backgroundColor:
          //       theme.colorScheme === "dark"
          //         ? theme.colors.dark[5]
          //         : theme.colors.gray[1],
          //   },
        })}
        // style={{ opacity: 0.5 }}
      >
        <Tabs defaultValue="first" className={classes.tabs}>
          <Tabs.List className={classes.tabsList}>
            <Tabs.Tab value="first" className={classes.tab}>
              Buy
            </Tabs.Tab>
            <Tabs.Tab value="second" className={classes.tab}>
              Rent
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first" pt="xs">
            <BuySearchbar />
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            <RentSearchbar />
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  );
}
