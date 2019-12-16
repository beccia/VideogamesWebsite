import React from 'react';
import HorizontalImages from './HorizontalImages';

const ArticleText = (props) => {
    return (
    <div className="article-main-text">
<p>{props.text}</p>
<HorizontalImages number="0" title={props.title}/>
<p>{props.text}</p>
{/* <img className="article-img" src={require(`../images/${props.secondimage}.jpg`)}></img>
<p>{props.text}</p>
<img className="article-img" src={require(`../images/${props.thirdimage}.jpg`)}></img> */}
    </div>
    )
  }

  export default ArticleText;