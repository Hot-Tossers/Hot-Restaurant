// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log("default")
};

app.get("/tables"), (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
    console.log("tables page")
};

app.get("/reservation"), (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
    console.log("reservation page")
};

app.get("/api/tables"), (req, res) => {
    console.log("api route for tables")
};

app.get("/api/waitlists"), (req, res) => {
    console.log("api route for waitlists")
};