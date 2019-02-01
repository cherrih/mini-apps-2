import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Show me events related to..." id="search-field" value={props.value} onChange={props.handleChange}/>
      <input type="submit" value="Show events" id="search-submit"/>
    </form>
  )
}

export default Search;
