import React, { Component } from 'react';
import Header from '../Header'


const AboutMe = () => {
        return (
            <div className="article">
                <h1 className="header">
                    <Header text="About me" />
                </h1>
                <div className="article-main-body">
                <div className="article-main-text">
                    <p>Wazaaap.
                    </p>
                </div>
                </div>
            </div>
        );
    }

export default AboutMe;