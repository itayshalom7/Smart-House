import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddRoomPage(props) {
    const [color, setColor] = useState("")
    const [name, setName] = useState("")
    const [roomType, setRoomType] = useState("")
    const [errMT, setErrMT] = useState("")
    const [errMN, setErrMN] = useState("")

    let checkRoomType = (event) => {
        let t = event.target.value
        setRoomType(t)
        if (t == "chooseType") {
            setErrMT("please select room type")
        }
        else {
            setErrMT("")
        }
    }
    let checkname = (event) => {
        let n = event.target.value
        setName(n)
        if (n.length == 0 || n.length > 5) {
            setErrMN("please fillup a valid room name - (between 1 to 5 chars)")
        }
        else if(props.checkIfRoomInUse(n)){
        setErrMN("name already in use")}
        else {
            setErrMN("")
        }

    }
    let checkColor = (event) => {
        setColor(event.target.value)
    }

    let create = () => {
        let l = []
        if (roomType != "chooseType" && name != "" && name.length > 0 && color != "" &&!props.checkIfRoomInUse(name)) {
            props.addRoom({ name: name, roomType: roomType, color: color, items: [] })
        }
        else {
            window.alert("room filled incorrectly data isnt saved");
        }
    }

    return (
        <div>
            <h2>Add room</h2>
            <select name="Rooms" id="Rooms" onChange={checkRoomType}>
                <option value="chooseType">Choose room's type</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Livingroom">LivingRoom</option>
                <option value="Kitchen">Kitchen</option>
            </select>
            <h4>{errMT}</h4>

            <input type="text" onChange={checkname} placeholder='Please enter room name' maxLength="5" />
            <h4>{errMN}</h4>

            <label htmlFor="colorpicker">Room Color Picker:</label>
            <input type="color" id="colorpicker" value="#0000ff" onChange={checkColor} />
            <br></br>
            <Link to={"/"}><button onClick={create}>+</button></Link>
            <Link to={"/"}><button >back</button></Link>
        </div>
    )
}
