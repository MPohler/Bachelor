var lpr=document.location.protocol=="https:"?"https:":"http:";var u="undefined";try{trs_args=trs_args||{}}catch(e){trs_args={}}trs_args.c=navigator.cookieEnabled;trs_args.r=(new Date).getTime();if(document.referrer!="")trs_args.referrer=document.referrer;if(typeof trs_args.sites==u)trs_args.sites=window.location.pathname.substr(1);trs_args.path=window.location.pathname.substr(1)+window.location.search;var sv="";var svc=0;for(var k in trs_args){if(k=="td")continue;sv+=(svc++>0?"&":"")+k+"="+encodeURIComponent(trs_args[k])}var td="trs.webprospector.de";if(typeof trs_args.td!=u)td=trs_args.td;var i=new Image;i.src=lpr+"//"+td+"/trs.gif?"+sv;