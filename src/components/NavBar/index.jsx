import React from "react";
import Button from "../Button";
import "./NavBar.css";
import Logo from "../Logo";
import logosvg from "../../assets/logo.svg";
import NavLink from "../NavLink";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <Logo src={logosvg} />
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <NavLink>Home</NavLink>
          <NavLink>Igreja</NavLink>
          <NavLink>Quem somos</NavLink>
          <NavLink>Contato</NavLink>
        </ul>
      </div>
      <div>
        <Button>Fazer Login</Button>
      </div>
    </div>
  );
}
