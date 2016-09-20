var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
   "article1": {
    title: 'About Us | dailyfit.com',
    heading: 'About Us',
    date:"sep 20 2016",
    content:`
            <p>
                Well my name is Sandip Das. This is an free web application provide you a daily fitness. The main moto of the application "be healthy be happy".
            </p>
            <p>
                Today all human want to be live happy. If you want to live happy your helth should be good. If your helth is good your mind automatically good and you live a peacefull life. 
            </p>`
},
    "article2": {
    title: "Article Two | Sandip Das",
    heading: "Article Two",
    date: "sep 21 2016",
    content: `<p>
                This new article for article two. This new article for article two. This new article for article two. This new article for article two.
            </p>
            <p>
                This new article for article two. This new article for article two. This new article for article two. This new article for article two.
            </p>`
},
    "article3": {
    title: "Article Three | Sandip Das",
    heading: "Article Three",
    date: "sep 22 2016",
    content: `<p>
                This new article for article three. This new article for article three. This new article for article three. This new article for article three. This new article for article three.
            </p>
            <p>
                This new article for article three. This new article for article three. This new article for article three. This new article for article three.
            </p>`
}
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
            <a href="/">HOME     </a>
            <a href="/article1">ABOUT US</a>
            
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

app.get('/:articleName', function (req,res){
    //articleName == articleOne
    // articles[articleName]=={} content of article one
    var articleName= req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/web-application-development1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'web-application-development1.png'));
});


app.get('/ui/wall.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wall.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
