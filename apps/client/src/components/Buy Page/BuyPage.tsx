import { Container, createStyles, em } from "@mantine/core";
import { TopHeader } from "../../components/Navbar/TopHeader";
import PropertyGrid from "./PropertyGrid";
import SecondTopHeader from "../Navbar/SecondTopHeader";
import { BothHeaders } from "../Navbar/BothHeaders";
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
export default function BuyPage() {
  const { classes } = useStyles();
  return (
    <>
      <BothHeaders
        user={{
          name: "Soul-Xettri",
          image:
            "https://letsenhance.io/static/22670c45bd29d05692c4c0c1db3c62e7/f90fb/AiArtAfter.jpg",
        }}
      />
      {/* <div style={{ borderBottom: "calc(.0625rem * 1) solid #dee2e6" }}>
        <TopHeader
          user={{
            name: "Soul-Xettri",
            image:
              "https://letsenhance.io/static/22670c45bd29d05692c4c0c1db3c62e7/f90fb/AiArtAfter.jpg",
          }}
        />
      </div>
      <div style={{ paddingTop: "30px", paddingBottom: "5px" }}>
        <SecondTopHeader />
      </div> */}
      <Container size="95%" pt={"60px"}>
        <div className={classes.inner}>
          <div className={classes.Contenttop} style={{ paddingTop: "25px" }}>
            <PropertyGrid />
          </div>
        </div>
      </Container>
    </>
  );
}
