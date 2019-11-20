import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ReviewContainer from './components/ReviewContainer';
import ArticleContainer from './components/ArticleContainer';
import Yakuza_0 from './components/reviews/Yakuza_0'
import './App.css';

class App extends Component {
  render() { return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>

        <Route exact path="/" component={Home} />
        <Route exact path="/reviews" component={ReviewContainer} />
        <Route exact path="/components/reviews/Yakuza_0" component={Yakuza_0} />


        <Route exact path="/articles" component={ArticleContainer} />
       


      </header>
    </div>
  );
}
}

export default App;
