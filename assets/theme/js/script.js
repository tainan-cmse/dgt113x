!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com/builder/ai-website-builder.html">AI Website Builder</a> Mobirise v5.8.0 <a href="https://mobirise.com/builder/ai-website-maker.html">Best AI Website Maker</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){function q(b){b=a(b);var c=b.attr("ID")+"-carousel";b.find(".carousel").attr("id",c);b.find(".carousel-controls a").attr("href","#"+c);b.find(".carousel-indicators li").attr("data-target","#"+c);a(b).find(".carousel-item:first").addClass("active")}function r(b){b=a(b);var c=b.find(".carousel-item").length,d=b.find(".carousel-inner").attr("data-visible");c<d&&(d=c);b.find(".carousel-inner").attr("class","carousel-inner slides"+d);b.find(".clonedCol").remove();b.find(".carousel-item .col-md-12").each(function(){2>
d?a(this).attr("class","col-md-12"):"5"==d?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/d)});b.find(".carousel-item").each(function(){for(var b=a(this),c=1;c<d;c++){b=b.next();b.length||(b=a(this).siblings(":first"));var p=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+c).addClass("clonedCol").attr("data-cloned-index",p).appendTo(a(this).children().eq(0))}})}function t(b){0!==a(b).find(".nav-tabs").length&&a(b).outerFind('section[id^="tabs"]').each(function(){var b=
a(this).attr("id"),d=a(this).find(".nav-tabs .nav-item"),e=a(this).find(".tab-pane");e.removeClass("active").eq(0).addClass("active");d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");e.each(function(){a(this).attr("id",b+"_tab"+a(this).index())});d.each(function(){a(this).find("a").attr("href","#"+b+"_tab"+a(this).index())})})}var k=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,c,d,e,g){return 1>(c/=g/2)?e/2*c*c*c+d:e/2*((c-=2)*
c*c+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};a.fn.scrollEnd=function(b,c){a(this).scroll(function(){var d=a(this);d.data("scrollTimeout")&&clearTimeout(d.data("scrollTimeout"));d.data("scrollTimeout",setTimeout(b,c))})};a.fn.footerReveal=function(){function b(){!g&&c.outerHeight()<=e.outerHeight()?(c.css({"z-index":-999,position:"fixed",bottom:0}),c.css({width:d.outerWidth()}),d.css({"margin-bottom":c.outerHeight()})):(c.css({"z-index":"",position:"",bottom:""}),c.css({width:""}),
d.css({"margin-bottom":""}))}var c=a(this),d=c.prev(),e=a(window),g=!!document.documentMode;b();e.on("load resize",function(){b()});return this};(function(a,c){var d=function(a,b,c){var d;return function(){var k=this,f=arguments;d?clearTimeout(d):c&&a.apply(k,f);d=setTimeout(function(){c||a.apply(k,f);d=null},b||100)}};jQuery.fn[c]=function(a){return a?this.bind("resize",d(a)):this.trigger(c)}})(jQuery,"smartresize");a.isMobile=function(b){var c=[],d={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",
opera:"Opera Mini",ios:"iPhone|iPad|iPod"};b="undefined"==a.type(b)?"*":b.toLowerCase();"*"==b?c=a.map(d,function(a){return a}):b in d&&c.push(d[b]);return(b=!(!c.find(function(a){return"iPhone|iPod|iPad"===a})||!(navigator.userAgent.match(/(iPad)/)||"MacIntel"===navigator.platform&&"undefined"!==typeof navigator.standalone)))?b:!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var u=function(){var b=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),
c=b[0],d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,10);b.remove();return c==d}();a(function(){function b(){a(this).css("height",9*a(this).parent().width()/16)}function c(b){setTimeout(function(){a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function d(b){a(b).outerFind("[data-bg-video]").each(function(){var b=a(this).attr("data-bg-video"),c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
d=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a("> *:eq(0)",this).before(d);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){b="http"+("https:"===location.protocol?"s":"")+":";b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg";a("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,
"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");break;default:k&&d.css("background-image",'url("images/no-video.jpg")').show()}}else d.css("background-image",'url("'+this.src+'")').show()}).attr("src",b);var f=document.createElement("div"),e=document.createElement("div");e.classList.add("mbr-background-video-wrapper");e.appendChild(f);f.classList.add("mbr-background-video");a("> *:eq(1)",this).before(e);var g=this.naturalHeight,h=this.naturalWidth,p=this.naturalHeight/
this.naturalWidth,l=f.parentNode.clientHeight,n=f.parentNode.clientWidth,g=g<l?g:l,h=h>n?h:n;g/h!=p&&(g=h*p);var m=new YouTubePlayer(f,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,mute:!0,keyboard:!1,captions:!1,annotations:!1,related:!1});e.style.overflow="hidden";e.style.position="absolute";e.style.minWidth="100%";e.style.minHeight="100%";e.style.top="0";e.style.left="0";e.style.transitionProperty="opacity";e.style.transitionDuration="1000ms";f.style.marginTop="0";f.style.maxWidth=
"initial";f.style.transitionProperty="opacity";f.style.transitionDuration="1000ms";f.style.pointerEvents="none";f.style.position="absolute";f.style.top="0";f.style.left="0";f.style.display="none";f.style.transform="scale(1.2)";m.load(c[6],!0);m.mute();m.on("playing",function(){m.replayFrom(1);0<m.getProgress()&&(m._player.i.style.display="block")});k&&(a(document).on("delete.cards",function(a){m.stopResize();m.stopReplay(a.target.querySelector(".mbr-background-video-wrapper"))}),a(document).on("changeParameter.cards",
function(a,b,c,f){a=a.target.querySelector(".mbr-background-video-wrapper");if("bg"===b)switch(f){case "type":"video"!==c.type&&m.stopReplay(a);break;case "value":"video"===c.type&&m.stopReplay(a)}}));this.setAttribute("src",b)}else c&&/vimeo/g.test(c[3])&&(f=new XMLHttpRequest,f.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0),f.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);d.css("background-image",'url("'+
a[0].thumbnail_large+'")').show()}else k&&d.css("background-image",'url("images/no-video.jpg")').show()},f.send(),f=null,!a.fn.vimeo_player||k||a.isMobile()||a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:b,containment:"self",showControls:!1,mute:!0}));else k&&d.css("background-image",'url("images/video-placeholder.jpg")').show()})}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=
10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var d=[b,b];d[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,d)&&(b=d[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):u||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",
a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(b)});a(document).on("add.cards changeParameter.cards",function(c){var d=a(c.target).outerFind(".mbr-section--16by9");d.length?d.attr("data-16by9","true").each(b):a(c.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&
!a.isMobile()&&(a(window).on("update.parallax",function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),k?(a(document).on("add.cards",function(b){c(b.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",function(b,d,e,g){if("bg"===d)switch(a(b.target).jarallax("destroy").css("position",""),a(b.target).find(".mbr-background-video-preview").remove(),a(b.target).find(".mbr-background-video").remove(),
a(b.target).find(".mbr-background-video-wrapper").remove(),a(b.target).find(".mbr-fallback-image").remove(),g){case "type":!0===e.parallax&&c(b.target);break;case "value":"image"===e.type&&!0===e.parallax&&c(b.target);break;case "parallax":!0===e.parallax&&c(b.target)}a(window).trigger("update.parallax")})):c(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var e,g,p=0,h=null,l=!a.isMobile();a(window).scroll(function(){g&&clearTimeout(g);var b=a(window).scrollTop(),
c=b<=p||l;p=b;if(h){var d=b>h.breakPoint;c?d!=h.fixed&&(l?(h.fixed=d,a(h.elm).toggleClass("is-fixed")):g=setTimeout(function(){h.fixed=d;a(h.elm).toggleClass("is-fixed")},40)):(h.fixed=!1,a(h.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){e&&clearTimeout(e);e=setTimeout(function(){h&&(h.fixed=!1,a(h.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){h={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},
650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});if(k)a(document).on("add.cards",function(a){d(a.target)});else d(document.body);a(document).on("changeParameter.cards",function(b,c,e,g){if("bg"===c)switch(g){case "type":a(b.target).find(".mbr-background-video-preview").remove();
"video"===e.type&&d(b.target);break;case "value":"video"===e.type&&(a(b.target).find(".mbr-background-video-preview").remove(),d(b.target))}});k||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();k||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("carousel")){do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(c).parents().hasClass("navbar-fixed-top")?
60:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=c.parentNode)}}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(h&&g){var a=h/g;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var f=e.height()/e.width();f>a&&(a=100*(f-a)/a,d.css({width:a+
100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),g=d[0].width,h=d[0].height;d.one("load",function(){g=d[0].width;h=d[0].height;b()});a(window).on("resize",b);b()})});if(!k){if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,d,e){999<e&&a(".social-likes__counter",b.target).html(Math.floor(e/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(b){a(b.target).hasClass("mbr-reveal")&&
a(b.target).footerReveal()});a(document).ready(function(){if(a.isMobile()){var b=this.querySelectorAll("section[data-bg-video]");[].forEach.call(b,function(a){(a=a.querySelector(".mbr-fallback-image"))&&a.classList.remove("disabled")})}else if(a("input[name=animation]").length){var c=function(a){if("none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=
b.attr("data-visible");if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},d=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();var e=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal-content")}).not(function(){return a(this).parents().is("form")&&
a(this).is("li")}).addClass("hidden animated"),b=a(window);b.on("scroll resize",function(){var b=document.documentElement.scrollTop||document.body.scrollTop,k=b+window.innerHeight-50;a.each(e,function(){var e=a(this),l=e[0],f=l.offsetHeight,l=d(l);if((l+f>=b&&l<=k||c(e))&&e.hasClass("hidden"))e.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated fadeInUp")})})});b.trigger("scroll")}});a(".nav-dropdown").length&&
a(".nav-dropdown").swipe({swipeLeft:function(b,c,d,e,g){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var b=a("#scrollToTop"),c=a("body,html"),d=a(window);b.css("display","none");d.scroll(function(){0<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(){c.animate({scrollTop:0},400);return!1})}});if(!k)a(".mbr-arrow").on("click",function(b){b=a(b.target).closest("section").next();b.hasClass("engine")&&(b=b.closest("section").next());b=b.offset();
a("html, body").stop().animate({scrollTop:b.top},800,"linear")});if(a("nav.navbar").length){var n=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",n+"px")}if(!k&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(b){var c=a(b.target);if(c.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){c.css("height","auto");c.outerHeight()<=a(window).height()&&c.css("height","1px")});
if(c.hasClass("mbr-slider")||c.hasClass("mbr-gallery"))c.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),c.hasClass("mbr-slider")&&c.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!k){var b=function(b){var d=a(b).parents("section").find("iframe")[0],e=a(d).attr("src");b.parents("section").css("z-index","5000");-1!==e.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',
"*");if(-1!==e.indexOf("vimeo")){var g=new Vimeo.Player(a(d));g.play()}a(b).parents("section").find(a(b).attr("data-modal")).css("display","table").click(function(){-1!==e.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==e.indexOf("vimeo")&&g.pause();a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");
var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a(this).attr("src","https://youtube.com/embed/"+d[6]+"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a(this).attr("src","https://player.vimeo.com/video/"+d[6]+"?autoplay=0&loop=0")});a("[data-modal]").click(function(){b(a(this))})}});if(!k&&!a.isMobile()){var n=a("section.menu"),v=a(window).width();!n.find(".navbar").hasClass("collapsed")&&
991<v&&(n.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}),n.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}a.fn.outerFind=function(a){return this.find(a).addBack(a)};k||("undefined"===typeof window.initClientPlugin&&0!=a(document.body).find(".clients").length&&
(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(b,c){a(this).attr("data-isinit")||(q(a(this)),r(a(this)))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=a(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,a("section.popup-btn-cards .card-wrapper").each(function(b,c){a(this).addClass("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=
!0,a(".testimonials-slider").each(function(){q(this)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,a(document).ready(function(){0!=a(".accordionStyles").length&&a('.accordionStyles .card-header a[role="button"]').each(function(){a(this).hasClass("collapsed")||a(this).addClass("collapsed")})}),a('.accordionStyles .card-header a[role="button"]').click(function(){var b=a(this).closest(".accordionStyles").attr("id");a(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||
(-1!=b.indexOf("toggle")?a(this).hasClass("collapsed")?a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):-1!=b.indexOf("accordion")&&(a(this).closest(".accordionStyles ").children(".card").each(function(){a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),a(this).hasClass("collapsed")&&a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),
"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,t(document.body)),0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var b=a(this),c=b.find(".carousel-control"),d=b.find(".carousel-indicators li");b.on("slide.bs.carousel",function(){c.bind("click",function(a){a.stopPropagation();a.preventDefault()});d.bind("click",function(a){a.stopPropagation();a.preventDefault()});b.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){c.unbind("click");d.unbind("click");
b.carousel({keyboard:!0});1<b.find(".carousel-item.active").length&&(b.find(".carousel-item.active").eq(1).removeClass("active"),b.find(".carousel-control li.active").eq(1).removeClass("active"))})}));if(k)a(document).on("add.cards",function(b){a(b.target).find(".form-with-styler").length&&(b=a(b.target).find(".form-with-styler"),a(b).find('select:not("[multiple]")').each(function(){a(this).styler()}),a(b).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")}),
a(b).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(b).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})}))});else a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).styler()});a(this).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")});
var b;b=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!b&&a(this).datetimepicker&&(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",
datepicker:!1})}))});a(document).on("change",'input[type="range"]',function(b){a(b.target).parents(".form-group").find(".value")[0].innerHTML=b.target.value})})(jQuery);
