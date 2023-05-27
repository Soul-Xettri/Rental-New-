import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import { FetchQuery } from "../../utils/ApiCall";
import { HERO } from "../../utils/ApiRoutes";
import { useQuery } from "@tanstack/react-query";
import ReactHtmlParser from "react-html-parser";

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage:
    //   "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

const heroSecton = async () => {
  return await FetchQuery(HERO);
};

export function HeroSection() {
  const { data } = useQuery(["members"], heroSecton);
  const { classes } = useStyles();

  const heading = data?.data.heading;
  const subHeading = data?.data?.subHeading;
  const description = data?.data?.description;
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${data?.data.image})` }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                {ReactHtmlParser(heading)}
              </Text>{" "}
              {ReactHtmlParser(subHeading)}
            </Title>

            <Text className={classes.description} mt={30}>
              {ReactHtmlParser(description)}
            </Text>
            <Button
              variant="gradient"
              size="xl"
              className={
                (classes.control,
                "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ")
              }
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
