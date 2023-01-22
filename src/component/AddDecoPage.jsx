import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddDecoPage(props) {
  const [errM, setErrM] = useState("")
  const [newItemName, setNewItemName] = useState("chooseItem")
  const [haveStereo,setHaveStereo] = useState(false)
  let checkItem = (event) => {

    if (props.room.items.length < 5) {
      let i = event.target.value
      if (i == "Stereo") {
        hasStereo()
        if (haveStereo) {
          setErrM("you can add stereo only 1 time to a room ")
        }
        else {
          setErrM("")
          setNewItemName(i)
        }
      }
      if (props.room.roomType == "Bathroom" && i == "Boiler") {
        setErrM("")
        setNewItemName(i)
      }
      else if (i == "Boiler") {
        setErrM("you can add boiler only to the bathroom")
      }
      else if (i != "chooseItem") {
        setErrM("")
        setNewItemName(i)
      }
      else {
        setErrM("please choose an item")
      }
    }
    else {
      setErrM("you cant add more than 5 items to a room");
    }

  }
  let hasStereo = () => {
   return  props.room.items.map((i) => {
      if (i.name == "Stereo"){
        setErrM("you can add stereo only 1 time to a room ")
        setHaveStereo(true)}
    })

  }
  let addItem = () => {
    hasStereo()
    if (props.room.items.length < 5) {
      if (newItemName == "Stereo") {

        if (haveStereo) {
          window.alert("you can add stereo only 1 time to a room data wasnt saved")
        }
        else{
          window.alert("item was added");
          props.addNewDeco(props.room.name, { name: newItemName, status: false })
        }
      }
      else if (props.room.roomType == "Bathroom" && newItemName == "Boiler") {
        window.alert("item was added");
        props.addNewDeco(props.room.name, { name: newItemName, status: false })
      }
      else if (newItemName == "Boiler") {
        window.alert("you can add boiler only to the bathroom  product wasnt saved")
      }
      else if (newItemName != "chooseItem") {
        window.alert("item was added");
        props.addNewDeco(props.room.name, { name: newItemName, status: false })
      }
      else {
        window.alert("wrong information product wasnt saved");
      }
      props.setAddPage(false)
    }
    else {
      window.alert("you cant add more than 5 items to a room");
    }
  }

  return (
    <div>
      <h2>Add new item to the room</h2>
      <select name="items" id="items" onChange={checkItem}>
        <option value="chooseItem">Choose item</option>
        <option value="Lamp">Lamp</option>
        <option value="Stereo">Stereo</option>
        <option value="Boiler">Boiler</option>
        <option value="AirCondition">Air condition</option>
      </select>
      <h4>{errM}</h4>

      <Link to={"/"}> <button onClick={addItem}>Add item</button></Link>
    </div>

  )
}
