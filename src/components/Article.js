import React, { Component } from 'react';
import Header from './Header';
import data from '../data/data.json';

class Article extends Component {
    state = data;


    render() {
        return (
            <div className ="article">
                {this.state.articles.filter( item => {
                    return item.title == this.props.title
                }).map(title => {
                    return <div>
                        <h1>
                            <Header text={title.name}/>
                        </h1>
                        <img className="article-header-img" src={require(`../images/${title.title}.jpg`)}></img>
                        <div className="article-main-body">
                        INTRO TEXT
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