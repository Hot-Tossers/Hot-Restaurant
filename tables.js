

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

    document.getElementById("#add-btn").addEventListener("click", function (event) {
        event.preventDefault();
        let newTable = new Table(
            document.getElementById("#uniqueid"),
            document.getElementById("#name"),
            document.getElementById("#phonenumber"),
            document.getElementById("#email")
        );
        tables.push(newTable);
        document.getElementById("#uniqueid").innerHTML("");
        document.getElementById("#name").innerHTML("");
        document.getElementById("#phonenumber").innerHTML("");
        document.getElementById("#email").innerHTML("");
    });
    module.exports = {
        tables: () => {
            return tables;
        }
    };
