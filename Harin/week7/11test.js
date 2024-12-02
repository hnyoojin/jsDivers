window.addEventListener('DOMContentLoaded', ()=>{
    const button=document.getElementById('clickEvent');

    button.addEventListener('click',()=>{
       window.open("11address.html","_blank", "width=600,height=400"); 
    });


    //live server가 아니면 보안 상의 이유로 동작하지 않는 듯...
    window.addEventListener('message',(event)=>{
        if (event.origin !== window.location.origin) {
            console.warn('Origin mismatch:', event.origin, window.location.origin);
            return; // 보안상의 이유로 origin 검증 필요
        }

        const data=event.data;
        //확인용
        console.log('received data',data);

        const postNum=document.getElementById('postNum');
        //input 요소의 내용을 재설정할 때는 value를 사용, innerHTML이나 textContent X
        postNum.value= data[0];
        const address=document.getElementById('address');
        address.value = data[1];
    });
});