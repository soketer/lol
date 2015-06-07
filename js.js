
$('.registration').hide();
$('.prizes').hide();
$('.timetable').hide();
$('.teams').hide();

$('div.nav > ul > li:nth-child(5)').addClass('act');

$('div.nav > ul > li').click(function(){
    var name  = $(this).text().toLowerCase();
    
    $(this).siblings('li').removeClass('act');
    $(this).addClass('act');
    $('div.active').children('div').hide();
    $('div.active div.'+name).show();
});
