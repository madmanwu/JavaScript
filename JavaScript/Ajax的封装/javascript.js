var ajax={
	func:function(urls,boole,datasrc,type,fun,erfun){
		var xml;
		if(window.XMLHttpRequest){
			xml = XMLHttpRequest();
		}else{
			xml = ActiveXObject("Microsoft.XMLHTTP");
		}
		var str='';
		for(var i in datasrc){
			str += i + '=' +datasrc[i] + '&';
		}
		str = str.replace(/&$/g,'');
		if(type=='get'){
			xml.open(type,urls+'?'+str,boole);
			console.log(urls+'?'+str);
			xml.send(datasrc);
		}else{
			xml.open(type,urls,boole);
			xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
			xml.send(datasrc);
		}
		xml.onreadystatechange = function(){
			if(xml.readyState == 4){
				if(xml.status == 200){
					var datas = xml.responseText;
					var a = JSON.parse(datas);
					fun(a);
				}else{
					erfu("请求加载失败！");
				}
			}else{
				console.log("正在加载中……");
			}
		}
	},
	get:function(obj){
		this.func(obj.urls,obj.boole,obj.datasrc,'get',obj.success,obj.error);
	}
	post:function(obj){
		this.func(obj.urls,obj.boole,obj.datasrc,'get',obj.success,obj.error);
	}

}