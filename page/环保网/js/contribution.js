let cont_fade = document.querySelectorAll('#fade')
let show = [0, 200, 700, 1200, 1700, 2200]
let hidden = [0, 0, 500, 1000, 1500, 2000]

let shu = []
for (let i = 0; i < cont_fade.length; i++) {
    shu[i] = i + 1
}

function BigShow(fade, show, hidden, style, left, right) {
    let top = window.pageYOffset
    for (let i = 0; i < fade.length; i++) {
        if (top >= show[i]) {
            fade[i].children[0].className = style
            fade[i].children[1].className = style
        } else if (top <= hidden[i] && shu[i] % 2 == 0) {
            fade[i].children[0].className = right
            fade[i].children[1].className = left
        } else if (top <= hidden[i]) {
            fade[i].children[0].className = left
            fade[i].children[1].className = right
        }
    }
}

function SmallHidden(fade, show) {
    for (let i = 0; i < fade.length; i++) {
        fade[i].children[0].className = show
        fade[i].children[1].className = show
    }
}


if (window.innerWidth >= 992) {
    BigShow(cont_fade, show, hidden, 'col-md-6 col-sm-12 show', 'col-md-6 col-sm-12 left-hidden', 'col-md-6 col-sm-12 right-hidden')
    window.addEventListener('scroll', function() {
        BigShow(cont_fade, show, hidden, 'col-md-6 col-sm-12 show', 'col-md-6 col-sm-12 left-hidden', 'col-md-6 col-sm-12 right-hidden')
    })
} else {
    SmallHidden(cont_fade, 'col-md-6 col-sm-12 show')
}