const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./logger.js');

//Dotenv configuration setup to read environment variables
const dotenv = require('dotenv');
dotenv.config();

//External routes

//Auth routes
const registerUserRouter = require("./routes/registerUser");
const loginUserRouter = require("./routes/loginUser");
const verifyToken = require('./services/verifyToken');


//App intilialization
const app = express();

//Middleware
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(logger);

//Assignment port to access the application
const {API_PORT} = process.env;
const port = process.env.PORT || API_PORT;

// set the view engine to ejs
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})

app.get('/error', (req, res) => {
    res.render('pages/error');
})

//Authentication requests
app.use("/register/user", registerUserRouter);
app.use("/login/user",loginUserRouter);

//app.use(express.static(path.join(__dirname,'')))

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})