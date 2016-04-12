/**
 * Created by liuzheng on 4/12/16.
 */
var express = require('express');
var app = express();
app.use(express.static('.'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/dashboard', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.listen(8001)