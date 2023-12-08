import useGetParams from "@/common/useGetParams";
import Image from "next/image";
import noResults from "../../resources/SVGs/noResults.svg";

export default function NoResults() {
  const { search } = useGetParams();
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="w-full my-3 font-semibold text-lg md:text-4xl">
        Sorry, there are no results for “{search}”
      </h2>
      <div className="w-56 md:w-[668px]">
        <Image priority src={noResults} alt="no results image" />
      </div>
    </div>
  );
}
