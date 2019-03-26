$(document).ready(function(){
//dropdowns
    $(".eligibility_dropdown_title").click(function(){
        if ($(this).hasClass('dropdown_on')){
            $(this).removeClass('dropdown_on');
            $(this).next('.eligibility_dropdown_content').slideUp(400, function(){moveFooter();});
        }else{
            $(".eligibility_dropdown_title").removeClass('dropdown_on');
            $(".eligibility_dropdown_content").slideUp();
            $(this).addClass('dropdown_on');
            $(this).next('.eligibility_dropdown_content').slideDown(400, function(){moveFooter();});
        }
    });
});

function moveFooter()
{
    $(window).trigger('resize');
}