window.addEventListener('load',function(){
    getScrollTop();
    console.log('页面加载完成');
})

function getScrollTop(){
    window.addEventListener('scroll',function(){
        console.log('滚动了');
        scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(scrollTop);
        var opacity = scrollTop / 100;
        var header = document.querySelector('#header');
        header.style.backgroundColor = 'rgba(255,0,0,' + opacity + ')';
    })
}