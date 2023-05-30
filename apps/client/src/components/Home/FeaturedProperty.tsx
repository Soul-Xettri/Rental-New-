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
} from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

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
}));

interface CardProps {
  image: string;
  propertyName: string;
  price: string;
  status: string;
}

function Card({ image, propertyName, price, status }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="0"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      style={{ overflow: "hidden" }}
    >
      <Group position="apart">
        <Badge
          style={{
            backgroundColor: "#1a2d3f",
            float: "left",
            transform: "rotate(-45deg)",
            left: "-75px",
            top: "0",
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

      <div>
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
    </Paper>
  );
}

const data = [
  {
    image: "https://wallsproperty.netlify.app/images/gallery17.jpg",
    propertyName: "Contemporary Apartment",
    price: "$1200000",
    status: "For Sale",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery16.jpg",
    propertyName: "Ample Apartment At Last Floor",
    price: "$1300 / monthly",
    status: "For Rent",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery18.jpg",
    propertyName: "Citra Garden Estate",
    price: " $1300000 ",
    status: "For Sale",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery2.jpg",
    propertyName: " Family Home For Sale",
    price: "$15000",
    status: "For Sale",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery10.jpg",
    propertyName: " 184 Lexington Avenue",
    price: " $1300 / monthly",
    status: "For Rent",
  },
  {
    image: "https://wallsproperty.netlify.app/images/gallery9.jpg",
    propertyName: "Luxury Villa With Pool",
    price: "$1300 / monthly",
    status: "For Rent",
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
        Find Properties in These Cities.
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
