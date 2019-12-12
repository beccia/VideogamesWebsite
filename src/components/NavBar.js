import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
        return (
            <div className="topbar">
                    <Link to="/" className="nav-item">Home</Link>
                    <a className="nav-item">About Me</a>
                    <a className="nav-item">Spotlight</a>
            </div>
        );
    } 

export default NavBar;