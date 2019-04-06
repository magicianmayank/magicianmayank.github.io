jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
  dropRadius: 10,
  perturbance: 0.006,
 
});
    
     $(window).scroll(function(){
        
        var top = $(window).scrollTop();
        if(top>=60){
            $("nav").addClass('secondary');
        }
        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }
        
    });

 
// Wrap every letter in a span
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
    
 $('.gallery-class').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
      }
    });
    
$('a.smooth-scroll').click(function (event){
    event.preventDefault();
    var section = $(this).attr("href");
    
    $('html, body').animate({
        scrollTop: $(section).offset().top - -2
    },1250,"easeOutQuad");
}); 
    
    
    
$('a.btn1').click(function (event){
    event.preventDefault();
    var section = $(this).attr("href");
    
    $('html, body').animate({
        scrollTop: $(section).offset().top - -2
    },1250,"easeOutQuad");
}); 
$('a.btn2').click(function (event){
    event.preventDefault();
    var section = $(this).attr("href");
    
    $('html, body').animate({
        scrollTop: $(section).offset().top - -2
    },1250,"easeOutQuad");
});    
    
 
    

    
});


