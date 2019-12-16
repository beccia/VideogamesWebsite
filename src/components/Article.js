import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import ArticleText from './ArticleText';
import data from '../data/data.json';
import { DialogTitle } from '@material-ui/core';

class Article extends Component {
    state = data;

    render() {
        const {handle} = this.props.match.params;
        return (
            <div className ="article">
                {this.state.articles.filter( item => {
                    return item.title == handle
                }).map(title => {
                    return <div key={title.title}>
                        <h1 className="header">
                            <Header text={title.name}/>
                        </h1>
                        <img className="article-header-img" src={require(`../images/${title.title}.jpg`)}></img>
                        <div className="article-main-body">
                            <Intro text="testtesttest"/>
                       <ArticleText title ={title.title} text1={title.text[0]} text2={title.text[1]} text3={title.text[2]}/>
                        TEXT 1

                        IMAGE
                        TEXT 2

                        IMAGE
                        VERDICT 
                        if review SCOREBOX
                        </div>
                    </div>
                })}

            </div>
        );
    }
}

export default Article;