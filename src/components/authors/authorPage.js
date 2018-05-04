"use strict"

var React = require('react')
var AuthorApi = require('../../api/authorApi.js')

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authors:[] };
  }

  UNSAFE_componentWillMount(){
    this.setState({ authors: AuthorApi.getAllAuthors() })
  }

  render(){
  function createAuthorRow(author){
      return(
        <tr key={author.id}>
          <td><a href={"./#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    }
    return(
      <div>
        <h1>Authors</h1>
        <table className='table'>
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Authors
