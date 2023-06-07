import { Container, createStyles } from "@mantine/core";
import { HeroSection } from "./HeroSection";
import { PopularCity } from "./PopularCity";
import { FeaturedProperty } from "./FeaturedProperty";
import { RecentProperty } from "./RecentProperty";
import { WhyChooseUs } from "./WhyChooseUs";
import { Team } from "./Team";
import { TopHeader } from "../Navbar/TopHeader";
import { FetchQuery } from "../../utils/ApiCall";
import { HERO } from "../../utils/ApiRoutes";
import { useQuery } from "@tanstack/react-query";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import HomeVedio from "./HomeVedio";
import { News } from "./News";

const useStyles = createStyles((theme) => ({
  Contenttop: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    width: "-webkit-fill-available",
    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  headerbg: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage: " url(https://wallsproperty.netlify.app/images/bg7.jpg)",
    backgroundAttachment: "fixed",
    WebkitBackgroundSize: "cover",
    position: "relative",
    backgroundColor: "#d1e6f9",
    height: "110vh",
    minHeight: "25rem",
    width: "100%",
    padding: "0",
    margin: "0",
    zIndex: 2,
  },
  overlay: {
    backgroundColor: "rgba(27,33,39,0.5)",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    right: 0,
  },
  partners: {
    backgroundColor: theme.colorScheme === "dark" ? "transparent" : "#f9f9f8",
  },
}));
const heroSecton = async () => {
  return await FetchQuery(HERO);
};

export default function HomePage() {
  const { data } = useQuery(["members"], heroSecton);

  const { classes } = useStyles();
  return (
    <>
      <header
        className={classes.headerbg}
        style={{ backgroundImage: `url(${data?.data.image})` }}
      >
        <div className={classes.overlay} />

        <TopHeader
          user={{
            name: "Soul-Xettri",
            image:
              "https://letsenhance.io/static/22670c45bd29d05692c4c0c1db3c62e7/f90fb/AiArtAfter.jpg",
          }}
        />
        <HeroSection />
      </header>
      <Container size="lg" style={{ paddingTop: "42px" }}>
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <PopularCity />
          </div>
        </div>
      </Container>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <FeaturedProperty />
          </div>
        </div>
      </Container>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <RecentProperty />
          </div>
        </div>
      </Container>
      <div className={classes.Contenttop}>
        <WhyChooseUs />
      </div>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <Team />{" "}
          </div>
        </div>
      </Container>
      <div className={classes.inner}>
        <div className={classes.Contenttop}>
          <HomeVedio />{" "}
        </div>
      </div>
      <div className={classes.partners}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.Contenttop}>
              <Partners />{" "}
            </div>
          </div>
        </Container>
      </div>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <Testimonial />{" "}
          </div>
        </div>
      </Container>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.Contenttop}>
            <News />{" "}
          </div>
        </div>
      </Container>
    </>
  );
}
