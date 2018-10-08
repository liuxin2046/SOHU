$(function(){
    var mySlider = $('.mySlider');
    var num = $('.dot>ul.num');
    var sliderIndex = 0;
    // console.log(mySlider);
    //根据图片的数量添加相应的dot
    for(var i=0;i<mySlider.length;i++){
        var li = $('<li></li>');
        num.append(li);
    }
    var dots = $('.dot>ul.num>li');
        // console.log('dots:'+dots);
        showSlider();
        function showSlider(){
        console.log('当前的sliderIndex: '+sliderIndex);
        //将全部图片设置为隐藏
        for(var i=0;i<mySlider.length;i++){
            mySlider.children().eq(i).css({"display":"none"});
        }
        sliderIndex++;
        if(sliderIndex>=mySlider.length){
            sliderIndex = 0;
        }
        
        //将dot的active状态清空
        for(var i=0;i<dots.length;i++){
            dots.eq(i).removeClass('active');
        }
        //设置显示的图片
        mySlider.children().eq(sliderIndex).css({"display":"block"});
        //设置显示的dot
        dots.eq(sliderIndex).addClass('active');
        setTimeout(showSlider,2000);
    }




})