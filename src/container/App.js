import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Element } from 'react-scroll';

import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Element name="home" id="home" className="element">
            <Home></Home>
          </Element>
          <Element name="portfolio" id="portfolio">
            <Portfolio></Portfolio>
          </Element>
          <Element name="about" id="about">
            <About></About>
          </Element>
        </div>
      </div>
    );
  }
}
