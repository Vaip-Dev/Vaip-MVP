if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');





const app = express();
app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))







app.get('/', (req, res) => {

    res.render('home')
})











const port = process.env.PORT

app.listen(port, () => {
    console.log(`SERVING ON PORT${port}`)
})