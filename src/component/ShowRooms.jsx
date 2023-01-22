
import Room from './Room';

export default function ShowRooms(props) {
let sRoom=()=>{
  if(props.rooms.length==0){
  return (<h3>please create at least 1 room</h3>)}
  else{ return props.rooms.map((r) => {
    return <Room name={r.name} roomType={r.roomType} color={r.color} items={r.items} />
  })}

}
  return (
    <div >
      {sRoom()}
    </div>
  )
}
