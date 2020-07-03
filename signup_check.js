function checkSignup() {
    var pwd1 = document.form.pw1.value;
    var pwd2 = document.form.pw2.value;

    if ( pwd1 != '' && pwd2 == '' ) {
        null;
    } else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            alert('비밀번호가 일치합니다.');
            alert('준비중입니다.');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            alert('준비중입니다.');
        }
    }
}