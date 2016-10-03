console.log('Loaded!');

//counter code
var button = document.getElementById('counter');
button.onclick=function(){
    //create a request object
    var request= new XMLHttpRequest();
    
    //capture the reponse and store in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take a action
          if(request.status ===200){
              var counter = request.responseText;
              var span= document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }  
      //not done yet
    };
    
    //make a request
    request.open('GET','http://sdas8172.imad.hasura-app.io/counter',true);
    request.send(null);
   
    
};

/*//submit comment
var comment = document.getElementById('comment_btn');
comment.onclick = function(){
    // make a request to the server and send the name
     var request= new XMLHttpRequest();
    
    //capture the reponse and store in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take a action
          if(request.status ===200){
              // capture a list of name and render it as a list
                var comments = request.responseText;
                comments= JSON.parse(comments);
                var list= '';
                for(var i=0;i<comments.length;i++)
                {
                    list += '<li>'+comments[i]+'</li>';
                }
                var ul= document.getElementById('commentlist');
                ul.innerHTML=list;
          }
      }  
      //not done yet
    };
    
    //make a request
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    request.open('GET','http://sdas8172.imad.hasura-app.io/articles/comment-name?name=' + comment,true);
    request.send(null);
    
    
};*/


//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    // make a request to the server and send the name
     var request= new XMLHttpRequest();
    
    //capture the reponse and store in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take a action
          if(request.status ===200){
              // capture a list of name and render it as a list
                var names = request.responseText;
                names= JSON.parse(names);
                var list= '';
                for(var i=0;i<names.length;i++)
                {
                    list += '<li>'+names[i]+'</li>';
                }
                var ol= document.getElementById('namelist');
                ol.innerHTML=list;
          }
      }  
      //not done yet
    };
    
    //make a request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://sdas8172.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
    
};





//move image
var img=document.getElementById('web');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};

