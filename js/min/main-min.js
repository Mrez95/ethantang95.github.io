function resetMenuHighlight(){var t=$(".navigation #sections ul");$("#vello-link").css("color","black"),$("#pivotal-link #red, #pivotal-link #blue").css("color","black"),t.find("li").each(function(){$(this).removeClass("menu-highlight"),$(this).find("a").removeClass("menu-text-highlight-mobile"),$(this).find("a").removeClass("menu-text-highlight")}),$navigation.css("background-color","rgba(64,64,64,0.85)")}var $introSection=$("#intro"),$aboutSection=$("#about"),$aboutFilter=$("#about-filter"),$abtCont=$("#about .container"),$introCont=$("#intro .container"),$introScrlBtn=$("#intro #scrl-dwn-btn"),$jobDets=$(".job-details"),$workSection=$("#work"),$projectSec=$("#projects"),$projCont=$("#projects .container"),$units=$(".projUnit"),$workHead=$("#work .section-header"),$introName=$("#intro-name"),$aboutHead=$("#about .section-header"),$velloLogo=$("#vello"),$navigation=$(".navigation"),$pivotalLine=$("#pivotal-line"),$quoteSec=$("#quote"),$contactSec=$("#contact"),$menuContact=$(".contact"),$menuAbout=$(".about"),$menuWork=$(".work"),$menuProj=$(".projects"),$abtSecHeader=$(".section-header"),$wrkSecHeader=$("#work .section-header"),$projSecHeader=$("#projects .section-header"),$contactSecHead=$("#contact .section-header"),$contactCont=$("#contact .container"),$projHoverArea=$(".hover-area"),$projDes=$(".proj-des"),$projImg=$(".proj-img"),$projPopup=$("#project-popup"),resizeContent=function(){var t=$(window).height();$introSection.height(t);var e=$(window).width();if(1320>=e){var o=$("#about .container").height();o+=$abtSecHeader.height()+40,$aboutSection.css("height",o+"px"),$aboutFilter.css("height",o+"px")}e>=1491?$abtCont.css("margin-left",e/2-$abtCont.width()/2+"px"):$abtCont.css("margin-left","auto"),$introCont.css("position","absolute").css("left",e/2-$introCont.width()/2+"px").css("top",t/2-$introCont.height()/2-20+"px"),$abtSecHeader.css("margin-left",e/2-$abtSecHeader.width()/2+"px"),$wrkSecHeader.css("margin-left",e/2-$wrkSecHeader.width()/2+"px"),$projSecHeader.css("margin-left",e/2-$projSecHeader.width()/2+"px"),$contactSecHead.css("margin-left",e/2-$contactSecHead.width()/2+"px"),$introScrlBtn.css("left",e/2-$introScrlBtn.width()/2+"px"),$jobDets.css("left",e/2-$jobDets.width()/2+"px"),$workSection.css("height",$jobDets.height()+$abtSecHeader.height()+40+"px"),$units.css("height",$units.width()+"px"),$projectSec.css("height",$projCont.height()+$projSecHeader.height()+70+"px"),$contactSec.css("height",$contactCont.height()+$contactSecHead.height()+70+"px"),500>=e?($introCont.find("p").html("Technology Enthusiast</br>Perfectionist</br>Animal Lover"),$introCont.find("h1").html("timothy</br>tong"),$aboutHead.html("A<span>bout.</span>"),$workHead.html("W<span>ork.</span>")):(720>=e&&$workSection.css("height",$jobDets.height()+60+"px"),$introCont.find("p").html("Technology Enthusiast <span class='dot'><i class='fa fa-circle'></i></span> Perfectionist <span class='dot'><i class='fa fa-circle'></i></span> Animal Lover"),$introCont.find("h1").html("timothy tong"),$aboutHead.html("A<span>bout me.</span>"),$workHead.html("W<span>ork experience.</span>"),$introName.addClass("intro-name-desktop")),660>e&&($(".note, #messageArea").css("width",e-150+"px"),$(".textInput").css("width",e-200+"px"),$("table").css("width",e-50+"px"),410>e&&$("table #name, table #email").css("width",$("#messageArea").width()+10+"px")),$velloLogo.css("top",$pivotalLine.offset().top-$workSection.offset().top-70+"px"),$projHoverArea.css("width",$projHoverArea.parent().width()+"px").css("margin-top",.75*$projHoverArea.parent().height()+"px"),$projDes.css("width",$projDes.parent().width()+"px").css("margin-top",.5*$projDes.parent().height()+"px"),$(".hover-area .line-separator").each(function(){$(this).css("left","15%")}),$projImg.each(function(){$(this).css("left","27.5%").css("top",$(this).parent().height()/2-.55*$(this).height()+"px")}),$projPopup.css("width","80%").css("height",.9*t+"px").css("margin","auto")};$(document).ready(function(){function t(){e=$(window).width()}var e=$(window).width();resizeContent(),$(window).resize(function(){resizeContent()}),$("#menu-icon").click(function(o){o.preventDefault(),t(),959>=e&&$("#sections").toggleClass("sections-open")}),$("#intro #scrl-dwn-btn").click(function(){$("html, body").animate({scrollTop:$aboutSection.offset().top-$(".navigation").height()},1e3,"swing")}),$("#sections ul li").click(function(o){o.preventDefault();var i=$("html, body");$(this).is(".about")?i.animate({scrollTop:$aboutSection.offset().top-$(".navigation").height()},1e3,"swing",function(){t(),959>=e&&$("#sections").removeClass("sections-open")}):$(this).is(".work")?i.animate({scrollTop:$workSection.offset().top-$(".navigation").height()},1e3,"swing",function(){t(),959>=e&&$("#sections").removeClass("sections-open")}):$(this).is(".projects")?i.animate({scrollTop:$projectSec.offset().top-$(".navigation").height()},1e3,"swing",function(){t(),959>=e&&$("#sections").removeClass("sections-open")}):$(this).is(".contact")&&i.animate({scrollTop:$("#contact").offset().top-$(".navigation").height()},1e3,"swing",function(){t(),959>=e&&$("#sections").removeClass("sections-open")})}),$("#initial-and-name .back-to-top").click(function(t){t.preventDefault();var e=$("html, body");e.animate({scrollTop:0},"slow","swing",function(){})});var o=window.navigator.userAgent,i=o.indexOf("MSIE "),n=o.indexOf("Safari"),a=o.indexOf("Chrome"),s=o.indexOf("Firefox");i>0?(parseInt(o.substring(i+5,o.indexOf(".",i)))<=8&&alert("Friendly advice: Please consider upgrading your browser."),$("svg").hide()):s>0?($(".work span").addClass("firefox-work"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("firefox-projects-contact-hover")}),$(".about, .work").hover(function(){$(this).find("span").toggleClass("firefox-about-work-hover")})):(n>0||a>0)&&($(".about span, .work span").addClass("safari-chrome-about-work"),$(".about, .work").hover(function(){$(this).find("span").toggleClass("safari-chrome-about-work-hover")}),$(".projects span").addClass("safari-chrome-projects"),$(".contact span, .work span").addClass("safari-chrome-contact"),$(".projects, .contact").hover(function(){$(this).find("span").toggleClass("safari-chrome-projects-contact-hover")})),a>0||parseInt(o.substring(i+5,o.indexOf(".",i)))<=9?$introSection.addClass("intro-static"):$introSection.parallax({imageSrc:"./images/apple-bg.jpg"}),$("#pivotal-link").hover(function(){$("#pivotal-link #blue").toggleClass("blue"),$("#pivotal-link #red").toggleClass("red")});var r=!0,c=$(".navigation").outerHeight(),h=0;$(window).scroll(function(){var t=$(window).width(),e=$(this).scrollTop();e>=$aboutSection.offset().top-3*c&&r&&(r=!1,$navigation.css("margin-top","0px")),e<$aboutSection.offset().top/2&&!r&&(r=!0,$navigation.css("margin-top",-c+"px")),e<$aboutSection.offset().top-3*c?(resetMenuHighlight(),h=0):e<$workSection.offset().top-c-50&&1!==h?(h=1,resetMenuHighlight(),960>t?$menuAbout.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuAbout.find("a").addClass("menu-text-highlight")):e>=$workSection.offset().top-50-c&&e<$pivotalLine.offset().top-c-50&&2!==h?(h=2,resetMenuHighlight(),$navigation.css("background-color","rgba(0,119,192,1)"),$("#pivotal-link #blue").css("color","rgb(0,119,192)"),$("#pivotal-link #red").css("color","rgb(196,18,48)"),960>t?$menuWork.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuWork.find("a").addClass("menu-text-highlight")):e>=$pivotalLine.offset().top-50-c&&e<$quoteSec.offset().top-c-30&&3!==h?(h=3,resetMenuHighlight(),$navigation.css("background-color","rgba(39,186,189,1)"),$("#vello-link").css("color","rgb(39,186,189)"),960>t?$menuWork.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuWork.find("a").addClass("menu-text-highlight")):e>=$quoteSec.offset().top-c-30&&e<$projectSec.offset().top-c&&0!==h?(h=0,resetMenuHighlight(),960>t?$menuProj.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuProj.find("a").addClass("menu-text-highlight")):e>=$projectSec.offset().top-c&&e<$contactSec.offset().top-c&&4!==h?(h=4,resetMenuHighlight(),$navigation.css("background-color","rgba(64,64,64,1)"),960>t?$menuProj.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuProj.find("a").addClass("menu-text-highlight")):e>=$contactSec.offset().top-c&&5!==h&&(h=5,resetMenuHighlight(),960>t?$menuContact.addClass("menu-highlight").find("a").addClass("menu-text-highlight-mobile"):$menuContact.find("a").addClass("menu-text-highlight"))}),$("#menu-icon").bind("touchstart touchend",function(){$(this).toggleClass("menu-icon-highlight-mobile")}),$("#sections ul li a").bind("touchstart touchend",function(){$(this).toggleClass("menu-items-highlight-mobile")}),$("#initial-and-name .back-to-top").bind("touchstart touchend",function(){$(this).toggleClass("back-to-top-highlight-mobile")}),setTimeout(resizeContent,300),$(".hover-area .line-separator").each(function(){$(this).css("left","15%"),$(this).css("margin-top","0px")}),$(".projUnit").hover(function(){var t=$(this).find(".hover-area"),e=t.find(".proj-des");$(this).find(".proj-img").addClass("scale"),t.animate({"margin-top":$(this).height()-t.height()+"px"},{duration:300,easing:"swing",queue:!1}),t.fadeIn(150),e.delay(100).animate({"margin-top":"-5px"},{duration:300,easing:"swing",queue:!1}),e.fadeIn(150)},function(){var t=$(this).find(".hover-area"),e=t.find(".proj-des");$(this).find(".proj-img").removeClass("scale"),e.animate({"margin-top":.5*t.height()+"px"},{duration:300,easing:"swing",queue:!1}),e.fadeOut(150),t.delay(100).animate({"margin-top":.75*$(this).height()+"px"},{duration:300,easing:"swing",queue:!1}),t.fadeOut(150)}),$("#submit").click(function(){var t=$("#name").val(),e=$("#email").val(),o=$("#messageArea").val();$("#returnmessage").empty(),""===t||""===e||""===o?alert("Please Fill Required Fields"):$.post("../contact_form.php",{name1:t,email1:e,message1:o},function(t){$("#returnmessage").append(t),"Got it. I'll get back to you ASAP."===t&&$("#form")[0].reset()})})});