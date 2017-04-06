var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('data/db.json');


server.listen(3000, function () {
  console.log ('JSON Server is running in port 3000');
});