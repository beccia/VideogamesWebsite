import React, { Component } from 'react';
import Review from './Review';
import Header from './Header';
import SelectionImage from './SelectionImage';
import {Link} from 'react-router-dom';

class ReviewContainer extends Component {
    state = {
        reviews: [{title: "Yakuza_0"}]
    }

    render() {
        return (
            <div>
                <Header text="Reviews"/>
            <div>
                {this.state.reviews.map( review => {
                     return <SelectionImage title={review.title}/>
                })}
                </div>
                
            </div>
        );
    }
}

export default ReviewContainer;