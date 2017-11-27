function list(){
   this.box=document.getElementById('key');
   this.ul=document.createElement('ul');
   document.body.appendChild(this.ul);
   this.ind=-1;
   this.bindEvent();
}
list.prototype={
    bindEvent:function(){
        var that=this;
        this.box.onkeyup=function(e){
            var txt=this.value;
            var str='';
            var reg=new RegExp('^'+txt);
            if(txt==''){
                str='';
            }else{
               for(var i=0;i<texts.length;i++){
                   if(reg.test(texts[i].name)){
                     str+='<li index="'+i+'">'+texts[i].name+'</li>'
                   }
               } 
            }
            that.ul.innerHTML=str;
            that.lis=that.ul.getElementsByTagName('li');
        }
        document.onkeyup=function(e){
           var e= window.event || e;
           var keycode=e.keyCode;
           console.log(that.ind);
           //上
           if(keycode==38){
                that.ind--;
                if(that.ind<=0){
                   that.ind=0; 
                }
                that.showli(that.ind,false);
            //下
           }else if(keycode==40){
                that.ind++;
                if(that.ind>=that.lis.length){
                    that.ind=that.lis.length-1;
                }
                that.showli(that.ind,false);
           }else if(keycode==13){
                that.showli(that.ind,true);
           }else{
                return false;
           }
        }
        this.ul.onmousemove=function(e){
           var e=window.event || e;
           var src=e.target || e.srcElement;
           if(src.nodeName=='LI'){
                var inde=src.getAttribute('index');
                that.showli(inde,false);
           }
        },
        this.ul.onclick=function(e){
           var e=window.event || e;
           var src=e.target || e.srcElement;
           if(src.nodeName=='LI'){
                var inde=src.getAttribute('index');
                that.showli(inde,true);
           }
        }
    },
    showli:function(ind,check){
        this.ind=ind;
        if(ind!=-1){
            for(var i=0;i<this.lis.length;i++){
                this.lis[i].style.background="#fff";
            }
            this.lis[ind].style.background="red";
        }
        if(check){
           var a=this.lis[ind].innerText;
           this.box.value=a;
           this.ul.innerHTML='';
           this.ind=-1;
        }
    }
}
new list();