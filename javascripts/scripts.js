sweetAlert("Welcome to my website");


$('.fluid').fluidbox();


$('.menu a').anchorScroll( {offsetTop: 80, scrollEnd: function () {

  // Screenreaders vs alert
  sweetAlert("done scrolling!");

}  } );
