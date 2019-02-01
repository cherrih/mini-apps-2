import React from 'react';
import Event from './event.jsx';
import ReactPaginate from 'react-paginate';

const EventList = (props) => {
  let isReady = props.events.length;
  let list = props.events.map((event, i) => (<Event event={event} key={i}/>));
  return (
    <div>
      {isReady ? 
        <div>
          <div>{list}</div>
          <div id={'react-paginate'}>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={props.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={props.handlePageClick}
            />
          </div>
        </div>
        : 
        <div> Give me a moment... </div>
        }
    </div>
  )
}

export default EventList;
