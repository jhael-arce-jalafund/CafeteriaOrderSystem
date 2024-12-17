"use client";
import NavLogo from "./NavLogo";
import Searcher from "../search/Searcher";

const Navbar = () => {

  return (
    <div className="navbar-main-container">
      <div className="navbar-sub-container left">
        <NavLogo style="logo hover" />
      </div>
      <div className="navbar-sub-container right">
        <Searcher />
      </div>
    </div>
  );
};

export default Navbar;
