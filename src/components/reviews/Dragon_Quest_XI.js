import React, { Component } from 'react';
import Header from '../Header';

class Dragon_Quest_XI extends Component {
    render() {
        return (
            <div>
                <Header text="Dragon Quest XI review"/>
                <img src={require("../../images/Dragon_Quest_XI.jpg")}></img>
            </div>
        );
    }
}

export default Dragon_Quest_XI;