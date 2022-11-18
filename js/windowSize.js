function auotSize(){
    // 获取窗口宽度
    var _winWidth=0;
    var _winHeight=0;
    if (window.innerWidth)
        _winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        _winWidth = document.body.clientWidth;
    // 获取窗口高度
    if (window.innerHeight)
        _winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        _winHeight = document.body.clientHeight;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        _winHeight = document.documentElement.clientHeight;
        _winWidth = document.documentElement.clientWidth;

    }
    var get_bgSize=document.getElementById("get_bgSize");
    var size = _winWidth/_winHeight
    
    if(_winHeight>_winWidth){
        var temp = _winWidth;
        _winWidth=_winHeight;
        _winHeight=temp;
    }
    get_bgSize.style.width=_winWidth+'px';
    get_bgSize.style.height=_winHeight+'px';
    get_bgSize.style.backgroundSize=_winWidth+'px'+' '+_winHeight+'px';
    // document.getElementById("title").style.fontSize=(size*10)+'px';
    // document.getElementById("title").style.letterSpacing=size*0.2+'em';
    
    // alert(_winWidth+'*'+_winHeight+'*'+size);
}

auotSize();

$(window).resize(function(){				         //  监控窗口宽度变化
    //   if( $(window).width() < 980 ) {		         //  屏宽1330触发
    //       $(".show_123").css('display','none'); 	 //  隐去一部分
    //   }else{
    //       $(".show_123").css('display','');		     //  显示内容
    //   }
      auotSize();
      
});

