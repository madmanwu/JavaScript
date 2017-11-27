var timer1=null;
    function move(obj,target){
            clearInterval(timer1);
            var speed;
                
            timer1=setInterval(function(){
                speed=(target-obj.offsetLeft)/8;
                speed=target-obj.offsetLeft>0?Math.ceil(speed):Math.floor(speed);//缓冲

                if(obj.offsetLeft==target){
                    clearInterval(timer1);
                }else{
                    obj.style.left=obj.offsetLeft+speed+"px";
                }
            },30);
    }