"use strict";
var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className = "jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>Using ReactJS with Flux and React
        Router to create an ultra responsive web app.</p>
      </div>
    )
  }
}

module.exports = Home;
