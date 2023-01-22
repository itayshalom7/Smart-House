import React from 'react'
import { Link } from 'react-router-dom';

export default function Room(props) {
  return (
    <Link to={"/room/"+props.name}>
    <div class={'room-button-style'}  style={{backgroundColor:props.color}}>
        <h1>{props.name}</h1>
    </div>
    </Link>
  )
}
