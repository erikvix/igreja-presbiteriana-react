import React from "react";
import logo from "../../assets/logo.svg";

export default function Logo({ src = logo, w = 250 }) {
  return <img className={`w-[${w}] h-auto`} src={src} alt="" />;
}
