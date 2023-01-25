
import React, { useState } from 'react';
import './App.css';
import HomePage from './component/HomePage';
import AddRoomPage from './component/AddRoomPage';
import Header from './component/Header';
import EditRoom from './component/EditRoom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyRooms from './component/MyRooms';


function App() {
  const [rooms, setRooms] = useState([])

  let addRoom = (room) => {
    setRooms([...rooms, room])
  }

  let addNewDeco = (name, newDeco) => {

    let r = rooms.map((i) => {
      if (i.name == name) {
        return ({ name: i.name, roomType: i.roomType, color: i.color, items: [...i.items, newDeco] })
      }
      else {
        return ({ name: i.name, roomType: i.roomType, color: i.color, items: i.items })
      }
    })
    setRooms(r)
  }

  let checkIfRoomInUse = (currentRoomName) => {
    let check=false
    rooms.map((i) => {
      if (currentRoomName == i.name)
        check=true
    })
    return check
  }
  let turnOnOrOff = (name, index, status) => {
    setRooms(rooms.map((i) => {
      if (i.name == name) {
        let l = i.items.map((i, n) => {
          if (n == index) {
            return { name: i.name, status: status }
          }
          else return i
        })
        console.log(i)
        return ({ name: i.name, roomType: i.roomType, color: i.color, items: l })
      }
      else {
        return ({ name: i.name, roomType: i.roomType, color: i.color, items: i.items })
      }
    }))
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/addroom'} element={<AddRoomPage addRoom={addRoom} checkIfRoomInUse={checkIfRoomInUse}/>} />
          <Route path={'/myrooms'} element={<MyRooms rooms={rooms} />} />
          {rooms.map((item) => { return (<Route path={"room/" + item.name} element={<EditRoom room={item} addNewDeco={addNewDeco} turnOnOrOff={turnOnOrOff} />} />); })}
        </Routes>
      </Router>
    </div>)
}
export default App;
