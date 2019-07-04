const express = require('express');
const app = express();

//----------//
//  Routes  //
//----------//
app.get('/', (req, res) => {
  res.send('Root Route Works!')
});

app.get('/users', (req, res) => {
  res.send('You have reached the users page.')
})

module.exports = app;
