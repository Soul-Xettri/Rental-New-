import { Carousel } from "@mantine/carousel";
import { IconAdjustments, IconCoffee, IconMountain } from "@tabler/icons-react";
import {
  GiFarmTractor,
  GiGrandPiano,
  GiIndianPalace,
  GiMountainCave,
  GiCampingTent,
  GiTreehouse,
  GiIsland,
  GiFamilyHouse,
  GiWoodCabin,
  GiVillage,
  GiPisaTower,
  GiGrapes,
  GiShepherdsCrook,
  GiWatchtower,
  GiBarn,
  GiBaseDome,
  GiBowlingPin,
} from "react-icons/gi";
import { FaSkiing, FaUmbrellaBeach } from "react-icons/fa";
import {
  Button,
  Container,
  SimpleGrid,
  Switch,
  createStyles,
  em,
  rem,
} from "@mantine/core";
import {
  MdOutlineHouseboat,
  MdOutlineHouse,
  MdSportsGolf,
  MdSurfing,
  MdOutlineBedroomParent,
  MdOutlineHomeWork,
  MdOutlineTempleBuddhist,
  MdHouseSiding,
  MdTempleBuddhist,
} from "react-icons/md";
import { GoContainer } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { BsBox2, BsFire, BsSnow } from "react-icons/bs";
import { MdOutlineDinnerDining } from "react-icons/md";
import { TbUfo, TbTent, TbWindmill, TbSitemap } from "react-icons/tb";
import { CgHomeAlt } from "react-icons/cg";
import {
  PiCactus,
  PiCastleTurretBold,
  PiHouseLine,
  PiWarehouseThin,
} from "react-icons/pi";
import { LiaMountainSolid, LiaSwimmingPoolSolid } from "react-icons/lia";
import { CiMountain1 } from "react-icons/ci";
import { LuPalmtree, LuCastle, LuChefHat, LuSailboat } from "react-icons/lu";
import { TbCamper } from "react-icons/tb";
import { VscKey } from "react-icons/vsc";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

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
      backgroundColor: theme.colorScheme === "dark" ? "#1a2d3f" : "#2563eb",
      borderColor: theme.colorScheme === "dark" ? "#1a2d3f" : "#2563eb",
      color: theme.colorScheme === "dark" ? "#228be6" : theme.white,
    },
  },
}));
export default function SecondTopHeader() {
  // const [scrollProgress, setScrollProgress] = useState(0);
  // const [embla, setEmbla] = useState<Embla | null>(null);

  // const handleScroll = useCallback(() => {
  //   if (!embla) return;
  //   const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
  //   setScrollProgress(progress * 100);
  // }, [embla, setScrollProgress]);

  // useEffect(() => {
  //   if (embla) {
  //     embla.on("scroll", handleScroll);
  //     handleScroll();
  //   }
  // }, [embla]);
  let buttonSearch = " buttonSearchDark";

  if (document.body.style.backgroundColor === "white") {
    buttonSearch = "buttonSearchWhite";
  }
  const { classes } = useStyles();
  const location = useLocation();
  return (
    <Container
      size="lg"
      style={{ display: "flex", flexDirection: "row", maxWidth: "70%" }}
    >
      <div className={classes.inner} style={{ width: "100%" }}>
        <div
          className={classes.Contenttop}
          style={{ paddingTop: "0px", paddingBottom: "0" }}
        >
          <Carousel
            slideSize="100%"
            slideGap="lg"
            align="start"
            slidesToScroll={1}
            // getEmblaApi={setEmbla}
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
            style={{ paddingRight: "45px", paddingLeft: "30px" }}
            dragFree
          >
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="/buy"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <IconCoffee
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/buy" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Bed & breakfasts</span>
                  </div>
                </NavLink>

                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiFarmTractor
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Farms</span>
                  </div>
                </NavLink>

                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <IconMountain
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>National parks</span>
                  </div>
                </NavLink>

                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHouseboat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Lakefront</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <BsFire
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Trends</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineDinnerDining
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Luxe</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiIndianPalace
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Raids</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHouse
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Historical homes</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <TbUfo
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>OMG!</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <CgHomeAlt
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Earth homes</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdSportsGolf
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Golfing</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiMountainCave
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Caves</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdSurfing
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Surfing</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineBedroomParent
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Rooms</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <PiWarehouseThin
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Tiny homes</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiCampingTent
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Camping</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiIsland
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Islands</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiTreehouse
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Treehouses</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiFamilyHouse
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Mansions</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <BsSnow
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Arctic</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LiaMountainSolid
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Amazing views</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdSurfing
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Surfing</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiWoodCabin
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Cabins</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiVillage
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Countryside</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <FaUmbrellaBeach
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Beach</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHouseboat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Beachfront</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiPisaTower
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Iconic cities</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LiaSwimmingPoolSolid
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Amazing pools</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHouseboat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Lake</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <CiMountain1
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Top of the world</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LuPalmtree
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Tropical</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <TbCamper
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Campers</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHomeWork
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Design</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <VscKey
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>New</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <TbTent
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>A-frames</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <FaSkiing
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Skiing </span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LuCastle
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Castles</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineTempleBuddhist
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Hanoks</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiGrapes
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Vineyards</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <BsBox2
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Cycladic homes</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <TbWindmill
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Windmills</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LuChefHat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Chef's kitchens</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiShepherdsCrook
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>New</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiWatchtower
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Towers</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <PiCastleTurretBold
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Casas particulares</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <PiCactus
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Desert</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiBarn
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Barns</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdHouseSiding
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Minsus</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiBaseDome
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Domes</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdTempleBuddhist
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Ryokans</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiWoodCabin
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Yurts</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <LuSailboat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Boats</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiBowlingPin
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Play</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <TbSitemap
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Adapted</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
            <Carousel.Slide>
              <SimpleGrid cols={9} style={{}}>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <HiOutlineViewGridAdd
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Off-the-grid</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <FaSkiing
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Ski-in/out</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <MdOutlineHouseboat
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Houseboats</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GoContainer
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Containers</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <IoIosColorPalette
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Creative spaces</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiGrandPiano
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Grand pianos</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <PiHouseLine
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Trulli</span>
                  </div>
                </NavLink>
                <NavLink
                  to="todo"
                  style={({ isActive }) => {
                    return {
                      // backgroundColor: isActive
                      //   ? theme.fn.variant({
                      //       variant: "light",
                      //       color: theme.primaryColor,
                      //     }).background
                      //   : "",

                      borderBottom: isActive
                        ? "1px solid rgb(34, 139, 230)"
                        : "",
                      width: "fit-content",
                    };
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "max-content",
                      width: "95px",
                    }}
                  >
                    <GiWoodCabin
                      style={{
                        width: "25%",
                        height: "10%",
                        color:
                          location.pathname === "/todo" ? "black" : "dimgray",
                      }}
                    />
                    <span style={{ fontSize: "12px" }}>Dammusi</span>
                  </div>
                </NavLink>
              </SimpleGrid>
            </Carousel.Slide>
          </Carousel>
          {/* <Progress
            value={scrollProgress}
            styles={{
              bar: { transitionDuration: "0ms" },
              root: { maxWidth: "100%" },
            }}
            mt={2}
            size="xs"
            style={{marginRight:"30px",marginLeft:"30px"}}
          /> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "10px",
            paddingRight: "30px",
          }}
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
              <Switch size={rem(14)} style={{ marginLeft: "10px" }} />{" "}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
