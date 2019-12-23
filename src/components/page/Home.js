import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header'
import ArticleContainer from '../ArticleContainer';
import SectionSelectImage from '../SectionSelectImage';

const Home = () => {
        return (
            <div className="article">
                <h1 className="header">
                <Header text="Home" />
                </h1>
                <div className="article-main-body">
                    <div className="section-img-container">
                    <SectionSelectImage domain="reviews" title="reviews"/>
                    <SectionSelectImage domain="articles" title="articles"/>
                    </div>
                {/* <Link className="link-mainpage" to="/reviews" >Reviews</Link>  <br/>
                <Link className="link-mainpage" to="/articles" >Articles</Link> */}
                <div className="article-main-text">
                    <p>Welcome. The basic idea behind this website is to share thoughts wth all the bros who like videogames out there. 
                        Throughout my many years of playing games I noticed that even though I can enjoy most high rated triple A titles, sometimes mainstream professional videogame 
                        media just don't get it and there are gems being missed as such, silly discussion etc. so it's time to join in. I'll add a comment functionality soon. 
                    </p>
                </div>
                </div>
            </div>
        );
    }

export default Home;