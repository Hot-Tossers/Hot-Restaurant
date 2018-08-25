$(document).ready(function () {

    // let express = require("express");
    // let bodyParser = require("body-parser");
    // let path = require("path");

    // let app = express();
    // const PORT = 3000;
    let tables = [];
    console.log("its linked");

    function Table(u_ID, name, phone_num, email) {
        this.u_ID = u_ID;
        this.name = name;
        this.phone_num = phone_num;
        this.email = email;
    };

    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        let newTable = new Table(
            $("#uniqueid").val().trim(),
            $("#name").val().trim(),
            $("#phonenumber").val().trim(),
            $("#email").val().trim()
        );
        tables.push(newTable);
        console.log(tables);
        $("#uniqueid").val("");
        $("#name").val("");
        $("#phonenumber").val("");
        $("#email").val("");
    });
    export {tables};

    // if (tables.length > 4) {
    //     tables.push(waitlist);

    // $.post("/api/tables", newTable)
    // .then(function(data){
    //     console.log("reservations.html")
    // });

});