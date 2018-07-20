

$(document).ready(function(){
  particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
  shuffleBackgroundImage();
});
    
    function shuffleBackgroundImage() {
      var rand = Math.floor((Math.random() * 21) + 1);
      var imgUrl = "url(../img/bg_" + rand + ".jpeg)";
      $(".headerContainer").css('background-image', imgUrl);
    }

    $(document).scroll(function(){
        var s = $(this).scrollTop();
        var o = Math.min(1,s/100);
        $("#quote").css("opacity",o);
        $("#helloThere").css("opacity",1-o);
        stickyContentHelper(s);
    });
    
    function stickyContentHelper(cursor){
        $(".sticky-content").show();
        if (cursor >= $("#about-2").offset().top) {
            $("#about-1").hide();
        }
        
        if (cursor >= $("#experience-2").offset().top) {
            $("#experience-1").hide();
        }    
    }
    
    function scrollToElement(el) {
        var selectorName = "#" + $(el).attr("id");
        $('html, body').animate({
        scrollTop: $(el).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = selectorName;
      });
    }
    
    $(".arrow-down").click(function(){
        scrollToElement($("#about"));
    });
    
    $(".arrow-up").click(function(){
        scrollToElement($("#home"));
    });
    
    $(".hire-me").click(function(){
        scrollToElement($("#contact"));
    });
    
    $(".arrow-down").mouseenter(function(){
        //$("#headerUp").css("background-color","rgba(0,0,0,0.4)");
        //$("#header").css("background-color","rgba(0,0,0,0.5)");
        //$("#headerDown").css("background-color","rgba(0,0,0,0.4)");
    });
    
     $(".arrow-down").mouseleave(function(){
        //$("#headerUp").css("background-color","rgba(0,0,0,0.7)");
        //$("#header").css("background-color","rgba(0,0,0,0.7)");
        //$("#headerDown").css("background-color","rgba(0,0,0,0.7)");
    });
    
    
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
    
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})