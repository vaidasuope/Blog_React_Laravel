import React from 'react';

function Nav(){

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="!#">Start your diary</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Nav;