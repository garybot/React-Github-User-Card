import React from 'react';
// import axios from 'axios';
// import styled from 'styled-components'

const UserCard = (props) => {
  const user = props.user;
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <div className="user-details">
        <h1>{user.name}</h1>
        <p>{user.location}</p>
        <p>{user.bio}</p>
        <a href={user.html_url}>{user.html_url}</a>
      </div>
    </div>
  );
}

export default UserCard;
