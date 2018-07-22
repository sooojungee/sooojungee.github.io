var $inputId = $('#inputId');
var $inputPassword = $('#inputPassword');
var $login = $('#loginText');

$login.on('click', function() {

    var id = $inputId.val();
    var password = $inputPassword.val();

    if(id.length === 0){
        alert('이메일 입력해주세요');
    }
    else if(password.length < 8){
        alert('비밀번호를 8자 이상 입력하세요');
    }
    else
        window.location = '/users/kakaofriend';

});