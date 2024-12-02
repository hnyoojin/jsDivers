const values = []; // 값을 저장할 배열

function saveValue() {
    const input = document.getElementById('input'); // 입력 필드 가져오기
    if (input.value) {
        values.push(input.value); // 배열에 값 추가
        document.getElementById('output').innerHTML = values.join('<br>'); // 배열 출력
        input.value = ''; // 입력 필드 초기화
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') saveValue(); // Enter 키 감지 후 값 저장
}
