import { Container, createStyles } from "@mantine/core";
import { HeroSection } from "./HeroSection";
import { PopularCity } from "./PopularCity";
import { FeaturedProperty } from "./FeaturedProperty";
import { RecentProperty } from "./RecentProperty";
import { WhyChooseUs } from "./WhyChooseUs";

const useStyles = createStyles((theme) => ({
  Contenttop: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,

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
}));

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <>
      <HeroSection />
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
    </>
  );
}
