function base(){
    $('.header .header_right .search_button').on('keydown', function(e) {
        if (e.which == 13 || e.which == 32) {
            e.preventDefault();
            $(this).trigger('click');
        }
    });
    $('.header .header_right .search_button').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.search_bar').slideUp();
            $('.search_bar').attr('aria-expanded', 'false');
            $('.search_button').attr('aria-label', 'Display hidden site search field');
        }else{
            $(this).addClass('on');
            $('.search_bar').slideDown();
            $('.search_bar').attr('aria-expanded', 'true');
            $('.ccm-search-block-form .ccm-search-block-text').focus();
            $('.search_button').attr('aria-label', 'Hide site search field')
        }
    });

    $('.mobile_nav_button').click(function(){
        if ($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.nav_content').slideUp();
            $('.main_navigation_phone .nav_content ul li ul').slideUp();
            $('.main_navigation_phone ul li a').attr('tabindex', '-1');
            $(this).attr('aria-expanded', false);
        }else{
            $(this).addClass('open');
            $('.nav_content').slideDown();
            $(this).attr('aria-expanded', true);
            $('.main_navigation_phone ul li a').attr('tabindex', '0');
        }
    });

    $(document).on('click','.mobile-close',function(){
        $('.mobile_nav_button').click();
    });



    $(window).load(function(){
        var title = $(".content").find("h1");
        var titleText = title.text();
        var removeSlash = titleText.replace(/\//g, '-');
        var hashTitle = removeSlash.replace(/\s+/g, '-').toLowerCase();
        var skip = $(".skip-nav");
        skip.attr("href", "#" + hashTitle);
        title.attr("id", hashTitle);
    });

        //Google Analytics PDF downloads tracker

	$('a').each(function(){

		if($(this).attr('href') != undefined)
		{
			if(($(this).attr('href').toLowerCase().indexOf('.pdf') >= 0))
			{
				if($(this).attr("target") == null)
				{
					$(this).attr("target", "_blank");
				}
			}

			if(($(this).attr('href').toLowerCase().indexOf("http") >= 0) && !($(this).attr('href').toLowerCase().indexOf(window.location.host) >=0))
			{
				if($(this).attr("target") == null)
				{
					$(this).attr("target", "_blank");
				}
			}
		}
	});
        //track clicks to outside links
	addOutsideLinkTracking();

    $('.moreBtn').on('keypress', function(e) {
        if (e.which == 13 || e.which == 32) {
            if ($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).prev('a').removeClass('subnav_open');
                $(this).parent('li').children('ul').slideUp();
            }else{
                $(this).addClass('open');
                $('.main_navigation_phone .nav_content ul li ul').not($(this).parent('li').children('ul').slideDown()).slideUp();
                $(this).prev('a').toggleClass('subnav_open');
                $('.main_navigation_phone .nav_content ul li a').not($(this).prev('a')).removeClass('subnav_open');
                $(this).parent('li').children('ul').slideDown();
            }
        }
    });

$(document).ready(function(){
    $('.mobile_nav_button').on('keypress', function(e) {
        if (e.which == 13 || e.which == 32) {
            $(this).click();
        }
    });

    $(document).on('keypress','.mobile-close',function(){
        if (e.which == 13 || e.which == 32) {
            $('.mobile_nav_button').click();
        }
    });


//dropdowns
    $('img').removeAttr("border");
    $('.window_shade').on('keypress', function(e) {
        if (e.which == 13 || e.which == 32) {
            $(this).click();
        }
    });
    $(".window_shade").click(function(){
		if ($(this).hasClass('dropdown_on')){
            $(this).removeClass('dropdown_on');
            $(this).next('.dropdown_content').slideUp(400, function(){moveFooter();});
		}else{
            $(".window_shade").removeClass('dropdown_on');
            $(".dropdown_content").slideUp();
            $(this).addClass('dropdown_on');
            $(this).next('.dropdown_content').slideDown(400, function(){moveFooter();});
		}
    });

    $('img').each(function() {
        var altText = $(this).attr('alt');

        if(altText.includes('.png')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.jpg')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.JPG')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.PNG')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.PNG')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.gif')) {
            $(this).attr('alt', '');
        } else if(altText.includes('.GIF')) {
            $(this).attr('alt', '');
        }
    });

    $('table').each(function() {
        $(this).attr('role', 'presentation');
        $(this).find('th').attr('scope', 'col');
    });

    setTimeout(function(){ $('form .errors').focus(); }, 1000);

});

function moveFooter()
{
	$(window).trigger('resize');
}

}

function addOutsideLinkTracking(){
	$('a').each(function(){
		if($(this).attr('href') != null){
			var url = $(this).attr("href");
			if(($(this).attr('href').toLowerCase().indexOf("http") >= 0) && !($(this).attr('href').toLowerCase().indexOf(window.location.host) >=0)){
				var clickevent = "trackOutboundLink('"+url+"','External Link'); return true;";
				$(this).attr('onClick',clickevent);
			}else{
				if(($(this).attr('href').toLowerCase().indexOf('.pdf') >= 0)){
					var clickevent = "trackOutboundLink('"+url+"','PDF'); return true;";
					$(this).attr('onClick',clickevent);
				}
			}
		}
	});
}

var trackOutboundLink = function(url,action) {
	ga('send', 'event', 'outbound', action, url, {'transport': 'beacon'});
};

function moreButtonShim() {
    $('.main_navigation_phone .nav_content ul li .moreBtn').click(function(){
        if ($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).prev('a').removeClass('subnav_open');
            $(this).parent('li').children('ul').slideUp();
        }else{
            $(this).addClass('open');
            $('.main_navigation_phone .nav_content ul li ul').not($(this).parent('li').children('ul').slideDown()).slideUp();
            $(this).prev('a').toggleClass('subnav_open');
            $('.main_navigation_phone .nav_content ul li a').not($(this).prev('a')).removeClass('subnav_open');
            $(this).parent('li').children('ul').slideDown();
        }
    });
}

$(".dropdown-area").each(function(){
    var title = $(this).find(".dropdown-title span").text();
    var dropdown = $(this).find(".dropdown-title");
    dropdown.attr("data-link-info", title);
});
$(".dropdown-title").click(function(){
    if($(this).hasClass("on")) {
        $(this).removeClass("on");
        $(this).parent(".dropdown-area").removeClass("on");
        $(this).next(".dropdown-content").slideUp();
        $(this).attr('aria-expanded', 'false');
        $(this).find('h2').find('span').text('');
        $(this).find('h2').find('span').append('<img src="/packages/sherwin_benefits_programs/blocks/plan_variable_content/templates/expandable_plan_content/images/paint_bucket_red.png" alt="" />');
    } else {
        $(this).addClass("on");
        $(this).parent(".dropdown-area").addClass("on");
        $(this).next(".dropdown-content").slideDown();
        $(this).attr('aria-expanded', 'true');
        $(this).find('h2').find('span').text('-')
    }
});
$('.dropdown-title').on('keydown', function(e) {
    if (e.which == 13 || e.which == 32) {
        $(this).trigger('click');
    }
});

