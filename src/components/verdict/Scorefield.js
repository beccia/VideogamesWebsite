import React from 'react';

const ScoreField = (props) => {
    return (
    <div className="scorefield">
        <div className="score">{props.score}</div>
    </div>
    )
  }

  export default ScoreField;