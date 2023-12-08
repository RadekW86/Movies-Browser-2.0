import { useGenres } from "@/common/genresContext";

export default function Genres({ genre_ids }) {
  const { genresList } = useGenres();

  const genresListFilteredByGenres =
    genresList &&
    genresList.genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <ul className="flex flex-wrap gap-2 mb-3 md:mb-7 text-[10px] md:text-[13px]">
      {genresList &&
        genresListFilteredByGenres.map((item) => (
          <li
            className="bg-gray rounded-md py-1 px-1.5 md:py-1.5 md:px-2.5 text-center"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
    </ul>
  );
}
