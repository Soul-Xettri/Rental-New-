import { Carousel } from "@mantine/carousel";
import { IconAdjustments, IconCoffee, IconMountain } from "@tabler/icons-react";
import { GiFarmTractor, GiGrandPiano, GiIndianPalace } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import {
  Button,
  Container,
  SimpleGrid,
  Switch,
  createStyles,
  em,
  rem,
} from "@mantine/core";
import { MdOutlineHouseboat, MdOutlineHouse } from "react-icons/md";
import { GoContainer } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { MdOutlineDinnerDining } from "react-icons/md";
import { TbUfo } from "react-icons/tb";

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
    // height: "90vh",
    minHeight: "25rem",
    width: "100%",
    padding: "0",
    margin: "0",
    zIndex: 2,

    [`@media (max-width: ${em(579)}) and (min-width:${em(384)})`]: {
      height: "120vh",
    },
    [`@media (max-width: ${em(383)}) `]: {
      height: "160vh",
    },
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
  calltoaction: {
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(90deg, #0d0330 0%, #061344 61%, #022236 100%)"
        : "linear-gradient(90deg, #443088 0%, #3454d1 61%, #009fff 100%)",
    marginTop: `calc(${theme.spacing.xl} * 2)`,
  },
}));
export default function SecondTopHeader() {
  let buttonSearch = " buttonSearchDark";

  if (document.body.style.backgroundColor === "white") {
    buttonSearch = "buttonSearchWhite";
  }
  const { classes } = useStyles();
  return (
    <Container
      size="lg"
      style={{ display: "flex", flexDirection: "row", maxWidth: "90%" }}
    >
      <div className={classes.inner} style={{ width: "100%" }}>
        <div className={classes.Contenttop} style={{ paddingTop: "0px" }}>
          <Carousel
            slideSize="100%"
            slideGap="lg"
            align="start"
            slidesToScroll={1}
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
            style={{ paddingRight: "20px", paddingLeft: "60px" }}
          >
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{
                    height: "max-content",                   
                  }}>
                <div
                  style={{
                    height: "max-content",
                    width: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconCoffee style={{ width: "30%", height: "10%" }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <IconMountain style={{ width: "30%", height: "10%" }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <GiFarmTractor style={{ width: "30%", height: "10%" }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <FaSkiing style={{ width: "30%", height: "10%" }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <BsFire style={{ width: "30%", height: "10%" }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <MdOutlineDinnerDining
                    style={{  width: "30%", height: "10%"  }}
                  />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <GiIndianPalace style={{  width: "30%", height: "10%"  }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <MdOutlineHouse style={{  width: "30%", height: "10%"  }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
                <div>
                  <TbUfo style={{  width: "30%", height: "10%"  }} />
                  <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                </div>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            <Carousel.Slide>4</Carousel.Slide>
            <Carousel.Slide>5</Carousel.Slide>
            <Carousel.Slide>6</Carousel.Slide>
            <Carousel.Slide>7</Carousel.Slide>
            <Carousel.Slide>8</Carousel.Slide>
            <Carousel.Slide>9</Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9}>
                <div>
                  <MdOutlineHouseboat />
                </div>
                <div>
                  <GoContainer />
                </div>
                <div>
                  <IoIosColorPalette />
                </div>
                <div>
                  <GiGrandPiano />
                </div>
              </SimpleGrid>
            </Carousel.Slide>
          </Carousel>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", paddingLeft: "10px" }}
        >
          <div style={{ marginRight: "10px" }}>
            <Button
              type="submit"
              style={{ borderRadius: 0 }}
              className={`w-full py-2 px-4   ${buttonSearch}`}
            >
              <IconAdjustments size={rem(14)} style={{ marginRight: "3px" }} />{" "}
              Filter
            </Button>
          </div>

          <div>
            <Button
              type="submit"
              style={{ borderRadius: 0 }}
              className={`w-full py-2 px-4   ${buttonSearch}`}
            >
              Display total before taxes
              <Switch size={rem(14)} style={{ marginLeft: "3px" }} />{" "}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
