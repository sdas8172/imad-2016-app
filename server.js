var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req,res){
   res.send("Article one served here"); 
});

app.get('/article2', function (req,res){
   res.send("Article two served here"); 
});

app.get('/article3', function (req,res){
   res.send("Article three served here"); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/web-application-development1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'web-application-development1.png'));
});


app.get('/ui/back.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'back.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
