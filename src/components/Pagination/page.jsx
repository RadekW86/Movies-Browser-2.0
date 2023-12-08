import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGetParams from "@/common/useGetParams";
import { pageParam } from "@/common/routes";
import vectorPrevious from "../../resources/SVGs/vectorPrevious.svg";
import vectorNext from "../../resources/SVGs/vectorNext.svg";
import Image from "next/image";

export default function Pagination({ pageCurrent, totalPages }) {
  const lastPage = totalPages >= 500 ? 500 : totalPages;
  const [pageState, setPageState] = useState(parseInt(pageCurrent));
  const router = useRouter();
  const { path, searchParams } = useGetParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set(pageParam, pageState);
    router.push(path + "?" + params.toString());
  }, [pageState]);

  return (
    <div className="my-8 md:my-10 flex justify-center items-center gap-2 md:gap-3 text-xs md:text-sm">
      <button
        className="navButton"
        disabled={pageCurrent === 1}
        onClick={() => setPageState(1)}
      >
        <div className="flex">
          <Image
            src={vectorPrevious}
            alt="arrow back"
            className={`${pageCurrent === 1 ? "grayscale" : ""} h-2 md:h-3`}
          />
          <Image
            src={vectorPrevious}
            alt="arrow back"
            className={`${pageCurrent === 1 ? "grayscale" : ""} h-2 md:h-3`}
          />
        </div>
        <div className="hidden md:block">First</div>
      </button>
      <button
        className="navButton"
        disabled={pageCurrent === 1}
        onClick={() => setPageState(pageState - 1)}
      >
        <div>
          <Image
            src={vectorPrevious}
            alt="arrow back"
            className={`${pageCurrent === 1 ? "grayscale" : ""} h-2 md:h-3`}
          />
        </div>
        <div className="hidden md:block">Prev.</div>
      </button>
      <div className="mx-3 text-xs md:text-base flex flex-nowrap justify-center items-center gap-1 md-gap-6">
        <span className="hidden md:block">Page</span>
        <span className="font-semibold">{pageCurrent}</span>
        <span>of</span>
        <span className="font-semibold">{lastPage}</span>
      </div>
      <button
        className="navButton"
        disabled={pageCurrent === lastPage}
        onClick={() => setPageState(pageState + 1)}
      >
        <div className="hidden md:block">Next</div>
        <div>
          <Image
            src={vectorNext}
            alt="arrow forward"
            className={`${
              pageCurrent === lastPage ? "grayscale" : ""
            } h-2 md:h-3`}
          />
        </div>
      </button>
      <button
        className="navButton"
        disabled={pageCurrent === lastPage}
        onClick={() => setPageState(lastPage)}
      >
        <div className="hidden md:block">Last</div>
        <div className="flex">
          <Image
            src={vectorNext}
            alt="arrow forward"
            className={`${
              pageCurrent === lastPage ? "grayscale" : ""
            } h-2 md:h-3`}
          />
          <Image
            src={vectorNext}
            alt="arrow forward"
            className={`${
              pageCurrent === lastPage ? "grayscale" : ""
            } h-2 md:h-3`}
          />
        </div>
      </button>
    </div>
  );
}
