if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require("connect-mongo");
const userRoutes = require('./routes/users');
const User = require('./models/user');


const app = express();
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.DB_URL
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


const secret = process.env.SECRET || 'thisshouldbeabettersecret';

const store = MongoStore.create({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 4 * 12,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 4 * 12
    }
}

app.use(session(sessionConfig));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    // res.locals.returnTo = req.originalUrl;
    // console.log(`app.use....${req.session.returnTo}`)  
    // console.log(req.query)
    res.locals.currentUser = req.user;
    next();
})

app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.send('home')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`SERVING ON PORT${port}`)
})