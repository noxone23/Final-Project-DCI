// this will open overlay
$("img.hamburger").click(function(){
    $("div.overlay").slideDown();
   // $("div.overlay").fadeIn();
});

// this will close overlay
$("img.close").click(function(){
    $("div.overlay").slideUp();
   // $("div.overlay").fadeOut();
});