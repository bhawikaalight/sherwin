	function loadNav(populationCode) {
	    $("#inc-header").load("inc-header-" + populationCode + ".html")
	    $("#inc-verticalnav").load("inc-verticalnav-" + populationCode + ".html")

	    if ((populationCode == "salaried") || (populationCode == "bargaining") || (populationCode == "expat") || (populationCode == "hi")) {
	        $("#inc-footer").load("inc-footer.html");
	        console.log("population selected", populationCode);
	    } else if ((populationCode == "pr") || (populationCode == "vi")) {
	        $("#inc-footer").load("inc-footer-pr-vi.html")
	    } else {
	        $("#inc-footer").load("inc-footer-" + populationCode + ".html")
	    }
	}

	function loadSearch() {
	    if ($('.search_button').hasClass('on')) {
	        $('.search_button').removeClass('on');
	        $('.search_bar').slideUp();
	        $('.search_bar').attr('aria-expanded', 'false');
	        $('.search_button').attr('aria-label', 'Display hidden site search field');
	    } else {
	        $('.search_button').addClass('on');
	        $('.search_bar').slideDown();
	        $('.search_bar').attr('aria-expanded', 'true');
	        $('.ccm-search-block-form .ccm-search-block-text').focus();
	        $('.search_button').attr('aria-label', 'Hide site search field')
	    }

	}

	function loadMobileNav() {
	    if ($('.mobile_nav_button').hasClass('open')) {
	        $('.mobile_nav_button').removeClass('open');
	        $('.nav_content').slideUp();
	        $('.main_navigation_phone .nav_content ul li ul').slideUp();
	        $('.main_navigation_phone ul li a').attr('tabindex', '-1');
	        $('.mobile_nav_button').attr('aria-expanded', false);
	    } else {
	        $('.mobile_nav_button').addClass('open');
	        $('.nav_content').slideDown();
	        $('.mobile_nav_button').attr('aria-expanded', true);
	        $('.main_navigation_phone ul li a').attr('tabindex', '0');
	    }
	}
	$(document).ready(function () {
	    if (!(sessionStorage.getItem("pop"))) {
	        window.location = "home.html";
	    }

	    loadNav(sessionStorage.getItem("pop"));
	    $(".plan-selection").html(sessionStorage.getItem("selectedText"));

	});