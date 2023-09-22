import { Carousel } from "@mantine/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function SecondTopHeader() {
  return (
    <Carousel
    withIndicators
    height={100}
    slideSize="33.333333%"
    slideGap="md"
    align="start"
    slidesToScroll={3}
    styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
  >
    <Carousel.Slide><FontAwesomeIcon icon={faHouse} style={{fontSize:"25px"}} /></Carousel.Slide>
    <Carousel.Slide>2</Carousel.Slide>
    <Carousel.Slide>3</Carousel.Slide>
    <Carousel.Slide>4</Carousel.Slide>
    <Carousel.Slide>5</Carousel.Slide>
    <Carousel.Slide>6</Carousel.Slide>
  </Carousel>
  )
}
