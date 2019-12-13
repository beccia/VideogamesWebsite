import React from 'react';
import { Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import ArticleContainer from './components/ArticleContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() { return (
    <div className="App">
      <div className="App-main">
        <NavBar/>

        <Route exact path="/" component={Home} />
        <Route exact path='/:handle' component={ArticleContainer} />
        <Route exact path="/reviews/:handle" component={Article} />
        <Route exact path="/articles/:handle" component={Article} />
        <Footer/>
      </div>
    </div>
  );
}
}

export default App;
