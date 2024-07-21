var express = require('express');
const app = express();
const db = require('./db');


const bodyParser = require('body-parser');


const personRoutes = require('./routes/personRoutes');
    app.use('/person',personRoutes);// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Welcome to my restaurant...');
});



const menuRoutes = require('./routes/menuRoutes');
    app.use('/menu',menuRoutes);

app.listen(3025, () => {
    console.log('Listening on port 3025');
});
 