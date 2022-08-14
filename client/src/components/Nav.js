export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="index.html" className="navbar-brand mx-auto mx-lg-0">KeyKing</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">Quests</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">Ranking</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">SpeedTest</a>
                        </li>
                        {/* Ако сме влезнали в профила си */}
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">My Profile</a>
                        </li>
                        
                    </ul>

                    <div className="d-lg-flex align-items-center d-none ms-auto">
                        <a className="navbar-icon me-3 bi-envelope-fill" href="/"> </a>
                    </div>
                </div>

            </div>
        </nav>
    )
}