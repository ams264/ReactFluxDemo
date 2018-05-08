"use strict"

var React = require('react');
import { Route } from 'react-router-dom';
var HomePage = require('./components/homePage.js');
var About = require('./components/about/aboutPage.js');
var Authors = require('./components/authors/authorPage.js');

class RouteHandler extends React.Component{
  render(){
    return(
      <div>
        <Route exact path="/" component={ HomePage } />
        <Route path="/about" component={ About } />
        <Route path="/authors" component={ Authors } />
      </div>
    )
  }
}

module.exports.default = RouteHandler;
