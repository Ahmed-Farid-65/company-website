import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js'

$(function(){
    // slideDown and slideUp For latest-company-projects
    $('.thumbnail').hover(function(){
        $(this).find('.project-category').hide();
        $(this).find('.caption').slideDown(250);
    },
    function(){
        $(this).find('.caption').slideUp(250);
        $(this).find('.project-category').show();
    }
    );
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;