import React from "react";

export default function Card({ title, desc, src }) {
  return (
    <div class="max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-light-gray">
      <img class="h-auto max-w-full rounded-lg" src={src} alt="" />
      <a href="#">
        <h5 class="my-2 text-2xl font-bold tracking-tight text-black-c">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-black-c">{desc}</p>
    </div>
  );
}
