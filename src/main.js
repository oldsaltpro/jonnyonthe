/*! FullPage Custom */
$(document).ready(function() {
	$.fn.fullpage({
		verticalCentered: true,
		resize: false,
		scrollingSpeed: 300,
		slidesColor: ['#99d0d1', '#eff8ef', '#fffcdd', '#a37751'],
		anchors: ['welcome', 'about', 'skillset', 'contact' ],
		easing: 'swing',
		css3: true,
		fixedElements: '#mainNav, #slideMenu',
		animateAnchor: false,
		menu: '#slideMenu',
		scrollOverflow: true,
        'afterLoad': function(anchorlink,index){
            if(index == '2'){
                var logo = document.getElementById("aboutHeader");
                TweenLite.to(logo, 1, {left:"632px"});
            }
        },
        'onLeave': function(index){
            if(index == '2'){
                var logo = document.getElementById("aboutHeader");
                TweenLite.set(logo, {clearProps:"left"});
            }
        }
	});
});