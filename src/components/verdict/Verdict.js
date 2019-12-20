import React from 'react';
import ScoreField from './Scorefield';
import SubScores from './Subscores';

const Verdict = (props) => {
    return (
<div className="verdict">
    
<ScoreField score={props.score}className="score"/>
<div className="verdict-text-container">
    <p>{props.conclusion}</p>
    <div className="subscores-container">
<SubScores ratings={props.subratings}></SubScores>
</div>
</div>
</div>
)}

  export default Verdict;