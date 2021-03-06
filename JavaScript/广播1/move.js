
//startMove() obj 要运动的对象    json{属性名:目标值}marginLeft:100,top:200

//fn 回调函数 动画执行完执行的操作

function startMove(obj, json, fn) {
	clearInterval(obj.iTimer);
	var iCur = 0;
	var iSpeed = 0;
		
	obj.iTimer = setInterval(function() {
		
		var iBtn = true;
					
		for ( var attr in json ) {
							
			var iTarget = json[attr];
			
			if (attr == 'opacity') {
				iCur = Math.round(getStyle( obj, 'opacity' ) * 100);
			} else {
				iCur = parseInt(getStyle(obj, attr));
			}
			
			iSpeed = ( iTarget - iCur ) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if (iCur != iTarget) {
				iBtn = false;
				if (attr == 'opacity') {
					obj.style.opacity = (iCur + iSpeed) / 100;
					obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}
			
		}
		
		if (iBtn) {
			clearInterval(obj.iTimer);
			fn && fn.call(obj);
		}
		
	}, 30);
}

function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}