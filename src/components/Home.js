import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                Je boy


                <Link to="/reviews" >Reviews</Link>
                <Link to="/articles" >Articles</Link>
            </div>
        );
    }
}

export default Home;