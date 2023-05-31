import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  useMantineTheme,
  rem,
  Badge,
  Group,
  Box,
  SimpleGrid,
} from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { IconBath, IconBed, IconInbox, IconMap } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0",

    [`&:hover .${"bottomText"}`]: {
      transform: "translateY(-90%)",
    },
  },

  propertyName: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: "18px",
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  carouselGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    fontSize: "12px",
    color: "white",
  },
}));

interface CardProps {
  image: string;
  propertyName: string;
  price: string;
  status: string;
  areaSquare: string;
  bedCount: number;
  bathCount: number;
  roomCount: number;
}

function Card({
  image,
  propertyName,
  price,
  status,
  areaSquare,
  bedCount,
  bathCount,
  roomCount,
}: CardProps) {
  const { classes } = useStyles();

  return (
    <Link to="#">
      <Paper
        p="xl"
        radius="0"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
        style={{
          overflow: "hidden",
          padding: "0",
        }}
      >
        <Group position="apart">
          <Badge
            style={{
              backgroundColor: "#1a2d3f",
              float: "left",
              transform: "rotate(-45deg)",
              left: "-67px",
              top: "17px",
              position: "relative",
              textAlign: "center",
              width: "200px",
              fontSize: "14px",
              margin: "0",
              padding: "14px",
              fontWeight: "normal",
              color: "#fff",
            }}
          >
            Featured
          </Badge>

          <Badge
            // variant="gradient"
            // gradient={{ from: "indigo", to: "cyan" }}
            style={{
              backgroundColor: "#002247",
              boxShadow:
                "1px 2px 1px rgba(94,93,99,0.08), 0 1px 2px rgba(61,60,66,0.12",
              fontSize: "14px",
              letterSpacing: "0.5px",
              color: "#fff",
              position: "absolute",
              top: "10px",
              right: "30px",
              padding: "10px 5px",
              fontWeight: "500",
              lineHeight: "1.2",
            }}
            radius={0}
          >
            {status}
          </Badge>
        </Group>

        <div
          className="bottomText"
          style={{
            zIndex: 1,
            position: "relative",
            background:
              "linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(14, 14, 14,0.8))",
            // boxShadow: "inset 0px 0px 47px 10px rgba(0,0,0,0.9)",
            width: "-webkit-fill-available",
            paddingBottom: "10px",
            transition: "all 0.4s ease 0s",
          }}
        >
          <div style={{ paddingLeft: "16px" }}>
            <Title order={3} className={classes.propertyName} mb={0}>
              {propertyName}
            </Title>
            <Title
              style={{ fontSize: "16px", color: "#fff", fontWeight: "500" }}
              mb={0}
            >
              {price}
            </Title>
          </div>
          <Box
            className="hiddenTab"
            mt="5px"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark" ? "#1a2d3f" : "#1d4ed8",
              textAlign: "center",
              borderRadius: 0,
              width: "100%",
              padding: theme.spacing.xs,
              // visibility: "hidden",
              position: "absolute",
            })}
          >
            <SimpleGrid cols={4} spacing={0}>
              <p className={classes.carouselGrid}>
                Baths
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <IconBath />
                  {bathCount}
                </div>{" "}
              </p>
              <p className={classes.carouselGrid}>
                Beds
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <IconBed />
                  {bedCount}
                </div>{" "}
              </p>
              <p className={classes.carouselGrid}>
                Rooms
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <IconInbox />
                  {roomCount}
                </div>
              </p>
              <p className={classes.carouselGrid}>
                Area
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                  }}
                >
                  <IconMap />
                  {areaSquare}
                </div>
              </p>
            </SimpleGrid>
          </Box>
        </div>
      </Paper>
    </Link>
  );
}

const data = [
  {
    image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
    propertyName: "Contemporary Apartment",
    price: "$1200000",
    status: "For Sale",
    bathCount: 2,
    bedCount: 2,
    roomCount: 3,
    areaSquare: "1450 sq ft",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery16.jpg",
    propertyName: "Ample Apartment At Last Floor",
    price: "$1300 / monthly",
    status: "For Rent",
    bathCount: 2,
    bedCount: 2,
    roomCount: 3,
    areaSquare: "1450 sq ft",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery18.jpg",
    propertyName: "Citra Garden Estate",
    price: " $1300000 ",
    status: "For Sale",
    bathCount: 2,
    bedCount: 2,
    roomCount: 3,
    areaSquare: "1450 sq ft",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery2.jpg",
    propertyName: " Family Home For Sale",
    price: "$15000",
    status: "For Sale",
    bathCount: 1,
    bedCount: 1,
    roomCount: 1,
    areaSquare: "1450 sq ft",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery10.jpg",
    propertyName: " 184 Lexington Avenue",
    price: " $1300 / monthly",
    status: "For Rent",
    bathCount: 2,
    bedCount: 5,
    roomCount: 3,
    areaSquare: "1450 sq ft",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery9.jpg",
    propertyName: "Luxury Villa With Pool",
    price: "$1300 / monthly",
    status: "For Rent",
    bathCount: 2,
    bedCount: 2,
    roomCount: 3,
    areaSquare: "1450 sq ft",
  },
];
export function FeaturedProperty() {
  const autoplay = useRef(Autoplay({ delay: 4000, jump: false }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.propertyName}>
      <Card {...item} />
    </Carousel.Slide>
  ));
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
        Featured Property
      </Title>
      <Text
        sx={(theme) => ({
          opacity: 0.75,
          maxWidth: rem(500),

          [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
          },
        })}
        mt={10}
        mb={30}
      >
        Handpicked Exclusive Properties By Our Team.
      </Text>
      <Carousel
        withIndicators
        height={200}
        slideSize="33.3333333333%"
        slideGap="md"
        align="start"
        breakpoints={[
          { maxWidth: "70rem", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        slidesToScroll={mobile ? 1 : 1}
        display={"grid"}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
      >
        {slides}
      </Carousel>
    </>
  );
}
