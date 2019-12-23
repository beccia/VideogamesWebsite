import React from 'react';
import { Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './components/page/Home';
import Article from './components/article/Article';
import ArticleContainer from './components/ArticleContainer';
import NavBar from './components/page/NavBar';
import AboutMe from './components/page/AboutMe';
import AboutThis from './components/page/AboutThis';
import Footer from './components/page/Footer';
import './App.css';


class App extends Component {
  render() { return (
    <div className="App">
      <div className="App-main">
        <NavBar/>

        <Route exact path="/" component={Home} />
        <Route exact path='/sections/:handle' component={ArticleContainer} />
        <Route exact path="/sections/reviews/:handle" component={Article} />
        <Route exact path="/sections/articles/:handle" component={Article} />
        <Route exact path="/about_this" component={AboutThis} />
        <Route exact path="/about_me" component={AboutMe} />
        <Footer/>
      </div>
    </div>
  );
}
}

export default App;
