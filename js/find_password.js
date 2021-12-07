window.addEventListener('load', function () {
    const form_ = document.getElementById('find');
    const yzm_btn = document.getElementById('yzm');
    // 正则判断手机号  
    function phone_fn(dom) {
        const p1 = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        var phone_bool = false;
        var phone = dom.children[0].value;
        if (p1.test(phone)) {
            dom.children[5].style.display = 'block';
            dom.children[5].style.borderColor = 'green';
            dom.children[5].style.color = 'green';
            dom.children[5].innerHTML = '√';
            phone_bool = true;
        } else {
            dom.children[5].style.display = 'block';
            dom.children[5].style.borderColor = 'red';
            dom.children[5].style.color = 'red';
            dom.children[5].innerHTML = 'x';
            phone_bool = false;
        }
        return phone_bool;
    }
    // 正则判断密码
    function psd1_fn(dom) {
        const p2 = /^\w{8,}$/;
        var psd_bool = false;
        var psd = dom.children[2].value;
        // console.log(psd);
        if (p2.test(psd)) {
            dom.children[7].style.display = 'block';
            dom.children[7].style.borderColor = 'green';
            dom.children[7].style.color = 'green';
            dom.children[7].innerHTML = '√';
            psd_bool = true;
        } else {
            dom.children[7].style.display = 'block';
            dom.children[7].style.borderColor = 'red';
            dom.children[7].style.color = 'red';
            dom.children[7].innerHTML = 'x';
            psd_bool = false;
        }
        return psd_bool;
    }
    function psd2_fn(dom) {
        var psd_bool = false;
        var psd1 = dom.children[2].value;
        var psd2 = dom.children[3].value;
        // console.log(psd);
        if (psd1 == psd2) {
            dom.children[8].style.display = 'block';
            dom.children[8].style.borderColor = 'green';
            dom.children[8].style.color = 'green';
            dom.children[8].innerHTML = '√';
            psd_bool = true;
        } else {
            dom.children[8].style.display = 'block';
            dom.children[8].style.borderColor = 'red';
            dom.children[8].style.color = 'red';
            dom.children[8].innerHTML = 'x';
            psd_bool = false;
        }
        return psd_bool;
    }
    // 判断验证码
    function co_fn(dom, random) {
        var psd = dom.children[1].value;
        var co_bool = false;
        if (psd == random) {
            dom.children[6].style.display = 'block';
            dom.children[6].style.borderColor = 'green';
            dom.children[6].style.color = 'green';
            dom.children[6].innerHTML = '√';
            co_bool = true;
        } else {
            dom.children[6].style.display = 'block';
            dom.children[6].style.borderColor = 'red';
            dom.children[6].style.color = 'red';
            dom.children[6].innerHTML = 'x';
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
        form_.children[1].addEventListener('blur', function () {
            var co_bool = co_fn(form_, random);
        })
        var bool = phone_fn(form_);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            if (flag != 0 && bool) {
                yzm_btn.disabled = true;
                yzm_btn.innerHTML = '还剩' + flag + '秒';
                flag--;
            } else if (flag = 1 && bool) {
                yzm_btn.disabled = false;
                flag = 59;
                clearInterval(timer1);
                yzm_btn.innerText = '发送验证码'
            }
            else if (!bool) {
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
        touch.on(form_.children[4], 'touchstart', function () {
            if (phone_fn(form_) && co_fn(form_, random) && psd1_fn(form_) && psd2_fn(form_)) {
                alert('修改成功，点击确认跳转登录页面');
                window.location.href = './login.html';

            }
        })
    })
    form_.children[0].addEventListener('blur', function () {
        var phone_bool = phone_fn(form_);
    })
    form_.children[2].addEventListener('blur', function () {
        var psd_bool = psd1_fn(form_);
    })
    form_.children[3].addEventListener('blur', function () {
        var psd_bool = psd2_fn(form_);
    })
})