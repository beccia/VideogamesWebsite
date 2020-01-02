import React, { Component } from 'react';
import Header from '../Header';
import Intro from './Intro';
import Verdict from '../verdict/Verdict';
import ArticleText from './ArticleText';
import data from '../../data/data.json';
import { DialogTitle } from '@material-ui/core';

class Article extends Component {
    state = data;

    render() {
        const getConclusion = (article) => {
            var text = article.conclusion.toString().replace(/\\n/g, '\n\n');
            if (article.type != "reviews") {
                return <div className="verdict-article"><p>{text}</p>
                </div>
            } else {
               return <Verdict conclusion={text} subratings={[article.gprating, article.strating, article.imrating, article.virating]} score={article.score}/>
            }
        }
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
                        <img className="article-header-img" src={require(`../../images/${title.title}.jpg`)}></img>
                        <div className="article-main-body">
                            <Intro text={title.intro}/>
                            <ArticleText title ={title.title} text1={title.text[0]} text2={title.text[1]} text3={title.text[2]}/>
                            <p className="header">Conclusion:</p>
                            {getConclusion(title)}
                            </div>
                        </div>
                })}

            </div>
        );
    }
}
export default Article;