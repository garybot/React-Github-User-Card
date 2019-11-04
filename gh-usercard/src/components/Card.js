import React from 'react';
// import axios from 'axios';
// import styled from 'styled-components'

const Card = (props) => {
  return (
    <div className="Card">
      <header className="Card-header">
      <h1>{props.user.name}</h1>
      </header>
    </div>
  );
}

export default Card;
