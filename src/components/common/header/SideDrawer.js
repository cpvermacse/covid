import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideDrawer() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/"> HOME</NavLink>
      </li>
      <li>
        <NavLink to="/demographics"> DEMOGRAPHICS</NavLink>
      </li>
      <li>
        <NavLink to="/deep-dive"> DEEP DIVE</NavLink>
      </li>
    </ul>
  );
}

export default SideDrawer;
