// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const database = require("./database.js")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "hotRestauranthome.html"));
    console.log("default")
};

app.get("/tables"), (req, res) => {
    res.sendFile(path.join(__dirname, "hotRestauranttables.html"));
    console.log("tables page")
};

app.get("/reservation"), (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
    console.log("reservation page")
};

app.get("/api/tables"), (req, res) => {
    console.log("api route for tables")
    // return res.json(tables);
};

app.get("/api/waitlists"), (req, res) => {
    console.log("api route for waitlists")
    // return res.json(waitlists);
};

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.post("/api/reservations", function(req, res) {
    let results = req.body;
    if (database.reservations.length > 5) {
        database.reservations.push(results);
        console.log("reservations stored")
    } else {
        database.waitlist.push(results);
        console.log("waitlist stored")
    }
});