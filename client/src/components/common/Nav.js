import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" className="navbar-brand mx-auto mx-lg-0">KeyKing</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5">
                        <li className="nav-item">
                            <Link to="/" className="nav-link click-scroll">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/quests" className="nav-link click-scroll">Quests</Link>
                        </li>

                        <li className="nav-item">
                           <Link to="/ranking" className="nav-link click-scroll">Ranking</Link>
                        </li>

                        <li className="nav-item">
                           <Link to="/practice" className="nav-link click-scroll">Practice</Link>
                        </li>
                        {/* Ако сме влезнали в профила си */}
                        <li className="nav-item">
                            <Link to={"/my-profile"} className="nav-link click-scroll">My Profile</Link>
                        </li>
                        
                    </ul>

                    <div className="d-lg-flex align-items-center d-none ms-auto">
                        <Link to={'/'} className='navbar-icon me-3 bi-envelope-fill'/>
                    </div>
                </div>

            </div>
        </nav>
    )
}