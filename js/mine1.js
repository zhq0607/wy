window.addEventListener('load',function(){
    const title = document.getElementById('title');
    const user = document.getElementById('user');
    const text_ = document.getElementById('text');
    const operator = document.getElementById('operator');
    const exit_btn = document.getElementById('exit');
    const mask = document.getElementById('mask');

    touch.on(user.children[1],'touchstart',function(){
        window.location.href = './login.html';
    })
    if(window.sessionStorage.getItem('user')){
        text_.innerHTML = "欢迎你，"+window.sessionStorage.getItem('user');
        text_.style.display = 'block';
        user.children[1].style.display = 'none';
        title.style.display = 'block';
        exit_btn.style.display = 'block';
    }else{
        text_.style.display = 'none';
        user.children[1].style.display = 'block';
        title.style.display = 'none';
        exit_btn.style.display = 'none';
        for(let i of operator.children){
            touch.on(i,'touchstart',function(){
                mask.style.display = 'block';
            })
        }
    }
    touch.on(exit_btn,'touchstart',function(){
        window.sessionStorage.removeItem('user');
        text_.style.display = 'none';
        user.children[1].style.display = 'block';
        title.style.display = 'none';
        exit_btn.style.display = 'none';
        for(let i of operator.children){
            touch.on(i,'touchstart',function(){
                mask.style.display = 'block';
            })
        }
    })
    touch.on(mask.children[0].children[0],'touchstart',function(){
        mask.style.display = 'none';
    })
})
