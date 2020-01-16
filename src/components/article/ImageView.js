import React, { Component } from 'react';

class ImageView extends Component {

render () {
    const {handle} = this.props.match.params;
    console.log(handle);
    return (
        <div className="image-view-container">
            <div className="image-view-body">
                <img className ="article-img" src={require(`../../images/${handle}`)}/>
            </div>
        </div>
    )
  }

}

  export default ImageView;