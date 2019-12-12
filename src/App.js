import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import ReviewContainer from './components/ReviewContainer';
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
        <Route exact path="/reviews" component={ReviewContainer} />
        <Route exact path="/reviews/Yakuza_0" component={Yakuza_0} />
        <Route exact path="/reviews/Dragon_Quest_XI" component={Dragon_Quest_XI} />


        <Route exact path="/articles" component={ArticleContainer} />
        <Route exact path="/articles/State_of_the_games_industry" component={State_of_the_games_industry} />
        <Route exact path="/articles/So_what_about_Death_Stranding" component={So_what_about_Death_Stranding} />



      </div>
    </div>
  );
}
}

export default App;
