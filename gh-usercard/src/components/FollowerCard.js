import React from 'react';

const FollowerCard = (props) => {
  const user = props.user
  return (
    <a href={user.url} key={user.id} className="follower-card">
      <img src={user.avatar_url} alt={user.login} className="follower-avatar" />
      <h2>{user.login}</h2>
    </a>
  )
}
export default FollowerCard;