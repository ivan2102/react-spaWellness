import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

//get unique values for type and capacity
const getUnique = (rooms,value) => {

    return [...new Set(rooms.map(room => room[value]))];
}

export default function RoomsFilter({rooms}) {

    const context = useContext(RoomContext);

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type');

    //get all
    types = ['all', ...types];
    //map to jsx
    types = types.map((type,index) => {

        return <option value={type} key={index}>{type}</option>
    })

    //get unique capacity(1,2,3,4 number of people)
    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {

      return <option value={item} key={index}>{item}</option>
    })


  return (
    <section className="filter-container">
     <Title title="search rooms" />
     <form className="filter-form">
     {/* select type */}
     <div className="form-group">
     <label htmlFor="type">room type</label>
     <select 
     name="type" 
     id="type" 
     value={type} 
     className="form-control" 
     onChange={handleChange}>{types}</select>
     </div>
     {/* end of select type */}

     {/* guests */}
     <div className="form-group">
     <label htmlFor="capacity">guests</label>
     <select 
     name="capacity" 
     id="capacity" 
     value={capacity} 
     className="form-control"
     onChange={handleChange}>{people}</select>
     </div>
     {/* end of guests */}

     {/* room price */}
     <div className="form-group">
     <label htmlFor="price">room price ${price}</label>
     <input 
     type="range"
      name="price"
       id="price" 
       class="form-control" 
       value={price}
       onChange={handleChange}
       min={minPrice}
       max={maxPrice}/>
     </div>
     {/* end of room price */}

     {/* size */}
     <div className="form-group">
     <label htmlFor="size">room size</label>
     <div className="size-inputs">
     <input
     type="number"
     name="minSize"
     value={minSize}
     id="size"
     className="size-input"
     onChange={handleChange}/>

     <input
     type="number"
     name="maxSize"
     value={maxSize}
     id="size"
     className="size-input"
     onChange={handleChange}/>
     </div>
     </div>
     {/* end of size */}

     {/* checkboxes */}
     <div className="form-group">
     <div className="single-extra">
     <label htmlFor="breakfast">breakfast</label>
     <input 
     type="checkbox"
     name="breakfast"
     id="breakfast"
     checked={breakfast}
     onChange={handleChange}/>
     </div>

     <div className="single-extra">
     <label htmlFor="pets">pets</label>
     <input
     type="checkbox"
     name="pets"
     id="pets"
     checked={pets}
     onChange={handleChange}/>
     </div>
     </div>
     {/* end of checkboxes */}
     </form>
    </section>
  )
}
