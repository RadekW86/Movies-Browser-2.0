import useGetParams from "./useGetParams";
export const backdropURL = "https://image.tmdb.org/t/p/original/";
export const genreURL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

export default function useSetApiRequest() {
  const baseURL = "https://api.themoviedb.org/3";
  const { search, page, type, pathSplitted } = useGetParams();
  let url;
  let urlExtra;

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
      url = `${baseURL}/movie/${pathSplitted[pathSplitted.length - 1]}?language=en-US`;
      urlExtra = `${baseURL}/movie/${pathSplitted[pathSplitted.length - 1]}/credits?language=en-US`;
      break;
    case "Person":
      url = `${baseURL}/person/${pathSplitted[pathSplitted.length - 1]}?language=en-US&`;
      urlExtra = `${baseURL}/person/${pathSplitted[pathSplitted.length - 1]}/combined_credits?language=en-US&`;
      break;
    default:
      throw new Error();
  }

  return { url, urlExtra };
}
