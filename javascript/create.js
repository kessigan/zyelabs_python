var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bdc849a9bffd05',
  password : '91c4690c',
  database : 'heroku_463a04a6e32994b'
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE matric (emis INT, centre_number INT, name VARCHAR(255), wrote_2014 SMALLINT,passed_2014 SMALLINT, wrote_2015 SMALLINT,passed_2015 SMALLINT, wrote_2016 SMALLINT,passed_2016 SMALLINT,passrate_2014 FLOAT,passrate_2015 FLOAT,passrate_2016 FLOAT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});