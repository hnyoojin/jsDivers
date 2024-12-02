function login(event) {

    const id = document.getElementById("userid").value;
    const psw = document.getElementById("psw").value;

    if (id.length===0) {
        alert("아이디를 입력하세요.");
        return false; 
    }
    if (psw.length===0) {
        alert("비밀번호를 입력하세요.");
        return false; 
    }
    return true;
}