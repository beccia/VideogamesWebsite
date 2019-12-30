import React from 'react';
import HorizontalImages from '../HorizontalImages';

const ArticleText = (props) => {
    var text1 = props.text1.toString().replace(/\\n/g, '\n\n');
    var text2 = props.text2.toString().replace(/\\n/g, '\n\n');
    var text3 = props.text3.toString().replace(/\\n/g, '\n\n');
    return (
    <div className="article-main-text">
<p>{text1}</p>
<HorizontalImages number="0" title={props.title}/>
<p>{text2}</p>
<HorizontalImages number="1" title={props.title}/>
<p>{text3}</p>
    </div>
    )
  }

  export default ArticleText;