import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { Container, Nav, Navbar } from 'react-bootstrap';



function NavbarContent() {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">G7-STOCKS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-right" style={{ maxHeight: '100px'}}>
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/market">Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">More</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavbarContent;