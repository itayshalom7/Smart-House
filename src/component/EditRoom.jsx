import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddDecoPage from './AddDecoPage'
import RoomInfo from './RoomInfo'



export default function EditRoom(props) {
  const [addPage, setAddPage] = useState(true)

    let whatPageToShow=()=>{
      if(addPage){
        return <RoomInfo room={props.room} turnOnOrOff={props.turnOnOrOff}/>
      }
      else {
        return <AddDecoPage room={props.room} setAddPage={setAddPage}  addNewDeco={props.addNewDeco}/>
      }
    }
    let changeAddPage=()=>{
      setAddPage(!addPage)}
      let changeMssage=()=>{
      if(addPage){
        return("Add item")
      }
      else{
      return("to the room info")}
    }

  return (
    <div>
        {whatPageToShow()}
      <button onClick={changeAddPage}>{changeMssage()}</button>
      <Link to={"/myrooms"}><button>back to my rooms list</button></Link>
    </div>
  )
}
