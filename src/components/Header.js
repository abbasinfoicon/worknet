import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  return (
    <header className="header bg-gray">

      <div className="header-full">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-sm-6">
              <div className="logo">
                <Link to='/'><img src="assets/img/logo.png" className="logo-img" /></Link>
              </div>
            </div>

            <div className="col-lg-10 col-sm-12">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#mainMenu">
                  <i className="fa-solid fa-bars-staggered"></i>
                </button>

                <div className="menu collapse navbar-collapse" id="mainMenu">
                  <ul className="menu-main navbar-nav mr-auto">
                    <li><NavLink to="/bewerberlnnen">Für BewerberInnen</NavLink></li>
                    <li><NavLink to="/unternehmen">Für Unternehmen</NavLink></li>
                    <li><NavLink to="/team">Team</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                  </ul>
                </div>

                <NavLink to="/job" className="cutsom-btn">Jobportal</NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header