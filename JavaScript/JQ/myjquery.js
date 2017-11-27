function addEvent(obj,type,func){
	if(obj.addEventListener){
		obj.addEventListener(type,func,false)
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,func)
	}else{
		obj['on'+type]=func
	}
}

function getstyle(tar,attrN){
	if(window.getComputedStyle){
		return getComputedStyle(tar,null)[attrN]
	}else{
		return tar.currentStyle[attrN]
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
jquery.prototype.hover=function(fn1,fn2){
	//console.log(this.elements)
	for(var i=0;i<this.elements.length;i++){
		addEvent(this.elements[i],'mouseover',fn1);
		addEvent(this.elements[i],'mouseout',fn2);
	}
}
jquery.prototype.eq=function(ind){
	/*var tar=this.elements[ind];
	//console.log(tar);
	this.elements=[];
	this.elements.push(tar);
	return this;*/

	return $(this.elements[ind]);
}
jquery.prototype.css=function(){
	//console.log(this.elements);
	console.log(arguments);

	if(arguments.length==1){
		if(typeof arguments[0]=='string'){
			for(var i in this.elements){
				return getstyle(this.elements[i],arguments[0])
			}
		}else{
			console.log(arguments[0])
			for(var key in arguments[0]){
				console.log(key);
				console.log(arguments[0][key]);
				for(var i in this.elements){
					this.elements[i].style[key]=arguments[0][key];
				}
			}
		}
		
	}else{
		for(var i in this.elements){
			this.elements[i].style[arguments[0]]=arguments[1]
		}
	}
	//alert(1232)
}
function $(reg){
	return new jquery(reg);
}



