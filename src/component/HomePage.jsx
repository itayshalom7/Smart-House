import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

  return (
    <div>
        <h3>Welcome to our smart house website in order to strat please click on add room </h3>
        <h3>here you can create up to 5 items per room </h3>
        <Link to={"/addroom"}><button>Add Room</button></Link>
        <Link to={"/myrooms"}><button>my Rooms</button></Link>
    </div>
  )
}
