import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, desc, src, pathName = "#" }) {
  return (
    <div class=" max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-light-gray">
      <img class="h-auto max-w-full rounded-lg" src={src} alt="" />
      <Link to={pathName}>
        <h5 class="object-cover my-2 text-2xl font-bold tracking-tight text-black-c">
          {title}
        </h5>
      </Link>
      <p class="mb-3 font-normal text-black-c">{desc}</p>
    </div>
  );
}
