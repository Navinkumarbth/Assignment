
        let s = document.getElementById('start');
        let stop = document.getElementById("stop");
        let reset = document.getElementById("Reset");
        let timer= document.getElementById('time');
        let minutes=25;
        let second=0;
        let timerId;

        s.addEventListener('click',()=>{
        timerId= setInterval(()=>{
            if(second===0){
                second=59;
                if(minutes!==0){
                    minutes--;
                }
            }
            else{
                second--;
            }
            timer.innerHTML=`${minutes}:${second}`
        },1000)
        })


        stop.addEventListener('click',()=>{
            clearInterval(timerId)
        })

        reset.addEventListener('click',()=>{
            minutes=25;
            second=0;
            timer.innerText=`${minutes}:0${second}`
            clearInterval(timerId)

        })


    