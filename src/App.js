import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import ArticleContainer from './components/ArticleContainer';
import Dragon_Quest_XI from './reviews/Dragon_Quest_XI';
import Yakuza_0 from './reviews/Yakuza_0';
import State_of_the_games_industry from './articles/State_of_the_games_industry'
import NavBar from './components/NavBar';
import './App.css';
import So_what_about_Death_Stranding from './articles/So_what_about_Death_Stranding';

class App extends Component {
  render() { return (
    <div className="App">
      <div className="App-main">
        <NavBar/>

        <Route exact path="/" component={Home} />
        <Route exact path='/:handle' component={ArticleContainer} />
        <Route exact path="/reviews/:handle" component={Article} />
        <Route exact path="/articles/:handle" component={Article} />
      </div>
    </div>
  );
}
}

export default App;
