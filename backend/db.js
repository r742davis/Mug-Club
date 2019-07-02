const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null,
};

exports.connect = (url, done) => {
    if(state.db) return done()

    MongoClient.connect(url, (error, db) => {
        if(error) return done(error)
        state.db = db
        done()
    })
};

exports.get = () => {
    return state.db
};

exports.close = (done) => {
    if(state.db) {
      state.db.close((error, result) => {
          state.db = null
          state.mode = null
          done(error)
      })
    }
}
