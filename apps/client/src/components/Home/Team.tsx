import {
  Card,
  Text,
  createStyles,
  getStylesRef,
  rem,
  SimpleGrid,
  Title,
  em,
  Paper,
  Container,
  Button,
} from "@mantine/core";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem("300"),
    width: rem("300"),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    // [`&:hover .${getStylesRef("image")}`]: {
    //   transform: "rotate(-1deg) scale(1.1)",
    // },

    // [`&:hover .${getStylesRef("text")}`]: {
    //   transform: "translateY(-150%)",
    // },

    [`@media (max-width: ${em(1119)}) and (min-width: ${em(920)})`]: {
      height: rem(350),
      width: rem(350),
    },

    [`@media (max-width: ${em(919)}) and (min-width: ${em(670)})`]: {
      height: rem(300),
      width: rem(300),
    },

    [`@media (max-width: ${em(669)}) and (min-width: ${em(576)})`]: {
      height: rem(250),
      width: rem(250),
    },

    [`@media (max-width: ${em(575)}) `]: {
      height: rem(300),
      width: rem(300),
    },
    // ref: getStylesRef("card"),
  },

  card2: {
    ref: getStylesRef("card2"),
    position: "absolute",
    height: rem("401"),
    width: rem("300"),
    transition: "all 0.3s",
    backgroundColor:
      theme.colorScheme === "dark"
        ? "rgb(0 0 0 / 94%)"
        : "rgba(255,255,255,0.9)",
    border:
      theme.colorScheme === "dark"
        ? "20px solid  rgb(223 236 239 / 5%)"
        : "20px solid rgba(0,0,0,0.1)",
    top: "0",
    bottom: "0",
    margin: "0",
    right: "0",
    left: "0",
    // [`&:hover .${getStylesRef("image")}`]: {
    //   transform: "rotate(-1deg) scale(1.1)",
    // },

    // [`&:hover .${getStylesRef("text")}`]: {
    //   transform: "translateY(-150%)",
    // },
    overflow: "hidden",
    opacity: 0,
    zIndex: 1,
    [`@media (max-width: ${em(1119)}) and (min-width: ${em(920)})`]: {
      height: rem(451.6),
      width: rem(350),
    },

    [`@media (max-width: ${em(919)}) and (min-width: ${em(670)})`]: {
      height: rem(401.6),
      width: rem(300),
    },

    [`@media (max-width: ${em(669)}) and (min-width: ${em(576)})`]: {
      height: rem(351.6),
      width: rem(250),
    },

    [`@media (max-width: ${em(575)}) `]: {
      height: rem(401.6),
      width: rem(300),
    },
  },

  iconlink: {
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : "#002247",
    margin: "0 15px",
    fontSize: "16px",
    "&:hover": {
      color: "#228be6",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  //   overlay: {
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     height: "100%",
  //     textAlign: "center",
  //     // backgroundImage:
  //     //   "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  //     backgroundImage:
  //       "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, #1d293e 100%)",
  //   },

  content: {
    ref: getStylesRef("content"),

    height: "100%",
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    justifyContent: "flex-end",
    zIndex: 1,
    padding: "25px",
    border: "1px  solid #e9ecef",
    width: "100%",
    overflow: "hidden",
    transition: "all 0.2s 0.1s",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : "#002247",
    marginBottom: "0",
    display: "block",
    textTransform: "capitalize",
    fontWeight: 700,
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  description: {
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  cardTitle: {
    color: theme.colorScheme === "dark" ? theme.white : "#002247",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: 1.2,
    marginBottom: "0.5rem",
    marginTop: 0,
  },

  cardDesc: {
    color: theme.colorScheme === "dark" ? theme.white : "#495057",
    fontSize: "14px",
    lineHeight: 1.5,
    marginTop: "0",
  },

  hovercard: {
    [`&:hover .${"desk"}`]: {
      transform: "translate(0px, 55px)",
    },
    [`&:hover .${"socials"}`]: {
      opacity: 1,
      transform: "translate(-50%, 500%)",
    },
    [`&:hover .${getStylesRef("card2")}`]: {
      zIndex: 1,
      opacity: 1,
    },
    [`&:hover .${"mainCardWhole"}`]: {
      opacity: 0.9,
    },
    [`@media (max-width: ${em(374)}) `]: {
      marginTop: "25px",
    },
  },
  simple: {
    [`@media (max-width: ${em(374)}) `]: {
      display: "block",
    },
  },
}));

export function Team() {
  const { classes } = useStyles();
  let button = " buttonDark";

  if (document.body.style.backgroundColor === "white") {
    button = "buttonWhite";
  }
  return (
    <>
      <Title
        order={1}
        sx={(theme) => ({
          color: theme.colorScheme === "dark" ? theme.white : "#002247",
          fontWeight: 600,
          [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            fontSize: rem(34),
            lineHeight: 1.15,
          },
        })}
      >
        Meet Our Team
      </Title>
      <Text className={classes.description} mt={10} mb={30}>
        See Our Top Of The Month Teams
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SimpleGrid
          cols={3}
          spacing="28px"
          verticalSpacing="50px"
          breakpoints={[
            {
              maxWidth: "70rem",
              cols: 2,
              spacing: "60px",
              verticalSpacing: "60px",
            },
            { maxWidth: "48rem", cols: 2, spacing: "50px" },
            {
              maxWidth: "36rem",
              cols: 1,
              spacing: "sm",
            },
          ]}
          style={{
            justifyItems: "center",
          }}
          className={classes.simple}
        >
          <Container className={classes.hovercard}>
            <Paper>
              <div style={{ position: "relative" }}>
                <div className={classes.card2}>
                  <div className="desk">
                    <h5 className={classes.cardTitle}>Hi There !</h5>
                    <p className={classes.cardDesc}>
                      I am Senior Agent Property
                    </p>
                    <Button
                      type="submit"
                      style={{ borderRadius: 0 }}
                      className={`w-sm py-2 px-4   ${button}`}
                      size="md"
                      mt={10}
                    >
                      Agent Profile
                    </Button>
                  </div>
                  <div className="socials">
                    {/* <IconBrandFacebook style={{ color: "black " }} /> */}
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mainCardWhole">
                <Card
                  p="lg"
                  shadow="lg"
                  className={classes.card}
                  radius="0"
                  component="a"
                  target="_blank"
                >
                  <div
                    className={classes.image}
                    style={{
                      backgroundImage: `url(https://wallsproperty.netlify.app/images/team12.jpg)`,
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className={classes.overlay} /> */}
                  </div>
                </Card>
                <div className={classes.content}>
                  <Text size="lg" className={classes.title} weight={500}>
                    Felica Angel
                  </Text>

                  <Text size="sm" style={{ letterSpacing: "1px" }}>
                    Agent Real Estate
                  </Text>
                </div>
              </div>
            </Paper>
          </Container>
          <Container className={classes.hovercard}>
            <Paper>
              <div style={{ position: "relative" }}>
                <div className={classes.card2}>
                  <div className="desk">
                    <h5 className={classes.cardTitle}>Hi There !</h5>
                    <p className={classes.cardDesc}>
                      I am Senior Agent Property
                    </p>
                    <Button
                      type="submit"
                      style={{ borderRadius: 0 }}
                      className={`w-sm py-2 px-4   ${button}`}
                      size="md"
                      mt={10}
                    >
                      Agent Profile
                    </Button>
                  </div>
                  <div className="socials">
                    {/* <IconBrandFacebook style={{ color: "black " }} /> */}
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mainCardWhole">
                <Card
                  p="lg"
                  shadow="lg"
                  className={classes.card}
                  radius="0"
                  component="a"
                  target="_blank"
                >
                  <div
                    className={classes.image}
                    style={{
                      backgroundImage: `url(https://wallsproperty.netlify.app/images/team11.jpg)`,
                      backgroundPosition: "center",
                    }}
                  />
                  {/* <div className={classes.overlay} /> */}
                </Card>
                <div className={classes.content}>
                  <Text size="lg" className={classes.title} weight={500}>
                    Martin Smith
                  </Text>

                  <Text size="sm" style={{ letterSpacing: "1px" }}>
                    Agent Real Estate
                  </Text>
                </div>
              </div>
            </Paper>
          </Container>
          <Container className={classes.hovercard}>
            <Paper>
              <div style={{ position: "relative" }}>
                <div className={classes.card2}>
                  <div className="desk">
                    <h5 className={classes.cardTitle}>Hi There !</h5>
                    <p className={classes.cardDesc}>
                      I am Senior Agent Property
                    </p>
                    <Button
                      type="submit"
                      style={{ borderRadius: 0 }}
                      className={`w-sm py-2 px-4   ${button}`}
                      size="md"
                      mt={10}
                    >
                      Agent Profile
                    </Button>
                  </div>
                  <div className="socials">
                    {/* <IconBrandFacebook style={{ color: "black " }} /> */}
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Link>
                    <Link to={"#"} className={classes.iconlink}>
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mainCardWhole">
                <Card
                  p="lg"
                  shadow="lg"
                  className={classes.card}
                  radius="0"
                  component="a"
                  target="_blank"
                >
                  <div
                    className={classes.image}
                    style={{
                      backgroundImage: `url(https://wallsproperty.netlify.app/images/team13.jpg)`,
                      backgroundPosition: "center",
                    }}
                  />
                  {/* <div className={classes.overlay} /> */}
                </Card>
                <div className={classes.content}>
                  <Text size="lg" className={classes.title} weight={500}>
                    Sara libson
                  </Text>

                  <Text size="sm" style={{ letterSpacing: "1px" }}>
                    Agent Real Estate
                  </Text>
                </div>
              </div>
            </Paper>
          </Container>
        </SimpleGrid>
      </div>
    </>
  );
}
