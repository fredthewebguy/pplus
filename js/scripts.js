// smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 400);
            return false;
        }
    }
});  

// scroll back to top
$("#back-top").hide();
    
$(function () {
    // if user scrolls past specific point
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
});

// scroll body to 0px on click
$('#back-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

// show bottom alert afer XXX seconds
setTimeout(function(){$('.signup-alert').addClass('show-alert');}, 10000);

// hide bottom alert
$('.no-thanks').click(function(){
    $('.signup-alert').removeClass('show-alert');
    return false;
});

//open external links automatically in new tab
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});

// toggle search
$('#toggleSearch').click(function(){
    $('.search-panel').toggleClass('open-search');
    return false;
});

// close search
$('.close-search').click(function(){
    $('.search-panel').toggleClass('open-search');
    return false;
});

// make header sticky
$(window).scroll(function() {
if ($(this).scrollTop() > 90){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

