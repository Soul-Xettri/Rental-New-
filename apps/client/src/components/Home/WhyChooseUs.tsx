// import { createStyles, Text, Title, Button, Image, rem } from "@mantine/core";

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     display: "flex",
//     alignItems: "center",
//     padding: `calc(${theme.spacing.xl} * 2)`,
//     backgroundColor:
//       theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
//     border: `${rem(1)} solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
//     }`,

//     [theme.fn.smallerThan("sm")]: {
//       flexDirection: "column-reverse",
//       padding: theme.spacing.xl,
//     },
//     // backgroundImage: `url("https://wallsproperty.netlify.app/images/bgoverlay3.jpg")`,
//     backgroundPosition: "center center",
//   },

//   image: {
//     maxWidth: "40%",

//     [theme.fn.smallerThan("sm")]: {
//       maxWidth: "100%",
//     },
//   },

//   body: {
//     paddingRight: `calc(${theme.spacing.xl} * 4)`,

//     [theme.fn.smallerThan("sm")]: {
//       paddingRight: 0,
//       marginTop: theme.spacing.xl,
//     },
//   },

//   title: {
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     lineHeight: 1,
//     marginBottom: theme.spacing.md,
//   },

//   controls: {
//     display: "flex",
//     marginTop: theme.spacing.xl,
//   },

//   inputWrapper: {
//     width: "100%",
//     flex: "1",
//   },

//   input: {
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//     borderRight: 0,
//   },

//   control: {
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//   },
// }));

// export function WhyChooseUs() {
//   let buttonSearch = " buttonSearchDark";

//   if (document.body.style.backgroundColor === "white") {
//     buttonSearch = "buttonSearchWhite";
//   }
//   const { classes } = useStyles();
//   return (
//     <div className={classes.wrapper}>
//       <div className={classes.body}>
//         <Title className={classes.title} mb={30}>
//           Why Choose Us?
//         </Title>

//         <Text fz="sm" c="dimmed" mb={20} style={{ fontSize: "16px" }}>
//           The first step in selling your property is to get a valuation from
//           local experts. They will inspect your home and take into account its
//           unique features, the area and market conditions before providing you
//           with the most accurate valuation.
//         </Text>

//         <Text fz="sm" c="dimmed" style={{ fontSize: "16px" }}>
//           Discover why [Your Rental Website Name] is the top choice for all your
//           rental and buying needs. With extensive industry experience, a vast
//           network of connections, and a commitment to quality assurance, we
//           provide personalized service and transparent communication. Our
//           user-friendly platform, comprehensive property information, and
//           dedicated support team ensure a seamless and satisfying experience.
//           Build lasting relationships with us as we help you find your dream
//           property, whether you're renting or buying. Choose [Your Rental
//           Website Name] and let us exceed your expectations.
//         </Text>

//         <div className={classes.controls}>
//           <Button
//             type="submit"
//             style={{ borderRadius: 0 }}
//             className={` py-2 px-10   ${buttonSearch}`}
//             h={40}
//           >
//             Subscribe
//           </Button>
//         </div>
//       </div>
//       <Image
//         src={"https://wallsproperty.netlify.app/images/bgoverlay3.jpg"}
//         className={classes.image}
//       />
//     </div>
//   );
// }

import {
  createStyles,
  Container,
  Title,
  Text,
  rem,
  Button,
  em,
  Image,
  SimpleGrid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage:
    //   theme.colorScheme === "dark"
    //     ? "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)"
    //     : "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, #1d293e 100%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
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
    width: "100%",
    objectFit: "cover",
    transition: "transform 500ms ease",
    "&:hover": {
      opacity: 0.6,
      transform: "scale(1.1,1.1)",
    },
  },

  content: {
    // paddingTop: `calc(${theme.spacing.xl} * 2)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    // marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : "#002247",
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
    color: theme.colorScheme === "dark" ? theme.white : "#495057",

    opacity: 0.75,
    maxWidth: rem(700),

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
  search: {
    backgroundPosition: "center",
  },
  // imageTop: {
  //   position: "relative",
  //   width: "100%",
  //   paddingRight: "15px",
  //   paddingLeft: "15px",
  //   [`@media  (max-width: ${em(992)})`]: {
  //     height: rem(401.6),
  //     width: rem(300),
  //   },
  // },
  aboutImage: {
    position: "relative",

    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      minHeight: "initial",
    },
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  aboutImageTop: {
    position: "absolute",
    width: "50%",
    left: 0,
    bottom: "10%",
    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      position: "relative",
      width: "100%",
      bottom: "0",
      marginBottom: "15px",
      transform: "translateY(0)",
      border: 0,
    },
    zIndex: 1,
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      width: "75%",
      bottom: "0%",
      left: "auto",
    },
  },
  aboutImageBottom: {
    position: "relative",
    width: "80%",
    right: "-20%",
    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      position: "relative",
      width: "100%",
      right: "0%",
    },
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      width: "75%",
      right: "0%",
    },
  },
  hoverCard: {
    background: "#ffc31d",
    overflow: "hidden",
    position: "relative",
    display: "inline-block",
  },
}));

export function WhyChooseUs() {
  let button = " buttonDark";

  if (document.body.style.backgroundColor === "white") {
    button = "buttonWhite";
  }
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
      // style={{
      //   backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)`,
      // }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <SimpleGrid
              cols={2}
              spacing="0"
              verticalSpacing="50px"
              breakpoints={[
                {
                  maxWidth: "70rem",
                  cols: 2,
                  spacing: "60px",
                  verticalSpacing: "60px",
                },
                { maxWidth: "48rem", cols: 1, spacing: "50px" },
                { maxWidth: "36rem", cols: 1, spacing: "sm" },
              ]}
              style={{
                justifyItems: "center",
              }}
            >
              <div>
                <Title
                  order={1}
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark" ? theme.white : "#002247",

                    fontWeight: 600,
                    [theme.fn.smallerThan("md")]: {
                      maxWidth: "100%",
                      fontSize: rem(34),
                      lineHeight: 1.15,
                    },
                  })}
                >
                  Why Choose Us?
                </Title>

                <Text className={classes.description} mt={30}>
                  The first step in selling your property is to get a valuation
                  from local experts. They will inspect your home and take into
                  account its unique features, the area and market conditions
                  before providing you with the most accurate valuation.
                </Text>

                <Text className={classes.description} mt={20}>
                  Discover why Rental is the top choice for all your rental and
                  buying needs. With extensive industry experience, a vast
                  network of connections, and a commitment to quality assurance,
                  we provide personalized service and transparent communication.
                </Text>
                <Button
                  type="submit"
                  style={{ borderRadius: 0 }}
                  className={`w-sm py-2 px-4   ${button}`}
                  size="md"
                  mt={40}
                >
                  Read More &nbsp; {">"}
                </Button>
              </div>

              <div className={classes.aboutImage}>
                <div className={classes.aboutImageTop}>
                  <div className={classes.hoverCard}>
                    <Image
                      src="https://wallsproperty.netlify.app/images/gallery.jpg"
                      className={classes.image}
                    />
                  </div>
                </div>
                <div className={classes.aboutImageBottom}>
                  <div className={classes.hoverCard}>
                    <Image
                      src="https://wallsproperty.netlify.app/images/gallery3.jpg "
                      className={classes.image}
                    />
                  </div>
                </div>
              </div>
            </SimpleGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}
