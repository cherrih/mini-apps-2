import React from 'react';
import {Line as LineChart} from 'react-chartjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      prices: []
    }
  }

  componentDidMount() {
    fetch('/bitcoin')
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          dates: Object.keys(myJson),
          prices: Object.values(myJson)
        })
      })
      .catch(err => console.error('ERROR: ', err))
  }

  render() {
    const { dates, prices } = this.state;
    const data = {
      labels: dates,
      datasets: [
        {
          label: 'Some nonsense',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: prices,
        },
      ]
    }
    return (
    <div>
      <h2>give me the deets on bitcoin</h2>
      <div className="chart-container">
        <LineChart data={data} width="1100" height="600"/>
      </div>
      <div>Powered by <a href="https://www.coindesk.com/price/">CoinDesk</a></div>
    </div>
    )
  }
}

export default App;
