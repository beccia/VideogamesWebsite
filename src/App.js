import React from 'react';
import { Component} from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import './App.css';

class App extends Component {
  render() { return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>

        <Route exact path="/" component={Home} />
        <Route exact path="/reviews" component={Reviews} />
       


      </header>
    </div>
  );
}
}

export default App;
