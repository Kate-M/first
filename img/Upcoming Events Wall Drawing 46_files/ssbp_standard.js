jQuery(document).ready(function(){jQuery(".ssbp-wrap").removeClass("ssbp--state-hidden"),jQuery(".ssbp-toggle-switch").fadeIn(),jQuery(".ssbp-toggle-switch").on("click",function(){jQuery(this).parent().toggleClass("ssbp--state-hidden")}),jQuery(".ssbp-btn").click(function(a){if(a.preventDefault(),"Ellipsis"==jQuery(this).data("ssbp-site"))return!0;var b={action:"ssbp_standard",title:jQuery(this).data("ssbp-title"),url:jQuery(this).data("ssbp-url"),site:jQuery(this).data("ssbp-site"),href:jQuery(this).attr("href")};if("Email"==b.site||"Print"==b.site||"Pinterest"==b.site||"WhatsApp"==b.site)jQuery(this).hasClass("ssbp-email-popup")||(window.location.href=b.href);else{var c=575,d=520,e=(jQuery(window).width()-c)/2,f=(jQuery(window).height()-d)/2,g="status=1,width="+c+",height="+d+",top="+f+",left="+e;window.open(b.href,"SSBP",g)}})});