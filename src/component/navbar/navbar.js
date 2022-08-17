import React from "react";
import classes from "./navbarStyle.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <div>
          <img />
          <span>Blogger</span>
        </div>
        <div>
          <form>
            <input type="search" placeholder="Type interested article" />
            <button>Search</button>
          </form>
        </div>
        <div className={classes.account}>
          <span>Log In</span>
          <span>Sign Up</span>
        </div>
      </nav>
    </>
  );
}
