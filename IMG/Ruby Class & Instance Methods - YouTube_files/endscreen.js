(function(g){var window=this;var r9=function(a,b){g.T(a).experiments.$("player_gel_logging")&&a.app.ba.T("onLogToGel",{payload_name:"thumbnailLoaded",payload:b})},s9=function(a,b,c,d){var e=b.Tb();
g.Ud(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.Eh();d=b.Vc(c,d?d:"mqdefault.jpg");var k=b instanceof g.kz?g.ak(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.Hz(f).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.N("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.bk(c),is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.Kz&&(c.playlist_length=b.A);a.update(c)},t9=function(a){var b=
g.T(a),c=b.experiments.$("video_wall_moving_thumbnails_autoplay"),d=b.experiments.$("video_wall_moving_thumbnails_hover"),c=c||d;
this.B=b.B&&!b.D;b={J:"img",Z:"ytp-videowall-moving-thumbnail",W:{src:"{{moving_thumbnail}}"}};g.R.call(this,{J:"a",Z:"ytp-videowall-still",W:{href:"{{url}}",target:this.B?"_blank":null,"aria-label":"{{watch}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},R:[{J:"div",Z:"ytp-videowall-still-image",W:{style:"{{background}}"}},c?b:null,{J:"span",Z:"ytp-videowall-still-info",R:[{J:"span",Z:"ytp-videowall-still-info-bg",R:[{J:"span",Z:"ytp-videowall-still-info-content",W:g.Yh||g.sc?{style:"will-change: opacity"}:
null,R:[{J:"span",Z:"ytp-videowall-still-info-title",R:["{{title}}"]},{J:"span",Z:"ytp-videowall-still-info-author",R:["{{author_and_views}}"]},{J:"span",Z:"ytp-videowall-still-info-duration",R:["{{duration}}"]}]}]}]},{J:"span",fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],R:[{J:"span",Z:"ytp-videowall-still-listlabel-icon"},g.N("YTP_PLAYLIST"),{J:"span",Z:"ytp-videowall-still-listlabel-length",R:[" (",{J:"span",R:["{{playlist_length}}"]},")"]}]},{J:"span",fa:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],R:[{J:"span",Z:"ytp-videowall-still-listlabel-mix-icon"},g.N("YTP_MIX"),{J:"span",Z:"ytp-videowall-still-listlabel-length",R:[" (50+)"]}]}]});this.g=a;this.o=null;this.C=0;this.P("click",this.QK);this.P("keypress",this.RK);c&&this.U(this.ua["ytp-videowall-moving-thumbnail"],"load",this.TK);g.T(a).experiments.$("player_interaction_logging")&&(a=a.app.da,g.nb(a.A,this),b=String(a.F++),this.element.setAttribute("data-visual-id",b),g.Ib(this,(0,g.y)(a.C,a,this)))},u9=
function(a){if(5E5<g.iw(a.g.app.ma)){var b=a.o.Vj();
b&&(a.C=(0,g.Gj)(),a.update({moving_thumbnail:b}))}},v9=function(a){g.Tz.call(this,a,{J:"div",
fa:["ytp-thumbnail-overlay","ytp-channel-overlay"],R:[{J:"div",Z:"ytp-thumbnail-overlay-image",W:{style:"{{background}}"}},{J:"div",Z:"ytp-thumbnail-overlay-curtain"}]})},w9=function(a){var b=g.T(a).experiments.$("moving_thumbnails_autonav"),c={J:"img",
Z:"ytp-upnext-moving-thumbnail",W:{src:"{{moving_thumbnail}}"}},c={J:"div",Z:"ytp-upnext",W:{"aria-label":"{{watch}}"},R:[{J:"div",Z:"ytp-thumbnail-overlay-image",W:{style:"{{background}}"}},b?c:null,{J:"div",Z:"ytp-thumbnail-overlay-curtain"},{J:"span",Z:"ytp-upnext-top",R:[{J:"span",Z:"ytp-upnext-header",R:[g.N("YTP_PLAYLIST_UP_NEXT")]},{J:"span",Z:"ytp-upnext-title",R:["{{title}}"]},{J:"span",Z:"ytp-upnext-author",R:["{{author}}"]}]},{J:"a",Z:"ytp-upnext-autoplay-icon",W:{href:"{{url}}"},R:[{J:"svg",
W:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},R:[{J:"circle",Z:"ytp-svg-autoplay-circle",W:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{J:"circle",Z:"ytp-svg-autoplay-ring",W:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{J:"polygon",Z:"ytp-svg-autoplay-triangle",W:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{J:"span",Z:"ytp-upnext-bottom",R:[{J:"span",
Z:"ytp-upnext-cancel"},{J:"span",Z:"ytp-upnext-paused",R:[g.N("YTP_AUTOPLAY_PAUSED_2")]}]},{J:"span",Z:"ytp-upnext-close"}]};g.R.call(this,c);this.C=null;var d=this.ua["ytp-upnext-cancel"],c=this.ua["ytp-upnext-close"];this.C=new g.R({J:"button",fa:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:0,"aria-label":g.N("YTP_AUTOPLAY_CANCEL")},R:[g.N("YTP_CANCEL")]});g.K(this,this.C);this.C.P("click",this.Dt,this);this.C.Ba(d);d=new g.R({J:"button",fa:["ytp-upnext-close-button","ytp-button"]});g.K(this,
d);d.P("click",this.Dt,this);d.Ba(c);this.g=a;this.K=this.ua["ytp-svg-autoplay-ring"];this.D=this.B=this.o=this.A=null;this.F=new g.Ld(this.Hj,5E3,this);g.K(this,this.F);this.G=0;this.U(this.ua["ytp-upnext-autoplay-icon"],"click",this.WF);this.Bt();this.U(a,"autonavvisibility",this.Bt);this.U(a,"mdxnowautoplaying",this.mF);this.U(a,"mdxautoplaycanceled",this.nF);this.U(a,"mdxautoplayupnext",this.MI);b&&(this.H=0,this.U(this.ua["ytp-upnext-moving-thumbnail"],"load",this.sM))},x9=function(a,b){a.A=
b;
s9(a,b,g.T(a.g),"hqdefault.jpg");g.Sd(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});if(5E5<g.iw(a.g.app.ma)){var c=a.A.Vj();c&&(a.H=(0,g.Gj)(),a.update({moving_thumbnail:c}))}},y9=function(a,b){a.o||(g.ji("a11y-announce",g.N("YTP_PLAYLIST_UP_NEXT")+" "+a.A.title),a.G=(0,g.Gj)(),a.o=new g.Ld(a.Sl,25,a),a.Sl(b));
g.Sd(a.element,"ytp-upnext-autoplay-paused")},A9=function(a){z9(a);
a.G=(0,g.Gj)();a.Sl();g.L(a.element,"ytp-upnext-autoplay-paused")},z9=function(a){a.o&&(a.o.dispose(),a.o=null)},B9=function(a,b){g.Rz.call(this,{J:"div",
fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.N=a;this.L=!1},C9=function(a){a=g.T(a);
return a.ke&&!a.wa},D9=function(a,b){B9.call(this,a,"videowall-endscreen");
this.ca=a;this.X=b;this.D=0;this.g=[];this.F=this.B=this.A=null;this.G=this.O=!1;this.C=new g.tm(this);g.K(this,this.C);this.H=new g.Ld(g.A(g.L,this.element,"ytp-show-tiles"),0);g.K(this,this.H);var c=new g.R({J:"button",fa:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":g.N("YTP_PREVIOUS")},R:[g.Fg()]});g.K(this,c);c.Ba(this.element);c.P("click",this.OK,this);this.K=new g.Sj({J:"div",Z:"ytp-endscreen-content"});g.K(this,this.K);this.K.Ba(this.element);c=new g.R({J:"button",fa:["ytp-button",
"ytp-endscreen-next"],W:{"aria-label":g.N("YTP_NEXT")},R:[g.Gg()]});g.K(this,c);c.Ba(this.element);c.P("click",this.NK,this);this.o=new w9(a);g.K(this,this.o);g.cs(this.N,this.o.element,5);this.oa()},E9=function(a){return(0,g.S)(a.L,function(a){return g.Sz(a)})},F9=function(a,b,c){return 0==b&&a.A.length&&(b=c/D9.b,2<=c/D9.b&&2<=b&&g.T(a.N).experiments.$("video_wall_emphasize_first"))?2*D9.b:D9.b},G9=function(a){var b=a.X.Vo();
b!=a.O&&(a.O=b,a.N.T("autonavvisibility"))},H9=function(a){B9.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.g=new v9(a);g.K(this,this.g);g.cs(this.N,this.g.element,5);this.o=new g.R(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.K(this,this.o);this.o.Ba(this.element);this.A=new g.ns(g.N("YTP_SUBSCRIBE"),g.N("YTP_UNSUBSCRIBE"),!0,b.Tp,b.subscribed,"trailer-endscreen",a);g.K(this,this.A);this.A.Ba(this.o.ua["html5-subscribe-button-container"]);
this.oa()},I9=function(a){g.om.call(this,a);
g.kh({});this.b=null;this.isAvailable=!0;this.g=new g.tm(this);g.K(this,this.g);this.o=g.T(a);C9(a)?this.b=new D9(this.N,this):this.o.wa?this.b=new H9(this.N):this.b=new B9(this.N);g.K(this,this.b);g.cs(this.N,this.b.element,5);this.Eu();this.g.U(a,"videodatachange",this.Eu,this);this.g.U(a,"crn_endscreen",this.yK,this);this.g.U(a,"crx_endscreen",this.zK,this)};
g.B(t9,g.R);g.h=t9.prototype;g.h.th=function(){var a=this.o.Tb().videoId;g.b7(this.g.app,a,this.o.Xc,this.o.Eh(),void 0,void 0)};
g.h.QK=function(a){g.Mv(this.g,this);g.Vk(a,this.g,!this.g.isFullscreen()&&this.B,this.o.Xc)&&this.th()};
g.h.SK=function(){this.Aa(this.A);this.A=null;u9(this)};
g.h.RK=function(a){switch(a.keyCode){case 13:case 32:g.ej(a)||(this.th(),g.dj(a))}};
g.h.TK=function(a){120<g.$i(a).naturalWidth&&(g.L(this.element,"ytp-videowall-moving-thumbnail-loaded"),r9(this.g,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Gj)()-this.C,videoId:this.o.videoId}))};
g.B(v9,g.Tz);v9.prototype.Cb=function(a){a?this.A.show():g.zr(this.A)};
g.B(w9,g.R);g.h=w9.prototype;g.h.Hj=function(){this.B&&(this.F.stop(),this.Aa(this.D),this.D=null,this.B.close(),this.B=null)};
g.h.Bt=function(){this.Cb(g.nv(this.g))};
g.h.MF=function(){window.focus();this.Hj()};
g.h.Sl=function(a){a=a||g.T(this.g).experiments.b("autoplay_time")||1E4;var b=Math.min((0,g.Gj)()-this.G,a);a=Math.min(b/a,1);this.K.setAttribute("stroke-dashoffset",-293*(a+1));1<=a?this.select(!0):this.o&&this.o.start()};
g.h.select=function(a){var b=g.T(this.g);if(b.experiments.$("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.tr(this.g,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.A.Tb(),this.Hj(),this.B=new window.Notification(g.N("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Vc(b)}),this.D=this.U(this.B,"click",this.MF),this.F.start())}z9(this);this.g.Zi(!1,
a)};
g.h.WF=function(a){!g.ef(this.C.element,g.$i(a))&&g.Vk(a,this.g)&&this.select()};
g.h.Dt=function(){g.zv(this.g,"autonavcancel");g.pv(this.g,!0)};
g.h.sM=function(a){120<g.$i(a).naturalWidth&&(g.L(this.element,"ytp-moving-thumbnail-loaded"),r9(this.g,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Gj)()-this.H,videoId:this.A.Tb().videoId}))};
g.h.mF=function(a){this.g.getPresentingPlayerType();this.show();y9(this,a)};
g.h.MI=function(a){this.g.getPresentingPlayerType();this.A&&this.A.Tb().videoId==a.Tb().videoId||x9(this,a)};
g.h.nF=function(){this.g.getPresentingPlayerType();z9(this);this.oa()};
g.h.S=function(){z9(this);this.Hj();w9.M.S.call(this)};
g.B(B9,g.Rz);B9.prototype.create=function(){this.L=!0};
B9.prototype.destroy=function(){this.L=!1};
B9.prototype.Wl=function(){return!1};
g.B(D9,B9);D9.b=2;g.h=D9.prototype;g.h.create=function(){D9.M.create.call(this);var a=this.N.getVideoData();a&&(this.A=E9(a),this.B=a);this.Yf();this.C.U(this.N,"appresize",this.Yf);this.C.U(this.N,"videodatachange",this.PK);this.C.U(this.N,"autonavchange",this.Aw);this.C.U(this.N,"autonavcancel",this.MK);this.C.U(this.element,"transitionend",this.dH)};
g.h.destroy=function(){g.vm(this.C);g.Kb(this.g);this.g=[];this.A=null;D9.M.destroy.call(this);g.Sd(this.element,"ytp-show-tiles");this.H.stop()};
g.h.Wl=function(){return 1!=this.B.autonavState};
g.h.Ki=function(){return g.Jv(this.N)&&this.Wl()&&!this.F};
g.h.show=function(){D9.M.show.call(this);g.Sd(this.element,"ytp-show-tiles");g.T(this.N).isMobile?g.Md(this.H):this.H.start();(this.G||this.F&&this.F!=this.B.clientPlaybackNonce)&&g.pv(this.N,!1);var a=this.Ki();g.Jv(this.N)&&g.T(this.N).experiments.$("ui_logging")&&this.X.log({cancelButtonShow:a?"1":"0",state:this.Wl()?"enabled":"disabled"});a?(G9(this),2==this.B.autonavState?g.T(this.N).experiments.$("fast_autonav_in_background")&&3==this.N.iw()?this.o.select(!0):y9(this.o):3==this.B.autonavState&&
A9(this.o)):(g.pv(this.N,!0),G9(this))};
g.h.oa=function(){D9.M.oa.call(this);A9(this.o);G9(this)};
g.h.dH=function(a){g.$i(a)==this.element&&this.Yf()};
g.h.Yf=function(){if(this.A&&this.A.length){var a=g.T(this.N).experiments.$("video_wall_moving_thumbnails_hover");g.L(this.element,"ytp-endscreen-paginate");for(var b=g.Sl(this.element),c=b.width/b.height,d=96/54,e=D9.b,f=D9.b,k=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=this.A.length,n=Math.pow(D9.b,2),r=m*n,u=F9(this,0,l),x=F9(this,1,l),r=r+(Math.pow(u,2)-n),r=r+(Math.pow(x,2)-n),r=r-n;0<r&&(e<k||f<l);){var z=e/D9.b,E=f/D9.b,I=e<=k-D9.b&&r>=E*n,P=f<=l-D9.b&&r>=z*n;if((z+1)/E*d/c>c/(z/(E+
1)*d)&&P)r-=z*n,f+=D9.b;else if(I)r-=E*n,e+=D9.b;else if(P)r-=z*n,f+=D9.b;else break}d=!1;k=D9.b+u;r>=3*n&&6>=m*n-r&&(f>=k||e>=k)&&x<=D9.b&&(d=!0);r=96*e;n=54*f;c=r/n<c?b.height/n:b.width/r;c=Math.min(c,2);r*=c;n*=c;r*=g.ve(b.width/r||1,1,1.21);n*=g.ve(b.height/n||1,1,1.21);r=Math.floor(Math.min(b.width,r));n=Math.floor(Math.min(b.height,n));b=this.K.element;g.Rl(b,r,n);g.Bl(b,{marginLeft:r/-2+"px",marginTop:n/-2+"px"});x9(this.o,this.A[0]);g.Ud(this.element,"ytp-endscreen-takeover",this.Ki());G9(this);
c=r+4;r=n+4;n=0;k=!this.Ki();l=!1;for(z=0;z<e;z++)for(E=0;E<f;E++){var I=x>D9.b&&1<=n&&!l?n+1:n,Q=0;d&&z>=e-D9.b&&E>=f-D9.b?Q=1:0==E%D9.b&&0==z%D9.b&&(E<u&&z<u?0==E&&0==z&&(Q=u):x>D9.b&&E>=f-x&&z>=e-x?E==f-x&&z==e-x&&(l=!0,I=1,Q=x):Q=D9.b);I=g.we(I+this.D,m);if(0!=Q){P=this.g[n];P||(P=new t9(this.N),this.g[n]=P,b.appendChild(P.element));var Ua=Math.floor(r*E/f),eb=Math.floor(c*z/e),ib=Math.floor(r*(E+Q)/f)-Ua-4,rd=Math.floor(c*(z+Q)/e)-eb-4;g.Hl(P.element,eb,Ua);g.Rl(P.element,rd,ib);g.Bl(P.element,
"transitionDelay",(E+z)/20+"s");g.Ud(P.element,"ytp-videowall-still-mini",1==Q);g.Ud(P.element,"ytp-videowall-still-large",2<Q);I=this.A[I];Q=k&&!a;P.o=I;Ua=g.T(P.g);s9(P,I,Ua,g.Pd(P.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.Sd(P.element,"ytp-videowall-moving-thumbnail-loaded");P.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});Q?(g.L(P.element,"ytp-videowall-active"),u9(P)):Ua.experiments.$("video_wall_moving_thumbnails_hover")&&
!P.A&&(P.A=P.P("mouseover",P.SK));Ua=I.Xc;Q=P.g;I=P;Ua=Ua&&Ua.itct;g.T(Q).experiments.$("player_interaction_logging")&&(P=Q.app.da,Q=Ua,I=I.element.getAttribute("data-visual-id"),g.Kv(P,"onLogServerVeCreated",{id:I,tracking_params:Q}));n++}}g.Ud(this.element,"ytp-endscreen-paginate",n<m);for(a=this.g.length-1;a>=n;a--)P=this.g[a],g.Ze(P.element),g.Jb(P);this.g.length=n}};
D9.o=2;D9.g=1.21;g.h=D9.prototype;g.h.PK=function(){var a=this.N.getVideoData();this.B!=a&&(this.D=0,this.A=E9(a),this.B=a,this.Yf())};
g.h.NK=function(){this.D+=this.g.length;this.Yf()};
g.h.OK=function(){this.D-=this.g.length;this.Yf()};
g.h.YC=function(){return!!this.o.o};
g.h.Aw=function(a){1==a?(this.G=!1,this.F=this.B.clientPlaybackNonce,z9(this.o),this.b&&this.Yf()):(this.G=!0,this.b&&this.Ki()&&(2==a?y9(this.o):3==a&&A9(this.o)))};
g.h.MK=function(a){if(a){for(a=0;a<this.g.length;a++)g.Nv(this.ca,this.g[a],!0);this.Aw(1)}else this.F=null,this.G=!1;this.Yf()};
g.B(H9,B9);H9.prototype.show=function(){H9.M.show.call(this);this.g.Cb(!0)};
H9.prototype.oa=function(){H9.M.oa.call(this);this.g.Cb(!1)};
g.B(I9,g.om);g.h=I9.prototype;g.h.ww=function(){var a=this.N.getVideoData(),b=!C9(this.N)||!(!a.L||!a.L.length),a=g.mm(a,"ypc_module"),c=g.I3(this.N.app);return(b||!1)&&!a&&!c};
g.h.Vo=function(){return(this.b instanceof D9||!1)&&this.b.b&&this.b.Ki()};
g.h.WC=function(){return this.Vo()?this.b.YC():!1};
g.h.S=function(){g.Ki(this.N,"endscreen");I9.M.S.call(this)};
g.h.load=function(){I9.M.load.call(this);this.b.show();g.T(this.N).wa&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.tr(this.N,"end",a)};
g.h.unload=function(){I9.M.unload.call(this);this.b.oa();this.b.destroy();this.isAvailable=!1};
g.h.yK=function(a){this.ww()&&(this.b.L||this.b.create(),"load"==a.getId()&&this.load())};
g.h.zK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.Eu=function(){g.Ki(this.N,"endscreen");var a=Math.max(1E3*(this.N.getVideoData().lengthSeconds-10),0),a=new g.Gi(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.Gi(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});this.N.Hb([a,b])};
window._exportCheck==g.Da&&g.na("ytmod.player.endscreen",I9,void 0);})(_yt_player);
