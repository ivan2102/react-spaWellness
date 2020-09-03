import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {  withRoomConsumer } from '../Context';
import Loading from './Loading';

//export default function RoomsContainer() {
 // return (
   
  //  <RoomConsumer>
    //{
       // (value) => {
         function RoomContainer({context}) {
            const {loading,sortedRooms,rooms} = context;

            if(loading) {

                return <Loading/>;
            }

            return(
            <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
          </div>
            )
       // }
    }

    export default withRoomConsumer(RoomContainer);
   // </RoomConsumer>

 // )
//}
