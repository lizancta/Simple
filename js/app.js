var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper',{ hScrollbar: false, vScrollbar: false });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

/* * * * * * * *
 *
 * Use this for high compatibility (iDevice + Android)
 *
 */
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
/*
 * * * * * * * */


/* * * * * * * *
 *
 * Use this for iDevice only
 *
 */
//document.addEventListener('DOMContentLoaded', loaded, false);
/*
 * * * * * * * */


/* * * * * * * *
 *
 * Use this if nothing else works
 *
 */
//window.addEventListener('load', setTimeout(function () { loaded(); }, 200), false);
/*
 * * * * * * * */

 window.mySwipe = Swipe(document.getElementById('slider'));

$(document).ready(function(){
	inicializar();
 });
 function inicializar(){
 	$(".back1").css("background-image","url('img/imagen1.jpg')");
 	$(".back2").css("background-image","url('img/imagen2.jpg')");
 	$(".back3").css("background-image","url('img/imagen3.jpg')");
 	$(".back4").css("background-image","url('img/imagen4.jpg')");
 	$(".back5").css("background-image","url('img/imagen5.jpg')");

 	$( ".back1").on( "click", function() {
 		window.location = "list.html";
});
 }
