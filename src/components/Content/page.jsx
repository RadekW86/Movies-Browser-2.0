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
  const { list, type } = getParams();
  const { url, urlExtra } = setApiRequest();
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

  const title = setTitle();

  if (status === "error") {
    return <ErrorPage />;
  } else {
    return (
      <>
        {list === true ? (
          <ContentList status={status} type={type} title={title} data={data} />
        ) : (
          <ContentDetails
            status={status}
            type={type}
            title={title}
            data={data}
            dataExtra={dataExtra}
          />
        )}
      </>
    );
  }
}
