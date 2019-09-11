// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
//     $( this ).parent( 'li' ).addClass( 'active' );
//     // $( 'a:contains(Other Art)' ).parent( 'li' ).addClass( 'active' );
// }); 

//on each page, insert active in the li
//find "other art"
//go to parent > insert active


//         $(document).ready(function(){
//     $('#topheader .navbar-nav').find('li.active').removeClass('active');
//     $( 'li:contains(Other Art)' ).css('background-color','green');
// });


$(function () {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;
    
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".nav a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}