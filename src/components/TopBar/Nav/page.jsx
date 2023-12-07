"use client";

import Link from "next/link";
import { moviesPath, peoplePath } from "@/common/routes";
import getParams from "@/common/getParams";

export default function Nav() {
  const { path } = getParams();

  return (
    <nav>
      <ul className="flex gap-6 md:gap-11 text-xs md:text-sm font-semibold">
        <li
          className={`menuLink ${
            path.includes(moviesPath) ? "menuLinkSelected" : ""
          }`}
        >
          <Link href={`/${moviesPath}`} className="uppercase">
            {moviesPath}
          </Link>
        </li>
        <li
          className={`menuLink ${
            path.includes(peoplePath) ? "menuLinkSelected" : ""
          }`}
        >
          <Link href={`/${peoplePath}`} className="uppercase">
            {peoplePath}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
