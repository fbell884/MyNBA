import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand ps-4" to="/">
          <i class="fa-solid fa-basketball pe-2"></i>MyNBA
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarItems">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/players">
                Players
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
