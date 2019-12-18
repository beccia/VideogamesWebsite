import React from 'react';
import HorizontalImages from '../HorizontalImages';

const ArticleText = (props) => {
    return (
    <div className="article-main-text">
<p>{props.text1}</p>
<HorizontalImages number="0" title={props.title}/>
<p>{props.text2}</p>
<HorizontalImages number="1" title={props.title}/>
<p>{props.text3}</p>
    </div>
    )
  }

  export default ArticleText;