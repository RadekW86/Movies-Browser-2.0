import Link from "next/link";
import { backdropURL } from "@/common/setApiRequest";
import { moviesPath, peoplePath } from "@/common/routes";
import profile from "../../resources/SVGs/profile.svg";
import video from "../../resources/SVGs/video.svg";
import star from "../../resources/SVGs/star.svg";
import Image from "next/image";
import Genres from "../Genres/page";

export default function Tile({
  id,
  category,
  poster_path,
  profile_path,
  title,
  name,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
  role,
}) {
  if (category === moviesPath) {
    return (
      <div className="rounded-md p-2 md:p-4 bg-white flex flex-col shadow-basic">
        <div className="grid grid-cols-[1fr_3fr] md:flex md:flex-col md:flex-grow gap-x-4">
          <Link href={`/${category}/${id}`}>
            {poster_path ? (
              <img
                className="rounded-md aspect-aspectTTT w-[160px] md:w-full"
                src={`${backdropURL}${poster_path}`}
                alt="poster"
              />
            ) : (
              <div className="w-full aspect-aspectTTT bg-silver rounded-md flex justify-center items-center">
                <Image src={video} alt="poster" />
              </div>
            )}
          </Link>
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <Link href={`/${category}/${id}`}>
                <h3 className="text-sm md:text-xl font-medium mt-2 md:mt-4">
                  {title}
                </h3>
              </Link>
              <div className="font-normal my-1 md:my-2 text-xs md:text-base">
                {release_date ? new Date(release_date).getFullYear() : ""}
              </div>
              <div>
                <Genres genre_ids={genre_ids} />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-0">
              <div className="flex justify-center items-center w-4 md:w-6">
                <Image src={star} alt="star" />
              </div>
              <div className="text-xs md:text-base font-semibold">
                {vote_average.toFixed(1)}
              </div>
              <div className="text-xs md:text-base font-normal">
                {vote_count} votes
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category === peoplePath) {
    return (
      <div className="rounded-md p-2 md:p-4 bg-white shadow-basic">
        <Link href={`/${category}/${id}`}>
          {profile_path ? (
            <img
              className="rounded-md aspect-aspectTTT"
              src={`${backdropURL}${profile_path}`}
              alt="profile picture"
            />
          ) : (
            <div className="w-full aspect-aspectTTT bg-silver rounded-md flex justify-center items-center">
              <Image src={profile} alt="profile picture" />
            </div>
          )}
        </Link>
        <Link href={`/${category}/${id}`}>
          <h3 className="text-base md:text-xl font-medium text-center mt-2 md:mt-4">
            {name}
          </h3>
        </Link>
        {role && (
          <div className="text-base text-center font-normal my-2">{role}</div>
        )}
      </div>
    );
  }
}
