const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');
require('./config/config');
console.log(process.env.GOOGLE_API_KEY);
app.use('/', routes);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})