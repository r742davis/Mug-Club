//  Dependencies  //
//----------------//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

const User = require('./models/userSchema.js')

//  Routes  //
//----------//
app.get('/', (req, res) => {
  res.send('Root Route Works!')
});

app.get('/users', (req, res) => {
  res.send('You have reached the users page.')
})

//  Customers Controller  //
//------------------------//
const customersController = require('./controllers/Customers.js');
app.use('/customers', customersController);


//  Environment Variables  //
//-------------------------//
const port = process.env.PORT || 5000;
const database = 'mugClubUsers';
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + database

//  App Listener: Port 5000  //
//---------------------------//
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

// //  Connect to Mongooose  //
// //------------------------//
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('The connection with mongod is established');
})

//  Error Messages //
//-----------------//
db.on('Error!', (err) => console.log(err.message + 'Is mongod not running?'))
db.on('Connected', () => console.log('Mongo connected: ', mongoURI))
db.on('Disconnected', () => console.log('Mongo Disconnected'))


// //Test Section
// const firstUser = {
//   FirstName: 'Jacob',
//   LastName: 'Burger'
// };
//
// User.create(firstUser, (error, user) => {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(user);
//   }
// })
