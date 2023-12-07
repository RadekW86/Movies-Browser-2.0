import { moviesPath, peoplePath } from "@/common/routes";
import Loading from "@/components/Loading/page";
import NoResults from "@/components/NoResults/page";
import Pagination from "@/components/Pagination/page";
import Section from "@/components/Section/page";
import Tile from "@/components/Tile/page";

export default function ContentList({
  status,
  isSearch,
  title,
  data,
  path,
  atMovies,
  atPeople,
}) {
  console.log(data);
  let category;
  atMovies && (category = moviesPath);
  atPeople && (category = peoplePath);

  let count;
  if (status === "success" && isSearch) {
    count =
      data.total_results >= 10000 ? "( 10000+ )" : `(${data.total_results})`;
  } else {
    count = "";
  }

  return (
    <>
      {count === "(0)" ? (
        <NoResults />
      ) : (
        <main className="pt-6 md:py-11 flex flex-col justify-center items-center">
          <h2 className="w-full p-1 md:p-3 font-semibold text-lg md:text-4xl">
            {title} {count}
          </h2>
          {status === "success" ? (
            <>
              <Section path={path} category={category}>
                {data.results.map(
                  ({
                    id,
                    poster_path,
                    profile_path,
                    title,
                    name,
                    release_date,
                    genre_ids,
                    vote_average,
                    vote_count,
                  }) => (
                    <Tile
                      key={id}
                      category={category}
                      id={id}
                      poster_path={poster_path}
                      profile_path={profile_path}
                      title={title}
                      name={name}
                      release_date={release_date}
                      genre_ids={genre_ids}
                      vote_average={vote_average}
                      vote_count={vote_count}
                      path={path}
                    />
                  )
                )}
              </Section>
              <Pagination
                pageCurrent={data.page}
                totalPages={data.total_pages}
              />
            </>
          ) : (
            <Loading />
          )}
        </main>
      )}
    </>
  );
}
