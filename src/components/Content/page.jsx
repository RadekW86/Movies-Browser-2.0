"use client";

import { useState, useEffect } from "react";
import getApiData from "@/common/getApiData";
import setApiRequest from "@/common/setApiRequest";
import ErrorPage from "../ErrorPage/page";
import ContentList from "./ContentList/page";
import ContentDetails from "./ContentDetails/page";

export default function Content() {
  const { url, urlExtra, list } = setApiRequest();
  const [data, setData] = useState();
  const [dataExtra, setDataExtra] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
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
  }, []);

  if (status === "error") {
    return <ErrorPage />;
  }

  if (status === "success") {
    return (
      <>
        {list === true ? (
          <ContentList data={data} />
        ) : (
          <ContentDetails data={data} dataExtra={dataExtra} />
        )}
      </>
    );
  }
}
