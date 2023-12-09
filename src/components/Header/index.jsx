import React from "react";

export default function Header({ children, title, color = "dark-green" }) {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center gap-6 py-8">
        <h1 className="font-bold uppercase text-2xl md:text-3xl text-dark-green px-0">
          {title}
        </h1>
        <div className={`border-b-8 border-${color} rounded w-96`}></div>
      </div>
      {children}
    </div>
  );
}
