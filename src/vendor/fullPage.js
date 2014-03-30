/**
 * fullPage 1.8.3
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b){b.fn.fullpage=function(c){function X(a){if(c.autoScrolling){a.preventDefault();var f=a.originalEvent;a=b(".section.active");if(!r&&!s)if(f=K(f),v=f.y,y=f.x,a.find(".slides").length&&Math.abs(z-y)>Math.abs(w-v))Math.abs(z-y)>b(window).width()/100*c.touchSensitivity&&(z>y?a.find(".controlArrow.next:visible").trigger("click"):a.find(".controlArrow.prev:visible").trigger("click"));else if(a=a.find(".slides").length?a.find(".slide.active").find(".scrollable"):a.find(".scrollable"),Math.abs(w-
v)>b(window).height()/100*c.touchSensitivity)if(w>v)if(0<a.length)if(A("bottom",a))b.fn.fullpage.moveSectionDown();else return!0;else b.fn.fullpage.moveSectionDown();else if(v>w)if(0<a.length)if(A("top",a))b.fn.fullpage.moveSectionUp();else return!0;else b.fn.fullpage.moveSectionUp()}}function Y(a){c.autoScrolling&&(a=K(a.originalEvent),w=a.y,z=a.x)}function p(a){if(c.autoScrolling){a=window.event||a;a=Math.max(-1,Math.min(1,a.wheelDelta||-a.deltaY||-a.detail));var f;f=b(".section.active");if(!r)if(f=
f.find(".slides").length?f.find(".slide.active").find(".scrollable"):f.find(".scrollable"),0>a)if(0<f.length)if(A("bottom",f))b.fn.fullpage.moveSectionDown();else return!0;else b.fn.fullpage.moveSectionDown();else if(0<f.length)if(A("top",f))b.fn.fullpage.moveSectionUp();else return!0;else b.fn.fullpage.moveSectionUp();return!1}}function h(a,f,d){var e={},g=a.position();if("undefined"!==typeof g){var g=g.top,l=F(a),q=a.data("anchor"),G=a.index(".section"),k=a.find(".slide.active"),m=b(".section.active"),
C=B;if(k.length)var s=k.data("anchor"),p=k.index();if(c.autoScrolling&&c.continuousVertical&&"undefined"!==typeof d&&(!d&&"up"==l||d&&"down"==l)){d?b(".section.active").before(m.nextAll(".section")):b(".section.active").after(m.prevAll(".section").get().reverse());x(b(".section.active").position().top);var h=m,g=a.position(),g=g.top,l=F(a)}m=m.index(".section")+1;a.addClass("active").siblings().removeClass("active");r=!0;"undefined"!==typeof q&&L(p,s,q);c.autoScrolling?(e.top=-g,a="#superContainer"):
(e.scrollTop=g,a="html, body");var n=function(){h&&h.length&&(d?b(".section:first").before(h):b(".section:last").after(h),x(b(".section.active").position().top))};c.css3&&c.autoScrolling?(b.isFunction(c.onLeave)&&!C&&c.onLeave.call(this,m,l),M("translate3d(0px, -"+g+"px, 0px)",!0),setTimeout(function(){n();b.isFunction(c.afterLoad)&&!C&&c.afterLoad.call(this,q,G+1);setTimeout(function(){r=!1;b.isFunction(f)&&f.call(this)},N)},c.scrollingSpeed)):(b.isFunction(c.onLeave)&&!C&&c.onLeave.call(this,m,
l),b(a).animate(e,c.scrollingSpeed,c.easing,function(){n();b.isFunction(c.afterLoad)&&!C&&c.afterLoad.call(this,q,G+1);setTimeout(function(){r=!1;b.isFunction(f)&&f.call(this)},N)}));t=q;c.autoScrolling&&(O(q),P(q,G))}}function n(a,f){var d=f.position(),e=a.find(".slidesContainer").parent(),g=f.index(),l=a.closest(".section"),q=l.index(".section"),h=l.data("anchor"),k=l.find(".fullPage-slidesNav"),m=f.data("anchor"),n=B;if(c.onSlideLeave){var p=l.find(".slide.active").index(),r;r=p>g?"left":"right";
n||b.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,h,q+1,p,r)}f.addClass("active").siblings().removeClass("active");"undefined"===typeof m&&(m=g);l.hasClass("active")&&(c.loopHorizontal||(l.find(".controlArrow.prev").toggle(0!=g),l.find(".controlArrow.next").toggle(!f.is(":last-child"))),L(g,m,h));c.css3?(d="translate3d(-"+d.left+"px, 0px, 0px)",a.find(".slidesContainer").toggleClass("easing",0<c.scrollingSpeed).css(Q(d)),setTimeout(function(){n||b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,
h,q+1,m,g);s=!1},c.scrollingSpeed,c.easing)):e.animate({scrollLeft:d.left},c.scrollingSpeed,c.easing,function(){n||b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,h,q+1,m,g);s=!1});k.find(".active").removeClass("active");k.find("li").eq(g).find("a").addClass("active")}function R(){B=!0;var a=b(window).width();k=b(window).height();c.resize&&Z(k,a);b(".section").each(function(){parseInt(b(this).css("padding-bottom"));parseInt(b(this).css("padding-top"));c.verticalCentered&&b(this).find(".tableCell").css("height",
S(b(this))+"px");b(this).css("height",k+"px");if(c.scrollOverflow){var a=b(this).find(".slide");a.length?a.each(function(){D(b(this))}):D(b(this))}a=b(this).find(".slides");a.length&&n(a,a.find(".slide.active"))});b(".section.active").position();a=b(".section.active");a.index(".section")&&h(a);B=!1}function Z(a,c){var d=825,e=a;825>a||900>c?(900>c&&(e=c,d=900),d=(100*e/d).toFixed(2),b("body").css("font-size",d+"%")):b("body").css("font-size","100%")}function P(a,f){c.navigation&&(b("#fullPage-nav").find(".active").removeClass("active"),
a?b("#fullPage-nav").find('a[href="#'+a+'"]').addClass("active"):b("#fullPage-nav").find("li").eq(f).find("a").addClass("active"))}function O(a){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"))}function A(a,b){if("top"===a)return!b.scrollTop();if("bottom"===a)return b.scrollTop()+b.innerHeight()>=b[0].scrollHeight}function F(a){var c=b(".section.active").index(".section");a=a.index(".section");return c>a?"up":"down"}function D(a){a.css("overflow",
"hidden");var b=a.closest(".section"),d=a.find(".scrollable");if(d.length)var e=a.find(".scrollable").get(0).scrollHeight;else e=a.get(0).scrollHeight,c.verticalCentered&&(e=a.find(".tableCell").get(0).scrollHeight);b=k-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));e>b?d.length?d.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".tableCell").wrapInner('<div class="scrollable" />'):a.wrapInner('<div class="scrollable" />'),a.find(".scrollable").slimScroll({height:b+
"px",size:"10px",alwaysVisible:!0})):(a.find(".scrollable").children().first().unwrap().unwrap(),a.find(".slimScrollBar").remove(),a.find(".slimScrollRail").remove());a.css("overflow","")}function T(a){a.addClass("table").wrapInner('<div class="tableCell" style="height:'+S(a)+'px;" />')}function S(a){var b=k;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("section")||(b=a.closest(".section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=k-a;return b}function M(a,c){b("#superContainer").toggleClass("easing",
c);b("#superContainer").css(Q(a))}function H(a,c){"undefined"===typeof c&&(c=0);var d=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".section").eq(a-1);a===t||d.hasClass("active")?U(d,c):h(d,function(){U(d,c)})}function U(a,b){if("undefined"!=typeof b){var c=a.find(".slides"),e=c.find('[data-anchor="'+b+'"]');e.length||(e=c.find(".slide").eq(b));e.length&&n(c,e)}}function $(a,b){a.append('<div class="fullPage-slidesNav"><ul></ul></div>');var d=a.find(".fullPage-slidesNav");d.addClass(c.slidesNavPosition);
for(var e=0;e<b;e++)d.find("ul").append('<li><a href="#"><span></span></a></li>');d.css("margin-left","-"+d.width()/2+"px");d.find("li").first().find("a").addClass("active")}function L(a,b,d){var e="";c.anchors.length&&(a?("undefined"!==typeof d&&(e=d),"undefined"===typeof b&&(b=a),I=b,location.hash=e+"/"+b):("undefined"!==typeof a&&(I=b),location.hash=d))}function aa(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",
MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var e in c)void 0!==a.style[e]&&(a.style[e]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[e]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}function K(a){var b=[];window.navigator.msPointerEnabled?(b.y=a.pageY,b.x=a.pageX):(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function x(a){c.css3?M("translate3d(0px, -"+a+"px, 0px)",!1):b("#superContainer").css("top",
-a)}function Q(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}c=b.extend({verticalCentered:!0,resize:!0,slidesColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",controlArrowColor:"#fff",loopBottom:!1,loopTop:!1,loopHorizontal:!0,autoScrolling:!0,scrollOverflow:!1,css3:!1,paddingTop:0,paddingBottom:0,fixedElements:null,
normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,continuousVertical:!1,animateAnchor:!0,afterLoad:null,onLeave:null,afterRender:null,afterSlideLoad:null,onSlideLeave:null},c);c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,console&&console.log&&console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));var N=600;b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".section.active");c.autoScrolling?
(b("html, body").css({overflow:"hidden",height:"100%"}),a.length&&x(a.position().top)):(b("html, body").css({overflow:"auto",height:"auto"}),x(0),b("html, body").scrollTop(a.position().top))};b.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};b.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",p,!1),document.addEventListener("wheel",p,!1)):document.attachEvent("onmousewheel",p):document.addEventListener?(document.removeEventListener("mousewheel",
p,!1),document.removeEventListener("wheel",p,!1)):document.detachEvent("onmousewheel",p)};b.fn.fullpage.setAllowScrolling=function(a){a?(b.fn.fullpage.setMouseWheelScrolling(!0),E&&(b(document).off("touchstart MSPointerDown").on("touchstart MSPointerDown",Y),b(document).off("touchmove MSPointerMove").on("touchmove MSPointerMove",X))):(b.fn.fullpage.setMouseWheelScrolling(!1),E&&(b(document).off("touchstart MSPointerDown"),b(document).off("touchmove MSPointerMove")))};b.fn.fullpage.setKeyboardScrolling=
function(a){c.keyboardScrolling=a};var s=!1,E=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),k=b(window).height(),r=!1,B=!1,t,I;b.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=aa());b("body").wrapInner('<div id="superContainer" />');if(c.navigation){b("body").append('<div id="fullPage-nav"><ul></ul></div>');var u=b("#fullPage-nav");u.css("color",c.navigationColor);u.addClass(c.navigationPosition)}b(".section").each(function(a){var f=b(this),d=b(this).find(".slide"),
e=d.length;a||0!==b(".section.active").length||b(this).addClass("active");b(this).css("height",k+"px");(c.paddingTop||c.paddingBottom)&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.slidesColor[a]&&b(this).css("background-color",c.slidesColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(c.navigation){var g="";c.anchors.length&&(g=c.anchors[a]);a=c.navigationTooltips[a];"undefined"===typeof a&&(a="");u.find("ul").append('<li data-tooltip="'+
a+'"><a href="#'+g+'"><span></span></a></li>')}if(0<e){var g=100*e,h=100/e;d.wrapAll('<div class="slidesContainer" />');d.parent().wrap('<div class="slides" />');b(this).find(".slidesContainer").css("width",g+"%");b(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');"#fff"!=c.controlArrowColor&&(b(this).find(".controlArrow.next").css("border-color","transparent transparent transparent "+c.controlArrowColor),b(this).find(".controlArrow.prev").css("border-color",
"transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||b(this).find(".controlArrow.prev").hide();c.slidesNavigation&&$(b(this),e);d.each(function(a){a||0!=f.find(".slide.active").length||b(this).addClass("active");b(this).css("width",h+"%");c.verticalCentered&&T(b(this))})}else c.verticalCentered&&T(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling);var a=b(".section.active").find(".slide.active");if(a.length&&(0!=b(".section.active").index(".section")||
0==b(".section.active").index(".section")&&0!=a.index())){var f=c.scrollingSpeed;b.fn.fullpage.setScrollingSpeed(0);n(b(".section.active").find(".slides"),a);b.fn.fullpage.setScrollingSpeed(f)}c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");c.navigation&&(u.css("margin-top","-"+u.height()/2+"px"),u.find("li").eq(b(".section.active").index(".section")).find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).appendTo("body");if(c.scrollOverflow)b(window).on("load",function(){b(".section").each(function(){var a=
b(this).find(".slide");a.length?a.each(function(){D(b(this))}):D(b(this))});b.isFunction(c.afterRender)&&c.afterRender.call(this)});else b.isFunction(c.afterRender)&&c.afterRender.call(this);a=window.location.hash.replace("#","").split("/")[0];a.length&&(f=b('[data-anchor="'+a+'"]'),!c.animateAnchor&&f.length&&(x(f.position().top),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a,f.index(".section")+1),f.addClass("active").siblings().removeClass("active")));b(window).on("load",function(){var a=window.location.hash.replace("#",
"").split("/"),b=a[0],a=a[1];b&&H(b,a)})});var V,J=!1;b(window).scroll(function(a){if(!c.autoScrolling){var f=b(window).scrollTop();a=b(".section").map(function(){if(b(this).offset().top<f+100)return b(this)});a=a[a.length-1];if(!a.hasClass("active")){J=!0;var d=F(a);b(".section.active").removeClass("active");a.addClass("active");var e=a.data("anchor");b.isFunction(c.onLeave)&&c.onLeave.call(this,a.index(".section"),d);b.isFunction(c.afterLoad)&&c.afterLoad.call(this,e,a.index(".section")+1);O(e);
P(e,0);c.anchors.length&&!r&&(t=e,location.hash=e);clearTimeout(V);V=setTimeout(function(){J=!1},100)}}});var w=0,z=0,v=0,y=0;b.fn.fullpage.moveSectionUp=function(){var a=b(".section.active").prev(".section");a.length||!c.loopTop&&!c.continuousVertical||(a=b(".section").last());a.length&&h(a,null,!0)};b.fn.fullpage.moveSectionDown=function(){var a=b(".section.active").next(".section");a.length||!c.loopBottom&&!c.continuousVertical||(a=b(".section").first());(0<a.length||!a.length&&(c.loopBottom||
c.continuousVertical))&&h(a,null,!1)};b.fn.fullpage.moveTo=function(a,c){var d="",d=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".section").eq(a-1);"undefined"!==c?H(a,c):0<d.length&&h(d)};b(window).on("hashchange",function(){if(!J){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1],c="undefined"===typeof t,e="undefined"===typeof t&&"undefined"===typeof a;(b&&b!==t&&!c||e||!s&&I!=a)&&H(b,a)}});b(document).keydown(function(a){if(c.keyboardScrolling&&!r)switch(a.which){case 38:case 33:b.fn.fullpage.moveSectionUp();
break;case 40:case 34:b.fn.fullpage.moveSectionDown();break;case 37:b(".section.active").find(".controlArrow.prev:visible").trigger("click");break;case 39:b(".section.active").find(".controlArrow.next:visible").trigger("click")}});b(document).on("click","#fullPage-nav a",function(a){a.preventDefault();a=b(this).parent().index();h(b(".section").eq(a))});b(document).on({mouseenter:function(){var a=b(this).data("tooltip");b('<div class="fullPage-tooltip '+c.navigationPosition+'">'+a+"</div>").hide().appendTo(b(this)).fadeIn(200)},
mouseleave:function(){b(this).find(".fullPage-tooltip").fadeOut().remove()}},"#fullPage-nav li");c.normalScrollElements&&(b(document).on("mouseover",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!1)}),b(document).on("mouseout",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!0)}));b(".section").on("click",".controlArrow",function(){if(!s){s=!0;var a=b(this).closest(".section").find(".slides"),c=a.find(".slide.active"),d=null,d=b(this).hasClass("prev")?
c.prev(".slide"):c.next(".slide");d.length||(d=b(this).hasClass("prev")?c.siblings(":last"):c.siblings(":first"));n(a,d)}});b(".section").on("click",".toSlide",function(a){a.preventDefault();a=b(this).closest(".section").find(".slides");a.find(".slide.active");var c=null,c=a.find(".slide").eq(b(this).data("index")-1);0<c.length&&n(a,c)});if(!E){var W;b(window).resize(function(){clearTimeout(W);W=setTimeout(R,500)})}var ba="onorientationchange"in window?"orientationchange":"resize";b(window).bind(ba,
function(){E&&R()});b(document).on("click",".fullPage-slidesNav a",function(a){a.preventDefault();a=b(this).closest(".section").find(".slides");var c=a.find(".slide").eq(b(this).closest("li").index());n(a,c)})}})(jQuery);