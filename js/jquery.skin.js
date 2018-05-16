//
//(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g;var o=e.cookie=function(r,u,a){if(u!==n){a=e.extend({},o.defaults,a);if(u===null){a.expires=-1}if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}u=o.json?JSON.stringify(u):String(u);return t.cookie=[encodeURIComponent(r),"=",o.raw?u:encodeURIComponent(u),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=o.raw?i:s;var h=t.cookie.split("; ");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");if(c(v.shift())===r){var m=c(v.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==null){e.cookie(t,null,n);return true}return false}})(jQuery,document)
//
//
//jQuery(document).ready(function($) {
//    $('#style-option .button').click(function() {
//       $('#style-option').toggleClass('style-option-toggle');
//    });
//    //Change color skin
//    function checkCSS(){
//        var _css = $.cookie('css');
//        if ( _css ) $('#color-style').attr({href : 'css/colors/'+ _css + '.css'});
//        if (_css == 'default') {
//            $(".logo img, .logo-nav img").attr("src","images/logo-"+_css+".png")
//        } else {
//            $(".logo img, .logo-nav img").attr("src","images/logo.png")
//        }
//    }
//    checkCSS();
//    $('.color').click(function(e){
//        e.preventDefault();
//        style = $(this).attr('data-href');
//        $('#color-style').attr({href : 'css/colors/'+ style + '.css'});
//        if (style == 'default') {
//            $(".logo img, .logo-nav img").attr("src","images/logo-"+style+".png")
//        } else {
//            $(".logo img, .logo-nav img").attr("src","images/logo.png")
//        }
//        $.cookie('css', style);
//    });
//});