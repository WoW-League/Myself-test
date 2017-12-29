$.fn.tab = function(evType){
	this.each(function(index){
	    var oBtn = $(this).find('.tab-nav li');
	    var oTab_con = $(this).find('.tab-con');
	    var oTab_item = $(this).find('.tab-con div');
	    var oRight = $(this).find('.right');
	    var oLeft = $(this).find('.left');
	    var num = 0;
	    var timer = null;
	    oTab_con.width(oBtn.length*oTab_item.outerWidth());
	    function tab(){
	        oBtn.eq(num).addClass('active').siblings().removeClass('active');
	        oTab_con.stop().animate({left:-num*oTab_item.outerWidth()+'px'});                        
	    }
	    function slide(){
	        num++;
	        if(num==oBtn.length){
	            num=0;
	        }
	        tab();            
	    }
	//纽扣点击
	    oBtn.each(function(count,element){
	        $(element).on(evType,function(){
	            num = count;
	            tab();
	        })
	    });
	//右按钮操作
	    oRight.click(function(){
	        slide();
	    });
	//左按钮操作
	    oLeft.click(function(){
	        num--;
	        if(num<0){
	            num=oBtn.length-1;
	        }
	        tab();
	    });
	//自动播放
	    timer = setInterval(function(){
	        slide();
	    },2000);
	    $(this).mouseover(function(){
	        clearInterval(timer);
	    });       
	    $(this).mouseout(function(){
	        timer = setInterval(function(){
	            slide();
	        },2000);
	    })       
	});
}