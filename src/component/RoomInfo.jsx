import React from 'react'
import Item from './Item'

export default function RoomInfo(props) {
    let showItems = () => {
        if (props.room.items.length > 0) {
            return props.room.items.map((i, n) => {
                return (<Item name={props.room.name} item={i} n={n} turnOnOrOff={props.turnOnOrOff} />)
            })
        }
        else{
            return (<h4>no available items please add one</h4>)
        }
    }
    return (
        <div class='room-style'>
            <h2>Edit the Room</h2>
            <h3>Room-Name: {props.room.name}</h3>
            <h3>Room-Type: {props.room.roomType}</h3>
            <h3>Current items list:</h3>
            {showItems()}

        </div>
    )
}
