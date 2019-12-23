import React, { Component } from 'react';
import Header from './Header';
import SelectionImage from './SelectionImage';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import data from '../data/data.json';

class ArticleContainer extends Component {
    state = data

    render() {
      const getGridListCols = () => {
        if (isWidthUp('xl', this.props.width)) {
          return 3;
         }
   
         if (isWidthUp('lg', this.props.width)) {
           return 3;
         }
   
         if (isWidthUp('md', this.props.width)) {
           return 2;
         }
         if (isWidthUp('sm', this.props.width)) {
          return 2;
        }
   
        return 1;
       }

       const getGridListTilerows = () => {
        if (isWidthUp('xl', this.props.width)) {
          return 2;
         }
   
         if (isWidthUp('lg', this.props.width)) {
           return 2;
         }
   
         if (isWidthUp('md', this.props.width)) {
           return 2;
         }

         if (isWidthUp('sm', this.props.width)) {
            return 2;
          }
        return 1;
       }
   
      const {handle} = this.props.match.params;
        return (
            <div className="article">
                <h1 className="header">
                  <Header  text={handle.toUpperCase()}/>
                </h1>
              <br/>
              <div className="articlegrid">
              <GridList cellHeight={"auto"} cols={getGridListCols()}>
                {data.articles.filter(item => item.type == handle).map(article=> (
                <GridListTile rows={getGridListTilerows()} key={article.title}>
                  <SelectionImage title={article.title} domain={handle}/>
                  <GridListTileBar title={article.name} subtitle={article.subtitle} />
                </GridListTile>))}
              </GridList>
              </div>
              </div>
        );
    }
}

export default withWidth()(ArticleContainer);