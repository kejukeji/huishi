function star(){
    //star
    var stars = $('.star');
    setInterval(function(){
        //toggle class
        //stars.toggleClass('on');
    },1000);

    stars.on('webkitTransitionEnd',function(e){
        e.stopPropagation();
    });



    //animate
    function drop(el,top,cb){
        el.animate({
            top:top
        },500,'ease-in',function(){
            el.animate({
                top:top-20
            },200,'linear',function(){
                el.animate({
                    top:top
                },200,'linear',function(){
                    cb && cb();
                });
            });
        });
    }

    function dropNext(i){
        drop(stars.eq(i),100*(i+1)+100,i<stars.length?function(){
            dropNext(i+1);
        }:null);
    }
    dropNext(0);
}
