import { Button, Title } from "@mantine/core";

export default function CallToAction() {
  let buttoncta = " buttonctaDark";

  if (document.body.style.backgroundColor === "white") {
    buttoncta = "buttonctaWhite";
  }
  return (
    <div className="callToActionContainer">
      <div className="textContainer">
        <Title className="textTitle text-white">
          Looking To Sell Or Rent Your Property?
        </Title>
        <p className="textParagraph text-white" style={{ marginTop: "5px" }}>
          We Will Assist You In The Best And Comfortable Property Services For
          You
        </p>
      </div>
      <div className="buttonContainer">
        <Button
          type="submit"
          style={{ borderRadius: 0 }}
          className={` py-2 px-4   ${buttoncta}`}
        >
          Request a quote&nbsp; {">"}
        </Button>
      </div>
    </div>
  );
}
