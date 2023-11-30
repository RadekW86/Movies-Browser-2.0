import Image from "next/image";
import loadingCircle from "../../resources/SVGs/loadingCircle.svg";

export default function Loading() {
  return (
    <div>
      <div>
        <Image src={loadingCircle} alt="Loading..." />
      </div>
    </div>
  );
}
