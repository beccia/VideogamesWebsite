import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
        return (
            <div className="topbar">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/sections/reviews" className="nav-item">Reviews</Link>
                    <Link to="/sections/articles" className="nav-item">Articles</Link>
                    <Link to="/about_this" className="nav-item">About this</Link>
                    <Link to="/about_me" className="nav-item">About me</Link>
            </div>
        );
    } 

export default NavBar;