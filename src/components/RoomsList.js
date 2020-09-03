import React from 'react'
import Rooms from '../pages/Rooms';
import Room from './Room';
export default function RoomsList({rooms}) {

    if(rooms.length === 0) {
  return (
    <div className="empty-search">
     <h3>no parameters for your search</h3> 
    </div>
  )
}

return <section className="roomslist">
<div className="roomslist-center">
{rooms.map(room => {
    return <Room key={room.id} room={room}/>
})}
</div>
</section>


}
