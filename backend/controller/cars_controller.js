module.exports = function (app) {



    var { QueryTypes } = require("sequelize");
    var Buffer = require('safe-buffer').Buffer
    var multer = require("multer");
    var path = require("path");
    var fs = require("fs");
  
    var bodyParser = require("body-parser");
    app.use(bodyParser.json()); // to support JSON-encoded bodies
    app.use(
        bodyParser.urlencoded({
            // to support URL-encoded bodies
            extended: true,
        })
    );
  
    //CORS setttings
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, DELETE, OPTIONS"
        );
        next();
    });
}