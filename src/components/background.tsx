import Image from "next/image";
import Banner from "@/public/banner.jpg";

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={Banner}
      placeholder="blur"
      quality={100}
      sizes="100vw"
    className=" h-screen "
    />
  );
}
