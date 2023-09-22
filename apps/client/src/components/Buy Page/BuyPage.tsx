import { TopHeader } from "../../components/Navbar/TopHeader";
import SecondTopHeader from "./SecondTopHeader";
export default function BuyPage() {
  return (
    <>
      <TopHeader
        user={{
          name: "Soul-Xettri",
          image:
            "https://letsenhance.io/static/22670c45bd29d05692c4c0c1db3c62e7/f90fb/AiArtAfter.jpg",
        }}
      />
      <SecondTopHeader/>
    </>
  );
}
