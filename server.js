// Required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('X-HTTP-Method-Override'));

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Route import and server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
