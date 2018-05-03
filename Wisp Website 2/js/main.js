$(document).ready(main);



function main(){

    $('.page-heading').addClass('page-heading--loaded');

    $('.menu_bar').click(function(){
        // $('nav').toggle();

        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });


    $(".link-navbar--connect").click(function() {
        $('html, body').animate({
            scrollTop: $("#connect").offset().top
        }, 800);
    });

        $navbarToggle = $('.navbar-inverse.navbar-xcloud .navbar-toggle')

    $(".navbar-toggle").click(function() {

        $xcoreSection.toggleClass('nav-dropdown');

        if ($centerContainer.hasClass(dropdownClass)) {

            // Add delay if removing dropdown, to prevent
            // flash of white when container changes back
            setTimeout(function(){
                $centerContainer.removeClass(dropdownClass);
            }, 330);

        }
        else{
            $centerContainer.addClass(dropdownClass);
        }

        // Swap light and dark themes for logo and
        // navbar toggle on X Cloud page
        var origLogo = $xcloudNavbarLogo.attr('src'),
        lightLogo = $xcloudNavbarLogo.data('light'),
        darkLogo = $xcloudNavbarLogo.data('dark'),
        navbarLightClass = 'navbar-toggle-light';

        $navbarToggle.toggleClass(navbarLightClass);

        if (origLogo == lightLogo) {
            $xcloudNavbarLogo.attr('src', darkLogo);
        }
        else{
            $xcloudNavbarLogo.attr('src', lightLogo);
        }

    });


    // Toggle mobile nav menu on click
    $('.nav-toggle').click(function(){
        $('.main-nav').toggleClass('active');
        $('#nav-menu').toggleClass('active');
      

    });



}
