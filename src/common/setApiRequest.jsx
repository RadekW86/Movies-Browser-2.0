"use client";

import { useSearchParams, usePathname } from "next/navigation";

export default function setApiRequest() {
  const path = usePathname().split("/");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const baseURL = "https://api.themoviedb.org/3";
  let url;
  let urlExtra;
  let type;

  switch (path[path.length - 1]) {
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
      switch (path[path.length - 2]) {
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

  switch (type) {
    case "Movies":
      url = `${baseURL}/movie/popular?language=en-US&page=${page ? page : "1"}`;
      break;
    case "MoviesSearch":
      url = `${baseURL}/search/movie?query=${search}&language=en-US&page=${page ? page : "1"}`;
      break;
    case "People":
      url = `${baseURL}/person/popular?language=en-US&page=${page ? page : "1"}`;
      break;
    case "PeopleSearch":
      url = `${baseURL}/search/person?query=${search}&language=en-US&page=${page ? page : "1"}`;
      break;
    case "Movie":
      url = `${baseURL}/movie/${path[path.length - 1]}?language=en-US`;
      urlExtra = `${baseURL}/movie/${path[path.length - 1]}/credits?language=en-US`;
      break;
    case "Person":
      url = `${baseURL}/person/${path[path.length - 1]}?language=en-US&`;
      urlExtra = `${baseURL}/person/${path[path.length - 1]}/combined_credits?language=en-US&`;
      break;
    default:
      throw new Error();
  }

  return { url, urlExtra, type };
}
