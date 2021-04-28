import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item me-5">
                            <a className="nav-link active " aria-current="page" href="#">Home</a>
                        </Link>
                        <Link to="/uploadPhoto" className="nav-item me-5">
                            <a className="nav-link" href="#">Upload</a>
                        </Link>
                        <Link to="/createAlbum" className="nav-item me-5">
                            <a className="nav-link" href="#">Create Album</a>
                        </Link>
                        <Link to="/login" className="nav-item me-5">
                            <a className="nav-link" href="#">Login</a>
                        </Link>
                        <Link to="/profile" className="nav-item me-5">
                            <a className="nav-link" href="#" aria-disabled="true">Profile</a>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;