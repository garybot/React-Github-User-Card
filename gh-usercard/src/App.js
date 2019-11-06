import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard.js';
import FollowersList from './components/FollowersList.js';
import SearchForm from './components/SearchForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "garybot",
      userObj: {},
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.fetchUserData();
    }
  }
  fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({userObj: res.data});
      })
      .then(res => {
        axios
          .get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(res => {
            this.setState({followers: res.data});
          })
          .catch(err => {console.log(err)})
      })
      .catch(err => console.log(err))
  }
  changeUser = (username) => {
    this.setState({user: username});
  }

  render() {
    return (
      <div className="App">
        <main className="card-section">
          <SearchForm changeUser={this.changeUser} />
          <UserCard user={this.state.userObj}/>
          <FollowersList followers={this.state.followers} changeUser={this.changeUser}/>
        </main>
      </div>
    );
  }
}

export default App;
