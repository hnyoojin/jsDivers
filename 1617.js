window.addEventListener('DOMContentLoaded', ()=>{
    const button=document.getElementById('clickToPrint');
    const input=document.getElementById('list');
    let arr=[];
    
    button.addEventListener('click',(event)=>{
        event.preventDefault();

        if(input.value===""){
            alert("값을 입력하세요.");
            input.focus();
            return false;
        }

        arr.push(input.value);

        let prints='';
        let idCounter=0;
        const newListItem = document.createElement('li');
        idCounter++;
        const xToDelete='<span class=x>  X</span>';
        newListItem.id=idCounter;
        prints+=arr.at(-1)+xToDelete+'<br>';
        document.getElementById("print").appendChild(newListItem);
        newListItem.innerHTML=prints;
        input.value='';
    })

    document.addEventListener('click',(event)=>{
        //X가 아닌 다른 부분을 클릭했을 때는 이벤트 발동 X
        if(!event.target.classList.contains('x'))
            return false;
        const parentElem=event.target.parentNode;
        document.getElementById("print").removeChild(parentElem);
    })
});
