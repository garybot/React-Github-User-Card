import React from 'react';

const Followers = (props) => {
  return (
    <div>
      <h2>Followers</h2>
      <div className="followers-list">
      {
        props.followers.map(user => {
          return (
            <a href={user.url} key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <h2>{user.login}</h2>
            </a>
          )
        })
      }
      </div>
    </div>
  )
}
export default Followers
