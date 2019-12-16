import React from 'react';

const ArticleText = (props) => {
    return (
    <div className="article-main-text">
<p>{props.text}</p>
<img className="article-img" src={require(`../images/${props.firstimage}.jpg`)}></img>
<p>{props.text}</p>
<img className="article-img" src={require(`../images/${props.secondimage}.jpg`)}></img>
<p>{props.text}</p>
<img className="article-img" src={require(`../images/${props.thirdimage}.jpg`)}></img>
    </div>
    )
  }

  export default ArticleText;