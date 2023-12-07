"use client";

import { useState, useEffect } from "react";
import getParams from "@/common/getParams";
import setApiRequest from "@/common/setApiRequest";
import getApiData from "@/common/getApiData";
import ErrorPage from "../ErrorPage/page";
import ContentList from "./ContentList/page";
import ContentDetails from "./ContentDetails/page";
import setTitle from "./setTitle";

export default function Content() {
  const { isList, isSearch, type, atMovies, atPeople } = getParams();
  const { url, urlExtra } = setApiRequest();
  const [data, setData] = useState();
  const [dataExtra, setDataExtra] = useState();
  const [status, setStatus] = useState("loading");
  const title = setTitle();

  useEffect(() => {
    setStatus("loading");
    const fetchData = async () => {
      try {
        const result = await getApiData(url);
        setData(result);
        if (urlExtra) {
          const resultExtra = await getApiData(urlExtra);
          setDataExtra(resultExtra);
        }
        if (result.hasOwnProperty("success")) {
          result.success === false && setStatus("error");
        } else {
          setStatus("success");
        }
      } catch {
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 overflow-x-auto">
      {status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          {isList ? (
            <ContentList
              status={status}
              isSearch={isSearch}
              title={title}
              data={data}
              atMovies={atMovies}
              atPeople={atPeople}
            />
          ) : (
            <ContentDetails
              status={status}
              type={type}
              title={title}
              data={data}
              dataExtra={dataExtra}
              atMovies={atMovies}
              atPeople={atPeople}
            />
          )}
        </>
      )}
    </div>
  );
}
