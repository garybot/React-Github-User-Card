import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard.js';
import FollowersList from './components/FollowersList.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "garybot",
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({user: res.data});
      })
      .then(res => {
        axios
          .get(`https://api.github.com/users/${this.state.username}/followers`)
          .then(res => {
            this.setState({followers: res.data});
          })
          .then(res => {
            console.log(this.state);
          })
          .catch(err => {console.log(err)})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>GH-UserCard</h1>
        </header>
        <main>
          <UserCard user={this.state.user}/>
          <FollowersList followers={this.state.followers}/>
        </main>
      </div>
    );
  }
}

export default App;
