import React, { Component } from 'react';

class ImageView extends Component {

render () {
    const {handle} = this.props.match.params;
    console.log(handle);
    return (
        <div>
   <img className ="article-img" src={require(`../../images/${handle}`)}/>
    </div>
    )
  }

}

  export default ImageView;