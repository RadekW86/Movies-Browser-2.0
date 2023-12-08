"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { searchParam, pageParam, moviesPath, peoplePath } from "./routes";

export default function useGetParams() {
  const path = usePathname();
  const pathSplitted = usePathname().split("/");
  const searchParams = useSearchParams();
  const search = searchParams.get(searchParam);
  const page = searchParams.get(pageParam);
  let type;
  let isList = true;
  let isSearch = false;
  const atMovies = path.includes(moviesPath);
  const atPeople = path.includes(peoplePath);

  switch (pathSplitted[pathSplitted.length - 1]) {
    case moviesPath:
      if (search) {
        type = "MoviesSearch";
        isSearch = true;
      } else {
        type = "Movies";
      }
      break;

    case peoplePath:
      if (search) {
        type = "PeopleSearch";
        isSearch = true;
      } else {
        type = "People";
      }
      break;

    default: {
      isList = false;
      switch (pathSplitted[pathSplitted.length - 2]) {
        case moviesPath:
          type = "Movie";
          break;
        case peoplePath:
          type = "Person";
          break;
        default:
          type = "";
      }
    }
  }

  return {
    path,
    pathSplitted,
    searchParams,
    search,
    page,
    type,
    isList,
    isSearch,
    atMovies,
    atPeople,
  };
}
