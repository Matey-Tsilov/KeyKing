import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VALID_PATHS } from "../../constants";
import * as api from "../../api/api.js";
import UserContext from "../../Contexts/Context";

const Nav = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(!VALID_PATHS.includes(location.pathname));
  }, [location]);

  const { user, setUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await api.logout();
    setUser({});
    navigate("/logout");
  };

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

            {JSON.stringify(user) !== "{}" ? (
              <>
                <li className="nav-item">
                  <Link to="/ranking" className="nav-link click-scroll">
                    Ranking
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/create" className="nav-link click-scroll">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/my-profile"} className="nav-link click-scroll">
                    My Profile
                  </Link>
                </li>

              </>
            ) : null}
          </ul>

          <div className="d-lg-flex align-items-center d-none ms-auto">
            <Link to={"/"} className="navbar-icon me-3 bi-envelope-fill" />
          </div>
          <div>
            {JSON.stringify(user) !== "{}" && (
              <button
                className="me-3 bi-door-open-fill"
                onClick={logoutHandler}
              ></button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav
