import { moviesPath, peoplePath } from "@/common/routes";
import { backdropURL } from "@/common/setApiRequest";
import profile from "../../resources/SVGs/profile.svg";
import video from "../../resources/SVGs/video.svg";
import star from "../../resources/SVGs/star.svg";
import Image from "next/image";
import Genres from "../Genres/page";

export default function MainTile({ data, categoryMain, status }) {
  let poster;
  categoryMain === moviesPath && (poster = data.poster_path);
  categoryMain === peoplePath && (poster = data.profile_path);
  let posterTemplate;
  categoryMain === moviesPath && (posterTemplate = video);
  categoryMain === peoplePath && (posterTemplate = profile);
  let info1;
  categoryMain === moviesPath &&
    (info1 = [
      "Production: ",
      data.production_countries.map((item) => item.name).join(", ") || "n/a",
    ]);
  categoryMain === peoplePath &&
    (info1 = [
      "Date of Birth: ",
      new Date(data.birthday).toLocaleString("pl-PL", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }) || "n/a",
    ]);
  let info2;
  categoryMain === moviesPath &&
    (info2 = [
      "Release date: ",
      new Date(data.release_date).toLocaleString("pl-PL", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }) || "n/a",
    ]);
  categoryMain === peoplePath &&
    (info2 = ["Place of birth: ", data.place_of_birth || "n/a"]);

  let paragraph;
  categoryMain === moviesPath && (paragraph = data.overview || "n/a");
  categoryMain === peoplePath && (paragraph = data.biography || "n/a");

  return (
    <div
      className="bg-white grid grid-cols-[auto_1fr] p-4 md:p-6 
                 gap-y-4 gap-x-6 md:gap-y-6 md:gap-x-8 rounded-md shadow-basic"
    >
      {poster ? (
        <img
          className="max-h-[169px] md:max-h-[464px] rounded-md row-span-2"
          src={`${backdropURL}${poster}`}
        />
      ) : (
        <div
          className="h-[169px] md:h-[464px] aspect-aspectTTT 
                   bg-silver rounded-md row-span-2 flex justify-center items-center"
        >
          <Image src={posterTemplate} alt="poster" height={50} />
        </div>
      )}
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="flex flex-col gap-3 lg:gap-6">
          <h3 className="text-xl md:text-4xl font-medium">
            {data.title}
            {data.name}
          </h3>
          {categoryMain === moviesPath ? (
            <div className="text-sm md:text-xl">
              {new Date(data.release_date).getFullYear() || "n/a"}
            </div>
          ) : (
            ""
          )}
          <div className="text-sm md:text-lg">
            <div className="flex gap-2">
              <div className="hidden md:block text-stormGray">{info1[0]}</div>
              <div>{info1[1]}</div>
            </div>
            <div className="flex gap-2">
              <div className="hidden md:block text-stormGray">{info2[0]}</div>
              <div>{info2[1]}</div>
            </div>
          </div>
          {categoryMain === moviesPath ? (
            <div>
              <Genres genre_ids={data.genres.map((item) => item.id)} />
            </div>
          ) : (
            ""
          )}
        </div>
        {categoryMain === moviesPath ? (
          <div className="flex gap-2 items-end">
            <div className="h-4 md:h-6 aspect-square self-center">
              <Image src={star} alt="star" />
            </div>
            <div className="flex self-end items-end gap-1">
              <div className="font-semibold text-lg md:text-2xl">
                {data.vote_average.toFixed(1)}
              </div>
              <div className="hidden md:block">/10</div>
            </div>
            <div className="self-center md:self-end">
              {data.vote_count} votes
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="text-xm md:text-xl text-justify my-2.5 col-span-2 lg:col-span-1">
        {paragraph}
      </p>
    </div>
  );
}
