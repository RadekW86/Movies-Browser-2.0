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

  switch (path[path.length - 1]) {
    case "Movies":
      if (search) {
        url = `${baseURL}/search/movie?query=${search}&language=en-US&page=${
          page ? page : "1"
        }`;
      } else {
        url = `${baseURL}/movie/popular?language=en-US&page=${
          page ? page : "1"
        }`;
      }
      break;

    case "People":
      if (search) {
        url = `${baseURL}/search/person?query=${search}&language=en-US&page=${
          page ? page : "1"
        }`;
      } else {
        url = `${baseURL}/person/popular?language=en-US&page=${
          page ? page : "1"
        }`;
      }
      break;

    default: {
      switch (path[path.length - 2]) {
        case "Movies":
          url = `${baseURL}/movie/${path[path.length - 1]}?language=en-US`;
          urlExtra = `${baseURL}/movie/${
            path[path.length - 1]
          }/credits?language=en-US`;
          break;
        case "People":
          url = `${baseURL}/person/${path[path.length - 1]}?language=en-US&`;
          urlExtra = `${baseURL}/person/${
            path[path.length - 1]
          }/combined_credits?language=en-US&`;
          break;
        default:
          throw new Error();
      }
    }
  }

  return { url, urlExtra };
}
