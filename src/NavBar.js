import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    borderBottom: "solid 1px",
    // paddingBottom: "1rem",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign In
      </NavLink> |{" "}
      <NavLink
        to="/my-pizza"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Build Your Pizza
      </NavLink> |{" "}
      <NavLink
        to="/custommer-support"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Customer Support
      </NavLink>
    </div>
  );
}

export default NavBar;