window.addEventListener('load',function(){
   let header =document.getElementsByTagName('header')[0];
   header.children[0].ontouchstart=function(){
       window.location.href='./index.html';
   }

})