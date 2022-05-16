let lg = document.querySelectorAll('#lg')
let uname = localStorage.getItem('fhname')
if (uname) {
    lg[0].innerHTML = uname
    lg[0].href = 'javaScript:;'
    lg[1].innerHTML = '退出'
    lg[1].addEventListener('click', function() {
        localStorage.removeItem('fhname')
        this.href = './login.html'
    })
}