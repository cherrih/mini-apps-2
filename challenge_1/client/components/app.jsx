import React from 'react';
import Search from './search.jsx';
import EventList from './eventList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    const url = 'http://localhost:3000/events';
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          events: data
        })
      })
  }

  render() {
    return (
      <div>
        <h2>Historical Events Finder</h2>
        <Search />
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;
