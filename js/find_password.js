window.addEventListener('load',function(){
    const form_ = document.getElementById('find');
    const yzm_btn = document.getElementById('yzm');
    // 正则判断手机号  
    function phone_fn(dom) {
        const p1 = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        var boor = false;
        dom.children[0].addEventListener('blur',function () {
            var phone = dom.children[0].value;
            if (p1.test(phone)) {
                dom.children[5].style.display = 'block';
                dom.children[5].style.borderColor = 'green';
                dom.children[5].style.color = 'green';
                dom.children[5].innerHTML = '√';
            } else {
                dom.children[5].style.display = 'block';
                dom.children[5].style.borderColor = 'red';
                dom.children[5].style.color = 'red';
                dom.children[5].innerHTML = 'x';
            }
        })
    }
    // 正则判断密码
    function psd1_fn(dom){
        const p2 = /^\w{8,}$/;
        dom.children[2].addEventListener('blur', function () {
            var psd = dom.children[2].value;
            // console.log(psd);
            if (p2.test(psd)) {
                dom.children[7].style.display = 'block';
                dom.children[7].style.borderColor = 'green';
                dom.children[7].style.color = 'green';
                dom.children[7].innerHTML = '√';
            } else {
                dom.children[7].style.display = 'block';
                dom.children[7].style.borderColor = 'red';
                dom.children[7].style.color = 'red';
                dom.children[7].innerHTML = 'x';
            }
        })
    }

    // 判断重复密码
    function psd2_fn(dom,random){
        dom.children[3].addEventListener('blur', function () {
            var psd1 = dom.children[2].value;
            var psd2 = dom.children[3].value;
            // console.log(random);
            if (psd1 == psd2) {
                dom.children[8].style.display = 'block';
                dom.children[8].style.borderColor = 'green';
                dom.children[8].style.color = 'green';
                dom.children[8].innerHTML = '√';
            } else {
                dom.children[8].style.display = 'block';
                dom.children[8].style.borderColor = 'red';
                dom.children[8].style.color = 'red';
                dom.children[8].innerHTML = 'x';

            }
        })
    }

    // 正则判断验证码
    function co_fn(dom,random){
        const p2 = /^\w{8,}$/;
        dom.children[1].addEventListener('blur', function () {
            var psd = dom.children[1].value;
            // console.log(random);
            if (psd == random) {
                dom.children[6].style.display = 'block';
                dom.children[6].style.borderColor = 'green';
                dom.children[6].style.color = 'green';
                dom.children[6].innerHTML = '√';
            } else {
                dom.children[6].style.display = 'block';
                dom.children[6].style.borderColor = 'red';
                dom.children[6].style.color = 'red';
                dom.children[6].innerHTML = 'x';

            }
        })
    }
    
    // 发送验证码
    var timer1 = null;
    var timer2 = null;
    var flag = 59;
    
    touch.on(yzm_btn,'touchstart',function(){
        var random = '';
        for(let i=0;i<4;i++){
            random += parseInt(Math.random()*10);
        }
        co_fn(form_,random);
        clearTimeout(timer2);
        timer2 = setTimeout(() => {
            alert('你的验证码：'+ random);
        }, 5000);
        clearInterval(timer1);
        timer1 = setInterval(function(){
            if( flag != 0){
                yzm_btn.disabled = true;
                yzm_btn.innerHTML = '还剩'+flag+'秒';
                flag--;
            }else{
                clearTimeout(timer2);
                yzm_btn.disabled = false;
                flag = 59;
                clearInterval(timer1);
                yzm_btn.innerText = '发送验证码'
            }
                
        },1000);
    })
    phone_fn(form_);
    psd1_fn(form_);
    psd2_fn(form_);
})