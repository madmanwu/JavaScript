function addEvent(obj,type,func){
	if(obj.addEventListener){
		obj.addEventListener(type,func,false)
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,func)
	}else{
		obj['on'+type]=func
	}
}


function getStyle(tar,arrN){
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

jquery.prototype.eq = function(ind){
	/*var tar = this.elements[ind];
	this.elements=[];
	this.elements.push(tar);
	return this;*/
	return $(this.elements[ind]);
}

jquery.prototype.css = function(){
	console.log(arguments);
	if(arguments.length ==1){
		if(typeof arguments[0]=="string"){
			for(var i in this.elements){
				return getStyle(this.elements[i],arguments[0])
			}
		}else{
			for(var j in arguments[0]){
				for(var i in this.elements){
					this.elements[i].style[j]=arguments[0][j];
				}
			}
		}
	}else{
		for(var i in this.elements){
			this.elements[i].style[arguments[0]]=[arguments[1]]
		}
	}
}

function $(reg){
	return new jquery(reg);
}