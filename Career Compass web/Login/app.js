const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter');
const port = process.env.PORT || 8080;

const app = express();
app.set('views','./views')
app.set('view engine','ejs')

// Middleware setup - order is important
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session configuration - place this before routes
app.use(session({
    secret: '416411654161',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Authentication middleware
const checkAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
        return next();
    }
    res.redirect('/');
};

// Landing page route with combined login/signup forms
app.get('', (req, res) => {
    if (req.session.userId) {
        return res.redirect('/dashboard');
    }
    res.render('landing');
});

// Login form route
app.get('/login-form', (req, res) => {
    if (req.session.userId) {
        return res.redirect('/dashboard');
    }
    res.render('login', { error: req.session.error });
    delete req.session.error;
});

// Signup form route
app.get('/signup-form', (req, res) => {
    if (req.session.userId) {
        return res.redirect('/dashboard');
    }
    res.render('signup', { error: req.session.error });
    delete req.session.error;
});

// Protected routes - require authentication
app.get('/dashboard', checkAuth, (req, res) => {
    res.render('dashboard', { name: req.session.userName });
});

app.get('/iq', checkAuth, (req,res) => {
    res.render('iq',{text: 'iq'})
});

app.get('/trivia', checkAuth, (req,res) => {
    res.render('trivia',{text: 'trivia'})
});

app.get('/chat', checkAuth, (req,res) => {
    res.render('chat',{text: 'chat'})
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Use the homeRouter for all other routes
app.use('/', homeRouter);

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/studentsdata', { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", () => { console.log("Error in database connection"); });
db.once('open', () => { console.log("Connected to AI Career Navigator database"); });

app.listen(port, () => {
    console.log(`CareerCompass server is running on port ${port}`);
});
