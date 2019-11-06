import React from 'react';

const FollowerCard = (props) => {
  const user = props.user
  return (
    <div key={user.id} className="follower-card" onClick={() => {props.changeUser(user.login)}}>
      <img src={user.avatar_url} alt={user.login} className="follower-avatar" />
      <div className="follower-details">
        <h2>{user.login}</h2> 
      </div>
    </div>
  )
}
export default FollowerCard;