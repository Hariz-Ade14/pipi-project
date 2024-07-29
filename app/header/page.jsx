"use client";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./heaader.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Header() {
	return (
        <nav className="navbar navbar-expand-lg shadow-lg fixed-top d-flex align-items-center justify-content-between">
                <a className="navbar-brand" href="#" style={{color: "black"}}>$Solmen</a>
                <a href="https://app.uniswap.org/swap?chain=base&use=v2&outputCurrency=0xfc3e6bc72bebe70c2e38f78ff8a1a331b6787609">
                    <button className='butn mx-3 p-2' style={{backgroundColor: "black"}}>Buy Now</button>

                </a>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                </ul>
                </div> */}

      </nav>
	);
}

export default Header;
