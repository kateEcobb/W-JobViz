var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes.js');
var cors = require('cors');

var port = process.env.PORT || 8080;
var app = express();

//middleware =======
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

//routes =========
routes(app);

app.use(express.static(__dirname + '/../build'));

app.listen(port);
console.log("Server now listening on port " + port);
