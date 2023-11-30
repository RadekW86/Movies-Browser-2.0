import Image from "next/image";
import exclamation from "../../resources/SVGs/exclamation.svg";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <div>
        <Image src={exclamation} alt="exclamation" />
      </div>
      <h2>Ooops! Something went wrong...</h2>
      <p>Please check your network connection and try again</p>
      <Link href="/">
        <button></button>
      </Link>
    </div>
  );
}
