window.addEventListener('DOMContentLoaded', ()=>{
    let arr=[];

    document.body.addEventListener('click',(event)=>{
        if(event.target.id==='post1'){
            arr.push(event.target.textContent);
            arr.push(document.getElementById('ad1').textContent);
        }
        else if(event.target.id==='post2'){
            arr.push(event.target.textContent);
            arr.push(document.getElementById('ad2').textContent);
        }
        else{
            return false;
        }

        const data=arr;
        if (window.opener && !window.opener.closed) {
            window.opener.postMessage(data, window.location.origin);
            //확인용
            console.log('sent data',data);
        }

        window.close();
     });
});

//이번에는 데이터가 적어서 아이디로 따로 구분해서 데이터 저장, 전송했는데
//객체 형태로 전달하는 게 더 범용성이 좋을 듯합니다