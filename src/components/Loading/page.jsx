import Image from "next/image";
import loadingCircle from "../../resources/SVGs/loadingCircle.svg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[35px] max-h-[35px] md:max-w-[91px] md:max-h-[91px] my-5 md:my-12 animate-spin">
        <Image src={loadingCircle} alt="Loading..." />
      </div>
    </div>
  );
}
