import React from 'react';
import Event from './event.jsx';

const EventList = (props) => {
  return (
    <div>
      {props.events.length ? 
        <div>
          {props.events.map((event, i) => {
            return <Event event={event} key={i}/>
          })}
        </div>
        : 
        <div> Give me a moment... </div>
        }
    </div>
  )
}

export default EventList;
