import React from 'react';
import {Link} from 'react-router-dom';


const SectionSelectImage = (props) => {
{
        return (
            <div className="sectionselect">
<Link to={`./${props.domain}`}><img className="sectionselect-img" src={require(`../images/${props.title}.jpg`)}></img></Link>
<h2 className="sectionimagetext">{props.domain}</h2>
            </div>
        );
    }
}

export default SectionSelectImage;