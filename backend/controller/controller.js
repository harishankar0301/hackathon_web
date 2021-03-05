module.exports = function (app) { 


  // exports.mailto = function (eadd) {

//   };


  var { QueryTypes } = require("sequelize");

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
    app.get('/test', function (req, res) {
        res.send({ resp: "This is from backend!!!" });
    })

  

  const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, "./uploads/");
    },
    filename: (req, file, callBack) => {
      callBack(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });


  app.post('/api/loginv', function (req, res) {
    let email = req.body.email;
    let pwd = req.body.password;
    console.log(req.body);
    orm.query(`SELECT * FROM users where email='${email}'`, { type: QueryTypes.SELECT }).then(function (op) {
      console.log(op);
      if (op.length > 0) {
        let pwdRes = op[0]['password'];
        if (pwdRes == pwd) {
          res.send({ resp: "AUTHORIZED" });
        }
        else {
          res.send({ resp: "UNAUTHORIZED" });
        }

      }
      else {
        res.send({ resp: "UNAUTHORIZED" });
      }
    })

  })

  app.post('/api/signup', function (req, res) {
    let email = req.body.email;
    let name = req.body.name;
    let pwd = req.body.password;

    orm.query(`INSERT INTO users (email,name,password) values('${email}','${name}','${pwd}')`);

    res.send({ resp: "SUCCESS" });
  });


  app.post('/api/reset', function (req, res) {
    let email = req.body.email;
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ssquarecsquare@gmail.com',
        pass: 'rkacmceg'
      }
    });

    var mailOptions = {
      from: 'ssquarecsquare@gmail.com',
      to: email,
      subject: 'Forgot Password',
      text: 'Forgot Password'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
  // app.post("/multipleFiles", upload.array("files"), (req, res, next) => {

  //   const files = req.files;
  //   files.forEach(async (element) => {
  //     console.log(element.originalname);
  //   })
  // });
  // app.post('/api/reset',function())

}