window.addEventListener('DOMContentLoaded', ()=>{
    const form=document.getElementById('enterEvent');
    const input=document.getElementById('num');
    let arr=[];
    
    form.addEventListener('keydown',(event)=>{
        if(event.key==='Enter'){
        event.preventDefault();

        if(input.value===""){
            alert("값을 입력하세요.");
            input.focus();
            return false;
        }

        arr.push(input.value);

        //출력값의 변수를 따로 두어 innerHTML이 덮어씌워지지 않게
        let printNum='';
        for(let i=0;i<arr.length;i++){
            printNum+=arr[i]+'<br>';
        }
        document.getElementById("print").innerHTML=printNum;
        input.value='';
    }
});
});
