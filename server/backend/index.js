const express = require('express');
const path = require('path')
const app = new express();

//Adding a middleware to set the path for all static pages
app.use(express.static(path.join(__dirname, './build')));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
