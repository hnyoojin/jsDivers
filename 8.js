window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', function(event) {
        //폼 제출 시 페이지가 리로드 되는 동작 방지
        //리로드를 막으면 UI 초기화로 인한 사용자 경험 저하 방지 가능
        event.preventDefault();
        
        let id = document.getElementById("id");
        let pwd = document.getElementById("pwd");

        if (id.value === "") {
            alert("아이디를 입력하세요.");
            id.focus();
            return false;
        }
        if (pwd.value === "") {
            alert("비밀번호를 입력하세요.");
            pwd.focus();
            return false;
        }
        location.href="8success.html";
    });
});
