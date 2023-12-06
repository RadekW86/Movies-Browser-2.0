"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { searchParam, pageParam, moviesPath, peoplePath } from "./routes";

export default function getParams() {
  const path = usePathname();
  const pathSplitted = usePathname().split("/");
  const searchParams = useSearchParams();
  const search = searchParams.get(searchParam);
  const page = searchParams.get(pageParam);
  let type;
  let list = true;

  switch (pathSplitted[pathSplitted.length - 1]) {
    case moviesPath:
      if (search) {
        type = "MoviesSearch";
      } else {
        type = "Movies";
      }
      break;

    case peoplePath:
      if (search) {
        type = "PeopleSearch";
      } else {
        type = "People";
      }
      break;

    default: {
      list = false;
      switch (pathSplitted[pathSplitted.length - 2]) {
        case moviesPath:
          type = "Movie";
          break;
        case peoplePath:
          type = "Person";
          break;
        default:
          throw new Error();
      }
    }
  }

  return { path, pathSplitted, searchParams, search, page, type, list };
}
