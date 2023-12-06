import Image from "next/image";
import cameraImage from "../../resources/SVGs/video.svg";
import Link from "next/link";
import Nav from "./Nav/page";

export default function TopBar() {
  return (
    <div className="bg-black sticky top-0 left-0 right-0 p-6 z-10">
      <div className="mx-auto flex flex-wrap items-center justify-evenly gap-x-20 gap-y-4 md:gap-y-6 max-w-7xl">
        <div className="flex items-center gap-4 md:gap-24 text-white">
          <Link href="/">
            <div className="flex items-center gap-2.5 md:gap-4 hover:sepia">
              <div className="flex items-center w-3.5 h-3 md:w-8 md:h-7">
                <Image src={cameraImage} alt="logo" />
              </div>
              <h1 className="tracking-tighter font-medium text-sm md:text-2xl">
                Movies Browser
              </h1>
            </div>
          </Link>
          <Nav />
        </div>
        <div className="flex justify-center w-96 bg-teal-600 text-white">
          Search field
        </div>
      </div>
    </div>
  );
}
