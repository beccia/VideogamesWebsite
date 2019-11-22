import React, { Component } from 'react';
import Review from './Review';
import Header from './Header';
import SelectionImage from './SelectionImage';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class ReviewContainer extends Component {
    state = {
        reviews: [
            {title: "Yakuza_0",
             name: "Yakuza 0" },
            {title: "Dragon_Quest_XI",
            name: "Dragon Quest XI"}
        ]
    }

    render() {
        return (
            // <div>
            //     <Header text="Reviews"/>
            // <div>
            //     {this.state.reviews.map( review => {
            //          return <SelectionImage title={review.title}/>
            //     })}
            //     </div>
                
            // </div>
<div>
<Header text="Reviews"/>
<br/>
<GridList cellHeight={260} className="gridList">
  {this.state.reviews.map(review => (
    <GridListTile key={review.title}>
      <SelectionImage title={review.title} domain="reviews"/>
      <GridListTileBar 
        title={review.name}
        subtitle={<span> review</span>}
      />
    </GridListTile>
  ))}
</GridList>
</div>
        );
    }
}



export default ReviewContainer;