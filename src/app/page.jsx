import { redirect } from "next/navigation";
import { moviesPath } from "@/common/routes";

export default function Page() {
  redirect(`/${moviesPath}`);
}
