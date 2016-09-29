console.log('Loaded!');


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

//counter code
var button = doccument.getElementById("counter");

button.onclick=function(){
    //make a request to the counter end point
    
    //capture the reponse and store in a variable
    
    //render the variable in the correct span
    counter=counter+1;
    var span= doccument.getElementById("count");
    span.innerHtml=conter.toString();
};