import {
  Image,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  image: {
    width: "20%",
    float: "left",
    margin: 0,
    padding: "0px 30px",
    position: "relative",
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
    textAlign: "center",
  },

  text: {
    transition: "all 0.4s ease 0s",
    position: "relative",
    // top: "70%",
    transform: "translateY(-30%)",
    textAlign: "center",
    zIndex: 1,
  },
}));
export default function Partners() {
  const { classes } = useStyles();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
          display={"flex"}
          className="line"
        >
          Our Partners
        </Title>
        <Text className={classes.description} mt={10} mb={30}>
          Brand Partners Successful Projects Trusted Many Clients Real Estate
        </Text>
      </div>
      <SimpleGrid
        cols={5}
        spacing="28px"
        verticalSpacing="50px"
        breakpoints={[
          {
            maxWidth: "70rem",
            cols: 5,
            spacing: "10px",
            verticalSpacing: "60px",
          },
          { maxWidth: "48rem", cols: 3, spacing: "50px" },
          { maxWidth: "36rem", cols: 2, spacing: "sm" },
        ]}
        style={{
          justifyItems: "center",
          paddingTop: "15px",
        }}
      >
        <Image
          src="https://wallsproperty.netlify.app/images/partner-logo6.png"
          className={classes.image}
        />
        <Image
          src="https://wallsproperty.netlify.app/images/partner-logo7.png"
          className={classes.image}
        />
        <Image
          src="https://wallsproperty.netlify.app/images/partner-logo8.png"
          className={classes.image}
        />
        <Image
          src="https://wallsproperty.netlify.app/images/partner-logo1.png"
          className={classes.image}
          style={{ padding: " 0px 45px" }}
        />
        <Image
          src="https://wallsproperty.netlify.app/images/partner-logo5.png"
          className={classes.image}
          style={{ padding: " 0px 45px" }}
        />
      </SimpleGrid>
    </>
  );
}
