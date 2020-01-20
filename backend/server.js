//----------------//
//  Dependencies  //
//----------------//
const app = require('./app.js');
const mongoose = require('mongoose');
const db = mongoose.connection;
const cors = require('cors');

//-------------------------//
//  Environment Variables  //
//-------------------------//
const port = process.env.PORT || 5000;
const database = 'mug_club';
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/' + database

//---------------------------//
//  App Listener: Port 5000  //
//---------------------------//
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

//------------------------//
//  Connect to Mongooose  //
//------------------------//
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('The connection with mongod is established');
})

//-----------------//
//  Error Messages //
//-----------------//
db.on('Error!', (err) => console.log(err.message + 'Is mongod not running?'))
db.on('Connected', () => console.log('Mongo connected: ', mongoURL))
db.on('Disconnected', () => console.log('Mongo Disconnected'))
