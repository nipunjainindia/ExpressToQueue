const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3022;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', urlencodedParser, (req, res) => {
    res.send('Got a post request: ' + JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});