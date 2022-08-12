let inp = document.querySelectorAll('input')
let xian = document.querySelectorAll('.xian')
let btn = document.querySelector('#btn')
let checkbox = document.querySelector('#checkbox')
let arr = []
let fa = false

btn.disabled = true // 禁用按钮


function RegExpTest(r_inp, r_text, r_RegExp, r_text2) {
    let inpt = r_inp
    let text = document.querySelector(r_text)
    let RegExps = r_RegExp
    if (RegExps.test(inpt.value)) {
        text.innerHTML = ''
        return true
    } else {
        text.innerHTML = r_text2
        return false
    }
}

inp[0].addEventListener('input', function() {
    arr[0] = RegExpTest(this, '#re_text', /^[a-zA-Z0-9_-]{3,9}$/, '长度在3-9之间，只包含字母，数字，下划线，减号')
})
inp[1].addEventListener('input', function() {
    arr[1] = RegExpTest(this, '#re_passwords', /^[a-zA-Z]\w{4,10}$/, '长度在5-11之间，以字母开头，只包含字符、数字和下划线')
})
inp[2].addEventListener('input', function() {
    arr[2] = RegExpTest(this, '#re_email', /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, '邮箱格式错误')
})


for (let i = 0; i < inp.length; i++) {
    function hidden() {
        xian[i].style.width = '0'
    }
    inp[i].addEventListener('focus', function() {
        hidden()
        xian[i].style.width = '90%'
    })
    inp[i].addEventListener('blur', function() {
        hidden()
    })
    inp[i].addEventListener('input', function() {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i]) {
                fa = false
            } else if (arr[0] && arr[1] && arr[2] && arr[3]) {
                fa = true
            }
        }
        if (fa) {
            btn.disabled = false
            btn.className = 'kai'
        } else {
            btn.disabled = true
            btn.className = 'guan'
        }
    })
}

checkbox.addEventListener('click', function() {
    checkbox.checked ? arr[3] = true : arr[3] = false
    if (fa) {
        btn.disabled = false
        btn.className = 'kai'
    } else {
        btn.disabled = true
        btn.className = 'guan'
    }
})