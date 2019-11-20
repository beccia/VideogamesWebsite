import React from 'react';
import {Link} from 'react-router-dom';


function SelectionImage (props) {
{
        return (
            <div>
                <Link to={`./components/reviews/${props.title}`}><img src={require(`../images/${props.title}.jpg`)}></img></Link>
            </div>
        );
    }
}

export default SelectionImage;