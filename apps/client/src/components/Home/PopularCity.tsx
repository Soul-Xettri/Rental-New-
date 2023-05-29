import {
  Card,
  Text,
  createStyles,
  getStylesRef,
  rem,
  SimpleGrid,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(255),
    width: rem(255),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "rotate(-1deg) scale(1.1)",
    },

    [`&:hover .${getStylesRef("text")}`]: {
      transform: "translateY(-150%)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    textAlign: "center",
    // backgroundImage:
    //   "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, #1d293e 100%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  propertyCount: {
    color: theme.white,
  },
  description: {
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  text: {
    ref: getStylesRef("text"),
    transition: "all 0.4s ease 0s",
    position: "relative",
    // top: "70%",
    transform: "translateY(-30%)",
    textAlign: "center",
    zIndex: 1,
  },
}));

export function PopularCity() {
  const { classes } = useStyles();

  return (
    <>
      <Title
        order={1}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
          fontWeight: 600,
          [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: rem(34),
            lineHeight: 1.15,
          },
        })}
      >
        Popular City
      </Title>
      <Text className={classes.description} mt={10} mb={30}>
        Find Properties in These Cities
      </Text>
      <SimpleGrid cols={4} spacing="30px">
        <Card
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="0"
          component="a"
          href="#"
          target="_blank"
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(https://wallsproperty.netlify.app/images/city4.jpg)`,
              backgroundPosition: "center",
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div className={classes.text}>
              <Text size="lg" className={classes.title} weight={500}>
                Pokhara
              </Text>

              <Text size="sm" className={classes.propertyCount}>
                80 Properties
              </Text>
            </div>
          </div>
        </Card>
        <Card
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="0"
          component="a"
          href="#"
          target="_blank"
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(https://wallsproperty.netlify.app/images/city5.jpg)`,
              backgroundPosition: "center",
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div className={classes.text}>
              <Text size="lg" className={classes.title} weight={500}>
                Kathamndu
              </Text>

              <Text size="sm" className={classes.propertyCount}>
                80 Properties
              </Text>
            </div>
          </div>
        </Card>
        <Card
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="0"
          component="a"
          href="#"
          target="_blank"
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(https://wallsproperty.netlify.app/images/city6.jpg)`,
              backgroundPosition: "center",
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div className={classes.text}>
              <Text size="lg" className={classes.title} weight={500}>
                Bhirawa
              </Text>

              <Text size="sm" className={classes.propertyCount}>
                80 Properties
              </Text>
            </div>
          </div>
        </Card>
        <Card
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="0"
          component="a"
          href="#"
          target="_blank"
        >
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(https://wallsproperty.netlify.app/images/city7.jpg)`,
              backgroundPosition: "center",
            }}
          />
          <div className={classes.overlay} />

          <div className={classes.content}>
            <div className={classes.text}>
              <Text size="lg" className={classes.title} weight={500}>
                Butwal
              </Text>

              <Text size="sm" className={classes.propertyCount}>
                80 Properties
              </Text>
            </div>
          </div>
        </Card>
      </SimpleGrid>
    </>
  );
}
