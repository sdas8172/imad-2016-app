var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'sdas8172',
    database: 'sdas8172',
    host: 'db_imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));


var articles = {
   "article1": {
    title: 'About Us | dailyfit',
    heading: 'About Us',
    date:"sep 20 2016",
    content:`
            <p>
                Well my name is Sandip Das. This is an free web application provide you a daily fitness. The main moto of the application "be healthy be happy".
            </p>
            <p>
                Today all human want to be live happy. If you want to live happy your health should be good. If your health is good your mind automatically good and you live a peacefull life. 
            </p>`
},
    "article2": {
    title: "BLOGS | dailyfit",
    heading: "BLOGS",
    date: "sep 30 2016",
    content: `<p>
                This is a new blog for fitness.
            </p>
            <p>
                Article will comming soon!!
            </p>`
},
    "article3": {
    title: "CONTACT US | dailyfit",
    heading: "CONTACT US",
    date: "sep 30 2016",
    content: `<p>
                NAME  Sandip Das <br>
                Mobile No  9674348796 <br>
                Email id  sdas8172@gmail.com
            </p>`
},
    "training": {
        title: "FIND your training | dailyfit",
        date: "nov 6 2016",
        heading: "FIND Multi Gym based on your locality",
        content: `<div>
        <div>
         Select Your City: <select>
             <option value="">Select</option>
             <option value="bangalore">Bangalore</option>
             <option value-"chennai">Chennai</option>
             <option value="jaipur">Jaipur</option>
             <option value="kolkata">Kolkata</option>
             <option value="mumbai">Mumbai</option>
         </select>
         </div>
         <div>
         Select Your Locality: <select>
             <option value="">Select</option>
             <option value="collegestreet">College Street</option>
             <option value-"rajarhat">Rajarhat</option>
             <option value="ruby">Ruby</option>
             <option value="dumdum">DumDum</option>
             <option value="saltlake">Saltlake</option>
         </select>
        </div>
        <div>
         <button>Search</button>
        </div>
        </div>`
        
    },
    "physiotherapy": {
        title: "Hire physiotherapist | dailyfit",
        date: "nov 6 2016",
        heading: "Hire physiotherapist with your choice",
        content: `<div>
         Select Your City: <select>
             <option value="">Select</option>
             <option value="bangalore">Bangalore</option>
             <option value-"chennai">Chennai</option>
             <option value="jaipur">Jaipur</option>
             <option value="kolkata">Kolkata</option>
             <option value="mumbai">Mumbai</option>
         </select>
        </div>`
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
        <style>
            div {
                  background-color: lightgrey;
                }
            body {margin:0;}
		    ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				overflow: hidden;
				background-color: #333;
				position: fixed;
			
				width: 100%;
              }

			li {
				float: left;
			}

			li a {
				display: block;
				color: white;
				padding: 16px;
				text-decoration: none;
			}
			h5 {
				color: white;
				text-decoration: none;
			}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="left text-big bold">
                <img id='web' src="/ui/icon.png" class="img-medium"/>
                dailyfit

            </div>
            <div>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/article1">ABOUT US</a></li>
                <li><a href="/article2">BLOGS</a></li>
                <li><a href="/training">TRAINING</a></li>
                 <li><a href="/physiotherapy">PHYSIOTHERAPY</a></li>
                <li><a href="/article3">CONTACT US</a></li>
                
              </ul>
                
            </div>
            <hr/>
            <div>
                ${date}
            </div>
            <div>
                <h3>${heading}</h3>
                
            </div>
            <div>
                ${content}
            </div>
            <hr/>
            <div>
                <input type="text" id="comment" placeholder="comment">
                <input type="submit" id="comment_btn" value="comment">
                <ul id="commentlist">
                    
                </ul>
            </div>
        </div>
        <div>
            <ul>
            <h5>follow us:</h5>
                <a href="https://www.facebook.com/sandip.das.9887" target="_blank">
                    <img src="/ui/facebook.png"/>
                </a>
                <a href="https://twitter.com/sandipd33" target="_blank" >
                    <img src="/ui/twitter.png"/>
                </a>
                <a href="https://sdas8172.wordpress.com/" target="_blank" >
                    <img src="/ui/wordpress.png"/>
                </a>
                <a href="https://plus.google.com/u/0/" target="_blank" >
                    <img src="/ui/google.png"/>
                </a>
                <a href="https://www.linkedin.com/profile/edit?trk=nav_responsive_sub_nav_edit_profile" target="_blank" >
                    <img src="/ui/linkedin.png"/>
                </a>
            </ul>
        </div>
    </body>
</html>`;
return htmlTemplate;

}

/*var comments=[];
app.get('/comment-name', function(req,res){// /comment-name?name=xxxx
   //get the comment from the request
   var comment=req.query.comment;
   
   comments.push(comment);
   //JSON: java script object notation
   res.send(JSON.stringify(comments));
});*/

var names=[];
app.get('/submit-name', function(req,res){// /submit-name?name=xxxx
   //get the name from the request
   var name=req.query.name;
   
   names.push(name);
   //JSON: java script object notation
   res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var pool = new Pool(config);
app.get('/test-db', function(req, res){
   //make a select request
   //return a response with the result
   pool.query('SELECT * FROM test', function(err, res){
      if(err) {
          res.status(500).send(err.toString());
      } 
      else {
          res.send(JSON.stringify(result.rows));
      }
   });
    
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/icon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'icon.png'));
});


app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});

app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});
app.get('/ui/wordpress.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'wordpress.png'));
});
app.get('/ui/google.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'google.png'));
});
app.get('/ui/linkedin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});
app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
