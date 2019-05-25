const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => {
  res.send('root route')
});

// Starting Server
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`);
})
