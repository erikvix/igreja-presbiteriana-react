import React from "react";
import "./NavLink.css";
import { Link } from "react-router-dom";

export default function ({ children }) {
  return (
    <li>
      <Link className="navLink">{children}</Link>
    </li>
  );
}
