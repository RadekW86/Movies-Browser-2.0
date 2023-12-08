"use client";

import Image from "next/image";
import searchIcon from "../../../resources/SVGs/search.svg";
import useGetParams from "@/common/useGetParams";
import {
  moviesPath,
  peoplePath,
  searchParam,
  pageParam,
} from "@/common/routes";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";

export default function Search() {
  const {
    path,
    pathSplitted,
    search,
    searchParams,
    isSearch,
    atMovies,
    atPeople,
  } = useGetParams();
  const router = useRouter();
  const [input, setInput] = useState(search || "");
  let placeholder;

  useEffect(() => {
    !isSearch && setInput("");
  }, [path]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    let properPushPath = path;

    const setSearch = () => {
      params.delete(pageParam);
      params.set(searchParam, input.trim());
      params.set(pageParam, 1);

      let lastIndex;
      atMovies && (lastIndex = pathSplitted.lastIndexOf(moviesPath));
      atPeople && (lastIndex = pathSplitted.lastIndexOf(peoplePath));
      if (lastIndex !== -1) {
        properPushPath = pathSplitted.slice(0, lastIndex + 1).join("/");
      } else {
        redirect(`/${moviesPath}`);
      }
    };

    input.trim() === "" ? params.delete(searchParam) : setSearch();
    router.push(properPushPath + "?" + params.toString());
  }, [input]);

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  switch (true) {
    case atMovies:
      placeholder = ` ${moviesPath.toLocaleLowerCase()}...`;
      break;
    case atPeople:
      placeholder = ` ${peoplePath.toLocaleLowerCase()}...`;
      break;
    default:
      placeholder = "...";
  }

  return (
    <div className="flex justify-center w-96">
      <div className="relative">
        <div className="absolute left-[20px] top-1/2 -translate-y-1/2 h-2/5 aspect-square">
          <Image src={searchIcon} alt="search icon" />
        </div>
        <input
          className="border-solid border-2 border-gray rounded-[33px] placeholder:text-darkerGray
        text-xs md:text-base h-8 md:h-12 w-72 md:w-[430px] pl-10 md:pl-12 pr-4"
          value={input}
          placeholder={`Search for${placeholder}`}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
