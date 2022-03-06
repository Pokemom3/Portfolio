import React from "react";
import css from "./Header.module.css"

function Header() {
  return (
    <div className={css.HeaderContainer}>
      <h1 className={css.HeaderText}> Tan Matthews</h1>
    </div>
  );
}

export default Header;
