import React from 'react';

const Event = (props) => {
  return (
    <div className="event-container">
      <div className="event-date">{props.event.date}</div>
      <div className="event-description">{props.event.description}</div>  
      <div className="event-category2">{props.event.category2}</div> 
    </div>
  )
}
export default Event;
