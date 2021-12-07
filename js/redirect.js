window.addEventListener('load',function(){
   let header =document.getElementsByTagName('header')[0];
//    console.log(header.children[1].children[0]);
   header.children[0].ontouchstart=function(){
       window.location.href='./index.html';
   }
   header.children[1].children[0].ontouchstart = function(){
       window.location.href ="./mine1.html";
   }
})