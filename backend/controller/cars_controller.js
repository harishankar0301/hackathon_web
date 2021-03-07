import { v4 as uuidv4 } from 'uuid';
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
    
    app.post('/api/carsup', function (req, res) {
        let model = req.body.model;
        let uid = uuidv4();
        let isrented = req.body.isrented;
        let pic = req.body.pic;
        let owner = req.body.owner;
        let price = req.body.price;
        orm.query(`INSERT INTO cars (model,uid,isrented,pic,owner,price) values('${model}','${uid}','${isrented}','${pic}','${owner}','${price}')`);
        res.send({ resp: "SUCCESS" });
      });
}