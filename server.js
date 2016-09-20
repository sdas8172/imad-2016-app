var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article One | Sandip Das",
    heading: "Article one",
    date:"sep 20 2016",
    content:`
            <p>
                This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application.
            </p>
            <p>
                This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application. This is the contain for my first web application.
            </p>`
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate = `
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="wdith=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req,res){
   res.send(createTemplate(articleOne)); 
});

app.get('/article2', function (req,res){
   res.sendFile(path.join(__dirname,'ui','article2.html')); 
});

app.get('/article3', function (req,res){
   res.sendFile(path.join(__dirname,'ui','article3.html')); 
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
