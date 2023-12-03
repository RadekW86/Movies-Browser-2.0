import Image from "next/image";
import exclamation from "../../resources/SVGs/exclamation.svg";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-6 items-center justify-center my-12 md:my-36 px-8">
      <div className="max-w-[80px] max-h-[80px] md:max-w-[120px] md:max-h-[120px]">
        <Image priority src={exclamation} alt="exclamation" />
      </div>
      <h2 className="text-lg md:text-3xl font-semibold">
        Ooops! Something went wrong...
      </h2>
      <p className="text-center text-xs md:text-xl font-medium max-w-[180px] md:max-w-[300px]">
        Please check your request and network connection
      </p>
      <Link href="/">
        <button className="text-xs md:text-sm font-bold text-white bg-blue py-3 px-5 rounded-md hover:brightness-110">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
