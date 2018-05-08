"use strict"

var React = require('react');
var AuthorApi = require('../../api/authorApi.js');
var AuthorList = require('./authorList.js');

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      authors:[]
    }
  }

  componentDidMount(){
    this.state.isMounted = true;
    this.setState({ authors: AuthorApi.getAllAuthors() })
  }

  componentWillUnmount(){
    this.state.isMounted = false;
  }

  render(){
    return(
      <div>
        <h1>Authors</h1>
        <AuthorList  authors={this.state.authors}/>
      </div>
    )
  }
}

module.exports.default = AuthorPage
