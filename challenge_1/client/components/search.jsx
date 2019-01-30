import React from 'react';

const Search = (props) => {
  return (
    <form>
      <input type="text" placeholder="Show me events related to..." id="search-field"/>
      <input type="submit" value="Show events" id="search-submit"/>
    </form>
  )
}

export default Search;
