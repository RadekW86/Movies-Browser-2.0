"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { searchParam, pageParam } from "./params";

export default function getParams() {
  const pathSplitted = usePathname().split("/");
  const searchParams = useSearchParams();
  const search = searchParams.get(searchParam);
  const page = searchParams.get(pageParam);
  let type;
  let list = true;

  switch (pathSplitted[pathSplitted.length - 1]) {
    case "Movies":
      if (search) {
        type = "MoviesSearch";
      } else {
        type = "Movies";
      }
      break;

    case "People":
      if (search) {
        type = "PeopleSearch";
      } else {
        type = "People";
      }
      break;

    default: {
      list = false;
      switch (pathSplitted[pathSplitted.length - 2]) {
        case "Movies":
          type = "Movie";
          break;
        case "People":
          type = "Person";
          break;
        default:
          throw new Error();
      }
    }
  }

  return { pathSplitted, search, page, type, list };
}
