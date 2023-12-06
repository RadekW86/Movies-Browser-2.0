"use client";

import { createContext, useContext, useEffect, useState } from "react";
import getApiData from "./getApiData";
import { genreURL } from "./setApiRequest";

const GenresContex = createContext();

export const GenresProvider = ({ children }) => {
  const [genresList, setGenresList] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getApiData(genreURL);
        setGenresList(results);
      } catch {
        setGenresList(undefined);
      }
    };
    fetchData();
  }, []);

  return (
    <GenresContex.Provider value={{ genresList }}>
      {children}
    </GenresContex.Provider>
  );
};

export const useGenres = () => {
  return useContext(GenresContex);
};
