window.addEventListener('load', function () {
    const nav_ = document.getElementById('nav');
    const normal = document.getElementById('normal');
    const code_ = document.getElementById('code');
    const yzm_btn = document.getElementById('yzm');
    const btns = document.getElementById('btn');
    // nav 点击事件
    function nav(index) {
        for (let k of nav_.children) {
            k.style.borderColor = '#ccc';
        }
        nav_.children[index].style.borderColor = '#ff8a00';
        if (index == '0') {
            normal.style.display = 'block';
            code_.style.display = 'none';
            yzm_btn.style.display = 'none';
            yzm_btn.disabled = false;
            flag = 59;
            clearInterval(timer1);
            yzm_btn.innerText = '发送验证码'

        } else {
            normal.style.display = 'none';
            code_.style.display = 'block';
            yzm_btn.style.display = 'block';
        }
    }
    for (let i = 0; i < nav_.children.length; i++) {
        nav_.children[i].setAttribute('index', i);
        touch.on(nav_.children[i], 'touchstart', function () {
            let index = this.getAttribute('index');
            nav(index);
        });
    }
    nav(0);

    // 正则判断手机号  
    function phone_fn(dom) {
        const p1 = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        var phone_bool = false;
        var phone = dom.children[0].value;
        if (p1.test(phone)) {
            dom.children[3].style.display = 'block';
            dom.children[3].style.borderColor = 'green';
            dom.children[3].style.color = 'green';
            dom.children[3].innerHTML = '√';
            phone_bool = true;
        } else {
            dom.children[3].style.display = 'block';
            dom.children[3].style.borderColor = 'red';
            dom.children[3].style.color = 'red';
            dom.children[3].innerHTML = 'x';
            phone_bool = false;  
        }
        return phone_bool;
    }
    // 正则判断密码
    function psd_fn(dom) {
        const p2 = /^\w{8,}$/;
        var psd_bool = false;
        var psd = dom.children[1].value;
        // console.log(psd);
        if (p2.test(psd)) {
            dom.children[4].style.display = 'block';
            dom.children[4].style.borderColor = 'green';
            dom.children[4].style.color = 'green';
            dom.children[4].innerHTML = '√';
            psd_bool = true;
        } else {
            dom.children[4].style.display = 'block';
            dom.children[4].style.borderColor = 'red';
            dom.children[4].style.color = 'red';
            dom.children[4].innerHTML = 'x';
            psd_bool = false;
        }
        return psd_bool;
    }
    // 判断验证码
    function co_fn(dom, random) {
        var psd = dom.children[1].value;
        var co_bool = false;
        if (psd == random) {
            dom.children[4].style.display = 'block';
            dom.children[4].style.borderColor = 'green';
            dom.children[4].style.color = 'green';
            dom.children[4].innerHTML = '√';
            co_bool = true;
        } else {
            dom.children[4].style.display = 'block';
            dom.children[4].style.borderColor = 'red';
            dom.children[4].style.color = 'red';
            dom.children[4].innerHTML = 'x';
            co_bool = false;
        }
        return co_bool;
    }

    // 发送验证码
    var timer1 = null;
    var timer2 = null;
    var flag = 59;

    touch.on(yzm_btn, 'touchstart', function () {
        var random = '';
        for (let i = 0; i < 4; i++) {
            random += parseInt(Math.random() * 10);
        }
        code_.children[1].addEventListener('blur',function(){
            var co_bool = co_fn(code_,random);
        })
        var bool = phone_fn(code_);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            if (flag != 0 && bool) {
                yzm_btn.disabled =true;
                yzm_btn.innerHTML = '还剩' + flag + '秒';
                flag--;
            }else if(flag = 1 && bool){
                yzm_btn.disabled = false;
                flag = 59;
                clearInterval(timer1);
                yzm_btn.innerText = '发送验证码'
            }
            else if(!bool) {
                clearTimeout(timer2);
                alert('号码不正确！');
                yzm_btn.disabled = false;
                flag = 59;
                clearInterval(timer1);
                yzm_btn.innerText = '发送验证码'
            }
        }, 1000);
        clearTimeout(timer2);
        timer2 = setTimeout(() => {
            alert('你的验证码：' + random);
        }, 5000);
        touch.on(code_.children[2],'touchstart',function(){
            if(phone_fn(code_) && co_fn(code_,random)){
                var phone = code_.children[0].value;
                window.sessionStorage.setItem('user',phone);
                window.location.href = './mine1.html';
                
            }
        })
    })
    normal.children[0].addEventListener('blur',function(){
        var phone_bool = phone_fn(normal);
    })
    normal.children[1].addEventListener('blur',function(){
        var psd_bool = psd_fn(normal);
    })
    code_.children[0].addEventListener('blur',function(){
        var phone_bool = phone_fn(code_);
    })
    touch.on(normal.children[2],'touchstart',function(){
        if(phone_fn(normal) && psd_fn(normal)){
            var phone = normal.children[0].value;
            window.sessionStorage.setItem('user',phone);
            window.location.href = './mine1.html';
        }
    })
    touch.on(btns.children[0],'touchstart',function(){
        window.location.href = './register.html'
    })
    touch.on(btns.children[1],'touchstart',function(){
        window.location.href = './find_password.html'
    })
})