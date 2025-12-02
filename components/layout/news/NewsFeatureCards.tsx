import Image from "next/image";
import Link from "next/link";
import LeftImage from "@/public/image/LEFT IMAGE.png";
import RightImage from "@/public/image/RIGHT IMAGE.png";

export default function NewsFeatureCards() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <Link href={"/news/know-your-hallmarks"}>
            <Image
              src={LeftImage}
              alt=""
              width={1080}
              height={720}
              className="size-full"
            />
          </Link>
          <Link href={"/news/the-essential-guide-to-selling-your-gold"}>
            <Image
              src={RightImage}
              alt=""
              width={1080}
              height={720}
              className="size-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
