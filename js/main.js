

$(document).ready(function () {
  var currentBackgroundArtwork = {};
  fetchBackgroundArtwork();
  particlesJS.load('particles-js', 'js/particles.json', function () {
  });

  function fetchBackgroundArtwork() {
    const url = "https://api.unsplash.com/photos/random?client_id=1fa21d4e47e24ead0406ece175ecf8e21ec942fcb1fe5d1d1bbb3f9871d14b37&collections=4320080";
    $.getJSON(url, function (data) {
      currentBackgroundArtwork = data;
      const imgUrl = "url(" + data.urls.full + ")";
      $(".headerContainer").css('background-image', imgUrl);
      updateArtworkCopyright();
    });
  }

  function updateArtworkCopyright() {
    const author = currentBackgroundArtwork.user.name;
    const link = currentBackgroundArtwork.user.links.html;
    $(".artwork-author").text(author);
    $(".artwork-author").attr("href", link);
  }
  $(window).resize(function () {
    $(".img-within").css("margin-top", 0);
  });

  $(document).scroll(function () {
    var s = $(this).scrollTop();
    var o = Math.min(1, s / 100);
    $("#quote").css("opacity", o);
    $("#helloThere").css("opacity", 1 - o);
    stickyContentHelper(s);

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
      $("#footer").css("color", "white");
      $(".made-with-heart").css("color", "red");
    } else {
      $("#footer").css("color", "#bdbdbd");
      $(".made-with-heart").css("color", "#bdbdbd");
    }
    justLoveAnimation();
    imgWithinHelper(s);
  });

  function justLoveAnimation() {
    var r = Math.floor(Math.random() * 255);
    var topHeight = $(window).scrollTop();
    var bottomHeight = $(window).scrollTop() + $(window).height();
    var g = Math.floor(Math.random() * 255);
    var justLoveOffset = $("#just-love").offset().top;
    if (bottomHeight > justLoveOffset && justLoveOffset > topHeight) {
      var b = Math.floor(Math.random() * 255);
      var colourText = "rgba(" + r + "," + g + "," + b + ", 0.5)";
      $("#just-love").css("color", colourText);
    }
  }

  function imgWithinHelper(cursor) {
    $(".framed-img").each(function () {
      var frameHeight = $(this).height();
      var imgHeight = $(this).children(".img-within").height();
      var heightDiff = imgHeight - frameHeight;
      var offset = - (cursor % heightDiff);
      var offsetText = offset + "px";
      $(this).children(".img-within").css("margin-top", offsetText);
    });
  }

  function stickyContentHelper(cursor) {
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
    }, 900, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = selectorName;
    });
  }

  $(".arrow-down").click(function () {
    scrollToElement($("#about"));
  });

  $(".arrow-up").click(function () {
    scrollToElement($("#home"));
  });

  $(".hire-me").click(function () {
    scrollToElement($("#contact"));
  });

  $(".arrow-down").mouseenter(function () {
    //$("#headerUp").css("background-color","rgba(0,0,0,0.4)");
    //$("#header").css("background-color","rgba(0,0,0,0.5)");
    //$("#headerDown").css("background-color","rgba(0,0,0,0.4)");
  });

  $(".arrow-down").mouseleave(function () {
    //$("#headerUp").css("background-color","rgba(0,0,0,0.7)");
    //$("#header").css("background-color","rgba(0,0,0,0.7)");
    //$("#headerDown").css("background-color","rgba(0,0,0,0.7)");
  });


  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function (event) {
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
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });
})