import React from 'react';
import {Link} from 'react-router-dom';


const SelectionImage = (props) => {
{
        return (
            <div>
                <Link to={`./${props.domain}/${props.title}`}><img className="selection-img" src={require(`../images/${props.title}.jpg`)}></img></Link>
            </div>
        );
    }
}

export default SelectionImage;