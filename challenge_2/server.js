const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/bitcoin', (req, res) => {
  const start = '2018-12-01';
  const end = '2019-01-01';
  const options = {
    url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`,
    type: 'GET'
  }
  const callback = (err, response, body) => {
    if (err) {
      throw err;
    } 
    if (!err && response.statusCode === 200) {
      const info = JSON.parse(body)
      res.send(info.bpi);
    }
  }
  request(options, callback);
});

app.listen(port, () => {console.log(`listening on ${port}`)});
