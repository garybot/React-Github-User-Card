import React from 'react';
import FollowerCard from './FollowerCard.js';

const FollowersList = (props) => {
  return (
    <div>
      <h2>Followers</h2>
      <div className="followers-list">
      {
        props.followers.map(user => {
          return (
            <FollowerCard user={user} />
          )
        })
      }
      </div>
    </div>
  )
}
export default FollowersList
