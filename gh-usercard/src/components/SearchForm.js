import React from 'react';
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {username: ""}
  }
  handleChange = (evt) => {
    this.setState({username: evt.target.value});
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.changeUser(this.state.username);
    this.setState({username: ""});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          type="text" 
          name="username" 
          placeholder="Search for a GH User"
          value={this.state.username}
          onChange={this.handleChange} 
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchForm;