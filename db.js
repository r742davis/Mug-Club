const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017'

// function connect(url) {
//   return MongoClient.connect(url).then(client => client.db())
// }
//
// module.exports = function() {
//   let database = connect(mongoURI)
//
//   return database;
// }

module.exports = () => {
  MongoClient.connect('mongodb://localhost:27017/mug_club', function (err, client) {
    if (err) throw err

    const database = client.db('mug_club')

    return database.collection('customers');
  })
};
