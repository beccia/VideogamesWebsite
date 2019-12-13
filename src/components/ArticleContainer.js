import React, { Component } from 'react';
import Header from './Header';
import SelectionImage from './SelectionImage';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import data from '../data/data.json';

class ArticleContainer extends Component {
    state = data

    render() {
      const {handle} = this.props.match.params;
        return (
            <div>
<Header text={handle.toUpperCase()}/>
<br/>
<GridList cellHeight={260} className="gridList">
  {this.state.articles.filter(item => item.type == handle).map(article=> (
    <GridListTile key={article.title}>
      <SelectionImage title={article.title} domain={handle}/>
      <GridListTileBar 
        title={article.name}
        subtitle={article.subtitle}
      />
    </GridListTile>
  ))}
</GridList>
</div>
        );
    }
}

export default ArticleContainer;