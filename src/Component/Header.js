import React from 'react'
import { Link } from 'react-router-dom';
import newslogo from '../Component/Image/newslogo.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="nav-link active" to="/">
                <img src={newslogo} alt="loading" style={{ width: "120px", height: "60px" }}></img>
            </Link>
                {/* <a className="navbar-brand" href="/">Express News</a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li classNameName="nav-item">
                            <Link className="nav-link active" style={{ color: "red" }} to="/trending">Trending</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li classNameName="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header