import { Carousel } from "@mantine/carousel";
import { SimpleGrid } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";

const rooms = [
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Nov 2 - 7",
    price: "$23",
    images: [
      "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6d32edc4-d842-4927-9375-504b4b1801da.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/914043e6-8675-4509-a68a-78eec383a723.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/aa9f07b5-b44d-4cf7-a335-26f6339beb96.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/410c84ae-fdb0-4e91-9766-cede4f05423c.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Dec 1 - 6",
    price: "$46",
    images: [
      "https://a0.muscache.com/im/pictures/912f4a5e-b9b6-4833-917c-465936983eeb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cac86649-702e-4f5d-b77b-02389725789d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27db3500-0be7-4ed5-a711-15f98d4e6959.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4e12bf92-f774-4819-9d8c-78d3960df0e9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7fc9f6a2-f3c7-4f7f-9bab-7eed4b46d230.jpg?im_w=720",
    ],
  },
  {
    location: "Pathan, Nepal",
    hostedBy: "Yelos Raj",
    date: "Oct 18 - 23",
    price: "$31",
    images: [
      "https://a0.muscache.com/im/pictures/08d7d480-585c-43da-9d16-d908e532dd5e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Amrit",
    date: "Oct 8 - 16",
    price: "$39",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/fd8634b7-60d4-4835-a72a-b8d538a2a5b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/0582af28-dfef-44dd-9220-3591efe3378c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/6b7ec18f-4a3d-44b8-ac48-007e3c361f94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/336d6147-53ad-4329-a175-689f3a2a65d1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/8da9bb83-7621-46ef-bbdf-3ebed7a789db.jpeg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Nov 2 - 7",
    price: "$23",
    images: [
      "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6d32edc4-d842-4927-9375-504b4b1801da.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/914043e6-8675-4509-a68a-78eec383a723.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/aa9f07b5-b44d-4cf7-a335-26f6339beb96.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/410c84ae-fdb0-4e91-9766-cede4f05423c.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Dec 1 - 6",
    price: "$46",
    images: [
      "https://a0.muscache.com/im/pictures/912f4a5e-b9b6-4833-917c-465936983eeb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cac86649-702e-4f5d-b77b-02389725789d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27db3500-0be7-4ed5-a711-15f98d4e6959.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4e12bf92-f774-4819-9d8c-78d3960df0e9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7fc9f6a2-f3c7-4f7f-9bab-7eed4b46d230.jpg?im_w=720",
    ],
  },
  {
    location: "Pathan, Nepal",
    hostedBy: "Yelos Raj",
    date: "Oct 18 - 23",
    price: "$31",
    images: [
      "https://a0.muscache.com/im/pictures/08d7d480-585c-43da-9d16-d908e532dd5e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Amrit",
    date: "Oct 8 - 16",
    price: "$39",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/fd8634b7-60d4-4835-a72a-b8d538a2a5b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/0582af28-dfef-44dd-9220-3591efe3378c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/6b7ec18f-4a3d-44b8-ac48-007e3c361f94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/336d6147-53ad-4329-a175-689f3a2a65d1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/8da9bb83-7621-46ef-bbdf-3ebed7a789db.jpeg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Nov 2 - 7",
    price: "$23",
    images: [
      "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6d32edc4-d842-4927-9375-504b4b1801da.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/914043e6-8675-4509-a68a-78eec383a723.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/aa9f07b5-b44d-4cf7-a335-26f6339beb96.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/410c84ae-fdb0-4e91-9766-cede4f05423c.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Dec 1 - 6",
    price: "$46",
    images: [
      "https://a0.muscache.com/im/pictures/912f4a5e-b9b6-4833-917c-465936983eeb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cac86649-702e-4f5d-b77b-02389725789d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27db3500-0be7-4ed5-a711-15f98d4e6959.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4e12bf92-f774-4819-9d8c-78d3960df0e9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7fc9f6a2-f3c7-4f7f-9bab-7eed4b46d230.jpg?im_w=720",
    ],
  },
  {
    location: "Pathan, Nepal",
    hostedBy: "Yelos Raj",
    date: "Oct 18 - 23",
    price: "$31",
    images: [
      "https://a0.muscache.com/im/pictures/08d7d480-585c-43da-9d16-d908e532dd5e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Amrit",
    date: "Oct 8 - 16",
    price: "$39",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/fd8634b7-60d4-4835-a72a-b8d538a2a5b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/0582af28-dfef-44dd-9220-3591efe3378c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/6b7ec18f-4a3d-44b8-ac48-007e3c361f94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/336d6147-53ad-4329-a175-689f3a2a65d1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/8da9bb83-7621-46ef-bbdf-3ebed7a789db.jpeg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Nov 2 - 7",
    price: "$23",
    images: [
      "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6d32edc4-d842-4927-9375-504b4b1801da.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/914043e6-8675-4509-a68a-78eec383a723.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/aa9f07b5-b44d-4cf7-a335-26f6339beb96.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/410c84ae-fdb0-4e91-9766-cede4f05423c.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Dec 1 - 6",
    price: "$46",
    images: [
      "https://a0.muscache.com/im/pictures/912f4a5e-b9b6-4833-917c-465936983eeb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cac86649-702e-4f5d-b77b-02389725789d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27db3500-0be7-4ed5-a711-15f98d4e6959.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4e12bf92-f774-4819-9d8c-78d3960df0e9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7fc9f6a2-f3c7-4f7f-9bab-7eed4b46d230.jpg?im_w=720",
    ],
  },
  {
    location: "Pathan, Nepal",
    hostedBy: "Yelos Raj",
    date: "Oct 18 - 23",
    price: "$31",
    images: [
      "https://a0.muscache.com/im/pictures/08d7d480-585c-43da-9d16-d908e532dd5e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Amrit",
    date: "Oct 8 - 16",
    price: "$39",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/fd8634b7-60d4-4835-a72a-b8d538a2a5b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/0582af28-dfef-44dd-9220-3591efe3378c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/6b7ec18f-4a3d-44b8-ac48-007e3c361f94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/336d6147-53ad-4329-a175-689f3a2a65d1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/8da9bb83-7621-46ef-bbdf-3ebed7a789db.jpeg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Nov 2 - 7",
    price: "$23",
    images: [
      "https://a0.muscache.com/im/pictures/74d3f1e5-32c8-44e6-a13c-a258b757a9cd.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6d32edc4-d842-4927-9375-504b4b1801da.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/914043e6-8675-4509-a68a-78eec383a723.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/aa9f07b5-b44d-4cf7-a335-26f6339beb96.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/410c84ae-fdb0-4e91-9766-cede4f05423c.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Jennifer",
    date: "Dec 1 - 6",
    price: "$46",
    images: [
      "https://a0.muscache.com/im/pictures/912f4a5e-b9b6-4833-917c-465936983eeb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/cac86649-702e-4f5d-b77b-02389725789d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27db3500-0be7-4ed5-a711-15f98d4e6959.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4e12bf92-f774-4819-9d8c-78d3960df0e9.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/7fc9f6a2-f3c7-4f7f-9bab-7eed4b46d230.jpg?im_w=720",
    ],
  },
  {
    location: "Pathan, Nepal",
    hostedBy: "Yelos Raj",
    date: "Oct 18 - 23",
    price: "$31",
    images: [
      "https://a0.muscache.com/im/pictures/08d7d480-585c-43da-9d16-d908e532dd5e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6c69c279-3da5-4dea-ab44-737f4499ec91.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/798b177b-be45-4c08-a43e-73bbe1a6702e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e2b765e4-8294-4bae-a67b-8135aca9b62a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9cbaa268-477b-4514-a46f-694d9833c3d3.jpg?im_w=720",
    ],
  },
  {
    location: "Kathmandu, Nepal",
    hostedBy: "Amrit",
    date: "Oct 8 - 16",
    price: "$39",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/fd8634b7-60d4-4835-a72a-b8d538a2a5b9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/0582af28-dfef-44dd-9220-3591efe3378c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/6b7ec18f-4a3d-44b8-ac48-007e3c361f94.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/336d6147-53ad-4329-a175-689f3a2a65d1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-633904489117992406/original/8da9bb83-7621-46ef-bbdf-3ebed7a789db.jpeg?im_w=720",
    ],
  },
];

export default function BedBreakfast() {
  return (
    <SimpleGrid cols={4} spacing={25} verticalSpacing={30}>
      {rooms.map((room, index) => (
        <div key={index}>
          <Carousel
            withIndicators
            withControls
            slideSize="100%"
            slideGap="lg"
            align="start"
            slidesToScroll={1}
            height={"300px"}
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
            className="roomCarousel"
          >
            {room.images.map((image, imageIndex) => (
              <Carousel.Slide key={imageIndex}>
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    height: "280px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                  }}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
          <div
            style={{ fontSize: "15px", lineHeight: "20px", marginTop: "12px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontWeight: 600, fontSize: "16px" }}>
                {room.location}
              </p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AiFillStar style={{ marginRight: "5px" }} />
                4.38
              </p>
            </div>
            <p style={{ color: "#717171" }}>Hosted by {room.hostedBy}</p>
            <p style={{ color: "#717171" }}>{room.date}</p>
            <p style={{ fontWeight: 600, marginTop: "6px" }}>
              {room.price} <span style={{ fontWeight: "normal" }}>night</span>
            </p>
          </div>
        </div>
      ))}
    </SimpleGrid>
  );
}
