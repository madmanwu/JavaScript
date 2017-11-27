//导航盒子 内容盒子
function table(ul,div){
		this.count=0;
		this.timer=null;
		//要点击的导航
		this.ul=document.getElementsByClassName(ul)[0];
		this.li=this.ul.getElementsByTagName('li');
		//内容区域
		this.cont=document.getElementsByClassName(div)[0];
		this.contdiv=this.cont.getElementsByTagName('div');
		this.liclick();
	}
	//给li绑定事件
	table.prototype.liclick=function(){
		var that=this;
		for(var i=0;i<this.li.length;i++){
			this.li[i].index=i;
			this.li[i].onclick=function(){
				var ind=this.index;
				//事件处理程序this li
				//alert(this.nodeName)
				that.change(ind);
			}
		}
	}
	table.prototype.change=function(ind){
		this.count=ind;
		for(var j=0;j<this.contdiv.length;j++){
			this.contdiv[j].style.display='none';
			this.li[j].className='';
		}
		this.contdiv[ind].style.display='block';
		this.li[ind].className='active';
	}

	function auto(){
		//借用私有属性和私有方法
		table.apply(this,arguments);
		this.move();
		this.hover();
	}
	auto.prototype=Object.create(table.prototype);
	auto.prototype.constructor=auto;
	
	auto.prototype.move=function(){
		var that=this;
		this.timer=setInterval(function(){
			that.count++;
			if(that.count>that.li.length-1){
				that.count=0;
			}
			that.change(that.count);
		},1000)
	}
	auto.prototype.hover=function(){
		var that=this;
		this.ul.onmouseover=function(){
			clearInterval(that.timer);
		}
		this.ul.onmouseout=function(){
			that.move();
		}
	}