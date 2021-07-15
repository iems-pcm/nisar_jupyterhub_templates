// JavaScript Document

// console.log() fix and support for .indexOf() in IE
var alertFallback = false;
if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
  if (alertFallback) {
      console.log = function(msg) {
        alert(msg);
      };
  } else {
      console.log = function() {};
  }
} 




/* --- VARS --- */

var thisUrl = window.location.href.toString();




/* --- ON READY --- */

$(function() {
		
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	console.log("Page is ready");
	
	var acctNavH = $('ul#body_top_account_nav').height();
	var accountNavIsTwoLines = acctNavH > 20;
	if (accountNavIsTwoLines) {
	  $('ul#body_top_account_nav').css('margin-top', '-=9px');
	  $('ul#body_top_account_nav li:first-child').css({'width': '100%', 'text-align': 'left'});
	  $('ul#body_top_account_nav li:nth-child(2)').remove();
  }
  $('ul#body_top_account_nav').css('visibility', 'visible');
  
	
	// This has to be on load to prevent radio buttons from showing
  var ratingsExist = $('div.star_ratings').length > 0;
  console.log('ratingsExist: ' + ratingsExist);
  if (ratingsExist) initRatings();
	
});



// handle detail view star ratings
function initRatings () 
{
  console.log("initRatings()");
  
  $('div.rating-cancel').css('display', 'none');
  $('div.star_ratings').css('visibility', 'visible');
  
}




/* --- UTILS --- */

function gotoUrl(target)
{
	if (target != null && target != '') {
		document.location.href = target;
	}
}

function verifyGotoUrl(target, message)
{
	if (confirm(message)) gotoUrl(target);
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
	
	
	
	
/* --- SHARE BUTTON FUNCTIONALITY --- */
function facebookShare () {
  window.open('http://www.facebook.com/sharer.php?u=' + document.URL, 'newWindow', 'toolbar=no,width=600,height=300');                
}

function twitterShare () {
  window.open('http://twitter.com/intent/tweet?original_referer=' + document.URL + '&text=Check out JPL Infographics: &url=' + thisUrl, 'newWindow', 'toolbar=no,width=600,height=350');
}

function googleShare () {                
  window.open('https://plusone.google.com/_/+1/confirm?hl=en&url=' + document.URL, 'newWindow', 'toolbar=no,width=600,height=300' );
}

function emailShare () {
  window.open('http://www.jpl.nasa.gov/email.cfm?theURL=' + document.URL, 'share', 'width=406, height=310');
}
;
