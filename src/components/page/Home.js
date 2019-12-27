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
                <div className="article-main-text">
                    <p>Welcome. The basic idea behind this website is to share thoughts wth all the bros who like videogames out there. 
                        Throughout my many years of playing games I noticed that even though I can enjoy most high rated triple A titles, sometimes mainstream professional videogame 
                        media just don't get it and there are gems being missed as such, silly discussion etc. so it's time to join in. There's reviews of games I have played, articles discussing upcoming games, and issues or ideas around the vdieogame world. I'll add a comment functionality soon. 
                        <br /><br />
                        I recommend you check the "About this" section for more information about the idea behind my reviews, and why I pay atention to the things I pay attention about. And of course there's a small "About Me" section as well. 
                        Plans are to add a section with various video game related links as well, maybe some kind of forum and further down the line some kind of release date tracker & sales tracker. Select your section above and enjoy! 
                    </p>
                </div>
                </div>
            </div>
        );
    }

export default Home;