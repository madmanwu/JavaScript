		var ajax={
         func:function(urls,boole,datasrc,type,fun,erfun){
            var xml;
            if(window.XMLHttpRequest){
               xml=new XMLHttpRequest()
            }else{
               xml=new ActiveXObject('Microsoft.XMLHTTP')
            }
            //name=1507J&age=18
            var str='';
            for(var i in datasrc){
               str+=i+'='+datasrc[i]+'&';
            }
            
            str=str.replace(/&$/g,'');

            if(type=='get'){
               //data.json?name=1507J&age=18
               xml.open(type,urls+'?'+str,boole);
               console.log(urls+'?'+str);
               xml.send(null);
            }else{
               xml.open(type,urls,boole);
               xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
               xml.send(datasrc)
            }
            xml.onreadystatechange=function(){
               if(xml.readyState==4){
                  if(xml.status==200){
                     var datas=xml.responseText
                     //var a=JSON.parse(datas);
                     //console.log(datas);
                     fun(datas);
                  }else{
                     erfun('请求失败失败');
                  }
               }else{
                  console.log('正在加载中...')
               }
            }
         },
         get:function(obj){
            this.func(obj.urls,obj.boole,obj.datasrc,'get',obj.success,obj.error)
         },
         post:function(obj){
            this.func(obj.urls,obj.boole,obj.datasrc,'post',obj.success,obj.error)
         }
      }