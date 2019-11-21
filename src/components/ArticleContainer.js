import React, { Component } from 'react';
import Header from './Header';
import SelectionImage from './SelectionImage';

class ArticleContainer extends Component {
    state = {
        articles: []
    }

    render() {
        return (
            <div>
                <Header text="Articles"/>
            <div>
                {this.state.articles.map( article => {
                     return <SelectionImage title={article.title}/>
                })}
                </div>
                
            </div>
        );
    }
}
export default ArticleContainer;