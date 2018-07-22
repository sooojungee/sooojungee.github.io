(function() {

var $num = $('.num');
var $sign = $('.button.sign.calc');


var num = 0;

function updateScreen() {
    if (typeof(num) === "number") {
        num += '';
        console.log('aa' + typeof(num));
    }

    var numSize = 48 - Math.floor(num.length / 6) * 12;

    if (num.length > 6) {
        $('.answer').css('font-size', numSize);
    }
    else
        $('.answer').css('font-size', 48);

    $('.answer').text(num);
}

$num.on('click', function () {

    var number = $(this).text();

    if (num === '0' || num === 0) {
        console.log('s');
        if (number !== 0)
            num = number;
    }
    else {
        num += number;
    }

    $('#return').text('C');

    updateScreen();
});

var state = '';


$sign.on('click', function () {

    // if (state !== num)
    //     num += $(this).attr('command');
    // state = num;
    var text = $('.answer').text();

    if (!isNaN(text[text.length - 1])) {
        console.log('skdufh' + text[text.length - 1]);
        num += $(this).attr('command');

    }

    updateScreen();
});

$('.button.result').on('click', function () {
    num = eval(num);
    console.log('type:  ' + typeof(num));
    updateScreen();
});

$('#percentage').on('click', function () {
    var text = $('.answer').text();

    if (!isNaN(text[text.length - 1])) {
        num *= 0.01;
    }

    updateScreen();
});

$('#return').on('click', function () {
    num = 0;
    $('#return').text('AC');

    updateScreen();
});

$('#plusminus').on('click', function () {
    var text = $('.answer').text();

    if (!isNaN(text[text.length - 1])) {
        num = -num;
    }

    updateScreen();
});

$('.button.dot').on('click', function () {

    if (num.indexOf('.') === -1)
        num += '.';
    else
        num += '';

    updateScreen();

});

})();