module.exports = function (app) { 
  var { QueryTypes } = require("sequelize");
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
    
  
    orm.query('select * from sample', { type: QueryTypes.SELECT }).then(function (op){
      console.log(op);
  })
  
}