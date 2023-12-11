import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, desc, src, pathName = "#" }) {
  return (
    <div class=" max-w-sm p-6 bg-wh ite rounded-lg shadow-lg dark:bg-light-gray">
      <img
        class="h-[300px] w-[500px] object-cover rounded-lg"
        src={src}
        alt=""
      />
      <Link to={pathName}>
        <h5 class="object-cover capitalize my-2 text-2xl font-bold tracking-tight text-black-c">
          {title}
        </h5>
      </Link>
      <p class="mb-3 font-normal text-black-c">{desc}</p>
    </div>
  );
}
