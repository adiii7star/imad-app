console.log('Loaded fast!');

//Now will add some changes
var element=document.getElementById("main-id");
element.InnerHtml="Sophistication";

//Now will try to move some elements

var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginleft='100px';
};