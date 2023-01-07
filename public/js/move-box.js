// style
$('*').css({
    'padding' : '0',
    'margin' : '0',
    'box-sizing' : 'border-box'
});

$('html').css({
    'font-family' : 'Courier New, Courier, monospace',
    'background-image': 'linear-gradient(to right, rgb(133, 181, 173), rgb(218, 241, 237), rgb(133, 181, 173))'
});

$('button').css({
    'margin': '20px 0 0 20px',
    'padding' : '5px 10px',
    'border-radius' : '4px',
    'font-weight' : 'bold',
    'background-color' : 'aliceblue',
    'cursor' : 'pointer'
});

$('.box').css({
    'position': 'relative',
    'left': '20px',
    'top': '20px',
    'border-radius' : '1px',
    'width' : '100px',
    'height' : '80px',
    'background-color' : 'white'
});


$('.box1').css({
    'transform' : 'translateX(100px) translateY(200px)'
});

$('.box::after').css({

});
// end style
let boxPositon = 0
$(document).ready(() => {
    $('button').on('click', () => {
        let box = $('.box')
        if(boxPositon === 0) {
                box.animate({
                    opacity: '0'
                }, 1)
                box.animate({
                    top: '400px',
                    opacity: '1',
                }, 700, () => {
                    return box.addClass('route-box-right')
                })
                boxPositon++
        } else if (boxPositon === 1) {
                box.animate({
                    opacity: '0',
                }, 1)
                box.animate({
                    left: '89%',
                    top: '400px',
                    opacity: '1',
                }, 1000, () => {
                    box.removeClass('route-box-right')
                    box.addClass('route-box-up')
                })
                boxPositon++
            } else if (boxPositon === 2) {
                box.animate({
                    opacity: '0',
                }, 1)
                box.animate({
                    left: '89%',
                    top: '0',
                    opacity: '1',
                }, 700, () => {
                    box.removeClass('route-box-up')
                    box.addClass('route-box-left')
                })
                boxPositon++
            } else if (boxPositon === 3) {
                box.animate({
                    opacity: '0',
                }, 1)
                box.animate({
                    left: '20px',
                    top: '20px',
                    opacity: '1',
                }, 1000, () => {
                    box.removeClass('route-box-left')
                })
                boxPositon = 0
            }
    })
})