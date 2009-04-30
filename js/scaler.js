(function(){
	var db= document.body;
	var img= document.getElementById('holder').getElementsByTagName('img')[0];
	
	var dbsize={};
	var imgsrc= img.src;
	var keyStop= function(e) {
		var e=window.event||e||{};
		var tag = e.target.tagName.toLowerCase();
		if(tag != 'textarea' &&
				!(tag=='input' &&(e.target.type=='text' || e.target.type == 'password'))){
			if(e.keyCode==32||e.keyCode==39||e.keyCode==40){
				if(e.preventDefault)e.preventDefault();
				else e.returnValue=false;
			}
		}
	}
	
	if(this.addEventListener)window.addEventListener('keydown', keyStop, false);
	else window.attachEvent('onkeydown', keyStop);
	
	setInterval(function(){
		window.scrollTo(0,0);
		if(img.complete) {
			if(db.clientWidth != dbsize.w||db.clientHeight!=dbsize.h||img.src!=imgsrc){
				imgsrc=img.src;
				dbsize.w=db.clientWidth;
				dbsize.h=db.clientHeight;
				
				var newwidth=Math.round(dbsize.h*(img.offsetWidth/img.offsetHeight));
				
				img.style.width=(dbsize.w>newwidth?dbsize.w:newwidth)+'px';
			}
		}		
	}, 300);	
})();

