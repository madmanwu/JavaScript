function Per(){
	this.analog = document.getElementsByClassName("analog-select-text");
	this.select = document.getElementsByClassName("analog-select-con");
	this.brands = document.getElementById("s_brand_id");
	this.serie = document.getElementById("s_serie_id")
	this.init();
}
Per.prototype={

	init:function(){
		this.ajax();
	},
	ajax:function(){
		var xhr;
		var that = this;
		try{
			xhr=new XMLHttpRequest();
		}catch(e){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.open("get","js/data.json",true);
		xhr.send();

		xhr.onreadystatechange = function(){
			if(xhr.status==200){
				if(xhr.readyState==4){
					var data=JSON.parse(xhr.responseText);
					that.getdata(data);
				}
			}
		}
	},
	getdata:function(data){
		var that = this;
		var datalist=[];
		for(i in data){
			var bcon = document.createElement("b");
			bcon.innerHTML=i;
			datalist.push(bcon);

			data[i].forEach(function(item){
				var pcet = document.createElement("p");
				pcet.innerHTML = item.brand;
				pcet.val = item.types;
				datalist.push(pcet);
			})
		}
		datalist.forEach(function(item){
			that.brands.appendChild(item);
		}) 

		this.clicksj();
	},
	clicksj:function(){
		var that = this;
		this.analog[0].onclick = function(){
			that.select[0].style.display = "block";

		}
		var op = this.brands.getElementsByTagName("p");
		for(var i=0;i<op.length;i++){
			op[i].onmouseover = function(){
				this.style.background = "red";
			}
			op[i].onmouseout = function(){
				this.style.background = "";
			}
			op[i].onclick = function(){
				that.analog[0].innerHTML = this.innerHTML;
				that.select[0].style.display = "none";
				that.select[1].style.display = "block";

				var twot = this.val;
				var twolist=[];
				twot.forEach(function(item){
					twolist.push("<p>"+item.name+"</p>");
				})

				that.serie.innerHTML = twolist.join(" ");

				var ps =that.serie.getElementsByTagName("p");

				for(var i=0;i<ps.length;i++){
					ps[i].onmouseover = function(){
						this.style.background = "red";
					}
					ps[i].onmouseout = function(){
						this.style.background = "";
					}
					ps[i].onclick = function(){
						that.analog[1].innerHTML = this.innerHTML;
						that.serie.style.display = "none";
					}
				}
			}
		}
	}
}
new Per();