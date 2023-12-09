import { backdropURL } from "@/common/useSetApiRequest";
import Image from "next/image";
import star from "../../resources/SVGs/star.svg";

export default function Banner({ data, atMovies }) {
  if (atMovies) {
    return (
      data.backdrop_path && (
        <div className="relative max-h-[500px] md:max-h-[630px] w-full">
          <div className="absolute bg-deepBlack -z-10 h-full w-full"></div>
          <div className="relitive max-w-6xl mx-auto px-4 md:px-8 overflow-hidden">
            <div className="relative">
              <div
                className="absolute text-white flex flex-col justify-end 
              gap-2 md:gap-4 lg:gap-6 bg-gradient bg-center bg-130 h-full w-full"
              >
                <h2 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
                  {data.title}
                </h2>
                <div
                  className="flex flex-row lg:flex-col gap-2 lg:gap-4 
                items-end lg:items-start mb-5 lg:mb-12"
                >
                  <div className="flex flex-row gap-2 items-end">
                    <div className="h-4 md:h-6 aspect-square self-center">
                      <Image src={star} alt="star" />
                    </div>
                    <div className="flex self-end items-end gap-1">
                      <div className="font-semibold text-lg md:text-xl lg:text-2xl">
                        {data.vote_average.toFixed(1)}
                      </div>
                      <div>/10</div>
                    </div>
                  </div>
                  <div>{data.vote_count} votes</div>
                </div>
              </div>
              <img src={`${backdropURL}${data.backdrop_path}`} alt="backdrop" />
            </div>
          </div>
        </div>
      )
    );
  }
}
