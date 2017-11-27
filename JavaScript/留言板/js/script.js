function Leave(opt){

	var dif={box:'box',data:'data.josn'};
	for(var k in opt){dif[k]=opt[k]}

	var imgs=document.getElementById('imgs');
	this.index=0;
	this.txtar=document.getElementById('txtar');
	this.img=imgs.getElementsByTagName('img');
	this.Name=document.getElementById('Name');
	this.uls=document.getElementById('uls');
	this.li=uls.getElementsByTagName('li');


	this.init();
}
Leave.prototype={
	init:function(){
		this.head();
		this.over();
	},
	head:function(){
		
			var _this=this,
			num=document.getElementById('num'),
			btn=document.getElementById('btn');

			for(var i=0;i<this.img.length;i++){
				this.img[i].index=i;
				this.img[i].onclick=function(){
					_this.img[_this.index].className='';
					this.className='on';
					_this.index=this.index;
				}
			}
		this.txtar.onkeyup=function(){
			num.innerHTML=140-this.value.length;
			if(num.innerHTML<=0){
				num.innerHTML=0;
				num.style.color='red';
			}else{
				num.style.color='#666';
			}
		}

		btn.onclick=function(){
			_this.bindEvent();
		}
	},
	bindEvent:function(){
		
		if(this.Name.value!=''){
			if(this.txtar.value.length==0){
				alert('内容不能为空')
			}else if(this.txtar.value.length<=140){
				this.release();
			}else{
				alert('内容字数不能超过140个字')
			}
		}else{
			alert('用户名不能为空')
		}
	},
	release:function(){

		var li=document.createElement('li'),
			time=new Date(),
			month=time.getMonth()+1,
			date=time.getDate(),
			hours=time.getHours(),
			min=time.getMinutes();
		
		li.innerHTML='<h5><img src="images/'+(this.index+1)+'_03.jpg" ></h5><p><a href="#">'+this.Name.value+'：</a><b>'+this.txtar.value+'</b><date>'+month+'月'+date+'日 '+hours+':'+min+'</date><span>删除</span></p>';

		this.uls.insertBefore(li,this.uls.childNodes[0])

		this.Name.value='';
		this.txtar.value='';
		this.over();
		
		
	},
	over:function(){
		var _this=this;

		for(var i=0;i<this.li.length;i++){

			this.li[i].onmouseover=function(){
				var span=this.getElementsByTagName('span')[0];
				span.style.display='block'
			}
			this.li[i].onmouseout=function(){
				var span=this.getElementsByTagName('span')[0];
				span.style.display='none'
			}
			var span=this.li[i].getElementsByTagName('span')[0];
				
			span.onclick=function(){
				_this.uls.removeChild(this.parentNode.parentNode)
			}

		}

	}


}