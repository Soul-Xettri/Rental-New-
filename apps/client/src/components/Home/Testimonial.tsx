import { Carousel } from "@mantine/carousel";
import { Text, Title, createStyles, rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  comment: string;
  userName: string;
  userDetail: string;
}

function Card({ image, comment, userName, userDetail }: CardProps) {
  //   const { classes } = useStyles();
  let testimonialBlock = "testimonialBlock";
  let testimonialUserName = "testimonialUserName";
  let commentClass = "comment";
  let userPosition = "userPosition";

  if (document.body.style.backgroundColor === "rgb(26, 27, 30)") {
    testimonialBlock = "testimonialBlockBlack";
    testimonialUserName = "testimonialUserNameBlack";
    commentClass = "commentBlack";
    userPosition = "userPositionBlack";
  }

  return (
    <>
      <div className="testimonial">
        <div className="bord">
          <div className={`${testimonialBlock}`}>
            <p className={`${commentClass}`}>{comment}</p>
          </div>
          <div className="testimonialUser">
            <div>
              <img src={image} alt="" className="testimonialUserImage" />
            </div>
            <div className={`${testimonialUserName}`}>
              {userName}
              <br /> <span className={`${userPosition}`}>{userDetail}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const data = [
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
  {
    image: "https://wallsproperty.netlify.app/images/profile-blog.jpg",
    userName: "Jhon Doe",
    userDetail: "Owner, Digital Agency",
    comment:
      " Thank you walls property help me, choice dream home We were impressed with the build quality, Plus they are competitively priced.",
  },
];
export default function Testimonial() {
  const autoplay = useRef(Autoplay({ delay: 4000, jump: false }));
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.comment}>
      <Card {...item} />
    </Carousel.Slide>
  ));
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
            textAlign: "center",
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
          What People Say
        </Title>
        <Text className={classes.description} mt={10} mb={30}>
          People Say About Our Rentals
        </Text>
      </div>
      <Carousel
        styles={{
          control: {
            display: "none",
          },
        }}
        height={200}
        slideSize="50%"
        slideGap="md"
        align="start"
        breakpoints={[
          { maxWidth: "70rem", slideSize: "50%" },
          { maxWidth: "48rem", slideSize: "95%", slideGap: "md" },
          { maxWidth: "32rem", slideSize: "100%", slideGap: "md" },
        ]}
        slidesToScroll={mobile ? 1 : 1}
        display={"grid"}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        className="carousel"
      >
        {slides}
      </Carousel>
    </>
  );
}
