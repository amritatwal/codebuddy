import React from "react";
import css from './Nav.module.css';
import Search from '../Search'


export default function Navbar() {
  return (
    <nav className={css["navbar-container"]}>
      <h1>CODE<span>BUDDY</span></h1>
      <div className={css.search}>
        <Search />
      </div>
      <div className={css["login-container"]}>
        <button className={`${css["btn"]} ${css["login"]}`}>sign in</button>
        <button className={`${css["btn"]} ${css["register"]}`}>join</button>
      </div>
    </nav>
  );
}

