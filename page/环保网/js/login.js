let inp = document.querySelectorAll('input')
let xian = document.querySelectorAll('.xian')
let lo_text = document.querySelectorAll('#lo_text')
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
}

function testinp(s, text) {
    inp[s].addEventListener('blur', function() {
        if (this.value.length == 0) {
            lo_text[s].innerHTML = text
        } else {
            lo_text[s].innerHTML = ''
        }
    })
}
testinp(0, '请输入注册时的账号')
testinp(1, '密码还未输入')