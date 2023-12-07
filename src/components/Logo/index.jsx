import React from "react";

export default function Logo({ src, w = 250 }) {
  return <img className={`w-[${w}] h-auto`} src={src} alt="" />;
}
