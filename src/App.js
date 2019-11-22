import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ReviewContainer from './components/ReviewContainer';
import ArticleContainer from './components/ArticleContainer';
import Dragon_Quest_XI from './components/reviews/Dragon_Quest_XI';
import Yakuza_0 from './components/reviews/Yakuza_0';
import State_of_the_games_industry from './components/articles/State_of_the_games_industry'
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() { return (
    <div className="App">
      <div className="App-main">
        <NavBar/>

        <Route exact path="/" component={Home} />
        <Route exact path="/reviews" component={ReviewContainer} />
        <Route exact path="/components/reviews/Yakuza_0" component={Yakuza_0} />
        <Route exact path="/components/reviews/Dragon_Quest_XI" component={Dragon_Quest_XI} />


        <Route exact path="/articles" component={ArticleContainer} />
        <Route exact path="/components/articles/State_of_the_games_industry" component={State_of_the_games_industry} />


      </div>
    </div>
  );
}
}

export default App;
