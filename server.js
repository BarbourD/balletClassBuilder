//DEPENDENCIES
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const lessonsController = require('./controllers/lessons.js');
// const combosController = require('./controllers/combos.js');
// const router = require('./controllers/classes.js');
const PORT = process.env.PORT || 3000;


//DATABASE CONFIG
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo is connected'));
db.on('disconnected', () => console.log('mongo is disconnected'));

//MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
// app.use('/combos', combosController);
app.use('/lessons', lessonsController);


app.get('/', (req, res) => {
    res.render('index.ejs');
})

// maker
// app.get('/maker', (req, res) => {
//     res.render('maker.ejs');
// }); 

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})