const input = document.getElementById('input'); // 입력 필드
const addBtn = document.getElementById('add'); // 추가 버튼
const list = document.getElementById('list'); 
// 리스트 부분 여기에다가 dom 조작해서 생성하고 삽임 + 삭제할 예정

addBtn.addEventListener('click', addItem);

function addItem() {
    const value = input.value; 
    if (value) {
        const listItem = document.createElement('li');
        listItem.textContent = value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        input.value = '';
    }
}

