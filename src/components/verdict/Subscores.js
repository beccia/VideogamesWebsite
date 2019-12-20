import React from 'react';
import Rating from '@material-ui/lab/Rating';

const SubScores = (props) => {
    return (
    <div className="subscores">
        Gameplay: <Rating value={props.ratings[0]} precision={0.5} readOnly size="small" /><br/>
        Story: <Rating value={props.ratings[1]} precision={0.5} readOnly size="small" /><br/>
        Immersion: <Rating value={props.ratings[2]} precision={0.5} readOnly  size="small"/><br/>
        Vibe: <Rating value={props.ratings[3]} precision={0.5} readOnly size="small" /><br/>
    </div>
    )
  }

  export default SubScores;