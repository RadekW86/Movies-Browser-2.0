import Image from "next/image";
import exclamation from "../../resources/SVGs/exclamation.svg";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <div>
        <Image priority src={exclamation} alt="exclamation" />
      </div>
      <h2>Ooops! Something went wrong...</h2>
      <p>Please check your request and network connection</p>
      <Link href="/">
        <button>Back to home page</button>
      </Link>
    </div>
  );
}
