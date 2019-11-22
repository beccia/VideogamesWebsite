import React, { Component } from 'react';
import Header from './Header';
import SelectionImage from './SelectionImage';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class ArticleContainer extends Component {
    state = {
        articles: [{
            title: "state_of_the_games_industry",
            name: "The state of the games industry"
        }]
    }

    render() {
        return (
            // <div>
            //     <Header text="Articles"/>
            // <div>
            //     {this.state.articles.map( article => {
            //          return <SelectionImage title={article.title}/>
            //     })}
            //     </div>
                
            // </div>

            <div>
<Header text="Articles"/>
<br/>
<GridList cellHeight={260} className="gridList">
  {this.state.articles.map(article=> (
    <GridListTile key={article.title}>
      <SelectionImage title={article.title} domain="articles"/>
      <GridListTileBar 
        title={article.name}
        subtitle={<span> article</span>}
      />
    </GridListTile>
  ))}
</GridList>
</div>
        );
    }
}
export default ArticleContainer;