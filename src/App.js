import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ReviewContainer from './components/ReviewContainer';
import ArticleContainer from './components/ArticleContainer';
import Dragon_Quest_XI from './components/reviews/Yakuza_0';
import Yakuza_0 from './components/reviews/Yakuza_0';
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
       


      </div>
    </div>
  );
}
}

export default App;
