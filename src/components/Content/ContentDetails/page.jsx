import { moviesPath, peoplePath } from "@/common/routes";
import Loading from "@/components/Loading/page";
import MainTile from "@/components/MainTile/page";
import Section from "@/components/Section/page";
import Tile from "@/components/Tile/page";
import { nanoid } from "nanoid";

export default function ContentDetails({
  status,
  title,
  data,
  dataExtra,
  atMovies,
  atPeople,
}) {
  console.log(data, dataExtra);
  let category;
  atMovies && (category = peoplePath);
  atPeople && (category = moviesPath);
  let categoryMain;
  atMovies && (categoryMain = moviesPath);
  atPeople && (categoryMain = peoplePath);

  return (
    <>
      {status === "success" ? (
        <main className="pt-6 md:py-11 flex flex-col justify-center items-center gap-6 md:gap-11">
          <MainTile data={data} categoryMain={categoryMain} status={status}/>
          {dataExtra.cast.length > 0 ? (
            <div>
              <h2 className="w-full p-1 md:p-3 font-semibold text-lg md:text-4xl">
                {title[0]} ({dataExtra.cast.length})
              </h2>
              <Section category={category}>
                {dataExtra.cast.map(
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
                    character,
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
                      role={character}
                    />
                  )
                )}
              </Section>
            </div>
          ) : (
            ""
          )}
          {dataExtra.crew.length > 0 ? (
            <div>
              <h2 className="w-full p-1 md:p-3 font-semibold text-lg md:text-4xl">
                {title[1]} ({dataExtra.crew.length})
              </h2>
              <Section category={category}>
                {dataExtra.crew.map(
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
                    job,
                  }) => (
                    <Tile
                      key={nanoid()}
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
                      role={job}
                    />
                  )
                )}
              </Section>
            </div>
          ) : (
            ""
          )}
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
