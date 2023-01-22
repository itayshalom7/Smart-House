import React from 'react'
import { useState } from 'react'

export default function (props) {
  const name=props.item.name
  let changeStatus=()=>{
    console.log(!props.item.status)
    props.turnOnOrOff(props.name,props.n ,!props.item.status)
  }
  let printI=()=>{
    if(!props.item.status)
    return <img className='items' src={process.env.PUBLIC_URL+"/buttons/off.png"} onClick={changeStatus}></img>
    else
    return <img className='items' src={process.env.PUBLIC_URL+"/buttons/on.png"} onClick={changeStatus}></img>
  }
  return (
    <div>
      <h2 className='items'>{name}</h2>
      {printI()}
      <br></br>

      
    </div>
  )
}