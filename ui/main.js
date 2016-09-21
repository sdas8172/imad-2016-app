console.log('Loaded!');


//move image
var img=document.getElementById('web');
function moveRight() {
    merginLeft = merginLeft + 1;
    img.style.merginLeft = merginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};