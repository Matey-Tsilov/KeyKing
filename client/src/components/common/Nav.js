import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserData } from "../../api/util";
import { VALID_PATHS } from "../../constants";
import * as api from "../../api/api.js"
export const Nav = () => {
  const location = useLocation();

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(!VALID_PATHS.includes(location.pathname));
  }, [location]);

  const user = getUserData();

  return (
    <nav className={`navbar navbar-expand-lg ${notFound && "not-found"}`}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link to="/" className="navbar-brand mx-auto mx-lg-0">
          KeyKing
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <Link to="/" className="nav-link click-scroll">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/quests" className="nav-link click-scroll">
                Quests
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/practice" className="nav-link click-scroll">
                Practice
              </Link>
            </li>

            {user 
            ? (
              <>
                <li className="nav-item">
                  <Link to="/ranking" className="nav-link click-scroll">
                    Ranking
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/my-profile"} className="nav-link click-scroll">
                    My Profile
                  </Link>
                </li>
              </>
            ) 
            : null}
          </ul>

          <div className="d-lg-flex align-items-center d-none ms-auto">
            <Link to={"/"} className="navbar-icon me-3 bi-envelope-fill" />
          </div>
          <div>
            { user && <Link to={"/"} className="navbar-icon me-3 bi bi-escape" onClick={() => api.logout()}>Logout</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};
