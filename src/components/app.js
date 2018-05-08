/*eslint-disable strict*/

var React = require('React');
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Header = require('./common/header.js');
var RouteHandler = require('../routes.js');
$ = jQuery = require('jquery');

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <BrowserRouter>
            <RouteHandler />
        </BrowserRouter>
      </div>
    );
  };
}

module.exports.default = App;
