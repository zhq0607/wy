
let list=document.getElementById('list1');
// console.log(list);
let li1=list.getElementsByTagName('li');
let someList=document.getElementsByClassName('someList')[0];
let li2=someList.getElementsByTagName('li')
let hide=document.getElementsByClassName('hide')[0];
 let area=document.getElementsByClassName('area')[0];
 let price=document.getElementsByClassName('price')[0];
 let house=document.getElementsByClassName('house')[0];
 let more=document.getElementsByClassName('more')[0];
 let h=document.getElementsByClassName('h');
 //区域
 
li1[0].ontouchstart=function(e){
    event.stopPropagation();
    
    for(var i=0; i<someList.children.length;i++){
        someList.children[i].style.display='none';
        hide.style.display='block';
    }
  
    area.style.display='block';
    list.style.position='absolute';
       list.style.top=0;
}
area.ontouchstart=function(e){
    event.stopPropagation();
    area.style.display='block';
}


// 价格
li1[1].ontouchstart=function(e){
    event.stopPropagation();
    for(var i=0; i<someList.children.length;i++){
        someList.children[i].style.display='none';
    }

    price.style.display='block';
    list.style.position='absolute';
       list.style.top=0;
}
price.ontouchstart=function(e){
    event.stopPropagation();
    price.style.display='block';
}
// 房型
li1[2].ontouchstart=function(e){
    event.stopPropagation();
    for(var i=0; i<someList.children.length;i++){
        someList.children[i].style.display='none';
    }

    house.style.display='block';
    list.style.position='absolute';
       list.style.top=0;
}
house.ontouchstart=function(e){
    event.stopPropagation();
    house.style.display='block';
}

// 更多

li1[3].ontouchstart=function(e){
    event.stopPropagation();
    for(var i=0; i<someList.children.length;i++){
        someList.children[i].style.display='none';
    }

    more.style.display='block';
    list.style.position='absolute';
       list.style.top=0;
}
more.ontouchstart=function(e){
    event.stopPropagation();
    more.style.display='block';
}





document.ontouchstart=function(e){
    event.stopPropagation();
    area.style.display='none'
    price.style.display='none'
    house.style.display='none'
    hide.style.display='none';
    more.style.display='none'
    list.style.position='static';
}






























// touch.on(li1[0],'tap',function(e){
//     event.stopPropagation();
//     area.style.display='block';
//     hide.style.display='block';
//     list.style.position='absolute';
//     list.style.top=0;
//     // h[0].style.color="rgb(255,138,0)";
   
    
   
// })
// touch.on(area,'tap',function(e){
//     event.stopPropagation();
//     area.style.display='block';
//     hide.style.display='block';
   
// })


// touch.on(li1[1],'tap',function(e){
//     event.stopPropagation();
//     price.style.display='block';
//     hide.style.display='block';
    
//     list.style.position='absolute';
//     list.style.top=0;
  
// })
// touch.on(price,'tap',function(e){
//     event.stopPropagation();
//     price.style.display='block';
//     hide.style.display='block';
   
// })

// touch.on(document,'tap',function(e){
//     event.stopPropagation();
//     area.style.display='none'
//     price.style.display='none'
//     hide.style.display='none';
//     list.style.position='static';
    
// })