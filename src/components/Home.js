import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

const Home = () => {
        return (
            <div className="home">
                <Header text="Je boy"/>
                <ul>
                    <li><Link className="link-mainpage" to="/reviews" >Reviews</Link></li>
                    <li><Link className="link-mainpage" to="/articles" >Articles</Link></li>
                </ul>
            </div>
        );
    }

export default Home;