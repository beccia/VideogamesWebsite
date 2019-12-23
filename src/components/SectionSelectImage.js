import React from 'react';
import {Link} from 'react-router-dom';


const SectionSelectImage = (props) => {
{
        return (
            <div className="sectionselect">
<Link to={`./sections/${props.domain}`}><img className="sectionselect-img" src={require(`../images/${props.title}.jpg`)}></img></Link>
            </div>
        );
    }
}

export default SectionSelectImage;