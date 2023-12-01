import setApiRequest from "@/common/setApiRequest";

export default function setTitle() {
  const { type, search } = setApiRequest();
  let title;

  switch (type) {
    case "Movies":
      title = "Popular Movies";
      break;
    case "MoviesSearch":
      title = `Search results for "${search}" `;
      break;
    case "Movie":
      title = ["Cast ", "Crew "];
      break;
    case "People":
      title = "Popular People";
      break;
    case "PeopleSearch":
      title = `Search results for "${search}" `;
      break;
    case "Person":
      title = ["Movies - cast ", "Movies - crew "];
      break;
    default:
      title = "Title";
  }

  return title;
}
