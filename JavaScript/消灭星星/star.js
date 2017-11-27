function createStar(box){
		var that=this;
		//大盒子
		this.parent=document.getElementById(box);
		this.timer=null;
		this.timer=setInterval(function(){
			that.star=document.createElement('img');
			that.star.src='star.png';
			that.parent.appendChild(that.star);
			that.removeStar(that.star);
			that.setstyle();
		},1000)
		
	}
	
	createStar.prototype.setnum=function(max,min){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	createStar.prototype.setstyle=function(){
		this.star.style.position='absolute';
		this.left=document.body.clientWidth || document.documentElement.clientWidth;
		this.top= document.body.clientHeight || document.documentElement.clientHeight;
		this.width1=this.setnum(70,10);
		this.star.style.left=this.setnum(this.left,0)+'px';
		this.star.style.top=this.setnum(this.top,0)+'px';
		this.star.style.width=this.width1+'px';
		this.star.style.height=this.width1+'px';
	}
	createStar.prototype.removeStar=function(tar){
		var that=this;
		tar.onclick=function(){
			that.parent.removeChild(tar);
		}
	}
	new createStar('wrap');