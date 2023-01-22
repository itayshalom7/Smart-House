import React from 'react'
import { Link } from 'react-router-dom';
import ShowRooms from './ShowRooms';



export default function MyRooms(props) {

    return (
        <div >
           <ShowRooms rooms={props.rooms}/>
            <Link to={"/"}><button>Back</button> </Link>
        </div>
    )
}
