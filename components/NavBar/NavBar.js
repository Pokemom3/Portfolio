import React from "react";
import css from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={css.NavBarContainer}>
      <h1 className={css.NavBarText}>
        <ul>
          <ul className={css.NavBarList}>About me</ul>
          <ul className={css.NavBarList}>Projects</ul>
          <ul className={css.NavBarList}>Contact</ul>

        </ul>
      </h1>
      <ul>

      </ul>
    </div>
  );
}

export default NavBar
