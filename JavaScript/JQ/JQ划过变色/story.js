function addEvent(obj,type,func){
	if(obj.addEventListener){
		obj.addEventListener(type,func,false)
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,func)
	}else{
		obj['on'+type]=func
	}
}


function getStyle(tar,arreN){
	if(window.getComputedStyle){
		return getComputedStyle(tar,null)[arrN];
	}else{
		return tar.currentStyle[arrN];
	}
};


function jquery(a){
	this.elements=[];
	switch(typeof a){
		case 'string':
			switch(a.charAt(0)){
				case '.':
				this.elements=document.getElementsByClassName(a.substr(1));
				break;
				case '#':
				this.elements.push(document.getElementById(a.substr(1)));
				break;
				default:
				this.elements=document.getElementsByTagName(a);
			}
		break;
		case 'object':
			this.elements.push(a);
		break;
		case 'function':
			addEvent(window,'load',a);
		break;
	}
	//console.log(this.elements)
}

jquery.prototype.hover = function(fn1,fn2){
	for(var i=0;i<this.elements.length;i++){
		addEvent(this.elements[i],'mouseover',fn1);
		addEvent(this.elements[i],'mouseout',fn2);
	}
}


function $(reg){
	return new jquery(reg);
}