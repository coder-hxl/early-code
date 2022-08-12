let cont_two_fade = document.querySelectorAll('#cont-two-fade')
let cont_two_show = [600]
let cont_two_hidden = [400]
let cont_three_fade = document.querySelectorAll('#cont-three-fade')
let cont_three_show = [1500, 1800, 2100, 2400, 2700]
let cont_three_hidden = [1325, 1650, 1975, 2300, 2500]

function BigShow(fade, show, hidden, style1, style2) {
    let top = window.pageYOffset
    for (let i = 0; i < fade.length; i++) {
        if (top >= show[i]) {
            fade[i].className = style1
        } else if (top <= hidden[i]) {
            fade[i].className = style2
        }
    }
}

function SmallHidden(fade, style1) {
    for (let i = 0; i < fade.length; i++) {
        fade[i].className = style1
    }
}


if (window.innerWidth >= 992) {
    BigShow(cont_two_fade, cont_two_show, cont_two_hidden, 'data cont-two-show', 'data cont-two-hidden')
    BigShow(cont_three_fade, cont_three_show, cont_three_hidden, 'box cont-three-show', 'box cont-three-hidden')
    window.addEventListener('scroll', function() {
        BigShow(cont_two_fade, cont_two_show, cont_two_hidden, 'data cont-two-show', 'data cont-two-hidden')
        BigShow(cont_three_fade, cont_three_show, cont_three_hidden, 'box cont-three-show', 'box cont-three-hidden')
    })
} else {
    SmallHidden(cont_two_fade, 'box cont-three-show')
    SmallHidden(cont_three_fade, 'box cont-three-show')
}

// window.addEventListener('resize', function() {
//     // 刷新页面
//     this.location = this.location
// })