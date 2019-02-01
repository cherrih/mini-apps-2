import React from 'react';
import Search from './search.jsx';
import EventList from './eventList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      events: [],
      value: '',
      pageCount: null,
      pageNum: 1
    }
  }

  clickQuery(pageNum) {
    const url = `http://localhost:3000/events?q=${this.state.value}&_page=${pageNum}`;
    fetch(url)
      .then(resp => {
        this.setState({
          pageCount: Number(resp.headers.get('X-Total-Count') / 10)
        })
        return resp.json()
      })
      .then(data => {
        this.setState({
          events: data
        })
      })
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.clickQuery(this.state.num);
  }

  handlePageClick(data) {
    this.clickQuery(data.selected + 1);
  }

  componentDidMount() {
    this.clickQuery(1);
  }

  render() {
    return (
      <div>
        <h2>Historical Events Finder</h2>
        <Search handleChange={this.handleChange.bind(this)} value={this.state.value} handleSubmit={this.handleSubmit.bind(this)}/>
        <EventList events={this.state.events} pageCount={this.state.pageCount} handlePageClick={this.handlePageClick.bind(this)}/>
      </div>
    )
  }
}

export default App;
