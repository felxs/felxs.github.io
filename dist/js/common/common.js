;(function(){
	var target = document.getElementById('J-nav');
	document.getElementById('J-tg-btn').onclick = function(){
		var className = target.getAttribute('class');
		if(className.indexOf('expland') != -1){
			className = 'p-nav';
		}else{
			className = 'p-nav expland';
		}
		target.setAttribute('class',className);
	}
})();