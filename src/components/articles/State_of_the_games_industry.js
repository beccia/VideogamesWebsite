import React, { Component } from 'react';
import Header from '../Header';

class State_of_the_games_industry extends Component {
    render() {
        return (
            <div>
                <Header text="The state of the games industry"/>
                <img src={require("../../images/state_of_the_games_industry.jpg")}></img>
            </div>
        );
    }
}

export default State_of_the_games_industry;