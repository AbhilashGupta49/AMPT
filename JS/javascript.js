/*    ABHILASH GUPTA     */

var menufromtop;
var flag=0;
var windowwidth=$(window).width();
var changeheightopen;
var changeheightclose;






$(window).scroll(function(){
    if ($(window).scrollTop() >= menufromtop) 
	{
		$( ".navlistdiv" ).addClass("navlistchange");
		$( ".sitenamediv" ).addClass("sitenamechange");
		$( ".navmenu" ).addClass("navmenuchange");
	}
	
      
   
	
    else 
	{
		$( ".navmenu" ).removeClass("navmenuchange");
		$( ".sitenamediv" ).removeClass("sitenamechange");
		$( ".navlistdiv" ).removeClass("navlistchange");
	}
	

	
	
});





function clickslide(param)
{	

var changetext= $('#'+param).children().text().trim().replace('+', '').replace('X','').replace('&emsp;','');


if(flag==0)
{
	
	$('#'+param).children().html(changetext).text();
	$('#'+param).parent().addClass('gone');
	$('.fixedfooterclass').not('.gone').hide();
	$('#'+param).parent().animate({width:'50%',height:changeheightopen+'px',left:'25%'},1000);
	$('#'+param).siblings().toggle();
	
	var closesign = $(document.createElement('span')).css({'float':'right','margin-right':'2%'});
	$(closesign).html('X');
	$(closesign).attr('id','closesign');
	$('#'+param).append(closesign);
	
	flag=1;
}

else
{
	$("#closesign").remove();
	
	var paramcheck=param.slice(-1);

	if(paramcheck==1)
		paramcheck=5;
	else if(paramcheck==2)
		paramcheck=37.5;
	else
		paramcheck=70;
	

	$('#'+param).children().html('+ '+changetext).text();
	$('#'+param).siblings().toggle();
	$('#'+param).parent().removeClass('gone');
	$('#'+param).parent().animate({width:'25%',height:changeheightclose+'px',left:paramcheck+'%'},1000);
	$('.fixedfooterclass').show();
 	
	flag=0;	
}
	
}


function clicktab(element)
{	
	$("#"+ element.id).css({'backgroundColor':'#FFFFFF','color':'#648FFF'});
	
	$(".topdisplaydiv:not(#"+element.id+")").css({'backgroundColor':'#648FFF','color':'#E5E5E5'});
	$("#main"+element.id).css('display','block');
	$(".maincontentdiv:not(#main"+element.id+")").css('display','none');

}

$(document).ready(function() {

menufromtop=$('.navmenu').offset().top;

$('.selectname').on('click mouseover', function () {
    var indexofelement=$(".selectname").index(this);
	var arrayimg=["hashmi", "brabazon", "buggy","monaghan","andritschky","dobrzanski","shamsuddin","yigit","torralba","im","yilbas","mridha","bayraktar","tieu","huang","hussain","olabi","chastel","jawahir","haseeb","raghupathy","gordo"];
	var arrayname=["Prof. Saleem Hashmi","Prof. Dermot Brabazon","Prof. Martin Buggy","Prof. John Monaghan","Prof. Martin Andritschky","Prof. Leszek Dobrzanski","Prof. Shamsuddin Sulaiman","Prof. Faruk Yigit","Prof. Jose Manuel Torralba","Prof. Yong Taek Im","Prof Bekir Yilbas","Prof. Shahjahan Mridha","Prof. Emin Bayraktar","Prof. Kiet Tieu","Prof. Y M Huang","Dr. Fadhli, Hussain Y","Prof. Abdul Olabi","Prof. Yvan Chastel","Prof. I. S. Jawahir","Prof. A.S.M. Abdul Haseeb","Prof. Padmanabhan Raghupathy","Prof. Elena Gordo"];
	$(".imagetitle").html(arrayname[indexofelement]);
	$(".comimagesmain").attr("src","Pictures/"+arrayimg[indexofelement]+'.png');
	$(".comimagesmain").attr("alt",arrayname[indexofelement]);
});

$('.selectname2').on('click mouseover', function () {
    var indexofelement=$(".selectname2").index(this);
	var arrayimg=["johnson", "travis", "nakagawa","williams","woods","dobrzanski","ghosh","hashmi","im","yilbas","rahman","chenot","kotil","tieu","lin","reid","hocheng","monaghan","bayraktar","sultan","keiback","jawahir"];
	var arrayname=["Prof. W. Johnson","Prof. F.W.Travis","Prof. T. Nakagawa","Prof. J.G. Williams","Prof. J. V. Woods","Prof. Leszek Dobrzanski","Prof. S.K. Ghosh","Prof. M.S.J. Hashmi","Prof. Yong Taek Im","Prof. B. S. Yilbas","Prof Mustafizur Rahman","Prof. Jean-Loupe Chenot","Prof. Temel Kotil","Prof. Kiet Tieu","Prof. Zone-Ching Lin","Dr. Stephen Reid","Prof. Hong Hocheng","Prof. John Monaghan","Prof. Emin Bayraktar","Dr. Mohammed Al-Sultan","Dr. Bernd Kieback","Prof. I.S. Jawahir"];
	$(".imagetitle").html(arrayname[indexofelement]);
	$(".comimagesmain").attr("src","Pictures/"+arrayimg[indexofelement]+'.png');
	$(".comimagesmain").attr("alt",arrayname[indexofelement]);
});


$( "#navlistcommittee" ).hover(
	
	function()
	{
		$(".dropdowncom").css({'display':'block'});
	}, 
	
	function() 
	{
		$(".dropdowncom").css({'display':'none'});
	}
);

var imgno=0;
var imgmodulo=0;
setInterval(function(){
	
	imgno++;
	
	if(imgmodulo>4)
		imgno=1;
	imgmodulo=imgno%4+1;
	$('.slideshowslide').animate({width: '10%', opacity: '0'}, "fast").attr('src',"Pictures/"+imgmodulo+".jpg").animate({width: '100%', opacity: '1'}, "slow");
	
},8000);



if(windowwidth>=800)
{
	$('.fixedfooterclass').css("height","35px");
	changeheightopen=220;
	changeheightclose=35;
}
else if(windowwidth>=600 && windowwidth<800)
{
	$('.fixedfooterclass').css("height","30px");
	changeheightopen=190;
	changeheightclose=30;
}
else
{
	$('.fixedfooterclass').css("height","25px");
	changeheightopen=160;
	changeheightclose=25;
}

	
});


