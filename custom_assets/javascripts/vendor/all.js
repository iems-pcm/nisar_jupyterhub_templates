/*
PIE: CSS3 rendering for IE
Version 1.0.0
http://css3pie.com
Dual-licensed for use under the Apache License Version 2.0 or the General Public License (GPL) Version 2.
*/

(function(){
var doc = document;var f=window.PIE;
if(!f){f=window.PIE={F:"-pie-",nb:"Pie",La:"pie_",Ac:{TD:1,TH:1},cc:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},fc:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},Gd:{submit:1,button:1,reset:1},aa:function(){}};try{doc.execCommand("BackgroundImageCache",false,true)}catch(aa){}for(var ba=4,Z=doc.createElement("div"),ca=Z.getElementsByTagName("i"),ga;Z.innerHTML="<!--[if gt IE "+ ++ba+"]><i></i><![endif]--\>",ca[0];);f.O=ba;if(ba===6)f.F=f.F.replace(/^-/,"");f.ja=
doc.documentMode||f.O;Z.innerHTML='<v:shape adj="1"/>';ga=Z.firstChild;ga.style.behavior="url(#default#VML)";f.zc=typeof ga.adj==="object";(function(){var a,b=0,c={};f.p={Za:function(d){if(!a){a=doc.createDocumentFragment();a.namespaces.add("css3vml","urn:schemas-microsoft-com:vml")}return a.createElement("css3vml:"+d)},Ba:function(d){return d&&d._pieId||(d._pieId="_"+ ++b)},Eb:function(d){var e,g,j,i,h=arguments;e=1;for(g=h.length;e<g;e++){i=h[e];for(j in i)if(i.hasOwnProperty(j))d[j]=i[j]}return d},
Rb:function(d,e,g){var j=c[d],i,h;if(j)Object.prototype.toString.call(j)==="[object Array]"?j.push([e,g]):e.call(g,j);else{h=c[d]=[[e,g]];i=new Image;i.onload=function(){j=c[d]={h:i.width,f:i.height};for(var k=0,n=h.length;k<n;k++)h[k][0].call(h[k][1],j);i.onload=null};i.src=d}}}})();f.Na={gc:function(a,b,c,d){function e(){k=j>=90&&j<270?b:0;n=j<180?c:0;m=b-k;p=c-n}function g(){for(;j<0;)j+=360;j%=360}var j=d.sa;d=d.zb;var i,h,k,n,m,p,r,t;if(d){d=d.coords(a,b,c);i=d.x;h=d.y}if(j){j=j.jd();g();e();
if(!d){i=k;h=n}d=f.Na.tc(i,h,j,m,p);a=d[0];d=d[1]}else if(d){a=b-i;d=c-h}else{i=h=a=0;d=c}r=a-i;t=d-h;if(j===void 0){j=!r?t<0?90:270:!t?r<0?180:0:-Math.atan2(t,r)/Math.PI*180;g();e()}return{sa:j,xc:i,yc:h,td:a,ud:d,Wd:k,Xd:n,rd:m,sd:p,kd:r,ld:t,rc:f.Na.dc(i,h,a,d)}},tc:function(a,b,c,d,e){if(c===0||c===180)return[d,b];else if(c===90||c===270)return[a,e];else{c=Math.tan(-c*Math.PI/180);a=c*a-b;b=-1/c;d=b*d-e;e=b-c;return[(d-a)/e,(c*d-b*a)/e]}},dc:function(a,b,c,d){a=c-a;b=d-b;return Math.abs(a===0?
b:b===0?a:Math.sqrt(a*a+b*b))}};f.ea=function(){this.Gb=[];this.oc={}};f.ea.prototype={ba:function(a){var b=f.p.Ba(a),c=this.oc,d=this.Gb;if(!(b in c)){c[b]=d.length;d.push(a)}},Ha:function(a){a=f.p.Ba(a);var b=this.oc;if(a&&a in b){delete this.Gb[b[a]];delete b[a]}},xa:function(){for(var a=this.Gb,b=a.length;b--;)a[b]&&a[b]()}};f.Oa=new f.ea;f.Oa.Rd=function(){var a=this,b;if(!a.Sd){b=doc.documentElement.currentStyle.getAttribute(f.F+"poll-interval")||250;(function c(){a.xa();setTimeout(c,b)})();
a.Sd=1}};(function(){function a(){f.L.xa();window.detachEvent("onunload",a);window.PIE=null}f.L=new f.ea;window.attachEvent("onunload",a);f.L.ta=function(b,c,d){b.attachEvent(c,d);this.ba(function(){b.detachEvent(c,d)})}})();f.Qa=new f.ea;f.L.ta(window,"onresize",function(){f.Qa.xa()});(function(){function a(){f.mb.xa()}f.mb=new f.ea;f.L.ta(window,"onscroll",a);f.Qa.ba(a)})();(function(){function a(){c=f.kb.md()}function b(){if(c){for(var d=0,e=c.length;d<e;d++)f.attach(c[d]);c=0}}var c;if(f.ja<9){f.L.ta(window,
"onbeforeprint",a);f.L.ta(window,"onafterprint",b)}})();f.lb=new f.ea;f.L.ta(doc,"onmouseup",function(){f.lb.xa()});f.he=function(){function a(h){this.Y=h}var b=doc.createElement("length-calc"),c=doc.body||doc.documentElement,d=b.style,e={},g=["mm","cm","in","pt","pc"],j=g.length,i={};d.position="absolute";d.top=d.left="-9999px";for(c.appendChild(b);j--;){d.width="100"+g[j];e[g[j]]=b.offsetWidth/100}c.removeChild(b);d.width="1em";a.prototype={Kb:/(px|em|ex|mm|cm|in|pt|pc|%)$/,ic:function(){var h=
this.Jd;if(h===void 0)h=this.Jd=parseFloat(this.Y);return h},yb:function(){var h=this.ae;if(!h)h=this.ae=(h=this.Y.match(this.Kb))&&h[0]||"px";return h},a:function(h,k){var n=this.ic(),m=this.yb();switch(m){case "px":return n;case "%":return n*(typeof k==="function"?k():k)/100;case "em":return n*this.xb(h);case "ex":return n*this.xb(h)/2;default:return n*e[m]}},xb:function(h){var k=h.currentStyle.fontSize,n,m;if(k.indexOf("px")>0)return parseFloat(k);else if(h.tagName in f.cc){m=this;n=h.parentNode;
return f.n(k).a(n,function(){return m.xb(n)})}else{h.appendChild(b);k=b.offsetWidth;b.parentNode===h&&h.removeChild(b);return k}}};f.n=function(h){return i[h]||(i[h]=new a(h))};return a}();f.Ja=function(){function a(e){this.X=e}var b=f.n("50%"),c={top:1,center:1,bottom:1},d={left:1,center:1,right:1};a.prototype={zd:function(){if(!this.ac){var e=this.X,g=e.length,j=f.v,i=j.qa,h=f.n("0");i=i.na;h=["left",h,"top",h];if(g===1){e.push(new j.ob(i,"center"));g++}if(g===2){i&(e[0].k|e[1].k)&&e[0].d in c&&
e[1].d in d&&e.push(e.shift());if(e[0].k&i)if(e[0].d==="center")h[1]=b;else h[0]=e[0].d;else if(e[0].W())h[1]=f.n(e[0].d);if(e[1].k&i)if(e[1].d==="center")h[3]=b;else h[2]=e[1].d;else if(e[1].W())h[3]=f.n(e[1].d)}this.ac=h}return this.ac},coords:function(e,g,j){var i=this.zd(),h=i[1].a(e,g);e=i[3].a(e,j);return{x:i[0]==="right"?g-h:h,y:i[2]==="bottom"?j-e:e}}};return a}();f.Ka=function(){function a(b,c){this.h=b;this.f=c}a.prototype={a:function(b,c,d,e,g){var j=this.h,i=this.f,h=c/d;e=e/g;if(j===
"contain"){j=e>h?c:d*e;i=e>h?c/e:d}else if(j==="cover"){j=e<h?c:d*e;i=e<h?c/e:d}else if(j==="auto"){i=i==="auto"?g:i.a(b,d);j=i*e}else{j=j.a(b,c);i=i==="auto"?j/e:i.a(b,d)}return{h:j,f:i}}};a.Kc=new a("auto","auto");return a}();f.Ec=function(){function a(b){this.Y=b}a.prototype={Kb:/[a-z]+$/i,yb:function(){return this.ad||(this.ad=this.Y.match(this.Kb)[0].toLowerCase())},jd:function(){var b=this.Vc,c;if(b===undefined){b=this.yb();c=parseFloat(this.Y,10);b=this.Vc=b==="deg"?c:b==="rad"?c/Math.PI*180:
b==="grad"?c/400*360:b==="turn"?c*360:0}return b}};return a}();f.Jc=function(){function a(c){this.Y=c}var b={};a.Qd=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;a.Fb={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"0FF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",
cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",
forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",
lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",
navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",
slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",yellow:"FF0",yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ua){var c=this.Y,d;if(d=c.match(a.Qd)){this.Ua="rgb("+d[1]+","+d[2]+","+d[3]+")";this.Yb=parseFloat(d[4])}else{if((d=c.toLowerCase())in a.Fb)c="#"+a.Fb[d];this.Ua=c;this.Yb=c==="transparent"?0:
1}}},U:function(c){this.parse();return this.Ua==="currentColor"?c.currentStyle.color:this.Ua},fa:function(){this.parse();return this.Yb}};f.ha=function(c){return b[c]||(b[c]=new a(c))};return a}();f.v=function(){function a(c){this.$a=c;this.ch=0;this.X=[];this.Ga=0}var b=a.qa={Ia:1,Wb:2,z:4,Lc:8,Xb:16,na:32,K:64,oa:128,pa:256,Ra:512,Tc:1024,URL:2048};a.ob=function(c,d){this.k=c;this.d=d};a.ob.prototype={Ca:function(){return this.k&b.K||this.k&b.oa&&this.d==="0"},W:function(){return this.Ca()||this.k&
b.Ra}};a.prototype={de:/\s/,Kd:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,nc:/^\-?[_a-z][\w-]*/i,Yd:/^("([^"]*)"|'([^']*)')/,Bd:/^#([\da-f]{6}|[\da-f]{3})/i,be:{px:b.K,em:b.K,ex:b.K,mm:b.K,cm:b.K,"in":b.K,pt:b.K,pc:b.K,deg:b.Ia,rad:b.Ia,grad:b.Ia},fd:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function d(p,r){p=new a.ob(p,r);if(!c){k.X.push(p);k.Ga++}return p}function e(){k.Ga++;return null}var g,j,i,h,k=this;if(this.Ga<this.X.length)return this.X[this.Ga++];for(;this.de.test(this.$a.charAt(this.ch));)this.ch++;
if(this.ch>=this.$a.length)return e();j=this.ch;g=this.$a.substring(this.ch);i=g.charAt(0);switch(i){case "#":if(h=g.match(this.Bd)){this.ch+=h[0].length;return d(b.z,h[0])}break;case '"':case "'":if(h=g.match(this.Yd)){this.ch+=h[0].length;return d(b.Tc,h[2]||h[3]||"")}break;case "/":case ",":this.ch++;return d(b.pa,i);case "u":if(h=g.match(this.url)){this.ch+=h[0].length;return d(b.URL,h[2]||h[3]||h[4]||"")}}if(h=g.match(this.Kd)){i=h[0];this.ch+=i.length;if(g.charAt(i.length)==="%"){this.ch++;
return d(b.Ra,i+"%")}if(h=g.substring(i.length).match(this.nc)){i+=h[0];this.ch+=h[0].length;return d(this.be[h[0].toLowerCase()]||b.Lc,i)}return d(b.oa,i)}if(h=g.match(this.nc)){i=h[0];this.ch+=i.length;if(i.toLowerCase()in f.Jc.Fb||i==="currentColor"||i==="transparent")return d(b.z,i);if(g.charAt(i.length)==="("){this.ch++;if(i.toLowerCase()in this.fd){g=function(p){return p&&p.k&b.oa};h=function(p){return p&&p.k&(b.oa|b.Ra)};var n=function(p,r){return p&&p.d===r},m=function(){return k.next(1)};
if((i.charAt(0)==="r"?h(m()):g(m()))&&n(m(),",")&&h(m())&&n(m(),",")&&h(m())&&(i==="rgb"||i==="hsa"||n(m(),",")&&g(m()))&&n(m(),")"))return d(b.z,this.$a.substring(j,this.ch));return e()}return d(b.Xb,i)}return d(b.na,i)}this.ch++;return d(b.Wb,i)},D:function(){return this.X[this.Ga-- -2]},all:function(){for(;this.next(););return this.X},ma:function(c,d){for(var e=[],g,j;g=this.next();){if(c(g)){j=true;this.D();break}e.push(g)}return d&&!j?null:e}};return a}();var ha=function(a){this.e=a};ha.prototype=
{Z:0,Od:function(){var a=this.qb,b;return!a||(b=this.o())&&(a.x!==b.x||a.y!==b.y)},Td:function(){var a=this.qb,b;return!a||(b=this.o())&&(a.h!==b.h||a.f!==b.f)},hc:function(){var a=this.e,b=a.getBoundingClientRect(),c=f.ja===9,d=f.O===7,e=b.right-b.left;return{x:b.left,y:b.top,h:c||d?a.offsetWidth:e,f:c||d?a.offsetHeight:b.bottom-b.top,Hd:d&&e?a.offsetWidth/e:1}},o:function(){return this.Z?this.Va||(this.Va=this.hc()):this.hc()},Ad:function(){return!!this.qb},cb:function(){++this.Z},hb:function(){if(!--this.Z){if(this.Va)this.qb=
this.Va;this.Va=null}}};(function(){function a(b){var c=f.p.Ba(b);return function(){if(this.Z){var d=this.$b||(this.$b={});return c in d?d[c]:(d[c]=b.call(this))}else return b.call(this)}}f.B={Z:0,ka:function(b){function c(d){this.e=d;this.Zb=this.ia()}f.p.Eb(c.prototype,f.B,b);c.$c={};return c},j:function(){var b=this.ia(),c=this.constructor.$c;return b?b in c?c[b]:(c[b]=this.la(b)):null},ia:a(function(){var b=this.e,c=this.constructor,d=b.style;b=b.currentStyle;var e=this.wa,g=this.Fa,j=c.Yc||(c.Yc=
f.F+e);c=c.Zc||(c.Zc=f.nb+g.charAt(0).toUpperCase()+g.substring(1));return d[c]||b.getAttribute(j)||d[g]||b.getAttribute(e)}),i:a(function(){return!!this.j()}),H:a(function(){var b=this.ia(),c=b!==this.Zb;this.Zb=b;return c}),va:a,cb:function(){++this.Z},hb:function(){--this.Z||delete this.$b}}})();f.Sb=f.B.ka({wa:f.F+"background",Fa:f.nb+"Background",cd:{scroll:1,fixed:1,local:1},fb:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},sc:{"padding-box":1,"border-box":1,"content-box":1},Pd:{top:1,right:1,
bottom:1,left:1,center:1},Ud:{contain:1,cover:1},eb:{Ma:"backgroundClip",z:"backgroundColor",da:"backgroundImage",Pa:"backgroundOrigin",S:"backgroundPosition",T:"backgroundRepeat",Sa:"backgroundSize"},la:function(a){function b(s){return s&&s.W()||s.k&k&&s.d in t}function c(s){return s&&(s.W()&&f.n(s.d)||s.d==="auto"&&"auto")}var d=this.e.currentStyle,e,g,j,i=f.v.qa,h=i.pa,k=i.na,n=i.z,m,p,r=0,t=this.Pd,v,l,q={M:[]};if(this.wb()){e=new f.v(a);for(j={};g=e.next();){m=g.k;p=g.d;if(!j.P&&m&i.Xb&&p===
"linear-gradient"){v={ca:[],P:p};for(l={};g=e.next();){m=g.k;p=g.d;if(m&i.Wb&&p===")"){l.color&&v.ca.push(l);v.ca.length>1&&f.p.Eb(j,v);break}if(m&n){if(v.sa||v.zb){g=e.D();if(g.k!==h)break;e.next()}l={color:f.ha(p)};g=e.next();if(g.W())l.db=f.n(g.d);else e.D()}else if(m&i.Ia&&!v.sa&&!l.color&&!v.ca.length)v.sa=new f.Ec(g.d);else if(b(g)&&!v.zb&&!l.color&&!v.ca.length){e.D();v.zb=new f.Ja(e.ma(function(s){return!b(s)},false))}else if(m&h&&p===","){if(l.color){v.ca.push(l);l={}}}else break}}else if(!j.P&&
m&i.URL){j.Ab=p;j.P="image"}else if(b(g)&&!j.$){e.D();j.$=new f.Ja(e.ma(function(s){return!b(s)},false))}else if(m&k)if(p in this.fb&&!j.bb)j.bb=p;else if(p in this.sc&&!j.Wa){j.Wa=p;if((g=e.next())&&g.k&k&&g.d in this.sc)j.ub=g.d;else{j.ub=p;e.D()}}else if(p in this.cd&&!j.bc)j.bc=p;else return null;else if(m&n&&!q.color)q.color=f.ha(p);else if(m&h&&p==="/"&&!j.Xa&&j.$){g=e.next();if(g.k&k&&g.d in this.Ud)j.Xa=new f.Ka(g.d);else if(g=c(g)){m=c(e.next());if(!m){m=g;e.D()}j.Xa=new f.Ka(g,m)}else return null}else if(m&
h&&p===","&&j.P){j.Hb=a.substring(r,e.ch-1);r=e.ch;q.M.push(j);j={}}else return null}if(j.P){j.Hb=a.substring(r);q.M.push(j)}}else this.Bc(f.ja<9?function(){var s=this.eb,o=d[s.S+"X"],u=d[s.S+"Y"],x=d[s.da],y=d[s.z];if(y!=="transparent")q.color=f.ha(y);if(x!=="none")q.M=[{P:"image",Ab:(new f.v(x)).next().d,bb:d[s.T],$:new f.Ja((new f.v(o+" "+u)).all())}]}:function(){var s=this.eb,o=/\s*,\s*/,u=d[s.da].split(o),x=d[s.z],y,z,B,E,D,C;if(x!=="transparent")q.color=f.ha(x);if((E=u.length)&&u[0]!=="none"){x=
d[s.T].split(o);y=d[s.S].split(o);z=d[s.Pa].split(o);B=d[s.Ma].split(o);s=d[s.Sa].split(o);q.M=[];for(o=0;o<E;o++)if((D=u[o])&&D!=="none"){C=s[o].split(" ");q.M.push({Hb:D+" "+x[o]+" "+y[o]+" / "+s[o]+" "+z[o]+" "+B[o],P:"image",Ab:(new f.v(D)).next().d,bb:x[o],$:new f.Ja((new f.v(y[o])).all()),Wa:z[o],ub:B[o],Xa:new f.Ka(C[0],C[1])})}}});return q.color||q.M[0]?q:null},Bc:function(a){var b=f.ja>8,c=this.eb,d=this.e.runtimeStyle,e=d[c.da],g=d[c.z],j=d[c.T],i,h,k,n;if(e)d[c.da]="";if(g)d[c.z]="";if(j)d[c.T]=
"";if(b){i=d[c.Ma];h=d[c.Pa];n=d[c.S];k=d[c.Sa];if(i)d[c.Ma]="";if(h)d[c.Pa]="";if(n)d[c.S]="";if(k)d[c.Sa]=""}a=a.call(this);if(e)d[c.da]=e;if(g)d[c.z]=g;if(j)d[c.T]=j;if(b){if(i)d[c.Ma]=i;if(h)d[c.Pa]=h;if(n)d[c.S]=n;if(k)d[c.Sa]=k}return a},ia:f.B.va(function(){return this.wb()||this.Bc(function(){var a=this.e.currentStyle,b=this.eb;return a[b.z]+" "+a[b.da]+" "+a[b.T]+" "+a[b.S+"X"]+" "+a[b.S+"Y"]})}),wb:f.B.va(function(){var a=this.e;return a.style[this.Fa]||a.currentStyle.getAttribute(this.wa)}),
qc:function(){var a=0;if(f.O<7){a=this.e;a=""+(a.style[f.nb+"PngFix"]||a.currentStyle.getAttribute(f.F+"png-fix"))==="true"}return a},i:f.B.va(function(){return(this.wb()||this.qc())&&!!this.j()})});f.Vb=f.B.ka({wc:["Top","Right","Bottom","Left"],Id:{thin:"1px",medium:"3px",thick:"5px"},la:function(){var a={},b={},c={},d=false,e=true,g=true,j=true;this.Cc(function(){for(var i=this.e.currentStyle,h=0,k,n,m,p,r,t,v;h<4;h++){m=this.wc[h];v=m.charAt(0).toLowerCase();k=b[v]=i["border"+m+"Style"];n=i["border"+
m+"Color"];m=i["border"+m+"Width"];if(h>0){if(k!==p)g=false;if(n!==r)e=false;if(m!==t)j=false}p=k;r=n;t=m;c[v]=f.ha(n);m=a[v]=f.n(b[v]==="none"?"0":this.Id[m]||m);if(m.a(this.e)>0)d=true}});return d?{J:a,Zd:b,gd:c,ee:j,hd:e,$d:g}:null},ia:f.B.va(function(){var a=this.e,b=a.currentStyle,c;a.tagName in f.Ac&&a.offsetParent.currentStyle.borderCollapse==="collapse"||this.Cc(function(){c=b.borderWidth+"|"+b.borderStyle+"|"+b.borderColor});return c}),Cc:function(a){var b=this.e.runtimeStyle,c=b.borderWidth,
d=b.borderColor;if(c)b.borderWidth="";if(d)b.borderColor="";a=a.call(this);if(c)b.borderWidth=c;if(d)b.borderColor=d;return a}});(function(){f.jb=f.B.ka({wa:"border-radius",Fa:"borderRadius",la:function(b){var c=null,d,e,g,j,i=false;if(b){e=new f.v(b);var h=function(){for(var k=[],n;(g=e.next())&&g.W();){j=f.n(g.d);n=j.ic();if(n<0)return null;if(n>0)i=true;k.push(j)}return k.length>0&&k.length<5?{tl:k[0],tr:k[1]||k[0],br:k[2]||k[0],bl:k[3]||k[1]||k[0]}:null};if(b=h()){if(g){if(g.k&f.v.qa.pa&&g.d===
"/")d=h()}else d=b;if(i&&b&&d)c={x:b,y:d}}}return c}});var a=f.n("0");a={tl:a,tr:a,br:a,bl:a};f.jb.Dc={x:a,y:a}})();f.Ub=f.B.ka({wa:"border-image",Fa:"borderImage",fb:{stretch:1,round:1,repeat:1,space:1},la:function(a){var b=null,c,d,e,g,j,i,h=0,k=f.v.qa,n=k.na,m=k.oa,p=k.Ra;if(a){c=new f.v(a);b={};for(var r=function(l){return l&&l.k&k.pa&&l.d==="/"},t=function(l){return l&&l.k&n&&l.d==="fill"},v=function(){g=c.ma(function(l){return!(l.k&(m|p))});if(t(c.next())&&!b.fill)b.fill=true;else c.D();if(r(c.next())){h++;
j=c.ma(function(l){return!l.W()&&!(l.k&n&&l.d==="auto")});if(r(c.next())){h++;i=c.ma(function(l){return!l.Ca()})}}else c.D()};a=c.next();){d=a.k;e=a.d;if(d&(m|p)&&!g){c.D();v()}else if(t(a)&&!b.fill){b.fill=true;v()}else if(d&n&&this.fb[e]&&!b.repeat){b.repeat={f:e};if(a=c.next())if(a.k&n&&this.fb[a.d])b.repeat.Ob=a.d;else c.D()}else if(d&k.URL&&!b.src)b.src=e;else return null}if(!b.src||!g||g.length<1||g.length>4||j&&j.length>4||h===1&&j.length<1||i&&i.length>4||h===2&&i.length<1)return null;if(!b.repeat)b.repeat=
{f:"stretch"};if(!b.repeat.Ob)b.repeat.Ob=b.repeat.f;a=function(l,q){return{t:q(l[0]),r:q(l[1]||l[0]),b:q(l[2]||l[0]),l:q(l[3]||l[1]||l[0])}};b.slice=a(g,function(l){return f.n(l.k&m?l.d+"px":l.d)});if(j&&j[0])b.J=a(j,function(l){return l.W()?f.n(l.d):l.d});if(i&&i[0])b.Da=a(i,function(l){return l.Ca()?f.n(l.d):l.d})}return b}});f.Ic=f.B.ka({wa:"box-shadow",Fa:"boxShadow",la:function(a){var b,c=f.n,d=f.v.qa,e;if(a){e=new f.v(a);b={Da:[],Bb:[]};for(a=function(){for(var g,j,i,h,k,n;g=e.next();){i=g.d;
j=g.k;if(j&d.pa&&i===",")break;else if(g.Ca()&&!k){e.D();k=e.ma(function(m){return!m.Ca()})}else if(j&d.z&&!h)h=i;else if(j&d.na&&i==="inset"&&!n)n=true;else return false}g=k&&k.length;if(g>1&&g<5){(n?b.Bb:b.Da).push({fe:c(k[0].d),ge:c(k[1].d),blur:c(k[2]?k[2].d:"0"),Vd:c(k[3]?k[3].d:"0"),color:f.ha(h||"currentColor")});return true}return false};a(););}return b&&(b.Bb.length||b.Da.length)?b:null}});f.Uc=f.B.ka({ia:f.B.va(function(){var a=this.e.currentStyle;return a.visibility+"|"+a.display}),la:function(){var a=
this.e,b=a.runtimeStyle;a=a.currentStyle;var c=b.visibility,d;b.visibility="";d=a.visibility;b.visibility=c;return{ce:d!=="hidden",nd:a.display!=="none"}},i:function(){return false}});f.u={R:function(a){function b(c,d,e,g){this.e=c;this.s=d;this.g=e;this.parent=g}f.p.Eb(b.prototype,f.u,a);return b},Cb:false,Q:function(){return false},Ea:f.aa,Lb:function(){this.m();this.i()&&this.V()},ib:function(){this.Cb=true},Mb:function(){this.i()?this.V():this.m()},sb:function(a,b){this.vc(a);for(var c=this.ra||
(this.ra=[]),d=a+1,e=c.length,g;d<e;d++)if(g=c[d])break;c[a]=b;this.I().insertBefore(b,g||null)},za:function(a){var b=this.ra;return b&&b[a]||null},vc:function(a){var b=this.za(a),c=this.Ta;if(b&&c){c.removeChild(b);this.ra[a]=null}},Aa:function(a,b,c,d){var e=this.rb||(this.rb={}),g=e[a];if(!g){g=e[a]=f.p.Za("shape");if(b)g.appendChild(g[b]=f.p.Za(b));if(d){c=this.za(d);if(!c){this.sb(d,doc.createElement("group"+d));c=this.za(d)}}c.appendChild(g);a=g.style;a.position="absolute";a.left=a.top=0;a.behavior=
"url(#default#VML)"}return g},vb:function(a){var b=this.rb,c=b&&b[a];if(c){c.parentNode.removeChild(c);delete b[a]}return!!c},kc:function(a){var b=this.e,c=this.s.o(),d=c.h,e=c.f,g,j,i,h,k,n;c=a.x.tl.a(b,d);g=a.y.tl.a(b,e);j=a.x.tr.a(b,d);i=a.y.tr.a(b,e);h=a.x.br.a(b,d);k=a.y.br.a(b,e);n=a.x.bl.a(b,d);a=a.y.bl.a(b,e);d=Math.min(d/(c+j),e/(i+k),d/(n+h),e/(g+a));if(d<1){c*=d;g*=d;j*=d;i*=d;h*=d;k*=d;n*=d;a*=d}return{x:{tl:c,tr:j,br:h,bl:n},y:{tl:g,tr:i,br:k,bl:a}}},ya:function(a,b,c){b=b||1;var d,e,
g=this.s.o();e=g.h*b;g=g.f*b;var j=this.g.G,i=Math.floor,h=Math.ceil,k=a?a.Jb*b:0,n=a?a.Ib*b:0,m=a?a.tb*b:0;a=a?a.Db*b:0;var p,r,t,v,l;if(c||j.i()){d=this.kc(c||j.j());c=d.x.tl*b;j=d.y.tl*b;p=d.x.tr*b;r=d.y.tr*b;t=d.x.br*b;v=d.y.br*b;l=d.x.bl*b;b=d.y.bl*b;e="m"+i(a)+","+i(j)+"qy"+i(c)+","+i(k)+"l"+h(e-p)+","+i(k)+"qx"+h(e-n)+","+i(r)+"l"+h(e-n)+","+h(g-v)+"qy"+h(e-t)+","+h(g-m)+"l"+i(l)+","+h(g-m)+"qx"+i(a)+","+h(g-b)+" x e"}else e="m"+i(a)+","+i(k)+"l"+h(e-n)+","+i(k)+"l"+h(e-n)+","+h(g-m)+"l"+i(a)+
","+h(g-m)+"xe";return e},I:function(){var a=this.parent.za(this.N),b;if(!a){a=doc.createElement(this.Ya);b=a.style;b.position="absolute";b.top=b.left=0;this.parent.sb(this.N,a)}return a},mc:function(){var a=this.e,b=a.currentStyle,c=a.runtimeStyle,d=a.tagName,e=f.O===6,g;if(e&&(d in f.cc||d==="FIELDSET")||d==="BUTTON"||d==="INPUT"&&a.type in f.Gd){c.borderWidth="";d=this.g.w.wc;for(g=d.length;g--;){e=d[g];c["padding"+e]="";c["padding"+e]=f.n(b["padding"+e]).a(a)+f.n(b["border"+e+"Width"]).a(a)+(f.O!==
8&&g%2?1:0)}c.borderWidth=0}else if(e){if(a.childNodes.length!==1||a.firstChild.tagName!=="ie6-mask"){b=doc.createElement("ie6-mask");d=b.style;d.visibility="visible";for(d.zoom=1;d=a.firstChild;)b.appendChild(d);a.appendChild(b);c.visibility="hidden"}}else c.borderColor="transparent"},ie:function(){},m:function(){this.parent.vc(this.N);delete this.rb;delete this.ra}};f.Rc=f.u.R({i:function(){var a=this.ed;for(var b in a)if(a.hasOwnProperty(b)&&a[b].i())return true;return false},Q:function(){return this.g.Pb.H()},
ib:function(){if(this.i()){var a=this.jc(),b=a,c;a=a.currentStyle;var d=a.position,e=this.I().style,g=0,j=0;j=this.s.o();var i=j.Hd;if(d==="fixed"&&f.O>6){g=j.x*i;j=j.y*i;b=d}else{do b=b.offsetParent;while(b&&b.currentStyle.position==="static");if(b){c=b.getBoundingClientRect();b=b.currentStyle;g=(j.x-c.left)*i-(parseFloat(b.borderLeftWidth)||0);j=(j.y-c.top)*i-(parseFloat(b.borderTopWidth)||0)}else{b=doc.documentElement;g=(j.x+b.scrollLeft-b.clientLeft)*i;j=(j.y+b.scrollTop-b.clientTop)*i}b="absolute"}e.position=
b;e.left=g;e.top=j;e.zIndex=d==="static"?-1:a.zIndex;this.Cb=true}},Mb:f.aa,Nb:function(){var a=this.g.Pb.j();this.I().style.display=a.ce&&a.nd?"":"none"},Lb:function(){this.i()?this.Nb():this.m()},jc:function(){var a=this.e;return a.tagName in f.Ac?a.offsetParent:a},I:function(){var a=this.Ta,b;if(!a){b=this.jc();a=this.Ta=doc.createElement("css3-container");a.style.direction="ltr";this.Nb();b.parentNode.insertBefore(a,b)}return a},ab:f.aa,m:function(){var a=this.Ta,b;if(a&&(b=a.parentNode))b.removeChild(a);
delete this.Ta;delete this.ra}});f.Fc=f.u.R({N:2,Ya:"background",Q:function(){var a=this.g;return a.C.H()||a.G.H()},i:function(){var a=this.g;return a.q.i()||a.G.i()||a.C.i()||a.ga.i()&&a.ga.j().Bb},V:function(){var a=this.s.o();if(a.h&&a.f){this.od();this.pd()}},od:function(){var a=this.g.C.j(),b=this.s.o(),c=this.e,d=a&&a.color,e,g;if(d&&d.fa()>0){this.lc();a=this.Aa("bgColor","fill",this.I(),1);e=b.h;b=b.f;a.stroked=false;a.coordsize=e*2+","+b*2;a.coordorigin="1,1";a.path=this.ya(null,2);g=a.style;
g.width=e;g.height=b;a.fill.color=d.U(c);c=d.fa();if(c<1)a.fill.opacity=c}else this.vb("bgColor")},pd:function(){var a=this.g.C.j(),b=this.s.o();a=a&&a.M;var c,d,e,g,j;if(a){this.lc();d=b.h;e=b.f;for(j=a.length;j--;){b=a[j];c=this.Aa("bgImage"+j,"fill",this.I(),2);c.stroked=false;c.fill.type="tile";c.fillcolor="none";c.coordsize=d*2+","+e*2;c.coordorigin="1,1";c.path=this.ya(0,2);g=c.style;g.width=d;g.height=e;if(b.P==="linear-gradient")this.bd(c,b);else{c.fill.src=b.Ab;this.Nd(c,j)}}}for(j=a?a.length:
0;this.vb("bgImage"+j++););},Nd:function(a,b){var c=this;f.p.Rb(a.fill.src,function(d){var e=c.e,g=c.s.o(),j=g.h;g=g.f;if(j&&g){var i=a.fill,h=c.g,k=h.w.j(),n=k&&k.J;k=n?n.t.a(e):0;var m=n?n.r.a(e):0,p=n?n.b.a(e):0;n=n?n.l.a(e):0;h=h.C.j().M[b];e=h.$?h.$.coords(e,j-d.h-n-m,g-d.f-k-p):{x:0,y:0};h=h.bb;p=m=0;var r=j+1,t=g+1,v=f.O===8?0:1;n=Math.round(e.x)+n+0.5;k=Math.round(e.y)+k+0.5;i.position=n/j+","+k/g;i.size.x=1;i.size=d.h+"px,"+d.f+"px";if(h&&h!=="repeat"){if(h==="repeat-x"||h==="no-repeat"){m=
k+1;t=k+d.f+v}if(h==="repeat-y"||h==="no-repeat"){p=n+1;r=n+d.h+v}a.style.clip="rect("+m+"px,"+r+"px,"+t+"px,"+p+"px)"}}})},bd:function(a,b){var c=this.e,d=this.s.o(),e=d.h,g=d.f;a=a.fill;d=b.ca;var j=d.length,i=Math.PI,h=f.Na,k=h.tc,n=h.dc;b=h.gc(c,e,g,b);h=b.sa;var m=b.xc,p=b.yc,r=b.Wd,t=b.Xd,v=b.rd,l=b.sd,q=b.kd,s=b.ld;b=b.rc;e=h%90?Math.atan2(q*e/g,s)/i*180:h+90;e+=180;e%=360;v=k(r,t,h,v,l);g=n(r,t,v[0],v[1]);i=[];v=k(m,p,h,r,t);n=n(m,p,v[0],v[1])/g*100;k=[];for(h=0;h<j;h++)k.push(d[h].db?d[h].db.a(c,
b):h===0?0:h===j-1?b:null);for(h=1;h<j;h++){if(k[h]===null){m=k[h-1];b=h;do p=k[++b];while(p===null);k[h]=m+(p-m)/(b-h+1)}k[h]=Math.max(k[h],k[h-1])}for(h=0;h<j;h++)i.push(n+k[h]/g*100+"% "+d[h].color.U(c));a.angle=e;a.type="gradient";a.method="sigma";a.color=d[0].color.U(c);a.color2=d[j-1].color.U(c);if(a.colors)a.colors.value=i.join(",");else a.colors=i.join(",")},lc:function(){var a=this.e.runtimeStyle;a.backgroundImage="url(about:blank)";a.backgroundColor="transparent"},m:function(){f.u.m.call(this);
var a=this.e.runtimeStyle;a.backgroundImage=a.backgroundColor=""}});f.Gc=f.u.R({N:4,Ya:"border",Q:function(){var a=this.g;return a.w.H()||a.G.H()},i:function(){var a=this.g;return a.G.i()&&!a.q.i()&&a.w.i()},V:function(){var a=this.e,b=this.g.w.j(),c=this.s.o(),d=c.h;c=c.f;var e,g,j,i,h;if(b){this.mc();b=this.wd(2);i=0;for(h=b.length;i<h;i++){j=b[i];e=this.Aa("borderPiece"+i,j.stroke?"stroke":"fill",this.I());e.coordsize=d*2+","+c*2;e.coordorigin="1,1";e.path=j.path;g=e.style;g.width=d;g.height=c;
e.filled=!!j.fill;e.stroked=!!j.stroke;if(j.stroke){e=e.stroke;e.weight=j.Qb+"px";e.color=j.color.U(a);e.dashstyle=j.stroke==="dashed"?"2 2":j.stroke==="dotted"?"1 1":"solid";e.linestyle=j.stroke==="double"&&j.Qb>2?"ThinThin":"Single"}else e.fill.color=j.fill.U(a)}for(;this.vb("borderPiece"+i++););}},wd:function(a){var b=this.e,c,d,e,g=this.g.w,j=[],i,h,k,n,m=Math.round,p,r,t;if(g.i()){c=g.j();g=c.J;r=c.Zd;t=c.gd;if(c.ee&&c.$d&&c.hd){if(t.t.fa()>0){c=g.t.a(b);k=c/2;j.push({path:this.ya({Jb:k,Ib:k,
tb:k,Db:k},a),stroke:r.t,color:t.t,Qb:c})}}else{a=a||1;c=this.s.o();d=c.h;e=c.f;c=m(g.t.a(b));k=m(g.r.a(b));n=m(g.b.a(b));b=m(g.l.a(b));var v={t:c,r:k,b:n,l:b};b=this.g.G;if(b.i())p=this.kc(b.j());i=Math.floor;h=Math.ceil;var l=function(o,u){return p?p[o][u]:0},q=function(o,u,x,y,z,B){var E=l("x",o),D=l("y",o),C=o.charAt(1)==="r";o=o.charAt(0)==="b";return E>0&&D>0?(B?"al":"ae")+(C?h(d-E):i(E))*a+","+(o?h(e-D):i(D))*a+","+(i(E)-u)*a+","+(i(D)-x)*a+","+y*65535+","+2949075*(z?1:-1):(B?"m":"l")+(C?d-
u:u)*a+","+(o?e-x:x)*a},s=function(o,u,x,y){var z=o==="t"?i(l("x","tl"))*a+","+h(u)*a:o==="r"?h(d-u)*a+","+i(l("y","tr"))*a:o==="b"?h(d-l("x","br"))*a+","+i(e-u)*a:i(u)*a+","+h(e-l("y","bl"))*a;o=o==="t"?h(d-l("x","tr"))*a+","+h(u)*a:o==="r"?h(d-u)*a+","+h(e-l("y","br"))*a:o==="b"?i(l("x","bl"))*a+","+i(e-u)*a:i(u)*a+","+i(l("y","tl"))*a;return x?(y?"m"+o:"")+"l"+z:(y?"m"+z:"")+"l"+o};b=function(o,u,x,y,z,B){var E=o==="l"||o==="r",D=v[o],C,F;if(D>0&&r[o]!=="none"&&t[o].fa()>0){C=v[E?o:u];u=v[E?u:
o];F=v[E?o:x];x=v[E?x:o];if(r[o]==="dashed"||r[o]==="dotted"){j.push({path:q(y,C,u,B+45,0,1)+q(y,0,0,B,1,0),fill:t[o]});j.push({path:s(o,D/2,0,1),stroke:r[o],Qb:D,color:t[o]});j.push({path:q(z,F,x,B,0,1)+q(z,0,0,B-45,1,0),fill:t[o]})}else j.push({path:q(y,C,u,B+45,0,1)+s(o,D,0,0)+q(z,F,x,B,0,0)+(r[o]==="double"&&D>2?q(z,F-i(F/3),x-i(x/3),B-45,1,0)+s(o,h(D/3*2),1,0)+q(y,C-i(C/3),u-i(u/3),B,1,0)+"x "+q(y,i(C/3),i(u/3),B+45,0,1)+s(o,i(D/3),1,0)+q(z,i(F/3),i(x/3),B,0,0):"")+q(z,0,0,B-45,1,0)+s(o,0,1,
0)+q(y,0,0,B,1,0),fill:t[o]})}};b("t","l","r","tl","tr",90);b("r","t","b","tr","br",0);b("b","r","l","br","bl",-90);b("l","b","t","bl","tl",-180)}}return j},m:function(){if(this.ec||!this.g.q.i())this.e.runtimeStyle.borderColor="";f.u.m.call(this)}});f.Tb=f.u.R({N:5,Md:["t","tr","r","br","b","bl","l","tl","c"],Q:function(){return this.g.q.H()},i:function(){return this.g.q.i()},V:function(){this.I();var a=this.g.q.j(),b=this.g.w.j(),c=this.s.o(),d=this.e,e=this.uc;f.p.Rb(a.src,function(g){function j(s,
o,u,x,y){s=e[s].style;var z=Math.max;s.width=z(o,0);s.height=z(u,0);s.left=x;s.top=y}function i(s,o,u){for(var x=0,y=s.length;x<y;x++)e[s[x]].imagedata[o]=u}var h=c.h,k=c.f,n=f.n("0"),m=a.J||(b?b.J:{t:n,r:n,b:n,l:n});n=m.t.a(d);var p=m.r.a(d),r=m.b.a(d);m=m.l.a(d);var t=a.slice,v=t.t.a(d),l=t.r.a(d),q=t.b.a(d);t=t.l.a(d);j("tl",m,n,0,0);j("t",h-m-p,n,m,0);j("tr",p,n,h-p,0);j("r",p,k-n-r,h-p,n);j("br",p,r,h-p,k-r);j("b",h-m-p,r,m,k-r);j("bl",m,r,0,k-r);j("l",m,k-n-r,0,n);j("c",h-m-p,k-n-r,m,n);i(["tl",
"t","tr"],"cropBottom",(g.f-v)/g.f);i(["tl","l","bl"],"cropRight",(g.h-t)/g.h);i(["bl","b","br"],"cropTop",(g.f-q)/g.f);i(["tr","r","br"],"cropLeft",(g.h-l)/g.h);i(["l","r","c"],"cropTop",v/g.f);i(["l","r","c"],"cropBottom",q/g.f);i(["t","b","c"],"cropLeft",t/g.h);i(["t","b","c"],"cropRight",l/g.h);e.c.style.display=a.fill?"":"none"},this)},I:function(){var a=this.parent.za(this.N),b,c,d,e=this.Md,g=e.length;if(!a){a=doc.createElement("border-image");b=a.style;b.position="absolute";this.uc={};for(d=
0;d<g;d++){c=this.uc[e[d]]=f.p.Za("rect");c.appendChild(f.p.Za("imagedata"));b=c.style;b.behavior="url(#default#VML)";b.position="absolute";b.top=b.left=0;c.imagedata.src=this.g.q.j().src;c.stroked=false;c.filled=false;a.appendChild(c)}this.parent.sb(this.N,a)}return a},Ea:function(){if(this.i()){var a=this.e,b=a.runtimeStyle,c=this.g.q.j().J;b.borderStyle="solid";if(c){b.borderTopWidth=c.t.a(a)+"px";b.borderRightWidth=c.r.a(a)+"px";b.borderBottomWidth=c.b.a(a)+"px";b.borderLeftWidth=c.l.a(a)+"px"}this.mc()}},
m:function(){var a=this.e.runtimeStyle;a.borderStyle="";if(this.ec||!this.g.w.i())a.borderColor=a.borderWidth="";f.u.m.call(this)}});f.Hc=f.u.R({N:1,Ya:"outset-box-shadow",Q:function(){var a=this.g;return a.ga.H()||a.G.H()},i:function(){var a=this.g.ga;return a.i()&&a.j().Da[0]},V:function(){function a(C,F,O,H,M,P,I){C=b.Aa("shadow"+C+F,"fill",d,j-C);F=C.fill;C.coordsize=n*2+","+m*2;C.coordorigin="1,1";C.stroked=false;C.filled=true;F.color=M.U(c);if(P){F.type="gradienttitle";F.color2=F.color;F.opacity=
0}C.path=I;l=C.style;l.left=O;l.top=H;l.width=n;l.height=m;return C}var b=this,c=this.e,d=this.I(),e=this.g,g=e.ga.j().Da;e=e.G.j();var j=g.length,i=j,h,k=this.s.o(),n=k.h,m=k.f;k=f.O===8?1:0;for(var p=["tl","tr","br","bl"],r,t,v,l,q,s,o,u,x,y,z,B,E,D;i--;){t=g[i];q=t.fe.a(c);s=t.ge.a(c);h=t.Vd.a(c);o=t.blur.a(c);t=t.color;u=-h-o;if(!e&&o)e=f.jb.Dc;u=this.ya({Jb:u,Ib:u,tb:u,Db:u},2,e);if(o){x=(h+o)*2+n;y=(h+o)*2+m;z=x?o*2/x:0;B=y?o*2/y:0;if(o-h>n/2||o-h>m/2)for(h=4;h--;){r=p[h];E=r.charAt(0)==="b";
D=r.charAt(1)==="r";r=a(i,r,q,s,t,o,u);v=r.fill;v.focusposition=(D?1-z:z)+","+(E?1-B:B);v.focussize="0,0";r.style.clip="rect("+((E?y/2:0)+k)+"px,"+(D?x:x/2)+"px,"+(E?y:y/2)+"px,"+((D?x/2:0)+k)+"px)"}else{r=a(i,"",q,s,t,o,u);v=r.fill;v.focusposition=z+","+B;v.focussize=1-z*2+","+(1-B*2)}}else{r=a(i,"",q,s,t,o,u);q=t.fa();if(q<1)r.fill.opacity=q}}}});f.Pc=f.u.R({N:6,Ya:"imgEl",Q:function(){var a=this.g;return this.e.src!==this.Xc||a.G.H()},i:function(){var a=this.g;return a.G.i()||a.C.qc()},V:function(){this.Xc=
j;this.Cd();var a=this.Aa("img","fill",this.I()),b=a.fill,c=this.s.o(),d=c.h;c=c.f;var e=this.g.w.j(),g=e&&e.J;e=this.e;var j=e.src,i=Math.round,h=e.currentStyle,k=f.n;if(!g||f.O<7){g=f.n("0");g={t:g,r:g,b:g,l:g}}a.stroked=false;b.type="frame";b.src=j;b.position=(d?0.5/d:0)+","+(c?0.5/c:0);a.coordsize=d*2+","+c*2;a.coordorigin="1,1";a.path=this.ya({Jb:i(g.t.a(e)+k(h.paddingTop).a(e)),Ib:i(g.r.a(e)+k(h.paddingRight).a(e)),tb:i(g.b.a(e)+k(h.paddingBottom).a(e)),Db:i(g.l.a(e)+k(h.paddingLeft).a(e))},
2);a=a.style;a.width=d;a.height=c},Cd:function(){this.e.runtimeStyle.filter="alpha(opacity=0)"},m:function(){f.u.m.call(this);this.e.runtimeStyle.filter=""}});f.Oc=f.u.R({ib:f.aa,Mb:f.aa,Nb:f.aa,Lb:f.aa,Ld:/^,+|,+$/g,Fd:/,+/g,gb:function(a,b){(this.pb||(this.pb=[]))[a]=b||void 0},ab:function(){var a=this.pb,b;if(a&&(b=a.join(",").replace(this.Ld,"").replace(this.Fd,","))!==this.Wc)this.Wc=this.e.runtimeStyle.background=b},m:function(){this.e.runtimeStyle.background="";delete this.pb}});f.Mc=f.u.R({ua:1,
Q:function(){return this.g.C.H()},i:function(){var a=this.g;return a.C.i()||a.q.i()},V:function(){var a=this.g.C.j(),b,c,d=0,e,g;if(a){b=[];if(c=a.M)for(;e=c[d++];)if(e.P==="linear-gradient"){g=this.vd(e.Wa);g=(e.Xa||f.Ka.Kc).a(this.e,g.h,g.f,g.h,g.f);b.push("url(data:image/svg+xml,"+escape(this.xd(e,g.h,g.f))+") "+this.dd(e.$)+" / "+g.h+"px "+g.f+"px "+(e.bc||"")+" "+(e.Wa||"")+" "+(e.ub||""))}else b.push(e.Hb);a.color&&b.push(a.color.Y);this.parent.gb(this.ua,b.join(","))}},dd:function(a){return a?
a.X.map(function(b){return b.d}).join(" "):"0 0"},vd:function(a){var b=this.e,c=this.s.o(),d=c.h;c=c.f;var e;if(a!=="border-box")if((e=this.g.w.j())&&(e=e.J)){d-=e.l.a(b)+e.l.a(b);c-=e.t.a(b)+e.b.a(b)}if(a==="content-box"){a=f.n;e=b.currentStyle;d-=a(e.paddingLeft).a(b)+a(e.paddingRight).a(b);c-=a(e.paddingTop).a(b)+a(e.paddingBottom).a(b)}return{h:d,f:c}},xd:function(a,b,c){var d=this.e,e=a.ca,g=e.length,j=f.Na.gc(d,b,c,a);a=j.xc;var i=j.yc,h=j.td,k=j.ud;j=j.rc;var n,m,p,r,t;n=[];for(m=0;m<g;m++)n.push(e[m].db?
e[m].db.a(d,j):m===0?0:m===g-1?j:null);for(m=1;m<g;m++)if(n[m]===null){r=n[m-1];p=m;do t=n[++p];while(t===null);n[m]=r+(t-r)/(p-m+1)}b=['<svg width="'+b+'" height="'+c+'" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="'+a/b*100+'%" y1="'+i/c*100+'%" x2="'+h/b*100+'%" y2="'+k/c*100+'%">'];for(m=0;m<g;m++)b.push('<stop offset="'+n[m]/j+'" stop-color="'+e[m].color.U(d)+'" stop-opacity="'+e[m].color.fa()+'"/>');b.push('</linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>');
return b.join("")},m:function(){this.parent.gb(this.ua)}});f.Nc=f.u.R({T:"repeat",Sc:"stretch",Qc:"round",ua:0,Q:function(){return this.g.q.H()},i:function(){return this.g.q.i()},V:function(){var a=this,b=a.g.q.j(),c=a.g.w.j(),d=a.s.o(),e=b.repeat,g=e.f,j=e.Ob,i=a.e,h=0;f.p.Rb(b.src,function(k){function n(Q,R,U,V,W,Y,X,S,w,A){K.push('<pattern patternUnits="userSpaceOnUse" id="pattern'+G+'" x="'+(g===l?Q+U/2-w/2:Q)+'" y="'+(j===l?R+V/2-A/2:R)+'" width="'+w+'" height="'+A+'"><svg width="'+w+'" height="'+
A+'" viewBox="'+W+" "+Y+" "+X+" "+S+'" preserveAspectRatio="none"><image xlink:href="'+v+'" x="0" y="0" width="'+r+'" height="'+t+'" /></svg></pattern>');J.push('<rect x="'+Q+'" y="'+R+'" width="'+U+'" height="'+V+'" fill="url(#pattern'+G+')" />');G++}var m=d.h,p=d.f,r=k.h,t=k.f,v=a.Dd(b.src,r,t),l=a.T,q=a.Sc;k=a.Qc;var s=Math.ceil,o=f.n("0"),u=b.J||(c?c.J:{t:o,r:o,b:o,l:o});o=u.t.a(i);var x=u.r.a(i),y=u.b.a(i);u=u.l.a(i);var z=b.slice,B=z.t.a(i),E=z.r.a(i),D=z.b.a(i);z=z.l.a(i);var C=m-u-x,F=p-o-
y,O=r-z-E,H=t-B-D,M=g===q?C:O*o/B,P=j===q?F:H*x/E,I=g===q?C:O*y/D;q=j===q?F:H*u/z;var K=[],J=[],G=0;if(g===k){M-=(M-(C%M||M))/s(C/M);I-=(I-(C%I||I))/s(C/I)}if(j===k){P-=(P-(F%P||P))/s(F/P);q-=(q-(F%q||q))/s(F/q)}k=['<svg width="'+m+'" height="'+p+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];n(0,0,u,o,0,0,z,B,u,o);n(u,0,C,o,z,0,O,B,M,o);n(m-x,0,x,o,r-E,0,E,B,x,o);n(0,o,u,F,0,B,z,H,u,q);if(b.fill)n(u,o,C,F,z,B,O,H,M||I||O,q||P||H);n(m-x,o,x,F,r-E,B,E,H,x,P);n(0,
p-y,u,y,0,t-D,z,D,u,y);n(u,p-y,C,y,z,t-D,O,D,I,y);n(m-x,p-y,x,y,r-E,t-D,E,D,x,y);k.push("<defs>"+K.join("\n")+"</defs>"+J.join("\n")+"</svg>");a.parent.gb(a.ua,"url(data:image/svg+xml,"+escape(k.join(""))+") no-repeat border-box border-box");h&&a.parent.ab()},a);h=1},Dd:function(){var a={};return function(b,c,d){var e=a[b],g;if(!e){e=new Image;g=doc.createElement("canvas");e.src=b;g.width=c;g.height=d;g.getContext("2d").drawImage(e,0,0);e=a[b]=g.toDataURL()}return e}}(),Ea:f.Tb.prototype.Ea,m:function(){var a=
this.e.runtimeStyle;this.parent.gb(this.ua);a.borderColor=a.borderStyle=a.borderWidth=""}});f.kb=function(){function a(l,q){l.className+=" "+q}function b(l){var q=v.slice.call(arguments,1),s=q.length;setTimeout(function(){if(l)for(;s--;)a(l,q[s])},0)}function c(l){var q=v.slice.call(arguments,1),s=q.length;setTimeout(function(){if(l)for(;s--;){var o=q[s];o=t[o]||(t[o]=new RegExp("\\b"+o+"\\b","g"));l.className=l.className.replace(o,"")}},0)}function d(l){function q(){if(!U){var w,A,L=f.ja,T=l.currentStyle,
N=T.getAttribute(g)==="true",da=T.getAttribute(i)!=="false",ea=T.getAttribute(h)!=="false";S=T.getAttribute(j);S=L>7?S!=="false":S==="true";if(!R){R=1;l.runtimeStyle.zoom=1;T=l;for(var fa=1;T=T.previousSibling;)if(T.nodeType===1){fa=0;break}fa&&a(l,p)}J.cb();if(N&&(A=J.o())&&(w=doc.documentElement||doc.body)&&(A.y>w.clientHeight||A.x>w.clientWidth||A.y+A.f<0||A.x+A.h<0)){if(!Y){Y=1;f.mb.ba(q)}}else{U=1;Y=R=0;f.mb.Ha(q);if(L===9){G={C:new f.Sb(l),q:new f.Ub(l),w:new f.Vb(l)};Q=[G.C,G.q];K=new f.Oc(l,
J,G);w=[new f.Mc(l,J,G,K),new f.Nc(l,J,G,K)]}else{G={C:new f.Sb(l),w:new f.Vb(l),q:new f.Ub(l),G:new f.jb(l),ga:new f.Ic(l),Pb:new f.Uc(l)};Q=[G.C,G.w,G.q,G.G,G.ga,G.Pb];K=new f.Rc(l,J,G);w=[new f.Hc(l,J,G,K),new f.Fc(l,J,G,K),new f.Gc(l,J,G,K),new f.Tb(l,J,G,K)];l.tagName==="IMG"&&w.push(new f.Pc(l,J,G,K));K.ed=w}I=[K].concat(w);if(w=l.currentStyle.getAttribute(f.F+"watch-ancestors")){w=parseInt(w,10);A=0;for(N=l.parentNode;N&&(w==="NaN"||A++<w);){H(N,"onpropertychange",C);H(N,"onmouseenter",x);
H(N,"onmouseleave",y);H(N,"onmousedown",z);if(N.tagName in f.fc){H(N,"onfocus",E);H(N,"onblur",D)}N=N.parentNode}}if(S){f.Oa.ba(o);f.Oa.Rd()}o(1)}if(!V){V=1;L<9&&H(l,"onmove",s);H(l,"onresize",s);H(l,"onpropertychange",u);ea&&H(l,"onmouseenter",x);if(ea||da)H(l,"onmouseleave",y);da&&H(l,"onmousedown",z);if(l.tagName in f.fc){H(l,"onfocus",E);H(l,"onblur",D)}f.Qa.ba(s);f.L.ba(M)}J.hb()}}function s(){J&&J.Ad()&&o()}function o(w){if(!X)if(U){var A,L=I.length;F();for(A=0;A<L;A++)I[A].Ea();if(w||J.Od())for(A=
0;A<L;A++)I[A].ib();if(w||J.Td())for(A=0;A<L;A++)I[A].Mb();K.ab();O()}else R||q()}function u(){var w,A=I.length,L;w=event;if(!X&&!(w&&w.propertyName in r))if(U){F();for(w=0;w<A;w++)I[w].Ea();for(w=0;w<A;w++){L=I[w];L.Cb||L.ib();L.Q()&&L.Lb()}K.ab();O()}else R||q()}function x(){b(l,k)}function y(){c(l,k,n)}function z(){b(l,n);f.lb.ba(B)}function B(){c(l,n);f.lb.Ha(B)}function E(){b(l,m)}function D(){c(l,m)}function C(){var w=event.propertyName;if(w==="className"||w==="id")u()}function F(){J.cb();for(var w=
Q.length;w--;)Q[w].cb()}function O(){for(var w=Q.length;w--;)Q[w].hb();J.hb()}function H(w,A,L){w.attachEvent(A,L);W.push([w,A,L])}function M(){if(V){for(var w=W.length,A;w--;){A=W[w];A[0].detachEvent(A[1],A[2])}f.L.Ha(M);V=0;W=[]}}function P(){if(!X){var w,A;M();X=1;if(I){w=0;for(A=I.length;w<A;w++){I[w].ec=1;I[w].m()}}S&&f.Oa.Ha(o);f.Qa.Ha(o);I=J=G=Q=l=null}}var I,K,J=new ha(l),G,Q,R,U,V,W=[],Y,X,S;this.Ed=q;this.update=o;this.m=P;this.qd=l}var e={},g=f.F+"lazy-init",j=f.F+"poll",i=f.F+"track-active",
h=f.F+"track-hover",k=f.La+"hover",n=f.La+"active",m=f.La+"focus",p=f.La+"first-child",r={background:1,bgColor:1,display:1},t={},v=[];d.yd=function(l){var q=f.p.Ba(l);return e[q]||(e[q]=new d(l))};d.m=function(l){l=f.p.Ba(l);var q=e[l];if(q){q.m();delete e[l]}};d.md=function(){var l=[],q;if(e){for(var s in e)if(e.hasOwnProperty(s)){q=e[s];l.push(q.qd);q.m()}e={}}return l};return d}();f.supportsVML=f.zc;f.attach=function(a){f.ja<10&&f.zc&&f.kb.yd(a).Ed()};f.detach=function(a){f.kb.m(a)}};
})();
/*!
 * fancyBox - jQuery Plugin
 * version: 3.0.0 Beta 1 (Tue, 29 Jan 2013)
 * @requires jQuery v1.7 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2013 Janis Skarnelis - janis@fancyapps.com
 *
 */


(function (window, document, $, undefined) {
	"use strict";

	var W  = $(window),
		D  = $(document),
		H  = $('html');

	var F = $.fancybox = function () {
		F.open.apply( this, arguments );
	};

	var isTouch = F.isTouch = (document.createTouch !== undefined || window.ontouchstart !== undefined);

	var isQuery = function(object) {
		return object && object.hasOwnProperty && object instanceof $;
	};

	var isString = function(str) {
		return str && $.type(str) === "string";
	};

	var isPercentage = function(str) {
		return isString(str) && str.indexOf('%') > 0;
	};

	var getScalar = function(orig, dim) {
		var value = parseFloat(orig, 10) || 0;

		if (dim && isPercentage(orig)) {
			value = F.getViewport()[ dim ] / 100 * value;
		}

		return Math.ceil(value);
	};

	var getValue = function(value, dim) {
		return getScalar(value, dim) + 'px';
	};

	var getTime = Date.now || function() {
		return +new Date;
	};

	var removeWrap = function(what) {
		var el = isString(what) ? $(what) : what;

		if (el && el.length) {
			el.removeClass('fancybox-wrap').stop(true).trigger('onReset').hide().unbind();

			try {
				el.find('iframe').unbind().attr('src', isTouch ? '' : '//about:blank');

				// Give the document in the iframe to get a chance to unload properly before remove
				setTimeout(function () {
					el.empty().remove();

					// Remove the lock if there are no elements
					if (F.lock && !F.coming && !F.current) {
						var scrollV, scrollH;

						$('.fancybox-margin').removeClass('fancybox-margin');

						scrollV = W.scrollTop();
						scrollH = W.scrollLeft();

						H.removeClass('fancybox-lock');

						F.lock.remove();

						F.lock = null;

						W.scrollTop( scrollV ).scrollLeft( scrollH );
					}
				}, 150);

			} catch(e) {}
		}
	};

	$.extend(F, {
		// The current version of fancyBox
		version: '3.0.0',

		defaults: {
			theme     : 'default',          // 'default', dark', 'light'
			padding   : 15,					// space inside box, around content
			margin    : [30, 55, 30, 55],	// space between viewport and the box
			loop      : true,               // Continuous gallery item loop

			arrows    : true,
			closeBtn  : true,
			expander  : !isTouch,

			caption : {
				type     : 'outside'	// 'float', 'inside', 'outside' or 'over',
			},

			overlay : {
				closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
				speedIn    : 0,         // duration of fadeIn animation
				speedOut   : 250,       // duration of fadeOut animation
				showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
				css        : {}			// custom CSS properties
			},

			helpers : {},				// list of enabled helpers

			// Dimensions
			width       : 800,
			height      : 450,
			minWidth    : 100,
			minHeight   : 100,
			maxWidth    : 99999,
			maxHeight   : 99999,
			aspectRatio : false,
			fitToView   : true,

			autoHeight  : true,
			autoWidth   : true,
			autoResize  : true,

			// Location
			autoCenter  : !isTouch,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			// Opening animation
			openEffect  : 'elastic',		// 'elastic', 'fade', 'drop' or 'none'
			openSpeed   : 350,
			openEasing  : 'easeOutQuad',

			// Closing animation
			closeEffect : 'elastic',		// 'elastic', 'fade', 'drop' or 'none'
			closeSpeed  : 350,
			closeEasing : 'easeOutQuad',

			// Animation for next gallery item
			nextEffect : 'elastic',		// 'elastic', 'fade', 'drop' or 'none'
			nextSpeed  : 350,
			nextEasing : 'easeOutQuad',

			// Animation for previous gallery item
			prevEffect : 'elastic',		// 'elastic', 'fade', 'drop' or 'none'
			prevSpeed  : 350,
			prevEasing : 'easeOutQuad',

			// Slideshow
			autoPlay   : false,
			playSpeed  : 3000,

			/*
				Advanced
			*/

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop,  // After closing

			// Properties specific to content type
			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},

			iframe : {
				scrolling : 'auto',
				preload   : true
			},

			swf : {
				wmode             : 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			// Default keyboard
			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			// Default direction
			direction : {
				next : 'left',
				prev : 'right'
			},

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-inner"></div></div>',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true"></iframe>',
				error    : '<p class="fancybox-error">{{ERROR}}</p>',
				closeBtn : '<a title="{{CLOSE}}" class="fancybox-close" href="javascript:;"></a>',
				next     : '<a title="{{NEXT}}" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="{{PREV}}" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Localization
			locale  : 'en',
			locales : {
				'en' : {
					CLOSE      : 'Close',
					NEXT       : 'Next',
					PREV       : 'Previous',
					ERROR      : 'The requested content cannot be loaded. <br/> Please try again later.',
					EXPAND     : 'Display actual size',
					SHRINK     : 'Fit to the viewport',
					PLAY_START : 'Start slideshow',
					PLAY_STOP  : 'Pause slideshow'
				},
				'de' : {
					CLOSE      : 'Schliessen',
					NEXT       : 'Vorwärts',
					PREV       : 'Zurück',
					ERROR      : 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
					EXPAND     : '',
					SHRINK     : '',
					PLAY_START : '',
					PLAY_STOP  : ''
				}
			},

			// Override some properties
			index     : 0,
			content   : null,
			href      : null,

			// Various
			wrapCSS       : '',         // CSS class name for the box
			modal         : false,
			locked        : true,
			preload       : 3,			// Number of gallery images to preload
			mouseWheel    : true,		// Enable or disable mousewheel support
			scrolling     : 'auto',     // 'yes', 'no', any valid value for CSS "overflow" property
			scrollOutside : true		// If trye, fancyBox will try to set scrollbars outside the content
		},

		// Current state
		current  : null,
		coming   : null,
		group    : [],
		index    : 0,
		isActive : false,	// Is activated
		isOpen   : false,	// Is currently open
		isOpened : false,	// Have been fully opened at least once
		isMaximized : false,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Object containing all helpers
		helpers    : {},

		// Open fancyBox
		open: function( items, options ) {
			if (!items) {
				return;
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			if (!$.isPlainObject( options )) {
				options = {};
			}

			F.opts = $.extend(true, {}, F.defaults, options);

			F.populate( items );

			if (F.group.length) {
				F._start( F.opts.index );
			}
		},

		// Add new items to the group
		populate : function( items ) {
			var group = [];

			if ( !$.isArray( items )) {
				items = [ items ];
			}

			// Build group array, each item is object containing element
			// and most important attributes - href, title and type
			$.each(items, function(i, element) {
				var defaults = $.extend(true, {}, F.opts),
					item,
					obj,
					type,
					margin,
					padding;

				if ($.isPlainObject(element)) {
					item = element;

				} else if (isString(element)) {
					item = { href : element };

				} else if (isQuery(element) || $.type(element) === 'object' && element.nodeType) {
					obj  = $(element);
					item = $(obj).get(0);

					if (!item.href) {
						item = { href : element };
					}

					item = $.extend({
						href    : obj.data('fancybox-href')  || obj.attr('href')  || item.href,
						title   : obj.data('fancybox-title') || obj.attr('title') || item.title,
						type    : obj.data('fancybox-type'),
						element : obj
					}, obj.data('fancybox-options') );

				} else {
					return;
				}

				// If the type has not specified, then try to guess
				if (!item.type && (item.content || item.href)) {
					item.type = item.content ? "html" : F.guessType( obj, item.href );
				}

				// Adjust some defaults depending on content type
				type = item.type || F.opts.type;

				if (type === 'image' || type === 'swf') {
					defaults.autoWidth = defaults.autoHeight = false;
					defaults.scrolling = 'visible';
				}

				if (type === 'image') {
					defaults.aspectRatio = true;
				}

				if (type === 'iframe') {
					defaults.autoWidth = false;
					defaults.scrolling = isTouch ? 'scroll' : 'visible';
				}

				if (items.length < 2) {
					defaults.margin = 30;
				}

				item = $.extend(true, {}, defaults, item);

				// Recheck some parameters
				margin  = item.margin;
				padding = item.padding;

				// Convert margin and padding properties to array - top, right, bottom, left
				if ($.type(margin) === 'number') {
					item.margin = [margin, margin, margin, margin];
				}

				if ($.type(padding) === 'number') {
					item.padding = [padding, padding, padding, padding];
				}

				// 'modal' propery is just a shortcut
				if (item.modal) {
					$.extend(true, item, {
						closeBtn   : false,
						closeClick : false,
						nextClick  : false,
						arrows     : false,
						mouseWheel : false,
						keys       : null,
						overlay : {
							closeClick : false
						}
					});
				}

				if (item.autoSize !== undefined) {
					item.autoWidth = item.autoHeight = !!item.autoSize;
				}

				if (item.width === 'auto') {
					item.autoWidth = true;
				}

				if (item.height === 'auto') {
					item.autoHeight = true;
				}

				group.push( item );
			});

			F.group = F.group.concat( group );
		},

		// Cancel image loading and abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				removeWrap( coming.wrap );
			}

			F.ajaxLoad = F.imgPreload = F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing or remove immediately if is opening/closing
		close: function (e) {
			if (e && $.type(e) === 'object') {
				e.preventDefault();
			}

			F.cancel();

			// Do not close if:
			//   - the script has not been activated
			//   - cancel event has triggered opening a new item
			//   - "beforeClose" trigger has returned false
			if (!F.isActive || F.coming || false === F.trigger('beforeClose')) {
				return;
			}

			F.unbind();

			F.isClosing = true;

			if (F.lock) {
				F.lock.css('overflow', 'hidden');
			}

			if (!F.isOpen || e === true) {
				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;

				F.transitions.close();
			}
		},

		prev : function( direction ) {
			var current = F.current;

			if (current) {
				F.jumpto( current.index - 1, (isString(direction) ? direction : current.direction.prev) );
			}
		},

		next : function( direction ) {
			var current = F.current;

			if (current) {
				F.jumpto( current.index + 1, (isString(direction) ? direction : current.direction.next) );
			}
		},

		jumpto : function( index, direction ) {
			var current = F.current;

			if (!(F.coming && F.coming.index === index)) {
				F.cancel();

				if (current.index == index) {
					direction = null;

				} else if (!direction) {
					direction = current.direction[ index > current.index ? 'next' : 'prev' ];
				}

				F.direction = direction;

				F._start( index );
			}
		}
	});

	$.extend(F, {
		guessType : function(item, href) {
			var rez  = item && item.prop('class') ? item.prop('class').match(/fancybox\.(\w+)/) : 0,
				type = false;

			if (rez) {
				return rez[1];
			}

			if (isString(href)) {
				if (href.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)) {
					type = 'image';

				} else if (href.match(/\.(swf)((\?|#).*)?$/i)) {
					type = 'swf';

				} else if (href.charAt(0) === '#') {
					type = 'inline';
				}

			} else if (isString(item)) {
				type = 'html';
			}

			return type;
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			// Cancel further execution if afterClose callback has opened new instance
			if (ret === false || (event === 'afterClose' && F.isActive) ) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					var helperObject = F.helpers[helper],
						helperOpts;

					if (opts && helperObject && $.isFunction(helperObject[event])) {
						helperOpts = $.extend(true, {}, helperObject.defaults, opts);

						helperObject.opts = helperOpts;

						helperObject[event](helperOpts, obj );
					}
				});
			}

			$.event.trigger(event);
		},

		// Center inside viewport
		reposition: function (e, object) {
			var obj  = object || F.current,
				wrap = obj && obj.wrap,
				pos;

			if (F.isOpen && wrap) {
				pos = F._getPosition( obj );

				if (e === false || (e && e.type === 'scroll')) {
					wrap.stop(true).animate(pos, 200).css('overflow', 'visible');

				} else {
					wrap.css(pos);
				}
			}
		},

		update: function (e) {
			var type    = (e && e.type),
				timeNow = getTime(),
				current = F.current,
				width;

			if (!current || !F.isOpen ) {
				return;
			}

			if (type === 'scroll') {
				if (F.wrap.outerHeight(true) > F.getViewport().h) {
					return;
				}

				if (F.didUpdate) {
					clearTimeout( F.didUpdate );
				}

				F.didUpdate = setTimeout(function() {
					F.reposition(e);

					F.didUpdate = null;
				}, 50);

				return;
			}

			if (F.lock) {
				F.lock.css('overflow', 'hidden');
			}

			F._setDimension();

			F.reposition(e);

			if (F.lock) {
				F.lock.css('overflow', 'auto');
			}

			// Re-center float type caption
			if (current.caption.type === 'float') {
				width = F.getViewport().w - (F.wrap.outerWidth(true)  - F.inner.width() );

				current.caption.wrap.css('width', width).css('marginLeft', (width * 0.5 - F.inner.width() * 0.5) * -1 );
			}

			if (current.expander) {
				if ( current.canShrink) {
					$(".fancybox-expand").show().attr('title', current.locales[ current.locale ].SHRINK  );

				} else if (current.canExpand) {
					$(".fancybox-expand").show().attr('title', current.locales[ current.locale ].EXPAND   );

				} else {
					$(".fancybox-expand").hide();
				}
			}

			F.trigger('onUpdate');
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			var current = F.current;

			if (current && F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				F.update( true );
			}
		},

		hideLoading: function () {
			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, view;

			F.hideLoading();

			el = $('<div id="fancybox-loading"></div>').click(F.cancel).appendTo('body');

			if (!F.defaults.fixed) {
				view = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (view.h * 0.5) + view.y,
					left : (view.w * 0.5) + view.x
				});
			}
		},

		getViewport: function () {
			var rez;

			if (F.lock) {
				rez = {
					x: F.lock.scrollLeft(),
					y: F.lock.scrollTop(),
					w: F.lock[0].clientWidth,
					h: F.lock[0].clientHeight
				};

			} else {
				rez = {
					x: W.scrollLeft(),
					y: W.scrollTop(),

					// See http://bugs.jquery.com/ticket/6724
					w : isTouch && window.innerWidth  ? window.innerWidth  : W.width(),
					h : isTouch && window.innerHeight ? window.innerHeight : W.height()
				};
			}

			return rez;
		},

		unbind : function() {
			if (isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			if (isQuery(F.inner)) {
				F.inner.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		rebind: function () {
			var current = F.current,
				keys;

			F.unbind();

			if (!current || !F.isOpen) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							//if (current.group.length > 1 && val[ code ] !== undefined) {
							if (val[ code ] !== undefined) {
								e.preventDefault();

								if (current.group.length > 1) {
									F[ i ]( val[ code ] );
								}

								return false;
							}

							if ($.inArray(code, val) > -1) {
								e.preventDefault();

								if (i === 'play') {
									F.slideshow.toggle();
								} else {
									F[ i ] ();
								}

								return false;
							}
						});
					}
				});
			}

			F.lastScroll = getTime();

			if (current.mouseWheel && F.group.length > 1) {
				F.wrap.bind('DOMMouseScroll.fb mousewheel.fb MozMousePixelScroll.fb', function (event) {
					var e       = event.originalEvent,
						el      = e.target || 0,
						delta   = (e.wheelDelta || e.detail || 0),
						deltaX  = e.wheelDeltaX || 0,
						deltaY  = e.wheelDeltaY || 0,
						now     = getTime();

					if (((el && el.style && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)))) ) {
						return;
					}

					if (delta === 0 || (F.current && F.current.canShrink)) {
						return;
					}

					e.stopPropagation();

					if (F.lastScroll && (now - F.lastScroll) < 80) {
						F.lastScroll = now;
						return;
					}

					F.lastScroll = now;

					if (e.axis) {
						if (e.axis === e.HORIZONTAL_AXIS) {
							deltaX = delta * -1;

						} else if (e.axis === e.VERTICAL_AXIS) {
							deltaY = delta * -1;
						}
					}

					if ( deltaX === 0 ) {
						if (deltaY > 0) {
							F.prev( 'down' );

						} else {
							F.next( 'up' );
						}

					} else {
						if (deltaX > 0) {
							F.prev( 'right' );

						} else {
							F.next( 'left' );
						}
					}
				});
			}

			F.touch.init();
		},

		rebuild : function() {
			var current = F.current;

			current.wrap.find('.fancybox-nav, .fancybox-close, .fancybox-expand').remove();

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$( F._translate( current.tpl.prev) ).appendTo(F.inner).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$( F._translate( current.tpl.next) ).appendTo(F.inner).bind('click.fb', F.next);
				}
			}

			// Create a close button
			if (current.closeBtn) {
				$( F._translate( current.tpl.closeBtn) ).appendTo(F.wrap).bind('click.fb', F.close);
			}

			// Add expand button to image
			if (current.expander && current.type === 'image') {
				$('<a title="Expand image" class="fancybox-expand" href="javascript:;"></a>')
					.appendTo( F.inner )
					.bind('click.fb', F.toggle);

				if ( !current.canShrink && !current.canExpand) {

				}
			}
		},

		// Create upcoming object and prepare for loading the content
		_start: function( index ) {
			var coming,
				type;

			// Check index and get object from the groups
			if (F.opts.loop) {
				if (index < 0) {
					index = F.group.length + (index % F.group.length);
				}

				index = index % F.group.length;
			}

			coming = F.group[ index ];

			if (!coming) {
				return false;
			}

			// Add all properties
			coming = $.extend(true, {}, F.opts, coming);

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			F.isActive = true;

			// Build the neccessary markup
			F._build();

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					D.unbind('.loading');

					e.preventDefault();

					F.cancel();
				}
			});

			// Show overlay
			if (coming.overlay && coming.overlay.showEarly) {
				F.overlay.open( coming.overlay );
			}

			// Load content
			type = coming.type;

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else if (type === 'inline') {
				F._loadInline();

			} else if (type === 'html' || type === 'swf') {
				F._afterLoad();

			} else {
				F._error();
			}
		},

		_build : function() {
			var coming  = F.coming,
				captionType = coming.caption.type,
				wrap,
				inner,
				scrollV,
				scrollH;

			coming.wrap  = wrap  = $('<div class="fancybox-wrap"></div>').appendTo( coming.parent || 'body' ).addClass('fancybox-' + coming.theme);
			coming.inner = inner = $('<div class="fancybox-inner"></div>').appendTo( wrap );

			coming[ captionType === 'outside' || captionType === 'float' ? 'inner' : 'wrap' ].addClass('fancybox-skin fancybox-' + coming.theme + '-skin');

			if (coming.locked && coming.overlay && F.defaults.fixed) {
				if (!F.lock) {
					F.lock = $('<div id="fancybox-lock"></div>').appendTo( wrap.parent() );
				}

				F.lock.unbind().append( wrap );

				if (coming.overlay.closeClick) {
					F.lock.click(function(e) {
						if ($(e.target).is(F.lock)) {
							F.close();
						}
					});
				}

				// Compensate missing page scrolling by increasing margin
				if (D.height() > W.height() || H.css('overflow-y') === 'scroll') {
					$('*:visible').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && $(this).attr('id') !== "fancybox-lock");
					}).addClass('fancybox-margin');

					H.addClass('fancybox-margin');
				}

				// Workaround for FF jumping bug
				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				H.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			F.trigger('onReady');
		},

		_error: function ( type ) {
			if (!F.coming) {
				return;
			}

			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				closeBtn   : true,
				minWidth   : 0,
				minHeight  : 0,
				padding    : [15, 15, 15, 15],
				scrolling  : 'visible',
				hasError   : type,
				content    : F._translate( F.coming.tpl.error )
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				$.extend(F.coming, {
					width   : this.width,
					height  : this.height,
					content : $(this).addClass('fancybox-image')
				});

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true || img.width < 1) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming,
				href   = coming.href,
				hrefParts,
				selector;

			hrefParts = href.split(/\s+/, 2);
			href      = hrefParts.shift();
			selector  = hrefParts.shift();

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						if (selector) {
							data = $('<div>').html(data).find(selector);
						}

						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe;

			coming.content = iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
				.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling);

			if (coming.iframe.preload) {
				F.showLoading();

				F._setDimension( coming );

				coming.wrap.addClass('fancybox-tmp');

				iframe.one('load.fb', function() {
					if (coming.iframe.preload) {
						$(this).data('ready', 1);

						$(this).bind('load.fb', F.update);

						F._afterLoad();
					}
				});
			}

			iframe.attr('src', coming.href).appendTo(coming.inner);

			if (!coming.iframe.preload) {
				F._afterLoad();

			} else if (iframe.data('ready') !== 1) {
				F.showLoading();
			}
		},

		_loadInline : function() {
			var coming = F.coming,
				href   = coming.href;

			coming.content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

			if (coming.content.length) {
				F._afterLoad();

			} else {
				F._error();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item && item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad : function() {
			var current  = F.coming,
				previous = F.current;

			D.unbind('.loading');

			if (!current || F.isActive === false || false === F.trigger('afterLoad', current, previous)) {
				F.hideLoading();

				if (current && current.wrap) {
					removeWrap( current.wrap );
				}

				if (!previous) {
					F._afterZoomOut( current );
				}

				F.coming = null;

				return;
			}

			$.extend(F, {
				wrap     : current.wrap.addClass('fancybox-type-' + current.type + ' fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-' + current.theme + '-' +  (isTouch ? 'mobile' : 'desktop')  + ' ' + current.wrapCSS),
				inner    : current.inner,
				current  : current,
				previous : previous
			});

			// Set content, margin/padding, caption, etc
			F._prepare();

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow', current, previous);

			F.isOpen = false;
			F.coming = null;

			// Set initial dimension
			F._setDimension();

			F.hideLoading();

			// Open overlay if is not yet open
			if (current.overlay && !F.overlay.el) {
				F.overlay.open( current.overlay );
			}

			F.transitions.open();
		},

		_prepare : function() {
			var current     = F.current,
				content     = current.content || '',
				wrap        = current.wrap,
				inner       = current.inner,
				margin      = current.margin,
				padding     = current.padding,
				href        = current.href,
				type        = current.type,
				scrolling   = current.scrolling,
				caption     = current.caption,
				captionText = current.title,
				captionType = caption.type,
				placeholder = 'fancybox-placeholder',
				display     = 'fancybox-display',
				embed;

			if (type !== 'iframe' && isQuery(content) && content.length) {
				if (!content.data(placeholder)) {
					content.data(display, content.css('display'))
						.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
				}

				content = content.show().detach();

				current.wrap.bind('onReset', function () {
					if ($(this).find(content).length) {
						content.css('display', content.data(display))
							.replaceAll( content.data(placeholder) )
							.data(placeholder, false)
							.data(display, false);
					}
				});
			}

			if (type === 'swf') {
				content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
				embed   = '';

				$.each(current.swf, function(name, val) {
					content += '<param name="' + name + '" value="' + val + '"></param>';
					embed   += ' ' + name + '="' + val + '"';
				});

				content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );

				current.content = current.inner.children(':last');
			}

			// Add margin / padding
			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				if (margin[ i ]) {
					wrap.css('margin' + v, getValue(margin[ i ]));
				}

				if (padding[ i ]) {
					if (!(v === 'Bottom' && captionType === 'outside')) {
						wrap.css('padding' + v, getValue(padding[ i ])  );
					}

					if (captionType === 'outside' || captionType === 'float') {

						inner.css('border' + v + 'Width', getValue(padding[ i ]));

						if (v === 'Top' || v === 'Left') {
							inner.css('margin' + v, getValue(padding[ i ] * -1));
						}
					}
				}
			});

			// Add caption
			if ($.isFunction(captionText)) {
				captionText = captionText.call(current.element, current);
			}

			if (isString(captionText) && $.trim(captionText) !== '') {
				current.caption.wrap = $('<div class="fancybox-title fancybox-title-' + captionType + '-wrap">' + captionText + '</div>').appendTo( current[ captionType === 'over' ? 'inner' : 'wrap' ] );

				if (captionType === 'float') {
					current.caption.wrap.width( F.getViewport().w - (F.wrap.outerWidth(true)  - F.inner.width() ) ).wrapInner('<div></div>');
				}
			}
		},

		_setDimension: function( object ) {
			var view      = F.getViewport(),
				current   = object || F.current,
				wrap      = current.wrap,
				inner     = current.inner,
				width     = current.width,
				height    = current.height,
				minWidth  = current.minWidth,
				minHeight = current.minHeight,
				maxWidth  = current.maxWidth,
				maxHeight = current.maxHeight,
				margin    = current.margin,
				scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
				margin    = current.margin,
				padding   = current.padding,
				scrolling = current.scrolling,
				steps     = 1,
				scrollingX,
				scrollingY,
				hSpace,
				wSpace,
				origWidth,
				origHeight,
				ratio,
				iframe,
				body,
				maxWidth_,
				maxHeight_,
				width_,
				height_,
				canShrink,
				canExpand;

			// Set scrolling
			scrolling  = scrolling.split(',');
			scrollingX = scrolling[0];
			scrollingY = scrolling[1] || scrollingX;

			current.inner
				.css('overflow-x', scrollingX === 'yes' ? 'scroll' : (scrollingX === 'no' ? 'hidden' : scrollingX))
				.css('overflow-y', scrollingY === 'yes' ? 'scroll' : (scrollingY === 'no' ? 'hidden' : scrollingY));

			wSpace = margin[1] + margin[3] + padding[1] + padding[3];
			hSpace = margin[0] + margin[2] + padding[0] + padding[2];

			// Calculations for the content
			minWidth  = getScalar( isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth );
			maxWidth  = getScalar( isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth );

			minHeight = getScalar( isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight );
			maxHeight = getScalar( isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight );

			origWidth  = getScalar( isPercentage(width)  ? getScalar(width,  'w') - wSpace : width  );
			origHeight = getScalar( isPercentage(height) ? getScalar(height, 'h') - hSpace : height );

			if (current.fitToView) {
				maxWidth  = Math.min(maxWidth,  getScalar('100%', 'w') - wSpace );
				maxHeight = Math.min(maxHeight, getScalar('100%', 'h') - hSpace );
			}

			maxWidth_  = view.w;
			maxHeight_ = view.h;

			if (current.type === 'iframe') {
				iframe = current.content;

				wrap.removeClass('fancybox-tmp');

				if ((current.autoWidth || current.autoHeight) && iframe && iframe.data('ready') === 1) {

					try {
						if (iframe[0].contentWindow && iframe[0].contentWindow.document.location) {
							body = iframe.contents().find('body');

							inner.addClass( 'fancybox-tmp' );

							inner.width( screen.width - wSpace ).height( 99999 );

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							if (current.autoWidth) {
								origWidth = body.outerWidth(true);
							}

							if (current.autoHeight) {
								origHeight = body.outerHeight(true);
							}

							inner.removeClass( 'fancybox-tmp' );
						}

					} catch (e) {}
				}

			} else if ( (current.autoWidth || current.autoHeight) && !(current.type === 'image' || current.type === 'swf') ) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (current.autoWidth) {
					inner.width( 'auto' );

				} else {
					inner.width( maxWidth );
				}

				if (current.autoHeight) {
					inner.height( 'auto' );

				} else {
					inner.height( maxHeight );
				}

				if (current.autoWidth) {
					origWidth = inner[0].scrollWidth || inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner[0].scrollHeight || inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = origWidth;
			height = origHeight;
			ratio  = origWidth / origHeight;

			if (!current.autoResize) {
				wrap.css({
					width  : getValue( width ),
					height : 'auto'
				});

				inner.css({
					width  : getValue( width ),
					height : getValue( height )
				});
				return;
			}

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = width / ratio;
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = height * ratio;
				}

				if (width < minWidth) {
					width  = minWidth;
					height = width / ratio;
				}

				if (height < minHeight) {
					height = minHeight;
					width  = height * ratio;
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					origHeight = height = inner[0].scrollHeight;
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Wrap element has to have fixed width, because long title can expand it
			wrap.css({
				width  : getValue( width ),
				height : 'auto'
			});

			inner.css({
				width  : getValue( width ),
				height : getValue( height )
			});

			width_  = getScalar( wrap.outerWidth(true) );
			height_ = getScalar( wrap.outerHeight(true) );

			if (current.fitToView) {
				// Since we do not know how many lines will be at the final, we need to
				// resize box till it fits inside max dimensions
				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 30) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						wrap.css({
							width  : getValue( width )
						});

						inner.css({
							width  : getValue( width ),
							height : getValue( height )
						});

						width_  = getScalar( wrap.outerWidth(true) );
						height_ = getScalar( wrap.outerHeight(true) );
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_  )));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_ )));
				}
			}


			if (scrollOut && scrollingX === 'auto' && (height < inner[0].scrollHeight || (isQuery(current.content) && current.content[0] && height < current.content[0].offsetHeight)) && (width + wSpace + scrollOut) < maxWidth) {
				width += scrollOut;
			}

			wrap.css({
				width  : width
			});

			inner.css({
				width  : getValue( width ),
				height : getValue( height )
			});

			width_  = getScalar( wrap.outerWidth(true) );
			height_ = getScalar( wrap.outerHeight(true) );

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = (width_ < maxWidth_ || height_ < maxHeight_) && ( current.aspectRatio ? (width < maxWidth && height < maxHeight && width < origWidth && height < origHeight) : ((width < maxWidth || height < maxHeight) && (width < origWidth || height < origHeight)) );

			current.canShrink = canShrink;
			current.canExpand = canExpand;

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function( object ) {
			var obj   = object || F.current,
				wrap  = obj.wrap,
				view  = F.getViewport(),
				pos   = {},
				top   = view.y,
				left  = view.x;

			pos = {
				top    : getValue( Math.max(top,  top  + ((view.h - wrap.outerHeight(true)) * obj.topRatio)) ),
				left   : getValue( Math.max(left, left + ((view.w - wrap.outerWidth(true))  * obj.leftRatio)) ),
				width  : getValue( wrap.width() ),
				height : getValue( wrap.height() )
			};

			return pos;
		},

		_afterZoomIn : function() {
			var current   = F.current;

			if (!current) {
				return;
			}

			if (F.lock) {
				F.lock.css('overflow', 'auto');
			}

			F.isOpen = F.isOpened = true;

			F.rebuild();

			F.rebind();

			if (current.caption && current.caption.wrap) {
				current.caption.wrap.show().css({
					'visibility' : 'visible',
					'opacity'    : 0,
					'left'       : 0
				})
				.animate({opacity:1}, "fast");
			}

			F.update();

			F.wrap.css('overflow', 'visible').addClass('fancybox-open').focus();

			F[ F.wrap.hasClass('fancybox-skin') ? 'wrap' : 'inner' ].addClass('fancybox-' + current.theme + '-skin-open');

			if (current.caption && current.caption.wrap) {
				current.caption.wrap.show().css('left', 0).animate({opacity:1}, "fast");
			}

			// Add empty element to simulate bottom margin, this trick helps to avoid extra element
			if (current.margin[2] > 0) {
				$('<div class="fancybox-spacer"></div>').css('height', getValue( current.margin[2] - 2) ).appendTo( F.wrap );
			}

			F.trigger('afterShow');

			F._preloadImages();

			if (current.autoPlay && !F.slideshow.isActive) {
				F.slideshow.start();
			}
		},

		_afterZoomOut : function(obj) {
			var cleanup = function() {
				removeWrap('.fancybox-wrap');
			};

			F.hideLoading();

			obj = obj || F.current;

			if (obj && obj.wrap) {
				obj.wrap.hide();
			}

			$.extend(F, {
				group     : [],
				opts      : {},
				coming    : null,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap      : null,
				skin      : null,
				inner     : null
			});

			F.trigger('afterClose', obj);

			if (!F.coming && !F.current) {
				if (obj.overlay) {
					F.overlay.close( obj.overlay, cleanup );
				} else {
					cleanup();
				}
			}
		},

		_translate : function( str ) {
			var obj = F.coming || F.current,
				arr = obj.locales[ obj.locale ];

			return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
				var value = arr[n];

				if (value === undefined) {
					return match;
				}

				return value;
			});
		}
	});

	/*
	 *	Transition object
	 */

	F.transitions = {
		_getOrig: function( object ) {
			var obj     = object || F.current,
				wrap    = obj.wrap,
				element = obj.element,
				orig    = obj.orig,
				view    = F.getViewport(),
				pos     = {},
				width   = 50,
				height  = 50;

			if (!orig && element && element.is(':visible')) {
				orig = element.find('img:first:visible');

				if (!orig.length) {
					orig = element;
				}
			}

			// If there is no orig element, maybe only the first thumbnail is visible
			if (!orig && obj.group[0].element) {
				orig = obj.group[0].element.find('img:visible:first');
			}

			if (isQuery(orig) && orig.is(':visible')) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

				if (F.lock) {
					pos.top  -= W.scrollTop();
					pos.left -= W.scrollLeft();
				}

			} else {
				pos.top  = view.y + (view.h - height) * obj.topRatio;
				pos.left = view.x + (view.w - width)  * obj.leftRatio;
			}

			pos = {
				top      : getValue( pos.top  - (wrap.outerHeight(true) - wrap.height() ) * 0.5 ),
				left     : getValue( pos.left - (wrap.outerWidth(true)  - wrap.width() )  * 0.5 ),
				width    : getValue( width ),
				height   : getValue( height )
			};

			return pos;
		},

		_getCenter: function( object ) {
			var obj   = object || F.current,
				wrap  = obj.wrap,
				view  = F.getViewport(),
				pos   = {},
				top   = view.y,
				left  = view.x;

			pos = {
				top    : getValue( Math.max(top,  top  + ((view.h - wrap.outerHeight(true)) * obj.topRatio)) ),
				left   : getValue( Math.max(left, left + ((view.w - wrap.outerWidth(true))  * obj.leftRatio)) ),
				width  : getValue( wrap.width() ),
				height : getValue( wrap.height() )
			};

			return pos;
		},

		_prepare : function( object, forClosing ) {
			var obj   = object || F.current,
				wrap  = obj.wrap,
				inner = obj.inner;

			// Little trick to avoid animating both elements and to improve performance
			wrap.height( wrap.height() );

			inner.css({
				'width'  : (inner.width() *  100 / wrap.width() )  + '%',
				'height' : (Math.floor( (inner.height() * 100 / wrap.height() ) * 100 ) / 100 ) + '%'
			});

			if (forClosing === true) {
				wrap.find('.fancybox-title, .fancybox-spacer, .fancybox-close, .fancybox-nav').remove();
			}

			inner.css('overflow', 'hidden');
		},

		fade : function( object, stage ) {
			var pos = this._getCenter( object ),
				opa = {opacity: 0};

			return ((stage === 'open' || stage === 'changeIn') ? [ $.extend(pos, opa), {opacity: 1} ] : [ {}, opa ]);
		},

		drop : function( object, stage ) {
			var a = $.extend(this._getCenter( object ), {opacity: 1}),
				b = $.extend({}, a, {opacity: 0, top: getValue( Math.max( F.getViewport().y - object.margin[0], getScalar( a.top ) - 200 ) )});

			return ((stage === 'open' || stage === 'changeIn') ? [ b, a ] : [ {}, b ]);
		},

		elastic : function( object, stage ) {
			var wrap      = object.wrap,
				margin    = object.margin,
				view      = F.getViewport(),
				direction = F.direction,
				pos       = this._getCenter( object ),
				from      = $.extend({}, pos),
				to        = $.extend({}, pos),
				prop,
				amount,
				value;

			if (stage === 'open') {
				from = this._getOrig( object );

			} else if (stage === 'close') {
				from = {};
				to   = this._getOrig( object );

			} else if (direction) {
				// Calculate max distance and try to avoid scrollbars
				prop    = (direction === 'up' || direction === 'down') ? 'top' : 'left';
				amount  = (direction === 'up' || direction === 'left') ? 200 : -200;

				if (stage === 'changeIn') {
					value = getScalar(from[ prop ]) + amount;

					if (direction === 'left') {
						// from viewport right to center
						value = Math.min( value, view.x + view.w - margin[3] - wrap.outerWidth() - 1 );

					} else if (direction === 'right') {
						// from viewport left to center
						value = Math.max( value, view.x - margin[1] );

					} else if (direction === 'up') {
						// from viewport bottom to center
						value = Math.min( value, view.y + view.h - margin[0] - wrap.outerHeight() - 1);

					} else {
						// down - from viewport top to center
						value = Math.max( value, view.y - margin[2] );
					}

					from[ prop ] = value;

				} else {
					value = getScalar(wrap.css(prop)) - amount;
					from  = {};

					if (direction === 'left') {
						// from viewport center to left
						value = Math.max( value, view.x - margin[3] );

					} else if (direction === 'right') {
						// from viewport center to right
						value = Math.min( value, view.x + view.w - margin[1]  - wrap.outerWidth() - 1 );

					} else if (direction === 'up') {
						// from viewport center to top
						value = Math.max( value, view.y - margin[0]  );

					} else {
						// down - from center to bottom
						value = Math.min( value, view.y + view.h - margin[2] - wrap.outerHeight() - 1 );
					}

					to[ prop ] = value;
				}
			}

			if (stage === 'open' || stage === 'changeIn') {
				from.opacity = 0;
				to.opacity   = 1;

			} else {
				to.opacity   = 0;
			}

			return [ from, to ];
		},

		open : function() {
			var current   = F.current,
				previous  = F.previous,
				direction = F.direction,
				effect,
				pos,
				speed,
				easing,
				stage;

			if (previous) {
				previous.wrap.stop(true).removeClass('fancybox-opened');
			}

    		if ( F.isOpened ) {
    			effect = current.nextEffect,
				speed  = current.nextSpeed;
				easing = current.nextEasing;
				stage  = 'changeIn';

			} else {
				effect = current.openEffect;
				speed  = current.openSpeed;
				easing = current.openEasing;
				stage  = 'open';
			}

			/*
			 *	Open current item
			 */

			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				pos = this[ effect ]( current, stage );

				if (effect === 'elastic') {
					this._prepare( current );
				}

				current.wrap.css( pos[ 0 ] );

				current.wrap.animate(
					pos[ 1 ],
					speed,
					easing,
					F._afterZoomIn
				);
			}

			/*
			 *	Close previous item
			 */
			if (previous) {
				if (!F.isOpened || previous.prevEffect === 'none') {
					// Remove previous item if it has not fully opened
					removeWrap( $('.fancybox-wrap').not( current.wrap ) );

				} else {
					previous.wrap.stop(true).removeClass('fancybox-opened');

					pos = this[ previous.prevEffect ]( previous, 'changeOut' );

					this._prepare( previous, true );

					previous.wrap.animate(
						pos[ 1 ],
						previous.prevSpeed,
						previous.prevEasing,
						function() {
							removeWrap( previous.wrap );
						}
					);
				}
			}
		},

		close : function() {
			var current  = F.current,
				wrap     = current.wrap.stop(true).removeClass('fancybox-opened'),
				effect   = current.closeEffect,
				pos;

			if (effect === 'none') {
				return F._afterZoomOut();
			}

			this._prepare( current, true );

			pos = this[ effect ]( current, 'close' );

			wrap.addClass('fancybox-animating')
				.animate(
					pos[ 1 ],
					current.closeSpeed,
					current.closeEasing,
					F._afterZoomOut
				);
		}
	};

	/*
	 *	Slideshow object
	 */

	F.slideshow = {
		_clear : function () {
			if (this._timer) {
				clearTimeout(this._timer);
			}
		},
		_set : function () {
			this._clear();

			if (F.current && this.isActive) {
				this._timer = setTimeout(F.next, this._speed);
			}
		},

		_timer   : null,
		_speed   : null,

		isActive : false,

		start : function ( speed ) {
			var current = F.current;

			if (current && (current.loop || current.index < current.group.length - 1)) {
				this.stop();

				this.isActive = true;
				this._speed   = speed || current.playSpeed;

				D.bind({
					'beforeLoad.player' : $.proxy(this._clear, this),
					'onUpdate.player'   : $.proxy(this._set, this),
					'onCancel.player beforeClose.player' : $.proxy(this.stop, this)
				});

				this._set();

				F.trigger('onPlayStart');
			}
		},

		stop : function () {
			this._clear();

			D.unbind('.player');

			this.isActive = false;
			this._timer   = this._speed = null;

			F.trigger('onPlayEnd');
		},

		toggle : function() {
			if (this.isActive) {
				this.stop();

			} else {
				this.start.apply(this, arguments );
			}
		}
	};

	/*
	 *	Overlay object
	 */

	F.overlay = {
		el    : null,  // current handle
		theme : '',    // current theme

		// Public methods
		open : function(opts) {
			var that  = this,
				el    = this.el,
				fixed = F.defaults.fixed,
				opacity,
				theme;

			opts = $.extend({}, F.defaults.overlay, opts);

			if (el) {
				el.stop(true).removeAttr('style').unbind('.overlay');

			} else {
				el = $('<div class="fancybox-overlay' + (fixed ? ' fancybox-overlay-fixed' : '' ) + '"></div>').appendTo( opts.parent || 'body' );
			}

			if (opts.closeClick) {
				el.bind('click.overlay', function(e) {
					// fix Android touch event bubbling issue
					if (F.lastTouch && (getTime() - F.lastTouch) < 300) {
						return false;
					}

					if (F.isActive) {
						F.close();
					} else {
						that.close();
					}

					return false;
				});
			}

			theme = opts.theme || (F.coming ? F.coming.theme : 'default');

			if (theme !== this.theme) {
				el.removeClass('fancybox-' + this.theme + '-overlay')
			}

			this.theme = theme;

			el.addClass('fancybox-' + theme + '-overlay').css( opts.css );

			opacity = el.css('opacity');

			if (!this.el && opacity < 1 && opts.speedIn) {
				el.css({
					opacity : 0,
					filter  : 'alpha(opacity=0)'  // This fixes IE flickering
				})
				.fadeTo( opts.speedIn, opacity );
			}

			this.el = el;

			if (!fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}
		},

		close : function(opts, callback) {
			opts = $.extend({}, F.defaults.overlay, opts);

			if (this.el) {
				this.el.stop(true).fadeOut(opts.speedOut, function() {
					W.unbind('resize.overlay');

					$('.fancybox-overlay').remove();

					F.overlay.el = null;

					if ($.isFunction(callback)) {
						callback();
					}
				});
			}
		},

		update : function () {
			// Reset width/height so it will not mess
			this.el.css({width: '100%', height: '100%'});

			this.el.width(D.width()).height(D.height());
		}
	};

	/*
	 *	Touch object - adds swipe left/right events
	 */

	F.touch = {
		startX   : 0,
		wrapX    : 0,
		dx       : 0,
		isMoving : false,

		_start : function(e) {
			var current = F.current,
				data    = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
				now     = getTime();

			if (!F.isOpen || F.wrap.is(':animated')  || !( $(e.target).is(F.inner) || $(e.target).parent().is(F.inner) )) {
				return;
			}

			if (F.lastTouch && (now - F.lastTouch) < 300) {
				e.preventDefault();

				F.lastTouch = now;

				this._cancel(true);

				F.toggle();

				return false;
			}

			F.lastTouch = now;

			if (F.wrap &&  F.wrap.outerWidth() > F.getViewport().w) {
				return;
			}

			e.preventDefault();

			if (data && F.wrap &&  F.wrap.outerWidth() < F.getViewport().w) {
				this.startX   = data.pageX;
				this.wrapX    = F.wrap.position().left;
				this.isMoving = true;

				F.inner
					.bind('touchmove.fb', $.proxy(this._move, this) )
					.one("touchend.fb touchcancel.fb", $.proxy(this._cancel, this) );
			}
		},

		_move : function(e) {
			var data = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
				dx   = this.startX - data.pageX;

			if (!this.isMoving || !F.isOpen) {
				return;
			}

			this.dx = dx;

			if (F.current.wrap.outerWidth(true) <= W.width()) {

				if (Math.abs(dx) >= 50) {
					e.preventDefault();

					this.last = 0;

					this._cancel(true);

					if (dx > 0) {
						F.next('left');

					} else {
						F.prev('right');
					}

				} else if (Math.abs(dx) > 3) {
					e.preventDefault();

					this.last = 0;

					F.wrap.css('left', this.wrapX - dx);
				}
			}
		},

		_clear : function() {
			this.startX   = this.wrapX = this.dx = 0;
			this.isMoving = false;
		},

		_cancel : function( stop ) {
			if (F.inner) {
				F.inner.unbind('touchmove.fb');
			}

			if (F.isOpen && Math.abs(this.dx) > 3) {
				F.reposition(false);
			}

			this._clear();
		},

		init : function() {
			var that = this;

			if (F.inner && F.touch) {
				this._cancel(true);

				F.inner.bind('touchstart.fb', $.proxy(this._start, this));
			}
		}
	};

	/*
	 *	Add default easing
	 */

	if (!$.easing.easeOutQuad) {
		$.easing.easeOutQuad = function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		};
	}

	/*
	 *
	 */

	D.ready(function() {
		var w1, w2, scrollV, scrollH;

		// Tests that need a body at doc ready
		if ( $.scrollbarWidth === undefined ) {
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;padding:0;margin:0;border:0;"></div>').appendTo('body'),
					fixed = elem.css( 'position' ) === 'fixed' && ((elem[0].offsetTop > 18 && elem[0].offsetTop < 22) || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		// Quick and dirty code to get page scroll-bar width and create CSS style
		// Workaround for FF jumping bug
		scrollV = W.scrollTop();
		scrollH = W.scrollLeft();

		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		W.scrollTop( scrollV ).scrollLeft( scrollH );

		F.lockMargin = (w2 - w1);

		$("<style type='text/css'>.fancybox-margin{margin-right:" + F.lockMargin + "px;}</style>").appendTo("head");

		// Auto start
		if ($("script[src*='jquery.fancybox.js']").attr('src').match(/autorun/) ){
			$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],.fancybox").attr('data-fancybox-group', 'gallery').fancybox();
		}
	});

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var that     = this,
			selector = this.length ? this.selector : false,
			live     = (selector && selector.indexOf('()') < 0 && !(options && options.live === false));

		var handler  = function(e) {
			var collection = live ? $(selector) : that,
				group  = $(this).blur(),
				param  = options.groupAttr || 'data-fancybox-group',
				value  = group.attr( param ),
				tmp    = this.rel;

			if (!value && tmp && tmp !== 'nofollow') {
				param = 'rel';
				value = tmp;
			}

			if (value) {
				group = collection.filter('[' + param + '="' + value + '"]');

				options.index = group.index( this );
			}

			if (group.length) {
				e.preventDefault();

				F.open(group.get(), options);
			}
		};

		options = options || {};

		if (live) {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-close,.fancybox-nav,.fancybox-wrap')", 'click.fb-start', handler);

		} else {
			that.unbind('click.fb-start').bind('click.fb-start', handler);
		}

		return this;
	};

}(window, document, jQuery));
function FastClick(e){"use strict";var t,n=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=e;if(!e||!e.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)};if(FastClick.notNeeded(e)){return}if(this.deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){t=e.onclick;e.addEventListener("click",function(e){t(e)},false);e.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":case"select":return true;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent("click",true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.focus=function(e){"use strict";var t;if(this.deviceIsIOS&&e.setSelectionRange){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(this.deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<200){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(this.deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);if(!this.deviceIsIOS4||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(this.deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;if(typeof window.ontouchstart==="undefined"){return true}if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(FastClick.prototype.deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t&&t.content.indexOf("user-scalable=no")!==-1){return true}}else{return true}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e){"use strict";return new FastClick(e)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}
;
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */

var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);
/**
 * @name InfoBox
 * @version 1.1.11 [January 9, 2012]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
 *  <p>
 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
 *  <p>
 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
 */
/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint browser:true */
/*global google */
/**
 * @name InfoBoxOptions
 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
 * @property {boolean} disableAutoPan Disable auto-pan on <tt>open</tt> (default is <tt>false</tt>).
 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
 *  to the map pixel corresponding to <tt>position</tt>.
 * @property {LatLng} position The geographic location at which to display the InfoBox.
 * @property {number} zIndex The CSS z-index style value for the InfoBox.
 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
 * @property {string} boxClass The name of the CSS class defining the styles for the InfoBox container.
 *  The default name is <code>infoBox</code>.
 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the InfoBox. Style values defined here override those that may
 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the InfoBox before the new style values are applied.
 * @property {string} closeBoxMargin The CSS margin style value for the close box.
 *  The default is "2px" (a 2-pixel margin on all sides).
 * @property {string} closeBoxURL The URL of the image representing the close box.
 *  Note: The default is the URL for Google's standard close box.
 *  Set this property to "" if no close box is required.
 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
 *  map edge after an auto-pan.
 * @property {boolean} isHidden Hide the InfoBox on <tt>open</tt> (default is <tt>false</tt>).
 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
 */
/**
 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
 *  Call <tt>InfoBox.open</tt> to add the box to the map.
 * @constructor
 * @param {InfoBoxOptions} [opt_opts]
 */

function InfoBox(e){e=e||{},google.maps.OverlayView.apply(this,arguments),this.content_=e.content||"",this.disableAutoPan_=e.disableAutoPan||!1,this.maxWidth_=e.maxWidth||0,this.pixelOffset_=e.pixelOffset||new google.maps.Size(0,0),this.position_=e.position||new google.maps.LatLng(0,0),this.zIndex_=e.zIndex||null,this.boxClass_=e.boxClass||"infoBox",this.boxStyle_=e.boxStyle||{},this.closeBoxMargin_=e.closeBoxMargin||"2px",this.closeBoxURL_=e.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",e.closeBoxURL===""&&(this.closeBoxURL_=""),this.infoBoxClearance_=e.infoBoxClearance||new google.maps.Size(1,1),this.isHidden_=e.isHidden||!1,this.alignBottom_=e.alignBottom||!1,this.pane_=e.pane||"floatPane",this.enableEventPropagation_=e.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null}InfoBox.prototype=new google.maps.OverlayView,InfoBox.prototype.createInfoBoxDiv_=function(){var e,t,n,r=this,i=function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},s=function(e){e.returnValue=!1,e.preventDefault&&e.preventDefault(),r.enableEventPropagation_||i(e)};if(!this.div_){this.div_=document.createElement("div"),this.setBoxStyle_(),typeof this.content_.nodeType=="undefined"?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:this.maxWidth_!==0&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(n=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-n.left-n.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_);if(!this.enableEventPropagation_){this.eventListeners_=[],t=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"];for(e=0;e<t.length;e++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,t[e],i));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(e){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",s),google.maps.event.trigger(this,"domready")}},InfoBox.prototype.getCloseBoxImg_=function(){var e="";return this.closeBoxURL_!==""&&(e="<img",e+=" src='"+this.closeBoxURL_+"'",e+=" class='infobox-close'>"),e},InfoBox.prototype.addClickHandler_=function(){var e;this.closeBoxURL_!==""?(e=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(e,"click",this.getCloseClickHandler_())):this.closeListener_=null},InfoBox.prototype.getCloseClickHandler_=function(){var e=this;return function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(e,"closeclick"),e.close()}},InfoBox.prototype.panBox_=function(e){var t,n,r=0,i=0;if(!e){t=this.getMap();if(t instanceof google.maps.Map){t.getBounds().contains(this.position_)||t.setCenter(this.position_),n=t.getBounds();var s=t.getDiv(),o=s.offsetWidth,u=s.offsetHeight,a=this.pixelOffset_.width,f=this.pixelOffset_.height,l=this.div_.offsetWidth,c=this.div_.offsetHeight,h=this.infoBoxClearance_.width,p=this.infoBoxClearance_.height,d=this.getProjection().fromLatLngToContainerPixel(this.position_);d.x<-a+h?r=d.x+a-h:d.x+l+a+h>o&&(r=d.x+l+a+h-o),this.alignBottom_?d.y<-f+p+c?i=d.y+f-p-c:d.y+f+p>u&&(i=d.y+f+p-u):d.y<-f+p?i=d.y+f-p:d.y+c+f+p>u&&(i=d.y+c+f+p-u);if(r!==0||i!==0){var v=t.getCenter();t.panBy(r,i)}}}},InfoBox.prototype.setBoxStyle_=function(){var e,t;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",t=this.boxStyle_;for(e in t)t.hasOwnProperty(e)&&(this.div_.style[e]=t[e]);typeof this.div_.style.opacity!="undefined"&&this.div_.style.opacity!==""&&(this.div_.style.filter="alpha(opacity="+this.div_.style.opacity*100+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",this.zIndex_!==null&&(this.div_.style.zIndex=this.zIndex_)}},InfoBox.prototype.getBoxWidths_=function(){var e,t={top:0,bottom:0,left:0,right:0},n=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(e=n.ownerDocument.defaultView.getComputedStyle(n,""),e&&(t.top=parseInt(e.borderTopWidth,10)||0,t.bottom=parseInt(e.borderBottomWidth,10)||0,t.left=parseInt(e.borderLeftWidth,10)||0,t.right=parseInt(e.borderRightWidth,10)||0)):document.documentElement.currentStyle&&n.currentStyle&&(t.top=parseInt(n.currentStyle.borderTopWidth,10)||0,t.bottom=parseInt(n.currentStyle.borderBottomWidth,10)||0,t.left=parseInt(n.currentStyle.borderLeftWidth,10)||0,t.right=parseInt(n.currentStyle.borderRightWidth,10)||0),t},InfoBox.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},InfoBox.prototype.draw=function(){this.createInfoBoxDiv_();var e=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=e.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(e.y+this.pixelOffset_.height)+"px":this.div_.style.top=e.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},InfoBox.prototype.setOptions=function(e){typeof e.boxClass!="undefined"&&(this.boxClass_=e.boxClass,this.setBoxStyle_()),typeof e.boxStyle!="undefined"&&(this.boxStyle_=e.boxStyle,this.setBoxStyle_()),typeof e.content!="undefined"&&this.setContent(e.content),typeof e.disableAutoPan!="undefined"&&(this.disableAutoPan_=e.disableAutoPan),typeof e.maxWidth!="undefined"&&(this.maxWidth_=e.maxWidth),typeof e.pixelOffset!="undefined"&&(this.pixelOffset_=e.pixelOffset),typeof e.alignBottom!="undefined"&&(this.alignBottom_=e.alignBottom),typeof e.position!="undefined"&&this.setPosition(e.position),typeof e.zIndex!="undefined"&&this.setZIndex(e.zIndex),typeof e.closeBoxMargin!="undefined"&&(this.closeBoxMargin_=e.closeBoxMargin),typeof e.closeBoxURL!="undefined"&&(this.closeBoxURL_=e.closeBoxURL),typeof e.infoBoxClearance!="undefined"&&(this.infoBoxClearance_=e.infoBoxClearance),typeof e.isHidden!="undefined"&&(this.isHidden_=e.isHidden),typeof e.enableEventPropagation!="undefined"&&(this.enableEventPropagation_=e.enableEventPropagation),this.div_&&this.draw()},InfoBox.prototype.setContent=function(e){this.content_=e,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),typeof e.nodeType=="undefined"?this.div_.innerHTML=this.getCloseBoxImg_()+e:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(e)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px",typeof e.nodeType=="undefined"?this.div_.innerHTML=this.getCloseBoxImg_()+e:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(e))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},InfoBox.prototype.setPosition=function(e){this.position_=e,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},InfoBox.prototype.setZIndex=function(e){this.zIndex_=e,this.div_&&(this.div_.style.zIndex=e),google.maps.event.trigger(this,"zindex_changed")},InfoBox.prototype.getContent=function(){return this.content_},InfoBox.prototype.getPosition=function(){return this.position_},InfoBox.prototype.getZIndex=function(){return this.zIndex_},InfoBox.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},InfoBox.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},InfoBox.prototype.open=function(e,t){var n=this;t&&(this.position_=t.getPosition(),this.moveListener_=google.maps.event.addListener(t,"position_changed",function(){n.setPosition(this.getPosition())})),this.setMap(e),this.div_&&this.panBox_()},InfoBox.prototype.close=function(){var e;this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null);if(this.eventListeners_){for(e=0;e<this.eventListeners_.length;e++)google.maps.event.removeListener(this.eventListeners_[e]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)};
// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */

(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
// @ sourceMappingURL=jquery-1.10.2.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*! jQuery UI - v1.10.3 - 2013-10-28
* http://jqueryui.com
* Includes: jquery.ui.widget.js, jquery.ui.effect.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */


(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function(e,t){var i="ui-effects-";e.effects={effect:{}},function(e,t){function i(e,t,i){var s=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),a=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,n){var r,o=n.re.exec(i),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=s[l](h),s[u[l].cache]=r[u[l].cache],a=s._rgba=r._rgba,!1):t}),a.length?("0,0,0,0"===a.join()&&e.extend(a,n.transparent),s):n[i]}function a(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var n,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",o=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,a){return new e.Color.fn.parse(t,i,s,a)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(a,r,o,h){if(a===t)return this._rgba=[null,null,null,null],this;(a.jquery||a.nodeType)&&(a=e(a).css(r),r=t);var c=this,d=e.type(a),p=this._rgba=[];return r!==t&&(a=[a,r,o,h],d="array"),"string"===d?this.parse(s(a)||n._default):"array"===d?(f(u.rgba.props,function(e,t){p[t.idx]=i(a[t.idx],t)}),this):"object"===d?(a instanceof l?f(u,function(e,t){a[t.cache]&&(c[t.cache]=a[t.cache].slice())}):f(u,function(t,s){var n=s.cache;f(s.props,function(e,t){if(!c[n]&&s.to){if("alpha"===e||null==a[e])return;c[n]=s.to(c._rgba)}c[n][t.idx]=i(a[e],t,!0)}),c[n]&&0>e.inArray(null,c[n].slice(0,3))&&(c[n][3]=1,s.from&&(c._rgba=s.from(c[n])))}),this):t},is:function(e){var i=l(e),s=!0,a=this;return f(u,function(e,n){var r,o=i[n.cache];return o&&(r=a[n.cache]||n.to&&n.to(a._rgba)||[],f(n.props,function(e,i){return null!=o[i.idx]?s=o[i.idx]===r[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),a=s._space(),n=u[a],r=0===this.alpha()?l("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return s=s[n.cache],f(n.props,function(e,a){var n=a.idx,r=o[n],l=s[n],u=c[a.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=i((l-r)*t+r,a)))}),this[a](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),a=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*a[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,a=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(s,a,n),h=Math.min(s,a,n),l=o-h,u=o+h,c=.5*u;return t=h===o?0:s===o?60*(a-n)/l+360:a===o?60*(n-s)/l+120:60*(s-a)/l+240,i=0===l?0:.5>=c?l/u:l/(2-u),[Math.round(t)%360,i,c,null==r?1:r]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],n=e[3],r=.5>=s?s*(1+i):s+i-s*i,o=2*s-r;return[Math.round(255*a(o,r,t+1/3)),Math.round(255*a(o,r,t)),Math.round(255*a(o,r,t-1/3)),n]},f(u,function(s,a){var n=a.props,r=a.cache,h=a.to,u=a.from;l.fn[s]=function(s){if(h&&!this[r]&&(this[r]=h(this._rgba)),s===t)return this[r].slice();var a,o=e.type(s),c="array"===o||"object"===o?s:arguments,d=this[r].slice();return f(n,function(e,t){var s=c["object"===o?e:t.idx];null==s&&(s=d[t.idx]),d[t.idx]=i(s,t)}),u?(a=l(u(d)),a[r]=d,a):l(d)},f(n,function(t,i){l.fn[t]||(l.fn[t]=function(a){var n,r=e.type(a),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===r?u:("function"===r&&(a=a.call(this,u),r=e.type(a)),null==a&&i.empty?this:("string"===r&&(n=o.exec(a),n&&(a=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[i.idx]=a,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,a){var n,r,o="";if("transparent"!==a&&("string"!==e.type(a)||(n=s(a)))){if(a=l(n||a),!d.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=e.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{t.style[i]=a}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(r),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},n=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var i,s,a=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(a&&a.length&&a[0]&&a[a[0]])for(s=a.length;s--;)i=a[s],"string"==typeof a[i]&&(n[e.camelCase(i)]=a[i]);else for(i in a)"string"==typeof a[i]&&(n[i]=a[i]);return n}function s(t,i){var s,a,r={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(r[s]=a));return r}var a=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").addBack():r;l=l.map(function(){var t=e(this);return{el:t,start:i(this)}}),n=function(){e.each(a,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({addClass:function(t){return function(i,s,a,n){return s?e.effects.animateClass.call(this,{add:i},s,a,n):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,a,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,a,n):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(i){return function(s,a,n,r,o){return"boolean"==typeof a||a===t?n?e.effects.animateClass.call(this,a?{add:s}:{remove:s},n,r,o):i.apply(this,arguments):e.effects.animateClass.call(this,{toggle:s},a,n,r)}}(e.fn.toggleClass),switchClass:function(t,i,s,a,n){return e.effects.animateClass.call(this,{add:i,remove:t},s,a,n)}})}(),function(){function s(t,i,s,a){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(a=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(a=s,s=i,i={}),e.isFunction(s)&&(a=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=a||i.complete,t}function a(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.10.3",save:function(e,t){for(var s=0;t.length>s;s++)null!==t[s]&&e.data(i+t[s],e[0].style[t[s]])},restore:function(e,s){var a,n;for(n=0;s.length>n;n++)null!==s[n]&&(a=e.data(i+s[n]),a===t&&(a=""),e.css(s[n],a))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),a={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(s),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(a),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,a){return a=a||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(a[i]=n[0]*s+n[1])}),a}}),e.fn.extend({effect:function(){function t(t){function s(){e.isFunction(n)&&n.call(a[0]),e.isFunction(t)&&t()}var a=e(this),n=i.complete,o=i.mode;(a.is(":hidden")?"hide"===o:"show"===o)?(a[o](),s()):r.call(a[0],i,s)}var i=s.apply(this,arguments),a=i.mode,n=i.queue,r=e.effects.effect[i.effect];return e.fx.off||!r?a?this[a](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):n===!1?this.each(t):this.queue(n||"fx",t)},show:function(e){return function(t){if(a(t))return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(e.fn.show),hide:function(e){return function(t){if(a(t))return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(e.fn.hide),toggle:function(e){return function(t){if(a(t)||"boolean"==typeof t)return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()})(jQuery);
/* http://keith-wood.name/backgroundPos.html
   Background position animation for jQuery v1.1.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) November 2010.
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. 
   Please attribute the author if you use it. */

(function($){var g=!!$.Tween;if(g){$.Tween.propHooks['backgroundPosition']={get:function(a){return parseBackgroundPosition($(a.elem).css(a.prop))},set:setBackgroundPosition}}else{$.fx.step['backgroundPosition']=setBackgroundPosition};function parseBackgroundPosition(c){var d=(c||'').split(/ /);var e={center:'50%',left:'0%',right:'100%',top:'0%',bottom:'100%'};var f=function(a){var b=(e[d[a]]||d[a]||'50%').match(/^([+-]=)?([+-]?\d+(\.\d*)?)(.*)$/);d[a]=[b[1],parseFloat(b[2]),b[4]||'px']};if(d.length==1&&$.inArray(d[0],['top','bottom'])>-1){d[1]=d[0];d[0]='50%'}f(0);f(1);return d}function setBackgroundPosition(a){if(!a.set){initBackgroundPosition(a)}$(a.elem).css('background-position',((a.pos*(a.end[0][1]-a.start[0][1])+a.start[0][1])+a.end[0][2])+' '+((a.pos*(a.end[1][1]-a.start[1][1])+a.start[1][1])+a.end[1][2]))}function initBackgroundPosition(a){a.start=parseBackgroundPosition($(a.elem).css('backgroundPosition'));a.end=parseBackgroundPosition(a.end);for(var i=0;i<a.end.length;i++){if(a.end[i][0]){a.end[i][1]=a.start[i][1]+(a.end[i][0]=='-='?-1:+1)*a.end[i][1]}}a.set=true}})(jQuery);
/*!
	Colorbox v1.4.33 - 2013-10-31
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/

(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),e(r)}function n(){return i.innerHeight?i.innerHeight:e(i).height()}function r(e){var t=k.length,i=(z+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?E.width():n())/100:1)*parseInt(e,10))}function l(e,t){return e.photo||e.photoRegex.test(t)}function s(e,t){return e.retinaUrl&&i.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function a(e){"contains"in g[0]&&!g[0].contains(e.target)&&(e.stopPropagation(),g.focus())}function d(){var t,i=e.data(N,Y);null==i?(B=e.extend({},X),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},i);for(t in B)e.isFunction(B[t])&&"on"!==t.slice(0,2)&&(B[t]=B[t].call(N));B.rel=B.rel||N.rel||e(N).data("rel")||"nofollow",B.href=B.href||e(N).attr("href"),B.title=B.title||N.title,"string"==typeof B.href&&(B.href=e.trim(B.href))}function c(i,o){e(t).trigger(i),lt.triggerHandler(i),e.isFunction(o)&&o.call(N)}function u(i){q||(N=i,d(),k=e(N),z=0,"nofollow"!==B.rel&&(k=e("."+et).filter(function(){var t,i=e.data(this,Y);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===B.rel}),z=k.index(N),-1===z&&(k=k.add(N),z=k.length-1)),w.css({opacity:parseFloat(B.opacity),cursor:B.overlayClose?"pointer":"auto",visibility:"visible"}).show(),J&&g.add(w).removeClass(J),B.className&&g.add(w).addClass(B.className),J=B.className,B.closeButton?K.html(B.close).appendTo(y):K.appendTo("<div/>"),U||(U=$=!0,g.css({visibility:"hidden",display:"block"}),H=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(H),O=x.height()+C.height()+y.outerHeight(!0)-y.height(),_=b.width()+T.width()+y.outerWidth(!0)-y.width(),D=H.outerHeight(!0),A=H.outerWidth(!0),B.w=h(B.initialWidth,"x"),B.h=h(B.initialHeight,"y"),H.css({width:"",height:B.h}),Q.position(),c(tt,B.onOpen),P.add(L).hide(),g.focus(),B.trapFocus&&t.addEventListener&&(t.addEventListener("focus",a,!0),lt.one(rt,function(){t.removeEventListener("focus",a,!0)})),B.returnFocus&&lt.one(rt,function(){e(N).focus()})),m())}function f(){!g&&t.body&&(V=!1,E=e(i),g=o(st).attr({id:Y,"class":e.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=o(st,"Overlay").hide(),F=e([o(st,"LoadingOverlay")[0],o(st,"LoadingGraphic")[0]]),v=o(st,"Wrapper"),y=o(st,"Content").append(L=o(st,"Title"),S=o(st,"Current"),I=e('<button type="button"/>').attr({id:Z+"Previous"}),R=e('<button type="button"/>').attr({id:Z+"Next"}),M=o("button","Slideshow"),F),K=e('<button type="button"/>').attr({id:Z+"Close"}),v.append(o(st).append(o(st,"TopLeft"),x=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(b=o(st,"MiddleLeft"),y,T=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),C=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),W=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),P=R.add(I).add(S).add(M),e(t.body).append(w,g.append(v,W)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),u(this))}return g?(V||(V=!0,R.click(function(){Q.next()}),I.click(function(){Q.prev()}),K.click(function(){Q.close()}),w.click(function(){B.overlayClose&&Q.close()}),e(t).bind("keydown."+Z,function(e){var t=e.keyCode;U&&B.escKey&&27===t&&(e.preventDefault(),Q.close()),U&&B.arrowKey&&k[1]&&!e.altKey&&(37===t?(e.preventDefault(),I.click()):39===t&&(e.preventDefault(),R.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Z,"."+et,i):e("."+et).live("click."+Z,i)),!0):!1}function m(){var n,r,a,u=Q.prep,f=++at;$=!0,j=!1,N=k[z],d(),c(ht),c(it,B.onLoad),B.h=B.height?h(B.height,"y")-D-O:B.innerHeight&&h(B.innerHeight,"y"),B.w=B.width?h(B.width,"x")-A-_:B.innerWidth&&h(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=h(B.maxWidth,"x")-A-_,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=h(B.maxHeight,"y")-D-O,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,G=setTimeout(function(){F.show()},100),B.inline?(a=o(st).hide().insertBefore(e(n)[0]),lt.one(ht,function(){a.replaceWith(H.children())}),u(e(n))):B.iframe?u(" "):B.html?u(B.html):l(B,n)?(n=s(B,n),j=t.createElement("img"),e(j).addClass(Z+"Photo").bind("error",function(){B.title=!1,u(o(st,"Error").html(B.imgError))}).one("load",function(){var t;f===at&&(e.each(["alt","longdesc","aria-describedby"],function(t,i){var o=e(N).attr(i)||e(N).attr("data-"+i);o&&j.setAttribute(i,o)}),B.retinaImage&&i.devicePixelRatio>1&&(j.height=j.height/i.devicePixelRatio,j.width=j.width/i.devicePixelRatio),B.scalePhotos&&(r=function(){j.height-=j.height*t,j.width-=j.width*t},B.mw&&j.width>B.mw&&(t=(j.width-B.mw)/j.width,r()),B.mh&&j.height>B.mh&&(t=(j.height-B.mh)/j.height,r())),B.h&&(j.style.marginTop=Math.max(B.mh-j.height,0)/2+"px"),k[1]&&(B.loop||k[z+1])&&(j.style.cursor="pointer",j.onclick=function(){Q.next()}),j.style.width=j.width+"px",j.style.height=j.height+"px",setTimeout(function(){u(j)},1))}),setTimeout(function(){j.src=n},1)):n&&W.load(n,B.data,function(t,i){f===at&&u("error"===i?o(st,"Error").html(B.xhrError):e(this).contents())})}var w,g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,A,N,z,j,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1},Y="colorbox",Z="cbox",et=Z+"Element",tt=Z+"_open",it=Z+"_load",ot=Z+"_complete",nt=Z+"_cleanup",rt=Z+"_closed",ht=Z+"_purge",lt=e("<a/>"),st="div",at=0,dt={},ct=function(){function e(){clearTimeout(h)}function t(){(B.loop||k[z+1])&&(e(),h=setTimeout(Q.next,B.slideshowSpeed))}function i(){M.html(B.slideshowStop).unbind(s).one(s,o),lt.bind(ot,t).bind(it,e),g.removeClass(l+"off").addClass(l+"on")}function o(){e(),lt.unbind(ot,t).unbind(it,e),M.html(B.slideshowStart).unbind(s).one(s,function(){Q.next(),i()}),g.removeClass(l+"on").addClass(l+"off")}function n(){r=!1,M.hide(),e(),lt.unbind(ot,t).unbind(it,e),g.removeClass(l+"off "+l+"on")}var r,h,l=Z+"Slideshow_",s="click."+Z;return function(){r?B.slideshow||(lt.unbind(nt,n),n()):B.slideshow&&k[1]&&(r=!0,lt.one(nt,n),B.slideshowAuto?i():o(),M.show())}}();e.colorbox||(e(f),Q=e.fn[Y]=e[Y]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,Y,e.extend({},e.data(this,Y)||X,t))}).addClass(et),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},Q.position=function(t,i){function o(){x[0].style.width=C[0].style.width=y[0].style.width=parseInt(g[0].style.width,10)-_+"px",y[0].style.height=b[0].style.height=T[0].style.height=parseInt(g[0].style.height,10)-O+"px"}var r,l,s,a=0,d=0,c=g.offset();if(E.unbind("resize."+Z),g.css({top:-9e4,left:-9e4}),l=E.scrollTop(),s=E.scrollLeft(),B.fixed?(c.top-=l,c.left-=s,g.css({position:"fixed"})):(a=l,d=s,g.css({position:"absolute"})),d+=B.right!==!1?Math.max(E.width()-B.w-A-_-h(B.right,"x"),0):B.left!==!1?h(B.left,"x"):Math.round(Math.max(E.width()-B.w-A-_,0)/2),a+=B.bottom!==!1?Math.max(n()-B.h-D-O-h(B.bottom,"y"),0):B.top!==!1?h(B.top,"y"):Math.round(Math.max(n()-B.h-D-O,0)/2),g.css({top:c.top,left:c.left,visibility:"visible"}),v[0].style.width=v[0].style.height="9999px",r={width:B.w+A+_,height:B.h+D+O,top:a,left:d},t){var u=0;e.each(r,function(e){return r[e]!==dt[e]?(u=t,void 0):void 0}),t=u}dt=r,t||g.css(r),g.dequeue().animate(r,{duration:t||0,complete:function(){o(),$=!1,v[0].style.width=B.w+A+_+"px",v[0].style.height=B.h+D+O+"px",B.reposition&&setTimeout(function(){E.bind("resize."+Z,Q.position)},1),i&&i()},step:o})},Q.resize=function(e){var t;U&&(e=e||{},e.width&&(B.w=h(e.width,"x")-A-_),e.innerWidth&&(B.w=h(e.innerWidth,"x")),H.css({width:B.w}),e.height&&(B.h=h(e.height,"y")-D-O),e.innerHeight&&(B.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(t=H.scrollTop(),H.css({height:"auto"}),B.h=H.height()),H.css({height:B.h}),t&&H.scrollTop(t),Q.position("none"===B.transition?0:B.speed))},Q.prep=function(i){function n(){return B.w=B.w||H.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function h(){return B.h=B.h||H.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(U){var a,d="none"===B.transition?0:B.speed;H.empty().remove(),H=o(st,"LoadedContent").append(i),H.hide().appendTo(W.show()).css({width:n(),overflow:B.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(y),W.hide(),e(j).css({"float":"none"}),a=function(){function i(){e.support.opacity===!1&&g[0].style.removeAttribute("filter")}var n,h,a=k.length,u="frameBorder",f="allowTransparency";U&&(h=function(){clearTimeout(G),F.hide(),c(ot,B.onComplete)},L.html(B.title).add(H).show(),a>1?("string"==typeof B.current&&S.html(B.current.replace("{current}",z+1).replace("{total}",a)).show(),R[B.loop||a-1>z?"show":"hide"]().html(B.next),I[B.loop||z?"show":"hide"]().html(B.previous),ct(),B.preloading&&e.each([r(-1),r(1)],function(){var i,o,n=k[this],r=e.data(n,Y);r&&r.href?(i=r.href,e.isFunction(i)&&(i=i.call(n))):i=e(n).attr("href"),i&&l(r,i)&&(i=s(r,i),o=t.createElement("img"),o.src=i)})):P.hide(),B.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),B.scrolling||(n.scrolling="no"),e(n).attr({src:B.href,name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(H),lt.one(ht,function(){n.src="//about:blank"}),B.fastIframe&&e(n).trigger("load")):h(),"fade"===B.transition?g.fadeTo(d,1,i):i())},"fade"===B.transition?g.fadeTo(d,0,function(){Q.position(0,a)}):Q.position(d,a)}},Q.next=function(){!$&&k[1]&&(B.loop||k[z+1])&&(z=r(1),u(k[z]))},Q.prev=function(){!$&&k[1]&&(B.loop||z)&&(z=r(-1),u(k[z]))},Q.close=function(){U&&!q&&(q=!0,U=!1,c(nt,B.onCleanup),E.unbind("."+Z),w.fadeTo(B.fadeOut||0,0),g.stop().fadeTo(B.fadeOut||0,0,function(){g.add(w).css({opacity:1,cursor:"auto"}).hide(),c(ht),H.empty().remove(),setTimeout(function(){q=!1,c(rt,B.onClosed)},1)}))},Q.remove=function(){g&&(g.stop(),e.colorbox.close(),g.stop().remove(),w.remove(),q=!1,g=null,e("."+et).removeData(Y).removeClass(et),e(t).unbind("click."+Z))},Q.element=function(){return e(N)},Q.settings=X)})(jQuery,document,window);
/*
 * DropKick 1.3.1
 *
 * Highly customizable <select> lists
 * https://github.com/robdel12/DropKick
 *
 * Created by: Jamie Lottering <http://github.com/JamieLottering> <http://twitter.com/JamieLottering>
 * 
 *
 */
(function(e,t,n){"use strict";var r=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),i=!!r,s=i&&parseFloat(r[1])<7,o=navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),u={},a=[],f={left:37,up:38,right:39,down:40,enter:13,tab:9,zero:48,z:90,last:221},l=['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">','<a class="dk_toggle">','<span class="dk_label">{{ label }}</span>',"</a>",'<div class="dk_options">','<ul class="dk_options_inner">',"</ul>","</div>","</div>"].join(""),c='<li class="{{ current }} {{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',h={startSpeed:400,theme:!1,changes:!1,syncReverse:!0,nativeMobile:!0},p=null,d=null,v=function(e,t,n){var r,i,s,o;r=e.attr("data-dk-dropdown-value");i=e.text();s=t.data("dropkick");o=s.$select;o.val(r).trigger("change");t.find(".dk_label").text(i);n=n||!1;s.settings.change&&!n&&!s.settings.syncReverse&&s.settings.change.call(o,r,i)},m=function(e){e.removeClass("dk_open");p=null},g=function(n){var r=n.find(".dk_toggle"),i=n.find(".dk_options").outerHeight(),s=e(t).height()-r.outerHeight()-r.offset().top+e(t).scrollTop(),o=r.offset().top-e(t).scrollTop();return i<o?i<s:!0},y=function(e,t,n){var r=e.find(".dk_options_inner"),i=t.prevAll("li").outerHeight()*t.prevAll("li").length,s=r.scrollTop(),o=r.height()+r.scrollTop()-t.outerHeight();(n&&n.type==="keydown"||i<s||i>o)&&r.scrollTop(i)},b=function(e,t){var n=g(e);e.find(".dk_options").css({top:n?e.find(".dk_toggle").outerHeight()-1:"",bottom:n?"":e.find(".dk_toggle").outerHeight()-1});p=e.toggleClass("dk_open");y(e,e.find(".dk_option_current"),t)},w=function(e,t,n){t.find(".dk_option_current").removeClass("dk_option_current");e.addClass("dk_option_current");y(t,e,n)},E=function(t,n){var r=t.keyCode,i=n.data("dropkick"),s=String.fromCharCode(r),o=n.find(".dk_options"),u=n.hasClass("dk_open"),a=o.find("li"),l=n.find(".dk_option_current"),c=a.first(),h=a.last(),p,d,g,y,E,S,x;switch(r){case f.enter:if(u){if(!l.hasClass("disabled")){v(l.find("a"),n);m(n)}}else b(n,t);t.preventDefault();break;case f.tab:if(u){v(l.find("a"),n);m(n)}break;case f.up:d=l.prev("li");u?d.length?w(d,n,t):w(h,n,t):b(n,t);t.preventDefault();break;case f.down:if(u){p=l.next("li").first();p.length?w(p,n,t):w(c,n,t)}else b(n,t);t.preventDefault();break;default:}if(r>=f.zero&&r<=f.z){g=(new Date).getTime();if(i.finder===null){i.finder=s.toUpperCase();i.timer=g}else if(g>parseInt(i.timer,10)+1e3){i.finder=s.toUpperCase();i.timer=g}else{i.finder=i.finder+s.toUpperCase();i.timer=g}y=a.find("a");for(E=0,S=y.length;E<S;E++){x=e(y[E]);if(x.html().toUpperCase().indexOf(i.finder)===0){v(x,n);w(x.parent(),n,t);break}}n.data("dropkick",i)}},S=function(t){return e.trim(t).length>0?t:!1},x=function(t,n){var r=t.replace("{{ id }}",n.id).replace("{{ label }}",n.label).replace("{{ tabindex }}",n.tabindex),i=[],s,o,u,a,f;if(n.options&&n.options.length)for(o=0,u=n.options.length;o<u;o++){a=e(n.options[o]);o===0&&a.attr("selected")!==undefined&&a.attr("disabled")!==undefined?f=null:f=c.replace("{{ value }}",a.val()).replace("{{ current }}",S(a.val())===n.value?"dk_option_current":"").replace("{{ disabled }}",a.attr("disabled")!==undefined?"disabled":"").replace("{{ text }}",a.html());i[i.length]=f}s=e(r);s.find(".dk_options_inner").html(i.join(""));return s};s||(n.documentElement.className=n.documentElement.className+" dk_fouc");u.init=function(t){t=e.extend({},h,t);return this.each(function(){var n=e(this),r=n.find(":selected").first(),i=n.find("option"),s=n.data("dropkick")||{},u=n.attr("id")||n.attr("name"),f=t.width||n.outerWidth(),c=n.attr("tabindex")||"0",h=!1,p,v;if(s.id)return n;s.settings=t;s.tabindex=c;s.id=u;s.$original=r;s.$select=n;s.value=S(n.val())||S(r.attr("value"));s.label=r.text();s.options=i;h=x(l,s);h.find(".dk_toggle").css({width:f+"px"});n.before(h).appendTo(h);h=e('div[id="dk_container_'+u+'"]').fadeIn(t.startSpeed);p=t.theme||"default";h.addClass("dk_theme_"+p);s.theme=p;s.$dk=h;n.data("dropkick",s);h.addClass(n.attr("class"));h.data("dropkick",s);a[a.length]=n;h.bind("focus.dropkick",function(){d=h.addClass("dk_focus")}).bind("blur.dropkick",function(){h.removeClass("dk_focus");d=null});o&&s.settings.nativeMobile&&h.addClass("dk_mobile");s.settings.syncReverse&&n.on("change",function(t){var r=n.val(),i=e('a[data-dk-dropdown-value="'+r+'"]',h),o=i.text();h.find(".dk_label").text(o);s.settings.change&&s.settings.change.call(n,r,o);w(i.parent(),h,t)});if(n.attr("form")||n.closest("form").length){v=n.attr("form")?e("#"+n.attr("form").replace(" ",", #")):n.closest("form");v.on("reset",function(){n.dropkick("reset")})}})};u.theme=function(t){var n=e(this).data("dropkick"),r=n.$dk,i="dk_theme_"+n.theme;r.removeClass(i).addClass("dk_theme_"+t);n.theme=t};u.reset=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$dk,r=e('a[data-dk-dropdown-value="'+t.value+'"]',n);!t.$original.eq(0).prop("selected")&&t.$original.eq(0).prop("selected",!0);n.find(".dk_label").text(t.label);w(r.parent(),n)})};u.setValue=function(t){var n=e(this).data("dropkick").$dk,r=e('.dk_options a[data-dk-dropdown-value="'+t+'"]',n);if(r.length){v(r,n);w(r.parent(),n)}else console.warn("There is no option with this value in the <select>")};u.refresh=function(){return this.each(function(){var t=e(this).data("dropkick"),n=t.$select,r=t.$dk;t.settings.startSpeed=0;n.removeData("dropkick").insertAfter(r);r.remove();n.dropkick(t.settings)})};e.fn.dropkick=function(e){if(!s){if(u[e])return u[e].apply(this,Array.prototype.slice.call(arguments,1));if(typeof e=="object"||!e)return u.init.apply(this,arguments)}};e(function(){e(n).on(i?"mousedown":"click",".dk_options a",function(){var t=e(this),n=t.parents(".dk_container").first();if(!t.parent().hasClass("disabled")){v(t,n);w(t.parent(),n);m(n)}return!1});e(n).bind("keydown.dk_nav",function(e){var t=null;p?t=p:d&&!p&&(t=d);t&&E(e,t)});e(n).on("click",null,function(t){if(p&&e(t.target).closest(".dk_container").length===0)m(p);else if(e(t.target).is(".dk_toggle, .dk_label")){var n=e(t.target).parents(".dk_container").first();if(n.hasClass("dk_open"))m(n);else{p&&m(p);b(n,t)}return!1}});var r="onwheel"in t?"wheel":"onmousewheel"in n?"mousewheel":"MouseScrollEvent"in t?"DOMMouseScroll MozMousePixelScroll":!1;r&&e(n).on(r,".dk_options_inner",function(e){var t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail;if(i){this.scrollTop-=Math.round(t/10);return!1}return t>0&&this.scrollTop<=0||t<0&&this.scrollTop>=this.scrollHeight-this.offsetHeight?!1:!0})})})(jQuery,window,document);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
		{
			def: 'easeOutQuad',
			swing: function (x, t, b, c, d) {
				//alert(jQuery.easing.default);
				return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
			},
			easeInQuad: function (x, t, b, c, d) {
				return c*(t/=d)*t + b;
			},
			easeOutQuad: function (x, t, b, c, d) {
				return -c *(t/=d)*(t-2) + b;
			},
			easeInOutQuad: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t + b;
				return -c/2 * ((--t)*(t-2) - 1) + b;
			},
			easeInCubic: function (x, t, b, c, d) {
				return c*(t/=d)*t*t + b;
			},
			easeOutCubic: function (x, t, b, c, d) {
				return c*((t=t/d-1)*t*t + 1) + b;
			},
			easeInOutCubic: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t + b;
				return c/2*((t-=2)*t*t + 2) + b;
			},
			easeInQuart: function (x, t, b, c, d) {
				return c*(t/=d)*t*t*t + b;
			},
			easeOutQuart: function (x, t, b, c, d) {
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
			},
			easeInOutQuart: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
				return -c/2 * ((t-=2)*t*t*t - 2) + b;
			},
			easeInQuint: function (x, t, b, c, d) {
				return c*(t/=d)*t*t*t*t + b;
			},
			easeOutQuint: function (x, t, b, c, d) {
				return c*((t=t/d-1)*t*t*t*t + 1) + b;
			},
			easeInOutQuint: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
				return c/2*((t-=2)*t*t*t*t + 2) + b;
			},
			easeInSine: function (x, t, b, c, d) {
				return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
			},
			easeOutSine: function (x, t, b, c, d) {
				return c * Math.sin(t/d * (Math.PI/2)) + b;
			},
			easeInOutSine: function (x, t, b, c, d) {
				return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
			},
			easeInExpo: function (x, t, b, c, d) {
				return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
			},
			easeOutExpo: function (x, t, b, c, d) {
				return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
			},
			easeInOutExpo: function (x, t, b, c, d) {
				if (t==0) return b;
				if (t==d) return b+c;
				if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
				return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
			},
			easeInCirc: function (x, t, b, c, d) {
				return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
			},
			easeOutCirc: function (x, t, b, c, d) {
				return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
			},
			easeInOutCirc: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
				return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
			},
			easeInElastic: function (x, t, b, c, d) {
				var s=1.70158;var p=0;var a=c;
				if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
				if (a < Math.abs(c)) { a=c; var s=p/4; }
				else var s = p/(2*Math.PI) * Math.asin (c/a);
				return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			},
			easeOutElastic: function (x, t, b, c, d) {
				var s=1.70158;var p=0;var a=c;
				if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
				if (a < Math.abs(c)) { a=c; var s=p/4; }
				else var s = p/(2*Math.PI) * Math.asin (c/a);
				return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
			},
			easeInOutElastic: function (x, t, b, c, d) {
				var s=1.70158;var p=0;var a=c;
				if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
				if (a < Math.abs(c)) { a=c; var s=p/4; }
				else var s = p/(2*Math.PI) * Math.asin (c/a);
				if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
				return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
			},
			easeInBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c*(t/=d)*t*((s+1)*t - s) + b;
			},
			easeOutBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
			},
			easeInOutBack: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158;
				if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
				return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
			},
			easeInBounce: function (x, t, b, c, d) {
				return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
			},
			easeOutBounce: function (x, t, b, c, d) {
				if ((t/=d) < (1/2.75)) {
					return c*(7.5625*t*t) + b;
				} else if (t < (2/2.75)) {
					return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
				} else {
					return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
				}
			},
			easeInOutBounce: function (x, t, b, c, d) {
				if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
				return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
			}
		});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
/*global jQuery */
/*!
 * FitText.js 1.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */


(function( $ ){

	$.fn.fitText = function( kompressor, options ) {

		// Setup options
		var compressor = kompressor || 1,
				settings = $.extend({
					'minFontSize' : Number.NEGATIVE_INFINITY,
					'maxFontSize' : Number.POSITIVE_INFINITY
				}, options);

		return this.each(function(){

			// Store the object
			var $this = $(this);

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
			};

			// Call once to set.
			resizer();

			// Call on resize. Opera debounces their resize by default.
			$(window).on('resize.fittext orientationchange.fittext', resizer);

		});

	};

})( jQuery );
(function(e,t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(e.jQuery)}})(this,function(e){"use strict";function g(e,t){return typeof e===t}function y(e,t){return!!~(""+e).indexOf(t)}function b(e,t){for(var n in e){var r=e[n];if(!y(r,"-")&&u[r]!==undefined){return t=="pfx"?r:true}}return false}function w(e,t,n){for(var r in e){var i=t[e[r]];if(i!==undefined){if(n===false)return e[r];if(g(i,"function")){return i.bind(n||t)}return i}}return false}function E(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+f.join(r+" ")+r).split(" ");if(g(t,"string")||g(t,"undefined")){return b(i,t)}else{i=(e+" "+l.join(r+" ")+r).split(" ");return w(i,t,n)}}var t,n={image:null,imageAttribute:"image",holderClass:"imageHolder",container:e("body"),speed:.2,coverRatio:.75,holderMinHeight:200,extraHeight:0,mediaWidth:1600,mediaHeight:900,parallax:true,touch:false},r={},i=document.documentElement,s="imageScrollModernizr",o=document.createElement(s),u=o.style,a="Webkit Moz O ms",f=a.split(" "),l=a.toLowerCase().split(" "),c={},h=e(window),p=0,d="",v,m=function(e,t,n,r){var o,u,a,f,l=document.createElement("div"),c=document.body,h=c||document.createElement("body");if(parseInt(n,10)){while(n--){a=document.createElement("div");a.id=r?r[n]:s+(n+1);l.appendChild(a)}}o=["&#173;",'<style id="s',s,'">',e,"</style>"].join("");l.id=s;(c?l:h).innerHTML+=o;h.appendChild(l);if(!c){h.style.background="";h.style.overflow="hidden";f=i.style.overflow;i.style.overflow="hidden";i.appendChild(h)}u=t(l,e);if(!c){h.parentNode.removeChild(h);i.style.overflow=f}else{l.parentNode.removeChild(l)}return!!u};c["csstransforms"]=function(){return!!E("transform")};c["csstransforms3d"]=function(){var e=!!E("perspective");if(e&&"webkitPerspective"in i.style){m("@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3})}return e};r.prefixed=function(e,t,n){if(!t){return E(e,"pfx")}else{return E(e,t,n)}};window.requestAnimationFrame=r.prefixed("requestAnimationFrame",window)||function(e,t){var n=(new Date).getTime();var r=Math.max(0,16-(n-p));var i=window.setTimeout(function(){e(n+r)},r);p=n+r;return i};if(c["csstransforms3d"]()){d="csstransforms3d"}else if(c["csstransforms"]()){d="csstransforms"}if(d!==""){v=r.prefixed("transform")}t=function(t,r){return{init:function(){this.$imageHolder=e(t);this.settings=e.extend({},n,r);this.image=this.$imageHolder.data(this.settings.imageAttribute)||this.settings.image;this.mediaWidth=this.$imageHolder.data("width")||this.settings.mediaWidth;this.mediaHeight=this.$imageHolder.data("height")||this.settings.mediaHeight;this.coverRatio=this.$imageHolder.data("cover-ratio")||this.settings.coverRatio;this.extraHeight=this.$imageHolder.data("extra-height")||this.settings.extraHeight;this.ticking=false;if(this.image){this.$scrollingElement=e("<img/>",{src:this.image})}else{throw new Error("You need to provide either a data-img attr or an image option")}if(this.settings.touch===true){this.$scrollingElement.css({maxWidth:"100%"}).prependTo(this.$imageHolder)}else if(this.settings.parallax===true){this.$scrollerHolder=e("<div/>",{html:this.$imageHolder.html()}).css({top:0,visibility:"hidden",position:"fixed",overflow:"hidden"}).addClass(this.settings.holderClass).prependTo(this.settings.container);this.$imageHolder.css("visibility","hidden").empty();this.$scrollingElement.css({position:"absolute",visibility:"hidden",maxWidth:"none"}).prependTo(this.$scrollerHolder)}else{this.$scrollerHolder=this.$imageHolder.css({overflow:"hidden"});this.$scrollingElement.css({position:"relative",overflow:"hidden"}).prependTo(this.$imageHolder)}if(this.settings.touch===false){this._adjustImgHolderHeights();if(this.settings.parallax===true){this._updatePositions()}else{this._updateFallbackPositions()}this._bindEvents()}},_adjustImgHolderHeights:function(){var e=h.height(),t=h.width()-this.settings.container.offset().left,n=this.coverRatio*e,r,i,s,o,u,a,f,l,c,p,d,v;n=(this.settings.holderMinHeight<n?Math.floor(n):this.settings.holderMinHeight)+this.extraHeight;c=Math.floor(e-(e-n)*this.settings.speed);f=Math.round(this.mediaWidth*(c/this.mediaHeight));if(f>=t){l=c}else{f=t;l=Math.round(this.mediaHeight*(f/this.mediaWidth))}p=(c-n)/2;d=(l-c)/2;v=(e-n)/2;s=-(e/v*p)-d;o=n/v*p-d;u=o-s;a=e+n;r=-(p+d);i=Math.round((f-t)*-.5);this.$scrollingElement.css({height:l,width:f});this.$imageHolder.height(n);this.$scrollerHolder.css({height:n,width:f});this.scrollingState={winHeight:e,fromY:s,imgTopPos:r,imgLeftPos:i,imgHolderHeight:n,imgScrollingDistance:u,travelDistance:a,holderDistanceFromTop:this.$imageHolder.offset().top-h.scrollTop()}},_bindEvents:function(){var e=this;h.on("resize",function(t){e._adjustImgHolderHeights();if(e.settings.parallax===true){e._requestTick()}else{e._updateFallbackPositions()}});if(this.settings.parallax===true){h.on("scroll",function(t){e.scrollingState.holderDistanceFromTop=e.$imageHolder.offset().top-h.scrollTop();e._requestTick()})}},_requestTick:function(){var e=this;if(!this.ticking){this.ticking=true;requestAnimationFrame(function(){e._updatePositions()})}},_updatePositions:function(){if(this.scrollingState.holderDistanceFromTop<=this.scrollingState.winHeight&&this.scrollingState.holderDistanceFromTop>=-this.scrollingState.imgHolderHeight){var e=this.scrollingState.holderDistanceFromTop+this.scrollingState.imgHolderHeight,t=e/this.scrollingState.travelDistance,n=Math.round(this.scrollingState.fromY+this.scrollingState.imgScrollingDistance*(1-t)),r=this.settings.container.offset().left;this.$scrollerHolder.css(this._getCSSObject({transform:v,left:r,x:Math.ceil(this.scrollingState.imgLeftPos)+(d===""&&r>0?r:0),y:Math.round(this.scrollingState.holderDistanceFromTop),visibility:"visible"}));this.$scrollingElement.css(this._getCSSObject({transform:v,x:0,y:n,visibility:"visible"}))}else{this.$scrollerHolder.css({visibility:"hidden"});this.$scrollingElement.css({visibility:"hidden"})}this.ticking=false},_updateFallbackPositions:function(){this.$scrollerHolder.css({width:"100%"});this.$scrollingElement.css({top:this.scrollingState.imgTopPos,left:this.scrollingState.imgLeftPos})},_getCSSObject:function(e){if(d==="csstransforms3d"){e.transform="translate3d("+e.x+"px, "+e.y+"px, 0)"}else if(d==="csstransforms"){e.transform="translate("+e.x+"px, "+e.y+"px)"}else{e.top=e.y;e.left=e.x}return e}}};t.defaults=n;e.fn.imageScroll=function(e){return this.each(function(){(new t(this,e)).init()})};return t});
(function(c,n){var k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(l){function m(){var b=c(h),a=c(g);d&&(g.length?d.reject(e,b,a):d.resolve(e));c.isFunction(l)&&l.call(f,e,b,a)}function i(b,a){b.src===k||-1!==c.inArray(b,j)||(j.push(b),a?g.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(h),c(g)]),e.length===j.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var f=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=f.find("img").add(f.filter("img")),j=[],h=[],g=[];e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){i(b.target,"error"===b.type)}).each(function(b,a){var e=a.src,d=c.data(a,"imagesLoaded");if(d&&d.src===e)i(a,d.isBroken);else if(a.complete&&a.naturalWidth!==n)i(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=k,a.src=e}):m();return d?d.promise(f):f}})(jQuery);
/*
	--------------------------------
	Infinite Scroll
	--------------------------------
	+ https://github.com/paulirish/infinite-scroll
	+ version 2.0b2.120519
	+ Copyright 2011/12 Paul Irish & Luke Shumard
	+ Licensed under the MIT license
	
	+ Documentation: http://infinite-scroll.com/
	
*/


(function(h,d,e){d.infinitescroll=function(a,c,b){this.element=d(b);this._create(a,c)||(this.failed=!0)};d.infinitescroll.defaults={loading:{finished:e,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:e},state:{isDuringAjax:!1,isInvalidPage:!1,isDestroyed:!1,isDone:!1,isPaused:!1,currPage:1},callback:e,debug:!1,behavior:e,binder:d(h),
nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:!1,pathParse:e,dataType:"html",appendCallback:!0,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:e,path:e};d.infinitescroll.prototype={_binding:function(a){var c=this,b=c.options;b.v="2.0b2.111027";if(b.behavior&&this["_binding_"+b.behavior]!==e)this["_binding_"+b.behavior].call(this);else{if("bind"!==a&&"unbind"!==a)return this._debug("Binding value  "+
a+" not valid"),!1;if("unbind"==a)this.options.binder.unbind("smartscroll.infscr."+c.options.infid);else this.options.binder[a]("smartscroll.infscr."+c.options.infid,function(){c.scroll()});this._debug("Binding",a)}},_create:function(a,c){var b=d.extend(!0,{},d.infinitescroll.defaults,a);if(!this._validate(a))return!1;this.options=b;var g=d(b.nextSelector).attr("href");if(!g)return this._debug("Navigation selector not found"),!1;b.path=this._determinepath(g);b.contentSelector=b.contentSelector||this.element;
b.loading.selector=b.loading.selector||b.contentSelector;b.loading.msg=d('<div id="infscr-loading"><img alt="Loading..." src="'+b.loading.img+'" /><div>'+b.loading.msgText+"</div></div>");(new Image).src=b.loading.img;b.pixelsFromNavToBottom=d(document).height()-d(b.navSelector).offset().top;b.loading.start=b.loading.start||function(){d(b.navSelector).hide();b.loading.msg.appendTo(b.loading.selector).show(b.loading.speed,function(){beginAjax(b)})};b.loading.finished=b.loading.finished||function(){b.loading.msg.fadeOut("normal")};
b.callback=function(a,g){b.behavior&&a["_callback_"+b.behavior]!==e&&a["_callback_"+b.behavior].call(d(b.contentSelector)[0],g);c&&c.call(d(b.contentSelector)[0],g,b)};this._setup();return!0},_debug:function(){if(this.options&&this.options.debug)return h.console&&console.log.call(console,arguments)},_determinepath:function(a){var c=this.options;if(c.behavior&&this["_determinepath_"+c.behavior]!==e)this["_determinepath_"+c.behavior].call(this,a);else{if(c.pathParse)return this._debug("pathParse manual"),
c.pathParse(a,this.options.state.currPage+1);if(a.match(/^(.*?)\b2\b(.*?$)/))a=a.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(a.match(/^(.*?)2(.*?$)/)){if(a.match(/^(.*?page=)2(\/.*|$)/))return a=a.match(/^(.*?page=)2(\/.*|$)/).slice(1);a=a.match(/^(.*?)2(.*?$)/).slice(1)}else{if(a.match(/^(.*?page=)1(\/.*|$)/))return a=a.match(/^(.*?page=)1(\/.*|$)/).slice(1);this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
c.state.isInvalidPage=!0}this._debug("determinePath",a);return a}},_error:function(a){var c=this.options;c.behavior&&this["_error_"+c.behavior]!==e?this["_error_"+c.behavior].call(this,a):("destroy"!==a&&"end"!==a&&(a="unknown"),this._debug("Error",a),"end"==a&&this._showdonemsg(),c.state.isDone=!0,c.state.currPage=1,c.state.isPaused=!1,this._binding("unbind"))},_loadcallback:function(a,c){var b=this.options,g=this.options.callback,f=b.state.isDone?"done":!b.appendCallback?"no-append":"append";if(b.behavior&&
this["_loadcallback_"+b.behavior]!==e)this["_loadcallback_"+b.behavior].call(this,a,c);else{switch(f){case "done":return this._showdonemsg(),!1;case "no-append":"html"==b.dataType&&(c=d("<div>"+c+"</div>").find(b.itemSelector));break;case "append":var i=a.children();if(0==i.length)return this._error("end");for(f=document.createDocumentFragment();a[0].firstChild;)f.appendChild(a[0].firstChild);this._debug("contentSelector",d(b.contentSelector)[0]);d(b.contentSelector)[0].appendChild(f);c=i.get()}b.loading.finished.call(d(b.contentSelector)[0],
b);b.animate&&(f=d(h).scrollTop()+d("#infscr-loading").height()+b.extraScrollPx+"px",d("html,body").animate({scrollTop:f},800,function(){b.state.isDuringAjax=!1}));b.animate||(b.state.isDuringAjax=!1);g(this,c)}},_nearbottom:function(){var a=this.options,c=0+d(document).height()-a.binder.scrollTop()-d(h).height();if(a.behavior&&this["_nearbottom_"+a.behavior]!==e)return this["_nearbottom_"+a.behavior].call(this);this._debug("math:",c,a.pixelsFromNavToBottom);return c-a.bufferPx<a.pixelsFromNavToBottom},
_pausing:function(a){var c=this.options;if(c.behavior&&this["_pausing_"+c.behavior]!==e)this["_pausing_"+c.behavior].call(this,a);else{"pause"!==a&&("resume"!==a&&null!==a)&&this._debug("Invalid argument. Toggling pause value instead");switch(a&&("pause"==a||"resume"==a)?a:"toggle"){case "pause":c.state.isPaused=!0;break;case "resume":c.state.isPaused=!1;break;case "toggle":c.state.isPaused=!c.state.isPaused}this._debug("Paused",c.state.isPaused);return!1}},_setup:function(){var a=this.options;if(a.behavior&&
this["_setup_"+a.behavior]!==e)this["_setup_"+a.behavior].call(this);else return this._binding("bind"),!1},_showdonemsg:function(){var a=this.options;a.behavior&&this["_showdonemsg_"+a.behavior]!==e?this["_showdonemsg_"+a.behavior].call(this):(a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({opacity:1},2E3,function(){d(this).parent().fadeOut("normal")}),a.errorCallback.call(d(a.contentSelector)[0],"done"))},_validate:function(a){for(var c in a)if(c.indexOf&&
-1<c.indexOf("Selector")&&0===d(a[c]).length)return this._debug("Your "+c+" found no elements."),!1;return!0},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=!0;return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},retrieve:function(a){var c=this,b=c.options,g=b.path,f,i,j,h,a=a||null;beginAjax=function(a){a.state.currPage++;c._debug("heading into ajax",g);f=d(a.contentSelector).is("table")?d("<tbody/>"):
d("<div/>");i=g.join(a.state.currPage);j="html"==a.dataType||"json"==a.dataType?a.dataType:"html+callback";a.appendCallback&&"html"==a.dataType&&(j+="+callback");switch(j){case "html+callback":c._debug("Using HTML via .load() method");f.load(i+" "+a.itemSelector,null,function(a){c._loadcallback(f,a)});break;case "html":c._debug("Using "+j.toUpperCase()+" via $.ajax() method");d.ajax({url:i,dataType:a.dataType,complete:function(a,b){(h="undefined"!==typeof a.isResolved?a.isResolved():"success"===b||
"notmodified"===b)?c._loadcallback(f,a.responseText):c._error("end")}});break;case "json":c._debug("Using "+j.toUpperCase()+" via $.ajax() method"),d.ajax({dataType:"json",type:"GET",url:i,success:function(b,d,g){h="undefined"!==typeof g.isResolved?g.isResolved():"success"===d||"notmodified"===d;a.appendCallback?a.template!=e?(b=a.template(b),f.append(b),h?c._loadcallback(f,b):c._error("end")):(c._debug("template must be defined."),c._error("end")):h?c._loadcallback(f,b):c._error("end")},error:function(){c._debug("JSON ajax request failed.");
c._error("end")}})}};if(b.behavior&&this["retrieve_"+b.behavior]!==e)this["retrieve_"+b.behavior].call(this,a);else{if(b.state.isDestroyed)return this._debug("Instance is destroyed"),!1;b.state.isDuringAjax=!0;b.loading.start.call(d(b.contentSelector)[0],b)}},scroll:function(){var a=this.options,c=a.state;a.behavior&&this["scroll_"+a.behavior]!==e?this["scroll_"+a.behavior].call(this):!c.isDuringAjax&&!c.isInvalidPage&&!c.isDone&&!c.isDestroyed&&!c.isPaused&&this._nearbottom()&&this.retrieve()},toggle:function(){this._pausing()},
unbind:function(){this._binding("unbind")},update:function(a){d.isPlainObject(a)&&(this.options=d.extend(!0,this.options,a))}};d.fn.infinitescroll=function(a,c){switch(typeof a){case "string":var b=Array.prototype.slice.call(arguments,1);this.each(function(){var c=d.data(this,"infinitescroll");if(!c||!d.isFunction(c[a])||"_"===a.charAt(0))return!1;c[a].apply(c,b)});break;case "object":this.each(function(){var b=d.data(this,"infinitescroll");b?b.update(a):(b=new d.infinitescroll(a,c,this),b.failed||
d.data(this,"infinitescroll",b))})}return this};var k=d.event,l;k.special.smartscroll={setup:function(){d(this).bind("scroll",k.special.smartscroll.handler)},teardown:function(){d(this).unbind("scroll",k.special.smartscroll.handler)},handler:function(a,c){var b=this,e=arguments;a.type="smartscroll";l&&clearTimeout(l);l=setTimeout(function(){d.event.handle.apply(b,e)},"execAsap"===c?0:100)}};d.fn.smartscroll=function(a){return a?this.bind("smartscroll",a):this.trigger("smartscroll",["execAsap"])}})(window,
jQuery);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */

(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/*!
 * PerfectMasonry extension for Isotope
 *
 * Does similar things as the Isotopes "masonry" layoutmode, except that this one will actually go back and plug the holes
 * left by bigger elements, thus making a perfect brick wall. Profit!
 *
 * Usage:
 * 	$('#grid').isotope({
 * 		layoutMode: 'perfectMasonry',
 *		perfectMasonry: {
 *			layout: 'horizontal',		// Set layout as vertical/horizontal (default: vertical)
 *			columnWidth: 200,			// Set/Prefer columns to x wide (default: width of first tile)
 *			rowHeight: 200,				// Set/Prefer rows to y high (default: height of first tile)
 *
 *			liquid: true,				// Set layout as liquid (default: false)
 *			cols: 3,					// Force to have x columns (default: null)
 *			rows: 3,					// Force to have y rows (default: null)
 *			minCols: 3,					// Set min col count (default: 1)
 *			minRows: 3,					// Set min row count (default: 1)
 *			maxCols: 5,					// Set max col count (default: 9999)
 *			maxRows: 4					// Set max row count (default: 9999)
 * 		}
 * 	});
 *
 *
 * @author Mikko Tikkanen, Zonear Ltd. <contact@zonear.com>
 */

;(function($, undefined) {
	var version = '1.2.1';
	var isotope = null,
			$context = null,
			$container = null,
			isFirstRun = true;

	$.extend($.Isotope.prototype, {

		/**
		 * Reset layout properties
		 *
		 * Runs before any layout change
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryReset: function() {
			var isVertical = this.options.perfectMasonry.layout != 'horizontal',
					isLiquid = this.options.perfectMasonry.liquid == true;

			// Do things on a first run
			if(isFirstRun) {
				isFirstRun = false;
				isotope = this;
				$context = $(this.element.context);
				$container = $context.parent();

				// Make sure we have min/maxCols & rows
				this.options.perfectMasonry.minCols = this.options.perfectMasonry.minCols || 1;
				this.options.perfectMasonry.minRows = this.options.perfectMasonry.minRows || 1;
				this.options.perfectMasonry.maxCols = this.options.perfectMasonry.maxCols || 9999;
				this.options.perfectMasonry.maxRows = this.options.perfectMasonry.maxRows || 9999;
			}

			// For liquid layout, replace default resize handler with forced relayout (outside firstRun as Isotope grid can be destroyed and created on the fly)
			if(isLiquid && $.data(window, 'events') && $._data(window, 'events').smartresize) {
				$(window).off('smartresize.isotope');
				$(window).on('resize.isotope.perfectmasonry', function() {
					if(!$context.hasClass('isotope')) { return; }
					$context.isotope('reLayout');
				});
			}

			// Setup layout properties ---------------------------------------------------
			var properties = this.perfectMasonry = {};

			// Fill properties with columnWidth and rowHeight (true argument)
			this._getSegments();
			this._getSegments(true);

			// ...and with cols & rows
			this._perfectMasonryGetSegments();

			// Handle liquid layout (cols, rows & sizes must be calculated on the fly)
			if(isLiquid) {
				var width = $container.width(),
						height = $container.height();

				// Make sure we have colwidth & rowheight (get it from the calculated )
				this.options.perfectMasonry.columnWidth = this.options.perfectMasonry.columnWidth || properties.columnWidth;
				this.options.perfectMasonry.rowHeight = this.options.perfectMasonry.rowHeight || properties.rowHeight;

				// Figure out how many cols & rows either have been set or can be fit into the container (also make sure we're still between min/max)
				properties.cols = this.options.perfectMasonry.cols || Math.floor(width / this.options.perfectMasonry.columnWidth);
				properties.rows = this.options.perfectMasonry.rows || Math.floor(height / this.options.perfectMasonry.rowHeight);
				properties.cols = Math.min(Math.max(properties.cols, this.options.perfectMasonry.minCols), this.options.perfectMasonry.maxCols);
				properties.rows = Math.min(Math.max(properties.rows, this.options.perfectMasonry.minRows), this.options.perfectMasonry.maxRows);

				// Recalculate accurate width/height so that the whole available space is used
				var diff = (isVertical ? properties.columnWidth / (width / properties.cols) : properties.rowHeight / (height / properties.rows));
				properties.columnWidth = Math.floor(properties.columnWidth / diff);
				properties.rowHeight = Math.floor(properties.rowHeight / diff);
			}

			// Create top row of the grid
			properties.grid = new Array(this.perfectMasonry.cols);

			// Set container dimensions to 0
			properties.containerHeight = 0;
			properties.containerWidth = 0;
		},



		/**
		 * Create layout
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryLayout: function($elems) {
			var instance = this,
					properties = this.perfectMasonry,
					isVertical = instance.options.perfectMasonry.layout != 'horizontal',
					isLiquid = instance.options.perfectMasonry.liquid == true;

			// Create first set of the grid
			properties.grid = new Array(properties[(isVertical ? 'cols' : 'rows')]);

			// Loop each element
			$elems.each(function() {
				var $this  = $(this);

				// Calculate col & row spans (with liquid layouts, store desired width as element data)
				var colSpan = (isLiquid ? $this.data('colSpan') : Math.ceil($this.outerWidth() / (properties.columnWidth + 1))),
						rowSpan = (isLiquid ? $this.data('rowSpan') : Math.ceil($this.outerHeight() / (properties.rowHeight + 1)));

				// For the first run with liquid layout, calculate sizes
				if(!colSpan) {
					colSpan = Math.ceil($this.outerWidth(true) / (properties.columnWidth + 1));
					rowSpan = Math.ceil($this.outerHeight(true) / (properties.rowHeight + 1));
					$this.data('colSpan', colSpan);
					$this.data('rowSpan', rowSpan);
				}


				/* Do the layout
				 * -------------------------------------------------------------------------------- */

				// Set spans
				var aSpan = (isVertical ? colSpan : rowSpan);
				var bSpan = (isVertical ? rowSpan : colSpan);

				// Bigger tiles can't fit into the last primary (though keep it still at least as 1)
				var max = Math.max((isVertical ? properties.cols - colSpan : properties.rows - rowSpan) + 1, 1);

				// Loop through/create primaries (set hard limit of 10.000 to prevent endless loop)
				var a = -1, x = 0, y = 0;
				while(++a < 10000) {
					properties.grid[a] = properties.grid[a] || [];

					// Go through the secondaries in the primary, set secondary and tile
					for (var b = 0; b < max; b++) {
						var tile = properties.grid[a][b];

						// If the tile is not free, move to the next one immediately
						if(tile) { continue; }

						// Tiles spanning to multiple rows/columns - Check if it'll fit
						var doesFit = true;
						if(colSpan > 1 || rowSpan > 1) {
							for (var i = 0; i < aSpan; i++) {
								for (var j = 0; j < bSpan; j++) {
									properties.grid[a+j] = properties.grid[a+j] || [];
									if(properties.grid[a+j][b+i]) { doesFit = false; break; }
								}

								// If it doesn't fit, don't waste our time looping
								if(!doesFit) { break; }
							}
						}
						if(!doesFit) { continue }


						// Set all the cells as occupied
						for (var i = 0; i < aSpan; i++) {
							for (var j = 0; j < bSpan; j++) {
								properties.grid[a+j][b+i] = true;
							}
						}

						// Set x & y values
						var x = a, y = b;
						if(isVertical) { var x = b, y = a; }

						// Update container dimensions
						properties.containerWidth = Math.max(properties.containerWidth, (x + aSpan) * properties.columnWidth);
						properties.containerHeight = Math.max(properties.containerHeight, (y + bSpan) * properties.rowHeight);

						// In case of liquid layout, set element size full width/height
						if(instance.options.perfectMasonry.liquid == true) {
							$this.css({
								width: properties.columnWidth * colSpan,
								height: properties.rowHeight * rowSpan
							});
						}

						// Set the element location and GTFO
						instance._pushPosition($this, x*properties.columnWidth, y*properties.rowHeight);
						return;
					}
				}


				// If we got all the way down to here, the element doesn't fit - Hide it
				instance._pushPosition($this, -9999, -9999);
			});

			// Set row & column count to container
			var rows = (isVertical ? properties.grid.length : properties.grid[0].length),
					cols = (isVertical ? properties.grid[0].length : properties.grid.length);
			$(this.element.context).attr('data-isotope-rows', rows).attr('data-isotope-cols', cols);
		},



		/**
		 * Get container size
		 *
		 * For resizing the container
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryGetContainerSize: function() {
			return {
				width: this.perfectMasonry.containerWidth,
				height: this.perfectMasonry.containerHeight
			};
		},



		/**
		 * Resize changed
		 *
		 * Figure out if layout changed
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryResizeChanged: function() {
			var properties = this.perfectMasonry;

			// Store old values and calculate new numbers
			var oldCols = properties.cols,
					oldRows = properties.rows;
			this._perfectMasonryGetSegments();

			// If new count was different, force layout change
			if(this.options.perfectMasonry.layout == 'horizontal' && oldRows !== properties.rows) { return true; }
			if(oldCols !== properties.cols) { return true; }

			return false;
		},




		/**
		 * Private
		 * Do segment calculations by hand
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryGetSegments: function() {
			var properties = this.perfectMasonry;
			var parent = this.options.perfectMasonry.parent || this.element.parent();

			// Calculate columns
			var parentWidth = parent.width();
			properties.cols = Math.floor(parentWidth / properties.columnWidth) || 1;

			// Calculate rows
			var parentHeight = parent.height();
			properties.rows = Math.floor(parentHeight / properties.rowHeight) || 1;
		}
	});


})(jQuery);
/*!
	jQuery.kinetic v1.5
	Dave Taylor http://the-taylors.org/jquery.kinetic

	The MIT License (MIT)
	Copyright (c) <2011> <Dave Taylor http://the-taylors.org>
*/
/*global define,require */

(function ($) {
	'use strict';

	var DEFAULT_SETTINGS = { decelerate: true
							  , triggerHardware: false
							  , y: true
							  , x: true
							  , slowdown: 0.9
							  , maxvelocity: 40
							  , throttleFPS: 60
							  , movingClass: {
							  	up: 'kinetic-moving-up'
								, down: 'kinetic-moving-down'
								, left: 'kinetic-moving-left'
								, right: 'kinetic-moving-right'
							  }
							  , deceleratingClass: {
							  	up: 'kinetic-decelerating-up'
								, down: 'kinetic-decelerating-down'
								, left: 'kinetic-decelerating-left'
								, right: 'kinetic-decelerating-right'
							  }
	},
		SETTINGS_KEY = 'kinetic-settings',
		ACTIVE_CLASS = 'kinetic-active';

	/**
	* Provides requestAnimationFrame in a cross browser way.
	* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	*/
	if (!window.requestAnimationFrame) {

		window.requestAnimationFrame = (function () {

			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
				window.setTimeout(callback, 1000 / 60);
			};

		} ());

	}

	// add touch checker to jQuery.support
	$.support = $.support || {};
	$.extend($.support, {
		touch: "ontouchend" in document
	});
	var selectStart = function () { return false; };

	var decelerateVelocity = function (velocity, slowdown) {
		return Math.floor(Math.abs(velocity)) === 0 ? 0 // is velocity less than 1?
			   : velocity * slowdown; // reduce slowdown
	};

	var capVelocity = function (velocity, max) {
		var newVelocity = velocity;
		if (velocity > 0) {
			if (velocity > max) {
				newVelocity = max;
			}
		} else {
			if (velocity < (0 - max)) {
				newVelocity = (0 - max);
			}
		}
		return newVelocity;
	};

	var setMoveClasses = function (settings, classes) {
		this.removeClass(settings.movingClass.up)
			.removeClass(settings.movingClass.down)
			.removeClass(settings.movingClass.left)
			.removeClass(settings.movingClass.right)
			.removeClass(settings.deceleratingClass.up)
			.removeClass(settings.deceleratingClass.down)
			.removeClass(settings.deceleratingClass.left)
			.removeClass(settings.deceleratingClass.right);

		if (settings.velocity > 0) {
			this.addClass(classes.right);
		}
		if (settings.velocity < 0) {
			this.addClass(classes.left);
		}
		if (settings.velocityY > 0) {
			this.addClass(classes.down);
		}
		if (settings.velocityY < 0) {
			this.addClass(classes.up);
		}

	};

	var stop = function ($scroller, settings) {
		if (typeof settings.stopped === 'function') {
			settings.stopped.call($scroller, settings);
		}
	};

	/** do the actual kinetic movement */
	var move = function ($scroller, settings) {
		var scroller = $scroller[0];
		// set scrollLeft
		if (settings.x && scroller.scrollWidth > 0) {
			scroller.scrollLeft = settings.scrollLeft = scroller.scrollLeft + settings.velocity;
			if (Math.abs(settings.velocity) > 0) {
				settings.velocity = settings.decelerate ?
					decelerateVelocity(settings.velocity, settings.slowdown) : settings.velocity;
			}
		} else {
			settings.velocity = 0;
		}

		// set scrollTop
		if (settings.y && scroller.scrollHeight > 0) {
			scroller.scrollTop = settings.scrollTop = scroller.scrollTop + settings.velocityY;
			if (Math.abs(settings.velocityY) > 0) {
				settings.velocityY = settings.decelerate ?
					decelerateVelocity(settings.velocityY, settings.slowdown) : settings.velocityY;
			}
		} else {
			settings.velocityY = 0;
		}

		setMoveClasses.call($scroller, settings, settings.deceleratingClass);

		if (typeof settings.moved === 'function') {
			settings.moved.call($scroller, settings);
		}

		if (Math.abs(settings.velocity) > 0 || Math.abs(settings.velocityY) > 0) {
			// tick for next movement
			window.requestAnimationFrame(function () { move($scroller, settings); });
		} else {
			stop($scroller, settings);
		}
	};

	var callOption = function (method, options) {
		var methodFn = $.kinetic.callMethods[method]
		, args = Array.prototype.slice.call(arguments)
		;
		if (methodFn) {
			this.each(function () {
				var opts = args.slice(1), settings = $(this).data(SETTINGS_KEY);
				opts.unshift(settings);
				methodFn.apply(this, opts);
			});
		}
	};

	var attachListeners = function ($this, settings) {
		var element = $this[0];
		if ($.support.touch) {
			element.addEventListener('touchstart', settings.events.touchStart, false);
			element.addEventListener('touchend', settings.events.inputEnd, false);
			element.addEventListener('touchmove', settings.events.touchMove, false);
		} else {
			$this
			.mousedown(settings.events.inputDown)
			.mouseup(settings.events.inputEnd)
			.mousemove(settings.events.inputMove);
		}
		$this.click(settings.events.inputClick)
		.bind("selectstart", selectStart); // prevent selection when dragging
		$this.bind('dragstart', settings.events.dragStart);
	};
	var detachListeners = function ($this, settings) {
		var element = $this[0];
		if ($.support.touch) {
			element.removeEventListener('touchstart', settings.events.touchStart, false);
			element.removeEventListener('touchend', settings.events.inputEnd, false);
			element.removeEventListener('touchmove', settings.events.touchMove, false);
		} else {
			$this
			.unbind('mousedown', settings.events.inputDown)
			.unbind('mouseup', settings.events.inputEnd)
			.unbind('mousemove', settings.events.inputMove);
		}
		$this.unbind('click', settings.events.inputClick)
		.unbind("selectstart", selectStart); // prevent selection when dragging
		$this.unbind('dragstart', settings.events.dragStart);
	};

	var initElements = function (options) {
		this
		.addClass(ACTIVE_CLASS)
		.each(function () {

			var settings = $.extend({}, DEFAULT_SETTINGS, options);

			var self = this
			, $this = $(this)
			, xpos
			, prevXPos = false
			, ypos
			, prevYPos = false
			, mouseDown = false
			, scrollLeft
			, scrollTop
			, throttleTimeout = 1000 / settings.throttleFPS
			, lastMove
			, elementFocused
			;

			settings.velocity = 0;
			settings.velocityY = 0;

			// make sure we reset everything when mouse up
			var resetMouse = function () {
				xpos = false;
				ypos = false;
				mouseDown = false;
			};
			$(document).mouseup(resetMouse).click(resetMouse);

			var calculateVelocities = function () {
				settings.velocity = capVelocity(prevXPos - xpos, settings.maxvelocity);
				settings.velocityY = capVelocity(prevYPos - ypos, settings.maxvelocity);
			};
			var useTarget = function (target) {
				if ($.isFunction(settings.filterTarget)) {
					return settings.filterTarget.call(self, target) !== false;
				}
				return true;
			};
			var start = function (clientX, clientY) {
				mouseDown = true;
				settings.velocity = prevXPos = 0;
				settings.velocityY = prevYPos = 0;
				xpos = clientX;
				ypos = clientY;
			};
			var end = function () {
				if (xpos && prevXPos && settings.decelerate === false) {
					settings.decelerate = true;
					calculateVelocities();
					xpos = prevXPos = mouseDown = false;
					move($this, settings);
				}
			};
			var inputmove = function (clientX, clientY) {
				if (!lastMove || new Date() > new Date(lastMove.getTime() + throttleTimeout)) {
					lastMove = new Date();

					if (mouseDown && (xpos || ypos)) {
						if (elementFocused) {
							$(elementFocused).blur();
							elementFocused = null;
							$this.focus();
						}
						settings.decelerate = false;
						settings.velocity = settings.velocityY = 0;
						$this[0].scrollLeft = settings.scrollLeft = settings.x ? $this[0].scrollLeft - (clientX - xpos) : $this[0].scrollLeft;
						$this[0].scrollTop = settings.scrollTop = settings.y ? $this[0].scrollTop - (clientY - ypos) : $this[0].scrollTop;
						prevXPos = xpos;
						prevYPos = ypos;
						xpos = clientX;
						ypos = clientY;

						calculateVelocities();
						setMoveClasses.call($this, settings, settings.movingClass);

						if (typeof settings.moved === 'function') {
							settings.moved.call($this, settings);
						}
					}
				}
			};

			// Events
			settings.events = {
				touchStart: function (e) {
					if (useTarget(e.target)) {
						start(e.touches[0].clientX, e.touches[0].clientY);
						e.stopPropagation();
					}
				},
				touchMove: function (e) {
					if (mouseDown) {
						inputmove(e.touches[0].clientX, e.touches[0].clientY);
						if (e.preventDefault) { e.preventDefault(); }
					}
				},
				inputDown: function (e) {
					if (useTarget(e.target)) {
						start(e.clientX, e.clientY);
						elementFocused = e.target;
						if (e.target.nodeName === 'IMG') {
							e.preventDefault();
						}
						e.stopPropagation();
					}
				},
				inputEnd: function (e) {
					end();
					elementFocused = null;
					if (e.preventDefault) { e.preventDefault(); }
				},
				inputMove: function (e) {
					if (mouseDown) {
						inputmove(e.clientX, e.clientY);
						if (e.preventDefault) { e.preventDefault(); }
					}
				},
				inputClick: function (e) {
					if (Math.abs(settings.velocity) > 0) {
						e.preventDefault();
						return false;
					}
				},
				// prevent drag and drop images in ie
				dragStart: function (e) {
					if (elementFocused) {
						return false;
					}
				}
			};

			attachListeners($this, settings);
			$this.data(SETTINGS_KEY, settings).css("cursor", "move");

			if (settings.triggerHardware) {
				$this.css('-webkit-transform', 'translate3d(0,0,0)');
			}
		});
	};

	$.kinetic = {
		settingsKey: SETTINGS_KEY,
		callMethods: {
			start: function (settings, options) {
				var $this = $(this);
				settings = $.extend(settings, options);
				if (settings) {
					settings.decelerate = false;
					move($this, settings);
				}
			},
			end: function (settings, options) {
				var $this = $(this);
				if (settings) {
					settings.decelerate = true;
				}
			},
			stop: function (settings, options) {
				settings.velocity = 0;
				settings.velocityY = 0;
				settings.decelerate = true;
			},
			detach: function (settings, options) {
				var $this = $(this);
				detachListeners($this, settings);
				$this
				.removeClass(ACTIVE_CLASS)
				.css("cursor", "");
			},
			attach: function (settings, options) {
				var $this = $(this);
				attachListeners($this, settings);
				$this
				.addClass(ACTIVE_CLASS)
				.css("cursor", "move");
			}
		}
	};
	$.fn.kinetic = function (options) {
		if (typeof options === 'string') {
			callOption.apply(this, arguments);
		} else {
			initElements.call(this, options);
		}
		return this;
	};

} (window.jQuery || window.Zepto));
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery)
;
/*
* Placeholder plugin for jQuery
* ---
* Copyright 2010, Daniel Stocks (http://webcloud.se)
* Released under the MIT, BSD, and GPL Licenses.
*/


(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);
/*
 ### jQuery Star Rating Plugin v3.14 - 2012-01-26 ###
 * Home: http://www.fyneworks.com/jquery/star-rating/
 * Code: http://code.google.com/p/jquery-star-rating-plugin/
 *
	* Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';5(1W.1z)(7($){5($.21.1Y)1X{1u.1Q("1P",M,t)}1O(e){};$.n.3=7(i){5(4.S==0)l 4;5(H Q[0]==\'1s\'){5(4.S>1){8 j=Q;l 4.11(7(){$.n.3.G($(4),j)})};$.n.3[Q[0]].G(4,$.20(Q).1T(1)||[]);l 4};8 i=$.U({},$.n.3.1k,i||{});$.n.3.O++;4.1K(\'.k-3-1j\').p(\'k-3-1j\').11(7(){8 a,9=$(4);8 b=(4.28||\'26-3\').1g(/\\[|\\]/g,\'10\').1g(/^\\10+|\\10+$/g,\'\');8 c=$(4.1N||1u.1B);8 d=c.6(\'3\');5(!d||d.1d!=$.n.3.O)d={B:0,1d:$.n.3.O};8 e=d[b];5(e)a=e.6(\'3\');5(e&&a)a.B++;C{a=$.U({},i||{},($.1c?9.1c():($.1C?9.6():u))||{},{B:0,F:[],v:[]});a.w=d.B++;e=$(\'<23 14="k-3-1I"/>\');9.1M(e);e.p(\'3-18-19-1a\');5(9.T(\'J\')||9.12(\'J\'))a.m=t;5(9.12(\'Y\'))a.Y=t;e.1o(a.D=$(\'<L 14="3-D"><a 13="\'+a.D+\'">\'+a.1e+\'</a></L>\').1f(7(){$(4).3(\'R\');$(4).p(\'k-3-P\')}).1h(7(){$(4).3(\'x\');$(4).E(\'k-3-P\')}).1i(7(){$(4).3(\'r\')}).6(\'3\',a))};8 f=$(\'<L 14="k-3 q-\'+a.w+\'"><a 13="\'+(4.13||4.1l)+\'">\'+4.1l+\'</a></L>\');e.1o(f);5(4.17)f.T(\'17\',4.17);5(4.1m)f.p(4.1m);5(a.1Z)a.s=2;5(H a.s==\'1n\'&&a.s>0){8 g=($.n.Z?f.Z():0)||a.1p;8 h=(a.B%a.s),W=1D.1E(g/a.s);f.Z(W).1F(\'a\').1G({\'1H-1A\':\'-\'+(h*W)+\'1J\'})};5(a.m)f.p(\'k-3-1q\');C f.p(\'k-3-1L\').1f(7(){$(4).3(\'1r\');$(4).3(\'I\')}).1h(7(){$(4).3(\'x\');$(4).3(\'z\')}).1i(7(){$(4).3(\'r\')});5(4.N)a.o=f;5(4.1R=="A"){5($(4).12(\'1S\'))a.o=f};9.1t();9.1U(7(){$(4).3(\'r\')});f.6(\'3.9\',9.6(\'3.k\',f));a.F[a.F.S]=f[0];a.v[a.v.S]=9[0];a.q=d[b]=e;a.1V=c;9.6(\'3\',a);e.6(\'3\',a);f.6(\'3\',a);c.6(\'3\',d)});$(\'.3-18-19-1a\').3(\'x\').E(\'3-18-19-1a\');l 4};$.U($.n.3,{O:0,I:7(){8 a=4.6(\'3\');5(!a)l 4;5(!a.I)l 4;8 b=$(4).6(\'3.9\')||$(4.V==\'15\'?4:u);5(a.I)a.I.G(b[0],[b.K(),$(\'a\',b.6(\'3.k\'))[0]])},z:7(){8 a=4.6(\'3\');5(!a)l 4;5(!a.z)l 4;8 b=$(4).6(\'3.9\')||$(4.V==\'15\'?4:u);5(a.z)a.z.G(b[0],[b.K(),$(\'a\',b.6(\'3.k\'))[0]])},1r:7(){8 a=4.6(\'3\');5(!a)l 4;5(a.m)l;4.3(\'R\');4.1v().1w().X(\'.q-\'+a.w).p(\'k-3-P\')},R:7(){8 a=4.6(\'3\');5(!a)l 4;5(a.m)l;a.q.22().X(\'.q-\'+a.w).E(\'k-3-1x\').E(\'k-3-P\')},x:7(){8 a=4.6(\'3\');5(!a)l 4;4.3(\'R\');5(a.o){a.o.6(\'3.9\').T(\'N\',\'N\');a.o.1v().1w().X(\'.q-\'+a.w).p(\'k-3-1x\')}C $(a.v).1y(\'N\');a.D[a.m||a.Y?\'1t\':\'24\']();4.25()[a.m?\'p\':\'E\'](\'k-3-1q\')},r:7(a,b){8 c=4.6(\'3\');5(!c)l 4;5(c.m)l;c.o=u;5(H a!=\'y\'){5(H a==\'1n\')l $(c.F[a]).3(\'r\',y,b);5(H a==\'1s\')$.11(c.F,7(){5($(4).6(\'3.9\').K()==a)$(4).3(\'r\',y,b)})}C c.o=4[0].V==\'15\'?4.6(\'3.k\'):(4.27(\'.q-\'+c.w)?4:u);4.6(\'3\',c);4.3(\'x\');8 d=$(c.o?c.o.6(\'3.9\'):u);5((b||b==y)&&c.1b)c.1b.G(d[0],[d.K(),$(\'a\',c.o)[0]])},m:7(a,b){8 c=4.6(\'3\');5(!c)l 4;c.m=a||a==y?t:M;5(b)$(c.v).T("J","J");C $(c.v).1y("J");4.6(\'3\',c);4.3(\'x\')},29:7(){4.3(\'m\',t,t)},2a:7(){4.3(\'m\',M,M)}});$.n.3.1k={D:\'2b 2c\',1e:\'\',s:0,1p:16};$(7(){$(\'9[2d=2e].k\').3()})})(1z);',62,139,'|||rating|this|if|data|function|var|input|||||||||||star|return|readOnly|fn|current|addClass|rater|select|split|true|null|inputs|serial|draw|undefined|blur||count|else|cancel|removeClass|stars|apply|typeof|focus|disabled|val|div|false|checked|calls|hover|arguments|drain|length|attr|extend|tagName|spw|filter|required|width|_|each|hasClass|title|class|INPUT||id|to|be|drawn|callback|metadata|call|cancelValue|mouseover|replace|mouseout|click|applied|options|value|className|number|append|starWidth|readonly|fill|string|hide|document|prevAll|andSelf|on|removeAttr|jQuery|left|body|meta|Math|floor|find|css|margin|control|px|not|live|before|form|catch|BackgroundImageCache|execCommand|nodeName|selected|slice|change|context|window|try|msie|half|makeArray|browser|children|span|show|siblings|unnamed|is|name|disable|enable|Cancel|Rating|type|radio'.split('|'),0,{}))
;
/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */

(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],n=b(document),k=navigator.userAgent.toLowerCase(),l=b(window),g=[],o=null,p=/msie/.test(k)&&!/opera/.test(k),q=/opera/.test(k),m,r;m=p&&/msie 6./.test(k)&&"object"!==typeof window.XMLHttpRequest;r=p&&/msie 7.0/.test(k);b.modal=function(a,h){return b.modal.impl.init(a,h)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=
function(){b.modal.impl.setContainerDimensions()};b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,h){b.modal.impl.update(a,h)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,
close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,h){if(this.d.data)return!1;o=p&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,h);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id",
"simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:g[0],width:g[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||o)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});n.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});l.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||o?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:g[0],width:g[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");n.unbind("keydown.simplemodal");l.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,e){if(e){var f=e[0].style;f.position="absolute";if(2>b)f.removeExpression("height"),f.removeExpression("width"),f.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),f.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,d;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):e.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(d="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),d=-1===d.indexOf("%")?d+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(d.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
d='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');f.removeExpression("top");f.removeExpression("left");f.setExpression("top",c);f.setExpression("left",d)}}})},focus:function(a){var h=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",e=b(":input:enabled:visible:"+a,h.d.wrap);setTimeout(function(){0<e.length?e.focus():h.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?l.height():window.innerHeight;j=[n.height(),n.width()];g=[a,l.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?g[0]:g[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||r,b=this.d.origHeight?this.d.origHeight:q?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:q?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),e=this.d.data.outerHeight(!0),f=
this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||b;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,d=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<g[0]?c:g[0],d=d&&d<g[1]?d:g[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",b=b?this.o.autoResize&&b>c?c:b<i?i:b:e?e>c?c:this.o.minHeight&&"auto"!==i&&e<i?i:e:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>d?d:a<c?c:a:f?
f>d?d:this.o.minWidth&&"auto"!==c&&f<c?c:f:c;this.d.container.css({height:b,width:a});this.d.wrap.css({overflow:e>b||f>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=g[0]/2-this.d.container.outerHeight(!0)/2;b=g[1]/2-this.d.container.outerWidth(!0)/2;var e="fixed"!==this.d.container.css("position")?l.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=e+(this.o.position[0]||a),b=this.o.position[1]||b):
a=e+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});
(function($){$.widget("thomaskahn.smoothDivScroll",{options:{scrollingHotSpotLeftClass:"scrollingHotSpotLeft",scrollingHotSpotRightClass:"scrollingHotSpotRight",scrollableAreaClass:"scrollableArea",scrollWrapperClass:"scrollWrapper",hiddenOnStart:false,getContentOnLoad:{},countOnlyClass:"",startAtElementId:"",hotSpotScrolling:true,hotSpotScrollingStep:15,hotSpotScrollingInterval:10,hotSpotMouseDownSpeedBooster:3,visibleHotSpotBackgrounds:"hover",hotSpotsVisibleTime:5000,easingAfterHotSpotScrolling:true,easingAfterHotSpotScrollingDistance:10,easingAfterHotSpotScrollingDuration:300,easingAfterHotSpotScrollingFunction:"easeOutQuart",mousewheelScrolling:"",mousewheelScrollingStep:70,easingAfterMouseWheelScrolling:true,easingAfterMouseWheelScrollingDuration:300,easingAfterMouseWheelScrollingFunction:"easeOutQuart",manualContinuousScrolling:false,autoScrollingMode:"",autoScrollingDirection:"endlessLoopRight",autoScrollingStep:1,autoScrollingInterval:10,touchScrolling:false,scrollToAnimationDuration:1000,scrollToEasingFunction:"easeOutQuart"},_create:function(){var self=this,o=this.options,el=this.element;el.data("scrollWrapper",el.find("."+o.scrollWrapperClass));el.data("scrollingHotSpotRight",el.find("."+o.scrollingHotSpotRightClass));el.data("scrollingHotSpotLeft",el.find("."+o.scrollingHotSpotLeftClass));el.data("scrollableArea",el.find("."+o.scrollableAreaClass));if(el.data("scrollingHotSpotRight").length>0){el.data("scrollingHotSpotRight").detach()}if(el.data("scrollingHotSpotLeft").length>0){el.data("scrollingHotSpotLeft").detach()}if(el.data("scrollableArea").length===0&&el.data("scrollWrapper").length===0){el.wrapInner("<div class='"+o.scrollableAreaClass+"'>").wrapInner("<div class='"+o.scrollWrapperClass+"'>");el.data("scrollWrapper",el.find("."+o.scrollWrapperClass));el.data("scrollableArea",el.find("."+o.scrollableAreaClass))}else if(el.data("scrollWrapper").length===0){el.wrapInner("<div class='"+o.scrollWrapperClass+"'>");el.data("scrollWrapper",el.find("."+o.scrollWrapperClass))}else if(el.data("scrollableArea").length===0){el.data("scrollWrapper").wrapInner("<div class='"+o.scrollableAreaClass+"'>");el.data("scrollableArea",el.find("."+o.scrollableAreaClass))}if(el.data("scrollingHotSpotRight").length===0){el.prepend("<div class='"+o.scrollingHotSpotRightClass+"'></div>");el.data("scrollingHotSpotRight",el.find("."+o.scrollingHotSpotRightClass))}else{el.prepend(el.data("scrollingHotSpotRight"))}if(el.data("scrollingHotSpotLeft").length===0){el.prepend("<div class='"+o.scrollingHotSpotLeftClass+"'></div>");el.data("scrollingHotSpotLeft",el.find("."+o.scrollingHotSpotLeftClass))}else{el.prepend(el.data("scrollingHotSpotLeft"))}el.data("speedBooster",1);el.data("scrollXPos",0);el.data("hotSpotWidth",el.data("scrollingHotSpotLeft").innerWidth());el.data("scrollableAreaWidth",0);el.data("startingPosition",0);el.data("rightScrollingInterval",null);el.data("leftScrollingInterval",null);el.data("autoScrollingInterval",null);el.data("hideHotSpotBackgroundsInterval",null);el.data("previousScrollLeft",0);el.data("pingPongDirection","right");el.data("getNextElementWidth",true);el.data("swapAt",null);el.data("startAtElementHasNotPassed",true);el.data("swappedElement",null);el.data("originalElements",el.data("scrollableArea").children(o.countOnlyClass));el.data("visible",true);el.data("enabled",true);el.data("scrollableAreaHeight",el.data("scrollableArea").height());el.data("scrollerOffset",el.offset());if(o.touchScrolling&&el.data("enabled")){el.data("scrollWrapper").kinetic({y:false,moved:function(settings){if(o.manualContinuousScrolling){if(el.data("scrollWrapper").scrollLeft()<=0){self._checkContinuousSwapLeft()}else{self._checkContinuousSwapRight()}}},stopped:function(settings){el.data("scrollWrapper").stop(true,false);self.stopAutoScrolling()}})}el.data("scrollingHotSpotRight").bind("mousemove",function(e){if(o.hotSpotScrolling){var x=e.pageX-(this.offsetLeft+el.data("scrollerOffset").left);el.data("scrollXPos",Math.round((x/el.data("hotSpotWidth"))*o.hotSpotScrollingStep));if(el.data("scrollXPos")===Infinity||el.data("scrollXPos")<1){el.data("scrollXPos",1)}}});el.data("scrollingHotSpotRight").bind("mouseover",function(){if(o.hotSpotScrolling){el.data("scrollWrapper").stop(true,false);self.stopAutoScrolling();el.data("rightScrollingInterval",setInterval(function(){if(el.data("scrollXPos")>0&&el.data("enabled")){el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+(el.data("scrollXPos")*el.data("speedBooster")));if(o.manualContinuousScrolling){self._checkContinuousSwapRight()}self._showHideHotSpots()}},o.hotSpotScrollingInterval));self._trigger("mouseOverRightHotSpot")}});el.data("scrollingHotSpotRight").bind("mouseout",function(){if(o.hotSpotScrolling){clearInterval(el.data("rightScrollingInterval"));el.data("scrollXPos",0);if(o.easingAfterHotSpotScrolling&&el.data("enabled")){el.data("scrollWrapper").animate({scrollLeft:el.data("scrollWrapper").scrollLeft()+o.easingAfterHotSpotScrollingDistance},{duration:o.easingAfterHotSpotScrollingDuration,easing:o.easingAfterHotSpotScrollingFunction})}}});el.data("scrollingHotSpotRight").bind("mousedown",function(){el.data("speedBooster",o.hotSpotMouseDownSpeedBooster)});$("body").bind("mouseup",function(){el.data("speedBooster",1)});el.data("scrollingHotSpotLeft").bind("mousemove",function(e){if(o.hotSpotScrolling){var x=((this.offsetLeft+el.data("scrollerOffset").left+el.data("hotSpotWidth"))-e.pageX);el.data("scrollXPos",Math.round((x/el.data("hotSpotWidth"))*o.hotSpotScrollingStep));if(el.data("scrollXPos")===Infinity||el.data("scrollXPos")<1){el.data("scrollXPos",1)}}});el.data("scrollingHotSpotLeft").bind("mouseover",function(){if(o.hotSpotScrolling){el.data("scrollWrapper").stop(true,false);self.stopAutoScrolling();el.data("leftScrollingInterval",setInterval(function(){if(el.data("scrollXPos")>0&&el.data("enabled")){el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()-(el.data("scrollXPos")*el.data("speedBooster")));if(o.manualContinuousScrolling){self._checkContinuousSwapLeft()}self._showHideHotSpots()}},o.hotSpotScrollingInterval));self._trigger("mouseOverLeftHotSpot")}});el.data("scrollingHotSpotLeft").bind("mouseout",function(){if(o.hotSpotScrolling){clearInterval(el.data("leftScrollingInterval"));el.data("scrollXPos",0);if(o.easingAfterHotSpotScrolling&&el.data("enabled")){el.data("scrollWrapper").animate({scrollLeft:el.data("scrollWrapper").scrollLeft()-o.easingAfterHotSpotScrollingDistance},{duration:o.easingAfterHotSpotScrollingDuration,easing:o.easingAfterHotSpotScrollingFunction})}}});el.data("scrollingHotSpotLeft").bind("mousedown",function(){el.data("speedBooster",o.hotSpotMouseDownSpeedBooster)});el.data("scrollableArea").mousewheel(function(event,delta,deltaX,deltaY){if(el.data("enabled")&&o.mousewheelScrolling.length>0){var pixels;if(o.mousewheelScrolling==="vertical"&&deltaY!==0){self.stopAutoScrolling();event.preventDefault();pixels=Math.round((o.mousewheelScrollingStep*deltaY)*-1);self.move(pixels)}else if(o.mousewheelScrolling==="horizontal"&&deltaX!==0){self.stopAutoScrolling();event.preventDefault();pixels=Math.round((o.mousewheelScrollingStep*deltaX)*-1);self.move(pixels)}else if(o.mousewheelScrolling==="allDirections"){self.stopAutoScrolling();event.preventDefault();pixels=Math.round((o.mousewheelScrollingStep*delta)*-1);self.move(pixels)}}});if(o.mousewheelScrolling){el.data("scrollingHotSpotLeft").add(el.data("scrollingHotSpotRight")).mousewheel(function(event){event.preventDefault()})}$(window).bind("resize",function(){self._showHideHotSpots();self._trigger("windowResized")});if(!(jQuery.isEmptyObject(o.getContentOnLoad))){self[o.getContentOnLoad.method](o.getContentOnLoad.content,o.getContentOnLoad.manipulationMethod,o.getContentOnLoad.addWhere,o.getContentOnLoad.filterTag)}if(o.hiddenOnStart){self.hide()}$(window).load(function(){if(!(o.hiddenOnStart)){self.recalculateScrollableArea()}if((o.autoScrollingMode.length>0)&&!(o.hiddenOnStart)){self.startAutoScrolling()}if(o.autoScrollingMode!=="always"){switch(o.visibleHotSpotBackgrounds){case"always":self.showHotSpotBackgrounds();break;case"onStart":self.showHotSpotBackgrounds();el.data("hideHotSpotBackgroundsInterval",setTimeout(function(){self.hideHotSpotBackgrounds(250)},o.hotSpotsVisibleTime));break;case"hover":el.mouseenter(function(event){if(o.hotSpotScrolling){event.stopPropagation();self.showHotSpotBackgrounds(250)}}).mouseleave(function(event){if(o.hotSpotScrolling){event.stopPropagation();self.hideHotSpotBackgrounds(250)}});break;default:break}}self._showHideHotSpots();self._trigger("setupComplete")})},_setOption:function(key,value){var self=this,o=this.options,el=this.element;o[key]=value;if(key==="hotSpotScrolling"){if(value===true){self._showHideHotSpots()}else{el.data("scrollingHotSpotLeft").hide();el.data("scrollingHotSpotRight").hide()}}else if(key==="autoScrollingStep"||key==="easingAfterHotSpotScrollingDistance"||key==="easingAfterHotSpotScrollingDuration"||key==="easingAfterMouseWheelScrollingDuration"){o[key]=parseInt(value,10)}else if(key==="autoScrollingInterval"){o[key]=parseInt(value,10);self.startAutoScrolling()}},showHotSpotBackgrounds:function(fadeSpeed){var self=this,el=this.element,o=this.option;if(fadeSpeed!==undefined){el.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible");el.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible");el.data("scrollingHotSpotLeft").add(el.data("scrollingHotSpotRight")).fadeTo(fadeSpeed,0.35)}else{el.data("scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible");el.data("scrollingHotSpotLeft").removeAttr("style");el.data("scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible");el.data("scrollingHotSpotRight").removeAttr("style")}self._showHideHotSpots()},hideHotSpotBackgrounds:function(fadeSpeed){var el=this.element,o=this.option;if(fadeSpeed!==undefined){el.data("scrollingHotSpotLeft").fadeTo(fadeSpeed,0.0,function(){el.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible")});el.data("scrollingHotSpotRight").fadeTo(fadeSpeed,0.0,function(){el.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible")})}else{el.data("scrollingHotSpotLeft").removeClass("scrollingHotSpotLeftVisible").removeAttr("style");el.data("scrollingHotSpotRight").removeClass("scrollingHotSpotRightVisible").removeAttr("style")}},_showHideHotSpots:function(){var self=this,el=this.element,o=this.options;if(!(o.hotSpotScrolling)){el.data("scrollingHotSpotLeft").hide();el.data("scrollingHotSpotRight").hide()}else{if(o.manualContinuousScrolling&&o.hotSpotScrolling&&o.autoScrollingMode!=="always"){el.data("scrollingHotSpotLeft").show();el.data("scrollingHotSpotRight").show()}else if(o.autoScrollingMode!=="always"&&o.hotSpotScrolling){if(el.data("scrollableAreaWidth")<=(el.data("scrollWrapper").innerWidth())){el.data("scrollingHotSpotLeft").hide();el.data("scrollingHotSpotRight").hide()}else if(el.data("scrollWrapper").scrollLeft()===0){el.data("scrollingHotSpotLeft").hide();el.data("scrollingHotSpotRight").show();self._trigger("scrollerLeftLimitReached");clearInterval(el.data("leftScrollingInterval"));el.data("leftScrollingInterval",null)}else if(el.data("scrollableAreaWidth")<=(el.data("scrollWrapper").innerWidth()+el.data("scrollWrapper").scrollLeft())){el.data("scrollingHotSpotLeft").show();el.data("scrollingHotSpotRight").hide();self._trigger("scrollerRightLimitReached");clearInterval(el.data("rightScrollingInterval"));el.data("rightScrollingInterval",null)}else{el.data("scrollingHotSpotLeft").show();el.data("scrollingHotSpotRight").show()}}else{el.data("scrollingHotSpotLeft").hide();el.data("scrollingHotSpotRight").hide()}}},_setElementScrollPosition:function(method,element){var el=this.element,o=this.options,tempScrollPosition=0;switch(method){case"first":el.data("scrollXPos",0);return true;case"start":if(o.startAtElementId!==""){if(el.data("scrollableArea").has("#"+o.startAtElementId)){tempScrollPosition=$("#"+o.startAtElementId).position().left;el.data("scrollXPos",tempScrollPosition);return true}}return false;case"last":el.data("scrollXPos",(el.data("scrollableAreaWidth")-el.data("scrollWrapper").innerWidth()));return true;case"number":if(!(isNaN(element))){tempScrollPosition=el.data("scrollableArea").children(o.countOnlyClass).eq(element-1).position().left;el.data("scrollXPos",tempScrollPosition);return true}return false;case"id":if(element.length>0){if(el.data("scrollableArea").has("#"+element)){tempScrollPosition=$("#"+element).position().left;el.data("scrollXPos",tempScrollPosition);return true}}return false;default:return false}},jumpToElement:function(jumpTo,element){var self=this,el=this.element;if(el.data("enabled")){if(self._setElementScrollPosition(jumpTo,element)){el.data("scrollWrapper").scrollLeft(el.data("scrollXPos"));self._showHideHotSpots();switch(jumpTo){case"first":self._trigger("jumpedToFirstElement");break;case"start":self._trigger("jumpedToStartElement");break;case"last":self._trigger("jumpedToLastElement");break;case"number":self._trigger("jumpedToElementNumber",null,{"elementNumber":element});break;case"id":self._trigger("jumpedToElementId",null,{"elementId":element});break;default:break}}}},scrollToElement:function(scrollTo,element){var self=this,el=this.element,o=this.options,autoscrollingWasRunning=false;if(el.data("enabled")){if(self._setElementScrollPosition(scrollTo,element)){if(el.data("autoScrollingInterval")!==null){self.stopAutoScrolling();autoscrollingWasRunning=true}el.data("scrollWrapper").stop(true,false);el.data("scrollWrapper").animate({scrollLeft:el.data("scrollXPos")},{duration:o.scrollToAnimationDuration,easing:o.scrollToEasingFunction,complete:function(){if(autoscrollingWasRunning){self.startAutoScrolling()}self._showHideHotSpots();switch(scrollTo){case"first":self._trigger("scrolledToFirstElement");break;case"start":self._trigger("scrolledToStartElement");break;case"last":self._trigger("scrolledToLastElement");break;case"number":self._trigger("scrolledToElementNumber",null,{"elementNumber":element});break;case"id":self._trigger("scrolledToElementId",null,{"elementId":element});break;default:break}}})}}},move:function(pixels){var self=this,el=this.element,o=this.options;el.data("scrollWrapper").stop(true,true);if((pixels<0&&el.data("scrollWrapper").scrollLeft()>0)||(pixels>0&&el.data("scrollableAreaWidth")>(el.data("scrollWrapper").innerWidth()+el.data("scrollWrapper").scrollLeft()))){if(o.easingAfterMouseWheelScrolling){el.data("scrollWrapper").animate({scrollLeft:el.data("scrollWrapper").scrollLeft()+pixels},{duration:o.easingAfterMouseWheelScrollingDuration,easing:o.easingAfterMouseWheelFunction,complete:function(){self._showHideHotSpots();if(o.manualContinuousScrolling){if(pixels>0){self._checkContinuousSwapRight()}else{self._checkContinuousSwapLeft()}}}})}else{el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+pixels);self._showHideHotSpots();if(o.manualContinuousScrolling){if(pixels>0){self._checkContinuousSwapRight()}else{self._checkContinuousSwapLeft()}}}}},getFlickrContent:function(content,manipulationMethod){var self=this,el=this.element;$.getJSON(content,function(data){var flickrImageSizes=[{size:"small square",pixels:75,letter:"_s"},{size:"thumbnail",pixels:100,letter:"_t"},{size:"small",pixels:240,letter:"_m"},{size:"medium",pixels:500,letter:""},{size:"medium 640",pixels:640,letter:"_z"},{size:"large",pixels:1024,letter:"_b"}];var loadedFlickrImages=[];var imageIdStringBuffer=[];var startingIndex;var numberOfFlickrItems=data.items.length;var loadedFlickrImagesCounter=0;if(el.data("scrollableAreaHeight")<=75){startingIndex=0}else if(el.data("scrollableAreaHeight")<=100){startingIndex=1}else if(el.data("scrollableAreaHeight")<=240){startingIndex=2}else if(el.data("scrollableAreaHeight")<=500){startingIndex=3}else if(el.data("scrollableAreaHeight")<=640){startingIndex=4}else{startingIndex=5}$.each(data.items,function(index,item){loadFlickrImage(item,startingIndex)});function loadFlickrImage(item,sizeIndex){var path=item.media.m;var imgSrc=path.replace("_m",flickrImageSizes[sizeIndex].letter);var tempImg=$("<img />").attr("src",imgSrc);tempImg.load(function(){if(this.height<el.data("scrollableAreaHeight")){if((sizeIndex+1)<flickrImageSizes.length){loadFlickrImage(item,sizeIndex+1)}else{addImageToLoadedImages(this)}}else{addImageToLoadedImages(this)}if(loadedFlickrImagesCounter===numberOfFlickrItems){switch(manipulationMethod){case"addFirst":el.data("scrollableArea").children(":first").before(loadedFlickrImages);break;case"addLast":el.data("scrollableArea").children(":last").after(loadedFlickrImages);break;default:el.data("scrollableArea").html(loadedFlickrImages);break}self.recalculateScrollableArea();self._showHideHotSpots();self._trigger("addedFlickrContent",null,{"addedElementIds":imageIdStringBuffer})}})}function addImageToLoadedImages(imageObj){var widthScalingFactor=el.data("scrollableAreaHeight")/imageObj.height;var tempWidth=Math.round(imageObj.width*widthScalingFactor);var tempIdArr=$(imageObj).attr("src").split("/");var lastElemIndex=(tempIdArr.length-1);tempIdArr=tempIdArr[lastElemIndex].split(".");$(imageObj).attr("id",tempIdArr[0]);$(imageObj).css({"height":el.data("scrollableAreaHeight"),"width":tempWidth});imageIdStringBuffer.push(tempIdArr[0]);loadedFlickrImages.push(imageObj);loadedFlickrImagesCounter++}})},getAjaxContent:function(content,manipulationMethod,filterTag){var self=this,el=this.element;$.ajaxSetup({cache:false});$.get(content,function(data){var filteredContent;if(filterTag!==undefined){if(filterTag.length>0){filteredContent=$("<div>").html(data).find(filterTag)}else{filteredContent=content}}else{filteredContent=data}switch(manipulationMethod){case"addFirst":el.data("scrollableArea").children(":first").before(filteredContent);break;case"addLast":el.data("scrollableArea").children(":last").after(filteredContent);break;default:el.data("scrollableArea").html(filteredContent);break}self.recalculateScrollableArea();self._showHideHotSpots();self._trigger("addedAjaxContent")})},getHtmlContent:function(content,manipulationMethod,filterTag){var self=this,el=this.element;var filteredContent;if(filterTag!==undefined){if(filterTag.length>0){filteredContent=$("<div>").html(content).find(filterTag)}else{filteredContent=content}}else{filteredContent=content}switch(manipulationMethod){case"addFirst":el.data("scrollableArea").children(":first").before(filteredContent);break;case"addLast":el.data("scrollableArea").children(":last").after(filteredContent);break;default:el.data("scrollableArea").html(filteredContent);break}self.recalculateScrollableArea();self._showHideHotSpots();self._trigger("addedHtmlContent")},recalculateScrollableArea:function(){var tempScrollableAreaWidth=0,foundStartAtElement=false,o=this.options,el=this.element;el.data("scrollableArea").children(o.countOnlyClass).each(function(){if((o.startAtElementId.length>0)&&(($(this).attr("id"))===o.startAtElementId)){el.data("startingPosition",tempScrollableAreaWidth);foundStartAtElement=true}tempScrollableAreaWidth=tempScrollableAreaWidth+$(this).outerWidth(true)});if(!(foundStartAtElement)){el.data("startAtElementId","")}el.data("scrollableAreaWidth",tempScrollableAreaWidth);el.data("scrollableArea").width(el.data("scrollableAreaWidth"));el.data("scrollWrapper").scrollLeft(el.data("startingPosition"));el.data("scrollXPos",el.data("startingPosition"))},getScrollerOffset:function(){var el=this.element;return el.data("scrollWrapper").scrollLeft()},stopAutoScrolling:function(){var self=this,el=this.element;if(el.data("autoScrollingInterval")!==null){clearInterval(el.data("autoScrollingInterval"));el.data("autoScrollingInterval",null);self._showHideHotSpots();self._trigger("autoScrollingStopped")}},startAutoScrolling:function(){var self=this,el=this.element,o=this.options;if(el.data("enabled")){self._showHideHotSpots();clearInterval(el.data("autoScrollingInterval"));el.data("autoScrollingInterval",null);self._trigger("autoScrollingStarted");el.data("autoScrollingInterval",setInterval(function(){if(!(el.data("visible"))||(el.data("scrollableAreaWidth")<=(el.data("scrollWrapper").innerWidth()))){clearInterval(el.data("autoScrollingInterval"));el.data("autoScrollingInterval",null)}else{el.data("previousScrollLeft",el.data("scrollWrapper").scrollLeft());switch(o.autoScrollingDirection){case"right":el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+o.autoScrollingStep);if(el.data("previousScrollLeft")===el.data("scrollWrapper").scrollLeft()){self._trigger("autoScrollingRightLimitReached");clearInterval(el.data("autoScrollingInterval"));el.data("autoScrollingInterval",null);self._trigger("autoScrollingIntervalStopped")}break;case"left":el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()-o.autoScrollingStep);if(el.data("previousScrollLeft")===el.data("scrollWrapper").scrollLeft()){self._trigger("autoScrollingLeftLimitReached");clearInterval(el.data("autoScrollingInterval"));el.data("autoScrollingInterval",null);self._trigger("autoScrollingIntervalStopped")}break;case"backAndForth":if(el.data("pingPongDirection")==="right"){el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+(o.autoScrollingStep))}else{el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()-(o.autoScrollingStep))}if(el.data("previousScrollLeft")===el.data("scrollWrapper").scrollLeft()){if(el.data("pingPongDirection")==="right"){el.data("pingPongDirection","left");self._trigger("autoScrollingRightLimitReached")}else{el.data("pingPongDirection","right");self._trigger("autoScrollingLeftLimitReached")}}break;case"endlessLoopRight":el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+o.autoScrollingStep);self._checkContinuousSwapRight();break;case"endlessLoopLeft":el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()-o.autoScrollingStep);self._checkContinuousSwapLeft();break;default:break}}},o.autoScrollingInterval))}},_checkContinuousSwapRight:function(){var el=this.element,o=this.options;if(el.data("getNextElementWidth")){if((o.startAtElementId.length>0)&&(el.data("startAtElementHasNotPassed"))){el.data("swapAt",$("#"+o.startAtElementId).outerWidth(true));el.data("startAtElementHasNotPassed",false)}else{el.data("swapAt",el.data("scrollableArea").children(":first").outerWidth(true))}el.data("getNextElementWidth",false)}if(el.data("swapAt")<=el.data("scrollWrapper").scrollLeft()){el.data("swappedElement",el.data("scrollableArea").children(":first").detach());el.data("scrollableArea").append(el.data("swappedElement"));var wrapperLeft=el.data("scrollWrapper").scrollLeft();el.data("scrollWrapper").scrollLeft(wrapperLeft-el.data("swappedElement").outerWidth(true));el.data("getNextElementWidth",true)}},_checkContinuousSwapLeft:function(){var el=this.element,o=this.options;if(el.data("getNextElementWidth")){if((o.startAtElementId.length>0)&&(el.data("startAtElementHasNotPassed"))){el.data("swapAt",$("#"+o.startAtElementId).outerWidth(true));el.data("startAtElementHasNotPassed",false)}else{el.data("swapAt",el.data("scrollableArea").children(":first").outerWidth(true))}el.data("getNextElementWidth",false)}if(el.data("scrollWrapper").scrollLeft()===0){el.data("swappedElement",el.data("scrollableArea").children(":last").detach());el.data("scrollableArea").prepend(el.data("swappedElement"));el.data("scrollWrapper").scrollLeft(el.data("scrollWrapper").scrollLeft()+el.data("swappedElement").outerWidth(true));el.data("getNextElementWidth",true)}},restoreOriginalElements:function(){var self=this,el=this.element;el.data("scrollableArea").html(el.data("originalElements"));self.recalculateScrollableArea();self.jumpToElement("first")},show:function(){var el=this.element;el.data("visible",true);el.show()},hide:function(){var el=this.element;el.data("visible",false);el.hide()},enable:function(){var el=this.element;if(this.options.touchScrolling){el.data("scrollWrapper").kinetic('attach')}el.data("enabled",true)},disable:function(){var self=this,el=this.element;self.stopAutoScrolling();clearInterval(el.data("rightScrollingInterval"));clearInterval(el.data("leftScrollingInterval"));clearInterval(el.data("hideHotSpotBackgroundsInterval"));if(this.options.touchScrolling){el.data("scrollWrapper").kinetic('detach')}el.data("enabled",false)},destroy:function(){var self=this,el=this.element;self.stopAutoScrolling();clearInterval(el.data("rightScrollingInterval"));clearInterval(el.data("leftScrollingInterval"));clearInterval(el.data("hideHotSpotBackgroundsInterval"));el.data("scrollingHotSpotRight").unbind("mouseover");el.data("scrollingHotSpotRight").unbind("mouseout");el.data("scrollingHotSpotRight").unbind("mousedown");el.data("scrollingHotSpotLeft").unbind("mouseover");el.data("scrollingHotSpotLeft").unbind("mouseout");el.data("scrollingHotSpotLeft").unbind("mousedown");el.unbind("mousenter");el.unbind("mouseleave");el.data("scrollingHotSpotRight").remove();el.data("scrollingHotSpotLeft").remove();el.data("scrollableArea").remove();el.data("scrollWrapper").remove();el.html(el.data("originalElements"));$.Widget.prototype.destroy.apply(this,arguments)}})})(jQuery);
$.fn.spin = function(opts) {
	this.each(function() {
		var $this = $(this),
				spinner = $this.data('spinner');

		if (spinner) spinner.stop();
		if (opts !== false) {
			opts = $.extend({color: $this.css('color')}, opts);
			spinner = new Spinner(opts).spin(this);
			$this.data('spinner', spinner);
		}
	});
	return this;
};

/* to use

 spinner = $('#middle-area .explorer-full').first().spin(main.spinner_opts);
 or to stop
 spinner.spin(false)
*/
;
/*
  textfill
 @name      jquery.textfill.js
 @author    Russ Painter
 @author    Yu-Jie Lin
 @version   0.4.0
 @date      2013-08-16
 @copyright (c) 2012-2013 Yu-Jie Lin
 @copyright (c) 2009 Russ Painter
 @license   MIT License
 @homepage  https://github.com/jquery-textfill/jquery-textfill
 @example   http://jquery-textfill.github.io/jquery-textfill/index.html
*/

(function(e){e.fn.textfill=function(q){function m(){a.debug&&("undefined"!=typeof console&&"undefined"!=typeof console.debug)&&console.debug.apply(console,arguments)}function r(){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn.apply(console,arguments)}function n(a,b,d,h,f,k){function c(a,b){var c=" / ";a>b?c=" > ":a==b&&(c=" = ");return c}m(a+"font: "+b.css("font-size")+", H: "+b.height()+c(b.height(),d)+d+", W: "+b.width()+c(b.width(),h)+h+", minFontPixels: "+f+", maxFontPixels: "+
k)}function p(a,b,d,h,f,k,c,l){for(n(a+": ",b,f,k,c,l);c<l-1;){var e=Math.floor((c+l)/2);b.css("font-size",e);if(d.call(b)<=h){if(c=e,d.call(b)==h)break}else l=e;n(a+": ",b,f,k,c,l)}b.css("font-size",l);d.call(b)<=h&&(c=l,n(a+"* ",b,f,k,c,l));return c}var a=e.extend({debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,success:null,callback:null,fail:null,complete:null,explicitWidth:null,explicitHeight:null},q);this.each(function(){var g=e(a.innerTag+":visible:first",this),b=a.explicitHeight||
e(this).height(),d=a.explicitWidth||e(this).width(),h=g.css("font-size");m("Opts: ",a);m("Vars: maxHeight: "+b+", maxWidth: "+d);var f=a.minFontPixels,k=0>=a.maxFontPixels?b:a.maxFontPixels,c=void 0;a.widthOnly||(c=p("H",g,e.fn.height,b,b,d,f,k));f=p("W",g,e.fn.width,d,b,d,f,k);a.widthOnly?g.css("font-size",f):g.css("font-size",Math.min(c,f));m("Final: "+g.css("font-size"));g.width()>d||g.height()>b&&!a.widthOnly?(g.css("font-size",h),a.fail&&a.fail(this)):a.success?a.success(this):a.callback&&(r("callback is deprecated, use success, instead"),
a.callback(this))});a.complete&&a.complete(this);return this}})(window.jQuery);
/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */


(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
(function(d){+"use strict";var n="left",m="right",c="up",u="down",b="in",v="out",k="none",q="auto",j="swipe",r="pinch",e="click",x="horizontal",s="vertical",h="all",f="start",i="move",g="end",o="cancel",a="ontouchstart" in window,w="TouchSwipe";var l={fingers:1,threshold:75,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(w);if(y&&typeof A==="string"){if(y[A]){return y[A].apply(this,Array.prototype.slice.call(arguments,1))}else{d.error("Method "+A+" does not exist on jQuery.swipe")}}else{if(!y&&(typeof A==="object"||!A)){return t.apply(this,arguments)}}return z};d.fn.swipe.defaults=l;d.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:i,PHASE_END:g,PHASE_CANCEL:o};d.fn.swipe.directions={LEFT:n,RIGHT:m,UP:c,DOWN:u,IN:b,OUT:v};d.fn.swipe.pageScroll={NONE:k,HORIZONTAL:x,VERTICAL:s,AUTO:q};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function t(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){y.allowPageScroll=k}if(!y){y={}}y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(w);if(!z){z=new p(this,y);A.data(w,z)}})}function p(S,af){var aF=(a||!af.fallbackToMouseEvents),ax=aF?"touchstart":"mousedown",U=aF?"touchmove":"mousemove",au=aF?"touchend":"mouseup",D=aF?null:"mouseleave",R="touchcancel";var ac=0;var N=null;var ag=0;var aB=0;var A=0;var ai=1;var aH=0;var H=d(S);var O="start";var aE=0;var ah=null;var I=0;var Y=0;var aA=0;var aJ=0;try{H.bind(ax,ar);H.bind(R,M)}catch(aC){d.error("events not supported "+ax+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(ax,ar);H.bind(R,M);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(w,null);return H};function ar(aM){if(X()){return}if(d(aM.target).closest(af.excludedElements,H).length>0){return}var aN=aM.originalEvent;var aL,aK=a?aN.touches[0]:aN;O=f;if(a){aE=aN.touches.length}else{aM.preventDefault()}ac=0;N=null;aH=null;ag=0;aB=0;A=0;ai=1;pinchDistance=0;ah=T();z();if(!a||(aE===af.fingers||af.fingers===h)||ao()){aI(0,aK);I=B();if(aE==2){aI(1,aN.touches[1]);aB=A=Z(ah[0].start,ah[1].start)}if(af.swipeStatus||af.pinchStatus){aL=aD(aN,O)}}else{aL=false}if(aL===false){O=o;aD(aN,O);return aL}else{aj(true)}}function P(aN){var aQ=aN.originalEvent;if(O===g||O===o||ae()){return}var aM,aL=a?aQ.touches[0]:aQ;var aO=V(aL);Y=B();if(a){aE=aQ.touches.length}O=i;if(aE==2){if(aB==0){aI(1,aQ.touches[1]);aB=A=Z(ah[0].start,ah[1].start)}else{V(aQ.touches[1]);A=Z(ah[0].end,ah[1].end);aH=an(ah[0].end,ah[1].end)}ai=y(aB,A);pinchDistance=Math.abs(aB-A)}if((aE===af.fingers||af.fingers===h)||!a||ao()){N=aq(aO.start,aO.end);C(aN,N);ac=G(aO.start,aO.end);ag=L();if(af.swipeStatus||af.pinchStatus){aM=aD(aQ,O)}if(!af.triggerOnTouchEnd||af.triggerOnTouchLeave){var aK=true;if(af.triggerOnTouchLeave){var aP=at(this);aK=az(aO.end,aP)}if(!af.triggerOnTouchEnd&&aK){O=aG(i)}else{if(af.triggerOnTouchLeave&&!aK){O=aG(g)}}if(O==o||O==g){aD(aQ,O)}}}else{O=o;aD(aQ,O)}if(aM===false){O=o;aD(aQ,O)}}function aa(aM){var aO=aM.originalEvent;if(a){if(aO.touches.length>0){av();return true}}if(ae()){aE=aJ}aM.preventDefault();Y=B();if(af.triggerOnTouchEnd||(af.triggerOnTouchEnd==false&&O===i)){O=g;var aL=((aE===af.fingers||af.fingers===h)||!a);var aK=ah[0].end.x!==0;var aN=aL&&aK&&(am()||ay());if(aN){aD(aO,O)}else{O=o;aD(aO,O)}}else{if(O===i){O=o;aD(aO,O)}}aj(false)}function M(){aE=0;Y=0;I=0;aB=0;A=0;ai=1;z();aj(false)}function W(aK){var aL=aK.originalEvent;if(af.triggerOnTouchLeave){O=aG(g);aD(aL,O)}}function Q(){H.unbind(ax,ar);H.unbind(R,M);H.unbind(U,P);H.unbind(au,aa);if(D){H.unbind(D,W)}aj(false)}function aG(aN){var aM=aN;var aL=ap();var aK=ad();if(!aL){aM=o}else{if(aK&&aN==i&&(!af.triggerOnTouchEnd||af.triggerOnTouchLeave)){aM=g}else{if(!aK&&aN==g&&af.triggerOnTouchLeave){aM=o}}}return aM}function aD(aM,aK){var aL=undefined;if(ab()){aL=al(aM,aK,j)}if(ao()&&aL!==false){aL=al(aM,aK,r)}if(K()&&aL!==false){aL=al(aM,aK,e)}if(aK===o){M(aM)}if(aK===g){if(a){if(aM.touches.length==0){M(aM)}}else{M(aM)}}return aL}function al(aN,aK,aM){var aL=undefined;if(aM==j){if(af.swipeStatus){aL=af.swipeStatus.call(H,aN,aK,N||null,ac||0,ag||0,aE);if(aL===false){return false}}if(aK==g&&ay()){if(af.swipe){aL=af.swipe.call(H,aN,N,ac,ag,aE);if(aL===false){return false}}switch(N){case n:if(af.swipeLeft){aL=af.swipeLeft.call(H,aN,N,ac,ag,aE)}break;case m:if(af.swipeRight){aL=af.swipeRight.call(H,aN,N,ac,ag,aE)}break;case c:if(af.swipeUp){aL=af.swipeUp.call(H,aN,N,ac,ag,aE)}break;case u:if(af.swipeDown){aL=af.swipeDown.call(H,aN,N,ac,ag,aE)}break}}}if(aM==r){if(af.pinchStatus){aL=af.pinchStatus.call(H,aN,aK,aH||null,pinchDistance||0,ag||0,aE,ai);if(aL===false){return false}}if(aK==g&&am()){switch(aH){case b:if(af.pinchIn){aL=af.pinchIn.call(H,aN,aH||null,pinchDistance||0,ag||0,aE,ai)}break;case v:if(af.pinchOut){aL=af.pinchOut.call(H,aN,aH||null,pinchDistance||0,ag||0,aE,ai)}break}}}if(aM==e){if(aK===o){if(af.click&&(aE===1||!a)&&(isNaN(ac)||ac===0)){aL=af.click.call(H,aN,aN.target)}}}return aL}function ad(){if(af.threshold!==null){return ac>=af.threshold}return true}function ak(){if(af.pinchThreshold!==null){return pinchDistance>=af.pinchThreshold}return true}function ap(){var aK;if(af.maxTimeThreshold){if(ag>=af.maxTimeThreshold){aK=false}else{aK=true}}else{aK=true}return aK}function C(aK,aL){if(af.allowPageScroll===k||ao()){aK.preventDefault()}else{var aM=af.allowPageScroll===q;switch(aL){case n:if((af.swipeLeft&&aM)||(!aM&&af.allowPageScroll!=x)){aK.preventDefault()}break;case m:if((af.swipeRight&&aM)||(!aM&&af.allowPageScroll!=x)){aK.preventDefault()}break;case c:if((af.swipeUp&&aM)||(!aM&&af.allowPageScroll!=s)){aK.preventDefault()}break;case u:if((af.swipeDown&&aM)||(!aM&&af.allowPageScroll!=s)){aK.preventDefault()}break}}}function am(){return ak()}function ao(){return !!(af.pinchStatus||af.pinchIn||af.pinchOut)}function aw(){return !!(am()&&ao())}function ay(){var aK=ap();var aM=ad();var aL=aM&&aK;return aL}function ab(){return !!(af.swipe||af.swipeStatus||af.swipeLeft||af.swipeRight||af.swipeUp||af.swipeDown)}function E(){return !!(ay()&&ab())}function K(){return !!(af.click)}function av(){aA=B();aJ=event.touches.length+1}function z(){aA=0;aJ=0}function ae(){var aK=false;if(aA){var aL=B()-aA;if(aL<=af.fingerReleaseThreshold){aK=true}}return aK}function X(){return !!(H.data(w+"_intouch")===true)}function aj(aK){if(aK===true){H.bind(U,P);H.bind(au,aa);if(D){H.bind(D,W)}}else{H.unbind(U,P,false);H.unbind(au,aa,false);if(D){H.unbind(D,W,false)}}H.data(w+"_intouch",aK===true)}function aI(aL,aK){var aM=aK.identifier!==undefined?aK.identifier:0;ah[aL].identifier=aM;ah[aL].start.x=ah[aL].end.x=aK.pageX;ah[aL].start.y=ah[aL].end.y=aK.pageY;return ah[aL]}function V(aK){var aM=aK.identifier!==undefined?aK.identifier:0;var aL=J(aM);aL.end.x=aK.pageX;aL.end.y=aK.pageY;return aL}function J(aL){for(var aK=0;aK<ah.length;aK++){if(ah[aK].identifier==aL){return ah[aK]}}}function T(){var aK=[];for(var aL=0;aL<=5;aL++){aK.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aK}function L(){return Y-I}function Z(aN,aM){var aL=Math.abs(aN.x-aM.x);var aK=Math.abs(aN.y-aM.y);return Math.round(Math.sqrt(aL*aL+aK*aK))}function y(aK,aL){var aM=(aL/aK)*1;return aM.toFixed(2)}function an(){if(ai<1){return v}else{return b}}function G(aL,aK){return Math.round(Math.sqrt(Math.pow(aK.x-aL.x,2)+Math.pow(aK.y-aL.y,2)))}function F(aN,aL){var aK=aN.x-aL.x;var aP=aL.y-aN.y;var aM=Math.atan2(aP,aK);var aO=Math.round(aM*180/Math.PI);if(aO<0){aO=360-Math.abs(aO)}return aO}function aq(aL,aK){var aM=F(aL,aK);if((aM<=45)&&(aM>=0)){return n}else{if((aM<=360)&&(aM>=315)){return n}else{if((aM>=135)&&(aM<=225)){return m}else{if((aM>45)&&(aM<135)){return u}else{return c}}}}}function B(){var aK=new Date();return aK.getTime()}function at(aK){aK=d(aK);var aM=aK.offset();var aL={left:aM.left,right:aM.left+aK.outerWidth(),top:aM.top,bottom:aM.top+aK.outerHeight()};return aL}function az(aK,aL){return(aK.x>aL.left&&aK.x<aL.right&&aK.y>aL.top&&aK.y<aL.bottom)}}})(jQuery);
/**
 * UtilCarousel - Responsive jQuery Carousel Plugin
 * Version: v1.3
 * URL: http://codecanyon.net/user/hkeyjun/portfolio
 * Description: Responsive jQuery Carousel Plugin
 * Requires: jQuery 1.7 +
 * Author: Hkeyjun
 * Copyright: Copyright 2014 hkeyjun
 */


(function($, document, window, undefined) {
	'use strict';

	var pluginName = 'utilCarousel';

	var defaults = {
		responsiveBaseOn : window,
		showItems : 4,
		responsive : true,
		responsiveMode : 'breakPoints',
		responsiveDelay : 200,
		breakPoints : [[480, 1], [768, 2], [992, 3], [1200, 4]],
		itemWidthRange : [100, 400],
		itemWidthRangeConflict : 'margin',
		rangeCaculate : 'maxFirst',
		autoPlay : false,
		pagination : true,
		navigation : false,
		navigationText : ['Prev', 'Next'],
		itemLess : 'margin',
		scrollPerPage : false,
		interval : 3000,
		rewind : true,
		themeClass : 'util-theme-default',
		pauseOnHover : true,
		drag : true,
		mouseWheel : false,
		slideSpeed : 400,
		responsiveSpeed : 400,
		scrollPageSpeed : 600,
		//Callbacks
		beforeInit : null,
		afterInit : null,
		beforeUpdate : null,
		afterUpdate : null,
		indexChanged : null,
		beforeDrag : null,
		afterDrag : null,
		itemAnimation : false,
		lazyLoad : false
	};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this.$el = $(element);
		this.$el.data(pluginName, this);

		this._defaults = defaults;

		this.init();
	}


	Plugin.prototype = {

		init : function() {
			var base = this;

			if ($.isFunction(base.options.beforeInit)) {
				base.options.beforeInit();
			}
			base.getBroswerStatus();
			base.initBaseVars();
			base.buildWrap();
			base.updateUI(false);
			base.$wrapper.css('display', 'block');
			base.loadEvents();
			if (base.options.autoPlay === true) {
				base.play();
			}
			if ($.isFunction(base.options.afterInit)) {
				base.options.afterInit();
			}
			if (base.needCheckVisable) {
				base.checkVisable(0);
			}
		},
		getBroswerStatus : function() {
			var base = this;
			base.isTouch = Modernizr.touch;
			base.transform3d = Modernizr.csstransforms3d;
			base.transform2d = Modernizr.csstransforms;
			base.transition = Modernizr.csstransitions;
			base.cssanimations = Modernizr.cssanimations;

			if (base.transition) {
				var transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd otransitionend',
					'transition' : 'transitionend'
				};
				base.transitionName = Modernizr.prefixed('transition');
				base.transEndName = transEndEventNames[Modernizr.prefixed('transition')];
				base.emulateTransitionEnd = function($target, duration) {
					var called = false;
					$target.one(base.transEndName, function() {
						called = true;
					});
					var callback = function() {
						if (!called)
							$target.trigger(base.transEndName);
					};
					window.setTimeout(callback, duration);
				};
				base.moveProperty = Modernizr.prefixed('transform');
				if (base.transform3d) {
					base.moveValueMarkup = 'translate3d({0}px,0px,0px)';
				} else {
					base.moveValueMarkup = 'translate({0}px,0px)';
				}
			} else {
				base.moveProperty = "left";
				base.moveValueMarkup = '{0}px';
			}

		},
		initBaseVars : function() {
			var base = this;
			if (window.utilId == undefined) {
				window.utilId = 0;
			}
			base.internalId = window.utilId + 1;
			base.$items = base.$el.children();
			base.itemTotal = base.$items.size();
			base.visiableItemCount = base.options.showItems;
			base.showIndex = 0;
			base.activeIndex = 0;
			base.itemPad = 0;
			base.pageIndex = -1;
			base.isSliding = false;
			base.dragging = false;
			base.playStatus = 'stop';
			base.doAnimation = base.cssanimations == true && base.options.itemAnimation != false;
			base.needCheckVisable = base.doAnimation || base.options.lazyLoad;
			if (base.options.lazyLoad) {
				base.$lazyImages = base.$el.find('.img-lazy[data-src]');
			}
		},
		buildWrap : function() {
			var base = this;
			base.originalClass = base.$el.attr('class') || '';
			if (base.options.themeClass != '' && !base.$el.hasClass(base.options.themeClass)) {
				base.$el.attr('class', 'util-theme-default ' + (base.$el.attr('class') || ''));
			}
			if (!base.$el.hasClass('util-carousel')) {
				base.$el.attr('class', 'util-carousel ' + (base.$el.attr('class') || ''));
			}
			base.$items.wrapAll('<div class="util-wrapper"></div>').wrap('<div class="util-item"></div>');
			base.$utilItems = base.$el.find('.util-item');
			base.$wrapper = base.$el.find('.util-wrapper').wrap('<div class="util-wrapper-holder"></div>');
			base.$wrapperHolder = base.$el.find('.util-wrapper-holder');
			base.$el.css('display', 'block');
			if (base.options.pagination === true) {
				base.$pagination = $('<div class="util-pagination"></div>').appendTo(base.$el);
				//bind pagination event
				base.$pagination.on('click.util touchend', '.util-page', function() {
					var pageIndex = $(this).data('utilIndex');
					if (base.showIndex != pageIndex) {
						base.goTo(pageIndex, base.options.scrollPageSpeed, true);
					}
				});
			}
			if (base.options.navigation === true) {
				base.$navigation = $('<div class="util-navigation"></div>').appendTo(base.$el);
				base.$btnPrev = $('<div class="util-prev">' + base.options.navigationText[0] + '</div>').appendTo(base.$navigation);
				base.$btnNext = $('<div class="util-next">' + base.options.navigationText[1] + '</div>').appendTo(base.$navigation);
				base.$btnPrev.on('click.util', function() {
					base.prev();
				});
				base.$btnNext.on('click.util', function() {
					base.next();
				});
			}
		},
		caculateResponsiveItems : function() {
			var base = this, count = 1, pad = 0;
			var width = $(base.options.responsiveBaseOn).width(), elWidth = base.$wrapperHolder.innerWidth(), minWidth, maxWidth;
			base.holderWidth = elWidth;
			if (base.options.responsive) {
				if (base.options.responsiveMode == 'itemWidthRange') {
					var minmax;
					minmax = base.options.itemWidthRange.sort();
					minWidth = minmax[0];
					maxWidth = minmax[1];
					var maxCount = elWidth / minWidth;
					var minCount = elWidth / maxWidth;

					if (base.options.rangeCaculate === 'minFirst') {
						count = Math.floor(maxCount);
						if (count > 0) {
							if (count < minCount) {
								if (base.options.itemWidthRangeConflict !== 'ajust') {
									pad = elWidth / count - maxWidth;
								}

							}
						} else {
							count = 1;
						}
					} else if (base.options.rangeCaculate === 'maxFirst') {
						count = Math.ceil(minCount);
						if (count > maxCount) {
							count = count - 1;
							if (count > 0) {

								if (base.options.itemWidthRangeConflict !== 'ajust') {
									pad = elWidth / count - maxWidth;
								}

							} else {
								count = 1;
							}
						}
					}
				} else {
					var breakPoints = base.options.breakPoints.sort(function(a, b) {
						return b[0] - a[0];
					});
					count = base.options.showItems > breakPoints[0][1] ? base.options.showItems : breakPoints[0][1];
					for (var i = 0; i < breakPoints.length; i++) {
						if (width <= breakPoints[i][0]) {
							count = breakPoints[i][1];
						} else {
							break;
						}
					}
				}
				if (count > base.itemTotal) {
					//breakPoints 
					if (base.options.responsiveMode === 'breakPoints') {
						if (base.options.itemLess === 'margin') {
							pad = elWidth / base.itemTotal - elWidth / count;
							count = base.itemTotal;
						} else if (base.options.itemLess === 'scaleUp') {
							count = base.itemTotal;
						}
					}
					//itemWidthRange 
					if (base.options.responsiveMode === 'itemWidthRange') {

						if (base.options.itemLess === 'margin') {
							if (base.options.rangeCaculate === 'minFirst') {
								if (minCount > base.itemTotal) {
									count = base.itemTotal;
									pad = elWidth / count - maxWidth;

								} else {
									count = base.itemTotal;
									pad = 0;
								}
							}
							if (base.options.rangeCaculate === 'maxFirst') {
								count = base.itemTotal;
								pad = elWidth / count - maxWidth;
							}

						}
						if (base.options.itemLess === 'scaleUp') {
							count = base.itemTotal;
							pad = 0;
						}

					}

				}
			}else
			{
				count = base.options.showItems;
			}

			base.visiableItemCount = count;
			base.itemPad = pad;
			base.itemWidth = elWidth / count;
		},
		caculatePositionArray : function() {
			var base = this;
			base.itemPositions = [];
			base.pagePositions = [];
			base.userItemPositions = [];
			// 1.1 add
			base.pageIndexs = [];
			var lastPageIndex = base.itemTotal - base.visiableItemCount;
			var pageNum = 0;
			for (var i = 0; i < base.itemTotal; i++) {
				base.itemPositions.push(base.itemWidth * i * -1);
				base.userItemPositions.push(base.itemPositions[i] - base.itemPad / 2);
				if ((i % base.visiableItemCount == 0 && i < lastPageIndex) || i == lastPageIndex) {
					pageNum++;
					base.pagePositions.push(base.itemPositions[i]);
					base.pageIndexs.push(i);
				}
				base.$utilItems.eq(i).data('page', pageNum);
			}

		},
		updatePagination : function() {
			var base = this;
			if (base.options.pagination === true) {
				base.$pagination.empty().hide();
				if (base.pagePositions.length > 1) {
					base.$pagination.show();
					for (var i = 0; i < base.pagePositions.length; i++) {
						$('<div class="util-page"><span> </span></div>').data('utilIndex', $.inArray(base.pagePositions[i], base.itemPositions)).appendTo(base.$pagination);
					}
				}
			}
		},
		checkPagination : function() {
			var base = this, pageIndex = 0;
			if (base.options.pagination === true) {
				for (var i = 0; i < base.pageIndexs.length; i++) {
					if (base.showIndex >= base.pageIndexs[i]) {
						pageIndex = i;
					} else {
						break;
					}
				}

				base.$pagination.find('.active-page').removeClass('active-page');
				base.$pagination.find('.util-page').eq(pageIndex).addClass('active-page');
				base.pageIndex = pageIndex;
			}
		},
		checkNavigation : function() {
			var base = this;
			if (base.options.rewind !== true && base.options.navigation === true) {
				base.$btnPrev.removeClass('util-disable');
				base.$btnNext.removeClass('util-disable');
				if (base.showIndex == 0) {
					if (!base.$btnPrev.hasClass('util-disable')) {
						base.$btnPrev.addClass('util-disable');
					}
				}
				if (base.showIndex == base.maxTransItems) {
					if (!base.$btnNext.hasClass('util-disable')) {
						base.$btnNext.addClass('util-disable');
					}
				}
			}
		},
		maxTrans : function() {
			var base = this;
			if (base.visiableItemCount > base.itemTotal) {
				base.maxTransLeft = 0;
				base.maxTransItems = 0;
			} else {
				base.maxTransLeft = (base.itemTotal - base.visiableItemCount) * base.itemWidth;
				base.maxTransItems = base.itemTotal - base.visiableItemCount;
			}
		},

		updateUI : function(animate) {
			var base = this;
			if ($.isFunction(base.options.beforeUpdate)) {
				base.options.beforeUpdate();
			}

			base.caculateResponsiveItems();
			base.maxTrans();
			base.caculatePositionArray();
			base.updatePagination();
			base.checkPagination();
			base.checkNavigation();
			var pad = base.itemPad, count = base.visiableItemCount;
			var perWidth = base.itemWidth;
			var nowWrapperWidth = base.$wrapper.width(), changeWrapperWidth = perWidth * base.itemTotal * 2;

			if (animate) {
				var callback = function() {
				};
				if (nowWrapperWidth <= changeWrapperWidth) {
					base.$wrapper.width(changeWrapperWidth);
					callback = function() {
						base.goTo(base.showIndex, base.options.slideSpeed, true);
					};
				} else {
					callback = function() {
						base.$wrapper.width(changeWrapperWidth);
						base.goTo(base.showIndex, base.options.slideSpeed, true);
					};
				}
				var fullWidth;
				if (base.transition) {
					base.$wrapper.css(base.transitionName, '');
				}
				$.when(base.$utilItems.stop(true, false).animate({
					'width' : perWidth - pad,
					'marginLeft' : pad / 2,
					'marginRight' : pad / 2
				}, {
					duration : base.options.responsiveSpeed,
					step : function(now, fv) {
						if (true) {
							if (fv.prop == 'width') {
								fullWidth = now;
							}
							if (fv.prop == 'marginLeft') {
								fullWidth = fullWidth + 2 * now;
								base.moveTo(-base.showIndex * fullWidth);
							}
						}
					}
				})).then(function() {
							if ($.isFunction(base.options.afterUpdate)) {
								base.options.afterUpdate();
							}
							callback();
						});
			} else {
				base.$wrapper.width(changeWrapperWidth);
				base.$utilItems.css({
					'width' : perWidth - pad,
					'marginLeft' : pad / 2,
					'marginRight' : pad / 2
				});

				if ($.isFunction(base.options.afterUpdate)) {
					base.options.afterUpdate();
				}
			}

			base.resumePlay();
		},
		resizeHandler : function() {
			var base = this;
			var lastWinWidth = $(window).width(), resizeTimer;
			base.doRezise = function() {
				if ($(window).width() != lastWinWidth) {
					window.clearTimeout(resizeTimer);
					base.clearPlay();
					resizeTimer = window.setTimeout(function() {
						var winWidth = $(window).width();
						if (lastWinWidth != winWidth) {
							lastWinWidth = winWidth;
							base.updateUI(true);
						}

					}, base.options.responsiveDelay);
				}
			};
			if (base.options.responsive) {
				$(window).on('resize.util' + base.internalId, base.doRezise);
			}
		},
		dragEvents : function() {
			var base = this;
			var hammerObj = base.$wrapperHolder.hammer({
				drag_min_distance : 1
			});

			var startPosition;
			var scrollY;
			var dragTarget;
			hammerObj.on('dragstart', function(ev) {

				scrollY = undefined;
			}).on('drag', function(ev) {
						if (!base.dragging) {
							//Russ's fix for scrolling vertically and still calling preventDefault early enough for android chrome
							if ( typeof scrollY == 'undefined') {
								scrollY = !!(scrollY || Math.abs(ev.gesture.deltaX) < Math.abs(ev.gesture.deltaY) );
								if(!scrollY){
									ev.gesture.preventDefault()
								}
							}
							if ($.isFunction(base.options.beforeDrag)) {
								base.options.beforeDrag();
							}
							base.clearPlay();
							base.dragging = true;
							startPosition = base.$wrapper.position();
							if (base.transition) {
								base.$wrapper.css(base.transitionName, '');
							} else {
								base.$wrapper.stop();
							}
							if (!base.isTouch) {
								base.$wrapperHolder.addClass('dragging');
								base.$wrapperHolder.css('cursor', base.$wrapperHolder.css('cursor'));
							}

							dragTarget = ev.target || ev.srcElement;
					 	console.log("EndofDrag base not dragging: " + scrollY)
						} else {
							if ( typeof scrollY == 'undefined') {
								scrollY = !!(scrollY || Math.abs(ev.gesture.deltaX) < Math.abs(ev.gesture.deltaY) );
							}

							if ((!scrollY && ev.gesture.pointerType == 'touch') || ev.gesture.pointerType == "mouse") {
								ev.gesture.preventDefault();
								var overRate = 0.6;
								var newPosX;
								if (startPosition.left > 0 || startPosition.left < -base.maxTransLeft) {
									newPosX = ev.gesture.deltaX * overRate + startPosition.left;
								} else {
									newPosX = ev.gesture.deltaX + startPosition.left;
								}

								if (newPosX < -base.maxTransLeft) {
									if (startPosition.left < -base.maxTransLeft) {
										newPosX = startPosition.left + ev.gesture.deltaX * overRate;
									} else {
										newPosX = -base.maxTransLeft + (newPosX - (-base.maxTransLeft)) * overRate;
									}

								}
								if (newPosX > 0) {
									if (startPosition.left > 0) {
										newPosX = startPosition.left + ev.gesture.deltaX * overRate;
									} else {
										newPosX = newPosX * overRate;
									}

								}
								base.dragEndX = newPosX;

								base.moveTo(newPosX);
							}
						}

					}).on('dragend', function(ev) {

						var dragendTarget = ev.target || ev.srcElement;
						if ($(dragTarget).is($(dragendTarget)) && !base.isTouch) {
							$(dragTarget).on('click.util-disableclick', function(evt) {
								evt.stopImmediatePropagation();
								evt.stopPropagation();
								evt.preventDefault();
								$(dragTarget).off('click.util-disableclick');
								return false;
							});
							var eventList = $._data(dragTarget, "events");
							eventList.click.unshift(eventList.click.pop());
						}
						ev.gesture.preventDefault();

						if (ev.gesture.pointerType == 'touch' && scrollY) {
							return;
						}
						ev.gesture.preventDefault();
						base.dragging = false;
						var posArray = base.options.scrollPerPage === true ? base.pagePositions : base.itemPositions;
						var goIndex;
						if (base.dragEndX < -base.maxTransLeft) {
							goIndex = base.itemPositions.length - 1;
						} else if (base.dragEndX > 0) {
							goIndex = 0;
						} else {
							var nextRate = 0.1;
							var nextRateWidth = nextRate * base.itemWidth;
							$.each(posArray, function(index, value) {
								var biger = posArray[index - 1] === undefined ? Number.MAX_VALUE : posArray[index - 1];
								var smaller = posArray[index + 1] === undefined ? -Number.MAX_VALUE : posArray[index + 1];
								if (ev.gesture.deltaX < 0 && base.dragEndX >= value - nextRateWidth && base.dragEndX < biger - nextRateWidth) {
									if (base.options.scrollPerPage === true) {
										goIndex = $.inArray(value, base.itemPositions);
									} else {
										goIndex = index;
									}
								}
								if (ev.gesture.deltaX > 0 && base.dragEndX >= smaller + nextRateWidth && base.dragEndX <= value + nextRateWidth) {
									if (base.options.scrollPerPage === true) {
										goIndex = $.inArray(value, base.itemPositions);
									} else {
										goIndex = index;
									}
								}

							});
						}

						if (!base.isTouch) {
							base.$wrapperHolder.removeClass('dragging');
							base.$wrapperHolder.css('cursor', '');
						}
						if ($.isFunction(base.options.afterDrag)) {
							base.options.afterDrag();
						}
						base.goTo(goIndex, base.options.slideSpeed, true);
					});


		},
		swapEvents : function() {
			var base = this;
			var hammerObj = Hammer(base.$wrapperHolder.get(0), {
				swipe_velocity : 0.1
			});
			hammerObj.on("swipeleft swiperight", function(ev) {

				ev.gesture.preventDefault();
				if (ev.type == 'dragleft' || ev.type == 'dragright') {
					return;
				} else {
				}
				if (ev.type == 'swipeleft') {
					base.next();
				} else {
					base.prev();
				}
			});

		},
		loadEvents : function() {
			var base = this;
			if (base.options.responsive === true) {
				base.resizeHandler();
			}
			if (base.options.drag === true) {
				base.dragEvents();
			} else {
				base.swapEvents();
			}
			if (base.options.pauseOnHover === true && base.isTouch !== true) {
				base.pauseOnHover();
			}
			if (base.options.mouseWheel === true) {
				base.$el.on('mousewheel.util', function(evt) {
					evt.stopPropagation();
					evt.preventDefault();
					if (evt.deltaY < 0) {
						base.next();
					}
					if (evt.deltaY > 0) {
						base.prev();
					}
				});
			}
			if (base.options.lazyLoad === true) {
				base.lazyLoadImage();
			}
		},
		moveTo : function(value) {
			var base = this, style = {};
			style[base.moveProperty] = base.moveValueMarkup.replace('{0}', value);
			base.$wrapper.css(style);
			if (base.needCheckVisable) {
				base.checkVisable(value);
			}

		},
		slideTo : function(value, speed) {
			var base = this;
			if (base.transition) {
				base.isSliding = true;
				base.$wrapper.css(base.transitionName, 'all ' + speed + 'ms cubic-bezier(0.215, 0.61, 0.355, 1)');
				base.moveTo(value);
				base.$wrapper.one(base.transEndName, function() {
					base.isSliding = false;
				});
				base.emulateTransitionEnd(base.$wrapper, speed + 50);
			} else {
				base.$wrapper.stop().animate({
					'left' : value
				}, speed, function() {
					base.isSliding = false;
				});
			}
		},
		goTo : function(index, speed, animate) {
			var base = this;
			if (speed === undefined) {
				speed = base.options.slideSpeed;
			}
			if (animate === undefined) {
				animate = true;
			}
			if (index < 0) {
				index = 0;
			}
			if (index > base.maxTransItems) {
				index = base.maxTransItems;
			}
			if (animate === true) {
				base.slideTo(Math.round(base.itemPositions[index]), speed);
				if (base.needCheckVisable) {
					base.checkVisable(base.itemPositions[index]);
				}
			} else {
				if (base.transition) {
					base.$wrapper.css(base.transitionName, '');
				}
				base.moveTo(Math.round(base.itemPositions[index]));
			}
			if (index != base.showIndex && $.isFunction(base.options.indexChanged)) {
				base.options.indexChanged(index);
			}
			base.showIndex = index;
			base.afterGo();
		},
		toStart : function() {
			var base = this;
			base.goTo(0);
		},
		toEnd : function() {
			var base = this;
			base.goTo(base.maxTransItems);
		},
		afterGo : function() {
			var base = this;
			base.checkPagination();
			base.checkNavigation();
			base.resumePlay();
		},
		prev : function() {
			var base = this, prevIndex;
			if (base.options.scrollPerPage === true) {
				prevIndex = base.pageIndex - 1;
				if (base.options.rewind === true && prevIndex < 0) {
					prevIndex = base.pageIndexs.length - 1;
				} else if (base.options.rewind !== true && prevIndex < 0) {
					return false;
				}
				base.goTo(base.pageIndexs[prevIndex], base.options.slideSpeed, true);
			} else {
				prevIndex = base.showIndex - 1;
				if (base.options.rewind === true && prevIndex < 0) {
					prevIndex = base.maxTransItems;
				} else if (base.options.rewind !== true && prevIndex < 0) {
					return false;
				}
				base.goTo(prevIndex, base.options.slideSpeed, true);
			}

		},
		next : function() {
			var base = this, nextIndex;
			if (base.options.scrollPerPage === true) {
				nextIndex = base.pageIndex + 1;
				if (base.options.rewind === true && nextIndex > base.pageIndexs.length - 1) {
					nextIndex = 0;
				} else if (base.options.rewind !== true && nextIndex > base.pageIndexs.length - 1) {
					return false;
				}
				base.goTo(base.pageIndexs[nextIndex], base.options.slideSpeed, true);
			} else {
				nextIndex = base.showIndex + 1;
				if (base.options.rewind === true && nextIndex > base.maxTransItems) {
					nextIndex = 0;
				} else if (base.options.rewind !== true && nextIndex > base.maxTransItems) {
					return false;
				}
				base.goTo(nextIndex, base.options.slideSpeed, true);
			}

		},
		play : function() {
			var base = this;
			base.playStatus = "play";
			window.clearInterval(base.playTimer);
			base.playTimer = window.setInterval(function() {
				base.next();
			}, base.options.interval);
		},
		stop : function() {
			var base = this;
			base.playStatus = 'stop';
			window.clearInterval(base.playTimer);
		},
		resumePlay : function() {
			var base = this;
			if (base.playStatus !== 'stop') {
				base.play();
			}
		},
		clearPlay : function() {
			var base = this;
			window.clearInterval(base.playTimer);
		},
		pauseOnHover : function() {
			var base = this;

			base.$el.on('mouseenter.util', function() {
				base.playStatusBeforHover = base.playStatus;
				if (base.playStatus === 'play') {
					base.stop();
				}
			});
			base.$el.on('mouseleave.util', function() {
				if (base.playStatusBeforHover === "play") {
					if (base.dragging === true) {
						base.playStatus = 'play';
					} else {
						base.play();
					}
				}
			});
		},
		destroy : function() {
			var base = this;

			if (base.$pagination) {
				base.$pagination.remove();
			}
			if (base.$navigation) {
				base.$navigation.remove();
			}
			base.$items.unwrap().unwrap().unwrap();
			$(window).off('resize.util' + base.internalId);
			base.$el.attr('class', base.originalClass).removeData('utilCarousel');
		},
		checkVisable : function(x) {
			var base = this;
			var itemRealWidth = base.itemWidth - base.itemPad;
			var inview = [];
			for (var i = 0; i < base.userItemPositions.length; i++) {
				if (base.userItemPositions[i] > (x - base.holderWidth) && base.userItemPositions[i] <= x || (base.userItemPositions[i] - itemRealWidth) >= (x - base.holderWidth) && (base.userItemPositions[i] - itemRealWidth) < x) {
					inview.push(i);
				}
			}
			var $inviewItems = base.$items.filter(function(index) {
				return $.inArray(index, inview) >= 0;
			});
			if (base.doAnimation) {
				$inviewItems.addClass(base.options.itemAnimation);
				base.$items.not($inviewItems).removeClass(base.options.itemAnimation);
			}
			if (base.options.lazyLoad) {
				var $loaded = $inviewItems.find(base.$lazyImages).trigger('utillazy');
				base.$lazyImages = base.$lazyImages.not($loaded);
			}

		},
		lazyLoadImage : function() {
			var base = this;
			base.$lazyImages.one('utillazy', function() {
				var src = this.getAttribute("data-src");
				this.setAttribute("src", src);
				this.removeAttribute("data-src");
			});
		}
	};

	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, pluginName)) {
				$.data(this, pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, document, window);

//for lightbox
jQuery(function() {

	if (jQuery.fn.magnificPopup) {
		window.setTimeout(function() {
			jQuery('.util-carousel').each(function() {
				jQuery(this).magnificPopup({
					delegate : '.img-link',
					type : 'image',
					gallery : {
						enabled : true
					}
				});

			});
			jQuery('.video-link').magnificPopup({
				type : 'iframe'
			});
		}, 200);
	}
});


/* Modernizr 2.7.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-touch-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.7.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:v(["@media (",l.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},p.cssanimations=function(){return E("animationName")},p.csstransforms=function(){return!!E("transform")},p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},p.csstransitions=function(){return E("transition")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e.prefixed=function(a,b,c){return b?E(a,b,c):E(a,"pfx")},e}(this,this.document);

/*! jQuery plugin for Hammer.JS - v1.0.6 - 2014-03-28
 * http://eightmedia.github.com/hammer.js
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
!function(a,b){"use strict";function c(){e.READY||(t.determineEventTypes(),p.each(e.gestures,function(a){v.register(a)}),t.onTouch(e.DOCUMENT,n,v.detect),t.onTouch(e.DOCUMENT,o,v.detect),e.READY=!0)}function d(a,c){Date.now||(Date.now=function(){return(new Date).getTime()}),a.event.bindDom=function(d,e,f){c(d).on(e,function(c){var d=c.originalEvent||c,e=["pageX","pageY","clientX","clientY","target","preventDefault","stopPropagation"];a.utils.each(e,function(a){null==d[a]&&(d[a]=c[a])}),d.which===b&&(d.which=d.button),f.call(this,d)})},a.utils.each(["on","off"],function(b){a.Instance.prototype[b]=function(a,d){return c(this.element)[b](a,d)}}),a.Instance.prototype.trigger=function(a,b){var d=c(this.element);return d.has(b.target).length&&(d=c(b.target)),d.trigger({type:a,gesture:b})},c.fn.hammer=function(b){return this.each(function(){var d=c(this),e=d.data("hammer");e?e&&b&&a.utils.extend(e.options,b):d.data("hammer",new a(this,b||{}))})}}var e=function(a,b){return new e.Instance(a,b||{})};e.VERSION="1.0.10",e.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},e.HAS_POINTEREVENTS=a.navigator.pointerEnabled||a.navigator.msPointerEnabled,e.HAS_TOUCHEVENTS="ontouchstart"in a,e.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.NO_MOUSEEVENTS=e.HAS_TOUCHEVENTS&&a.navigator.userAgent.match(e.MOBILE_REGEX),e.EVENT_TYPES={},e.UPDATE_VELOCITY_INTERVAL=16,e.DOCUMENT=a.document;var f=e.DIRECTION_DOWN="down",g=e.DIRECTION_LEFT="left",h=e.DIRECTION_UP="up",i=e.DIRECTION_RIGHT="right",j=e.POINTER_MOUSE="mouse",k=e.POINTER_TOUCH="touch",l=e.POINTER_PEN="pen",m=e.EVENT_START="start",n=e.EVENT_MOVE="move",o=e.EVENT_END="end";e.plugins=e.plugins||{},e.gestures=e.gestures||{},e.READY=!1;var p=e.utils={extend:function(a,c,d){for(var e in c)a[e]!==b&&d||(a[e]=c[e]);return a},each:function(a,c,d){var e,f;if("forEach"in a)a.forEach(c,d);else if(a.length!==b){for(e=-1;f=a[++e];)if(c.call(d,f,e,a)===!1)return}else for(e in a)if(a.hasOwnProperty(e)&&c.call(d,a[e],e,a)===!1)return},inStr:function(a,b){return a.indexOf(b)>-1},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var b=[],c=[],d=[],e=[],f=Math.min,g=Math.max;return 1===a.length?{pageX:a[0].pageX,pageY:a[0].pageY,clientX:a[0].clientX,clientY:a[0].clientY}:(p.each(a,function(a){b.push(a.pageX),c.push(a.pageY),d.push(a.clientX),e.push(a.clientY)}),{pageX:(f.apply(Math,b)+g.apply(Math,b))/2,pageY:(f.apply(Math,c)+g.apply(Math,c))/2,clientX:(f.apply(Math,d)+g.apply(Math,d))/2,clientY:(f.apply(Math,e)+g.apply(Math,e))/2})},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return 180*Math.atan2(d,c)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.clientX-b.clientX),d=Math.abs(a.clientY-b.clientY);return c>=d?a.clientX-b.clientX>0?g:i:a.clientY-b.clientY>0?h:f},getDistance:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==h||a==f},toggleDefaultBehavior:function(a,b,c){if(b&&a&&a.style){p.each(["webkit","moz","Moz","ms","o",""],function(d){p.each(b,function(b,e){d&&(e=d+e.substring(0,1).toUpperCase()+e.substring(1)),e in a.style&&(a.style[e]=!c&&b)})});var d=function(){return!1};"none"==b.userSelect&&(a.onselectstart=!c&&d),"none"==b.userDrag&&(a.ondragstart=!c&&d)}}};e.Instance=function(a,b){var d=this;return c(),this.element=a,this.enabled=!0,this.options=p.extend(p.extend({},e.defaults),b||{}),this.options.stop_browser_behavior&&p.toggleDefaultBehavior(this.element,this.options.stop_browser_behavior,!1),this.eventStartHandler=t.onTouch(a,m,function(a){d.enabled&&v.startDetect(d,a)}),this.eventHandlers=[],this},e.Instance.prototype={on:function(a,b){var c=a.split(" ");return p.each(c,function(a){this.element.addEventListener(a,b,!1),this.eventHandlers.push({gesture:a,handler:b})},this),this},off:function(a,b){var c,d,e=a.split(" ");return p.each(e,function(a){for(this.element.removeEventListener(a,b,!1),c=-1;d=this.eventHandlers[++c];)d.gesture===a&&d.handler===b&&this.eventHandlers.splice(c,1)},this),this},trigger:function(a,b){b||(b={});var c=e.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var d=this.element;return p.hasParent(b.target,d)&&(d=b.target),d.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this},dispose:function(){var a,b;for(this.options.stop_browser_behavior&&p.toggleDefaultBehavior(this.element,this.options.stop_browser_behavior,!0),a=-1;b=this.eventHandlers[++a];)this.element.removeEventListener(b.gesture,b.handler,!1);return this.eventHandlers=[],t.unbindDom(this.element,e.EVENT_TYPES[m],this.eventStartHandler),null}};var q=null,r=!1,s=!1,t=e.event={bindDom:function(a,b,c){var d=b.split(" ");p.each(d,function(b){a.addEventListener(b,c,!1)})},unbindDom:function(a,b,c){var d=b.split(" ");p.each(d,function(b){a.removeEventListener(b,c,!1)})},onTouch:function(a,b,c){var d=this,f=function(f){var g=f.type.toLowerCase();if(!p.inStr(g,"mouse")||!s){p.inStr(g,"touch")||p.inStr(g,"pointerdown")||p.inStr(g,"mouse")&&1===f.which?r=!0:p.inStr(g,"mouse")&&!f.which&&(r=!1),(p.inStr(g,"touch")||p.inStr(g,"pointer"))&&(s=!0);var h=0;r&&(e.HAS_POINTEREVENTS&&b!=o?h=u.updatePointer(b,f):p.inStr(g,"touch")?h=f.touches.length:s||(h=p.inStr(g,"up")?0:1),h>0&&b==o?b=n:h||(b=o),(h||null===q)&&(q=f),c.call(v,d.collectEventData(a,b,d.getTouchList(q,b),f)),e.HAS_POINTEREVENTS&&b==o&&(h=u.updatePointer(b,f))),h||(q=null,r=!1,s=!1,u.reset())}};return this.bindDom(a,e.EVENT_TYPES[b],f),f},determineEventTypes:function(){var a;a=e.HAS_POINTEREVENTS?u.getEvents():e.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.EVENT_TYPES[m]=a[0],e.EVENT_TYPES[n]=a[1],e.EVENT_TYPES[o]=a[2]},getTouchList:function(a){return e.HAS_POINTEREVENTS?u.getTouchList():a.touches?a.touches:(a.identifier=1,[a])},collectEventData:function(a,b,c,d){var e=k;return(p.inStr(d.type,"mouse")||u.matchType(j,d))&&(e=j),{center:p.getCenter(c),timeStamp:Date.now(),target:d.target,touches:c,eventType:b,pointerType:e,srcEvent:d,preventDefault:function(){var a=this.srcEvent;a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return v.stopDetect()}}}},u=e.PointerEvent={pointers:{},getTouchList:function(){var a=[];return p.each(this.pointers,function(b){a.push(b)}),a},updatePointer:function(a,b){return a==o?delete this.pointers[b.pointerId]:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b),Object.keys(this.pointers).length},matchType:function(a,b){if(!b.pointerType)return!1;var c=b.pointerType,d={};return d[j]=c===j,d[k]=c===k,d[l]=c===l,d[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},v=e.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:p.extend({},b),lastEvent:!1,lastVelocityEvent:!1,velocity:!1,name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);var b=this.current.inst,c=b.options;return p.each(this.gestures,function(d){return this.stopped||c[d.name]===!1||b.enabled===!1||d.handler.call(d,a,b)!==!1?void 0:(this.stopDetect(),!1)},this),this.current&&(this.current.lastEvent=a),a.eventType==o&&!a.touches.length-1&&this.stopDetect(),a}},stopDetect:function(){this.previous=p.extend({},this.current),this.current=null,this.stopped=!0},getVelocityData:function(a,b,c,d){var f=this.current,g=f.lastVelocityEvent,h=f.velocity;g&&a.timeStamp-g.timeStamp>e.UPDATE_VELOCITY_INTERVAL?(h=p.getVelocity(a.timeStamp-g.timeStamp,a.center.clientX-g.center.clientX,a.center.clientY-g.center.clientY),f.lastVelocityEvent=a):f.velocity||(h=p.getVelocity(b,c,d),f.lastVelocityEvent=a),f.velocity=h,a.velocityX=h.x,a.velocityY=h.y},getInterimData:function(a){var b,c,d=this.current.lastEvent;a.eventType==o?(b=d&&d.interimAngle,c=d&&d.interimDirection):(b=d&&p.getAngle(d.center,a.center),c=d&&p.getDirection(d.center,a.center)),a.interimAngle=b,a.interimDirection=c},extendEventData:function(a){var b=this.current,c=b.startEvent;(a.touches.length!=c.touches.length||a.touches===c.touches)&&(c.touches=[],p.each(a.touches,function(a){c.touches.push(p.extend({},a))}));var d=a.timeStamp-c.timeStamp,e=a.center.clientX-c.center.clientX,f=a.center.clientY-c.center.clientY;return this.getVelocityData(a,d,e,f),this.getInterimData(a),p.extend(a,{startEvent:c,deltaTime:d,deltaX:e,deltaY:f,distance:p.getDistance(c.center,a.center),angle:p.getAngle(c.center,a.center),direction:p.getDirection(c.center,a.center),scale:p.getScale(c.touches,a.touches),rotation:p.getRotation(c.touches,a.touches)}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),p.extend(e.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};e.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(a,b){var c=v.current;if(c.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),void(this.triggered=!1);if(!(b.options.drag_max_touches>0&&a.touches.length>b.options.drag_max_touches))switch(a.eventType){case m:this.triggered=!1;break;case n:if(a.distance<b.options.drag_min_distance&&c.name!=this.name)return;var d=c.startEvent.center;if(c.name!=this.name&&(c.name=this.name,b.options.correct_for_drag_min_distance&&a.distance>0)){var e=Math.abs(b.options.drag_min_distance/a.distance);d.pageX+=a.deltaX*e,d.pageY+=a.deltaY*e,d.clientX+=a.deltaX*e,d.clientY+=a.deltaY*e,a=v.extendEventData(a)}(c.lastEvent.drag_locked_to_axis||b.options.drag_lock_to_axis&&b.options.drag_lock_min_distance<=a.distance)&&(a.drag_locked_to_axis=!0);var j=c.lastEvent.direction;a.drag_locked_to_axis&&j!==a.direction&&(a.direction=p.isVertical(j)?a.deltaY<0?h:f:a.deltaX<0?g:i),this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),b.trigger(this.name+a.direction,a);var k=p.isVertical(a.direction);(b.options.drag_block_vertical&&k||b.options.drag_block_horizontal&&!k)&&a.preventDefault();break;case o:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},e.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:2},timer:null,handler:function(a,b){switch(a.eventType){case m:clearTimeout(this.timer),v.current.name=this.name,this.timer=setTimeout(function(){"hold"==v.current.name&&b.trigger("hold",a)},b.options.hold_timeout);break;case n:a.distance>b.options.hold_threshold&&clearTimeout(this.timer);break;case o:clearTimeout(this.timer)}}},e.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==o&&b.trigger(this.name,a)}},e.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:.7},handler:function(a,b){if(a.eventType==o){if(a.touches.length<b.options.swipe_min_touches||a.touches.length>b.options.swipe_max_touches)return;(a.velocityX>b.options.swipe_velocity||a.velocityY>b.options.swipe_velocity)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},e.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},has_moved:!1,handler:function(a,b){var c,d,e;a.eventType==m?this.has_moved=!1:a.eventType!=n||this.moved?a.eventType==o&&"touchcancel"!=a.srcEvent.type&&a.deltaTime<b.options.tap_max_touchtime&&!this.has_moved&&(c=v.previous,d=c&&c.lastEvent&&a.timeStamp-c.lastEvent.timeStamp,e=!1,c&&"tap"==c.name&&d&&d<b.options.doubletap_interval&&a.distance<b.options.doubletap_distance&&(b.trigger("doubletap",a),e=!0),(!e||b.options.tap_always)&&(v.current.name="tap",b.trigger(v.current.name,a))):this.has_moved=a.distance>b.options.tap_max_distance}},e.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,b){return b.options.prevent_mouseevents&&a.pointerType==j?void a.stopDetect():(b.options.prevent_default&&a.preventDefault(),void(a.eventType==m&&b.trigger(this.name,a)))}},e.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1,transform_within_instance:!1},triggered:!1,handler:function(a,b){if(v.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),void(this.triggered=!1);if(!(a.touches.length<2)){if(b.options.transform_always_block&&a.preventDefault(),b.options.transform_within_instance)for(var c=-1;a.touches[++c];)if(!p.hasParent(a.touches[c].target,b.element))return;switch(a.eventType){case m:this.triggered=!1;break;case n:var d=Math.abs(1-a.scale),e=Math.abs(a.rotation);if(d<b.options.transform_min_scale&&e<b.options.transform_min_rotation)return;v.current.name=this.name,this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),e>b.options.transform_min_rotation&&b.trigger("rotate",a),d>b.options.transform_min_scale&&(b.trigger("pinch",a),b.trigger("pinch"+(a.scale<1?"in":"out"),a));break;case o:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}}},a.Hammer=e,"object"==typeof module&&module.exports&&(module.exports=e),"function"==typeof define&&define.amd?define(["jquery"],function(b){return d(a.Hammer,b)}):d(a.Hammer,a.jQuery||a.Zepto)}(window);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 * Version: 3.1.11
 * Requires: jQuery 1.2.2+*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

(function(g){g.html5={};g.html5.version="6.8.4616"})(jwplayer);
(function(g){var h=document;g.parseDimension=function(a){return"string"==typeof a?""===a?0:-1<a.lastIndexOf("%")?a:parseInt(a.replace("px",""),10):a};g.timeFormat=function(a){if(0<a){var c=Math.floor(a/3600),e=Math.floor((a-3600*c)/60);a=Math.floor(a%60);return(c?c+":":"")+(10>e?"0":"")+e+":"+(10>a?"0":"")+a}return"00:00"};g.bounds=function(a){var c={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!a||!h.body.contains(a))return c;if(a.getBoundingClientRect){a=a.getBoundingClientRect(a);var e=window.pageYOffset,
b=window.pageXOffset;if(!a.width&&!a.height&&!a.left&&!a.top)return c;c.left=a.left+b;c.right=a.right+b;c.top=a.top+e;c.bottom=a.bottom+e;c.width=a.right-a.left;c.height=a.bottom-a.top}else{c.width=a.offsetWidth|0;c.height=a.offsetHeight|0;do c.left+=a.offsetLeft|0,c.top+=a.offsetTop|0;while(a=a.offsetParent);c.right=c.left+c.width;c.bottom=c.top+c.height}return c};g.empty=function(a){if(a)for(;0<a.childElementCount;)a.removeChild(a.children[0])}})(jwplayer.utils);
(function(g){function h(a,b,c){if(!e.exists(b))return"";c=c?" !important":"";return isNaN(b)?b.match(/png|gif|jpe?g/i)&&0>b.indexOf("url")?"url("+b+")":b+c:0===b||"z-index"===a||"opacity"===a?""+b+c:/color/i.test(a)?"#"+e.pad(b.toString(16).replace(/^0x/i,""),6)+c:Math.ceil(b)+"px"+c}function a(a,b){for(var c=0;c<a.length;c++){var d=a[c],e,f;for(e in b){f=e;f=f.split("-");for(var h=1;h<f.length;h++)f[h]=f[h].charAt(0).toUpperCase()+f[h].slice(1);f=f.join("");d.style[f]!==b[e]&&(d.style[f]=b[e])}}}
function c(a){var c=b[a].sheet,d,e,h;if(c){d=c.cssRules;e=l[a];h=a;var u=f[h];h+=" { ";for(var m in u)h+=m+": "+u[m]+"; ";h+="}";if(void 0!==e&&e<d.length&&d[e].selectorText===a){if(h===d[e].cssText)return;c.deleteRule(e)}else e=d.length,l[a]=e;c.insertRule(h,e)}}var e=g.utils,b={},d,f={},u=null,l={},m=e.css=function(a,e,l){f[a]||(f[a]={});var j=f[a];l=l||!1;var m=!1,g,w;for(g in e)w=h(g,e[g],l),""!==w?w!==j[g]&&(j[g]=w,m=!0):void 0!==j[g]&&(delete j[g],m=!0);if(m){if(!b[a]){if(!d||5E4<d.sheet.cssRules.length)e=
document.createElement("style"),e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e),d=e;b[a]=d}null!==u?u.styleSheets[a]=f[a]:c(a)}};m.style=function(b,c,d){if(!(void 0===b||null===b)){void 0===b.length&&(b=[b]);var e={},f;for(f in c)e[f]=h(f,c[f]);if(null!==u&&!d){c=(c=b.__cssRules)||{};for(var l in e)c[l]=e[l];b.__cssRules=c;0>u.elements.indexOf(b)&&u.elements.push(b)}else a(b,e)}};m.block=function(a){null===u&&(u={id:a,styleSheets:{},elements:[]})};m.unblock=function(b){if(u&&
(!b||u.id===b)){for(var d in u.styleSheets)c(d);for(b=0;b<u.elements.length;b++)d=u.elements[b],a(d,d.__cssRules);u=null}};e.clearCss=function(a){for(var d in f)0<=d.indexOf(a)&&delete f[d];for(var e in b)0<=e.indexOf(a)&&c(e)};e.transform=function(a,b){var c={};b=b||"";c.transform=b;c["-webkit-transform"]=b;c["-ms-transform"]=b;c["-moz-transform"]=b;c["-o-transform"]=b;"string"===typeof a?m(a,c):m.style(a,c)};e.dragStyle=function(a,b){m(a,{"-webkit-user-select":b,"-moz-user-select":b,"-ms-user-select":b,
"-webkit-user-drag":b,"user-select":b,"user-drag":b})};e.transitionStyle=function(a,b){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||m(a,{"-webkit-transition":b,"-moz-transition":b,"-o-transition":b,transition:b})};e.rotate=function(a,b){e.transform(a,"rotate("+b+"deg)")};e.rgbHex=function(a){a=String(a).replace("#","");3===a.length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);return"#"+a.substr(-6)};e.hexToRgba=function(a,b){var c="rgb",d=[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,
2),16)];void 0!==b&&100!==b&&(c+="a",d.push(b/100));return c+"("+d.join(",")+")"};m(".jwplayer ".slice(0,-1)+" div span a img ul li video".split(" ").join(", .jwplayer ")+", .jwclick",{margin:0,padding:0,border:0,color:"#000000","font-size":"100%",font:"inherit","vertical-align":"baseline","background-color":"transparent","text-align":"left",direction:"ltr","-webkit-tap-highlight-color":"rgba(255, 255, 255, 0)"});m(".jwplayer ul",{"list-style":"none"})})(jwplayer);
(function(g){var h=g.stretching={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"};g.scale=function(a,c,e,b,d){var f="";c=c||1;e=e||1;b|=0;d|=0;if(1!==c||1!==e)f="scale("+c+", "+e+")";if(b||d)f="translate("+b+"px, "+d+"px)";g.transform(a,f)};g.stretch=function(a,c,e,b,d,f){if(!c||!e||!b||!d||!f)return!1;a=a||h.UNIFORM;var u=2*Math.ceil(e/2)/d,l=2*Math.ceil(b/2)/f,m="video"===c.tagName.toLowerCase(),r=!1,n="jw"+a.toLowerCase();switch(a.toLowerCase()){case h.FILL:u>l?l=u:u=l;r=!0;break;
case h.NONE:u=l=1;case h.EXACTFIT:r=!0;break;default:u>l?0.95<d*l/e?(r=!0,n="jwexactfit"):(d*=l,f*=l):0.95<f*u/b?(r=!0,n="jwexactfit"):(d*=u,f*=u),r&&(u=2*Math.ceil(e/2)/d,l=2*Math.ceil(b/2)/f)}m?(a={left:"",right:"",width:"",height:""},r?(e<d&&(a.left=a.right=Math.ceil((e-d)/2)),b<f&&(a.top=a.bottom=Math.ceil((b-f)/2)),a.width=d,a.height=f,g.scale(c,u,l,0,0)):(r=!1,g.transform(c)),g.css.style(c,a)):c.className=c.className.replace(/\s*jw(none|exactfit|uniform|fill)/g,"")+" "+n;return r}})(jwplayer.utils);
(function(g){g.dfxp=function(){var h=jwplayer.utils.seconds;this.parse=function(a){var c=[{begin:0,text:""}];a=a.replace(/^\s+/,"").replace(/\s+$/,"");var e=a.split("\x3c/p\x3e"),b=a.split("\x3c/tt:p\x3e"),d=[];for(a=0;a<e.length;a++)0<=e[a].indexOf("\x3cp")&&(e[a]=e[a].substr(e[a].indexOf("\x3cp")+2).replace(/^\s+/,"").replace(/\s+$/,""),d.push(e[a]));for(a=0;a<b.length;a++)0<=b[a].indexOf("\x3ctt:p")&&(b[a]=b[a].substr(b[a].indexOf("\x3ctt:p")+5).replace(/^\s+/,"").replace(/\s+$/,""),d.push(b[a]));
e=d;for(a=0;a<e.length;a++){b=e[a];d={};try{var f=b.indexOf('begin\x3d"'),b=b.substr(f+7),f=b.indexOf('" end\x3d"');d.begin=h(b.substr(0,f));b=b.substr(f+7);f=b.indexOf('"');d.end=h(b.substr(0,f));f=b.indexOf('"\x3e');b=b.substr(f+2);d.text=b}catch(u){}b=d;b.text&&(c.push(b),b.end&&(c.push({begin:b.end,text:""}),delete b.end))}if(1<c.length)return c;throw{message:"Invalid DFXP file:"};}}})(jwplayer.parsers);
(function(g){g.srt=function(){var h=jwplayer.utils,a=h.seconds;this.parse=function(c,e){var b=e?[]:[{begin:0,text:""}];c=h.trim(c);var d=c.split("\r\n\r\n");1==d.length&&(d=c.split("\n\n"));for(var f=0;f<d.length;f++)if("WEBVTT"!=d[f]){var u,l=d[f];u={};var m=l.split("\r\n");1==m.length&&(m=l.split("\n"));try{l=1;0<m[0].indexOf(" --\x3e ")&&(l=0);var r=m[l].indexOf(" --\x3e ");0<r&&(u.begin=a(m[l].substr(0,r)),u.end=a(m[l].substr(r+5)));if(m[l+1]){u.text=m[l+1];for(l+=2;l<m.length;l++)u.text+="\x3cbr/\x3e"+
m[l]}}catch(n){}u.text&&(b.push(u),u.end&&!e&&(b.push({begin:u.end,text:""}),delete u.end))}if(1<b.length)return b;throw{message:"Invalid SRT file"};}}})(jwplayer.parsers);
(function(g){var h=g.utils,a=h.css,c=!0,e=!1,b=g.events,d=80,f=30;g.html5.adskipbutton=function(u,l,m,r){function n(a){if(!(0>p)){var b=v.getContext("2d");b.clearRect(0,0,d,f);w(b,0,0,d,f,5,c,e,e);w(b,0,0,d,f,5,e,c,e);b.fillStyle="#979797";b.globalAlpha=1;var k=v.width/2,j=v.height/2;b.textAlign="center";b.font="Bold 11px Sans-Serif";b.fillText(m.replace(/xx/gi,Math.ceil(p-a)),k,j+4)}}function g(a,b){if("number"==h.typeOf(F))p=F;else if("%"==F.slice(-1)){var c=parseFloat(F.slice(0,-1));b&&!isNaN(c)&&
(p=b*c/100)}else"string"==h.typeOf(F)?p=h.seconds(F):isNaN(F)||(p=F)}function j(){k&&x.sendEvent(b.JWPLAYER_AD_SKIPPED)}function q(){if(k){var a=v.getContext("2d");a.clearRect(0,0,d,f);w(a,0,0,d,f,5,c,e,c);w(a,0,0,d,f,5,e,c,c);a.fillStyle="#FFFFFF";a.globalAlpha=1;var b=v.height/2,j=v.width/2;a.textAlign="center";a.font="Bold 12px Sans-Serif";a.fillText(r+"     ",j,b+4);a.drawImage(A,v.width-(v.width-a.measureText(r).width)/2-4,(f-s.height)/2)}}function C(){if(k){var a=v.getContext("2d");a.clearRect(0,
0,d,f);w(a,0,0,d,f,5,c,e,e);w(a,0,0,d,f,5,e,c,e);a.fillStyle="#979797";a.globalAlpha=1;var b=v.height/2,j=v.width/2;a.textAlign="center";a.font="Bold 12px Sans-Serif";a.fillText(r+"     ",j,b+4);a.drawImage(s,v.width-(v.width-a.measureText(r).width)/2-4,(f-s.height)/2)}}function w(a,b,d,e,k,j,f,h,r){"undefined"==typeof h&&(h=c);"undefined"===typeof j&&(j=5);a.beginPath();a.moveTo(b+j,d);a.lineTo(b+e-j,d);a.quadraticCurveTo(b+e,d,b+e,d+j);a.lineTo(b+e,d+k-j);a.quadraticCurveTo(b+e,d+k,b+e-j,d+k);a.lineTo(b+
j,d+k);a.quadraticCurveTo(b,d+k,b,d+k-j);a.lineTo(b,d+j);a.quadraticCurveTo(b,d,b+j,d);a.closePath();h&&(a.strokeStyle="white",a.globalAlpha=r?1:0.25,a.stroke());f&&(a.fillStyle="#000000",a.globalAlpha=0.5,a.fill())}function t(a,b){var c=document.createElement(a);b&&(c.className=b);return c}var D,v,x=new b.eventdispatcher,p=-1,k=e,B,F=0,s,A;h.extend(this,x);this.updateSkipTime=function(b,l){var u=v.getContext("2d");g(b,l);if(0<=p)if(a.style(D,{visibility:B?"visible":"hidden"}),0<p-b)n(b);else if(!k){k=
c;u.clearRect(0,0,d,f);w(u,0,0,d,f,5,c,e,e);w(u,0,0,d,f,5,e,c);u.fillStyle="#979797";u.globalAlpha=1;var m=v.height/2,x=v.width/2;u.textAlign="center";u.font="Bold 12px Sans-Serif";u.fillText(r+"     ",x,m+4);u.drawImage(s,v.width-(v.width-u.measureText(r).width)/2-4,(f-s.height)/2);h.isMobile()?(new h.touch(D)).addEventListener(h.touchEvents.TAP,j):(D.addEventListener("click",j),D.addEventListener("mouseover",q),D.addEventListener("mouseout",C));D.style.cursor="pointer"}};this.reset=function(a){k=
!1;F=a;g(0,0);n(0)};this.show=function(){B=!0;0<p&&a.style(D,{visibility:"visible"})};this.hide=function(){B=!1;a.style(D,{visibility:"hidden"})};this.element=function(){return D};s=new Image;s.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkE0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRjk0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqAZXX0AAABYSURBVHjafI2BCcAwCAQ/kr3ScRwjW+g2SSezCi0kYHpwKLy8JCLDbWaGTM+MAFzuVNXhNiTQsh+PS9QhZ7o9JuFMeUVNwjsamDma4K+3oy1cqX/hxyPAAAQwNKV27g9PAAAAAElFTkSuQmCC";
s.className="jwskipimage jwskipout";A=new Image;A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkU0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRkQ0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvgIj/QAAABYSURBVHjadI6BCcAgDAS/0jmyih2tm2lHSRZJX6hQQ3w4FP49LKraSHV3ZLDzAuAi3cwaqUhSfvft+EweznHneUdTzPGRmp5hEJFhAo3LaCnjn7blzCvAAH9YOSCL5RZKAAAAAElFTkSuQmCC";
A.className="jwskipimage jwskipover";D=t("div","jwskip");D.id=u.id+"_skipcontainer";v=t("canvas");D.appendChild(v);this.width=v.width=d;this.height=v.height=f;D.appendChild(A);D.appendChild(s);a.style(D,{visibility:"hidden",bottom:l})};a(".jwskip",{position:"absolute","float":"right",display:"inline-block",width:d,height:f,right:10});a(".jwskipimage",{position:"relative",display:"none"})})(window.jwplayer);
(function(g){var h=g.utils,a=g.events,c=a.state,e=g.parsers,b=h.css,d="playing",f=document;g.html5.captions=function(b,l){function m(a){h.log("CAPTIONS("+a+")")}function r(a){(H=a.fullscreen)?(n(),setTimeout(n,500)):C(!0)}function n(){var a=x.offsetHeight,b=x.offsetWidth;0!==a&&0!==b&&B.resize(b,Math.round(0.94*a))}function z(a,b){h.ajax(a,function(a){var c=a.responseXML?a.responseXML.firstChild:null;K++;if(c){"xml"==e.localName(c)&&(c=c.nextSibling);for(;c.nodeType==c.COMMENT_NODE;)c=c.nextSibling}c=
c&&"tt"==e.localName(c)?new g.parsers.dfxp:new g.parsers.srt;try{var d=c.parse(a.responseText);s<A.length&&(A[b].data=d);C(!1)}catch(k){m(k.message+": "+A[b].file)}K==A.length&&(0<I&&(t(I),I=-1),q())},j,!0)}function j(a){K++;m(a);K==A.length&&(0<I&&(t(I),I=-1),q())}function q(){for(var b=[],c=0;c<A.length;c++)b.push(A[c]);P.sendEvent(a.JWPLAYER_CAPTIONS_LOADED,{captionData:b})}function C(a){!A.length||Q?B.hide():F==d&&0<G?(B.show(),H?r({fullscreen:!0}):(w(),a&&setTimeout(w,500))):B.hide()}function w(){B.resize()}
function t(b){0<b?(s=b-1,G=b,s>=A.length||(A[s].data?B.populate(A[s].data):K==A.length?(m("file not loaded: "+A[s].file),0!=G&&D(a.JWPLAYER_CAPTIONS_CHANGED,A,0),G=0):I=b,C(!1))):(G=0,C(!1))}function D(a,b,c){P.sendEvent(a,{type:a,tracks:b,track:c})}function v(){for(var a=[{label:"Off"}],b=0;b<A.length;b++)a.push({label:A[b].label});return a}var x,p={back:!0,color:"#FFFFFF",fontSize:15,fontFamily:"Arial,sans-serif",fontOpacity:100,backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFFFFF",
windowOpacity:0},k={fontStyle:"normal",fontWeight:"normal",textDecoration:"none"},B,F,s,A=[],K=0,I=-1,G=0,H=!1,P=new a.eventdispatcher,Q=h.isAndroid(4)&&!h.isChrome();h.extend(this,P);this.element=function(){return x};this.getCaptionsList=function(){return v()};this.getCurrentCaptions=function(){return G};this.setCurrentCaptions=function(b){0<=b&&(G!=b&&b<=A.length)&&(t(b),b=v(),h.saveCookie("captionLabel",b[G].label),D(a.JWPLAYER_CAPTIONS_CHANGED,b,G))};x=f.createElement("div");x.id=b.id+"_caption";
x.className="jwcaptions";b.jwAddEventListener(a.JWPLAYER_PLAYER_STATE,function(a){switch(a.newstate){case c.IDLE:F="idle";C(!1);break;case c.PLAYING:F=d,C(!1)}});b.jwAddEventListener(a.JWPLAYER_PLAYLIST_ITEM,function(){s=0;A=[];B.update(0);K=0;if(!Q){for(var c=b.jwGetPlaylist()[b.jwGetPlaylistIndex()].tracks,d=[],e=0,k="",j=0,k="",e=0;e<c.length;e++)k=c[e].kind.toLowerCase(),("captions"==k||"subtitles"==k)&&d.push(c[e]);for(e=G=0;e<d.length;e++)if(k=d[e].file)d[e].label||(d[e].label=e.toString()),
A.push(d[e]),z(A[e].file,e);for(e=0;e<A.length;e++)if(A[e]["default"]){j=e+1;break}if(k=h.getCookies().captionLabel){c=v();for(e=0;e<c.length;e++)if(k==c[e].label){j=e;break}}0<j&&t(j);C(!1);D(a.JWPLAYER_CAPTIONS_LIST,v(),G)}});b.jwAddEventListener(a.JWPLAYER_MEDIA_ERROR,m);b.jwAddEventListener(a.JWPLAYER_ERROR,m);b.jwAddEventListener(a.JWPLAYER_READY,function(){h.foreach(p,function(a,b){l&&(void 0!==l[a]?b=l[a]:void 0!==l[a.toLowerCase()]&&(b=l[a.toLowerCase()]));k[a]=b});B=new g.html5.captions.renderer(k,
x);C(!1)});b.jwAddEventListener(a.JWPLAYER_MEDIA_TIME,function(a){B.update(a.position)});b.jwAddEventListener(a.JWPLAYER_FULLSCREEN,r);b.jwAddEventListener(a.JWPLAYER_RESIZE,function(){C(!1)})};b(".jwcaptions",{position:"absolute",cursor:"pointer",width:"100%",height:"100%",overflow:"hidden"})})(jwplayer);
(function(g){var h=g.utils,a=h.css.style;g.html5.captions.renderer=function(c,e){function b(b){b=b||"";q="hidden";a(m,{visibility:q});n.innerHTML=b;b.length&&(q="visible",setTimeout(d,16))}function d(){if("visible"===q){var b=m.clientWidth,d=Math.pow(b/400,0.6),e=c.fontSize*d;a(n,{maxWidth:b+"px",fontSize:Math.round(e)+"px",lineHeight:Math.round(1.4*e)+"px",padding:Math.round(1*d)+"px "+Math.round(8*d)+"px"});c.windowOpacity&&a(r,{padding:Math.round(5*d)+"px",borderRadius:Math.round(5*d)+"px"});a(m,
{visibility:q})}}function f(){for(var a=-1,c=0;c<l.length;c++)if(l[c].begin<=j&&(c==l.length-1||l[c+1].begin>=j)){a=c;break}-1==a?b(""):a!=g&&(g=a,b(l[c].text))}function u(a,b,c){c=h.hexToRgba("#000000",c);"dropshadow"===a?b.textShadow="0 2px 1px "+c:"raised"===a?b.textShadow="0 0 5px "+c+", 0 1px 5px "+c+", 0 2px 5px "+c:"depressed"===a?b.textShadow="0 -2px 1px "+c:"uniform"===a&&(b.textShadow="-2px 0 1px "+c+",2px 0 1px "+c+",0 -2px 1px "+c+",0 2px 1px "+c+",-1px 1px 1px "+c+",1px 1px 1px "+c+",1px -1px 1px "+
c+",1px 1px 1px "+c)}var l,m,r,n,g,j,q="visible",C=-1;this.hide=function(){clearInterval(C);a(m,{display:"none"})};this.populate=function(a){g=-1;l=a;f()};this.resize=function(){d()};this.show=function(){a(m,{display:"block"});d();clearInterval(C);C=setInterval(d,250)};this.update=function(a){j=a;l&&f()};var w=c.fontOpacity,t=c.windowOpacity,D=c.edgeStyle,v=c.backgroundColor,x={display:"inline-block"},p={color:h.hexToRgba(h.rgbHex(c.color),w),display:"inline-block",fontFamily:c.fontFamily,fontStyle:c.fontStyle,
fontWeight:c.fontWeight,textAlign:"center",textDecoration:c.textDecoration,wordWrap:"break-word"};t&&(x.backgroundColor=h.hexToRgba(h.rgbHex(c.windowColor),t));u(D,p,w);c.back?p.backgroundColor=h.hexToRgba(h.rgbHex(v),c.backgroundOpacity):null===D&&u("uniform",p);m=document.createElement("div");r=document.createElement("div");n=document.createElement("span");a(m,{display:"block",height:"auto",position:"absolute",bottom:"20px",textAlign:"center",width:"100%"});a(r,x);a(n,p);r.appendChild(n);m.appendChild(r);
e.appendChild(m)}})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=g.events,e=c.state,b=a.css,d=a.transitionStyle,f=a.isMobile(),u=a.isAndroid(4)&&!a.isChrome(),l="button",m="text",r="slider",n="none",z="100%",j={display:n},q={display:"block"},C={display:x},w="array",t=!1,D=!0,v=null,x,p=window,k=document;h.controlbar=function(d,F){function s(a,b,c){return{name:a,type:b,className:c}}function A(c){b.block($);if(c.duration==Number.POSITIVE_INFINITY||!c.duration&&a.isSafari()&&!f)Z.setText(J.jwGetPlaylist()[J.jwGetPlaylistIndex()].title||"Live broadcast");
else{var d;E.elapsed&&(d=a.timeFormat(c.position),E.elapsed.innerHTML=d);E.duration&&(d=a.timeFormat(c.duration),E.duration.innerHTML=d);0<c.duration?X(c.position/c.duration):X(0);va=c.duration;wa||Z.setText()}}function K(){var a=J.jwGetMute();Ka=J.jwGetVolume()/100;S("mute",a||0===Ka);V(a?0:Ka)}function I(){b.style(E.hd,j);b.style(E.cc,j);Pa();sa()}function G(a){Qa=a.currentQuality|0;E.hd&&(E.hd.querySelector("button").className=2===fa.length&&0===Qa?"off":"");ma&&0<=Qa&&ma.setActive(a.currentQuality)}
function H(a){ga&&(La=a.track|0,E.cc&&(E.cc.querySelector("button").className=2===ga.length&&0===La?"off":""),na&&0<=La&&na.setActive(a.track))}function P(){la=a.extend({},Xa,oa.getComponentSettings("controlbar"),F);xa=N("background").height;var c=ta?0:la.margin;b.style(W,{height:xa,bottom:c,left:c,right:c,"max-width":ta?"":la.maxwidth});b(Q(".jwtext"),{font:la.fontsize+"px/"+N("background").height+"px "+la.font,color:la.fontcolor,"font-weight":la.fontweight});b(Q(".jwoverlay"),{bottom:xa})}function Q(a){return"#"+
$+(a?" "+a:"")}function M(){return k.createElement("span")}function y(c,d,e,j,k){var f=M(),h=N(c);j=j?" left center":" center";var r=aa(h);f.className="jw"+c;f.innerHTML="\x26nbsp;";if(h&&h.src)return e=e?{background:"url('"+h.src+"') repeat-x "+j,"background-size":r,height:k?h.height:x}:{background:"url('"+h.src+"') no-repeat"+j,"background-size":r,width:h.width,height:k?h.height:x},f.skin=h,b(Q((k?".jwvertical ":"")+".jw"+c),a.extend(e,d)),E[c]=f}function R(a,c,d,e){c&&c.src&&(b(a,{width:c.width,
background:"url("+c.src+") no-repeat center","background-size":aa(c)}),d.src&&!f&&b(a+":hover,"+a+".off:hover",{background:"url("+d.src+") no-repeat center","background-size":aa(d)}),e&&e.src&&b(a+".off",{background:"url("+e.src+") no-repeat center","background-size":aa(e)}))}function T(a){return function(b){rb[a]&&(rb[a](),f&&Ma.sendEvent(c.JWPLAYER_USER_ACTION));b.preventDefault&&b.preventDefault()}}function ca(b){a.foreach(gb,function(a,c){a!=b&&("cc"==a&&(clearTimeout(Da),Da=x),"hd"==a&&(clearTimeout(Ea),
Ea=x),c.hide())})}function ba(){!ta&&!wa&&(b.block($),Ha.show(),Ca("volume",Ha),ca("volume"))}function S(b,c){a.exists(c)||(c=!hb[b]);E[b]&&(E[b].className="jw"+b+(c?" jwtoggle jwtoggling":" jwtoggling"),setTimeout(function(){E[b].className=E[b].className.replace(" jwtoggling","")},100));hb[b]=c}function aa(a){return a?parseInt(a.width,10)+"px "+parseInt(a.height,10)+"px":"0 0"}function Y(){fa&&2<fa.length&&(ib&&(clearTimeout(ib),ib=x),b.block($),ma.show(),Ca("hd",ma),ca("hd"))}function qa(){ga&&
2<ga.length&&(jb&&(clearTimeout(jb),jb=x),b.block($),na.show(),Ca("cc",na),ca("cc"))}function da(a){0<=a&&a<fa.length&&(J.jwSetCurrentQuality(a),clearTimeout(Ea),Ea=x,ma.hide())}function Ra(a){0<=a&&a<ga.length&&(J.jwSetCurrentCaptions(a),clearTimeout(Da),Da=x,na.hide())}function ha(){2==ga.length&&Ra((La+1)%2)}function kb(){2==fa.length&&da((Qa+1)%2)}function Ia(a){a.preventDefault();k.onselectstart=function(){return t}}function Ya(a){Sa();ya=a;p.addEventListener("mouseup",O,t)}function Sa(){p.removeEventListener("mouseup",
O);ya=v}function Ta(){E.timeRail.className="jwrail";J.jwGetState()!=e.IDLE&&(J.jwSeekDrag(D),Ya("time"),za(),Ma.sendEvent(c.JWPLAYER_USER_ACTION))}function Na(b){if(ya){var d=(new Date).getTime();50<d-lb&&(Za(b),lb=d);var e=E[ya].querySelector(".jwrail"),e=a.bounds(e),e=b.x/e.width;100<e&&(e=100);b.type==a.touchEvents.DRAG_END?(J.jwSeekDrag(t),E.timeRail.className="jwrail jwsmooth",Sa(),$a.time(e),ua()):(X(e),500<d-mb&&(mb=d,$a.time(e)));Ma.sendEvent(c.JWPLAYER_USER_ACTION)}}function U(b){var d=E.time.querySelector(".jwrail"),
d=a.bounds(d);b=b.x/d.width;100<b&&(b=100);J.jwGetState()!=e.IDLE&&($a.time(b),Ma.sendEvent(c.JWPLAYER_USER_ACTION))}function L(a){return function(b){b.button||(E[a+"Rail"].className="jwrail","time"==a?J.jwGetState()!=e.IDLE&&(J.jwSeekDrag(D),Ya(a)):Ya(a))}}function O(b){var c=(new Date).getTime();50<c-lb&&(Za(b),lb=c);if(ya&&!b.button){var d=E[ya].querySelector(".jwrail"),e=a.bounds(d),d=ya,e=E[d].vertical?(e.bottom-b.pageY)/e.height:(b.pageX-e.left)/e.width;"mouseup"==b.type?("time"==d&&J.jwSeekDrag(t),
E[d+"Rail"].className="jwrail jwsmooth",Sa(),$a[d.replace("H","")](e)):("time"==ya?X(e):V(e),500<c-mb&&(mb=c,$a[ya.replace("H","")](e)));return!1}}function za(){pa&&(va&&!ta&&!f)&&(b.block($),pa.show(),Ca("time",pa))}function ua(){pa&&pa.hide()}function Za(b){ia=a.bounds(W);if((ab=a.bounds(sb))&&0!==ab.width){var c=b.x;b.pageX&&(c=b.pageX-ab.left);0<=c&&c<=ab.width&&(pa.positionX(Math.round(c)),Oa(va*c/ab.width))}}function Oa(c){var d=bb.updateTimeline(c,function(a){b.style(pa.element(),{width:a});
Ca("time",pa)});Ua?(c=Ua.text)&&b.style(pa.element(),{width:32<c.length?160:""}):(c=a.timeFormat(c),d||b.style(pa.element(),{width:""}));cb.innerHTML!==c&&(cb.innerHTML=c);Ca("time",pa)}function Aa(){a.foreach(db,function(a,c){var d={};d.left=-1<c.position.toString().search(/^[\d\.]+%$/)?c.position:(100*c.position/va).toFixed(2)+"%";b.style(c.element,d)})}function nb(){jb=setTimeout(na.hide,500)}function ja(){ib=setTimeout(ma.hide,500)}function ra(a,c,d,e){if(!f){var j=a.element();c.appendChild(j);
c.addEventListener("mousemove",d,t);e?c.addEventListener("mouseout",e,t):c.addEventListener("mouseout",a.hide,t);b.style(j,{left:"50%"})}}function eb(b,d,e,j){if(f){var k=b.element();d.appendChild(k);(new a.touch(d)).addEventListener(a.touchEvents.TAP,function(){var a=e;"cc"==j?(2==ga.length&&(a=ha),Da?(clearTimeout(Da),Da=x,b.hide()):(Da=setTimeout(function(){b.hide();Da=x},4E3),a()),Ma.sendEvent(c.JWPLAYER_USER_ACTION)):"hd"==j&&(2==fa.length&&(a=kb),Ea?(clearTimeout(Ea),Ea=x,b.hide()):(Ea=setTimeout(function(){b.hide();
Ea=x},4E3),a()),Ma.sendEvent(c.JWPLAYER_USER_ACTION))})}}function Va(c){var d=M();d.className="jwgroup jw"+c;Fa[c]=d;if(Ga[c]){var d=Ga[c],e=Fa[c];if(d&&0<d.elements.length)for(var I=0;I<d.elements.length;I++){var p;a:{p=d.elements[I];var g=c;switch(p.type){case m:g=void 0;p=p.name;var g={},G=N(("alt"==p?"elapsed":p)+"Background");if(G.src){var q=M();q.id=$+"_"+p;"elapsed"==p||"duration"==p?(q.className="jwtext jw"+p+" jwhidden",pb.push(q)):q.className="jwtext jw"+p;g.background="url("+G.src+") repeat-x center";
g["background-size"]=aa(N("background"));b.style(q,g);q.innerHTML="alt"!=p?"00:00":"";g=E[p]=q}else g=null;p=g;break a;case l:if("blank"!=p.name){p=p.name;G=g;if(!N(p+"Button").src||f&&("mute"==p||0===p.indexOf("volume"))||u&&/hd|cc/.test(p))p=v;else{var g=M(),q=M(),A=void 0,A=ka,s=y(A.name);s||(s=M(),s.className="jwblankDivider");A.className&&(s.className+=" "+A.className);A=s;s=k.createElement("button");g.style+=" display:inline-block";g.className="jw"+p+" jwbuttoncontainer";"left"==G?(g.appendChild(q),
g.appendChild(A)):(g.appendChild(A),g.appendChild(q));f?"hd"!=p&&"cc"!=p&&(new a.touch(s)).addEventListener(a.touchEvents.TAP,T(p)):s.addEventListener("click",T(p),t);s.innerHTML="\x26nbsp;";q.appendChild(s);G=N(p+"Button");q=N(p+"ButtonOver");A=N(p+"ButtonOff");R(Q(".jw"+p+" button"),G,q,A);(G=xb[p])&&R(Q(".jw"+p+".jwtoggle button"),N(G+"Button"),N(G+"ButtonOver"));p=E[p]=g}break a}break;case r:g=void 0;A=p.name;if(f&&0===A.indexOf("volume"))g=void 0;else{p=M();var q="volume"==A,w=A+("time"==A?"Slider":
"")+"Cap",G=q?"Top":"Left",g=q?"Bottom":"Right",s=y(w+G,v,t,t,q),B=y(w+g,v,t,t,q),C;C=A;var H=q,D=G,Ka=g,ha=M(),K=["Rail","Buffer","Progress"],F=void 0,ca=void 0;ha.className="jwrail jwsmooth";for(var da=0;da<K.length;da++){var ca="time"==C?"Slider":"",P=C+ca+K[da],Y=y(P,v,!H,0===C.indexOf("volume"),H),ba=y(P+"Cap"+D,v,t,t,H),J=y(P+"Cap"+Ka,v,t,t,H),S=N(P+"Cap"+D),O=N(P+"Cap"+Ka);if(Y){var ia=M();ia.className="jwrailgroup "+K[da];ba&&ia.appendChild(ba);ia.appendChild(Y);J&&(ia.appendChild(J),J.className+=
" jwcap"+(H?"Bottom":"Right"));b(Q(".jwrailgroup."+K[da]),{"min-width":H?x:S.width+O.width});ia.capSize=H?S.height+O.height:S.width+O.width;b(Q("."+Y.className),{left:H?x:S.width,right:H?x:O.width,top:H?S.height:x,bottom:H?O.height:x,height:H?"auto":x});2==da&&(F=ia);2==da&&!H?(Y=M(),Y.className="jwprogressOverflow",Y.appendChild(ia),E[P]=Y,ha.appendChild(Y)):(E[P]=ia,ha.appendChild(ia))}}if(D=y(C+ca+"Thumb",v,t,t,H))b(Q("."+D.className),{opacity:"time"==C?0:1,"margin-top":H?D.skin.height/-2:x}),
D.className+=" jwthumb",(H&&F?F:ha).appendChild(D);f?(H=new a.touch(ha),H.addEventListener(a.touchEvents.DRAG_START,Ta),H.addEventListener(a.touchEvents.DRAG,Na),H.addEventListener(a.touchEvents.DRAG_END,Na),H.addEventListener(a.touchEvents.TAP,U)):(F=C,"volume"==F&&!H&&(F+="H"),ha.addEventListener("mousedown",L(F),t));"time"==C&&!f&&(ha.addEventListener("mousemove",za,t),ha.addEventListener("mouseout",ua,t));C=E[C+"Rail"]=ha;ha=N(w+G);w=N(w+G);p.className="jwslider jw"+A;s&&p.appendChild(s);p.appendChild(C);
B&&(q&&(B.className+=" jwcapBottom"),p.appendChild(B));b(Q(".jw"+A+" .jwrail"),{left:q?x:ha.width,right:q?x:w.width,top:q?ha.height:x,bottom:q?w.height:x,width:q?z:x,height:q?"auto":x});E[A]=p;p.vertical=q;"time"==A?(pa=new h.overlay($+"_timetooltip",oa),bb=new h.thumbs($+"_thumb"),cb=k.createElement("div"),cb.className="jwoverlaytext",ob=k.createElement("div"),g=bb.element(),ob.appendChild(g),ob.appendChild(cb),pa.setContents(ob),sb=C,Oa(0),g=pa.element(),C.appendChild(g),E.timeSliderRail||b.style(E.time,
j),E.timeSliderThumb&&b.style(E.timeSliderThumb,{"margin-left":N("timeSliderThumb").width/-2}),g=N("timeSliderCue"),G={"z-index":1},g&&g.src?(y("timeSliderCue"),G["margin-left"]=g.width/-2):G.display=n,b(Q(".jwtimeSliderCue"),G),Ja(0),X(0),X(0),Ja(0)):0===A.indexOf("volume")&&(A=p,s="volume"+(q?"":"H"),B=q?"vertical":"horizontal",b(Q(".jw"+s+".jw"+B),{width:N(s+"Rail",q).width+(q?0:N(s+"Cap"+G).width+N(s+"RailCap"+G).width+N(s+"RailCap"+g).width+N(s+"Cap"+g).width),height:q?N(s+"Cap"+G).height+N(s+
"Rail").height+N(s+"RailCap"+G).height+N(s+"RailCap"+g).height+N(s+"Cap"+g).height:x}),A.className+=" jw"+B);g=p}p=g;break a}p=void 0}p&&("volume"==d.elements[I].name&&p.vertical?(Ha=new h.overlay($+"_volumeOverlay",oa),Ha.setContents(p)):e.appendChild(p))}}}function sa(){clearTimeout(tb);tb=setTimeout(Z.redraw,0)}function Pa(){1<J.jwGetPlaylist().length&&(!k.querySelector("#"+J.id+" .jwplaylist")||J.jwGetFullscreen())?(b.style(E.next,C),b.style(E.prev,C)):(b.style(E.next,j),b.style(E.prev,j))}function Ca(b,
c){ia||(ia=a.bounds(W));c.constrainX(ia,!0)}function Ja(a){E.timeSliderBuffer&&(a=Math.min(Math.max(0,a),1),b.style(E.timeSliderBuffer,{width:(100*a).toFixed(1)+"%",opacity:0<a?1:0}))}function Ba(a,c){if(E[a]){var d=E[a].vertical,e=a+("time"===a?"Slider":""),j=100*Math.min(Math.max(0,c),1)+"%",k=E[e+"Progress"],e=E[e+"Thumb"],f;k&&(f={},d?(f.height=j,f.bottom=0):f.width=j,"volume"!==a&&(f.opacity=0<c||ya?1:0),b.style(k,f));e&&(f={},d?f.top=0:f.left=j,b.style(e,f))}}function V(a){Ba("volume",a);Ba("volumeH",
a)}function X(a){Ba("time",a)}function N(a){var b="controlbar",c=a;0===a.indexOf("volume")&&(0===a.indexOf("volumeH")?c=a.replace("volumeH","volume"):b="tooltip");return(a=oa.getSkinElement(b,c))?a:{width:0,height:0,src:"",image:x,ready:t}}function ea(b){b=(new g.parsers.srt).parse(b.responseText,!0);if(a.typeOf(b)!==w)return fb("Invalid data");Z.addCues(b)}function fb(b){a.log("Cues failed to load: "+b)}var J,oa,ka=s("divider","divider"),Xa={margin:8,maxwidth:800,font:"Arial,sans-serif",fontsize:11,
fontcolor:15658734,fontweight:"bold",layout:{left:{position:"left",elements:[s("play",l),s("prev",l),s("next",l),s("elapsed",m)]},center:{position:"center",elements:[s("time",r),s("alt",m)]},right:{position:"right",elements:[s("duration",m),s("hd",l),s("cc",l),s("mute",l),s("volume",r),s("volumeH",r),s("fullscreen",l)]}}},la,Ga,E,xa,W,$,va,fa,Qa,ga,La,Ka,Ha,ia,sb,ab,pa,ob,bb,cb,ib,Ea,ma,jb,Da,na,tb,Wa=-1,ta=t,qb=t,ya=v,mb=0,lb=0,db=[],Ua,wa=t,Ma=new c.eventdispatcher,xb={play:"pause",mute:"unmute",
fullscreen:"normalscreen"},hb={play:t,mute:t,fullscreen:t},rb={play:function(){hb.play?J.jwPause():J.jwPlay()},mute:function(){var a=!hb.mute;J.jwSetMute(a);!a&&0===Ka&&J.jwSetVolume(20);K()},fullscreen:function(){J.jwSetFullscreen()},next:function(){J.jwPlaylistNext()},prev:function(){J.jwPlaylistPrev()},hd:kb,cc:ha},$a={time:function(a){J.jwSeek(Ua?Ua.position:a*va)},volume:function(a){V(a);0.1>a&&(a=0);0.9<a&&(a=1);J.jwSetVolume(100*a)}},gb={},pb=[],Z=this;a.extend(Z,Ma);Z.setText=function(a){b.block($);
var c=E.alt,d=E.time;E.timeSliderRail?b.style(d,a?j:q):b.style(d,j);c&&(b.style(c,a?q:j),c.innerHTML=a||"");sa()};var Fa={};Z.redraw=function(c){b.block($);c&&Z.visible&&Z.show(D);P();c=top!==window.self&&a.isMSIE();b.style(E.fullscreen,{display:ta||qb||c?n:""});b(Q(".jwvolumeH"),{display:ta||wa?"block":n});b(Q(".jwmute .jwoverlay"),{display:!ta&&!wa?"block":n});b.style(E.hd,{display:!ta&&!wa&&fa&&1<fa.length&&ma?"":n});b.style(E.cc,{display:!ta&&!wa&&ga&&1<ga.length&&na?"":n});Aa();b.unblock($);
if(Z.visible){c=N("capLeft");var d=N("capRight");c={left:Math.round(a.parseDimension(Fa.left.offsetWidth)+c.width),right:Math.round(a.parseDimension(Fa.right.offsetWidth)+d.width)};b.style(Fa.center,c)}};Z.audioMode=function(a){a!=ta&&(ta=a,sa())};Z.instreamMode=function(a){a!=wa&&(wa=a)};Z.hideFullscreen=function(a){a!=qb&&(qb=a,sa())};Z.element=function(){return W};Z.margin=function(){return parseInt(la.margin,10)};Z.height=function(){return xa};Z.show=function(c){if(!Z.visible||c){Z.visible=!0;
c={display:"inline-block"};var d=la.maxwidth|0;!ta&&d&&(W.parentNode&&a.isIETrident())&&(c.width=W.parentNode.clientWidth>d+(la.margin|0)?d:"");b.style(W,c);ia=a.bounds(W);W&&E.alt&&(W.parentNode&&320<=W.parentNode.clientWidth?b.style(pb,C):b.style(pb,j));b.block($);K();sa();clearTimeout(Wa);Wa=-1;Wa=setTimeout(function(){b.style(W,{opacity:1})},0)}};Z.showTemp=function(){this.visible||(W.style.opacity=0,W.style.display="inline-block")};Z.hideTemp=function(){this.visible||(W.style.display=n)};Z.addCues=
function(b){a.foreach(b,function(a,b){if(b.text){var c=b.begin,d=b.text;if(0<=c.toString().search(/^[\d\.]+%?$/)){var e=y("timeSliderCue"),j=E.timeSliderRail,k={position:c,text:d,element:e};e&&j&&(j.appendChild(e),e.addEventListener("mouseover",function(){Ua=k},!1),e.addEventListener("mouseout",function(){Ua=v},!1),db.push(k))}Aa()}})};Z.hide=function(){Z.visible&&(Z.visible=!1,b.style(W,{opacity:0}),clearTimeout(Wa),Wa=-1,Wa=setTimeout(function(){b.style(W,{display:n})},250))};E={};J=d;$=J.id+"_controlbar";
va=0;W=M();W.id=$;W.className="jwcontrolbar";oa=J.skin;Ga=oa.getComponentLayout("controlbar");Ga||(Ga=Xa.layout);a.clearCss(Q());b.block($+"build");P();var ub=y("capLeft"),vb=y("capRight"),wb=y("background",{position:"absolute",left:N("capLeft").width,right:N("capRight").width,"background-repeat":"repeat-x"},D);wb&&W.appendChild(wb);ub&&W.appendChild(ub);Va("left");Va("center");Va("right");W.appendChild(Fa.left);W.appendChild(Fa.center);W.appendChild(Fa.right);E.hd&&(ma=new h.menu("hd",$+"_hd",oa,
da),f?eb(ma,E.hd,Y,"hd"):ra(ma,E.hd,Y,ja),gb.hd=ma);E.cc&&(na=new h.menu("cc",$+"_cc",oa,Ra),f?eb(na,E.cc,qa,"cc"):ra(na,E.cc,qa,nb),gb.cc=na);E.mute&&(E.volume&&E.volume.vertical)&&(Ha=new h.overlay($+"_volumeoverlay",oa),Ha.setContents(E.volume),ra(Ha,E.mute,ba),gb.volume=Ha);b.style(Fa.right,{right:N("capRight").width});vb&&W.appendChild(vb);b.unblock($+"build");J.jwAddEventListener(c.JWPLAYER_MEDIA_TIME,A);J.jwAddEventListener(c.JWPLAYER_PLAYER_STATE,function(a){switch(a.newstate){case e.BUFFERING:case e.PLAYING:E.timeSliderThumb&&
b.style(E.timeSliderThumb,{opacity:1});S("play",D);break;case e.PAUSED:ya||S("play",t);break;case e.IDLE:S("play",t),E.timeSliderThumb&&b.style(E.timeSliderThumb,{opacity:0}),E.timeRail&&(E.timeRail.className="jwrail",setTimeout(function(){E.timeRail.className+=" jwsmooth"},100)),Ja(0),A({position:0,duration:0})}});J.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM,function(b){if(!wa){b=J.jwGetPlaylist()[b.index].tracks;var c=t,d=E.timeSliderRail;a.foreach(db,function(a,b){d.removeChild(b.element)});db.length=
0;if(a.typeOf(b)==w&&!f)for(var e=0;e<b.length;e++)if(!c&&(b[e].file&&b[e].kind&&"thumbnails"==b[e].kind.toLowerCase())&&(bb.load(b[e].file),c=D),b[e].file&&b[e].kind&&"chapters"==b[e].kind.toLowerCase()){var j=b[e].file;j?a.ajax(j,ea,fb,D):db.length=0}c||bb.load()}});J.jwAddEventListener(c.JWPLAYER_MEDIA_MUTE,K);J.jwAddEventListener(c.JWPLAYER_MEDIA_VOLUME,K);J.jwAddEventListener(c.JWPLAYER_MEDIA_BUFFER,function(a){Ja(a.bufferPercent/100)});J.jwAddEventListener(c.JWPLAYER_FULLSCREEN,function(a){S("fullscreen",
a.fullscreen);Pa();Z.visible&&Z.show(D)});J.jwAddEventListener(c.JWPLAYER_PLAYLIST_LOADED,I);J.jwAddEventListener(c.JWPLAYER_MEDIA_LEVELS,function(a){fa=a.levels;if(!wa&&fa&&1<fa.length&&ma){b.style(E.hd,C);ma.clearOptions();for(var c=0;c<fa.length;c++)ma.addOption(fa[c].label,c);G(a)}else b.style(E.hd,j);sa()});J.jwAddEventListener(c.JWPLAYER_MEDIA_LEVEL_CHANGED,G);J.jwAddEventListener(c.JWPLAYER_CAPTIONS_LIST,function(a){ga=a.tracks;if(!wa&&ga&&1<ga.length&&na){b.style(E.cc,C);na.clearOptions();
for(var c=0;c<ga.length;c++)na.addOption(ga[c].label,c);H(a)}else b.style(E.cc,j);sa()});J.jwAddEventListener(c.JWPLAYER_CAPTIONS_CHANGED,H);J.jwAddEventListener(c.JWPLAYER_RESIZE,function(){ia=a.bounds(W);0<ia.width&&Z.show(D)});f||(W.addEventListener("mouseover",function(){p.addEventListener("mousemove",O,t);p.addEventListener("mousedown",Ia,t)},!1),W.addEventListener("mouseout",function(){p.removeEventListener("mousemove",O);p.removeEventListener("mousedown",Ia);k.onselectstart=null},!1));setTimeout(K,
0);I();Z.visible=!1};b("span.jwcontrolbar",{position:"absolute",margin:"auto",opacity:0,display:n});b("span.jwcontrolbar span",{height:z});a.dragStyle("span.jwcontrolbar span",n);b("span.jwcontrolbar .jwgroup",{display:"inline"});b("span.jwcontrolbar span, span.jwcontrolbar .jwgroup button,span.jwcontrolbar .jwleft",{position:"relative","float":"left"});b("span.jwcontrolbar .jwright",{position:"relative","float":"right"});b("span.jwcontrolbar .jwcenter",{position:"absolute"});b("span.jwcontrolbar buttoncontainer,span.jwcontrolbar button",
{display:"inline-block",height:z,border:n,cursor:"pointer"});b("span.jwcontrolbar .jwcapRight,span.jwcontrolbar .jwtimeSliderCapRight,span.jwcontrolbar .jwvolumeCapRight",{right:0,position:"absolute"});b("span.jwcontrolbar .jwcapBottom",{bottom:0,position:"absolute"});b("span.jwcontrolbar .jwtime",{position:"absolute",height:z,width:z,left:0});b("span.jwcontrolbar .jwthumb",{position:"absolute",height:z,cursor:"pointer"});b("span.jwcontrolbar .jwrail",{position:"absolute",cursor:"pointer"});b("span.jwcontrolbar .jwrailgroup",
{position:"absolute",width:z});b("span.jwcontrolbar .jwrailgroup span",{position:"absolute"});b("span.jwcontrolbar .jwdivider+.jwdivider",{display:n});b("span.jwcontrolbar .jwtext",{padding:"0 5px","text-align":"center"});b("span.jwcontrolbar .jwalt",{display:n,overflow:"hidden"});b("span.jwcontrolbar .jwalt",{position:"absolute",left:0,right:0,"text-align":"left"},D);b("span.jwcontrolbar .jwoverlaytext",{padding:3,"text-align":"center"});b("span.jwcontrolbar .jwvertical *",{display:"block"});b("span.jwcontrolbar .jwvertical .jwvolumeProgress",
{height:"auto"},D);b("span.jwcontrolbar .jwprogressOverflow",{position:"absolute",overflow:"hidden"});d("span.jwcontrolbar","opacity .25s, background .25s, visibility .25s");d("span.jwcontrolbar button","opacity .25s, background .25s, visibility .25s");d("span.jwcontrolbar .jwtime .jwsmooth span","opacity .25s, background .25s, visibility .25s, width .25s linear, left .05s linear");d("span.jwcontrolbar .jwtoggling",n)})(window.jwplayer);
(function(g){var h=g.utils,a=g.events,c=a.state,e=g.playlist,b=!0,d=!1;g.html5.controller=function(f,u){function l(){return f.getVideo()}function m(a){x.sendEvent(a.type,a)}function r(c){z(b);switch(h.typeOf(c)){case "string":var d=new e.loader;d.addEventListener(a.JWPLAYER_PLAYLIST_LOADED,function(a){r(a.playlist)});d.addEventListener(a.JWPLAYER_ERROR,function(a){r([]);a.message="Could not load playlist: "+a.message;m(a)});d.load(c);break;case "object":case "array":v.setPlaylist(new g.playlist(c));
break;case "number":v.setItem(c)}}function n(e){h.exists(e)||(e=b);if(!e)return j();try{0<=k&&(r(k),k=-1);if(!B&&(B=b,x.sendEvent(a.JWPLAYER_MEDIA_BEFOREPLAY),B=d,A)){A=d;F=null;return}if(v.state==c.IDLE){if(0===v.playlist.length)return d;l().load(v.playlist[v.item])}else v.state==c.PAUSED&&l().play();return b}catch(f){x.sendEvent(a.JWPLAYER_ERROR,f),F=null}return d}function z(e){F=null;try{return v.state!=c.IDLE?l().stop():e||(s=b),B&&(A=b),b}catch(j){x.sendEvent(a.JWPLAYER_ERROR,j)}return d}function j(e){F=
null;h.exists(e)||(e=b);if(!e)return n();try{switch(v.state){case c.PLAYING:case c.BUFFERING:l().pause();break;default:B&&(A=b)}return b}catch(j){x.sendEvent(a.JWPLAYER_ERROR,j)}return d}function q(a){h.css.block(v.id+"_next");r(a);n();h.css.unblock(v.id+"_next")}function C(){q(v.item+1)}function w(){v.state==c.IDLE&&(s?s=d:(F=w,v.repeat?C():v.item==v.playlist.length-1?(k=0,z(b),setTimeout(function(){x.sendEvent(a.JWPLAYER_PLAYLIST_COMPLETE)},0)):C()))}function t(a){return function(){p?D(a,arguments):
K.push({method:a,arguments:arguments})}}function D(a,b){var c=[],d;for(d=0;d<b.length;d++)c.push(b[d]);a.apply(this,c)}var v=f,x=new a.eventdispatcher(v.id,v.config.debug),p=d,k=-1,B,F,s=d,A,K=[];h.extend(this,x);this.play=t(n);this.pause=t(j);this.seek=t(function(a){v.state!=c.PLAYING&&n(b);l().seek(a)});this.stop=function(){s=b;t(z)()};this.load=t(r);this.next=t(C);this.prev=t(function(){q(v.item-1)});this.item=t(q);this.setVolume=t(v.setVolume);this.setMute=t(v.setMute);this.setFullscreen=t(function(a){u.fullscreen(a)});
this.detachMedia=function(){try{return v.getVideo().detachMedia()}catch(a){return null}};this.attachMedia=function(a){try{v.getVideo().attachMedia(a),"function"==typeof F&&F()}catch(b){return null}};this.setCurrentQuality=t(function(a){l().setCurrentQuality(a)});this.getCurrentQuality=function(){return l()?l().getCurrentQuality():-1};this.getQualityLevels=function(){return l()?l().getQualityLevels():null};this.setCurrentCaptions=t(function(a){u.setCurrentCaptions(a)});this.getCurrentCaptions=function(){return u.getCurrentCaptions()};
this.getCaptionsList=function(){return u.getCaptionsList()};this.checkBeforePlay=function(){return B};this.playerReady=function(a){if(!p){u.completeSetup();x.sendEvent(a.type,a);g.utils.exists(window.jwplayer.playerReady)&&g.playerReady(a);v.addGlobalListener(m);u.addGlobalListener(m);x.sendEvent(g.events.JWPLAYER_PLAYLIST_LOADED,{playlist:g(v.id).getPlaylist()});x.sendEvent(g.events.JWPLAYER_PLAYLIST_ITEM,{index:v.item});r();v.autostart&&!h.isMobile()&&n();for(p=b;0<K.length;)a=K.shift(),D(a.method,
a.arguments)}};v.addEventListener(a.JWPLAYER_MEDIA_BUFFER_FULL,function(){l().play()});v.addEventListener(a.JWPLAYER_MEDIA_COMPLETE,function(){setTimeout(w,25)});v.addEventListener(a.JWPLAYER_MEDIA_ERROR,function(b){b=h.extend({},b);b.type=a.JWPLAYER_ERROR;x.sendEvent(b.type,b)})}})(jwplayer);
(function(g){g.html5.defaultskin=function(){this.text='\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"JW Player" name\x3d"Six" target\x3d"6.7" version\x3d"3.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"10"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xd2d2d2"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAN0lEQVR42mMQFRW/x2RiYqLI9O3bNwam////MzAxAAESARQCsf6jcmFiOLkIoxAGEGIBmSAHAQBWYyX2FoQvwgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAAtElEQVR42tWRQQrCMBBFvzDJRltcmDTURYO3kHoK71K8hGfxFh7DnS2atXSRpozbViwVRNS3frw/MMTM0NpYADsAOYAZOpDWZgXgEMfxwlqrpJSyJwAooihSWZalbduirms8CnmSJCqEgGcQgJkQQmAAwgivCcyjBf78xLs3/MUEM3/9WT9QuDVNE4gEDQlH564mTZdqSNh779dVVU6U0nMi6pXIuctJa7P13hdled4AmHaFO61WQkab+AHPAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAAtklEQVR42tWTMQrCUBBE35evhX2UYJGTeACx8y4eQvRW6jWSVBJ/BCXEFMmStRISNKQSdWCrnZ0ZdlnjedOQNnLgCGycS2KzWCy12S3LsozjOM2y7AKsbFEUrXFjzCgIglkUReR5vh6oKs2q6xoRwff9CTAf0AFr7RAYdxKe6CVY1R4C6Ict+hX6MvyHhap++1g/rSBSCVB0KpzPyRXYv2xSRCRN3a2qqhOwM2+e9w4cgK1zSfgA16hp3sNEmiwAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAABIklEQVR42u3VoWqFUBjAcWFpaWn11qULew8RmQg+wnwAH0NBQYPFcosXdooYTH7FZhIEDQoaDIJJVDQ5bTeIHO8UFjzwR9sPPcdPYhxH4siIEziB/YFpvU69T71NvRAbFw5wybLsJgjC93T/sRXCAa5VVcEwDBCG4c9WCAf4zPMc5sqyhL7vN0FYQJIk8FhRFNB1HRaEBURRBEvNT9W27SqEBQRBAGulaQpN0yxCWIDv+4BTHMdQ1/V8vWua9jUfcSzA8zzYkm3bd0mSGGzAdV3AyTAMxHEcv/kVOY4Da+m6jliW5Z/eZMuyYClVVRHDMPyfjylCCB6TZRnRNM3v9aFdTdOEOVEUEUVR/N6j4qIoyo0kSf6oYXfsuD5/mSfw/4BfzM60PxpdNhsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAABIklEQVR42u3VoWqFUBjAccPi4uIe4D7A4g3rIoIIvsRd8ymmgoIGi9liEYPJZDMJgm4o6MCJYBIVTd+03SByzqaw4IE/2n7oOX4SAEAcGXECJ7A/MK/Huee5p7kHAnOhAJc8zz94nn+f719wIRTg2jQNTNMEURR940IowGtRFLBU1zWM44gFIQFpmsJ9ZVnCMAxIEBIQxzGstTxV3/ebEBIQhiFslWUZdF23CiEBQRAASkmSQNu2y7XQNO22HHEkwPd9wMlxnC9Jkt6QAc/zACXDMCqO4wTsV+S6Lmyl63rFsqzw6022bRvWUlW1YhhG+PMxtSwL7pNluaJpWtjrQ7uapglLoihWFEUJe4+Ki6IonyRJCkcNu2PH9fnLPIH/B/wA5fzQF959z6UAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAmUlEQVR42u2WTQoCMQxGX8RlDzAX9FRezXXxAN30B+KmIDilmQHLKNNsCt8jPAg0RFSVkXVhcE3BCQTXVigiDlgAV6MAPOtLzVdcVcMmAbCo6v1DegMeG7kpcN77VbaDmwJKKd3ZWtwU5Jy7jRY/XpBS6jZa/HhBjLHbaPETjGi44O//QWisgrCDv5dg66r45rqWebZMwe8LXlPydRVUwjqdAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAn0lEQVR42u2VSwrFIAxFr9AFuIRuoftxz+0SOnLs1A/cN3H0WhILlVJqJkIO4ZCIcSKJnjGhcwzBVwXGGAtgBmBrKgDY64maP3CSobWDmeT6J10AbI1cFVjv/SF3get3UEoRZ6txVZBzFgs1/rwgpSQWavx5QYxRLNT4B0bUXfD6dxBOVkG4wFXB7pxbTtZ1K5cFda9vQucaH3/yENwYP2sBdLsTPIMJAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAA6UlEQVR42mP4//8/AzUww6hBowYNaoOAgAeIJaA0OmAGYn4gFgViTkIGqQDp/SAaiwHqJSUl6Q8ePFgMZMsRMsjg0aNHIIMM0A24cuXKmh8/fux/+fIlSF6XoEG3bt0CKbRHNuDbt2/7Hz9+vB8kB5U3IGjQ+fPn96enp5feuHFj5efPn/ffvn17P0gMGRNl0JEjR/YnJSWVbdmyZSWIjQ0TZdCuXbvgXgsNDc2YPXv2WpAYMibKoPXr12MEdkBAQMbEiRPXguSg8gQDW2X58uU4o9/X1zdj8uTJREU/dRLkaO4fNWhYGAQACIKTdMKw1gUAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAA6UlEQVR42mP4//8/AzUww6hBowYNaoOAQACIFaA0OmABYhEglgFiHkIGGfyHMAywGGBSUlLS9eDBg5tAtgYhgxwePXoEYjigG3DlypVnP378+P/y5UuQvA1Bg27dugVihCAb8O3bt/+PHz/+D5KDyjsQNOj8+fP/09PT59y4cePh58+f/9++ffs/SAwZE2XQkSNH/iclJc3dsmXLIxAbGybKoF27dsG9Fhoa2j179uznIDFkTJRB69evxwjsgICA7okTJz4HyUHlCQa2wfLly3FGv6+vb/fkyZNvERP91EmQo7l/1KBhYRAAuDSgTOE1ffsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAYAAADKO/UvAAAA6klEQVR42mP4//8/A6WYYdSQUUMGxBAg4ARiUSDmB2JmBkzAA8QSIBqfIXIPHjxYXFJSkg5kq2MxTAWobj+UxmmI7suXL/f/+PFj/5UrV9ZgMczg0aNHIEMM8BlicOvWrf0g/Pjx4/3fvn1DN8weJEfQkPPnz+9Hxrdv397/+fPn/Tdu3FiZnp5eChIjaMiRI0f2Y8NbtmxZmZSUVAZiEzRk165d+5Hx7Nmz14aGhmbAvAMSI2SI7vr16/eD8MSJE9cGBARkoAcsSI6QIXKTJ09e7Ovrm4EripcvX04wiilPbKO5eNSQQW8IAG8yOc7bkjJcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAYAAADKO/UvAAAA6klEQVR42mP4//8/A6WYYdSQUUMGxBAg4AFiGSAWAWIWBkwgAMQKIBqfIRoPHjy4WVJS0gVkm2AxzOA/RKEBPkNsXr58+f/Hjx//r1y58gyLYQ6PHj0CKXTAZ4jDrVu3/oPw48eP/3/79g3dsBCQHEFDzp8//x8Z3759+//nz5//37hx42F6evockBhBQ44cOfIfG96yZcujpKSkuSA2QUN27dr1HxnPnj37eWhoaDfMOyAxQobYrF+//j8IT5w48XlAQEA3esCC5AgZojF58uRbvr6+3biiePny5QSjmPLENpqLRw0Z9IYAAGB2RqagdTNIAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAFklEQVR42mP4//8/AzbMMCoxKjHcJAArFxoDYgoNvgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAFklEQVR42mP4//8/AzbMMCoxKjHcJAArFxoDYgoNvgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAM0lEQVR42pWNIRLAIADD0vrJwv9f2gkONJhcokJbDFyDZNbJwLYPhKWdkpaRzNL242X0A7ayDBvOWGKEAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAoUlEQVR42t3RTQrCMBCG4SwKgrhttaSkFAppS9Mk/VEPoTvBC7nyUIpnKq4/JwGDeANdPJt3MZMhDAD7xv4ixvH6SG5kfocL5wJlKVHXrQ+HLBNoGoW21R5Lks1dyhpdZwMXZ60tjOkDH40ZYO0YsDTlDzdvGLYBq6rmJESBvp8wjjvPPSnK8+JKoJTGNO3DFQsKZzeKdjw/z4vIkqx++o9eChh4OrGutekAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAqElEQVR42t3RTQrCMBCG4VkIgritWlpaCoW2oc1Pf9RD6E48kSsPpXim6vpzphAX3kAXz+ZNMiSEANA3+ukYBOuR3djhE6uqRp4XiKIEvHCZYl0bCKUaxPG0cCStHbyiUFitNneytoVnjJM4knM9PGs7iU/qui08mRuG0YP6fgfRtgOSJENZqhMNwx5NY5CmmbjylWbEM15yRGt75jD3z1yyhez4iz96A9GweD4LqeZmAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAALUlEQVR42mP+//8/A3NDQwOJxNy58/8zCwkJNyARwsJglgiIBSPevn3TSLrxAICJLIFssC4FAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAbElEQVR42mP8//8/AzpgHL6CMjJyvoyMDJlAIVuwoKysvA8TE9NCRkZGISCGqJSXV9wKFPQCC8AElZRUPgEFeVHMVFFR/QRUgSqoqqq+Dcj2RBFUU9PwBbIXALEQipOAEn5ACugkBlvGkREdAE2UZQboCcvbAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAaUlEQVR42t3QuxGAIBBFUfoA+S1oM1KudkUi5s8VwXEcKzC4yXlLggAg3on/oVK6KDUsUg7zjdZ6GOOgtc18kCp6H+Ac4Rx5WCsSRfR43CqGENEjCqXhiEfX8xgntDKXOu7c2uGnP/+FB8gXjGr6cT/xAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAALklEQVR42p3MsQ0AQAjDQCv7z8gakCo0LPDfnFyZJAh4J6oqZBt19zEzV7bhb792VRs5A8JlWAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAYklEQVR42mP8//8/AzpgHNaCvkCcCcS2MEGfb9++Lfz48aPQz58/ISpfv3699c2bN14o2s+dO/cJyOZFETx69Cim4N69e7cB2Z4oglu2bAHZvACIhVCctHbtWj90Jw3z6AAAdAV63jcCcQsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAZUlEQVR42t3QIQ7AIAyFYQ44boojQ1VisVgcggQzhn5ryraQ7QaIz/xJ85IqAOpLLRkb29n2xpQScs7ovVcOWmKMEY9SipMYQsDkkOi9x6RJJCJMxrm1FrfKxpAx5mSO6bU//3MBeArIus+/eXoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAABm0lEQVR42u2UTUsCURSGJ0kNV1MghjuhVhYEbSPoY5WbWhV90pd/SfwPulDc6c6vvYrjQl2kLdQ/IDhwe8/wTsQ04ZSbFg48Mtzzvsdzz71nNKWUtgjaMsF/SOB4VoAPrIIAWCMBrvmocX0k6Afr4BBcgRdyCQ4Y81P7zRwEO+CpUCjkJpPJ0DTNmTAejweyhtgjNcGvSWzzLkh2u11jNBqpXq+nDMOw6Pf7CkmUxERD7WcSKSki/9xqtYxOp6Pa7bYrEhONaMEmvVoIHGUymfxPRifZbDYPzzG9mg6ua7XawGuCer0+hOeGXi0snW42mzOvCbCNGTyv9Fp7+VWCRqMxheeZXuvntlKpeN5CtVodwHPH5ltlnKXTac9NFC08CXsL0oi4lFQsFo15ZtGw/LjdRDmKqBylXJJSqWTMMSepjdrH6GemGDiVhqZSqRz2+Y5um2jutFwuv8ka5+KEWt2+SPZV3mBgH1yABx6VcA/OGYtR6zoPOkvb5tDsEXnfYkx3mp3jHKIozCOO8F1nzHWc//5BWX6VF0/wATCN7PmY+qrmAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCue" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAfElEQVR42mP4//8/AyWYYdSAUQOGuQGiouJZQHwEirNIMgCkwcbG7klra/tvEAaxcRmCy4Aj1dV1v3Nz8/+DMIgNEiPJgLS0jN+ZmTn/QRjEBoodJckLRkYmT5KSUn8nJqb8BrGBYtmkBmI2yFYgPgTEmaMpcdSAUQPwYwAtmWpcwU8bfwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"hdButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABiElEQVR42u2Vu0oDQRSGF1SwiIVCspfZnb1rEcxFCOmNzdb2PoIvpCCxEyJYqdU+gbVtKmMeQavx/KMDg4I4GxACU/wcZjL/+ebMzNk4Qgjnv+VYqIVa6HpC2223Ii1IYgXBX5lAF0HARBjyxoIfeUygIo5TkSQZmUO5c8TvY70yzwskDGsg+DFvBE3TXGRZoYw7jIWPnCcCEWM1D9V1vTcajSvX9edRFEsf/MZQGBWU5Pg+eyAJRIzVPOmS9ESw8XB4dIKKda8RNM9LKZW81xtMut3DM0QdSpB7xiJBVd5Mp9dbNPeme42gRVFKqeR0h+cEuEDUoag8ijhO4I7GG6R33WsI3ZfSK8JDQdShtIkrqvKZTgFtNsHx6l4jaFkeSOkVcR7/uFNavz2b3e7Sho5pPMdj072NoLgv1SK4p99aBi8XFTaCdjreK3oNRtwNXiKASIioXifaAus+2yuXvykg5inP8s/Qfn9wCsMqn0HyvyCPyQd/k9RSzd9Qra889q/NQi10DaEfbVCWtJniLegAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABwklEQVR4nO2Uz0oCURTGXZigT+Br+ALiKyi4UAMJDAaEFkGLVrkM3BjkQiSFGElE0IUIIgrCLERUEkFJyD+ghLS1aVWn88kEg7i4KcwiRvhxzvngOx/cuV4LEVmMxvBAM9QM/Weh/DthnIyLcTOeA3Brfuw5EQl1xmKx+HK5VDebDR0K/NiDfSKhrul0qq5WKxgPBn7swT6RUPdisaDZbHY02IN9IqGeyWRCeli7y+fza/SomDX9mjmz2+2Xfr//UVEUdY/XIxQ6HA5JD2vnlUplgh4Vs6aHa7Wa0u/33wKBwK3X633Y4xUL7Xa7pIe1QCQSuZEk6QkVs6ZHi8XifDAYULlcHlmt1mi73f7a8YqF8jGRHtZOE4mEnM1mn1Exa3o0l8vN0cuy/GKz2S5ardb3jlcstNFokB7WpEKh8NrpdAgVs6aHM5mMwto7H+99KBSSm83mrlcstFqtkh5cnGQyuUaPilnTtxfJ4XBc+Xw+mUM+93iFQt2lUon0jMdjqtfr2x4V868ORqMR9Xo9XDLa9Yr+ZVz87VQ+MjoW7BF9HJz8beLpdFrlS0KHkkqlPoLBoPAzaPyDbwRmqBlqhv6JH8CLXqCC55PmAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"ccButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAB10lEQVR42u1Vu0oDQRQNmEZQSGHMYzebZHcTg0IeFlZaCIpGRI2itb+hEOMnWEasbGLlo/EHJDY21jYWvhURH5UijudMEomI4CQgBLY4zMxhzj1z78zddQkhXP8Nl2PqmDqmrWnq9fqywBUgmgD1WRXTq2BQE7puNAzqGUfFVITDURGJmBKhUFj4/UGZQXe3X2ha6Afv8wW+eIJ68kqm0aglTNMWhhGh0XUymV4olba8udxsn6bpOzSA0Vk6nZnZ3t7pmpycSoHfJ08d9cqmFBKBgCYQeBrmE+DPYbRRLK57cJD7TKZ/FNnOgb8Av1YorHaBf64dWNnUsmISmL/l8yvtCHZQd1cPWN9ibxvGI/LgPsgD73VaNVPbjklg/gq4cXdlwwjL4CjjLjI74V6Mx1X+nWXHIR4ty65pVU3jEtWHMpxI9M4j4A2y2qyW8Qn8QDyeWMT8DuUvLi0tezF/YZbUKpvGYj0SfEi8S4zZcvnQMzY2HsVaPiSMpzAYIT84OGRjvcdS17QNm/LELF99y+h65YV+bxm/7E/ub8iULcJeq4lZLtO0ZBsQlTuL/8pTQz2v48+mqVR6joJmPoPQXzKOygffDXQAnU2goxrH+bU5po5pC5p+AoMCobNnBGFcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAACIklEQVR42u2VO4saURiGbVZERC39AVZ2U9jK/gERCxG1sdIiAZukCWSxs1hZlE0jLtEQb9FCUfF+v4DXFTR4KxSDE9ikSDM72WTRk3OGGIatDgpLihGewo953+c4Z+bIAwDwnhseJ+WknPQkKfycQWQQAqKCnB+B6m8e9ZzhSGV2u/1yu93SFEWBY0F51IP6cKTEarWiSZJEwaNBedSD+nCkqs1mA9br9cmgHtSHIz1fLpeATa/X+2U2m+NisfiCIAhXIBD4gubtdvunyWSKiUSit0ql8joSiZBPs6gPSzqZTAAbg8HwyWKxvJ/P51Q4HP4sFAo9nU7nQavV+m0228fFYkH5/f5biURy0+12d+wstnQwGIADsGQPJa+LxSI5Go3AdDoFUPLYaDTQfr2s1Wp3hzlc1GO/3wfsPLa01WqBA/V6fS8QCF7FYrGv6Huz2QRut/sulUr9gNe+SCQS39EcLmLvcrm+5fP5HTuPLS2Xy+BApVIBer0+BPf0QzKZvHc6nRN4G68LhcJvtVp9Y7VaI3ABtMPhuJVKpe+y2eyOnceWZjIZwKZarT7odLoon89/I5fLnaFQaJvL5dCCaI1GE0ZzhUJxBR8kZs7O4kpV8XgcsIG/hNmf2WzGPBylUomZp9NpMBwOmfl4PP43Z4P7yhA+n4+ORqPgVFAP7uEgg+/epdfrpYPBIDgWj8dzbzQasY/B5z/wuT9xTspJ/zvpH7Snd5Nr6YMeAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAACPUlEQVR42mP4//8/Az0ww6hFoxYNvEVkAiYgZgZiRpgALSxijIuL4zt58qQNkM0Fs4xci0CaWYCYHUoji7G4u7sLv337dtaKFStsoWrIsghkILu1tbXCixcvmoBsXqg4C9AXphs3bjQEsvnKysr0gZYtlJaWFgUFJakWgcKet7Oz0/bdu3crX758uR/IF4f6hHXmzJna79+/X+Dl5SUD5AsdP368+uDBgwEghxFjERtIExBLALHMjh070r58+bL7zp07+69evQqySPbChQu2ycnJIAsFNm3alHDt2rUcEHvq1KnWt2/fbgX5kBiLhID0fhgGBsf+ixcv7j9//jwYA+Xljh49Gvb48eN6kOGenp7yQEfMA7KFOTk5xYCWLgKxibFI4sSJE/txYaC8FCj4rly5shhkIAifOnVqAYwNjLcFRFsEDOf9uDBQXpqDg0Pi8OHDMItEgGy4RTA2UUG3a9eu/bgwUF7+5s2b8evXr68EBV1kZKTSvn375oIMFxQUFNu/f/9CaPCTlhgaGxtTgEl495YtW/aDMCgxbNiwwdDU1BSkRgAYfxmLFy9OA7HXrFljv27duiZiEwN68uaJjo62Ahq2EmgILHmDihtWIN8QaNE8PT09SZDjLl++3DBjxgwvYpM31gyroaEhDzSkHjnDbtu2Ta+qqkoT5IMJEyaYHjp0aC4w5QmTk2EJFUEgn7EkJiaKAUuN+SUlJZaUFEEEC1UzMzOurq4uM2oUqgQtI7maGK3KRy0aPhYBAK/+y9iyNfpJAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAACW0lEQVR42mP4//8/Az0ww6hFoxYNvEVkAlYg5gBiFpgALSxitLOzk122bFkikC0NxMyUWMQIxNxALALEXFAxFiibS1tbW+vx48fX6urqcqFqyLII5EIRJSUlr8uXL+8HslWg4pwrVqwI7ezsDAGyVf38/OKBlj3k5+c3BgUlqRaxAbFiXFxc+YMHD96/fPkSpMAOZAkQ8+Xm5gY+e/bsvo6OjgOQr79p06btc+bMaQE5jBiLBIDYAIhBmn0mTJiw9uPHj3/u3Lnz/+rVqyAFfkADE4DxYghka02dOnXmnj17lgLZOvn5+VnHjx8/BGSrEWORwX8k8Pbt2/8XL178f/78eTAGygesXLmy/cKFCzuBbE1g/HhcunTpLpBtyMrKanHu3LmHIDYxFjmcOHHiPy4MlHcDYtszZ848AdJGQGxy8ODBB0AaFDfGBw4cALOJsgio8T8uDJR3Z2Fhsd+9ezfIIlDwmQLZcItgbKKCbteuXf9xYaB84L59+ybOnz9/EyjozMzMvLds2QIOOk5OTqtt27Y9hAY/aYkhNTV19fr16/8ADfsPwkAx3/7+/kAFBQUNIFt748aNi7u7u+eDEkNTU1M+0AH7QMmdnOStYGtrWzJr1qz369atAymwBWJ2IOYFGhwBjLc7UlJS1iDH7d+/f29FRUUtkC1MboYVFhMT8wS6fDeQrQzLsMCk7RMdHe0F8kFKSkrazp077wBTngE5GRZfEcQMLUg5gT7Wu3fv3t2wsLB0kKNoVqjKy8tLFhQURALZUpQWqoQACzTemImuJkar8lGLho9FAFfb1pYP/NUtAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAA2klEQVR42mP4//8/Az0ww6hFoxaNWkR9i3AARiBmAWJ2EE0ri0CWsFtbWys8e/asCcjmpYVFTCCD29rabN69e7cSiPcD+WLUsogNiIWAWAKIZbZv357y9evX3Y8ePdp/584dkEUS1LJICEjvh2GQL65evbr/8uXLYExNiyROnjy5HxemqkUHDhzYjwtTNei2bdu2HxempkUoiaG6ujpl1apVO9euXbsfhKlpEXry5gkPD7eaM2fOymXLllE1eWPNsMrKynITJ06sp1WGpV0RNFpNjFo0atHgtQgANKFe0TzIhR0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAA2klEQVR42mP4//8/Az0ww6hFoxaNWkR9i3AARiDmBmIRIOailUXMIAuUlJS8Ll26tBfIVqaFRWxArBgTE1P64MGD9+/evQMpsKKWRQJAbADEDkDs09/fv/rTp09/Hj169P/OnTsgBQ7UssjgPxIA+eLq1av/L1++DMbUtMjh5MmT/3Fhqlp04MCB/7gwVYNu27Zt/3FhalqEkhgSExNXLV++/M/atWv/gzA1LUJP3grW1tbFkyZNer9s2TKQAktaZlhhIPBoaWnZTasMS7siaLSaGLVo1KLBaxEAvQpqyzzc7aAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAABX0lEQVR42u2UQYuCQBTHFTxJUJ0LJWiPQp/Dm126+x3yLi3YKU/dO+ilgx2iyETesXuelESNuvcN3HkwLh6WRXZYlgUHfoyg/ObN/43DlWXJ/QZcK27Ffyj+ZvAEkSATFMKEMiZ0mMSz2Ux+PB4O+Q7qoJy14p4kSdPL5eKTBaACK2cRCxjDarVa3O93yLLsE1Zxd7PZzF+vFyRJAnEcAxk+PmPmLOK+53lWFEVwvV7BMIz34XA4DcPQwZ00EfM1cPtdzBY7T3hbr9eWaZoGPR09VVVxFpuIRU3TZCqTcfun08lCKZX36TuhXkQTsVwUhTMajaa2bS+ezyekaQrn89mi0i9HE7FCjhPcbjcfu388HuFwOMByuZzTWH4snux2OwiCAHAmDQNd1xc0U4FJvN1uoYI0yx8MBhrNlWcRj13XhYr9fg95njv4O7OKO/RiqS4ZhcYgMonbi74V/0PxB6RCFmvPDfJxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAABaklEQVR42u2UIWzCQBSGAYFsEGwISBNkp5hHoHFV9dXD1tehiqpjSQ0GwS2hNE0bUokHBYUUmtbXVb7dS66IZVkaLsuypJd86aXiu3f/u7saANR+g1olrsR/KP5h1CkCRaIMKSPGgNLiETcURZGSJAnhy0A5b8XPoihOdrtdTheAAqycR9zEGAzDIHEcQxRFd3jFbcuy5lmWwel0guPxCEEQ5DjHzHnEndVqZR8OB9jv96Bp2kev15tst9sQd1JGjFk22Be338ZssfOUV9M0bV3X3+n8Bf+Px2M8JUIZsSDLssRkEm7fdV0bpUzeoTyxRe9FlBFLt9st7Pf7k9lsRtI0hcvlAp7n2Uz67SgjHtLjBOfzOcfuO44Dm80GptPpnMXysHhECAHf9wG/tGGgqiphN67JJV4ul1BAm5V3u903lnmdRzxYLBZQsF6v4Xq9hnidWaMeFrfYw1I8MkMWg8BVcfXQV+J/KP4EGwslGEtzWUAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAABX0lEQVR42u3VMYvCMBQHcPXw1K3oKfclzqGlU7+MWye3c3Lph+gmdHGuW8WpGUrrarEIrlZEBKEtdPbegxeQG3pHglsDf0hJ+6N5adLG4/FovCKNGq7havgfrfmUFqQD6ULecFAGbs/n8w/ClCAIJofD4Rv6A8RlYCXLsoVhGOP1em2WZekXRcEAn8FYTwYe3W43dr/fXUTP5zOD+JvNZoJlkYE/Ebter4yjy+XSxJlgzaXgNE0ZT5Ikrq7rX1TzpgzcP51OjOdyuTCsuWVZQ1n4HXF8c8qIytD+C27STQo9xIE+oZWtEsZp5Xm+gGv2HMLFYVwITdPGURS5sDiMh95cGMZtqnieZx6PR3+/3zMeWbiD2xQ2gB/HMYP4cO1in2ouDPe22+1st9sxiG/btqmq6jgMwwUtqDCMp9RgtVrNHMeZENadTqdD+lqEYY736Ehs/ToqxeD611TDr4V/ALfMb7vGw5DiAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAABbklEQVR42u3VMauCUBQH8GqIN8UbImlocHSrPeR9haYWV7fX6NRniIbCqUDQwRpycVC/hFMNXSKzoD0Cx/PugeMbGnwPL21e+KOg/jj36L3WAKD2jtQquIKL4X+MOk+Djk2eNk+H5wMvisCt0WikEKZYlrUKgsDn5wPERWDler0yWZYn8/ncez6f8Hg8IIoixCUReHi/3+F0OmUIJkkC5/MZTNNcYVtE4C/GGFwuF8Dj8XiE6XTq4Uyw50Lwfr+HPLwFWa/X+6ae10XgfhzHkOdwOECapmw8HmPFDRH4E3GsnDKkNrT+qrhONyn0UA70CS0cRXADp3W73Ri8DMJLw1hxp9vtTtbrdeb7PuShykvDuEyV2WzmhWEIu93uN6JwG5cpXwCw3W7BdV1YLpfZZrMB6nlpWOKw7zgO2LYNmqZ5kiRNFosFoxdaGsZdamAYhq/r+oqwjqqq+SdVGs5xibbE5stWWQ6ufk0V/F74Bzh6cDMaFwHFAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAWElEQVR42u3VsQ3AIBBDUW4ASpQGIRS4sP+EzgzpYun/CV5lh6TiUAAFChQoUKD/grZ2WUij9+EBnfP2gK6VHtC9baCPBzTzeEBt5klS5ZmAAgUKFCjQr71HYkzTWoeyuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAgUlEQVR42tXQQQqDMBAF0MFdwa02xBDTSWK3dW+X9rYt9GTV9gDfmUDBK7h4kPn5kCEEgPboOEHTnFUWT7HqcBUfYyyc86C2NS9rHfr+ghAY2lj1wJwQYy6NL3NESrmgrnNv74MMQ0HTdL9Ja/mH+nY1z49Rm3LxK3toKE6iPs4XboLWK4v24Kf0AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAgUlEQVR42tWQTQrCMBCFB3dCt60hDWmcJHWr+7qst1XwZCp1/3wjCF6hiw/m/cAMIwDkH1mP0ba7F7mS+jVCiHDOg8aDHCQlxTDs4X1A17mb5FyhWmABG4uUUmGoZmu8aYwwYkzo+3CXn2D6nKbzUTgslszz5cS1GzumIVsT63rhB+kPMQcishPoAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAASElEQVR42u3UsQnAQAwEwRe4/wLVh5TqWzDGiWC2guGCi5k5GwpQUFBQUFDQr9AV0sjMFdCnqg7on9DutqgfBQUFBQUFBX3bBU4WWutcf3kcAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAATklEQVR42mP8//8/AzJgHB4CfUCcDBb4/fv3hDdv3uR/+/YNouLy5csf//79ywfXcvTo0Y9ANkJg9+7dE4HsPBRDN2zYMAFIJTEOoxADAG38dDtrd5P1AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAT0lEQVR42t3QIQ6AMAxG4d5fkHGS+un6JtXV84Cr+TfKQuAIID7z5CMA9ETfDtuw3MHd0VpDRJQMqoqTmR0ZRATTFWqtmNYMzLwP5SeDXjqg+Gveu5kMqgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferrotation" value\x3d"90"/\x3e\x3csetting name\x3d"bufferinterval" value\x3d"125"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAZUlEQVR42u2VwQ3AMAgDebBClEUYt8NV+XUBvnQKq0UcC1jYZ9nX2pcJzyNiSwUy06QCJj6vMvUH1dwiBEZgSg+gCIv6Y0rIAygi5D8UjUUjA/aAyZwwOPIP2mMKRd9bdM79KAVee0AqrmZ58iQAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"backgroundOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAZklEQVR42u2VsQ3AQAgDKVjhlS5TsH+dMV4MQUumsBL0xwIW9ln2ta7HhOcRcUsFqsqkAiY+7zb1Bz3cIgSOwJQeQBEWzceUkA+giJD/UDQWjQzYAybzhMGRfzAeUyj63qLMnUqBF2JaKtp629puAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA7ElEQVR42u3XvQqDMBQFYCPYWLWIiNFFUePvUju2e/sA9Vnsmzj2WbXXQktxkWgoIjlwudtH7pDhoL7vpSGEeBWsG0wEgyXGoAEC5G5ZVk0I0XRdV2RZRsyQ47hHQB6+75td173hzytZoYbS+IyxynzOGGrzvAjmnDOGnmVZutLCCOjfUFGsDyoENAHBp90ulK8MyjIBTUMZHyhNBTQFJUkqoAmI0mSrUBxzg+jKoChaHxTzgUJuUMgNirhAbRCEAYIshRrX9S6qut8thSpN0xvbts0lxeZb/ACrDeOgYYyVOWeinyp6gnWdW0Vft69cndg2ea8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capLeftOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA50lEQVR42mP8//8/AwiIiUnYAKlIINYCYk4GEgEL1JAMQUHBTDExMV5ubm42JiAg2SCQS0CGyMrKCv/794/p58+fDDBXkuqiSCEhQZ4/f/6Q7Ap0gzRZWNjYyXAEhkFcTEyMQNdQZhITA5XAqEFEpmxKo576LqI0DY3G2pD22qCK/mEc2IMv1kYDm+gwGi0hR2YYUS2LjBa1dC/YqOai/4PMa9/+/fv/j5GRkYnSWLv+8+ePX9SI/uWfgeDfv7//IF4kDzO9evXiyLdvX6e/BYLv33/8AHoTXKqQihmRuqK2QCqC3K4oAL0UgwtgxUxZAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA8klEQVR42u1XQQ6CQAwEUlfjTRLAC4k/8MIX/IDv8w16l1foA9RwUjhw2JW4IWFt9QPAokHcJk2zPUw6nWyTAc8LNlbzkJhnzH2aXo/UgCiKgqYoVVUpIUSQZdnS9+dbBNtBURSNx7ExGGPjMAwZPtcIdoIWtCyl1CtxMtt1Z9M8z1eAb60AYCMsC5xID8lxbBvLBKyOwgDVANKV/xPUlFHtB1UbrPyDXnbfVDPLrrMjcyH/eEcdfhFzar932DqbqHfy66qm3p9Vaqsm5aMk76ZFjXwb55x8WtyKGtGRUpZCcLR7dzJ+B0iSy03DisYEQo0nc8B4p9SUlywAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capRightOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA7klEQVR42u1XMQ6CMBSF5qdGEwdJQBfY3Rm9iEfwRHoDL8LgAYyzYTIwMFCrOFBfPQFQNKh9yU/TDi///Zf+5JHvzw9Oe9xQJ9Q+yy6JfqA4jqO2LDUghIjyPF8FwWILsh1JKVu347ou45yPwzAc4boB2ZE6yHKUUq9CY8zzZtOiKNaEuxGIOMexREdmTIy5DMeEnJ5giRoQmdr/DmnKuvaFrv2s/T897KG5ZofdZEZ2Q/7xjHr8InbVfm6x9dbR4Ow3dQ1/tdaxy9i1qro/dHYzkqZzWwnoANhJGuSoChCiLKW86uCXUJqe0z6i6BMdqXhIR7IE5AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAABTElEQVR42u3WPUtCURzH8Xt92HRwCJokNAOJqKVcitBF0pr0FfRAay+gqDFobXaoKXsD6SY4Nbk7CA4OUa/h9jvwjy6XfDjdw+UIP+EzXfR+z/3fc9DxPM+xicMgBjGIQQxiEIPsC6rAGD6gYUPQ0Pv9fIIbVVAcknOCvqIKOoaBqP8xshFMoBm45soilJjJoHd5EkpfY8UJX1DSZFDPF9S1IagEHXiDXY0gV6ISpkfGg3EpgnbgCdpwYOBmKSiI1H+CWvISK69hDzzYgKJYDxvUtiFoG57hBfYNjCwddmTcZUsdtAW3cA15jRtk4BDKsGIy6B4exY1GkIo5EVVTQWq7P/iC7jT/3v4EHS1ydCz6w3sSpZ7UZuBaDi5EcJyrElKDrOmXetrqzuBKXE75XizKXXbqCzq3YdtnJUpZ48HIIAYxiEEMYhCDZvsG/QUNjWGQyWIAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"bufferIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAABTElEQVR42u3WPUtCURzH8Xt92HRwCJokNAOJqKVcitBF0pr0FfRAay+gqDFobXaoKXsD6SY4Nbk7CA4OUa/h9jvwjy6XfDjdw+UIP+EzXfR+z/3fc9DxPM+xicMgBjGIQQxiEIPsC6rAGD6gYUPQ0Pv9fIIbVVAcknOCvqIKOoaBqP8xshFMoBm45soilJjJoHd5EkpfY8UJX1DSZFDPF9S1IagEHXiDXY0gV6ISpkfGg3EpgnbgCdpwYOBmKSiI1H+CWvISK69hDzzYgKJYDxvUtiFoG57hBfYNjCwddmTcZUsdtAW3cA15jRtk4BDKsGIy6B4exY1GkIo5EVVTQWq7P/iC7jT/3v4EHS1ydCz6w3sSpZ7UZuBaDi5EcJyrElKDrOmXetrqzuBKXE75XizKXXbqCzq3YdtnJUpZ48HIIAYxiEEMYhCDZvsG/QUNjWGQyWIAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAACs0lEQVR42u2XTWsaURSGbWtKqbQULJiGbrppN666K3EhNF11IYhZJnSrCO0P6MKG/gEX7SKbiKKCEUQEC4pCIKCoqPUThJDqSg1C6CoQwu15B0fMdBzHkDEhXOGB8dxz7zzOdeZVHWNMd5vQcSEuxIW4EBfiQndJ6IqvFeLpmJXbILS6u7v7FeD4poUeGY3G991u97TX652aTKYN1G5K6D7xyufzJfv9PgN7e3u/UMPYTQg9sVqtnwaDwTldHQZwjBrGli30gDBns9kmbRc7Pj4WwDFqGEPPMoWMTqfzG10RdnR0dAnU3G73DnqWJfRQr9e/q9Vqw06nw+TAGHrQq7XQPeKl1+sNY4tarZaAzWbzA/E9xtCDXszRUuix2Wy20wnP6vU6E6H6RzBdQw96qW7QSgi3+etYLJZrNBqsUqlMoLoVTNfQE4/H81R/s8hjYBGhZ5ubm5/pk1+USiU2jSgkraMXczD3uoWQV29zudyfQqHA8vn8JUQhaR29mIO5anNOrdCqx+P50Ww22eHh4X+IQnJjmENzf6rNOTVCyKsNunv+HhwcMDlEoVnjmLu2tvZBTc7NE5rkFV16lslkZBGFZo1jrtqcmyck5FW73T5PpVJsFuJtr9SDNdTknJKQkFfpdLqJBZPJ5Ey2t7f9W1tbfqUerIG1xjmnv4qQ0eVy7ZTLZZZIJBQZjUYC8/qwFuXcd1r7+aJCQl4Vi8UhPQjZdUKPAsWckxOa5BX9lGDRaHQuFotlH6jpxZpKOScnJORVtVo9i0QiTA12u32fiKjtx9qzck4qNMkrXN5wOKyK4XDITk5OVPePt08256RCQl7RPl8Eg0GmJfT9vHA4HF+kOScVevGbXqFQiAUCAU2BFM6FcyoJGbBlxLr49NWQ9fG5DPy/PRfiQlyIC3EhLqQh/wBHF7waCbYO0QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAACs0lEQVR42u2XTWsaURSGbWtKqbQULJiGbrppN666K3EhNF11IYhZJnSrCO0P6MKG/gEX7SKbiKKCEUQEC4pCIKCoqPUThJDqSg1C6CoQwu15B0fMdBzHkDEhXOGB8dxz7zzOdeZVHWNMd5vQcSEuxIW4EBfiQndJ6IqvFeLpmJXbILS6u7v7FeD4poUeGY3G991u97TX652aTKYN1G5K6D7xyufzJfv9PgN7e3u/UMPYTQg9sVqtnwaDwTldHQZwjBrGli30gDBns9kmbRc7Pj4WwDFqGEPPMoWMTqfzG10RdnR0dAnU3G73DnqWJfRQr9e/q9Vqw06nw+TAGHrQq7XQPeKl1+sNY4tarZaAzWbzA/E9xtCDXszRUuix2Wy20wnP6vU6E6H6RzBdQw96qW7QSgi3+etYLJZrNBqsUqlMoLoVTNfQE4/H81R/s8hjYBGhZ5ubm5/pk1+USiU2jSgkraMXczD3uoWQV29zudyfQqHA8vn8JUQhaR29mIO5anNOrdCqx+P50Ww22eHh4X+IQnJjmENzf6rNOTVCyKsNunv+HhwcMDlEoVnjmLu2tvZBTc7NE5rkFV16lslkZBGFZo1jrtqcmyck5FW73T5PpVJsFuJtr9SDNdTknJKQkFfpdLqJBZPJ5Ey2t7f9W1tbfqUerIG1xjmnv4qQ0eVy7ZTLZZZIJBQZjUYC8/qwFuXcd1r7+aJCQl4Vi8UhPQjZdUKPAsWckxOa5BX9lGDRaHQuFotlH6jpxZpKOScnJORVtVo9i0QiTA12u32fiKjtx9qzck4qNMkrXN5wOKyK4XDITk5OVPePt08256RCQl7RPl8Eg0GmJfT9vHA4HF+kOScVevGbXqFQiAUCAU2BFM6FcyoJGbBlxLr49NWQ9fG5DPy/PRfiQlyIC3EhLqQh/wBHF7waCbYO0QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAABzElEQVR42u3XTYtBURjA8VuzmdWsZmk7GzWfxL1IJMs5n8GXkISFzCQz5pSUlMUjC2WhLCyUBclLXkIkNt5ZmXt3FpLn3nPRdE796y5/dc+rcDwehUdK4CAO4iAO4iAO+o8geTzLvcq9yD0JOg0MyNDv9z/dbveH/P2mFwwDMs7nczgcDlCr1X71gmFA76PRCJRmsxns93tdYCjQYDCA06bTKXMYCtTr9eBck8kEdrsdExgK1Ol04FLj8VgzDAVqtVpwTcPhELbbrSoYClSv1wGTvE3AZrNBwVCgarUKaup2u7Ber6+CoUCVSgW01G63YbVaXYShQOVyGVjUbDZhuVyehaFApVIJWKbMs8ViAY1G4zsUConKeYkCFYtF0KNMJvPj8/kkNKhQKADLYrEYdblcRPUvy+fzwKJoNEqdTifRPKlzuRxoKRKJUIfDQZgt+2w2C2oKh8PUbrcT5hsjIIe8cqjNZiO6HR3pdBquKRgMUqvVSnQ/XFOpFFzK7/dTi8VCbnb9SCaTcC55D6Fms5nc/IKWSCTgNK/XSyVJIve6whrj8TgoeTweKooiufcl3xAIBL5MJhN5lGfQYz0U+duegziIgziIgzhIfX+1FIqPwZcb/gAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAAByklEQVR42u3XuWoCQRzHcYuUKVPmAXyAlBbpPRFFfIek8yXMIGohFiLYiCCChWIhWAgWFoKFIh54RGUH0cZbq192OwsR/+uuSpiBL2z5gZ3TAMDwTBkESIAESIAESID+I0ger3Lvcm9yLwadBgVkHI1GHZ/P9yN/f+gFo4BMi8UCx+MRzWZT0gtGAX1Op1MozedzHA4HXWAk0Hg8xmmz2UxzGAk0HA5xLs459vu9JjASqN/v41KSJN0MI4G63S6uaTKZYLfbqYKRQK1WC5TkbQLb7ZYEI4EajQbUNBgMsNlsroKRQPV6HbfU6/WwXq8vwkigWq0GLep0OlitVmdhJFC1WoWWKfNsuVyi3W7/RiKRL+W8JIEqlQr0KJ/PjwOBwDcZVC6XoWWJRIJ7vV6m+peVSiVoUTwe5x6Ph908qYvFIm4pFotxt9vNNFv2hUIBaopGo9zlcjHNN8ZcLgdK8srhTqeT6XZ0ZLNZXFM4HOYOh4PpfrhmMhlcKhgMcrvdzu52/Uin0ziXvIdwm83G7n5BS6VSOI0xxq1WK3vUFdaUTCah5Pf7ucViYY++5BtDoVDXbDazZ3kGPddDUbztBUiABEiABEiA1PcHSCzm64IZEhcAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAAEwUlEQVR42u1YW0icRxR2o6k2pmyMa0NJjRrRtWgp3rA00ifJpuqqL1FEpGLxQQVJIaUVgnZViqIglHh5UHej4mXpqruj4v2CFwTxLgjiFRUUUby8KCL2fMv8QYKa/Lsb0sL+8OHvzJxvvn/OmTln1ubi4sLmvwQbqyCrIKsgqyCroP+jIBMeB8J9wheEWx9q9DEFPVxeXi5JSUmJo3c3wh2C5FMK+mZ/f5+dnJywoaGhsvDw8J8gkq+c5FMI+nZra4sBXJiBMVYUEhLyI/U9IHx2lTBLCZLwL5cR3AlygnJjY4MJ2NzcZAcHB+zo6Ki5pqYmx83NLYjGOBPsLClIwmPDNTIyUlFXV6eanp5W7+7u6k5PTw3r6+vsXUDc4eEh29nZ+ae0tPSlo6PjY75aZgvCl8mUSuXT4eHhcgjACmxvbxsnXVtbY6urq9cCY46Pj9n4+Hgm8dw1V9BtBGhubm46uaAFIpaWlkRhcHCwPiMjIwWra+4KYWVcNRrNKxJjJF9cXDSitbX1jUqlylQoFEpyxXOh/TJoRXTZ2dm/29vb+xKP1NwYQsy4FBUVvdjb22MLCwtG9Pf3a5OTk3+hPm8eqAjw74R+YGpqSl9cXPyXh4dHCA9+O0ts+zsIXnKRfn5+ngEtLS3VNMkT6rtHsL18DqF/dnaWVVVVvabtHkZtX13a7sKG+FIqlT7gHyFKEAhcBwYGyubm5tjMzAzr6urSent7h1K74xVnysO2trbXUVFRz+n9EeHzS2PwVxodHR1GG+LvycnJYvr/a7SLEeRA5M9WVlYMRMAmJiZYfHz8zzwOJDfksrtX5LJbCQkJ/rTLWrAbwQlu2IgRJKuurv6TghKByejMeUNtXu+46UMffMDjhoYGjcAHbswhRpA7uUg9NjbGgKysrEwewKY+zuAQ+MCNOcQIklOS1JHPGRAREaEUAtHExwEcAh+4MYcYQb5kaKADDYcac3Z2DjbRXW/jSCaTBQl8IyMjBswhSlBPT4+hr6+PAT4+Pj+YK8jFxSVI4Ovt7RUtSN7U1KTr7u5mQFxcXLSZLrOnbR8p8IFbrMvcKysr1R0dHQwoKCj4jW9rU5/7hYWFLwW+iooK0UEty8nJUdFhxwAi0Zix7WHj1dnZqRH4KFGL3vYOYWFhz/R6vYEeNjo6ytLS0m46GG86g6SwBQe4wAlusQcjiB7l5+eXNzc3M4BSiNbPz++61HGdGEfYUI5rFHjAydOLRHRyDQ0NVdTX1+t1Oh0OM0YVYrVcLn/CV8r2PW6SYixsYAsOcIGTJ1rTyo+kpKQXjY2NTKvVovRABajl7vPige7A85ctf8eJ7oUxGAsb2IIDXOAUVtjkAi01NfUVfR2jfMTa29sZ1dGoeTRlZWV/xMTEKJ2cnII9PT2/pwQcQ7VzJvowBmNhA9v09PQsXjHaWaSEjY2NTafKsYUSLZKt8YBDBYla+fz8nJ2dnRkLerShTxhHNvrExMRfuZjblrp1GIv8wMDAp1SSltPVxlBbW8tuAo1hGBsQEKDgbrKz9L3s7TXI399fQW5U5eXlqUtKSnRqtdoA4B1t6AsODg7nu+naa/XHvCj6csh5m+x912hRgqy/D1kFWQVZBVkFWQVdj38BAk7AFyu8ie8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAYAAADi1poDAAAE2ElEQVR42u1YaUhcVxi1xirttDHWpbQxtSKoSRTiVoUaKFQquBOCVkQwkmmrVqH9FyiKC1TRYv+o+eFWNW513zruiguCdRcUcWXGRhFFR1q143j7neG+IMFJ88YJaWEuHHze5bzz7v22O0aMMaP/EowMggyCDIIMggyC/o+CdGjvED4kvEe48rKLXqUgp5WVlXmpVPoDPbsQrhKMX6egT/f29tjx8TEbGhpaCAgI+Ib6HAkSwhuvQ9Bnm5ubDODC1K2trWPe3t5f0pg94a2LhOlLkDH/cluCK8GbkCiXy5kAhULB9vf3mVKp/Lu8vLzTzs4ugOZcJ5jqU5Axt41bQUFB0srKStn09LR8Z2fnr5OTk7ONjQ32PCDu4OCAbW9v/5mfn/9EIpHc4bt1aUFvEm4EBwc/HB4eXoQA7MDW1pbmpevr62xtbU0rMOfw8JCNj4/XE4/FZQWZwYvS09Mf0xGoIGJ5eVkUBgcH95KSkn7G7l52h7AzN0tLS5tJjIZ8aWlJg7a2tj9SU1Pr/P39k+goHgn950E7cpSSklJjZmZ2l3hsOJ/ONgSb+SgnJ6dkd3eXLSwsaNDf36+MjY39icY+4YYKA/9cGAempqZOc3Nz++3t7UO58Zvqw+2vwnjpiE7n5+cZ0NTU9JRecp/G3ieYnI9DGJ+dnWXFxcVz5O4PqM/hnLsLDvGxubm5Pf8IUYJAcGtgYGBhbm6OzczMsK6uLqWjo2M49V+7IKY4tbe3z4WEhDyi59uEd89Favy1CQ0NfUAOMT05Ofk7/e+MfjGCJET+1erq6hkRsImJCRYZGfkjt4OLIq+E5zKLC3LZlaioqC/Iy1TwRnCCG2vECLItKyv7jYwShsko5mxSn9dzx/SyDTt0p7q6WiHwgRvvECPIlY5IPjY2xoDk5OQ6bsC6tuvgEPjAjXeIEeRDSfKIzpwBgYGBiYIh6tgk4BD4wI13iBF0lxaqKaAhqDFLS8tAHY/rmR1ZWVkFCHwjIyNqvEOUoJ6eHnVfXx8DnJ2d711WkLW1dYDA19vbK1qQT0NDw1F3dzcDIiIivuNVoa7tbXL7bwU+cIs9MteioiK5TCZjQFZWViV3a13bB9nZ2U8EvsLCQtFGbZuWliajYMcAIlFQn6eOx4Y1np2dnQqBjxK1aLeX+Pn5fd3c3HzW0tLCRkdHWXx8/IsCo7aGuTZYCw5wgRPcYgMjgtntzMzMxcbGRgZQClG6uLhoSx3axFzDGspxBwIPOHl6MRadXH19faVVVVWn9fX1CGaMKsSnTk5O9/lOmfzLMdlgLtZgLTjABU6eaHUrP2JiYkpqampYbW0tSg9UgEp+fJ7c0CU8f5lwT0RE98QczMUarAUHuMApJF5dCjTUMTfj4uKa6esY5SPW0dHBqI5GzaMoKCj4NSwsLNHCwiLQwcEhjBLw91Q712EMczAXa7A2ISGhDVzna6NLlbDh4eGPqXJUUaJFstUEOFSQqJXVajVTqVSagh59GBPm0ZrT6OjoX3j5aqavW4emyPfw8HhIJekiXW3OKioq2ItAcxjmuru7S/kxmer7XvbsGuTm5ialY5RlZGTI8/LyjkpKSs4APKMPY15eXnHcm7Req1/VRdEHeYnDh/fd4AZurJe7veH3IYMggyCDIIMggyDt+AeCTA8AFSrCbwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAzUlEQVR42u2YMQ7CMAxF7aRiSQckWtGOHKMLR2DimFyAE3CUdqWiQ4ucYANXqIiRv+T96ek7kYx1vS8A4MzT8QTIMxPPjefyhm2a5tS2bem9xxxpiSj1fV8Pw/AU4K6qduWyLJhSylIvcoSRgY8CHIgiQsb5ihTG4EBZDHjtFJ+OKANmZKuEAWvtsE7DmpbOKmGVsEr8xrB9zSsbVvdKWCVs6cywGf4bwwI8EcXknMv6+hNjFKuTD6HcIsJhw5EbVq6w43h/zPN8RW3n1hcs+1ICqMmZZQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAA1UlEQVR42u2YMQ4CIRBFgV1LoXA3snoht/MOtnoarbyF1R5ptxRsDAngTKKtnWbYzE8+oXz8/IGEum3XCyHECbwDa0FTD/AAPtewHK21h67rTFVViiJtjDGN47iZpumJwH3TrEwIQeWcScYrpVTICMB7BNZwACUI6x0kMupaFCYG/gsw0Vn7lnDmSjBw4R3moeNKcCW4EjO7h/lp/nHCxd0SXAkeOk6YE55Vwj7GlBSIMmgCISsCD97ft1obQxUaYb13DrY3BL445yS4h/2SaMCf79brC0M0WI9LC6AuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAyklEQVR42u2YPQ4CIRSEccF2fwIbKz2T23kKaz2BVt7Dai9G4kJls+CbRDtbzWPzJhlCqL5MBkie6fvNWil1Ju/JreKpQB7JF0PLyTl3tNZ2WuuKI20iee+35CeAB86wUEUCIwEfANziIOesOAuMYDWqMAnwX4CZ1/dbwlkqIcCFd1gunVRCKiGVWNg7LF/zjxMu7pWQSsilk4Ql4UUlPM1zSu/JClthvgZWAI8xTru6bjqu0ICNMTxoewfwNYSwIg+0b5gG/Bm33l7CZ0/XNL9BmAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAgCAYAAAA1zNleAAAAFUlEQVR42mP4//8/AzJmGBUYFUBgAEE5fpDLFJZbAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"0x3c3c3e"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0x848489"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"0xb9b9be"/\x3e\x3csetting name\x3d"titlesize" value\x3d"12"/\x3e\x3csetting name\x3d"titleweight" value\x3d"bold"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"0xececf4"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"0xececf4"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMCAIAAACnG28HAAAAoElEQVR42u3SQQkAAAwDsQor8y9rJvYZBKLguLQD5yIBxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJY/LSgjDi3dpmB4AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMCAIAAACnG28HAAAAoElEQVR42u3SQQkAAAwDsToq829uJvYZBKLguLQD5yIBxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJY/LRBziyQuYSeagAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA2CAIAAAC3LQuFAAAB9UlEQVR42u3ZiWrCQBAGYF9CzWnu05hDbX3/N+tfBqdrjEIptNL9YQo5hKQfuzM7m9V6vWU8iRX+zucLYzEIRCACEYhABCIQgQjEIBCBCEQgAv0s6nrveQGBHgZ0CHSpqtZ1fc8Lu24wr+MUr5qmudVAbXvQrbzt1j0e3/RWHKe4iB9YDeT7obndud/3ch1Sm42DKybZ/wfK8wr/dlFUcjoMx9l+cNN013nX4NT3dxZVMeWAkYwLeD0CQkrCaZ6XFgFlWaEQko9dN1gEOhxG82e2AKFUKUTbdn0/3n9yEaAkyWSgnU7vtgANw4TnOo4nqRcQWVYuAml6DsPYipV0GEZ9PxVFjedilqGW40DWPlcXxwTCLTkuy9oKIIyaNC2CIMJzISVAcZwpCu6aQFr4MQctGUExjPBQaRpmcwocOmRkiOmi0ZZmVXONLH9mQHXdmkCSfRBRlNoChMWxJJpxPM2AMExQp2RNOAuo2QIEAnRVZdnoGxgT6nMdKPl7FqJp436QTiIcTNN5EQgFzt4NMy1S6DOuDdp8QfTLWxyvBYSUhKK228W6Sr4H0p6eW643Zc7M3AT6CnOhiEiS/A9f5hWBZkkarTyBbsJs69G48bPP8iBC6kG/JoWfQPxwSCACEYhBIAIRiEAEIhCBCMQg0HeBGE/iA2Oi1tFMiSX7AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAABCAIAAAAkUWeUAAAAEUlEQVR42mPQ1zccRaOIzggAmuR1T+nadMkAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAYAAADErm6rAAAAIklEQVR42mP6//8/Az4sKir+X0lJ5b+ysioKBomB5AjpBwAxrjrJQvfEawAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAGUlEQVR42mP4//8/Ay0xw6gFoxaMWkB7CwB2As1P8WmmAwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAGUlEQVR42mP4//8/Ay0xw6gFoxaMWkB7CwB2As1P8WmmAwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAYUlEQVR42q2PSwqAMBBDe4mqrVL7sXh6vZoUDxAnxX0LungQEpJhFADVQusxC4dQXqhzT7dnfBcuY2Y4t1ao6TH7fGAYptPaBd5HhJAq1PSY/fFB4WCMG1LKFWp6kt2t/gOk+eeZy1KEHQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAYElEQVR42mP4//8/Az4sJibxSUlJ5b+ysioKBokB5b4Q0s9ASIG0tMxGWVl5DAtAYiA5ii2wsbE1ALr0A8hAkKtBGMQGiYHkKLYAiJlcXd0MQa4FGvoZhEFskBhIjpB+AF4F6qfhUR58AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAYAAADErm6rAAAAKElEQVR4XmP8//8/AyHw+PHj/z9+/GD4+vUrGH/79g1MBwQEMBLSCwC4sRX/S7kwJwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAASElEQVR42q3NoQ0AMAgFUfYXrIJH4/FIFmg6wS/1TUqaipOXRwDoVmbOiIC7w8ygqhCR2XmpCfAB4G/ArgAuYBQwCuDu1wZeW0osItX5QArCAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAWUlEQVR42rWNoQ1AIQwF2V8QHAJJKlAoSHVJ6qpI2IMwwPsrIPji3F3OAXB/ci221nytdRPRTin5p4MxRlBViAiYGaUUxBjDs8Gcc6+1YGYQEfTekXM+N+0HR/gfgjnWeYEAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xacacac"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAYAAABsfz2XAAAAEklEQVR42mOwtnV8RgpmIFUDAFr3JukT6L+UAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAADCAYAAACnI+4yAAAAEklEQVR42mP4//8/AymYgeYaABssa5WUTzsyAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAHUlEQVR42mMUFRU/wUACYHR1935GkgZrW0faagAAqHQGCWgiU9QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAGElEQVR42mOwtnV8RgpmoL0GUVHxE6RgAO7IRsl4Cw8cAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mMQFRU/YW3r+AwbZsAnCQBUPRWHq8l/fAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mOwtnV8hg2LioqfYMAnCQBwXRWHw2Rr1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR4XmMQFRVnBeIiIN4FxCeQMQOQU6ijq3/VycXjiau79zNkDJLcZWvv9MTGzumZta0jCgZJnkAXhPEBnhkmTDF7/FAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR42mMQFRU/gYZ3A3ERELMyuLp7P0PGTi4eT3R09a8CJbMYrG0dnyFjGzunZ7b2Tk+AkrswJGEYZAUA8XwmRnLnEVMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAMklEQVR42mMQFRU/YW3r+AwbZgBK7rK0snuCS7JQXUP7qqW1/RNskqxAXATEu0FWIGMAFlYlnOJtim4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAANUlEQVR42mOwtnV8hg2LioqfYMAmYWll9wQouQtD0tLa/om6hvZVoGQ2A0g7Gt4NxEVAzAoAZzolltlSH50AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAdklEQVR42mP4//8/AzGYYdgpFBUVlwPiXUD8GUrLYVUoJiaxR1JS+r+srNx/EA3kH8Bl4md5ecX/iorK/xUUlP4D+T+xKgSask9GRu6/srLqfxAN5B/CqtDb21cdpBho5VcQ7enprYHL10xAzAXEPFCaaVhHIQBeKc15eWl8jgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAdklEQVR42mP4//8/AzGYYdgpFBUVlwPiXUD8GUrLYVUoJiaxR1JS+r+srNx/EA3kH8Bl4md5ecX/iorK/xUUlP4D+T+xKgSask9GRu6/srLqfxAN5B/CqtDb21cdpBho5VcQ7enprYHL10xAzAXEPFCaaVhHIQBeKc15eWl8jgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAqklEQVR42mP4//8/AzGYYSgohAIZIHYE4lAoDeJjKJR1c3PLffTo0aXfv39/B9EgPlBcDl2h0/379y+/fv36/9OnT/+DaKDiq0BxF3SFoc+ePQOZ9B+Gnz9//hsoHo6u0GX//v2Xr1279h+GDx48CDLRDV2hkq2tbe6uXbsunz9//geItre3B7lRGV0hMxCrAbEHEIdBaRCfGVvwgBRzADE3lGbGCJ4hENcAI1indUdh01cAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAXklEQVR42n2NWwqAIBRE3YSmJT4KafW1tZAWMN2RPkSojwPDPO5VAFSP1lMRDqG+UJexN4524bJ2hvehQU2P2efQGHs6tyCEhBhzg5oes7+PlcWUVuS8Nah5QLK77z7Bcm/CZuJM1AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAXklEQVR42mP4//8/AwyLiUl8UlVV/6+mpoGCQWJAuS/IahmQOdLSMhvl5RUxNILEQHI4NdrY2BoATf4AUgiyBYRBbJAYSA6nRiBmcnV1MwSZDlT8GYRBbJAYSA5ZLQArC3Oj7DuqswAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAYAAAC6qQkaAAAAXklEQVR42mP5//8/AwyIiUn85+bmZmBkZGRABiA1X79+ZXj16gVcgoUBDaBrwiWGoZFYMCg0MpKnkZFxCPlxVONw0MjIyDgaOCM7AdC7lBuNjtGiY1TjqMbRwooijQBUhw3jnmCdzgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAYAAAC6qQkaAAAAT0lEQVR42u3LIQ4AQQhDUe5/FjJ4NH48ggQu0rWbGbEH2Iqanz4BIO9VFTITe29EBNwdqorzJ2fo7guutb7hzFzQzAgJCQkJCQkJCQn/AR/HKvJmqR7XwAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAWUlEQVR42p2LoQoAIRAF/f8gNsNGMZhMK+YVtpkW/A/xA9714+COC1OGGQfA/eFRMrOvte6c8yYi/2kcYwRVhYig945SCmKM4XU0s73WwpwTIoLWGlJK595da8On65TYLg8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAASElEQVR42o3LIQ4AMQgFUe6v6EnwaDweyQ3aPcBf6poNyVaMm0cA6CwzZ0TA3WFmUFWIyPP9qIGjgeMX7gpywVVwFeTuaeFNL2bLq1AT4lm+AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAABQElEQVR42p2SsWqDUBSGTYgpEqlLqNCxdHMoGTp079Y1kFJohrR5mzyCm4PpA2Rw1MlZg7gk6eSWXcxgzy//BWkbLBU+uZzz/derHq2ua+0/tK+e0BcGwlC4IEPW+nR+hNAcCffCVFiQKWsjOr12SBeuhJnv++uiKHZVVZUAa9TQo6OrMHa5FJ6DINgcj8f6cDjUeZ43YI0aenAEixnNEB48z/P3+32dZdmvoAcHLjPNDrM4jnfnQgo4PDIy2lhYbrfbU1cwTdOTuO/MaPZfg0mSlOK+MdPcXsIw7DwqHLgqiMc+rlardVcQDlx1VLzorfDquu7mXAg9ceZ0LfU78OgJGrLrRxRFn/IhSoA1agxN6BpqAEzhWnCEJ0pLMmfNoWOqAVAjZ3K3G0p3xGHNpqN/n9cBj2Dx5W0yZs1oD/kXpOphz005RgUAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e';this.xml=
g.utils.parseXML(this.text);return this}})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=g.events,e=c.state,b=a.css,d=a.isMobile(),f=document,u=".jwpreview",l=!0,m=!1;h.display=function(r,g){function z(b){if(aa&&(r.jwGetControls()||r.jwGetState()==e.PLAYING))aa(b);else if((!d||!r.jwGetControls())&&S.sendEvent(c.JWPLAYER_DISPLAY_CLICK),r.jwGetControls()){var j=(new Date).getTime();Y&&500>j-Y?(r.jwSetFullscreen(),Y=void 0):Y=(new Date).getTime();var k=a.bounds(p.parentNode.querySelector(".jwcontrolbar")),f=a.bounds(p),j=k.left-10-f.left,h=k.left+30-
f.left,g=f.bottom-40,l=f.bottom,n=k.right-30-f.left,k=k.right+10-f.left;if(d&&!(b.x>=j&&b.x<=h&&b.y>=g&&b.y<=l)){if(b.x>=n&&b.x<=k&&b.y>=g&&b.y<=l){r.jwSetFullscreen();return}S.sendEvent(c.JWPLAYER_DISPLAY_CLICK);if(M)return}switch(r.jwGetState()){case e.PLAYING:case e.BUFFERING:r.jwPause();break;default:r.jwPlay()}}}function j(a,b){ba.showicons&&(a||b?(R.setRotation("buffer"==a?parseInt(ba.bufferrotation,10):0,parseInt(ba.bufferinterval,10)),R.setIcon(a),R.setText(b)):R.hide())}function q(a){s!=
a?(s&&x(u,m),(s=a)?(a=new Image,a.addEventListener("load",t,m),a.src=s):(b("#"+p.id+" "+u,{"background-image":void 0}),x(u,m),A=K=0)):s&&!M&&x(u,l);w(r.jwGetState())}function C(a){clearTimeout(qa);qa=setTimeout(function(){w(a.newstate)},100)}function w(a){a=T?T:r?r.jwGetState():e.IDLE;if(a!=ca)switch(ca=a,R&&R.setRotation(0),a){case e.IDLE:!H&&!P&&(s&&!I&&x(u,l),a=!0,r._model&&!1===r._model.config.displaytitle&&(a=!1),j("play",F&&a?F.title:""));break;case e.BUFFERING:H=m;G.error&&G.error.setText();
P=m;j("buffer");break;case e.PLAYING:j();break;case e.PAUSED:j("play")}}function t(){A=this.width;K=this.height;w(r.jwGetState());v();s&&b("#"+p.id+" "+u,{"background-image":"url("+s+")"})}function D(a){H=l;j("error",a.message)}function v(){0<p.clientWidth*p.clientHeight&&a.stretch(r.jwGetStretching(),k,p.clientWidth,p.clientHeight,A,K)}function x(c,d){a.exists(Q[c])||(Q[c]=!1);Q[c]!=d&&(Q[c]=d,b("#"+p.id+" "+c,{opacity:d?1:0,visibility:d?"visible":"hidden"}))}var p,k,B,F,s,A,K,I=m,G={},H=m,P=m,Q=
{},M,y,R,T,ca,ba=a.extend({showicons:l,bufferrotation:45,bufferinterval:100,fontcolor:"#ccc",overcolor:"#fff",fontsize:15,fontweight:""},r.skin.getComponentSettings("display"),g),S=new c.eventdispatcher,aa,Y;a.extend(this,S);this.clickHandler=z;var qa;this.forceState=function(a){T=a;w(a);this.show()};this.releaseState=function(a){T=null;w(a);this.show()};this.hidePreview=function(a){I=a;x(u,!a);a&&(M=!0)};this.setHiding=function(){M=!0};this.element=function(){return p};this.redraw=v;this.show=function(a){if(R&&
(a||(T?T:r?r.jwGetState():e.IDLE)!=e.PLAYING))clearTimeout(y),y=void 0,p.style.display="block",R.show(),M=!1};this.hide=function(){R&&(R.hide(),M=!0)};this.setAlternateClickHandler=function(a){aa=a};this.revertAlternateClickHandler=function(){aa=void 0};p=f.createElement("div");p.id=r.id+"_display";p.className="jwdisplay";k=f.createElement("div");k.className="jwpreview jw"+r.jwGetStretching();p.appendChild(k);r.jwAddEventListener(c.JWPLAYER_PLAYER_STATE,C);r.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM,
function(){H=m;G.error&&G.error.setText();var a=(F=r.jwGetPlaylist()[r.jwGetPlaylistIndex()])?F.image:"";ca=void 0;q(a)});r.jwAddEventListener(c.JWPLAYER_PLAYLIST_COMPLETE,function(){P=l;j("replay");var a=r.jwGetPlaylist()[0];q(a.image)});r.jwAddEventListener(c.JWPLAYER_MEDIA_ERROR,D);r.jwAddEventListener(c.JWPLAYER_ERROR,D);d?(B=new a.touch(p),B.addEventListener(a.touchEvents.TAP,z)):p.addEventListener("click",z,m);B={font:ba.fontweight+" "+ba.fontsize+"px/"+(parseInt(ba.fontsize,10)+3)+"px Arial, Helvetica, sans-serif",
color:ba.fontcolor};R=new h.displayicon(p.id+"_button",r,B,{color:ba.overcolor});p.appendChild(R.element());C({newstate:e.IDLE})};b(".jwdisplay",{position:"absolute",cursor:"pointer",width:"100%",height:"100%",overflow:"hidden"});b(".jwdisplay .jwpreview",{position:"absolute",width:"100%",height:"100%",background:"no-repeat center",overflow:"hidden",opacity:0});b(".jwdisplay, .jwdisplay *",{"-webkit-transition":"opacity .25s, background-image .25s, color .25s","-moz-transition":"opacity .25s, background-image .25s, color .25s",
"-o-transition":"opacity .25s, background-image .25s, color .25s"})})(jwplayer);
(function(g){var h=g.utils,a=h.css,c=document,e="none",b="100%";g.html5.displayicon=function(d,f,u,l){function m(a,b,d,e){var j=c.createElement("div");j.className=a;b&&b.appendChild(j);w&&r(j,a,"."+a,d,e);return j}function r(b,c,d,e,j){var k=n(c);"replayIcon"==c&&!k.src&&(k=n("playIcon"));k.src?(e=h.extend({},e),0<c.indexOf("Icon")&&(s=k.width|0),e.width=k.width,e["background-image"]="url("+k.src+")",e["background-size"]=k.width+"px "+k.height+"px",j=h.extend({},j),k.overSrc&&(j["background-image"]=
"url("+k.overSrc+")"),h.isMobile()||a("#"+f.id+" .jwdisplay:hover "+d,j),a.style(w,{display:"table"})):a.style(w,{display:"none"});e&&a.style(b,e);F=k}function n(a){var b=C.getSkinElement("display",a);a=C.getSkinElement("display",a+"Over");return b?(b.overSrc=a&&a.src?a.src:"",b):{src:"",overSrc:"",width:0,height:0}}function z(){var b=x||0===s;a.style(p,{display:p.innerHTML&&b?"":e});K=b?30:0;j()}function j(){clearTimeout(A);0<K--&&(A=setTimeout(j,33));var c="px "+b,d=Math.ceil(Math.max(F.width,h.bounds(w).width-
v.width-D.width)),c={"background-size":[D.width+c,d+c,v.width+c].join(", ")};w.parentNode&&(c.left=1==w.parentNode.clientWidth%2?"0.5px":"");a.style(w,c)}function q(){H=(H+G)%360;h.rotate(k,H)}var C=f.skin,w,t,D,v,x,p,k,B={},F,s=0,A=-1,K=0;this.element=function(){return w};this.setText=function(a){var b=p.style;p.innerHTML=a?a.replace(":",":\x3cbr\x3e"):"";b.height="0";b.display="block";if(a)for(;2<Math.floor(p.scrollHeight/c.defaultView.getComputedStyle(p,null).lineHeight.replace("px",""));)p.innerHTML=
p.innerHTML.replace(/(.*) .*$/,"$1...");b.height="";b.display="";z()};this.setIcon=function(a){var b=B[a];b||(b=m("jwicon"),b.id=w.id+"_"+a);r(b,a+"Icon","#"+b.id);w.contains(k)?w.replaceChild(b,k):w.appendChild(b);k=b};var I,G=0,H;this.setRotation=function(a,b){clearInterval(I);H=0;G=a|0;0===G?q():I=setInterval(q,b)};var P=this.hide=function(){w.style.opacity=0};this.show=function(){w.style.opacity=1};w=m("jwdisplayIcon");w.id=d;t=n("background");D=n("capLeft");v=n("capRight");x=0<D.width*v.width;
var Q={"background-image":"url("+D.src+"), url("+t.src+"), url("+v.src+")","background-position":"left,center,right","background-repeat":"no-repeat",padding:"0 "+v.width+"px 0 "+D.width+"px",height:t.height,"margin-top":t.height/-2};a("#"+d+" ",Q);h.isMobile()||(t.overSrc&&(Q["background-image"]="url("+D.overSrc+"), url("+t.overSrc+"), url("+v.overSrc+")"),a("#"+f.id+" .jwdisplay:hover "+("#"+d+" "),Q));p=m("jwtext",w,u,l);k=m("jwicon",w);f.jwAddEventListener(g.events.JWPLAYER_RESIZE,j);P();z()};
a(".jwplayer .jwdisplayIcon",{display:"table",cursor:"pointer",position:"relative","margin-left":"auto","margin-right":"auto",top:"50%"});a(".jwplayer .jwdisplayIcon div",{position:"relative",display:"table-cell","vertical-align":"middle","background-repeat":"no-repeat","background-position":"center"});a(".jwplayer .jwdisplayIcon div",{"vertical-align":"middle"},!0);a(".jwplayer .jwdisplayIcon .jwtext",{color:"#fff",padding:"0 1px","max-width":"300px","overflow-y":"hidden","text-align":"center","-webkit-user-select":e,
"-moz-user-select":e,"-ms-user-select":e,"user-select":e})})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=a.css,e=a.bounds,b=".jwdockbuttons",d=document,f="none",u="block";h.dock=function(g,m){function r(a){return!a||!a.src?{}:{background:"url("+a.src+") center","background-size":a.width+"px "+a.height+"px"}}function n(b,d){var e=q(b);c(z("."+b),a.extend(r(e),{width:e.width}));return j("div",b,d)}function z(a){return"#"+t+" "+(a?a:"")}function j(a,b,c){a=d.createElement(a);b&&(a.className=b);c&&c.appendChild(a);return a}function q(a){return(a=D.getSkinElement("dock",
a))?a:{width:0,height:0,src:""}}function C(){c(b+" .capLeft, "+b+" .capRight",{display:v?u:f})}var w=a.extend({},{iconalpha:0.75,iconalphaactive:0.5,iconalphaover:1,margin:8},m),t=g.id+"_dock",D=g.skin,v=0,x={},p={},k,B,F,s=this;s.redraw=function(){e(k)};s.element=function(){return k};s.offset=function(a){c(z(),{"margin-left":a})};s.hide=function(){s.visible&&(s.visible=!1,k.style.opacity=0,clearTimeout(F),F=setTimeout(function(){k.style.display=f},250))};s.showTemp=function(){s.visible||(k.style.opacity=
0,k.style.display=u)};s.hideTemp=function(){s.visible||(k.style.display=f)};s.show=function(){!s.visible&&v&&(s.visible=!0,k.style.display=u,clearTimeout(F),F=setTimeout(function(){k.style.opacity=1},0))};s.addButton=function(b,d,f,g){if(!x[g]){var r=j("div","divider",B),l=j("button",null,B),n=j("div",null,l);n.id=t+"_"+g;n.innerHTML="\x26nbsp;";c("#"+n.id,{"background-image":b});"string"==typeof f&&(f=new Function(f));a.isMobile()?(new a.touch(l)).addEventListener(a.touchEvents.TAP,function(a){f(a)}):
l.addEventListener("click",function(a){f(a);a.preventDefault()});x[g]={element:l,label:d,divider:r,icon:n};if(d){var q=new h.overlay(n.id+"_tooltip",D,!0);b=j("div");b.id=n.id+"_label";b.innerHTML=d;c("#"+b.id,{padding:3});q.setContents(b);if(!a.isMobile()){var m;l.addEventListener("mouseover",function(){clearTimeout(m);var b=p[g],d,j;d=e(x[g].icon);b.offsetX(0);j=e(k);c("#"+b.element().id,{left:d.left-j.left+d.width/2});d=e(b.element());j.left>d.left&&b.offsetX(j.left-d.left+8);q.show();a.foreach(p,
function(a,b){a!=g&&b.hide()})},!1);l.addEventListener("mouseout",function(){m=setTimeout(q.hide,100)},!1);k.appendChild(q.element());p[g]=q}}v++;C()}};s.removeButton=function(a){if(x[a]){B.removeChild(x[a].element);B.removeChild(x[a].divider);var b=document.getElementById(""+t+"_"+a+"_tooltip");b&&k.removeChild(b);delete x[a];v--;C()}};s.numButtons=function(){return v};s.visible=!1;k=j("div","jwdock");B=j("div","jwdockbuttons");k.appendChild(B);k.id=t;var A=q("button"),K=q("buttonOver"),I=q("buttonActive");
A&&(c(z(),{height:A.height,padding:w.margin}),c(b,{height:A.height}),c(z("button"),a.extend(r(A),{width:A.width,cursor:"pointer",border:f})),c(z("button:hover"),r(K)),c(z("button:active"),r(I)),c(z("button\x3ediv"),{opacity:w.iconalpha}),c(z("button:hover\x3ediv"),{opacity:w.iconalphaover}),c(z("button:active\x3ediv"),{opacity:w.iconalphaactive}),c(z(".jwoverlay"),{top:w.margin+A.height}),n("capLeft",B),n("capRight",B),n("divider"));setTimeout(function(){e(k)})};c(".jwdock",{opacity:0,display:f});
c(".jwdock \x3e *",{height:"100%","float":"left"});c(".jwdock \x3e .jwoverlay",{height:"auto","float":f,"z-index":99});c(b+" button",{position:"relative"});c(b+" \x3e *",{height:"100%","float":"left"});c(b+" .divider",{display:f});c(b+" button ~ .divider",{display:u});c(b+" .capLeft, "+b+" .capRight",{display:f});c(b+" .capRight",{"float":"right"});c(b+" button \x3e div",{left:0,right:0,top:0,bottom:0,margin:5,position:"absolute","background-position":"center","background-repeat":"no-repeat"});a.transitionStyle(".jwdock",
"background .25s, opacity .25s");a.transitionStyle(".jwdock .jwoverlay","opacity .25s");a.transitionStyle(b+" button div","opacity .25s")})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=g.events,e=c.state,b=g.playlist;h.instream=function(d,f,g,l){function m(a){C(a.type,a);M&&d.jwInstreamDestroy(!1,y)}function r(a){C(a.type,a);j(null)}function n(a){C(a.type,a)}function z(){H&&H.releaseState(y.jwGetState());I.play()}function j(){if(v&&x+1<v.length){x++;var e=v[x];D=new b.item(e);M.setPlaylist([e]);var j;p&&(j=p[x]);k=a.extend(t,j);I.load(M.playlist[0]);B.reset(k.skipoffset||-1);T=setTimeout(function(){C(c.JWPLAYER_PLAYLIST_ITEM,{index:x},!0)},
0)}else T=setTimeout(function(){C(c.JWPLAYER_PLAYLIST_COMPLETE,{},!0);d.jwInstreamDestroy(!0,y)},0)}function q(a){a.width&&a.height&&(H&&H.releaseState(y.jwGetState()),g.resizeMedia())}function C(a,b){b=b||{};t.tag&&!b.tag&&(b.tag=t.tag);P.sendEvent(a,b)}function w(){G&&G.redraw();H&&H.redraw()}var t={controlbarseekable:"never",controlbarpausable:!0,controlbarstoppable:!0,loadingmessage:"Loading ad",playlistclickable:!0,skipoffset:null,tag:null},D,v,x=0,p,k={controlbarseekable:"never",controlbarpausable:!1,
controlbarstoppable:!1},B,F,s,A,K,I,G,H,P=new c.eventdispatcher,Q,M,y=this,R=!0,T=-1;d.jwAddEventListener(c.JWPLAYER_RESIZE,w);d.jwAddEventListener(c.JWPLAYER_FULLSCREEN,function(b){w();!b.fullscreen&&a.isIPad()&&(M.state===e.PAUSED?H.show(!0):M.state===e.PLAYING&&H.hide())});y.init=function(){F=l.detachMedia();I=new h.video(F);I.addGlobalListener(n);I.addEventListener(c.JWPLAYER_MEDIA_META,q);I.addEventListener(c.JWPLAYER_MEDIA_COMPLETE,j);I.addEventListener(c.JWPLAYER_MEDIA_BUFFER_FULL,z);I.addEventListener(c.JWPLAYER_MEDIA_ERROR,
m);I.addEventListener(c.JWPLAYER_MEDIA_TIME,function(a){B&&B.updateSkipTime(a.position,a.duration)});I.attachMedia();I.mute(f.mute);I.volume(f.volume);M=new h.model({},I);M.setVolume(f.volume);M.setMute(f.mute);K=f.playlist[f.item];s=F.currentTime;l.checkBeforePlay()||0===s?(A=e.PLAYING,R=!1):A=d.jwGetState()===e.IDLE||f.getVideo().checkComplete()?e.IDLE:e.PLAYING;A==e.PLAYING&&F.pause();H=new h.display(y);H.forceState(e.BUFFERING);Q=document.createElement("div");Q.id=y.id+"_instream_container";Q.appendChild(H.element());
G=new h.controlbar(y);G.instreamMode(!0);Q.appendChild(G.element());d.jwGetControls()?(G.show(),H.show()):(G.hide(),H.hide());g.setupInstream(Q,G,H,M);w();y.jwInstreamSetText(t.loadingmessage)};y.load=function(j,f){if(a.isAndroid(2.3))m({type:c.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});else{C(c.JWPLAYER_PLAYLIST_ITEM,{index:x},!0);var l=a.bounds(document.getElementById(d.id)),n=g.getSafeRegion();if("object"==a.typeOf(j))D=new b.item(j),M.setPlaylist([j]),
k=a.extend(t,f),B=new h.adskipbutton(d,l.height-(n.y+n.height)+10,k.skipMessage,k.skipText),B.addEventListener(c.JWPLAYER_AD_SKIPPED,r),B.reset(k.skipoffset||-1);else if("array"==a.typeOf(j)){var q;f&&(p=f,q=f[x]);k=a.extend(t,q);B=new h.adskipbutton(d,l.height-(n.y+n.height)+10,k.skipMessage,k.skipText);B.addEventListener(c.JWPLAYER_AD_SKIPPED,r);B.reset(k.skipoffset||-1);v=j;j=v[x];D=new b.item(j);M.setPlaylist([j])}d.jwGetControls()?B.show():B.hide();l=B.element();Q.appendChild(l);M.addEventListener(c.JWPLAYER_ERROR,
m);H.setAlternateClickHandler(function(a){d.jwGetControls()?(M.state==e.PAUSED?y.jwInstreamPlay():y.jwInstreamPause(),a.hasControls=!0):a.hasControls=!1;C(c.JWPLAYER_INSTREAM_CLICK,a)});a.isIE()&&F.parentElement.addEventListener("click",H.clickHandler);g.addEventListener(c.JWPLAYER_AD_SKIPPED,r);I.load(M.playlist[0])}};y.jwInstreamDestroy=function(a){if(M){clearTimeout(T);T=-1;I.detachMedia();l.attachMedia();A!=e.IDLE?f.getVideo().load(K,!1):f.getVideo().stop();P.resetEventListeners();I.resetEventListeners();
M.resetEventListeners();if(G)try{G.element().parentNode.removeChild(G.element())}catch(b){}H&&(F&&F.parentElement&&F.parentElement.removeEventListener("click",H.clickHandler),H.revertAlternateClickHandler());C(c.JWPLAYER_INSTREAM_DESTROYED,{reason:a?"complete":"destroyed"},!0);A==e.PLAYING&&(F.play(),f.playlist[f.item]==K&&R&&f.getVideo().seek(s));g.destroyInstream(I.audioMode());M=null}};y.jwInstreamAddEventListener=function(a,b){P.addEventListener(a,b)};y.jwInstreamRemoveEventListener=function(a,
b){P.removeEventListener(a,b)};y.jwInstreamPlay=function(){I.play(!0);f.state=e.PLAYING;H.show()};y.jwInstreamPause=function(){I.pause(!0);f.state=e.PAUSED;d.jwGetControls()&&H.show()};y.jwInstreamSeek=function(a){I.seek(a)};y.jwInstreamSetText=function(a){G.setText(a)};y.jwInstreamState=function(){return f.state};y.setControls=function(a){a?B.show():B.hide()};y.jwPlay=function(){"true"==k.controlbarpausable.toString().toLowerCase()&&y.jwInstreamPlay()};y.jwPause=function(){"true"==k.controlbarpausable.toString().toLowerCase()&&
y.jwInstreamPause()};y.jwStop=function(){"true"==k.controlbarstoppable.toString().toLowerCase()&&(d.jwInstreamDestroy(!1,y),d.jwStop())};y.jwSeek=function(a){switch(k.controlbarseekable.toLowerCase()){case "always":y.jwInstreamSeek(a);break;case "backwards":M.position>a&&y.jwInstreamSeek(a)}};y.jwSeekDrag=function(a){M.seekDrag(a)};y.jwGetPosition=function(){};y.jwGetDuration=function(){};y.jwGetWidth=d.jwGetWidth;y.jwGetHeight=d.jwGetHeight;y.jwGetFullscreen=d.jwGetFullscreen;y.jwSetFullscreen=d.jwSetFullscreen;
y.jwGetVolume=function(){return f.volume};y.jwSetVolume=function(a){M.setVolume(a);d.jwSetVolume(a)};y.jwGetMute=function(){return f.mute};y.jwSetMute=function(a){M.setMute(a);d.jwSetMute(a)};y.jwGetState=function(){return!M?e.IDLE:M.state};y.jwGetPlaylist=function(){return[D]};y.jwGetPlaylistIndex=function(){return 0};y.jwGetStretching=function(){return f.config.stretching};y.jwAddEventListener=function(a,b){P.addEventListener(a,b)};y.jwRemoveEventListener=function(a,b){P.removeEventListener(a,b)};
y.jwSetCurrentQuality=function(){};y.jwGetQualityLevels=function(){return[]};y.jwGetControls=function(){return d.jwGetControls()};y.skin=d.skin;y.id=d.id+"_instream";return y}})(window.jwplayer);
(function(g){var h=g.utils,a=h.css,c=g.events.state,e=g.html5.logo=function(b,d){function f(a){h.exists(a)&&a.stopPropagation&&a.stopPropagation();if(!z||!m.link)u.jwGetState()==c.IDLE||u.jwGetState()==c.PAUSED?u.jwPlay():u.jwPause();z&&m.link&&(u.jwPause(),u.jwSetFullscreen(!1),window.open(m.link,m.linktarget))}var u=b,l=u.id+"_logo",m,r,n=e.defaults,z=!1;this.resize=function(){};this.element=function(){return r};this.offset=function(b){a("#"+l+" ",{"margin-bottom":b})};this.position=function(){return m.position};
this.margin=function(){return parseInt(m.margin)};this.hide=function(a){if(m.hide||a)z=!1,r.style.visibility="hidden",r.style.opacity=0};this.show=function(){z=!0;r.style.visibility="visible";r.style.opacity=1};var j="o";u.edition&&(j=u.edition(),j="pro"==j?"p":"premium"==j?"r":"ads"==j?"a":"free"==j?"f":"o");if("o"==j||"f"==j)n.link="http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d"+g.version+"\x26m\x3dh\x26e\x3d"+j;m=h.extend({},n,d);m.hide="true"==m.hide.toString();r=document.createElement("img");
r.className="jwlogo";r.id=l;if(m.file){var n=/(\w+)-(\w+)/.exec(m.position),j={},q=m.margin;3==n.length?(j[n[1]]=q,j[n[2]]=q):j.top=j.right=q;a("#"+l+" ",j);r.src=(m.prefix?m.prefix:"")+m.file;h.isMobile()?(new h.touch(r)).addEventListener(h.touchEvents.TAP,f):r.onclick=f}else r.style.display="none";return this};e.defaults={prefix:h.repo(),file:"logo.png",linktarget:"_top",margin:8,hide:!1,position:"top-right"};a(".jwlogo",{cursor:"pointer",position:"absolute","z-index":100,opacity:0});h.transitionStyle(".jwlogo",
"visibility .25s, opacity .25s")})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=a.css;h.menu=function(e,b,d,f){function g(a){return!a||!a.src?{}:{background:"url("+a.src+") no-repeat left","background-size":a.width+"px "+a.height+"px"}}function l(a,b){return function(){C(a);n&&n(b)}}function m(a,b){var c=document.createElement("div");a&&(c.className=a);b&&b.appendChild(c);return c}function r(a){return(a=d.getSkinElement("tooltip",a))?a:{width:0,height:0,src:void 0}}var n=f,z=new h.overlay(b+"_overlay",d);f=a.extend({fontcase:void 0,fontcolor:"#cccccc",
fontsize:11,fontweight:void 0,activecolor:"#ffffff",overcolor:"#ffffff"},d.getComponentSettings("tooltip"));var j,q=[];this.element=function(){return z.element()};this.addOption=function(c,d){var e=m("jwoption",j);e.id=b+"_option_"+d;e.innerHTML=c;a.isMobile()?(new a.touch(e)).addEventListener(a.touchEvents.TAP,l(q.length,d)):e.addEventListener("click",l(q.length,d));q.push(e)};this.clearOptions=function(){for(;0<q.length;)j.removeChild(q.pop())};var C=this.setActive=function(a){for(var b=0;b<q.length;b++){var c=
q[b];c.className=c.className.replace(" active","");b==a&&(c.className+=" active")}};this.show=z.show;this.hide=z.hide;this.offsetX=z.offsetX;this.positionX=z.positionX;this.constrainX=z.constrainX;j=m("jwmenu");j.id=b;var w=r("menuTop"+e);e=r("menuOption");var t=r("menuOptionOver"),D=r("menuOptionActive");if(w&&w.image){var v=new Image;v.src=w.src;v.width=w.width;v.height=w.height;j.appendChild(v)}e&&(w="#"+b+" .jwoption",c(w,a.extend(g(e),{height:e.height,color:f.fontcolor,"padding-left":e.width,
font:f.fontweight+" "+f.fontsize+"px Arial,Helvetica,sans-serif","line-height":e.height,"text-transform":"upper"==f.fontcase?"uppercase":void 0})),c(w+":hover",a.extend(g(t),{color:f.overcolor})),c(w+".active",a.extend(g(D),{color:f.activecolor})));z.setContents(j)};c("."+"jwmenu jwoption".replace(/ /g," ."),{cursor:"pointer",position:"relative"})})(jwplayer);
(function(g){var h=jwplayer.utils,a=jwplayer.events;g.model=function(c,e){function b(a){var b=r[a.type]?r[a.type].split(","):[],c,e;if(0<b.length){for(c=0;c<b.length;c++){var f=b[c].split("-\x3e"),h=f[0],f=f[1]?f[1]:h;d[f]!=a[h]&&(d[f]=a[h],e=!0)}e&&d.sendEvent(a.type,a)}else d.sendEvent(a.type,a)}var d=this,f,u=h.getCookies(),l={controlbar:{},display:{}},m={autostart:!1,controls:!0,debug:void 0,fullscreen:!1,height:320,mobilecontrols:!1,mute:!1,playlist:[],playlistposition:"none",playlistsize:180,
playlistlayout:"extended",repeat:!1,skin:void 0,stretching:h.stretching.UNIFORM,width:480,volume:90},r={};r[a.JWPLAYER_MEDIA_MUTE]="mute";r[a.JWPLAYER_MEDIA_VOLUME]="volume";r[a.JWPLAYER_PLAYER_STATE]="newstate-\x3estate";r[a.JWPLAYER_MEDIA_BUFFER]="bufferPercent-\x3ebuffer";r[a.JWPLAYER_MEDIA_TIME]="position,duration";d.setVideo=function(a){f&&f.removeGlobalListener(b);f=a;f.getTag();f.volume(d.volume);f.mute(d.mute);f.addGlobalListener(b)};d.getVideo=function(){return f};d.seekDrag=function(a){f.seekDrag(a)};
d.setFullscreen=function(b){b!=d.fullscreen&&(d.fullscreen=b,d.sendEvent(a.JWPLAYER_FULLSCREEN,{fullscreen:b}))};d.setPlaylist=function(b){d.playlist=h.filterPlaylist(b);0==d.playlist.length?d.sendEvent(a.JWPLAYER_ERROR,{message:"Error loading playlist: No playable sources found"}):(d.sendEvent(a.JWPLAYER_PLAYLIST_LOADED,{playlist:jwplayer(d.id).getPlaylist()}),d.item=-1,d.setItem(0))};d.setItem=function(b){var c=!1;b==d.playlist.length||-1>b?(b=0,c=!0):b=-1==b||b>d.playlist.length?d.playlist.length-
1:b;if(c||b!=d.item)d.item=b,d.sendEvent(a.JWPLAYER_PLAYLIST_ITEM,{index:d.item})};d.setVolume=function(c){d.mute&&0<c&&d.setMute(!1);c=Math.round(c);d.mute||h.saveCookie("volume",c);b({type:a.JWPLAYER_MEDIA_VOLUME,volume:c});f.volume(c)};d.setMute=function(c){h.exists(c)||(c=!d.mute);h.saveCookie("mute",c);b({type:a.JWPLAYER_MEDIA_MUTE,mute:c});f.mute(c)};d.componentConfig=function(a){return l[a]};h.extend(d,new a.eventdispatcher);var n=d,z=h.extend({},m,u,c);h.foreach(z,function(a,b){z[a]=h.serialize(b)});
n.config=z;h.extend(d,{id:c.id,state:a.state.IDLE,duration:-1,position:0,buffer:0},d.config);d.playlist=[];d.setItem(0);d.setVideo(e?e:new g.video)}})(jwplayer.html5);
(function(g){var h=g.utils,a=h.css,c=h.transitionStyle,e="top",b="bottom",d="right",f="left",u=document,l={fontcase:void 0,fontcolor:"#ffffff",fontsize:12,fontweight:void 0,activecolor:"#ffffff",overcolor:"#ffffff"};g.html5.overlay=function(c,g,n){function z(a){return"#"+D+(a?" ."+a:"")}function j(a,b){var c=u.createElement("div");a&&(c.className=a);b&&b.appendChild(c);return c}function q(b,c){var d;d=(d=v.getSkinElement("tooltip",b))?d:{width:0,height:0,src:"",image:void 0,ready:!1};var e=j(c,p);
a.style(e,C(d));return[e,d]}function C(a){return{background:"url("+a.src+") center","background-size":a.width+"px "+a.height+"px"}}function w(c,k){k||(k="");var j=q("cap"+c+k,"jwborder jw"+c+(k?k:"")),g=j[0],j=j[1],l=h.extend(C(j),{width:c==f||k==f||c==d||k==d?j.width:void 0,height:c==e||k==e||c==b||k==b?j.height:void 0});l[c]=c==b&&!x||c==e&&x?B.height:0;k&&(l[k]=0);a.style(g,l);g={};l={};j={left:j.width,right:j.width,top:(x?B.height:0)+j.height,bottom:(x?0:B.height)+j.height};k&&(g[k]=j[k],g[c]=
0,l[c]=j[c],l[k]=0,a(z("jw"+c),g),a(z("jw"+k),l),s[c]=j[c],s[k]=j[k])}var t=this,D=c,v=g,x=n,p,k,B,F;c=h.extend({},l,v.getComponentSettings("tooltip"));var s={};t.element=function(){return p};t.setContents=function(a){h.empty(k);k.appendChild(a)};t.positionX=function(b){a.style(p,{left:Math.round(b)})};t.constrainX=function(b,c){if(t.showing&&0!==b.width&&t.offsetX(0)){c&&a.unblock();var d=h.bounds(p);0!==d.width&&(d.right>b.right?t.offsetX(b.right-d.right):d.left<b.left&&t.offsetX(b.left-d.left))}};
t.offsetX=function(b){b=Math.round(b);var c=p.clientWidth;0!==c&&(a.style(p,{"margin-left":Math.round(-c/2)+b}),a.style(F,{"margin-left":Math.round(-B.width/2)-b}));return c};t.borderWidth=function(){return s.left};t.show=function(){t.showing=!0;a.style(p,{opacity:1,visibility:"visible"})};t.hide=function(){t.showing=!1;a.style(p,{opacity:0,visibility:"hidden"})};p=j(".jwoverlay".replace(".",""));p.id=D;g=q("arrow","jwarrow");F=g[0];B=g[1];a.style(F,{position:"absolute",bottom:x?void 0:0,top:x?0:
void 0,width:B.width,height:B.height,left:"50%"});w(e,f);w(b,f);w(e,d);w(b,d);w(f);w(d);w(e);w(b);g=q("background","jwback");a.style(g[0],{left:s.left,right:s.right,top:s.top,bottom:s.bottom});k=j("jwcontents",p);a(z("jwcontents")+" *",{color:c.fontcolor,font:c.fontweight+" "+c.fontsize+"px Arial,Helvetica,sans-serif","text-transform":"upper"==c.fontcase?"uppercase":void 0});x&&h.transform(z("jwarrow"),"rotate(180deg)");a.style(p,{padding:s.top+1+"px "+s.right+"px "+(s.bottom+1)+"px "+s.left+"px"});
t.showing=!1};a(".jwoverlay",{position:"absolute",visibility:"hidden",opacity:0});a(".jwoverlay .jwcontents",{position:"relative","z-index":1});a(".jwoverlay .jwborder",{position:"absolute","background-size":"100% 100%"},!0);a(".jwoverlay .jwback",{position:"absolute","background-size":"100% 100%"});c(".jwoverlay","opacity .25s, visibility .25s")})(jwplayer);
(function(g){var h=g.html5,a=g.utils;h.player=function(c){function e(b){var c={description:b.description,file:b.file,image:b.image,mediaid:b.mediaid,title:b.title};a.foreach(b,function(a,b){c[a]=b});c.sources=[];c.tracks=[];0<b.sources.length&&a.foreach(b.sources,function(a,b){c.sources.push({file:b.file,type:b.type?b.type:void 0,label:b.label,"default":b["default"]?!0:!1})});0<b.tracks.length&&a.foreach(b.tracks,function(a,b){c.tracks.push({file:b.file,kind:b.kind?b.kind:void 0,label:b.label,"default":b["default"]?
!0:!1})});!b.file&&0<b.sources.length&&(c.file=b.sources[0].file);return c}function b(a){return function(){return f[a]}}var d=this,f,u,l,m;f=new h.model(c);d.id=f.id;a.css.block(d.id);u=new h.view(d,f);l=new h.controller(f,u);d._model=f;d.jwPlay=l.play;d.jwPause=l.pause;d.jwStop=l.stop;d.jwSeek=l.seek;d.jwSetVolume=l.setVolume;d.jwSetMute=l.setMute;d.jwLoad=function(a){d.jwInstreamDestroy();l.load(a)};d.jwPlaylistNext=l.next;d.jwPlaylistPrev=l.prev;d.jwPlaylistItem=l.item;d.jwSetFullscreen=l.setFullscreen;
d.jwResize=u.resize;d.jwSeekDrag=f.seekDrag;d.jwGetQualityLevels=l.getQualityLevels;d.jwGetCurrentQuality=l.getCurrentQuality;d.jwSetCurrentQuality=l.setCurrentQuality;d.jwGetCaptionsList=l.getCaptionsList;d.jwGetCurrentCaptions=l.getCurrentCaptions;d.jwSetCurrentCaptions=l.setCurrentCaptions;d.jwGetSafeRegion=u.getSafeRegion;d.jwForceState=u.forceState;d.jwReleaseState=u.releaseState;d.jwGetPlaylistIndex=b("item");d.jwGetPosition=b("position");d.jwGetDuration=b("duration");d.jwGetBuffer=b("buffer");
d.jwGetWidth=b("width");d.jwGetHeight=b("height");d.jwGetFullscreen=b("fullscreen");d.jwGetVolume=b("volume");d.jwGetMute=b("mute");d.jwGetState=b("state");d.jwGetStretching=b("stretching");d.jwGetPlaylist=function(){for(var a=f.playlist,b=[],c=0;c<a.length;c++)b.push(e(a[c]));return b};d.jwGetControls=b("controls");d.jwDetachMedia=l.detachMedia;d.jwAttachMedia=l.attachMedia;d.jwPlayAd=function(a){var b=g(d.id).plugins;b.vast&&b.vast.jwPlayAd(a)};d.jwPauseAd=function(){var a=g(d.id).plugins;a.googima&&
a.googima.jwPauseAd()};d.jwInitInstream=function(){d.jwInstreamDestroy();m=new h.instream(d,f,u,l);m.init()};d.jwLoadItemInstream=function(a,b){if(!m)throw"Instream player undefined";m.load(a,b)};d.jwLoadArrayInstream=function(a,b){if(!m)throw"Instream player undefined";m.load(a,b)};d.jwSetControls=function(a){u.setControls(a);m&&m.setControls(a)};d.jwInstreamPlay=function(){m&&m.jwInstreamPlay()};d.jwInstreamPause=function(){m&&m.jwInstreamPause()};d.jwInstreamState=function(){return m?m.jwInstreamState():
""};d.jwInstreamDestroy=function(a,b){if(b=b||m)b.jwInstreamDestroy(a||!1),b===m&&(m=void 0)};d.jwInstreamAddEventListener=function(a,b){m&&m.jwInstreamAddEventListener(a,b)};d.jwInstreamRemoveEventListener=function(a,b){m&&m.jwInstreamRemoveEventListener(a,b)};d.jwPlayerDestroy=function(){u&&u.destroy()};d.jwInstreamSetText=function(a){m&&m.jwInstreamSetText(a)};d.jwIsBeforePlay=function(){return l.checkBeforePlay()};d.jwIsBeforeComplete=function(){return f.getVideo().checkComplete()};d.jwSetCues=
u.addCues;d.jwAddEventListener=l.addEventListener;d.jwRemoveEventListener=l.removeEventListener;d.jwDockAddButton=u.addButton;d.jwDockRemoveButton=u.removeButton;c=new h.setup(f,u,l);c.addEventListener(g.events.JWPLAYER_READY,function(b){l.playerReady(b);a.css.unblock(d.id)});c.addEventListener(g.events.JWPLAYER_ERROR,function(b){a.log("There was a problem setting up the player: ",b);a.css.unblock(d.id)});c.start()}})(window.jwplayer);
(function(g){var h={size:180,backgroundcolor:"#333333",fontcolor:"#999999",overcolor:"#CCCCCC",activecolor:"#CCCCCC",titlecolor:"#CCCCCC",titleovercolor:"#FFFFFF",titleactivecolor:"#FFFFFF",fontweight:"normal",titleweight:"normal",fontsize:11,titlesize:13},a=jwplayer.events,c=jwplayer.utils,e=c.css,b=c.isMobile(),d=document;g.playlistcomponent=function(f,u){function l(a){return"#"+q.id+(a?" ."+a:"")}function m(a,b){var c=d.createElement(a);b&&(c.className=b);return c}function r(a){return function(){v=
a;n.jwPlaylistItem(a);n.jwPlay(!0)}}var n=f,z=n.skin,j=c.extend({},h,n.skin.getComponentSettings("playlist"),u),q,C,w,t,D=-1,v,x,p=76,k={background:void 0,divider:void 0,item:void 0,itemOver:void 0,itemImage:void 0,itemActive:void 0},B,F=this;F.element=function(){return q};F.redraw=function(){x&&x.redraw()};F.show=function(){c.show(q)};F.hide=function(){c.hide(q)};q=m("div","jwplaylist");q.id=n.id+"_jwplayer_playlistcomponent";B="basic"==n._model.playlistlayout;C=m("div","jwlistcontainer");q.appendChild(C);
c.foreach(k,function(a){k[a]=z.getSkinElement("playlist",a)});B&&(p=32);k.divider&&(p+=k.divider.height);var s=0,A=0,K=0;c.clearCss(l());e(l(),{"background-color":j.backgroundcolor});e(l("jwlist"),{"background-image":k.background?" url("+k.background.src+")":""});e(l("jwlist *"),{color:j.fontcolor,font:j.fontweight+" "+j.fontsize+"px Arial, Helvetica, sans-serif"});k.itemImage?(s=(p-k.itemImage.height)/2+"px ",A=k.itemImage.width,K=k.itemImage.height):(A=4*p/3,K=p);k.divider&&e(l("jwplaylistdivider"),
{"background-image":"url("+k.divider.src+")","background-size":"100% "+k.divider.height+"px",width:"100%",height:k.divider.height});e(l("jwplaylistimg"),{height:K,width:A,margin:s?s+"0 "+s+s:"0 5px 0 0"});e(l("jwlist li"),{"background-image":k.item?"url("+k.item.src+")":"",height:p,overflow:"hidden","background-size":"100% "+p+"px",cursor:"pointer"});s={overflow:"hidden"};""!==j.activecolor&&(s.color=j.activecolor);k.itemActive&&(s["background-image"]="url("+k.itemActive.src+")");e(l("jwlist li.active"),
s);e(l("jwlist li.active .jwtitle"),{color:j.titleactivecolor});e(l("jwlist li.active .jwdescription"),{color:j.activecolor});s={overflow:"hidden"};""!==j.overcolor&&(s.color=j.overcolor);k.itemOver&&(s["background-image"]="url("+k.itemOver.src+")");b||(e(l("jwlist li:hover"),s),e(l("jwlist li:hover .jwtitle"),{color:j.titleovercolor}),e(l("jwlist li:hover .jwdescription"),{color:j.overcolor}));e(l("jwtextwrapper"),{height:p,position:"relative"});e(l("jwtitle"),{overflow:"hidden",display:"inline-block",
height:B?p:20,color:j.titlecolor,"font-size":j.titlesize,"font-weight":j.titleweight,"margin-top":B?"0 10px":10,"margin-left":10,"margin-right":10,"line-height":B?p:20});e(l("jwdescription"),{display:"block","font-size":j.fontsize,"line-height":18,"margin-left":10,"margin-right":10,overflow:"hidden",height:36,position:"relative"});n.jwAddEventListener(a.JWPLAYER_PLAYLIST_LOADED,function(){C.innerHTML="";for(var a=n.jwGetPlaylist(),d=[],f=0;f<a.length;f++)a[f]["ova.hidden"]||d.push(a[f]);if(w=d){a=
m("ul","jwlist");a.id=q.id+"_ul"+Math.round(1E7*Math.random());t=a;for(a=0;a<w.length;a++){var j=a,d=w[j],f=m("li","jwitem"),h=void 0;f.id=t.id+"_item_"+j;0<j?(h=m("div","jwplaylistdivider"),f.appendChild(h)):(j=k.divider?k.divider.height:0,f.style.height=p-j+"px",f.style["background-size"]="100% "+(p-j)+"px");j=m("div","jwplaylistimg jwfill");h=void 0;d["playlist.image"]&&k.itemImage?h=d["playlist.image"]:d.image&&k.itemImage?h=d.image:k.itemImage&&(h=k.itemImage.src);h&&!B&&(e("#"+f.id+" .jwplaylistimg",
{"background-image":h}),f.appendChild(j));j=m("div","jwtextwrapper");h=m("span","jwtitle");h.innerHTML=d&&d.title?d.title:"";j.appendChild(h);d.description&&!B&&(h=m("span","jwdescription"),h.innerHTML=d.description,j.appendChild(h));f.appendChild(j);d=f;b?(new c.touch(d)).addEventListener(c.touchEvents.TAP,r(a)):d.onclick=r(a);t.appendChild(d)}D=n.jwGetPlaylistIndex();C.appendChild(t);x=new g.playlistslider(q.id+"_slider",n.skin,q,t)}});n.jwAddEventListener(a.JWPLAYER_PLAYLIST_ITEM,function(a){0<=
D&&(d.getElementById(t.id+"_item_"+D).className="jwitem",D=a.index);d.getElementById(t.id+"_item_"+a.index).className="jwitem active";a=n.jwGetPlaylistIndex();a!=v&&(v=-1,x&&x.visible()&&x.thumbPosition(a/(n.jwGetPlaylist().length-1)))});n.jwAddEventListener(a.JWPLAYER_RESIZE,function(){F.redraw()});return this};e(".jwplaylist",{position:"absolute",width:"100%",height:"100%"});c.dragStyle(".jwplaylist","none");e(".jwplaylist .jwplaylistimg",{position:"relative",width:"100%","float":"left",margin:"0 5px 0 0",
background:"#000",overflow:"hidden"});e(".jwplaylist .jwlist",{position:"absolute",width:"100%","list-style":"none",margin:0,padding:0,overflow:"hidden"});e(".jwplaylist .jwlistcontainer",{position:"absolute",overflow:"hidden",width:"100%",height:"100%"});e(".jwplaylist .jwlist li",{width:"100%"});e(".jwplaylist .jwtextwrapper",{overflow:"hidden"});e(".jwplaylist .jwplaylistdivider",{position:"absolute"});b&&c.transitionStyle(".jwplaylist .jwlist","top .35s")})(jwplayer.html5);
(function(g){function h(){var a=[],b;for(b=0;b<arguments.length;b++)a.push(".jwplaylist ."+arguments[b]);return a.join(",")}var a=jwplayer.utils,c=a.touchEvents,e=a.css,b=document,d=window,f=void 0;g.playlistslider=function(h,g,m,r){function n(a){return"#"+k.id+(a?" ."+a:"")}function z(a,c,d,k){var j=b.createElement("div");a&&(j.className=a,c&&e(n(a),{"background-image":c.src?c.src:f,"background-repeat":k?"repeat-y":"no-repeat",height:k?f:c.height}));d&&d.appendChild(j);return j}function j(a){return(a=
x.getSkinElement("playlist",a))?a:{width:0,height:0,src:f}}function q(a){if(G)return a=a?a:d.event,aa(A-(a.detail?-1*a.detail:a.wheelDelta/40)/10),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.cancel=!0,a.returnValue=!1}function C(a){0==a.button&&(s=!0);b.onselectstart=function(){return!1};d.addEventListener("mousemove",t,!1);d.addEventListener("mouseup",v,!1)}function w(a){aa(A-2*a.deltaY/p.clientHeight)}function t(b){if(s||"click"==b.type){var c=
a.bounds(B),d=F.clientHeight/2;aa((b.pageY-c.top-d)/(c.height-d-d))}}function D(a){return function(b){0<b.button||(aa(A+0.05*a),K=setTimeout(function(){I=setInterval(function(){aa(A+0.05*a)},50)},500))}}function v(){s=!1;d.removeEventListener("mousemove",t);d.removeEventListener("mouseup",v);b.onselectstart=f;clearTimeout(K);clearInterval(I)}var x=g,p=r,k,B,F,s,A=0,K,I;g=a.isMobile();var G=!0,H,P,Q,M,y,R,T,ca,ba;this.element=function(){return k};this.visible=function(){return G};var S=this.redraw=
function(){clearTimeout(ba);ba=setTimeout(function(){if(p&&p.clientHeight){var a=p.parentNode.clientHeight/p.clientHeight;0>a&&(a=0);1<a?G=!1:(G=!0,e(n("jwthumb"),{height:Math.max(B.clientHeight*a,y.height+R.height)}));e(n(),{visibility:G?"visible":"hidden"});p&&(p.style.width=G?p.parentElement.clientWidth-Q.width+"px":"")}else ba=setTimeout(S,10)},0)},aa=this.thumbPosition=function(a){isNaN(a)&&(a=0);A=Math.max(0,Math.min(1,a));e(n("jwthumb"),{top:T+(B.clientHeight-F.clientHeight)*A});r&&(r.style.top=
Math.min(0,k.clientHeight-r.scrollHeight)*A+"px")};k=z("jwslider",null,m);k.id=h;h=new a.touch(p);g?h.addEventListener(c.DRAG,w):(k.addEventListener("mousedown",C,!1),k.addEventListener("click",t,!1));H=j("sliderCapTop");P=j("sliderCapBottom");Q=j("sliderRail");h=j("sliderRailCapTop");m=j("sliderRailCapBottom");M=j("sliderThumb");y=j("sliderThumbCapTop");R=j("sliderThumbCapBottom");T=H.height;ca=P.height;e(n(),{width:Q.width});e(n("jwrail"),{top:T,bottom:ca});e(n("jwthumb"),{top:T});H=z("jwslidertop",
H,k);P=z("jwsliderbottom",P,k);B=z("jwrail",null,k);F=z("jwthumb",null,k);g||(H.addEventListener("mousedown",D(-1),!1),P.addEventListener("mousedown",D(1),!1));z("jwrailtop",h,B);z("jwrailback",Q,B,!0);z("jwrailbottom",m,B);e(n("jwrailback"),{top:h.height,bottom:m.height});z("jwthumbtop",y,F);z("jwthumbback",M,F,!0);z("jwthumbbottom",R,F);e(n("jwthumbback"),{top:y.height,bottom:R.height});S();p&&!g&&(p.addEventListener("mousewheel",q,!1),p.addEventListener("DOMMouseScroll",q,!1));return this};e(h("jwslider"),
{position:"absolute",height:"100%",visibility:"hidden",right:0,top:0,cursor:"pointer","z-index":1,overflow:"hidden"});e(h("jwslider")+" *",{position:"absolute",width:"100%","background-position":"center","background-size":"100% 100%",overflow:"hidden"});e(h("jwslidertop","jwrailtop","jwthumbtop"),{top:0});e(h("jwsliderbottom","jwrailbottom","jwthumbbottom"),{bottom:0})})(jwplayer.html5);
(function(g){var h=jwplayer.utils,a=h.css,c=document,e="none";g.rightclick=function(a,d){function f(a){var b=c.createElement("div");b.className=a.replace(".","");return b}function u(){r||(n.style.display=e)}var l,m=h.extend({aboutlink:"http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+g.version+"\x26m\x3dh\x26e\x3do",abouttext:"About JW Player "+g.version+"..."},d),r=!1,n,z;this.element=function(){return n};this.destroy=function(){c.removeEventListener("mousedown",u,!1)};l=c.getElementById(a.id);
n=f(".jwclick");n.id=a.id+"_menu";n.style.display=e;l.oncontextmenu=function(a){if(!r){null==a&&(a=window.event);var b=null!=a.target?a.target:a.srcElement,c=h.bounds(l),b=h.bounds(b);n.style.display=e;n.style.left=(a.offsetX?a.offsetX:a.layerX)+b.left-c.left+"px";n.style.top=(a.offsetY?a.offsetY:a.layerY)+b.top-c.top+"px";n.style.display="block";a.preventDefault()}};n.onmouseover=function(){r=!0};n.onmouseout=function(){r=!1};c.addEventListener("mousedown",u,!1);z=f(".jwclick_item");z.innerHTML=
m.abouttext;z.onclick=function(){window.top.location=m.aboutlink};n.appendChild(z);l.appendChild(n)};a(".jwclick",{"background-color":"#FFF","-webkit-border-radius":5,"-moz-border-radius":5,"border-radius":5,height:"auto",border:"1px solid #bcbcbc","font-family":'"MS Sans Serif", "Geneva", sans-serif',"font-size":10,width:320,"-webkit-box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset","-moz-box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
"box-shadow":"5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",position:"absolute","z-index":999},!0);a(".jwclick div",{padding:"8px 21px",margin:"0px","background-color":"#FFF",border:"none","font-family":'"MS Sans Serif", "Geneva", sans-serif',"font-size":10,color:"inherit"},!0);a(".jwclick_item",{padding:"8px 21px","text-align":"left",cursor:"pointer"},!0);a(".jwclick_item:hover",{"background-color":"#595959",color:"#FFF"},!0);a(".jwclick_item a",{"text-decoration":e,color:"#000"},
!0);a(".jwclick hr",{width:"100%",padding:0,margin:0,border:"1px #e9e9e9 solid"},!0)})(jwplayer.html5);
(function(g){var h=jwplayer,a=h.utils,c=h.events,e=h.playlist,b=2,d=4;g.setup=function(f,h){function l(a,b,c){v.push({name:a,method:b,depends:c})}function m(){for(var a=0;a<v.length;a++){var b=v[a],c;a:{if(c=b.depends){c=c.toString().split(",");for(var d=0;d<c.length;d++)if(!C[c[d]]){c=!1;break a}}c=!0}if(c){v.splice(a,1);try{b.method(),m()}catch(e){j(e.message)}return}}0<v.length&&!D&&setTimeout(m,500)}function r(){C[b]=!0}function n(a){j("Error loading skin: "+a)}function z(){C[d]=!0}function j(a){D=
!0;t.sendEvent(c.JWPLAYER_ERROR,{message:a});q.setupError(a)}var q=h,C={},w,t=new c.eventdispatcher,D=!1,v=[];a.extend(this,t);this.start=m;l(1,function(){f.edition&&"invalid"==f.edition()?j("Error setting up player: Invalid license key"):C[1]=!0});l(b,function(){w=new g.skin;w.load(f.config.skin,r,n)},1);l(3,function(){switch(a.typeOf(f.config.playlist)){case "string":j("Can't load a playlist as a string anymore");case "array":var b=new e(f.config.playlist);f.setPlaylist(b);0==f.playlist[0].sources.length?
j("Error loading playlist: No playable sources found"):C[3]=!0}},1);l(d,function(){var a=f.playlist[f.item].image;if(a){var b=new Image;b.addEventListener("load",z,!1);b.addEventListener("error",z,!1);b.src=a;setTimeout(z,500)}else C[d]=!0},3);l(5,function(){q.setup(w);C[5]=!0},d+","+b);l(6,function(){C[6]=!0},"5,3");l(7,function(){t.sendEvent(c.JWPLAYER_READY);C[7]=!0},6)}})(jwplayer.html5);
(function(g){g.skin=function(){var h={},a=!1;this.load=function(c,e,b){new g.skinloader(c,function(b){a=!0;h=b;"function"==typeof e&&e()},function(a){"function"==typeof b&&b(a)})};this.getSkinElement=function(c,e){c=c.toLowerCase();e=e.toLowerCase();if(a)try{return h[c].elements[e]}catch(b){jwplayer.utils.log("No such skin component / element: ",[c,e])}return null};this.getComponentSettings=function(c){c=c.toLowerCase();return a&&h&&h[c]?h[c].settings:null};this.getComponentLayout=function(c){c=c.toLowerCase();
if(a){var e=h[c].layout;if(e&&(e.left||e.right||e.center))return h[c].layout}return null}}})(jwplayer.html5);
(function(g){var h=jwplayer.utils,a=h.foreach,c="Skin formatting error";g.skinloader=function(e,b,d){function f(a){z=a;h.ajax(h.getAbsolutePath(t),function(a){try{h.exists(a.responseXML)&&l(a.responseXML)}catch(b){q(c)}},function(a){q(a)})}function u(a,b){return a?a.getElementsByTagName(b):null}function l(a){var b=u(a,"skin")[0];a=u(b,"component");var c=b.getAttribute("target"),b=parseFloat(b.getAttribute("pixelratio"));0<b&&(x=b);(!c||parseFloat(c)>parseFloat(jwplayer.version))&&q("Incompatible player version");
if(0===a.length)j(z);else for(c=0;c<a.length;c++){var d=n(a[c].getAttribute("name")),b={settings:{},elements:{},layout:{}},e=u(u(a[c],"elements")[0],"element");z[d]=b;for(var f=0;f<e.length;f++)r(e[f],d);if((d=u(a[c],"settings")[0])&&0<d.childNodes.length){d=u(d,"setting");for(e=0;e<d.length;e++){var f=d[e].getAttribute("name"),g=d[e].getAttribute("value");/color$/.test(f)&&(g=h.stringToColor(g));b.settings[n(f)]=g}}if((d=u(a[c],"layout")[0])&&0<d.childNodes.length){d=u(d,"group");for(e=0;e<d.length;e++){g=
d[e];f={elements:[]};b.layout[n(g.getAttribute("position"))]=f;for(var l=0;l<g.attributes.length;l++){var t=g.attributes[l];f[t.name]=t.value}g=u(g,"*");for(l=0;l<g.length;l++){t=g[l];f.elements.push({type:t.tagName});for(var v=0;v<t.attributes.length;v++){var w=t.attributes[v];f.elements[l][n(w.name)]=w.value}h.exists(f.elements[l].name)||(f.elements[l].name=t.tagName)}}}C=!1;m()}}function m(){clearInterval(w);D||(w=setInterval(function(){var b=!0;a(z,function(c,d){"properties"!=c&&a(d.elements,
function(a){(z[n(c)]?z[n(c)].elements[n(a)]:null).ready||(b=!1)})});b&&!1==C&&(clearInterval(w),j(z))},100))}function r(a,b){b=n(b);var c=new Image,d=n(a.getAttribute("name")),e=a.getAttribute("src");if(0!==e.indexOf("data:image/png;base64,"))var f=h.getAbsolutePath(t),e=[f.substr(0,f.lastIndexOf("/")),b,e].join("/");z[b].elements[d]={height:0,width:0,src:"",ready:!1,image:c};c.onload=function(){var a=b,e=z[n(a)]?z[n(a)].elements[n(d)]:null;e?(e.height=Math.round(c.height/x*v),e.width=Math.round(c.width/
x*v),e.src=c.src,e.ready=!0,m()):h.log("Loaded an image for a missing element: "+a+"."+d)};c.onerror=function(){D=!0;m();q("Skin image not found: "+this.src)};c.src=e}function n(a){return a?a.toLowerCase():""}var z={},j=b,q=d,C=!0,w,t=e,D=!1,v=(jwplayer.utils.isMobile(),1),x=1;"string"!=typeof t||""===t?l(g.defaultskin().xml):"xml"!=h.extension(t)?q("Skin not a valid file type"):new g.skinloader("",f,q)}})(jwplayer.html5);
(function(g){var h=g.utils,a=g.events,c=h.css;g.html5.thumbs=function(e){function b(a){r=null;try{a=(new g.parsers.srt).parse(a.responseText,!0)}catch(b){d(b.message);return}if("array"!==h.typeOf(a))return d("Invalid data");l=a}function d(a){r=null;h.log("Thumbnails could not be loaded: "+a)}function f(a,b,d){a.onload=null;b.width||(b.width=a.width,b.height=a.height);b["background-image"]=a.src;c.style(u,b);d&&d(b.width)}var u,l,m,r,n,z={},j,q=new a.eventdispatcher;h.extend(this,q);u=document.createElement("div");
u.id=e;this.load=function(a){c.style(u,{display:"none"});r&&(r.onload=null,r.onreadystatechange=null,r.onerror=null,r.abort&&r.abort(),r=null);j&&(j.onload=null);a?(m=a.split("?")[0].split("/").slice(0,-1).join("/"),r=h.ajax(a,b,d,!0)):(l=n=j=null,z={})};this.element=function(){return u};this.updateTimeline=function(a,b){if(l){for(var c=0;c<l.length&&a>l[c].end;)c++;c===l.length&&c--;c=l[c].text;a:{var e=c;if(e&&e!==n){n=e;0>e.indexOf("://")&&(e=m?m+"/"+e:e);var h={display:"block",margin:"0 auto",
"background-position":"0 0",width:0,height:0};if(0<e.indexOf("#xywh"))try{var g=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e),e=g[1];h["background-position"]=-1*g[2]+"px "+-1*g[3]+"px";h.width=g[4];h.height=g[5]}catch(p){d("Could not parse thumbnail");break a}var k=z[e];k?f(k,h,b):(k=new Image,k.onload=function(){f(k,h,b)},z[e]=k,k.src=e);j&&(j.onload=null);j=k}}return c}}}})(jwplayer);
(function(g){var h=g.utils,a=g.events,c=a.state,e=!0,b=!1;g.html5.video=function(d){function f(a,b){y&&M.sendEvent(a,b)}function g(){}function l(b){r(b);y&&(G==c.PLAYING&&!I)&&(F=Number(k.currentTime.toFixed(1)),f(a.JWPLAYER_MEDIA_TIME,{position:F,duration:B}))}function m(c){y&&(s||(s=e,n()),"loadedmetadata"==c.type&&(k.muted&&(k.muted=b,k.muted=e),f(a.JWPLAYER_MEDIA_META,{duration:k.duration,height:k.videoHeight,width:k.videoWidth})))}function r(){s&&(0<K&&!ca)&&(D?setTimeout(function(){0<K&&da(K)},
200):da(K))}function n(){A||(A=e,f(a.JWPLAYER_MEDIA_BUFFER_FULL))}function z(a){y&&!I&&(k.paused?k.currentTime==k.duration&&3<k.duration||qa():(!h.isFF()||!("play"==a.type&&G==c.BUFFERING))&&w(c.PLAYING))}function j(){y&&(I||w(c.BUFFERING))}function q(a){var b;if("array"==h.typeOf(a)&&0<a.length){b=[];for(var c=0;c<a.length;c++){var d=a[c],e={};e.label=d.label&&d.label?d.label?d.label:0:c;b[c]=e}}return b}function C(){A=s=b;p=R[T];w(c.BUFFERING);k.src=p.file;k.load();P=setInterval(t,100);h.isMobile()&&
n()}function w(b){if(!(b==c.PAUSED&&G==c.IDLE)&&!I&&G!=b){var d=G;G=b;f(a.JWPLAYER_PLAYER_STATE,{oldstate:d,newstate:b})}}function t(){if(y){var b;b=0==k.buffered.length||0==k.duration?0:k.buffered.end(k.buffered.length-1)/k.duration;b!=Q&&(Q=b,f(a.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(100*Q)}));1<=b&&clearInterval(P)}}var D=h.isIE(),v={abort:g,canplay:m,canplaythrough:g,durationchange:function(){if(y){var a=Number(k.duration.toFixed(1));B!=a&&(B=a);ca&&(0<K&&a>K)&&da(K);l()}},emptied:g,
ended:function(){y&&G!=c.IDLE&&(T=-1,Y=e,f(a.JWPLAYER_MEDIA_BEFORECOMPLETE),y&&(w(c.IDLE),Y=b,f(a.JWPLAYER_MEDIA_COMPLETE)))},error:function(){y&&(h.log("Error playing media: %o",k.error),M.sendEvent(a.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"}),w(c.IDLE))},loadeddata:g,loadedmetadata:m,loadstart:g,pause:z,play:z,playing:z,progress:r,ratechange:g,readystatechange:g,seeked:function(){!I&&G!=c.PAUSED&&w(c.PLAYING)},seeking:D?j:g,stalled:g,suspend:g,timeupdate:l,volumechange:function(){f(a.JWPLAYER_MEDIA_VOLUME,
{volume:Math.round(100*k.volume)});f(a.JWPLAYER_MEDIA_MUTE,{mute:k.muted})},waiting:j},x,p,k,B,F,s,A,K,I=b,G=c.IDLE,H,P=-1,Q=-1,M=new a.eventdispatcher,y=b,R,T=-1,ca=h.isAndroid(b,e),ba=h.isIOS(7),S=this,aa=[],Y=b;h.extend(S,M);S.load=function(b){if(y){x=b;K=0;B=b.duration?b.duration:-1;F=0;R=x.sources;0>T&&(T=0);for(b=0;b<R.length;b++)if(R[b]["default"]){T=b;break}var c=h.getCookies().qualityLabel;if(c)for(b=0;b<R.length;b++)if(R[b].label==c){T=b;break}(b=q(R))&&M.sendEvent(a.JWPLAYER_MEDIA_LEVELS,
{levels:b,currentQuality:T});C()}};S.stop=function(){y&&(k.removeAttribute("src"),D||k.load(),T=-1,clearInterval(P),w(c.IDLE))};S.play=function(){y&&!I&&k.play()};var qa=S.pause=function(){y&&(k.pause(),w(c.PAUSED))};S.seekDrag=function(a){y&&((I=a)?k.pause():k.play())};var da=S.seek=function(b){y&&(!I&&0==K&&f(a.JWPLAYER_MEDIA_SEEK,{position:F,offset:b}),s?(K=0,k.currentTime=b):K=b)},Ra=S.volume=function(a){h.exists(a)&&(k.volume=Math.min(Math.max(0,a/100),1),H=100*k.volume)};S.mute=function(a){h.exists(a)||
(a=!k.muted);a?(H=100*k.volume,k.muted=e):(Ra(H),k.muted=b)};this.addCaptions=function(a,b,c){h.isIOS()&&k.addTextTrack&&(0<c&&(c=a[c-1].label),h.foreach(a,function(a,b){if(b.data){var c=k.addTextTrack(b.kind,b.label);h.foreach(b.data,function(a,d){1==a%2&&c.addCue(new TextTrackCue(d.begin,b.data[parseInt(a)+1].begin,d.text))});aa.push(c);c.mode="hidden"}}))};this.resetCaptions=function(){};this.fsCaptions=function(a){if(h.isIOS()&&k.addTextTrack){var b=null;h.foreach(aa,function(c,d){!a&&"showing"==
d.mode&&(b=parseInt(c));a||(d.mode="hidden")});if(!a)return b}};this.checkComplete=function(){return Y};S.detachMedia=function(){y=b;return k};S.attachMedia=function(d){y=e;d||(s=b);Y&&(w(c.IDLE),f(a.JWPLAYER_MEDIA_COMPLETE),Y=b)};S.getTag=function(){return k};S.audioMode=function(){if(!R)return b;var a=R[0].type;return"aac"==a||"mp3"==a||"vorbis"==a};S.setCurrentQuality=function(b){T!=b&&(b=parseInt(b,10),0<=b&&(R&&R.length>b)&&(T=b,h.saveCookie("qualityLabel",R[b].label),f(a.JWPLAYER_MEDIA_LEVEL_CHANGED,
{currentQuality:b,levels:q(R)}),b=k.currentTime,C(),S.seek(b)))};S.getCurrentQuality=function(){return T};S.getQualityLevels=function(){return q(R)};d||(d=document.createElement("video"));k=d;h.foreach(v,function(a,c){k.addEventListener(a,c,b)});ba||(k.controls=e,k.controls=b);k.setAttribute("x-webkit-airplay","allow");y=e}})(jwplayer);
(function(g){var h=g.html5,a=g.utils,c=g.events,e=c.state,b=a.css,d=a.bounds,f=a.isMobile(),u=a.isIPad(),l=a.isIPod(),m=a.isAndroid(),r=a.isIOS(),n=document,z="aspectMode",j=!0,q=!1,C="hidden",w="none",t="block";h.view=function(D,v){function x(){var a=d(O),b=Math.round(a.width),e=Math.round(a.height);if(n.body.contains(O)){if(b&&e&&(b!==eb||e!==Va))eb=b,Va=e,X&&X.redraw(),clearTimeout(xa),xa=setTimeout(P,50),va.sendEvent(c.JWPLAYER_RESIZE,{width:b,height:e})}else window.removeEventListener("resize",
x),f&&window.removeEventListener("orientationchange",x);return a}function p(a){a&&(a.element().addEventListener("mousemove",A,q),a.element().addEventListener("mouseout",K,q))}function k(){}function B(a,b){var c=n.createElement(a);b&&(c.className=b);return c}function F(){clearTimeout(Aa);Aa=setTimeout(Y,nb)}function s(){clearTimeout(Aa);if(U.jwGetState()==e.PAUSED||U.jwGetState()==e.PLAYING)qa(),W||(Aa=setTimeout(Y,nb))}function A(){clearTimeout(Aa);W=j}function K(){W=q}function I(a){va.sendEvent(a.type,
a)}function G(c,d,e){var f=O.className,g,h,k=U.id+"_view";b.block(k);if(e=!!e)f=f.replace(/\s*aspectMode/,""),O.className!==f&&(O.className=f),b.style(O,{display:t},e);a.exists(c)&&a.exists(d)&&(L.width=c,L.height=d);e={width:c};-1==f.indexOf(z)&&(e.height=d);b.style(O,e,!0);X&&X.redraw();V&&V.redraw(j);ea&&(ea.offset(V&&0<=ea.position().indexOf("bottom")?V.height()+V.margin():0),setTimeout(function(){N&&N.offset("top-left"==ea.position()?ea.element().clientWidth+ea.margin():0)},500));H(d);g=L.playlistsize;
h=L.playlistposition;if(oa&&g&&("right"==h||"bottom"==h))oa.redraw(),f={display:t},e={},f[h]=0,e[h]=g,"right"==h?f.width=g:f.height=g,b.style(Oa,f),b.style(za,e);P(c,d);b.unblock(k)}function H(a){var b=d(O);ka=0<a.toString().indexOf("%")||0===b.height?q:"bottom"==L.playlistposition?b.height<=40+L.playlistsize:40>=b.height;V&&(ka?(V.audioMode(j),qa(),X.hidePreview(j),X&&X.hide(),da(q)):(V.audioMode(q),Sa(U.jwGetState())));ea&&ka&&S();O.style.backgroundColor=ka?"transparent":"#000"}function P(b,c){if(ja){if(!b||
isNaN(Number(b)))b=ra.clientWidth;if(!c||isNaN(Number(c)))c=ra.clientHeight;a.stretch(L.stretching,ja,b,c,ja.videoWidth,ja.videoHeight)&&(clearTimeout(xa),xa=setTimeout(P,250))}}function Q(a){if(L.fullscreen)switch(a.keyCode){case 27:fa(q)}}function M(a){r||(a?(O.className+=" jwfullscreen",n.getElementsByTagName("body")[0].style["overflow-y"]=C):(O.className=O.className.replace(/\s+jwfullscreen/,""),n.getElementsByTagName("body")[0].style["overflow-y"]=""))}function y(){var a;a=n.mozFullScreenElement||
n.webkitCurrentFullScreenElement||n.msFullscreenElement||ja.webkitDisplayingFullscreen;a=!(!a||a.id&&a.id!=U.id);L.fullscreen!=a&&fa(a)}function R(){V&&(!ka&&!L.getVideo().audioMode())&&V.hide()}function T(){N&&(!ka&&L.controls)&&N.show()}function ca(){N&&(!Ga&&!L.getVideo().audioMode())&&N.hide()}function ba(){ea&&!ka&&ea.show()}function S(){ea&&!L.getVideo().audioMode()&&ea.hide(ka)}function aa(){X&&L.controls&&!ka&&(!l||U.jwGetState()==e.IDLE)&&X.show();if(!f||!L.fullscreen)ja.controls=q}function Y(){clearTimeout(Aa);
la=q;var a=U.jwGetState();(!v.controls||a!=e.PAUSED)&&R();v.controls||ca();a!=e.IDLE&&a!=e.PAUSED&&(ca(),S())}function qa(){la=j;if((L.controls||ka)&&!(l&&$==e.PAUSED))(!l||ka)&&V&&V.show(),T();fb.hide&&ba()}function da(a){(a=a&&!ka)||m?b.style(ra,{visibility:"visible",opacity:1}):b.style(ra,{visibility:C,opacity:0})}function Ra(){Ga=j;fa(q);L.controls&&T()}function ha(){}function kb(){}function Ia(a){Ga=q;clearTimeout(ga);ga=setTimeout(function(){Sa(a.newstate)},100)}function Ya(){R()}function Sa(a){$=
a;switch(a){case e.PLAYING:(Ba?Ja:L).getVideo().audioMode()?(da(q),X.hidePreview(ka),X.setHiding(j),V&&(qa(),V.hideFullscreen(j)),T(),ba()):(da(j),P(),X.hidePreview(j),V&&V.hideFullscreen(q),Y());break;case e.IDLE:da(q);ka||(X.hidePreview(q),aa(),T(),ba(),V&&V.hideFullscreen(q));break;case e.BUFFERING:aa();Y();f&&da(j);break;case e.PAUSED:aa(),qa()}}function Ta(a){return"#"+U.id+(a?" ."+a:"")}function Na(a,c){b(a,{display:c?t:w})}var U=D,L=v,O,za,ua,Za,Oa,Aa=-1,nb=f?4E3:2E3,ja,ra,eb,Va,sa,Pa,Ca,Ja,
Ba=q,V,X,N,ea,fb=a.extend({},L.componentConfig("logo")),J,oa,ka,Xa=q,la=q,Ga,E,xa=-1,W=q,$,va=new c.eventdispatcher;a.extend(this,va);this.getCurrentCaptions=function(){return J.getCurrentCaptions()};this.setCurrentCaptions=function(a){J.setCurrentCaptions(a)};this.getCaptionsList=function(){return J.getCaptionsList()};this.setup=function(d){if(!Xa){U.skin=d;za=B("span","jwmain");za.id=U.id+"_view";ra=B("span","jwvideo");ja=L.getVideo().getTag();ra.appendChild(ja);ua=B("span","jwcontrols");sa=B("span",
"jwinstream");Oa=B("span","jwplaylistcontainer");Za=B("span","jwaspect");d=L.height;var g=L.componentConfig("controlbar"),m=L.componentConfig("display");H(d);J=new h.captions(U,L.captions);J.addEventListener(c.JWPLAYER_CAPTIONS_LIST,I);J.addEventListener(c.JWPLAYER_CAPTIONS_CHANGED,I);J.addEventListener(c.JWPLAYER_CAPTIONS_LOADED,k);ua.appendChild(J.element());X=new h.display(U,m);X.addEventListener(c.JWPLAYER_DISPLAY_CLICK,function(a){I(a);f?la?Y():qa():Ia(U.jwGetState());la&&F()});ka&&X.hidePreview(j);
ua.appendChild(X.element());ea=new h.logo(U,fb);ua.appendChild(ea.element());N=new h.dock(U,L.componentConfig("dock"));ua.appendChild(N.element());U.edition&&!f?E=new h.rightclick(U,{abouttext:L.abouttext,aboutlink:L.aboutlink}):f||(E=new h.rightclick(U,{}));L.playlistsize&&(L.playlistposition&&L.playlistposition!=w)&&(oa=new h.playlistcomponent(U,{}),Oa.appendChild(oa.element()));V=new h.controlbar(U,g);V.addEventListener(c.JWPLAYER_USER_ACTION,F);ua.appendChild(V.element());l&&R();za.appendChild(ra);
za.appendChild(ua);za.appendChild(sa);O.appendChild(za);O.appendChild(Za);O.appendChild(Oa);n.addEventListener("webkitfullscreenchange",y,q);ja.addEventListener("webkitbeginfullscreen",y,q);ja.addEventListener("webkitendfullscreen",y,q);n.addEventListener("mozfullscreenchange",y,q);n.addEventListener("MSFullscreenChange",y,q);n.addEventListener("keydown",Q,q);window.removeEventListener("resize",x);window.addEventListener("resize",x,!1);f&&(window.removeEventListener("orientationchange",x),window.addEventListener("orientationchange",
x,!1));U.jwAddEventListener(c.JWPLAYER_PLAYER_READY,kb);U.jwAddEventListener(c.JWPLAYER_PLAYER_STATE,Ia);U.jwAddEventListener(c.JWPLAYER_MEDIA_ERROR,Ya);U.jwAddEventListener(c.JWPLAYER_PLAYLIST_COMPLETE,Ra);U.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM,ha);Ia({newstate:e.IDLE});f||(ua.addEventListener("mouseout",function(){clearTimeout(Aa);Aa=setTimeout(Y,10)},q),ua.addEventListener("mousemove",s,q),a.isIE()&&(ra.addEventListener("mousemove",s,q),ra.addEventListener("click",X.clickHandler)));p(V);
p(N);p(ea);b("#"+O.id+"."+z+" .jwaspect",{"margin-top":L.aspectratio,display:t});d=a.exists(L.aspectratio)?parseFloat(L.aspectratio):100;g=L.playlistsize;b("#"+O.id+".playlist-right .jwaspect",{"margin-bottom":-1*g*(d/100)+"px"});b("#"+O.id+".playlist-right .jwplaylistcontainer",{width:g+"px",right:0,top:0,height:"100%"});b("#"+O.id+".playlist-bottom .jwaspect",{"padding-bottom":g+"px"});b("#"+O.id+".playlist-bottom .jwplaylistcontainer",{width:"100%",height:g+"px",bottom:0});b("#"+O.id+".playlist-right .jwmain",
{right:g+"px"});b("#"+O.id+".playlist-bottom .jwmain",{bottom:g+"px"});setTimeout(function(){G(L.width,L.height)},0)}};var fa=this.fullscreen=function(b){a.exists(b)||(b=!L.fullscreen);if(b){if((Ba?Ja:L).getVideo().audioMode())return;if(f)try{ja.webkitEnterFullScreen(),L.setFullscreen(j)}catch(c){return}else L.fullscreen||(M(j),O.requestFullScreen?O.requestFullScreen():O.mozRequestFullScreen?O.mozRequestFullScreen():O.webkitRequestFullScreen?O.webkitRequestFullScreen():O.msRequestFullscreen&&O.msRequestFullscreen(),
L.setFullscreen(j))}else f?(ja.webkitExitFullScreen(),L.setFullscreen(q),u&&(ja.controls=q)):L.fullscreen&&(M(q),L.setFullscreen(q),n.cancelFullScreen?n.cancelFullScreen():n.mozCancelFullScreen?n.mozCancelFullScreen():n.webkitCancelFullScreen?n.webkitCancelFullScreen():n.msExitFullscreen&&n.msExitFullscreen()),u&&U.jwGetState()==e.PAUSED&&setTimeout(aa,500);V&&V.redraw();X&&X.redraw();N&&N.redraw();P();L.fullscreen&&(clearTimeout(xa),xa=setTimeout(P,200))};this.resize=function(a,b){G(a,b,!0);x()};
this.resizeMedia=P;var Qa=this.completeSetup=function(){b.style(O,{opacity:1})},ga;this.setupInstream=function(a,c,d,f){b.unblock();Na(Ta("jwinstream"),j);Na(Ta("jwcontrols"),q);sa.appendChild(a);Pa=c;Ca=d;Ja=f;Ia({newstate:e.PLAYING});Ba=j};this.destroyInstream=function(){b.unblock();Na(Ta("jwinstream"),q);Na(Ta("jwcontrols"),j);sa.innerHTML="";Ba=q};this.setupError=function(a){Xa=j;g.embed.errorScreen(O,a,L);Qa()};this.addButton=function(a,b,c,d){N&&(N.addButton(a,b,c,d),U.jwGetState()==e.IDLE&&
T())};this.removeButton=function(a){N&&N.removeButton(a)};this.setControls=function(a){var b=L.controls,d=a?j:q;L.controls=d;d!=b&&(Ba?a?(Pa.show(),Ca.show()):(Pa.hide(),Ca.hide()):d?Ia({newstate:U.jwGetState()}):(Y(),X&&X.hide()),va.sendEvent(c.JWPLAYER_CONTROLS,{controls:d}))};this.addCues=function(a){V&&V.addCues(a)};this.forceState=function(a){X.forceState(a)};this.releaseState=function(){X.releaseState(U.jwGetState())};this.getSafeRegion=function(){var a={x:0,y:0,width:0,height:0};if(!L.controls)return a;
V.showTemp();N.showTemp();var b=d(za),c=b.top,e=Ba?d(n.getElementById(U.id+"_instream_controlbar")):d(V.element()),f=Ba?!1:0<N.numButtons(),g=0===ea.position().indexOf("top"),h=d(ea.element());f&&(f=d(N.element()),a.y=Math.max(0,f.bottom-c));g&&(a.y=Math.max(a.y,h.bottom-c));a.width=b.width;a.height=e.height?(g?e.top:h.top)-c-a.y:b.height-a.y;V.hideTemp();N.hideTemp();return a};this.destroy=function(){n.removeEventListener("webkitfullscreenchange",y,q);n.removeEventListener("mozfullscreenchange",
y,q);n.removeEventListener("MSFullscreenChange",y,q);ja.removeEventListener("webkitbeginfullscreen",y,q);ja.removeEventListener("webkitendfullscreen",y,q);n.removeEventListener("keydown",Q,q);E&&E.destroy()};O=B("div","jwplayer playlist-"+L.playlistposition);O.id=U.id;L.aspectratio&&(b.style(O,{display:"inline-block"}),O.className=O.className.replace("jwplayer","jwplayer "+z));G(L.width,L.height);var La=n.getElementById(U.id);La.parentNode.replaceChild(O,La)};b(".jwplayer",{position:"relative",display:"block",
opacity:0,"min-height":0,"-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease","-o-transition":"opacity .25s ease"});b(".jwmain",{position:"absolute",left:0,right:0,top:0,bottom:0,"-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease","-o-transition":"opacity .25s ease"});b(".jwvideo, .jwcontrols",{position:"absolute",height:"100%",width:"100%","-webkit-transition":"opacity .25s ease","-moz-transition":"opacity .25s ease","-o-transition":"opacity .25s ease"});
b(".jwvideo",{overflow:C,visibility:C,opacity:0,cursor:"pointer"});b(".jwvideo video",{background:"transparent",height:"100%",width:"100%",position:"absolute",margin:"auto",right:0,left:0,top:0,bottom:0});b(".jwplaylistcontainer",{position:"absolute",height:"100%",width:"100%",display:w});b(".jwinstream",{position:"absolute",top:0,left:0,bottom:0,right:0,display:"none"});b(".jwaspect",{display:"none"});b(".jwplayer."+z,{height:"auto"});b(".jwplayer.jwfullscreen",{width:"100%",height:"100%",left:0,
right:0,top:0,bottom:0,"z-index":1E3,position:"fixed"},j);b(".jwplayer.jwfullscreen .jwmain",{left:0,right:0,top:0,bottom:0},j);b(".jwplayer.jwfullscreen .jwplaylistcontainer",{display:w},j);b(".jwplayer .jwuniform",{"background-size":"contain !important"});b(".jwplayer .jwfill",{"background-size":"cover !important","background-position":"center"});b(".jwplayer .jwexactfit",{"background-size":"100% 100% !important"})})(jwplayer);
(function(g){var h=jwplayer.utils.extend,a=g.logo;a.defaults.prefix="";a.defaults.file="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAyCAMAAACkjD/XAAACnVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkSEhIAAAAaGhoAAAAiIiIrKysAAAAxMTEAAAA4ODg+Pj4AAABEREQAAABJSUkAAABOTk5TU1NXV1dcXFxiYmJmZmZqamptbW1xcXF0dHR3d3d9fX2AgICHh4eKioqMjIyOjo6QkJCSkpKUlJSWlpaYmJidnZ2enp6ioqKjo6OlpaWmpqanp6epqamqqqqurq6vr6+wsLCxsbG0tLS1tbW2tra3t7e6urq7u7u8vLy9vb2+vr6/v7/AwMDCwsLFxcXFxcXHx8fIyMjJycnKysrNzc3Ozs7Ozs7Pz8/Pz8/Q0NDR0dHR0dHS0tLU1NTV1dXW1tbW1tbW1tbX19fX19fa2trb29vb29vc3Nzc3Nzf39/f39/f39/f39/g4ODh4eHj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXn5+fn5+fn5+fn5+fn5+fo6Ojo6Ojq6urq6urq6urr6+vr6+vr6+vt7e3t7e3t7e3t7e3u7u7u7u7v7+/v7+/w8PDw8PDw8PDw8PDy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL09PT09PT09PT09PT09PT09PT09PT29vb29vb29vb29vb29vb29vb29vb29vb39/f39/f39/f39/f39/f4+Pj4+Pj4+Pj5+fn5+fn5+fn5+fn5+fn5+fn5+fn6+vr6+vr6+vr6+vr6+vr6+vr8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////9kpi5JAAAA33RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhYWFxcYGBgZGRoaGhsbHBwdHR4eHx8gISIiIyQmJicoKSoqKywtLi4uMDEyMjM0NTU2Njc5Ojo7Ozw9Pj5AQUJCQ0ZGSElKSktMTU5PUFFRUlRVVlZXWFpbXV5eX2BhYmVmZ2hpamtsbW5vcHFyc3R2d3h5enx9fn+BgoKDhIWGiYmKi4yNjo+QkZKTlJWWl5eYmZqbnJ2enp+goaKkpaamp6ipqqusra6vsLKzs7W2t7i5uru8vb6/wMHCwsPExcbHyMnJysvMVK8y+QAAB5FJREFUeNrFmP2f3EQdx8kmm2yy2WQzmZkjl3bJ2Rb12mtp8SiKiBUUxVKFVisIihV62CKCIoK0UvVK1bP07mitBeVJUVso0Duw1Xo9ET0f6JN47bV3u9+/xe83kyzr0+vlL7t8Xq9ubpLpvHfm+7i54P+UVkBp2gWdFpGNYtFA+NtALpYcxzZ1rSM0TSvgv5xse0wwu1joxDYLulE0dKTTSLcqfOvMQ1WzoHXAtCadsGXqBCsUnWDxNBzmlq51wLSuz0LmOcTWClZFfA1ghLUbrUwbdq396kAvK5s6HoFdlb8FuLONB66RlGnD5S8BwKkNoVMsFEw3XIOj97hmoX2updP5kml7jgLp/Ec8yzBKntwDMCnwa7TPtUrkWLrliW2gtC+0TdNhvdMAu1hJ19plYNcP0LGKiJp/HJTeEI5V8sjJ4PZ2mTp1rb7Pf5C5JbvCN0Cuha7jpE5WX9oeU6us8YlTUH8grFQC+QzkWuKVvdTJXuWO0Z5Nk2tNkWNdzgLed+4tdNWrkpPBI20ytVYwK+LrQLpPcHk3vIVm1ZCcDD7jt8fUGmYNoeLpJzKW+1vQYSjJyc72ZKbWSOqqhpn+99r/rn99WDDLbJViHZbJirkWtJDkZPArbhta2jFg7LdKV1ID9aWaz5CTzTD0pvB2aypB9xYPKtaUXEC7bKKjeA1dHyJTU+xbFgY/RiAKP2lYsm28RaJmAtfTs6c4xP9g0gycUqKpeDGLegZPl3MqTL6oWCdl9EIrOol20/U6zyzgVJzpeV6l7Dhl18VP1/N8v1r1vQoNSziH1nPKKMdBChbAiprheygfL65tZmxazguYXDoL8BcyqlhRb0W/M3Wy412YRTUd7SKEFIKzIBQ8DBhHewgSjkLB7GwS54wxwcoORqYQ+QyhFGA9VIYxnfCKq2VtE3k3wTB1taLx+FVCNTRyxnU4YQ/8WEY9M7PvkvJHsEsAam5srRRwH0YBhml14Zv7pRz62+LAD/jWE0vHINU6OUGXyc0Mt5GiLW/+6blV8eO4tY8B6t3qvBsZOnUy+HJgFaiuMELfhQ6RrAe4JZGvwxcFPLx69YZDZ1ciOrB03ayEd52vr0x6/zokhbxs+p5o7Oc3kfrkxFOrV392d+NWFaeaXvK652Cw+xTAo9cS5ar0vKcfy9BrgNRfMVN0SOh+gPfWtgN8L7kM6pcI2FSrJUtm7kc0KxlF2xcHd/1xWxxvmv1QLB9/5cJobDiKIxklcmI4ShJ5eJ/qOTSqU6/BBC4JN6boQSAN71Doi1Mnm+B0Rjlavgabo/GZ2V/LL8FRSehkkfzzYIouoqXf31jz3de7kq5DB6JP1a+vSUQnOXrRoujpn2XogumJpwCeBfhDV4qeAdK1QwqdOhkMqdAyyyk6HoHR3tmD4/UlI/DDBNFxHK1tDBDaNrHODU7KDzTW16Lr6nccHZGxHNt3Jao/RrSU8pPTeX+JPYj4NpAGkxsg16FoWP1xP5Bu8UwdYxSXJXRyJ0zeCtsegdsm4QsLBBwcHf3l+fF5hHbscnDh1LeSaGwvModnTl7ChVRuNiblxIkjR6bq+9+R9RzkO7cBadWCdZBroDaq/jgDqHMLMYtSr8jkpwl9aaOxF9bdDHsb9T5Ev/rkk6N398SIDj3X5zfDzi1bDpxdHNWWwcOchS27funeR+EOyTI0RcyKLIM20VPzyOObeh4LJsZ/hYnaRpgRsTwG9TPzLz5XhyOSDlzykDEKLsEYl08cG0W9eW+U4B1eZZmtY7J13PXCeHeg0MrPjlH8yLiJ/mYtfqIFvQVNTaez/cMrfwHHpJC7APZH0csAP5ARokPPwXyIoEjKaOnM7UIIOfKKrJEJvEAguhZHUY1sHb3vH1tCxyS0OvGtAL+/iMubQOlMXyKfA6U8i+I0PqWyecA3AmyVEmPhczxEdBUbOKwCsHsAtfNUDyZNdiNcLQld8cTYgQHScjExjNPvOf9RSsrZtt3uB3f2s0Dku35MyiY6z6LYjbMdx+HvO7pd11/egBtCvh7mFvs+P70Rl8L0yU8r7WROyXb5b77Dxemv+I7L82wmxoeY53U9+/K8HE1ZvBq4eGQfh1SNa0Keo5tZVCXwXs7KluUwIZjrMsrHTsB95f4B50JwztGURtHywsBjvGphtIUiFeb9Kn4pjzHXUOhmlXPI3Ug/5QH6BjS1uWpRRdLNku3YWPNw4RKVSSqfpKLq3k3bIZXMvFha+NjQqXqlhYxKa9EgFJGVqKCrqD2ZloJrql7Qgq4vw9DKfn0ahp73B+ln3hPQY/xKJEO1CC2P6T49UOP/fD+R5qphSBvAslttQb8YZr1os7/5ry0P8VDNoZK6T8pnZpdW4bb9ZWPQ2NPtlhxf/A5yPUApt+0/MP2uqy5nLkaKLyZycuOKCp13u9mWXXasol4staAPYyprN1p5CvkR1nD5pxz9jQDPu1Pvbii3yklQmr2U/LtDUr9Fngelp0NqwDsmirPtoLRWJdxOiQrp9Yr8XGiTk3XyxF2eFuw3+ju5aRJl1Yu+f+LMM1eiexc6/lK0QuWpYhkd3XT+UsfOXhd2WKpO6W/TO3BUO8H/BB7RwuB6W7b7AAAAAElFTkSuQmCC";
g.logo=function(c,e){"free"==c.edition()?e=null:(a.defaults.file="",a.defaults.prefix="");h(this,new a(c,e))}})(jwplayer.html5);(function(g){var h=g.model;g.model=function(a,c){var e=new jwplayer.utils.key(a.key),b=new h(a,c),d=b.componentConfig;b.edition=function(){return e.edition()};b.componentConfig=function(a){return"logo"==a?b.logo:d(a)};return b}})(jwplayer.html5);(function(g){g.player.prototype.edition=function(){return this._model.edition()}})(jwplayer.html5);
(function(g){var h=jwplayer.utils.extend,a=g.rightclick;g.rightclick=function(c,e){if("free"==c.edition())e.aboutlink="http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+g.version+"\x26m\x3dh\x26e\x3df",delete e.abouttext;else{if(!e.aboutlink){var b="http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d"+g.version+"\x26m\x3dh\x26e\x3d",d=c.edition();e.aboutlink=b+("pro"==d?"p":"premium"==d?"r":"ads"==d?"a":"f")}e.abouttext?e.abouttext+=" ...":(b=c.edition(),b=b.charAt(0).toUpperCase()+b.substr(1),
e.abouttext="About JW Player "+g.version+" ("+b+" edition)")}h(this,new a(c,e))}})(jwplayer.html5);(function(g){var h=g.view;g.view=function(a,c){var e=new h(a,c);"invalid"==c.edition()&&e.setupError("Error setting up player: Invalid license key");return e}})(jwplayer.html5);
"undefined"==typeof jwplayer&&(jwplayer=function(e){if(jwplayer.api)return jwplayer.api.selectPlayer(e)},jwplayer.version="6.8.4616",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(e){function a(h){return function(){return b(h)}}function l(h,b,a,k,j){return function(){var d,f;if(j)a(h);else{try{if(d=h.responseXML)if(f=d.firstChild,d.lastChild&&"parsererror"===d.lastChild.nodeName){k&&k("Invalid XML");
return}}catch(g){}if(d&&f)return a(h);(d=c.parseXML(h.responseText))&&d.firstChild?(h=c.extend({},h,{responseXML:d}),a(h)):k&&k(h.responseText?"Invalid XML":b)}}}var g=document,f=window,d=navigator,c=e.utils=function(){};c.exists=function(h){switch(typeof h){case "string":return 0<h.length;case "object":return null!==h;case "undefined":return!1}return!0};c.styleDimension=function(h){return h+(0<h.toString().indexOf("%")?"":"px")};c.getAbsolutePath=function(h,b){c.exists(b)||(b=g.location.href);if(c.exists(h)){var a;
if(c.exists(h)){a=h.indexOf("://");var k=h.indexOf("?");a=0<a&&(0>k||k>a)}else a=void 0;if(a)return h;a=b.substring(0,b.indexOf("://")+3);var k=b.substring(a.length,b.indexOf("/",a.length+1)),j;0===h.indexOf("/")?j=h.split("/"):(j=b.split("?")[0],j=j.substring(a.length+k.length+1,j.lastIndexOf("/")),j=j.split("/").concat(h.split("/")));for(var d=[],f=0;f<j.length;f++)j[f]&&(c.exists(j[f])&&"."!=j[f])&&(".."==j[f]?d.pop():d.push(j[f]));return a+k+"/"+d.join("/")}};c.extend=function(){var h=c.extend.arguments;
if(1<h.length){for(var a=1;a<h.length;a++)c.foreach(h[a],function(a,k){try{c.exists(k)&&(h[0][a]=k)}catch(b){}});return h[0]}return null};var m=window.console=window.console||{log:function(){}};c.log=function(){var h=Array.prototype.slice.call(arguments,0);"object"===typeof m.log?m.log(h):m.log.apply(m,h)};var b=c.userAgentMatch=function(h){return null!==d.userAgent.toLowerCase().match(h)};c.isIE=c.isMSIE=a(/msie/i);c.isFF=a(/firefox/i);c.isChrome=a(/chrome/i);c.isIPod=a(/iP(hone|od)/i);c.isIPad=
a(/iPad/i);c.isSafari602=a(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);c.isIETrident=function(h){return h?(h=parseFloat(h).toFixed(1),b(RegExp("msie\\s*"+h+"|trident/.+rv:\\s*"+h,"i"))):b(/msie|trident/i)};c.isSafari=function(){return b(/safari/i)&&!b(/chrome/i)&&!b(/chromium/i)&&!b(/android/i)};c.isIOS=function(h){return h?b(RegExp("iP(hone|ad|od).+\\sOS\\s"+h,"i")):b(/iP(hone|ad|od)/i)};c.isAndroid=function(h,a){var c=a?!b(/chrome\/[23456789]/i):!0;return h?c&&b(RegExp("android.*"+h,"i")):c&&
b(/android/i)};c.isMobile=function(){return c.isIOS()||c.isAndroid()};c.saveCookie=function(h,a){g.cookie="jwplayer."+h+"\x3d"+a+"; path\x3d/"};c.getCookies=function(){for(var h={},a=g.cookie.split("; "),c=0;c<a.length;c++){var k=a[c].split("\x3d");0===k[0].indexOf("jwplayer.")&&(h[k[0].substring(9,k[0].length)]=k[1])}return h};c.typeOf=function(h){var a=typeof h;return"object"===a?!h?"null":h instanceof Array?"array":a:a};c.translateEventResponse=function(h,a){var b=c.extend({},a);if(h==e.events.JWPLAYER_FULLSCREEN&&
!b.fullscreen)b.fullscreen="true"==b.message?!0:!1,delete b.message;else if("object"==typeof b.data){var k=b.data;delete b.data;b=c.extend(b,k)}else"object"==typeof b.metadata&&c.deepReplaceKeyName(b.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);c.foreach(["position","duration","offset"],function(h,a){b[a]&&(b[a]=Math.round(1E3*b[a])/1E3)});return b};c.flashVersion=function(){if(c.isAndroid())return 0;var h=d.plugins,a;try{if("undefined"!==h&&(a=h["Shockwave Flash"]))return parseInt(a.description.replace(/\D+(\d+)\..*/,
"$1"),10)}catch(b){}if("undefined"!=typeof f.ActiveXObject)try{if(a=new f.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(a.GetVariable("$version").split(" ")[1].split(",")[0],10)}catch(k){}return 0};c.getScriptPath=function(h){for(var a=g.getElementsByTagName("script"),b=0;b<a.length;b++){var c=a[b].src;if(c&&0<=c.indexOf(h))return c.substr(0,c.indexOf(h))}return""};c.deepReplaceKeyName=function(h,a,b){switch(e.utils.typeOf(h)){case "array":for(var k=0;k<h.length;k++)h[k]=e.utils.deepReplaceKeyName(h[k],
a,b);break;case "object":c.foreach(h,function(c,k){var d;if(a instanceof Array&&b instanceof Array){if(a.length!=b.length)return;d=a}else d=[a];for(var f=c,g=0;g<d.length;g++)f=f.replace(RegExp(a[g],"g"),b[g]);h[f]=e.utils.deepReplaceKeyName(k,a,b);c!=f&&delete h[c]})}return h};var p=c.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};c.getPluginPathType=function(h){if("string"==typeof h){h=h.split("?")[0];var a=h.indexOf("://");if(0<a)return p.ABSOLUTE;var b=h.indexOf("/");h=c.extension(h);return 0>a&&
0>b&&(!h||!isNaN(h))?p.CDN:p.RELATIVE}};c.getPluginName=function(h){return h.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};c.getPluginVersion=function(h){return h.replace(/[^-]*-?([^\.]*).*$/,"$1")};c.isYouTube=function(h){return/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(h)};c.youTubeID=function(h){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(h).slice(1).join("").replace("?","")}catch(a){return""}};c.isRtmp=function(h,a){return 0===h.indexOf("rtmp")||"rtmp"==a};c.foreach=
function(a,b){var d,k;for(d in a)"function"==c.typeOf(a.hasOwnProperty)?a.hasOwnProperty(d)&&(k=a[d],b(d,k)):(k=a[d],b(d,k))};c.isHTTPS=function(){return 0===f.location.href.indexOf("https")};c.repo=function(){var a="http://p.jwpcdn.com/"+e.version.split(/\W/).splice(0,2).join("/")+"/";try{c.isHTTPS()&&(a=a.replace("http://","https://ssl."))}catch(b){}return a};c.ajax=function(a,b,d,k){var j;0<a.indexOf("#")&&(a=a.replace(/#.*$/,""));if(a&&0<=a.indexOf("://")&&a.split("/")[2]!=f.location.href.split("/")[2]&&
c.exists(f.XDomainRequest))j=new f.XDomainRequest,j.onload=l(j,a,b,d,k),j.ontimeout=j.onprogress=function(){},j.timeout=5E3;else if(c.exists(f.XMLHttpRequest)){var g=j=new f.XMLHttpRequest,t=a;j.onreadystatechange=function(){if(4===g.readyState)switch(g.status){case 200:l(g,t,b,d,k)();break;case 404:d("File not found")}}}else return d&&d(),j;j.overrideMimeType&&j.overrideMimeType("text/xml");j.onerror=function(){d("Error loading file")};setTimeout(function(){try{j.open("GET",a,!0),j.send()}catch(b){d&&
d(a)}},0);return j};c.parseXML=function(a){var b;try{if(f.DOMParser){if(b=(new f.DOMParser).parseFromString(a,"text/xml"),b.childNodes&&b.childNodes.length&&"parsererror"==b.childNodes[0].firstChild.nodeName)return}else b=new f.ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)}catch(c){return}return b};c.filterPlaylist=function(a,b){var d=[],k,j,f,g;for(k=0;k<a.length;k++)if(j=c.extend({},a[k]),j.sources=c.filterSources(j.sources),0<j.sources.length){for(f=0;f<j.sources.length;f++)g=
j.sources[f],g.label||(g.label=f.toString());d.push(j)}if(b&&0===d.length)for(k=0;k<a.length;k++)if(j=c.extend({},a[k]),j.sources=c.filterSources(j.sources,!0),0<j.sources.length){for(f=0;f<j.sources.length;f++)g=j.sources[f],g.label||(g.label=f.toString());d.push(j)}return d};c.filterSources=function(a,b){var d,k,j=c.extensionmap;if(a){k=[];for(var f=0;f<a.length;f++){var g=a[f].type,m=a[f].file;m&&(m=c.trim(m));g||(g=j.extType(c.extension(m)),a[f].type=g);b?e.embed.flashCanPlay(m,g)&&(d||(d=g),
g==d&&k.push(c.extend({},a[f]))):c.canPlayHTML5(g)&&(d||(d=g),g==d&&k.push(c.extend({},a[f])))}}return k};c.canPlayHTML5=function(a){if(c.isAndroid()&&("hls"==a||"m3u"==a||"m3u8"==a))return!1;a=c.extensionmap.types[a];return!!a&&!!e.vid.canPlayType&&e.vid.canPlayType(a)};c.seconds=function(a){a=a.replace(",",".");var b=a.split(":"),c=0;"s"==a.slice(-1)?c=parseFloat(a):"m"==a.slice(-1)?c=60*parseFloat(a):"h"==a.slice(-1)?c=3600*parseFloat(a):1<b.length?(c=parseFloat(b[b.length-1]),c+=60*parseFloat(b[b.length-
2]),3==b.length&&(c+=3600*parseFloat(b[b.length-3]))):c=parseFloat(a);return c};c.serialize=function(a){return null==a?null:"true"==a.toString().toLowerCase()?!0:"false"==a.toString().toLowerCase()?!1:isNaN(Number(a))||5<a.length||0===a.length?a:Number(a)}}(jwplayer),function(e){var a="video/",l=e.foreach,g={mp4:a+"mp4",vorbis:"audio/ogg",ogg:a+"ogg",webm:a+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},f={mp4:g.mp4,f4v:g.mp4,m4v:g.mp4,mov:g.mp4,m4a:g.aac,f4a:g.aac,aac:g.aac,
mp3:g.mp3,ogv:g.ogg,ogg:g.vorbis,oga:g.vorbis,webm:g.webm,m3u8:g.hls,hls:g.hls},a="video",a={flv:a,f4v:a,mov:a,m4a:a,m4v:a,mp4:a,aac:a,f4a:a,mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},d=e.extensionmap={};l(f,function(a,f){d[a]={html5:f}});l(a,function(a,f){d[a]||(d[a]={});d[a].flash=f});d.types=g;d.mimeType=function(a){var d;l(g,function(b,f){!d&&f==a&&(d=b)});return d};d.extType=function(a){return d.mimeType(f[a])}}(jwplayer.utils),function(e){var a=e.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},
l=document;e.scriptloader=function(g){function f(){c=a.ERROR;b.sendEvent(m.ERROR)}function d(){c=a.COMPLETE;b.sendEvent(m.COMPLETE)}var c=a.NEW,m=jwplayer.events,b=new m.eventdispatcher;e.extend(this,b);this.load=function(){var b=e.scriptloader.loaders[g];if(b&&(b.getStatus()==a.NEW||b.getStatus()==a.LOADING))b.addEventListener(m.ERROR,f),b.addEventListener(m.COMPLETE,d);else if(e.scriptloader.loaders[g]=this,c==a.NEW){c=a.LOADING;var h=l.createElement("script");h.addEventListener?(h.onload=d,h.onerror=
f):h.readyState&&(h.onreadystatechange=function(){("loaded"==h.readyState||"complete"==h.readyState)&&d()});l.getElementsByTagName("head")[0].appendChild(h);h.src=g}};this.getStatus=function(){return c}};e.scriptloader.loaders={}}(jwplayer.utils),function(e){e.trim=function(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")};e.pad=function(a,e,g){for(g||(g="0");a.length<e;)a=g+a;return a};e.xmlAttribute=function(a,e){for(var g=0;g<a.attributes.length;g++)if(a.attributes[g].name&&a.attributes[g].name.toLowerCase()==
e.toLowerCase())return a.attributes[g].value.toString();return""};e.extension=function(a){if(!a||"rtmp"==a.substr(0,4))return"";a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0];if(-1<a.lastIndexOf("."))return a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase()};e.stringToColor=function(a){a=a.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3==a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));return parseInt(a,16)}}(jwplayer.utils),function(e){var a=
"touchmove",l="touchstart";e.touch=function(g){function f(k){k.type==l?(b=!0,h=c(n.DRAG_START,k)):k.type==a?b&&(q||(d(n.DRAG_START,k,h),q=!0),d(n.DRAG,k)):(b&&(q?d(n.DRAG_END,k):(k.cancelBubble=!0,d(n.TAP,k))),b=q=!1,h=null)}function d(a,b,d){if(p[a]&&(b.preventManipulation&&b.preventManipulation(),b.preventDefault&&b.preventDefault(),b=d?d:c(a,b)))p[a](b)}function c(a,b){var d=null;b.touches&&b.touches.length?d=b.touches[0]:b.changedTouches&&b.changedTouches.length&&(d=b.changedTouches[0]);if(!d)return null;
var c=m.getBoundingClientRect(),d={type:a,target:m,x:d.pageX-window.pageXOffset-c.left,y:d.pageY,deltaX:0,deltaY:0};a!=n.TAP&&h&&(d.deltaX=d.x-h.x,d.deltaY=d.y-h.y);return d}var m=g,b=!1,p={},h=null,q=!1,n=e.touchEvents;document.addEventListener(a,f);document.addEventListener("touchend",function(a){b&&q&&d(n.DRAG_END,a);b=q=!1;h=null});document.addEventListener("touchcancel",f);g.addEventListener(l,f);g.addEventListener("touchend",f);this.addEventListener=function(a,b){p[a]=b};this.removeEventListener=
function(a){delete p[a]};return this}}(jwplayer.utils),function(e){e.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}}(jwplayer.utils),function(e){e.key=function(a){var l,g,f;this.edition=function(){return f&&f.getTime()<(new Date).getTime()?"invalid":l};this.token=function(){return g};e.exists(a)||(a="");try{a=e.tea.decrypt(a,"36QXq4W@GSBV^teR");var d=a.split("/");(l=d[0])?/^(free|pro|premium|ads)$/i.test(l)?(g=d[1],d[2]&&0<parseInt(d[2])&&
(f=new Date,f.setTime(String(d[2])))):l="invalid":l="free"}catch(c){l="invalid"}}}(jwplayer.utils),function(e){var a=e.tea={};a.encrypt=function(f,d){if(0==f.length)return"";var c=a.strToLongs(g.encode(f));1>=c.length&&(c[1]=0);for(var m=a.strToLongs(g.encode(d).slice(0,16)),b=c.length,e=c[b-1],h=c[0],q,n=Math.floor(6+52/b),k=0;0<n--;){k+=2654435769;q=k>>>2&3;for(var j=0;j<b;j++)h=c[(j+1)%b],e=(e>>>5^h<<2)+(h>>>3^e<<4)^(k^h)+(m[j&3^q]^e),e=c[j]+=e}c=a.longsToStr(c);return l.encode(c)};a.decrypt=function(f,
d){if(0==f.length)return"";for(var c=a.strToLongs(l.decode(f)),m=a.strToLongs(g.encode(d).slice(0,16)),b=c.length,e=c[b-1],h=c[0],q,n=2654435769*Math.floor(6+52/b);0!=n;){q=n>>>2&3;for(var k=b-1;0<=k;k--)e=c[0<k?k-1:b-1],e=(e>>>5^h<<2)+(h>>>3^e<<4)^(n^h)+(m[k&3^q]^e),h=c[k]-=e;n-=2654435769}c=a.longsToStr(c);c=c.replace(/\0+$/,"");return g.decode(c)};a.strToLongs=function(a){for(var d=Array(Math.ceil(a.length/4)),c=0;c<d.length;c++)d[c]=a.charCodeAt(4*c)+(a.charCodeAt(4*c+1)<<8)+(a.charCodeAt(4*c+
2)<<16)+(a.charCodeAt(4*c+3)<<24);return d};a.longsToStr=function(a){for(var d=Array(a.length),c=0;c<a.length;c++)d[c]=String.fromCharCode(a[c]&255,a[c]>>>8&255,a[c]>>>16&255,a[c]>>>24&255);return d.join("")};var l={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(a,d){var c,e,b,p,h=[],q="",n,k,j=l.code;k=("undefined"==typeof d?0:d)?g.encode(a):a;n=k.length%3;if(0<n)for(;3>n++;)q+="\x3d",k+="\x00";for(n=0;n<k.length;n+=3)c=k.charCodeAt(n),e=k.charCodeAt(n+
1),b=k.charCodeAt(n+2),p=c<<16|e<<8|b,c=p>>18&63,e=p>>12&63,b=p>>6&63,p&=63,h[n/3]=j.charAt(c)+j.charAt(e)+j.charAt(b)+j.charAt(p);h=h.join("");return h=h.slice(0,h.length-q.length)+q},decode:function(a,d){d="undefined"==typeof d?!1:d;var c,e,b,p,h,q=[],n,k=l.code;n=d?g.decode(a):a;for(var j=0;j<n.length;j+=4)c=k.indexOf(n.charAt(j)),e=k.indexOf(n.charAt(j+1)),p=k.indexOf(n.charAt(j+2)),h=k.indexOf(n.charAt(j+3)),b=c<<18|e<<12|p<<6|h,c=b>>>16&255,e=b>>>8&255,b&=255,q[j/4]=String.fromCharCode(c,e,
b),64==h&&(q[j/4]=String.fromCharCode(c,e)),64==p&&(q[j/4]=String.fromCharCode(c));p=q.join("");return d?g.decode(p):p}},g={encode:function(a){a=a.replace(/[\u0080-\u07ff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(192|a>>6,128|a&63)});return a=a.replace(/[\u0800-\uffff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(224|a>>12,128|a>>6&63,128|a&63)})},decode:function(a){a=a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&15)<<12|
(a.charCodeAt(1)&63)<<6|a.charCodeAt(2)&63;return String.fromCharCode(a)});return a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&31)<<6|a.charCodeAt(1)&63;return String.fromCharCode(a)})}}}(jwplayer.utils),function(e){e.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",
JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",
JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_CAPTIONS_LOADED:"jwplayerCaptionsLoaded",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",
JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions",
JWPLAYER_AD_SKIPPED:"jwplayerAdSkipped"}}(jwplayer),function(e){var a=e.utils;e.events.eventdispatcher=function(l,g){function f(c,b,d){if(c)for(var h=0;h<c.length;h++){var g=c[h];if(g){null!==g.count&&0===--g.count&&delete c[h];try{g.listener(b)}catch(f){a.log('Error handling "'+d+'" event listener ['+h+"]: "+f.toString(),g.listener,b)}}}}var d,c;this.resetEventListeners=function(){d={};c=[]};this.resetEventListeners();this.addEventListener=function(c,b,g){try{a.exists(d[c])||(d[c]=[]),"string"==
a.typeOf(b)&&(b=(new Function("return "+b))()),d[c].push({listener:b,count:g||null})}catch(h){a.log("error",h)}return!1};this.removeEventListener=function(c,b){if(d[c]){try{for(var g=0;g<d[c].length;g++)if(d[c][g].listener.toString()==b.toString()){d[c].splice(g,1);break}}catch(h){a.log("error",h)}return!1}};this.addGlobalListener=function(d,b){try{"string"==a.typeOf(d)&&(d=(new Function("return "+d))()),c.push({listener:d,count:b||null})}catch(g){a.log("error",g)}return!1};this.removeGlobalListener=
function(d){if(d){try{for(var b=c.length;b--;)c[b].listener.toString()==d.toString()&&c.splice(b,1)}catch(g){a.log("error",g)}return!1}};this.sendEvent=function(m,b){a.exists(b)||(b={});a.extend(b,{id:l,version:e.version,type:m});g&&a.log(m,b);f(d[m],b,m);f(c,b,m)}}}(window.jwplayer),function(e){var a={},l={};e.plugins=function(){};e.plugins.loadPlugins=function(g,f){l[g]=new e.plugins.pluginloader(new e.plugins.model(a),f);return l[g]};e.plugins.registerPlugin=function(g,f,d,c){var m=e.utils.getPluginName(g);
a[m]||(a[m]=new e.plugins.plugin(g));a[m].registerPlugin(g,f,d,c)}}(jwplayer),function(e){e.plugins.model=function(a){this.addPlugin=function(l){var g=e.utils.getPluginName(l);a[g]||(a[g]=new e.plugins.plugin(l));return a[g]};this.getPlugins=function(){return a}}}(jwplayer),function(e){var a=jwplayer.utils,l=jwplayer.events;e.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};e.plugin=function(g){function f(){switch(a.getPluginPathType(g)){case a.pluginPathType.ABSOLUTE:return g;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(g,
window.location.href)}}function d(){q=setTimeout(function(){m=a.loaderstatus.COMPLETE;n.sendEvent(l.COMPLETE)},1E3)}function c(){m=a.loaderstatus.ERROR;n.sendEvent(l.ERROR)}var m=a.loaderstatus.NEW,b,p,h,q,n=new l.eventdispatcher;a.extend(this,n);this.load=function(){if(m==a.loaderstatus.NEW)if(0<g.lastIndexOf(".swf"))b=g,m=a.loaderstatus.COMPLETE,n.sendEvent(l.COMPLETE);else if(a.getPluginPathType(g)==a.pluginPathType.CDN)m=a.loaderstatus.COMPLETE,n.sendEvent(l.COMPLETE);else{m=a.loaderstatus.LOADING;
var k=new a.scriptloader(f());k.addEventListener(l.COMPLETE,d);k.addEventListener(l.ERROR,c);k.load()}};this.registerPlugin=function(c,d,g,f){q&&(clearTimeout(q),q=void 0);h=d;g&&f?(b=f,p=g):"string"==typeof g?b=g:"function"==typeof g?p=g:!g&&!f&&(b=c);m=a.loaderstatus.COMPLETE;n.sendEvent(l.COMPLETE)};this.getStatus=function(){return m};this.getPluginName=function(){return a.getPluginName(g)};this.getFlashPath=function(){if(b)switch(a.getPluginPathType(b)){case a.pluginPathType.ABSOLUTE:return b;
case a.pluginPathType.RELATIVE:return 0<g.lastIndexOf(".swf")?a.getAbsolutePath(b,window.location.href):a.getAbsolutePath(b,f())}return null};this.getJS=function(){return p};this.getTarget=function(){return h};this.getPluginmode=function(){if("undefined"!=typeof b&&"undefined"!=typeof p)return e.pluginmodes.HYBRID;if("undefined"!=typeof b)return e.pluginmodes.FLASH;if("undefined"!=typeof p)return e.pluginmodes.JAVASCRIPT};this.getNewInstance=function(a,b,c){return new p(a,b,c)};this.getURL=function(){return g}}}(jwplayer.plugins),
function(e){var a=e.utils,l=e.events,g=a.foreach;e.plugins.pluginloader=function(f,d){function c(){h?k.sendEvent(l.ERROR,{message:q}):p||(p=!0,b=a.loaderstatus.COMPLETE,k.sendEvent(l.COMPLETE))}function m(){n||c();if(!p&&!h){var b=0,d=f.getPlugins();a.foreach(n,function(g){g=a.getPluginName(g);var k=d[g];g=k.getJS();var f=k.getTarget(),k=k.getStatus();if(k==a.loaderstatus.LOADING||k==a.loaderstatus.NEW)b++;else if(g&&(!f||parseFloat(f)>parseFloat(e.version)))h=!0,q="Incompatible player version",c()});
0==b&&c()}}var b=a.loaderstatus.NEW,p=!1,h=!1,q,n=d,k=new l.eventdispatcher;a.extend(this,k);this.setupPlugins=function(b,c,d){var k={length:0,plugins:{}},h=0,j={},e=f.getPlugins();g(c.plugins,function(g,f){var m=a.getPluginName(g),p=e[m],l=p.getFlashPath(),n=p.getJS(),q=p.getURL();l&&(k.plugins[l]=a.extend({},f),k.plugins[l].pluginmode=p.getPluginmode(),k.length++);try{if(n&&c.plugins&&c.plugins[q]){var C=document.createElement("div");C.id=b.id+"_"+m;C.style.position="absolute";C.style.top=0;C.style.zIndex=
h+10;j[m]=p.getNewInstance(b,a.extend({},c.plugins[q]),C);h++;b.onReady(d(j[m],C,!0));b.onResize(d(j[m],C))}}catch(F){a.log("ERROR: Failed to load "+m+".")}});b.plugins=j;return k};this.load=function(){if(!(a.exists(d)&&"object"!=a.typeOf(d))){b=a.loaderstatus.LOADING;g(d,function(b){a.exists(b)&&(b=f.addPlugin(b),b.addEventListener(l.COMPLETE,m),b.addEventListener(l.ERROR,j))});var c=f.getPlugins();g(c,function(a,b){b.load()})}m()};var j=this.pluginFailed=function(){h||(h=!0,q="File not found",c())};
this.getStatus=function(){return b}}}(jwplayer),function(){jwplayer.parsers={localName:function(e){return e?e.localName?e.localName:e.baseName?e.baseName:"":""},textContent:function(e){return e?e.textContent?jwplayer.utils.trim(e.textContent):e.text?jwplayer.utils.trim(e.text):"":""},getChildNode:function(e,a){return e.childNodes[a]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}(jwplayer),function(e){var a=e.parsers;(a.jwparser=function(){}).parseEntry=function(l,g){for(var f=
[],d=[],c=e.utils.xmlAttribute,m=0;m<l.childNodes.length;m++){var b=l.childNodes[m];if("jwplayer"==b.prefix){var p=a.localName(b);"source"==p?(delete g.sources,f.push({file:c(b,"file"),"default":c(b,"default"),label:c(b,"label"),type:c(b,"type")})):"track"==p?(delete g.tracks,d.push({file:c(b,"file"),"default":c(b,"default"),kind:c(b,"kind"),label:c(b,"label")})):(g[p]=e.utils.serialize(a.textContent(b)),"file"==p&&g.sources&&delete g.sources)}g.file||(g.file=g.link)}if(f.length){g.sources=[];for(m=
0;m<f.length;m++)0<f[m].file.length&&(f[m]["default"]="true"==f[m]["default"]?!0:!1,f[m].label.length||delete f[m].label,g.sources.push(f[m]))}if(d.length){g.tracks=[];for(m=0;m<d.length;m++)0<d[m].file.length&&(d[m]["default"]="true"==d[m]["default"]?!0:!1,d[m].kind=!d[m].kind.length?"captions":d[m].kind,d[m].label.length||delete d[m].label,g.tracks.push(d[m]))}return g}}(jwplayer),function(e){var a=jwplayer.utils,l=a.xmlAttribute,g=e.localName,f=e.textContent,d=e.numChildren,c=e.mediaparser=function(){};
c.parseGroup=function(e,b){var p,h,q=[];for(h=0;h<d(e);h++)if(p=e.childNodes[h],"media"==p.prefix&&g(p))switch(g(p).toLowerCase()){case "content":l(p,"duration")&&(b.duration=a.seconds(l(p,"duration")));0<d(p)&&(b=c.parseGroup(p,b));l(p,"url")&&(b.sources||(b.sources=[]),b.sources.push({file:l(p,"url"),type:l(p,"type"),width:l(p,"width"),label:l(p,"label")}));break;case "title":b.title=f(p);break;case "description":b.description=f(p);break;case "guid":b.mediaid=f(p);break;case "thumbnail":b.image||
(b.image=l(p,"url"));break;case "group":c.parseGroup(p,b);break;case "subtitle":var n={};n.file=l(p,"url");n.kind="captions";if(0<l(p,"lang").length){var k=n;p=l(p,"lang");var j={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};p=j[p]?j[p]:p;k.label=p}q.push(n)}b.hasOwnProperty("tracks")||(b.tracks=[]);for(h=0;h<q.length;h++)b.tracks.push(q[h]);return b}}(jwplayer.parsers),function(e){function a(a){for(var b={},d=0;d<
a.childNodes.length;d++){var h=a.childNodes[d],f=c(h);if(f)switch(f.toLowerCase()){case "enclosure":b.file=l.xmlAttribute(h,"url");break;case "title":b.title=g(h);break;case "guid":b.mediaid=g(h);break;case "pubdate":b.date=g(h);break;case "description":b.description=g(h);break;case "link":b.link=g(h);break;case "category":b.tags=b.tags?b.tags+g(h):g(h)}}b=e.mediaparser.parseGroup(a,b);b=e.jwparser.parseEntry(a,b);return new jwplayer.playlist.item(b)}var l=jwplayer.utils,g=e.textContent,f=e.getChildNode,
d=e.numChildren,c=e.localName;e.rssparser={};e.rssparser.parse=function(g){for(var b=[],e=0;e<d(g);e++){var h=f(g,e);if("channel"==c(h).toLowerCase())for(var l=0;l<d(h);l++){var n=f(h,l);"item"==c(n).toLowerCase()&&b.push(a(n))}}return b}}(jwplayer.parsers),function(e){e.playlist=function(a){var l=[];if("array"==e.utils.typeOf(a))for(var g=0;g<a.length;g++)l.push(new e.playlist.item(a[g]));else l.push(new e.playlist.item(a));return l}}(jwplayer),function(e){var a=e.item=function(l){var g=jwplayer.utils,
f=g.extend({},a.defaults,l);f.tracks=l&&g.exists(l.tracks)?l.tracks:[];0==f.sources.length&&(f.sources=[new e.source(f)]);for(var d=0;d<f.sources.length;d++){var c=f.sources[d]["default"];f.sources[d]["default"]=c?"true"==c.toString():!1;f.sources[d]=new e.source(f.sources[d])}if(f.captions&&!g.exists(l.tracks)){for(l=0;l<f.captions.length;l++)f.tracks.push(f.captions[l]);delete f.captions}for(d=0;d<f.tracks.length;d++)f.tracks[d]=new e.track(f.tracks[d]);return f};a.defaults={description:"",image:"",
mediaid:"",title:"",sources:[],tracks:[]}}(jwplayer.playlist),function(e){var a=jwplayer,l=a.utils,g=a.events,f=a.parsers;e.loader=function(){function a(c){try{var d=c.responseXML.childNodes;c="";for(var l=0;l<d.length&&!(c=d[l],8!=c.nodeType);l++);"xml"==f.localName(c)&&(c=c.nextSibling);if("rss"!=f.localName(c))m("Not a valid RSS feed");else{var n=new e(f.rssparser.parse(c));b.sendEvent(g.JWPLAYER_PLAYLIST_LOADED,{playlist:n})}}catch(k){m()}}function c(a){m(a.match(/invalid/i)?"Not a valid RSS feed":
"")}function m(a){b.sendEvent(g.JWPLAYER_ERROR,{message:a?a:"Error loading file"})}var b=new g.eventdispatcher;l.extend(this,b);this.load=function(b){l.ajax(b,a,c)}}}(jwplayer.playlist),function(e){var a=jwplayer.utils,l={file:void 0,label:void 0,type:void 0,"default":void 0};e.source=function(g){var f=a.extend({},l);a.foreach(l,function(d){a.exists(g[d])&&(f[d]=g[d],delete g[d])});f.type&&0<f.type.indexOf("/")&&(f.type=a.extensionmap.mimeType(f.type));"m3u8"==f.type&&(f.type="hls");"smil"==f.type&&
(f.type="rtmp");return f}}(jwplayer.playlist),function(e){var a=jwplayer.utils,l={file:void 0,label:void 0,kind:"captions","default":!1};e.track=function(g){var f=a.extend({},l);g||(g={});a.foreach(l,function(d){a.exists(g[d])&&(f[d]=g[d],delete g[d])});return f}}(jwplayer.playlist),function(e){function a(a,c,d){var g=a.style;g.backgroundColor="#000";g.color="#FFF";g.width=l.styleDimension(d.width);g.height=l.styleDimension(d.height);g.display="table";g.opacity=1;d=document.createElement("p");g=d.style;
g.verticalAlign="middle";g.textAlign="center";g.display="table-cell";g.font="15px/20px Arial, Helvetica, sans-serif";d.innerHTML=c.replace(":",":\x3cbr\x3e");a.innerHTML="";a.appendChild(d)}var l=e.utils,g=e.events,f=!0,d=!1,c=document,m=e.embed=function(b){function p(a,b){l.foreach(b,function(b,c){"function"==typeof a[b]&&a[b].call(a,c)})}function h(){if(!E)if("array"==l.typeOf(t.playlist)&&2>t.playlist.length&&(0==t.playlist.length||!t.playlist[0].sources||0==t.playlist[0].sources.length))k();else if(!B)if("string"==
l.typeOf(t.playlist)){var a=new e.playlist.loader;a.addEventListener(g.JWPLAYER_PLAYLIST_LOADED,function(a){t.playlist=a.playlist;B=d;h()});a.addEventListener(g.JWPLAYER_ERROR,function(a){B=d;k(a)});B=f;a.load(t.playlist)}else if(y.getStatus()==l.loaderstatus.COMPLETE){for(a=0;a<t.modes.length;a++)if(t.modes[a].type&&m[t.modes[a].type]){var c=l.extend({},t),n=new m[t.modes[a].type](r,t.modes[a],c,y,b);if(n.supportsConfig())return n.addEventListener(g.ERROR,q),n.embed(),p(b,c.events),b}var u;t.fallback?
(u="No suitable players found and fallback enabled",D=setTimeout(function(){j(u,f)},10),l.log(u),new m.download(r,t,k)):(u="No suitable players found and fallback disabled",j(u,d),l.log(u),r.parentNode.replaceChild(w,r))}}function q(a){u(A+a.message)}function n(a){u("Could not load plugins: "+a.message)}function k(a){a&&a.message?u("Error loading playlist: "+a.message):u(A+"No playable sources found")}function j(a,c){D&&(clearTimeout(D),D=null);D=setTimeout(function(){D=null;b.dispatchEvent(g.JWPLAYER_SETUP_ERROR,
{message:a,fallback:c})},0)}function u(b){E||(t.fallback?(E=f,a(r,b,t),j(b,f)):j(b,d))}var t=new m.config(b.config),r,v,w,x=t.width,z=t.height,A="Error loading player: ",y=e.plugins.loadPlugins(b.id,t.plugins),B=d,E=d,D=null;t.fallbackDiv&&(w=t.fallbackDiv,delete t.fallbackDiv);t.id=b.id;v=c.getElementById(b.id);t.aspectratio?b.config.aspectratio=t.aspectratio:delete b.config.aspectratio;r=c.createElement("div");r.id=v.id;r.style.width=0<x.toString().indexOf("%")?x:x+"px";r.style.height=0<z.toString().indexOf("%")?
z:z+"px";v.parentNode.replaceChild(r,v);this.embed=function(){E||(y.addEventListener(g.COMPLETE,h),y.addEventListener(g.ERROR,n),y.load())};this.errorScreen=u;return this};e.embed.errorScreen=a}(jwplayer),function(e){function a(a){if(a.playlist)for(var c=0;c<a.playlist.length;c++)a.playlist[c]=new f(a.playlist[c]);else{var e={};g.foreach(f.defaults,function(b){l(a,e,b)});e.sources||(a.levels?(e.sources=a.levels,delete a.levels):(c={},l(a,c,"file"),l(a,c,"type"),e.sources=c.file?[c]:[]));a.playlist=
[new f(e)]}}function l(a,c,f){g.exists(a[f])&&(c[f]=a[f],delete a[f])}var g=e.utils,f=e.playlist.item;(e.embed.config=function(d){var c={fallback:!0,height:270,primary:"html5",width:480,base:d.base?d.base:g.getScriptPath("jwplayer.js"),aspectratio:""};d=g.extend(c,e.defaults,d);var c={type:"html5",src:d.base+"jwplayer.html5.js"},f={type:"flash",src:d.base+"jwplayer.flash.swf"};d.modes="flash"==d.primary?[f,c]:[c,f];d.listbar&&(d.playlistsize=d.listbar.size,d.playlistposition=d.listbar.position,d.playlistlayout=
d.listbar.layout);d.flashplayer&&(f.src=d.flashplayer);d.html5player&&(c.src=d.html5player);a(d);f=d.aspectratio;if("string"!=typeof f||!g.exists(f))c=0;else{var b=f.indexOf(":");-1==b?c=0:(c=parseFloat(f.substr(0,b)),f=parseFloat(f.substr(b+1)),c=0>=c||0>=f?0:100*(f/c)+"%")}-1==d.width.toString().indexOf("%")?delete d.aspectratio:c?d.aspectratio=c:delete d.aspectratio;return d}).addConfig=function(d,c){a(c);return g.extend(d,c)}}(jwplayer),function(e){var a=e.utils,l=document;e.embed.download=function(g,
f,d){function c(b,c){for(var d=l.querySelectorAll(b),g=0;g<d.length;g++)a.foreach(c,function(a,b){d[g].style[a]=b})}function e(a,b,c){a=l.createElement(a);b&&(a.className="jwdownload"+b);c&&c.appendChild(a);return a}var b=a.extend({},f),p=b.width?b.width:480,h=b.height?b.height:320,q;f=f.logo?f.logo:{prefix:a.repo(),file:"logo.png",margin:10};var n,k,j,b=b.playlist,u,t=["mp4","aac","mp3"];if(b&&b.length){u=b[0];q=u.sources;for(b=0;b<q.length;b++){var r=q[b],v=r.type?r.type:a.extensionmap.extType(a.extension(r.file));
r.file&&a.foreach(t,function(b){v==t[b]?(n=r.file,k=u.image):a.isYouTube(r.file)&&(j=r.file)})}n?(q=n,d=k,g&&(b=e("a","display",g),e("div","icon",b),e("div","logo",b),q&&b.setAttribute("href",a.getAbsolutePath(q))),b="#"+g.id+" .jwdownload",g.style.width="",g.style.height="",c(b+"display",{width:a.styleDimension(Math.max(320,p)),height:a.styleDimension(Math.max(180,h)),background:"black center no-repeat "+(d?"url("+d+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),
c(b+"display div",{position:"absolute",width:"100%",height:"100%"}),c(b+"logo",{top:f.margin+"px",right:f.margin+"px",background:"top right no-repeat url("+f.prefix+f.file+")"}),c(b+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):
j?(f=j,g=e("iframe","",g),g.src="http://www.youtube.com/embed/"+a.youTubeID(f),g.width=p,g.height=h,g.style.border="none"):d()}}}(jwplayer),function(e){var a=e.utils,l=e.events,g={};(e.embed.flash=function(d,c,m,b,p){function h(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)}function q(a,b,c){return function(){try{c&&document.getElementById(p.id+"_wrapper").appendChild(b);var d=document.getElementById(p.id).getPluginConfig("display");
"function"==typeof a.resize&&a.resize(d.width,d.height);b.style.left=d.x;b.style.top=d.h}catch(g){}}}function n(b){if(!b)return{};var c={},d=[];a.foreach(b,function(b,g){var k=a.getPluginName(b);d.push(b);a.foreach(g,function(a,b){c[k+"."+a]=b})});c.plugins=d.join(",");return c}var k=new e.events.eventdispatcher,j=a.flashVersion();a.extend(this,k);this.embed=function(){m.id=p.id;if(10>j)return k.sendEvent(l.ERROR,{message:"Flash version must be 10.0 or greater"}),!1;var f,e,r=p.config.listbar,v=a.extend({},
m);if(d.id+"_wrapper"==d.parentNode.id)f=document.getElementById(d.id+"_wrapper");else{f=document.createElement("div");e=document.createElement("div");e.style.display="none";e.id=d.id+"_aspect";f.id=d.id+"_wrapper";f.style.position="relative";f.style.display="block";f.style.width=a.styleDimension(v.width);f.style.height=a.styleDimension(v.height);if(p.config.aspectratio){var w=parseFloat(p.config.aspectratio);e.style.display="block";e.style.marginTop=p.config.aspectratio;f.style.height="auto";f.style.display=
"inline-block";r&&("bottom"==r.position?e.style.paddingBottom=r.size+"px":"right"==r.position&&(e.style.marginBottom=-1*r.size*(w/100)+"px"))}d.parentNode.replaceChild(f,d);f.appendChild(d);f.appendChild(e)}f=b.setupPlugins(p,v,q);0<f.length?a.extend(v,n(f.plugins)):delete v.plugins;"undefined"!=typeof v["dock.position"]&&"false"==v["dock.position"].toString().toLowerCase()&&(v.dock=v["dock.position"],delete v["dock.position"]);f=v.wmode?v.wmode:v.height&&40>=v.height?"transparent":"opaque";e="height width modes events primary base fallback volume".split(" ");
for(r=0;r<e.length;r++)delete v[e[r]];e=a.getCookies();a.foreach(e,function(a,b){"undefined"==typeof v[a]&&(v[a]=b)});e=window.location.href.split("/");e.splice(e.length-1,1);e=e.join("/");v.base=e+"/";g[d.id]=v;a.isIE()?(e='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%"id\x3d"'+d.id+'" name\x3d"'+d.id+'" tabindex\x3d0""\x3e',e+='\x3cparam name\x3d"movie" value\x3d"'+c.src+'"\x3e',e+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',
e+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',e+='\x3cparam name\x3d"wmode" value\x3d"'+f+'"\x3e',e+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',e+="\x3c/object\x3e",d.outerHTML=e,f=document.getElementById(d.id)):(e=document.createElement("object"),e.setAttribute("type","application/x-shockwave-flash"),e.setAttribute("data",c.src),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e.setAttribute("bgcolor","#000000"),e.setAttribute("id",d.id),e.setAttribute("name",
d.id),e.setAttribute("tabindex",0),h(e,"allowfullscreen","true"),h(e,"allowscriptaccess","always"),h(e,"seamlesstabbing","true"),h(e,"wmode",f),d.parentNode.replaceChild(e,d),f=e);p.config.aspectratio&&(f.style.position="absolute");p.container=f;p.setPlayer(f,"flash")};this.supportsConfig=function(){if(j)if(m){if("string"==a.typeOf(m.playlist))return!0;try{var b=m.playlist[0].sources;if("undefined"==typeof b)return!0;for(var c=0;c<b.length;c++)if(b[c].file&&f(b[c].file,b[c].type))return!0}catch(d){}}else return!0;
return!1}}).getVars=function(a){return g[a]};var f=e.embed.flashCanPlay=function(d,c){if(a.isYouTube(d)||a.isRtmp(d,c)||"hls"==c)return!0;var f=a.extensionmap[c?c:a.extension(d)];return!f?!1:!!f.flash}}(jwplayer),function(e){var a=e.utils,l=a.extensionmap,g=e.events;e.embed.html5=function(f,d,c,m,b){function p(a,b,c){return function(){try{var d=document.querySelector("#"+f.id+" .jwmain");c&&d.appendChild(b);"function"==typeof a.resize&&(a.resize(d.clientWidth,d.clientHeight),setTimeout(function(){a.resize(d.clientWidth,
d.clientHeight)},400));b.left=d.style.left;b.top=d.style.top}catch(g){}}}function h(a){q.sendEvent(a.type,{message:"HTML5 player not found"})}var q=this,n=new g.eventdispatcher;a.extend(q,n);q.embed=function(){if(e.html5){m.setupPlugins(b,c,p);f.innerHTML="";var k=e.utils.extend({},c);delete k.volume;k=new e.html5.player(k);b.container=document.getElementById(b.id);b.setPlayer(k,"html5")}else k=new a.scriptloader(d.src),k.addEventListener(g.ERROR,h),k.addEventListener(g.COMPLETE,q.embed),k.load()};
q.supportsConfig=function(){if(e.vid.canPlayType)try{if("string"==a.typeOf(c.playlist))return!0;for(var b=c.playlist[0].sources,d=0;d<b.length;d++){var f;var g=b[d].file,h=b[d].type;if(null!==navigator.userAgent.match(/BlackBerry/i)||a.isAndroid()&&("m3u"==a.extension(g)||"m3u8"==a.extension(g))||a.isRtmp(g,h))f=!1;else{var p=l[h?h:a.extension(g)],m;if(!p||p.flash&&!p.html5)m=!1;else{var n=p.html5,q=e.vid;if(n)try{m=q.canPlayType(n)?!0:!1}catch(A){m=!1}else m=!0}f=m}if(f)return!0}}catch(y){}return!1}}}(jwplayer),
function(e){var a=e.embed,l=e.utils,g=/\.(js|swf)$/;e.embed=l.extend(function(f){function d(){r="Adobe SiteCatalyst Error: Could not find Media Module"}var c=l.repo(),m=l.extend({},e.defaults),b=l.extend({},m,f.config),p=f.config,h=b.plugins,q=b.analytics,n=c+"jwpsrv.js",k=c+"sharing.js",j=c+"related.js",u=c+"gapro.js",m=e.key?e.key:m.key,t=(new e.utils.key(m)).edition(),r,h=h?h:{};"ads"==t&&b.advertising&&(g.test(b.advertising.client)?h[b.advertising.client]=b.advertising:h[c+b.advertising.client+
".js"]=b.advertising);delete p.advertising;p.key=m;b.analytics&&g.test(b.analytics.client)&&(n=b.analytics.client);delete p.analytics;q&&"ads"!==t&&delete q.enabled;if("free"==t||!q||!1!==q.enabled)h[n]=q?q:{};delete h.sharing;delete h.related;switch(t){case "ads":if(p.sitecatalyst)try{window.s&&window.s.hasOwnProperty("Media")?new e.embed.sitecatalyst(f):d()}catch(v){d()}case "premium":b.related&&(g.test(b.related.client)&&(j=b.related.client),h[j]=b.related),b.ga&&(g.test(b.ga.client)&&(u=b.ga.client),
h[u]=b.ga);case "pro":b.sharing&&(g.test(b.sharing.client)&&(k=b.sharing.client),h[k]=b.sharing),b.skin&&(p.skin=b.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,l.repo()+"skins/$1.xml"))}p.plugins=h;f.config=p;f=new a(f);r&&f.errorScreen(r);return f},e.embed)}(jwplayer),function(e){var a=jwplayer.utils;e.sitecatalyst=function(e){function g(c){b.debug&&a.log(c)}function f(a){a=a.split("/");a=a[a.length-1];a=a.split("?");return a[0]}function d(){if(!k){k=!0;var a=
m.getPosition();g("stop: "+h+" : "+a);s.Media.stop(h,a)}}function c(){j||(d(),j=!0,g("close: "+h),s.Media.close(h),u=!0,n=0)}var m=e,b=a.extend({},m.config.sitecatalyst),p={onPlay:function(){if(!u){var a=m.getPosition();k=!1;g("play: "+h+" : "+a);s.Media.play(h,a)}},onPause:d,onBuffer:d,onIdle:c,onPlaylistItem:function(d){try{u=!0;c();n=0;var g;if(b.mediaName)g=b.mediaName;else{var e=m.getPlaylistItem(d.index);g=e.title?e.title:e.file?f(e.file):e.sources&&e.sources.length?f(e.sources[0].file):""}h=
g;q=b.playerName?b.playerName:m.id}catch(k){a.log(k)}},onTime:function(){if(u){var a=m.getDuration();if(-1==a)return;j=k=u=!1;g("open: "+h+" : "+a+" : "+q);s.Media.open(h,a,q);g("play: "+h+" : 0");s.Media.play(h,0)}a=m.getPosition();if(3<=Math.abs(a-n)){var b=n;g("seek: "+b+" to "+a);g("stop: "+h+" : "+b);s.Media.stop(h,b);g("play: "+h+" : "+a);s.Media.play(h,a)}n=a},onComplete:c},h,q,n,k=!0,j=!0,u;a.foreach(p,function(a){m[a](p[a])})}}(jwplayer.embed),function(e,a){var l=[],g=e.utils,f=e.events,
d=f.state,c=document,m=e.api=function(b){function l(a,b){return function(c){return b(a,c)}}function h(a,b){t[a]||(t[a]=[],n(f.JWPLAYER_PLAYER_STATE,function(b){var c=b.newstate;b=b.oldstate;if(c==a){var d=t[c];if(d)for(var g=0;g<d.length;g++){var f=d[g];"function"==typeof f&&f.call(this,{oldstate:b,newstate:c})}}}));t[a].push(b);return j}function q(a,b){try{a.jwAddEventListener(b,'function(dat) { jwplayer("'+j.id+'").dispatchEvent("'+b+'", dat); }')}catch(c){g.log("Could not add internal listener")}}
function n(a,b){u[a]||(u[a]=[],r&&v&&q(r,a));u[a].push(b);return j}function k(){if(v){if(r){var a=Array.prototype.slice.call(arguments,0),b=a.shift();if("function"===typeof r[b]){switch(a.length){case 6:return r[b](a[0],a[1],a[2],a[3],a[4],a[5]);case 5:return r[b](a[0],a[1],a[2],a[3],a[4]);case 4:return r[b](a[0],a[1],a[2],a[3]);case 3:return r[b](a[0],a[1],a[2]);case 2:return r[b](a[0],a[1]);case 1:return r[b](a[0])}return r[b]()}}return null}w.push(arguments)}var j=this,u={},t={},r,v=!1,w=[],x,
z={},A={};j.container=b;j.id=b.id;j.getBuffer=function(){return k("jwGetBuffer")};j.getContainer=function(){return j.container};j.addButton=function(a,b,c,d){try{A[d]=c,k("jwDockAddButton",a,b,"jwplayer('"+j.id+"').callback('"+d+"')",d)}catch(f){g.log("Could not add dock button"+f.message)}};j.removeButton=function(a){k("jwDockRemoveButton",a)};j.callback=function(a){if(A[a])A[a]()};j.forceState=function(a){k("jwForceState",a);return j};j.releaseState=function(){return k("jwReleaseState")};j.getDuration=
function(){return k("jwGetDuration")};j.getFullscreen=function(){return k("jwGetFullscreen")};j.getHeight=function(){return k("jwGetHeight")};j.getLockState=function(){return k("jwGetLockState")};j.getMeta=function(){return j.getItemMeta()};j.getMute=function(){return k("jwGetMute")};j.getPlaylist=function(){var a=k("jwGetPlaylist");"flash"==j.renderingMode&&g.deepReplaceKeyName(a,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return a};j.getPlaylistItem=function(a){g.exists(a)||
(a=j.getPlaylistIndex());return j.getPlaylist()[a]};j.getPlaylistIndex=function(){return k("jwGetPlaylistIndex")};j.getPosition=function(){return k("jwGetPosition")};j.getRenderingMode=function(){return j.renderingMode};j.getState=function(){return k("jwGetState")};j.getVolume=function(){return k("jwGetVolume")};j.getWidth=function(){return k("jwGetWidth")};j.setFullscreen=function(a){g.exists(a)?k("jwSetFullscreen",a):k("jwSetFullscreen",!k("jwGetFullscreen"));return j};j.setMute=function(a){g.exists(a)?
k("jwSetMute",a):k("jwSetMute",!k("jwGetMute"));return j};j.lock=function(){return j};j.unlock=function(){return j};j.load=function(a){k("jwLoad",a);return j};j.playlistItem=function(a){k("jwPlaylistItem",parseInt(a,10));return j};j.playlistPrev=function(){k("jwPlaylistPrev");return j};j.playlistNext=function(){k("jwPlaylistNext");return j};j.resize=function(a,b){if("flash"!==j.renderingMode)k("jwResize",a,b);else{var d=c.getElementById(j.id+"_wrapper"),f=c.getElementById(j.id+"_aspect");f&&(f.style.display=
"none");d&&(d.style.display="block",d.style.width=g.styleDimension(a),d.style.height=g.styleDimension(b))}return j};j.play=function(b){b===a?(b=j.getState(),b==d.PLAYING||b==d.BUFFERING?k("jwPause"):k("jwPlay")):k("jwPlay",b);return j};j.pause=function(b){b===a?(b=j.getState(),b==d.PLAYING||b==d.BUFFERING?k("jwPause"):k("jwPlay")):k("jwPause",b);return j};j.stop=function(){k("jwStop");return j};j.seek=function(a){k("jwSeek",a);return j};j.setVolume=function(a){k("jwSetVolume",a);return j};j.createInstream=
function(){return new m.instream(this,r)};j.setInstream=function(a){return x=a};j.loadInstream=function(a,b){x=j.setInstream(j.createInstream()).init(b);x.loadItem(a);return x};j.getQualityLevels=function(){return k("jwGetQualityLevels")};j.getCurrentQuality=function(){return k("jwGetCurrentQuality")};j.setCurrentQuality=function(a){k("jwSetCurrentQuality",a)};j.getCaptionsList=function(){return k("jwGetCaptionsList")};j.getCurrentCaptions=function(){return k("jwGetCurrentCaptions")};j.setCurrentCaptions=
function(a){k("jwSetCurrentCaptions",a)};j.getControls=function(){return k("jwGetControls")};j.getSafeRegion=function(){return k("jwGetSafeRegion")};j.setControls=function(a){k("jwSetControls",a)};j.destroyPlayer=function(){k("jwPlayerDestroy")};j.playAd=function(a){var b=e(j.id).plugins;b.vast&&b.vast.jwPlayAd(a)};j.pauseAd=function(){var a=e(j.id).plugins;a.vast?a.vast.jwPauseAd():k("jwPauseAd")};var y={onBufferChange:f.JWPLAYER_MEDIA_BUFFER,onBufferFull:f.JWPLAYER_MEDIA_BUFFER_FULL,onError:f.JWPLAYER_ERROR,
onSetupError:f.JWPLAYER_SETUP_ERROR,onFullscreen:f.JWPLAYER_FULLSCREEN,onMeta:f.JWPLAYER_MEDIA_META,onMute:f.JWPLAYER_MEDIA_MUTE,onPlaylist:f.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:f.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:f.JWPLAYER_PLAYLIST_COMPLETE,onReady:f.API_READY,onResize:f.JWPLAYER_RESIZE,onComplete:f.JWPLAYER_MEDIA_COMPLETE,onSeek:f.JWPLAYER_MEDIA_SEEK,onTime:f.JWPLAYER_MEDIA_TIME,onVolume:f.JWPLAYER_MEDIA_VOLUME,onBeforePlay:f.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:f.JWPLAYER_MEDIA_BEFORECOMPLETE,
onDisplayClick:f.JWPLAYER_DISPLAY_CLICK,onControls:f.JWPLAYER_CONTROLS,onQualityLevels:f.JWPLAYER_MEDIA_LEVELS,onQualityChange:f.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:f.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:f.JWPLAYER_CAPTIONS_CHANGED,onAdError:f.JWPLAYER_AD_ERROR,onAdClick:f.JWPLAYER_AD_CLICK,onAdImpression:f.JWPLAYER_AD_IMPRESSION,onAdTime:f.JWPLAYER_AD_TIME,onAdComplete:f.JWPLAYER_AD_COMPLETE,onAdCompanions:f.JWPLAYER_AD_COMPANIONS,onAdSkipped:f.JWPLAYER_AD_SKIPPED};g.foreach(y,function(a){j[a]=
l(y[a],n)});var B={onBuffer:d.BUFFERING,onPause:d.PAUSED,onPlay:d.PLAYING,onIdle:d.IDLE};g.foreach(B,function(a){j[a]=l(B[a],h)});j.remove=function(){if(!v)throw"Cannot call remove() before player is ready";w=[];m.destroyPlayer(this.id)};j.setup=function(a){if(e.embed){var b=c.getElementById(j.id);b&&(a.fallbackDiv=b);b=j;w=[];m.destroyPlayer(b.id);b=e(j.id);b.config=a;(new e.embed(b)).embed();return b}return j};j.registerPlugin=function(a,b,c,d){e.plugins.registerPlugin(a,b,c,d)};j.setPlayer=function(a,
b){r=a;j.renderingMode=b};j.detachMedia=function(){if("html5"==j.renderingMode)return k("jwDetachMedia")};j.attachMedia=function(a){if("html5"==j.renderingMode)return k("jwAttachMedia",a)};j.removeEventListener=function(a,b){var c=u[a];if(c)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1)};j.dispatchEvent=function(a,b){var c=u[a];if(c)for(var c=c.slice(0),d=g.translateEventResponse(a,b),e=0;e<c.length;e++){var k=c[e];if("function"===typeof k)try{a===f.JWPLAYER_PLAYLIST_LOADED&&g.deepReplaceKeyName(d.playlist,
["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),k.call(this,d)}catch(h){g.log("There was an error calling back an event handler")}}};j.dispatchInstreamEvent=function(a){x&&x.dispatchEvent(a,arguments)};j.callInternal=k;j.playerReady=function(a){v=!0;r||j.setPlayer(c.getElementById(a.id));j.container=c.getElementById(j.id);g.foreach(u,function(a){q(r,a)});n(f.JWPLAYER_PLAYLIST_ITEM,function(){z={}});n(f.JWPLAYER_MEDIA_META,function(a){g.extend(z,a.metadata)});for(j.dispatchEvent(f.API_READY);0<
w.length;)k.apply(this,w.shift())};j.getItemMeta=function(){return z};j.isBeforePlay=function(){return k("jwIsBeforePlay")};j.isBeforeComplete=function(){return k("jwIsBeforeComplete")};return j};m.selectPlayer=function(a){var d;g.exists(a)||(a=0);a.nodeType?d=a:"string"==typeof a&&(d=c.getElementById(a));return d?(a=m.playerById(d.id))?a:m.addPlayer(new m(d)):"number"==typeof a?l[a]:null};m.playerById=function(a){for(var c=0;c<l.length;c++)if(l[c].id==a)return l[c];return null};m.addPlayer=function(a){for(var c=
0;c<l.length;c++)if(l[c]==a)return a;l.push(a);return a};m.destroyPlayer=function(a){for(var d=-1,f,e=0;e<l.length;e++)l[e].id==a&&(d=e,f=l[e]);0<=d&&(a=f.id,e=c.getElementById(a+("flash"==f.renderingMode?"_wrapper":"")),g.clearCss&&g.clearCss("#"+a),e&&("html5"==f.renderingMode&&f.destroyPlayer(),f=c.createElement("div"),f.id=a,e.parentNode.replaceChild(f,e)),l.splice(d,1));return null};e.playerReady=function(a){var c=e.api.playerById(a.id);c?c.playerReady(a):e.api.selectPlayer(a.id).playerReady(a)}}(window.jwplayer),
function(e){var a=e.events,l=e.utils,g=a.state;e.api.instream=function(f,d){function c(a,b){h[a]||(h[a]=[],d.jwInstreamAddEventListener(a,'function(dat) { jwplayer("'+f.id+'").dispatchInstreamEvent("'+a+'", dat); }'));h[a].push(b);return this}function e(b,d){q[b]||(q[b]=[],c(a.JWPLAYER_PLAYER_STATE,function(a){var c=a.newstate,d=a.oldstate;if(c==b){var e=q[c];if(e)for(var f=0;f<e.length;f++){var g=e[f];"function"==typeof g&&g.call(this,{oldstate:d,newstate:c,type:a.type})}}}));q[b].push(d);return this}
var b,p,h={},q={},n=this;n.type="instream";n.init=function(){f.callInternal("jwInitInstream");return n};n.loadItem=function(a,c){b=a;p=c||{};"array"==l.typeOf(a)?f.callInternal("jwLoadArrayInstream",b,p):f.callInternal("jwLoadItemInstream",b,p)};n.removeEvents=function(){h=q={}};n.removeEventListener=function(a,b){var c=h[a];if(c)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1)};n.dispatchEvent=function(a,b){var c=h[a];if(c)for(var c=c.slice(0),d=l.translateEventResponse(a,b[1]),e=0;e<c.length;e++){var f=
c[e];"function"==typeof f&&f.call(this,d)}};n.onError=function(b){return c(a.JWPLAYER_ERROR,b)};n.onMediaError=function(b){return c(a.JWPLAYER_MEDIA_ERROR,b)};n.onFullscreen=function(b){return c(a.JWPLAYER_FULLSCREEN,b)};n.onMeta=function(b){return c(a.JWPLAYER_MEDIA_META,b)};n.onMute=function(b){return c(a.JWPLAYER_MEDIA_MUTE,b)};n.onComplete=function(b){return c(a.JWPLAYER_MEDIA_COMPLETE,b)};n.onPlaylistComplete=function(b){return c(a.JWPLAYER_PLAYLIST_COMPLETE,b)};n.onPlaylistItem=function(b){return c(a.JWPLAYER_PLAYLIST_ITEM,
b)};n.onTime=function(b){return c(a.JWPLAYER_MEDIA_TIME,b)};n.onBuffer=function(a){return e(g.BUFFERING,a)};n.onPause=function(a){return e(g.PAUSED,a)};n.onPlay=function(a){return e(g.PLAYING,a)};n.onIdle=function(a){return e(g.IDLE,a)};n.onClick=function(b){return c(a.JWPLAYER_INSTREAM_CLICK,b)};n.onInstreamDestroyed=function(b){return c(a.JWPLAYER_INSTREAM_DESTROYED,b)};n.onAdSkipped=function(b){return c(a.JWPLAYER_AD_SKIPPED,b)};n.play=function(a){d.jwInstreamPlay(a)};n.pause=function(a){d.jwInstreamPause(a)};
n.hide=function(){f.callInternal("jwInstreamHide")};n.destroy=function(){n.removeEvents();f.callInternal("jwInstreamDestroy")};n.setText=function(a){d.jwInstreamSetText(a?a:"")};n.getState=function(){return d.jwInstreamState()};n.setClick=function(a){d.jwInstreamClick&&d.jwInstreamClick(a)}}}(window.jwplayer),function(e){var a=e.api,l=a.selectPlayer;a.selectPlayer=function(a){return(a=l(a))?a:{registerPlugin:function(a,d,c){e.plugins.registerPlugin(a,d,c)}}}}(jwplayer));
//dev\slider\header.js 
 
/*!
 * Master Slider – Responsive Touch Swipe Slider
 * @author Averta (www.averta.net)
 * Copyright © All Rights Reserved, Averta Ltd.
 *
 * @version 1.5.7
 * @date 3/31/2014
 */
//dev\slider\tools\base.js 
 
window.averta = {};

;(function($){
	
	//"use strict";
	
	window.package = function(name){
		if(!window[name]) window[name] = {};
	};
	
	var extend = function(target , object){
		for(var key in object)	target[key] = object[key];
	};
	
	Function.prototype.extend = function(superclass){
		if(typeof superclass.prototype.constructor === "function"){
			extend(this.prototype , superclass.prototype);
			this.prototype.constructor = this;
		}else{
			this.prototype.extend(superclass);
			this.prototype.constructor = this;
		}	
	};
	
	// Converts JS prefix to CSS prefix
	var trans = {
		'Moz'    : '-moz-',
		'Webkit' : '-webkit-',
		'Khtml'  : '-khtml-' ,
		'O'		 : '-o-',
		'ms'	 : '-ms-',
		'Icab'   : '-icab-'
	};
	
	$(document).ready(function(){
		window._jcsspfx 		= getVendorPrefix();	   // JS CSS VendorPrefix
		window._csspfx 			= trans[window._jcsspfx];  // CSS VendorPrefix
		window._cssanim 		= supportsTransitions();
		window._css3d   		= supports3DTransforms();
		window._css2d   		= supportsTransforms();
		window._mobile			= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
		window._touch			= 'ontouchstart' in document;
	});
	
	
	// Thanks to LEA VEROU
	// http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
	function getVendorPrefix() {
	
		if('result' in arguments.callee) return arguments.callee.result;
	
		var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
	
		var someScript = document.getElementsByTagName('script')[0];
	
		for(var prop in someScript.style)
			if(regex.test(prop))
				return arguments.callee.result = prop.match(regex)[0];
	
		if('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
		if('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';
	
		return arguments.callee.result = '';
	}
	
	
	// Thanks to Steven Benner.
	// http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
	window.parseQueryString = function(url){
		var queryString = {};
		url.replace(
		    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		    function($0, $1, $2, $3) { queryString[$1] = $3; }
		);
		
		return queryString;
	};
	
	function checkStyleValue(prop){
		 var b = document.body || document.documentElement;
	    var s = b.style;
	    var p = prop;
	    if(typeof s[p] == 'string') {return true; }
	
	    // Tests for vendor specific prop
	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for(var i=0; i<v.length; i++) {
	      if(typeof s[v[i] + p] == 'string') { return true; }
	    }
	    return false;
	}
	
	function supportsTransitions() {
	   return checkStyleValue('transition');
	}
	
	function supportsTransforms(){
	   return checkStyleValue('transform');
	}
	
	function supports3DTransforms(){
		if(!supportsTransforms()) return false;
	    var el = document.createElement('p'),
	    has3d,
	    transforms = {
	        'WebkitTransform':'-webkit-transform',
	        'OTransform':'-o-transform',
	        'MSTransform':'-ms-transform',
	        'msTransform':'-ms-transform',
	        'MozTransform':'-moz-transform',
	        'Transform':'transform',
	        'transform':'transform'
	    };
	
	    // Add it to the body to get the computed style
	    document.body.insertBefore(el, null);
	
	    for(var t in transforms){
	        if( el.style[t] !== undefined ){
	            el.style[t] = 'translate3d(1px,1px,1px)';
	            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	        }
	    }
	
	    document.body.removeChild(el);
	
	    return (has3d != null && has3d.length > 0 && has3d !== "none");
	}
	
	/**
	 * Provides requestAnimationFrame in a cross browser way.
	 * @author paulirish / http://paulirish.com/
	 */
	var fps60 = 50/3;
	
	if ( !window.requestAnimationFrame ) {
	 
		window.requestAnimationFrame = ( function() {
	 
			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
	 
				window.setTimeout( callback, fps60 );
	 
			};
	 
		} )();
	 
	}
	
	if (!window.getComputedStyle) {
	    window.getComputedStyle = function(el, pseudo) {
	        this.el = el;
	        this.getPropertyValue = function(prop) {
	            var re = /(\-([a-z]){1})/g;
	            if (prop == 'float') prop = 'styleFloat';
	            if (re.test(prop)) {
	                prop = prop.replace(re, function () {
	                    return arguments[2].toUpperCase();
	                });
	            }
	            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
	        };
	        return el.currentStyle;
	    };
	}

	// IE8 Array indexOf fix
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function(elt /*, from*/) {
	    var len = this.length >>> 0;

	    var from = Number(arguments[1]) || 0;
	    from = (from < 0)
	         ? Math.ceil(from)
	         : Math.floor(from);
	    if (from < 0)
	      from += len;

	    for (; from < len; from++)
	    {
	      if (from in this &&
	          this[from] === elt)
	        return from;
	    }
	    return -1;
	  };
	}
	
	if(jQuery){
		$.jqLoadFix = function(){
			if(this.complete){
				var that = this;
				setTimeout(function(){$(that).load();} , 1);
			}	
		};
		
		jQuery.uaMatch = jQuery.uaMatch || function( ua ) {
			ua = ua.toLowerCase();
		
			var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
				/(msie) ([\w.]+)/.exec( ua ) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
				[];
		
			return {
				browser: match[ 1 ] || "",
				version: match[ 2 ] || "0"
			};
		};
		
		// Don't clobber any existing jQuery.browser in case it's different
		//if ( !jQuery.browser ) {
			matched = jQuery.uaMatch( navigator.userAgent );
			browser = {};
		
			if ( matched.browser ) {
				browser[ matched.browser ] = true;
				browser.version = matched.version;
			}
		
			// Chrome is Webkit, but Webkit is also Safari.
			if ( browser.chrome ) {
				browser.webkit = true;
			} else if ( browser.webkit ) {
				browser.safari = true;
			}

			// hofix for IE11 detection 
			var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
			if (isIE11) {
				browser.msie = "true";
				delete browser.mozilla;
			}

			jQuery.browser = browser;
			
		//}
		
		$.fn.preloadImg = function(src , _event){
			this.each(function(){
				var $this = $(this);
				var self  = this;
				var img = new Image();
				img.onload = function(event){
					if(event == null) event = {}; // IE8
					$this.attr('src' , src);
					event.width = img.width;
					event.height = img.height;
					setTimeout(function(){_event.call(self , event);},50);
					img = null;
				};
				img.src = src;
			});
			return this;
		};
	}
})(jQuery);
//dev\slider\tools\EventDispatcher.js 
 
;(function(){
	
	"use strict";
	
	averta.EventDispatcher = function(){
		this.listeners = {};
	};
	
	averta.EventDispatcher.extend = function(_proto){
		var instance = new averta.EventDispatcher();
		for(var key in instance)
			if(key != 'constructor') _proto[key] =  averta.EventDispatcher.prototype[key];
	};
	
	averta.EventDispatcher.prototype = {
		
		constructor : averta.EventDispatcher,
		
		addEventListener : function(event , listener , ref){
			if(!this.listeners[event]) this.listeners[event] = [];
			this.listeners[event].push({listener:listener , ref:ref});
			
		},
		
		removeEventListener : function(event , listener , ref){
			if(this.listeners[event]){
				for(var i = 0 , l = this.listeners[event].length; i < l ; ++i)
					if(listener == this.listeners[event][i].listener && ref == this.listeners[event][i].ref){	
						this.listeners[event].splice(i);
					}
				
				if (this.listeners[event].length == 0)
					delete this.listeners[event];
			}
		},
		
		dispatchEvent : function (event) {
			event.target = this;
			if(this.listeners[event.type])
				for(var i = 0 , l = this.listeners[event.type].length; i < l ; ++i){
					this.listeners[event.type][i].listener.call(this.listeners[event.type][i].ref , event);	
				}
		}
	};

})();
//dev\slider\tools\TouchSwipe.js 
 
;(function($){
	
	"use strict";
	
	var isTouch = 'ontouchstart' in document;
	var msPoiner = false;//window.navigator.msPointerEnabled;
	
	// Events	
	var ev_start  = msPoiner ? 'MSPointerDown' 	: isTouch ? 'touchstart' : 'mousedown';
	var ev_move   = msPoiner ? 'MSPointerMove'	: isTouch ? 'touchmove'  : 'mousemove';
	var ev_end    = msPoiner ? 'MSPointerUp' 	: isTouch ? 'touchend'   : 'mouseup'  ; 
	var ev_cancel = msPoiner ? 'MSPointerUp' 	: 'touchcancel';
	
	averta.TouchSwipe = function($element , touchFallback){
		this.$element = $element;
		this.enabled = true;
		
		$element.bind(ev_start  , {target: this} , this.__touchStart);
				 		 
		$element[0].swipe = this;
		
		this.onSwipe    = null;
		this.swipeType  = 'horizontal';
		
		this.lastStatus = {};
	
	};
	
	var p = averta.TouchSwipe.prototype;
	
 	/*-------------- METHODS --------------*/
	
	p.getDirection = function(new_x , new_y){
		switch(this.swipeType){
			case 'horizontal':
				return new_x <= this.start_x ? 'left' : 'right';
			break;
			case 'vertical':
				return new_y <= this.start_y ? 'up' : 'down';
			break;
			case 'all':
				if(Math.abs(new_x - this.start_x) > Math.abs(new_y - this.start_y))
					return new_x <= this.start_x ? 'left' : 'right';
				else
					return new_y <= this.start_y ? 'up' : 'down';
			break;
		}
	};
	
	p.priventDefultEvent = function(new_x , new_y){
		//if(this.priventEvt != null) return this.priventEvt;
		var dx = Math.abs(new_x - this.start_x);
		var dy = Math.abs(new_y - this.start_y);
		
		var horiz =  dx > dy;
		
		return (this.swipeType === 'horizontal' && horiz) ||
			   (this.swipeType === 'vertical' && !horiz);

		//return this.priventEvt;
	};
	
	p.createStatusObject = function(evt){
		var status_data = {} , temp_x , temp_y;
		
		temp_x = this.lastStatus.distanceX || 0;
		temp_y = this.lastStatus.distanceY || 0;
		
		status_data.distanceX = evt.pageX - this.start_x;
		status_data.distanceY = evt.pageY - this.start_y;
		//console.log(evt, evt.pageX , this.start_x , temp_x)
		status_data.moveX = status_data.distanceX - temp_x;
		status_data.moveY = status_data.distanceY - temp_y;
		
		status_data.distance  = parseInt( Math.sqrt(Math.pow(status_data.distanceX , 2) + Math.pow(status_data.distanceY , 2)) );
		
		status_data.duration  = new Date().getTime() - this.start_time;
		status_data.direction = this.getDirection(evt.pageX , evt.pageY);
		
		return status_data;
	};
	
	
	p.__reset = function(event , jqevt){
		this.reset = false;
		this.lastStatus = {};
		this.start_time = new Date().getTime();
		this.start_x = isTouch ? event.touches[0].pageX : jqevt.pageX;
		this.start_y = isTouch ? event.touches[0].pageY : jqevt.pageY;
	};
	
	p.__touchStart = function(event){
		
		var swipe = event.data.target;
		var jqevt = event;
		if(!swipe.enabled) return;
		event = event.originalEvent;
		
		if(!swipe.onSwipe) {
			$.error('Swipe listener is undefined');
			return;
		}
		
		if(swipe.touchStarted) return;
		
		swipe.start_x = isTouch ? event.touches[0].pageX : jqevt.pageX;
		swipe.start_y = isTouch ? event.touches[0].pageY : jqevt.pageY;
		swipe.start_time = new Date().getTime(); 
		
		$(document).bind(ev_end    , {target: swipe} , swipe.__touchEnd).
		 		    bind(ev_move   , {target: swipe} , swipe.__touchMove).
					bind(ev_cancel , {target: swipe} , swipe.__touchCancel);
					
		
		var evt = isTouch ? event.touches[0] : jqevt;
		var status = swipe.createStatusObject(evt);
		status.phase = 'start';
		
		swipe.onSwipe.call(null , status);
		
		if(!isTouch)
			jqevt.preventDefault();
		
		swipe.lastStatus = status;
		swipe.touchStarted = true;
	};
	
	p.__touchMove = function(event){
		var swipe = event.data.target;
		var jqevt = event;
		event = event.originalEvent;
		
		if(!swipe.touchStarted) return;
		
		clearTimeout(swipe.timo);
		swipe.timo = setTimeout(function(){swipe.__reset(event , jqevt);} , 60);
				
		var evt = isTouch ? event.touches[0] : jqevt;

		var status = swipe.createStatusObject(evt);
		
		if(swipe.priventDefultEvent(evt.pageX , evt.pageY))
			jqevt.preventDefault();
		
		status.phase = 'move';
		
		//if(swipe.lastStatus.direction !== status.direction) swipe.__reset(event , jqevt);
		
		swipe.lastStatus = status;
		
		swipe.onSwipe.call(null , status);
	};
	
	p.__touchEnd = function(event){
		
		var swipe = event.data.target;
		var jqevt = event;
		event = event.originalEvent;
		
		clearTimeout(swipe.timo);
		
		var evt = isTouch ? event.touches[0] : jqevt;
		
		var status = swipe.lastStatus;
		
		if(!isTouch)
			jqevt.preventDefault();
		
		status.phase = 'end';
		
		swipe.touchStarted = false;
		swipe.priventEvt   = null;
		
		$(document).unbind(ev_end     , swipe.__touchEnd).
		 		    unbind(ev_move    , swipe.__touchMove).
					unbind(ev_cancel  , swipe.__touchCancel);
		
		status.speed = status.distance / status.duration;
				
		swipe.onSwipe.call(null , status);
		
	};
	
	p.__touchCancel = function(event){
		var swipe = event.data.target;
		swipe.__touchEnd(event);
	};
	
	p.enable = function(){
		if(this.enabled) return;
		this.enabled = true;
	};
	
	p.disable = function(){
		if(!this.enabled) return;
		this.enabled = false;
	};
	
})(jQuery);
//dev\slider\tools\Timer.js 
 
/**
 * 	Ticker Class
 * 	Author: Averta Ltd
 */

;(function(){
	"use strict";
	
	averta.Ticker = function(){};
	
	var st = averta.Ticker,
		list = [],
		__stopped = true;
	
	st.add = function (listener , ref){
		list.push([listener , ref]);
		
		if(list.length === 1) st.start();
		
		return list.length;
	};
	
	st.remove = function (listener , ref) {
		for(var i = 0 , l = list.length ; i<l ; ++i){
			if(list[i] && list[i][0] === listener && list[i][1] === ref){
				list.splice(i , 1);
			}
		}
	};
	
	st.start = function (){
		if(!__stopped) return;
		__stopped = false;
		__tick();
	};
	
	st.stop = function (){
		__stopped = true;
	};
	
	var __tick = function () {
		if(st.__stopped) return;
		
		for(var i = 0 ;i<list.length ; ++i){
			list[i][0].call(list[i][1]);
		}

		requestAnimationFrame(__tick);
	};
	
})();

/**
 * 	Timer Class
 * 	Author: Averta Ltd
 */
;(function(){
	"use strict";
	
	if(!Date.now){
		Date.now = function(){
			return new Date().getTime();
		};
	}
	
	averta.Timer = function(delay , autoStart) {
		this.delay = delay;
		this.currentCount = 0;
		this.paused = false;
		this.onTimer = null;
		this.refrence = null;
		
		if(autoStart) this.start();
		
	};
	
	averta.Timer.prototype = {
		
		constructor : averta.Timer,
		
		start : function(){
			this.paused = false;
			this.lastTime = Date.now();
			averta.Ticker.add(this.update , this);
		},
		
		stop : function(){
			this.paused = true;
			averta.Ticker.remove(this.update , this);
		},
		
		reset : function(){
			this.currentCount = 0;
			this.paused = true;
			this.lastTime = Date.now();
		},
		
		update : function(){
			if(this.paused || Date.now() - this.lastTime < this.delay) return;
			this.currentCount ++;
			this.lastTime = Date.now();
			if(this.onTimer)
				this.onTimer.call(this.refrence , this.getTime());

		} ,
		
		getTime : function(){
			return this.delay * this.currentCount;
		}
		
	};
})();
//dev\slider\tools\CSSTweener.js 
 
;(function(){
	
	"use strict";
	
	var evt = null;
	
	window.CSSTween = function(element , duration , delay , ease){
		
		this.$element 	= element;
		this.duration 	= duration  || 1000;
		this.delay 		= delay 	|| 0;
		this.ease 		= ease 		|| 'linear';
		
		if(!evt){
			if(window._jcsspfx === 'O')
				evt = 'otransitionend';
			else if(window._jcsspfx == 'Webkit')
				evt = 'webkitTransitionEnd';
			else 
				evt = 'transitionend' ;
		}
		
	};
	
	var p = CSSTween.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.to = function(callback , target){
		this.to_cb 			= callback;
		this.to_cb_target 	= target;
		
		return this;
	};

	p.from = function(callback , target ){
		this.fr_cb 			= callback;
		this.fr_cb_target 	= target;
		
		return this;
	};
	
	p.onComplete = function(callback ,target){
		this.oc_fb 			= callback;
		this.oc_fb_target 	= target;
		
		return this;
	};
	
	p.chain = function(csstween){
		this.chained_tween = csstween;
		return this;
	};
	
	p.reset = function(){
		//this.$element[0].removeEventListener(evt , this.onTransComplete , true);
		clearTimeout(this.start_to);
		clearTimeout(this.end_to);
		
	
	};
	
	p.start = function(){
	
		clearTimeout(this.start_to);
		clearTimeout(this.end_to);
		
		this.fresh = true;
		
		if(this.fr_cb){
			this.$element.css(window._jcsspfx + 'TransitionDuration' , '0ms');
			this.fr_cb.call(this.fr_cb_target);
		}
		
		var that = this;
		
		this.onTransComplete = function(event){
			
			if(!that.fresh) return;
			
			//that.$element[0].removeEventListener(evt , this.onTransComplete, true);
			//event.stopPropagation();
			
			that.reset();
			
				this.$element.css(window._jcsspfx + 'TransitionDuration' , '').
						  css(window._jcsspfx + 'TransitionProperty' , '').
						  css(window._jcsspfx + 'TransitionTimingFunction' , '').
						  css(window._jcsspfx + 'TransitionDelay' , '');
			
			
			that.fresh = false;
			if(that.chained_tween) that.chained_tween.start();
			if(that.oc_fb)	that.oc_fb.call(that.oc_fb_target);
			
		};
			
		this.start_to = setTimeout(function(){
			
			that.$element.css(window._jcsspfx + 'TransitionDuration' , that.duration + 'ms').
						  css(window._jcsspfx + 'TransitionProperty' , 'all');
						  
			if(that.delay > 0)	that.$element.css(window._jcsspfx + 'TransitionDelay' , that.delay + 'ms');
			else				that.$element.css(window._jcsspfx + 'TransitionDelay' , '');
					
			if(that.ease != 'linear')	that.$element.css(window._jcsspfx + 'TransitionTimingFunction' , that.ease);

			if(that.to_cb)	that.to_cb.call(that.to_cb_target);
			
			//that.$element[0].addEventListener(evt , that.onTransComplete , true );
			
			that.end_to = setTimeout(function(){that.onTransComplete();} , that.duration + (that.delay || 0));
		} , 100);
		
	
		
		return this;
	};
		
})();

/**
 *	Cross Tween Class
 */
;(function(){
	
	"use strict";
	
	var _cssanim = null;
	window.CTween = {};
	
	function transPos(element, properties){
		if(properties.x !== undefined || properties.y !== undefined){
			if(_cssanim){
				var trans = window._jcsspfx+"Transform";
				if(properties.x !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateX('+properties.x+'px)';
					delete properties.x;
				}
				
				if(properties.y !== undefined){
					properties[trans] = (properties[trans] || '') + ' translateY('+properties.y+'px)';
					delete properties.y;
				}
			}else{
				if(properties.x !== undefined){
					var posx = element.css('right') !== 'auto' ? 'right' : 'left';
					//if(!element[0].bx) element[0].bx = parseInt(element.css(posx));
					properties[posx] = /*element[0].bx + */properties.x + 'px';
					delete properties.x;
				}
				
				if(properties.y !== undefined){
					var posy = element.css('bottom') !== 'auto' ? 'bottom' : 'top';
					//if(!element[0].by) element[0].by = parseInt(element.css(posy));
					properties[posy] = /*element[0].by + */properties.y + 'px';
					delete properties.y;
				}
			}
		}
		return properties;
	}
	
	CTween.setPos = function(element , pos){
		element.css(transPos(element , pos));
	};
	
	CTween.animate = function(element , duration , properties , options){
		if(_cssanim == null) _cssanim = window._cssanim;
		
		options = options || {};
		
		transPos(element , properties);
		
		if(_cssanim){
			var tween = new CSSTween(element , duration , options.delay , EaseDic[options.ease]);
			tween.to(function(){ element.css(properties);});	
			if(options.complete) tween.onComplete(options.complete , options.target);
			tween.start();
			tween.stop = tween.reset;
			return tween;
		}
		
		var onCl;
		
		if(options.delay) element.delay(options.delay);
		if(options.complete) 
			onCl = function(){
				options.complete.call(options.target);
			};

		element.stop(true).animate(properties , duration , options.ease || 'linear' , onCl);
				
		return element;
	};	
	
	CTween.fadeOut = function(target , duration , remove) {
		var options = {};
		if(remove) options.complete = function(){target.remove();};		
		
		CTween.animate(target , duration || 1000 , {opacity : 0} , options);
	};
	
	CTween.fadeIn = function(target , duration){
		target.css('opacity' , 0);
		CTween.animate(target , duration || 1000 , {opacity : 1});
	};
	
})();

;(function(){
	
	// Thanks to matthewlein
	// https://github.com/matthewlein/Ceaser
	
	window.EaseDic = {
		'linear'            : 'linear',
	    'ease'              : 'ease',
	    'easeIn'            : 'ease-in',
	    'easeOut'           : 'ease-out',
	    'easeInOut'         : 'ease-in-out',
	    
	    'easeInCubic'       : 'cubic-bezier(.55,.055,.675,.19)',
	    'easeOutCubic'      : 'cubic-bezier(.215,.61,.355,1)',
	    'easeInOutCubic'    : 'cubic-bezier(.645,.045,.355,1)',
	    'easeInCirc'        : 'cubic-bezier(.6,.04,.98,.335)',
	    'easeOutCirc'       : 'cubic-bezier(.075,.82,.165,1)',
	    'easeInOutCirc'     : 'cubic-bezier(.785,.135,.15,.86)',
	    'easeInExpo'        : 'cubic-bezier(.95,.05,.795,.035)',
	    'easeOutExpo'       : 'cubic-bezier(.19,1,.22,1)',
	    'easeInOutExpo'     : 'cubic-bezier(1,0,0,1)',
	    'easeInQuad'        : 'cubic-bezier(.55,.085,.68,.53)',
	    'easeOutQuad'       : 'cubic-bezier(.25,.46,.45,.94)',
	    'easeInOutQuad'     : 'cubic-bezier(.455,.03,.515,.955)',
	    'easeInQuart'       : 'cubic-bezier(.895,.03,.685,.22)',
	    'easeOutQuart'      : 'cubic-bezier(.165,.84,.44,1)',
	    'easeInOutQuart'    : 'cubic-bezier(.77,0,.175,1)',
	    'easeInQuint'       : 'cubic-bezier(.755,.05,.855,.06)',
	    'easeOutQuint'      : 'cubic-bezier(.23,1,.32,1)',
	    'easeInOutQuint'    : 'cubic-bezier(.86,0,.07,1)',
	    'easeInSine'        : 'cubic-bezier(.47,0,.745,.715)',
	    'easeOutSine'       : 'cubic-bezier(.39,.575,.565,1)',
	    'easeInOutSine'     : 'cubic-bezier(.445,.05,.55,.95)',
	    'easeInBack'        : 'cubic-bezier(.6,-.28,.735,.045)',
	    'easeOutBack'       : 'cubic-bezier(.175, .885,.32,1.275)',
	    'easeInOutBack'     : 'cubic-bezier(.68,-.55,.265,1.55)'
	};
})();

//dev\slider\tools\Aligner.js 
 
;(function(){
	
	"use strict";
	
	window.MSAligner = function(type , $container , $img ){
		
		this.$container = $container;
		this.$img	    = $img;	
	
		this.type 		= type || 'stretch'; // fill , fit , stretch , tile , center
		
		this.widthOnly = false;
		this.heightOnly = false;
	};
	
	var p = MSAligner.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.init = function(w , h){
		
		this.baseWidth = w;
		this.baseHeight = h;
		this.imgRatio = w / h;
		this.imgRatio2 = h / w;

		switch(this.type){
			case 'tile':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$img.remove();
			break;
			case 'center':
				this.$container.css('background-image' , 'url('+ this.$img.attr('src') +')');
				this.$container.css({
					backgroundPosition 	: 'center center',
					backgroundRepeat	: 'no-repeat'
				});
				this.$img.remove();
			break;
			case 'stretch':
				this.$img.css({
					width	: 	'100%',
					height	: 	'100%'
				});
			break;
			case 'fill':
			case 'fit' :				
				this.needAlign = true;
				this.align();
			break;
		}
		
	};
	
	p.align = function(){
		if(!this.needAlign) return;

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();

		var contRatio = cont_w / cont_h;
		
		if(this.type == 'fill'){
			if(this.imgRatio < contRatio ){
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);				
			}else{
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);
			}
				
		}else if(this.type == 'fit'){
			
			if(this.imgRatio < contRatio){
				this.$img.height(cont_h);
				this.$img.width(cont_h * this.imgRatio);				
			}else{
				this.$img.width(cont_w);
				this.$img.height(cont_w * this.imgRatio2);	
			}
		}
		
		this.setMargin();
		
	};

	p.setMargin = function(){

		var cont_w = this.$container.width();
		var cont_h = this.$container.height();
		
		this.$img.css('margin-top' , (cont_h - this.$img[0].offsetHeight) / 2 + 'px');
		this.$img.css('margin-left', (cont_w - this.$img[0].offsetWidth ) / 2 + 'px');
	}
	
})();
//dev\slider\controls\controller.js 
 
/**
 *  Touch List Control
 * 	version 1.1
 * 	
 * 	Copyright (C) 2014, Averta Ltd. All rights reserved. 	 	
 */

;(function(){	
	
	"use strict";
		
	var _options = {
		bouncing 			: true,
		snapping			: false,
		snapsize			: null,
		friction			: 0.05,
		outFriction			: 0.05,
		outAcceleration		: 0.09,	
		minValidDist		: 0.3,
		snappingMinSpeed	: 2,
		paging				: false,
		endless				: false,
		maxSpeed			: 160
	};
	

	var Controller = function(min , max , options){
		
		if(max === null || min === null) {
			throw new Error('Max and Min values are required.');
		}
		
		this.options = options || {};
		
		for(var key in _options){
			if(!(key in this.options))
				this.options[key] = _options[key];
		}
		
		this._max_value 	= max;
		this._min_value 	= min;
				
		this.value 				= min;
		this.end_loc 			= min;
		
		this.current_snap		= this.getSnapNum(min);
		
		this.__extrStep 	= 0;
		this.__extraMove 	= 0;
		
		this.__animID	 	= -1;
	
	};
	
	var p = Controller.prototype;
	
	/*
	---------------------------------------------------
		PUBLIC METHODS
	----------------------------------------------------
	*/


	p.changeTo = function(value , animate , speed , snap_num , dispatch) {
		this.stopped = false;
		this._internalStop();
		value = this._checkLimits(value);
		speed = Math.abs(speed || 0);
		
		if(this.options.snapping){
			snap_num = snap_num || this.getSnapNum(value);
			if( dispatch !== false )this._callsnapChange(snap_num);
			this.current_snap = snap_num;
		}
		
		if(animate){
			this.animating = true;

			var self = this;		
			var active_id = ++self.__animID;	

			var amplitude = value - self.value;
			var timeStep = 0;
			var targetPosition = value;
			var timeconst;
			var animFrict = 1 - self.options.friction;

			var tick = function(){
				
				if(active_id !== self.__animID) return;
				
				var dis =  value - self.value;
				
				if(Math.abs(dis) > self.options.minValidDist && self.animating)
					window.requestAnimationFrame(tick);
				else{
					if(self.animating){
						self.value = value;
						self._callrenderer();
					}
					self.animating = false;
					
					if(active_id !== self.__animID){
						self.__animID = -1;
					}
					
					self._callonComplete('anim');
					
					return;
				}
				
				timeconst = animFrict + (speed - 20)  * animFrict * 1.3 / self.options.maxSpeed;
				
				//self.value += dis * timeconst
				self.value = targetPosition - amplitude * Math.exp(-++timeStep * timeconst);

				self._callrenderer();
			};
		
			tick();
			
			return;
		}
				
		this.value = value;
		this._callrenderer();
	};
	
	p.drag = function(move){
		
		if(this.start_drag){
			this.drag_start_loc  = this.value;
			this.start_drag = false;
		}
		
		this.animating 		= false;
		this._deceleration 	= false;
		
		this.value -= move;
				
		if ( !this.options.endless && (this.value > this._max_value || this.value < 0)) {
			if (this.options.bouncing) {
				this.__isout = true;
				this.value += move * 0.6;
			} else if (this.value > this._max_value) {
				this.value = this._max_value;
			} else {
				this.value = 0;
			}
		}else if(!this.options.endless && this.options.bouncing){
				this.__isout = false;
		}
		
		this._callrenderer();
		
	};
	
	p.push = function(speed){
		this.stopped = false;
		if(this.options.snapping && Math.abs(speed) <= this.options.snappingMinSpeed){
			this.cancel();
			return;
		}
		
		this.__speed = speed;
		this.__startSpeed = speed;

		this.end_loc = this._calculateEnd();
		
		if(this.options.snapping){
			
			var snap_loc = this.getSnapNum(this.value),
				end_snap = this.getSnapNum(this.end_loc);

			if(this.options.paging){
				snap_loc = this.getSnapNum(this.drag_start_loc);
				
				this.__isout = false;
				if(speed > 0){
					this.gotoSnap(snap_loc + 1 , true , speed);
				}else{
					this.gotoSnap(snap_loc - 1 , true , speed);
				}
				return;	
			}else if(snap_loc === end_snap){
				this.cancel();
				return;
			}
			
			this._callsnapChange(end_snap);
			this.current_snap = end_snap;
			
		}
		
		this.animating = false;

		this.__needsSnap = this.options.endless || (this.end_loc > this._min_value && this.end_loc < this._max_value) ;
	
		if(this.options.snapping && this.__needsSnap)
			this.__extraMove = this._calculateExtraMove(this.end_loc);
		
		
		this._startDecelaration();
	};
	
	p.bounce = function(speed){
		if(this.animating) return;
		this.stopped = false;
		this.animating = false;
		
		this.__speed = speed;
		this.__startSpeed = speed;
		
		this.end_loc = this._calculateEnd();
		
		//if(this.options.paging){}
		
		this._startDecelaration();
	};
	
	p.stop = function(){
		this.stopped = true;
		this._internalStop();
	};
		
	p.cancel = function(){
		this.start_drag = true; // reset flag for next drag
		if(this.__isout){
			this.__speed = 0.0004;
			this._startDecelaration();
		}else if(this.options.snapping){
			this.gotoSnap(this.getSnapNum(this.value) , true);
		}
		
	};
		
	p.renderCallback = function(listener , ref){
		this.__renderHook = {fun:listener , ref:ref};
	};
	
	p.snappingCallback = function(listener , ref){
		this.__snapHook = {fun:listener , ref:ref};
	};
	
	p.snapCompleteCallback = function(listener , ref){
		this.__compHook = {fun:listener , ref:ref};
	};
	
	p.getSnapNum = function(value){
		return Math.floor(( value + this.options.snapsize / 2 ) / this.options.snapsize);
	};
		
	p.nextSnap = function(){
		this._internalStop();
		
		var curr_snap = this.getSnapNum(this.value);
		
		if(!this.options.endless && (curr_snap + 1) * this.options.snapsize > this._max_value){
			this.__speed = 8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap + 1 , true);
		}
	
	};
	
	p.prevSnap = function(){
		this._internalStop();
		
		var curr_snap = this.getSnapNum(this.value);
				
		if(!this.options.endless && (curr_snap - 1) * this.options.snapsize < this._min_value){
			this.__speed = -8;
			this.__needsSnap = false;
			this._startDecelaration();
		}else{
			this.gotoSnap(curr_snap - 1 , true);
		}
	
	};
	
	p.gotoSnap = function(snap_num , animate , speed){
		this.changeTo(snap_num * this.options.snapsize , animate , speed , snap_num);
	};
	
	p.destroy = function(){
		this._internalStop();
		this.__renderHook = null;
		this.__snapHook = null;
		this.__compHook = null;
	};
	
	/*
	---------------------------------------------------
		PRIVATE METHODS
	----------------------------------------------------
	*/
	
	p._internalStop = function(){
		this.start_drag = true; // reset flag for next drag
		this.animating = false;
		this._deceleration = false;
		this.__extrStep = 0;
	};
	
	p._calculateExtraMove = function(value){
		var m = value % this.options.snapsize;
		return m < this.options.snapsize / 2  ? -m : this.options.snapsize - m;
	};
	
	p._calculateEnd = function(step){
		var temp_speed = this.__speed;
		var temp_value = this.value;
		var i = 0;
		while(Math.abs(temp_speed) > this.options.minValidDist){
			temp_value += temp_speed;
			temp_speed *= this.options.friction;
			i++;
		}
		if(step) return i;
		return temp_value;
	};
	
	p._checkLimits = function(value){
		if(this.options.endless) 	return value;
		if(value < this._min_value) return this._min_value;
		if(value > this._max_value) return this._max_value;
		return value;
	};
	
	p._callrenderer = function(){
		if(this.__renderHook) this.__renderHook.fun.call(this.__renderHook.ref , this , this.value);
	};
	
	p._callsnapChange = function(targetSnap){
		if(!this.__snapHook || targetSnap === this.current_snap) return;
		this.__snapHook.fun.call(this.__snapHook.ref , this , targetSnap , targetSnap - this.current_snap);
	};

	p._callonComplete = function(type){
		if(this.__compHook && !this.stopped){
			this.__compHook.fun.call(this.__compHook.ref , this , this.current_snap , type);
		}
			
	};

	p._computeDeceleration = function(){
		
		if(this.options.snapping && this.__needsSnap){
			var xtr_move = (this.__startSpeed - this.__speed) / this.__startSpeed * this.__extraMove;
			this.value += this.__speed + xtr_move - this.__extrStep;
			this.__extrStep = xtr_move;
		}else{
			this.value += this.__speed;
		}
		
		this.__speed *= this.options.friction; //* 10;
		
		if(!this.options.endless && !this.options.bouncing){
			if(this.value <= this._min_value){
				this.value = this._min_value;
				this.__speed = 0;
			}else if(this.value >= this._max_value){
				this.value = this._max_value;
				this.__speed = 0;
			}
		}
		
		this._callrenderer();
		
		if(!this.options.endless && this.options.bouncing){
			
			var out_value = 0;
			
			if(this.value < this._min_value){
				out_value = this._min_value - this.value;
			}else if(this.value > this._max_value){
				out_value = this._max_value - this.value;
			}
			
			this.__isout =  Math.abs(out_value) >= this.options.minValidDist;
			
			if(this.__isout){
				if(this.__speed * out_value <= 0){
					this.__speed += out_value * this.options.outFriction;
				}else {
					this.__speed = out_value * this.options.outAcceleration;
				}
			}
		}
	};

	p._startDecelaration = function(){
		if(this._deceleration) return;
		this._deceleration = true;
		
		var self = this;
		
		var tick = function (){
			
			if(!self._deceleration) return;
			
			self._computeDeceleration();
			
			if(Math.abs(self.__speed) > self.options.minValidDist || self.__isout){
				window.requestAnimationFrame(tick);
			}else{
				self._deceleration = false;
				self.__isout = false;
				
				if(this.__needsSnap && self.options.snapping && !self.options.paging){
					self.value = self._checkLimits(self.end_loc + self.__extraMove);
				}else{
					self.value = Math.round(self.value);
				}
				
				self._callrenderer();
				self._callonComplete('decel');
			}
		};
		
		tick();
	};
	
	window.Controller = Controller;
	
})();//dev\slider\controls\LayerEffects.js 
 
;(function($){
	
	window.MSLayerEffects = {};
	
	var installed,
		_fade = {opacity:0};
		
	MSLayerEffects.setup = function(){
		
		if(installed) return;
		installed = true;
		
		var st 					= MSLayerEffects,
			transform_css 		= window._jcsspfx + 'Transform',
			transform_orig_css  = window._jcsspfx + 'TransformOrigin',
			o					= $.browser.opera; // Opera sucks :|
			_2d					= window._css2d && window._cssanim && !o;
		
		st.defaultValues = {left : 0 , top: 0 , opacity:1 , right:0 , bottom:0};
		st.defaultValues[transform_css] 	 = '';
		//st.defaultValues[transform_orig_css] = '';
		st.rf = 1;
		
		st.presetEffParams = {
			random: '30|300',
			long 	: 300,
			short	: 30,
			'false'	:false,
			'true'	:true,
			tl	 : 'top left'	,	bl: 'bottom left',
			tr   : 'top right'	,   br: 'bottom right', 
			rt   : 'top right'	,	lb: 'bottom left',
			lt   : 'top left'	,	rb: 'bottom right',
			t	 : 'top'		,	b : 'bottom',
			r	 : 'right'		,	l : 'left',
			c	 : 'center'	
		};
		
		
		/*
		 ----------------------------------------
		 				2D Effects
		 ----------------------------------------
		 */
		
		st.fade = function(){
			return _fade;
		};
	
		st.left = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = -dist*st.rf + 'px';
			return r;
		};
		
		st.right = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.left = dist*st.rf + 'px';
			return r;
		};
		
		st.top = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + -dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = -dist*st.rf + 'px';
			return r;
		};
		
		st.bottom = (_2d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateY(' + dist*st.rf + 'px)';
			return r;
		} : function (dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = dist*st.rf + 'px';
			return r;
		};
		
		st.from = (_2d)? function(leftdis , topdis , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'translateX('+leftdis*st.rf+'px) translateY(' + topdis*st.rf + 'px)';
			return r;
		} : function (leftdis , topdis, fade){
			var r = fade === false ? {} : {opacity:0};
			r.top = topdis*st.rf + 'px';
			r.left = leftdis*st.rf + 'px';
			return r;
		};
		
		
		// --------------------------------------------------------------------
		
		st.rotate = (_2d)? function(deg , orig ){
			var r = {opacity: 0};
			r[transform_css] = ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg, orig){
			return _fade;
		};
		
		st.rotateleft = (_2d)? function(deg , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.left(dist , fade);
		};
		
		st.rotateright = (_2d)? function(deg , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.right(dist , fade);
		};
		
		st.rotatetop = (_2d)? function(deg , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.top(dist , fade);
		};
		
		st.rotatebottom = (_2d)? function(deg , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade){
			return st.bottom(dist , fade);
		};
			
		st.rotatefrom = (_2d)? function(deg , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};
			
		st.skewleft = (_2d)? function(deg , dist , fade){
			var r = st.left(dist , fade);
			r[transform_css] += ' skewX(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.left(dist , fade);
		};	
		
		st.skewright = (_2d)? function(deg , dist , fade){
			var r = st.right(dist , fade);
			r[transform_css] += ' skewX(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.right(dist , fade);
		};	
		
		st.skewtop = (_2d)? function(deg , dist , fade){
			var r = st.top(dist , fade);
			r[transform_css] += ' skewY(' + deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.top(dist , fade);
		};	
		
		st.skewbottom = (_2d)? function(deg , dist , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += ' skewY(' + -deg + 'deg)';
			return r;
		} : function (deg , dist , fade){
			return st.bottom(dist , fade);
		};	
		
		
		st.scale = (_2d)? function(x , y , orig , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y , orig , fade){
			return fade === false ? {} : {opacity:0};
		};
		
		st.scaleleft = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.left(dist , fade);
		};
		
		st.scaleright = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.right(dist , fade);
		};
		
		st.scaletop = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.top(dist , fade);
		};
		
		st.scalebottom = (_2d)? function(x , y  , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] = ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , dist , orig , fade){
			return st.bottom(dist , fade);
		};
			
		st.scalefrom = (_2d)? function(x , y  , leftdis , topdis , orig , fade){
			var r = st.from(leftdis , topdis , fade);
			r[transform_css] += ' scaleX('+x+') scaleY('+y+')';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (x , y  , leftdis , topdis , orig , fade){
			return st.from(leftdis , topdis , fade);
		};
		
		st.rotatescale = (_2d)? function(deg , x , y  ,  orig , fade){
			var r = st.scale(x , y , orig , fade);
			r[transform_css] += ' rotate('+deg+'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , x , y  ,  orig , fade){
			return st.scale(x , y , orig , fade);
		};
		
		
		/*
		 ----------------------------------------
		 				3D Effects
		 ----------------------------------------
		 */
		
		st.front = (window._css3d)? function(dist , fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};
		
		st.back = (window._css3d)? function(dist, fade){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate(0.001deg)';
			return r;
		} : function (dist){
			return _fade;
		};
		
		st.rotatefront = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};
		
		st.rotateback = (window._css3d)? function(deg , dist , orig , fade ){
			var r = fade === false ? {} : {opacity:0};
			r[transform_css] = 'perspective(2000px) translate3d(0 , 0 ,' + -dist + 'px ) rotate('+ (deg || 0.001) +'deg)';
			if(orig) r[transform_orig_css] = orig;
			return r;
		} : function (deg , dist , orig , fade ){
			return _fade;
		};
						
		st.rotate3dleft = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.left(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
			
		} : function (x , y , z , dist , orig , fade){
			return st.left(dist , fade);;
		};
		
		st.rotate3dright = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.right(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.right(dist , fade);;
		};
		
		st.rotate3dtop = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.top(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.top(dist , fade);;
		};
		
		st.rotate3dbottom = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.bottom(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.bottom(dist , fade);
		};
		
		st.rotate3dfront = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.front(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.front(dist , fade);
		};		
		
		st.rotate3dback = (window._css3d)? function(x , y , z , dist , orig , fade){
			var r = st.back(dist , fade);
			r[transform_css] += (x?' rotateX('+x+'deg)' : ' ')+(y?' rotateY('+y+'deg)' : '')+(z?' rotateZ('+z+'deg)' : '');
			if(orig) r[transform_orig_css] = orig;
			return r;		
		} : function (x , y , z , dist , orig , fade){
			return st.back(dist , fade);
		};

		// transform effect
		st.t = (window._css3d)? function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz){
			var _r = fade === false ? {} : {opacity:0};
			var transform = '';

			tx  !== 'n' && (transform += 'translateX(' + tx * st.rf + 'px) ');
			ty  !== 'n' && (transform += 'translateY(' + ty * st.rf + 'px) ');
			tz  !== 'n' && (transform += 'translateZ(' + tz * st.rf + 'px) ');
			r   !== 'n' && (transform += 'rotate(' + r + 'deg) ');
			rx  !== 'n' && (transform += 'rotateX(' + rx + 'deg) ');
			ry  !== 'n' && (transform += 'rotateY(' + ry + 'deg) ');
			rz  !== 'n' && (transform += 'rotateZ(' + rz + 'deg) ');
			skx !== 'n' && (transform += 'skewX(' + skx + 'deg) ');
			sky !== 'n' && (transform += 'skewY(' + sky + 'deg) ');
			scx !== 'n' && (transform += 'scaleX(' + scx + ') ');
			scy !== 'n' && (transform += 'scaleY(' + scy + ')');

			_r[transform_css] = transform;

			var trans_origin = '';

			trans_origin += (ox !== 'n' ? ox + '% ' : '50% '); 
			trans_origin += (oy !== 'n' ? oy + '% ' : '50% '); 
			trans_origin += (oz !== 'n' ? oz + 'px' : ''); 

			_r[transform_orig_css] = trans_origin;
			
			return _r;

		} : function(fade,tx,ty,tz,r,rx,ry,rz,scx,scy,skx,sky,ox,oy,oz) {

			var r = fade === false ? {} : {opacity:0};
			tx  !== 'n' && (r.left += tx * st.rf + 'px');
			ty  !== 'n' && (r.top  += ty * st.rf + 'px');
			return r;
		}			
	};
})(jQuery);
//dev\slider\controls\LayerElement.js 
 
;(function($){
	
	window.MSLayerElement = function(){
		
		//this.$element = $('<div></div>').addClass('layer-element');
		this.$cont	  = $('<div></div>').addClass('layer-cont');//.append(this.$element);
			
		this.start_anim = {
			name		: 'fade',
			duration	: 1000,
			ease 		: 'linear',
			delay		: 0		
		};
		
		this.end_anim = {
			duration	: 1000,
			ease 		: 'linear'
		};
		
		this.type = 'text'; // video , image
		
		this.swipe 		= true;
		this.resizable 	= true;
		this.minWidth 	= -1;
			
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			'left'			,       'right'			, 
			'top'			,       'bottom'		,
			'font-size' 	,  		'line-height'	,
			'width'			,		'height'
		];
		
		this.baseStyle = {};
	};
	
	var p = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/	
	p.__playAnimation = function(animation , css){	
		var options = {};
		//if(animation.delay > 0) options.delay = animation.delay;
		if(animation.ease)		options.ease = animation.ease;
		
		this.show_tween = CTween.animate(this.$element, animation.duration , css , options);					
	};
	
	p._randomParam = function(value){
		var min = Number(value.slice(0,value.indexOf('|')));
		var max = Number(value.slice(value.indexOf('|')+1));
		
		return min + Math.random() * (max - min);
	};
	
	p._parseEff = function(eff_name){
		
		var eff_params = [];
		
		if(eff_name.indexOf('(') !== -1){
			var temp   = eff_name.slice(0 , eff_name.indexOf('(')).toLowerCase();
			var	value;
			
			eff_params = eff_name.slice(eff_name.indexOf('(') + 1 , -1).replace(/\"|\'|\s/g , '').split(',');
			eff_name   = temp;
		
			for(var i = 0 , l = eff_params.length; i < l ; ++i){
				value = eff_params[i];
				
				if(value in MSLayerEffects.presetEffParams)
					value = MSLayerEffects.presetEffParams[value];
				
				eff_params[i] = value;
			}
		}
		
		return {eff_name:eff_name , eff_params:eff_params};
	};
	
	p._parseEffParams = function(params){
		var eff_params = [];
		for(var i = 0 , l = params.length; i < l ; ++i){
			var value = params[i];
			if(typeof value === 'string' && value.indexOf('|') !== -1) value = this._randomParam(value);
			
			eff_params[i] = value;
		}
		
		return eff_params;
	};
	
	p._checkPosKey = function(key , style){		
		if(key === 'left' && !(key in this.baseStyle) && 'right' in this.baseStyle){
			 style.right = -parseInt(style.left) + 'px';
			 delete style.left;
			 return true;
		}
		
		if(key === 'top'  && !(key in this.baseStyle) && 'bottom' in this.baseStyle){
			style.bottom = -parseInt(style.top) + 'px';
			delete style.top;
			return true;
		} 
		
		return false;
	};
	
	
	/*
	---------------------------------------------------
	 					Public Methods
	---------------------------------------------------
	*/	
	p.setStartAnim = function(anim){ 
		$.extend(this.start_anim , anim); $.extend(this.start_anim  , this._parseEff(this.start_anim.name)); 
		this.$element.css('visibility' , 'hidden');
	};
	p.setEndAnim   = function(anim){ $.extend(this.end_anim   , anim ); };
	
	p.create = function(){
		this.$element.css('display' , 'none');
		this.$element.removeAttr('data-delay')
					 .removeAttr('data-effect')
					 .removeAttr('data-duration')
					 .removeAttr('data-type');
					 
		if(!this.end_anim.name)		this.end_anim.name  = this.start_anim.name;
		if(this.end_anim.time)		this.autoHide = true;//this.end_anim.delay = this.slide.delay * 1000 - this.end_anim.duration;
		
		$.extend(this.end_anim  , this._parseEff(this.end_anim.name));
		
	};
	
	p.init = function(){
		//if(this.initialized) return;
		this.initialized = true;

		var value;
		
		this.$element.css('visibility' , '');
		// store initial layer styles
		for(var i = 0 , l = this.__cssConfig.length; i < l ; i ++){
			var key = this.__cssConfig[i];
			if( this.type === 'text' && key === 'width'){ // in some browsers using computed style for width in text layer causes unexpected word wrapping 
				value = this.$element[0].style.width;
			} else {
				value = this.$element.css(key);
			}
			if(value != 'auto' && value != "" && value != "normal") 
				this.baseStyle[key] = parseInt(value);
		}
	};
	
	p.locate = function(){
		
		var layer_cont 	= this.slide.$layers;
		var width 		= parseFloat(layer_cont.css('width'));
		
		this.visible(this.minWidth < width);
		
		if(!this.resizable) return;
		
		this.factor 		= width / this.slide.slider.options.width;
		
		for(var key in this.baseStyle)
			this.$element.css(key , this.baseStyle[key] * this.factor + 'px');
		
	};
	
	p.start = function(){

		if(this.isShowing) return;
		this.isShowing = true;
		
		var key , base;
		
		// reads css value form LayerEffects
		MSLayerEffects.rf = this.factor;
		var effect_css = MSLayerEffects[this.start_anim.eff_name].apply(null , this._parseEffParams(this.start_anim.eff_params));
		
		// checkes effect css and defines TO css values
		var start_css_eff = {};
			
		for(key in effect_css){
			if(this._checkPosKey(key , effect_css)) continue;
			if(MSLayerEffects.defaultValues[key] != null)
				start_css_eff[key] = MSLayerEffects.defaultValues[key];
			if(key in this.baseStyle){
				base = this.baseStyle[key];
				effect_css[key] = base + parseFloat(effect_css[key]) + 'px';
				start_css_eff[key] = base + 'px';
			}
			this.$element.css(key , effect_css[key]);
		}
		
		var that = this;
		clearTimeout(this.to);
		this.to = setTimeout(function(){
			that.$element.css('display' , '');
			that.__playAnimation(that.start_anim , start_css_eff);
		} , that.start_anim.delay || 0.01);
		
		
		this.cl_to = setTimeout(function(){
			that.show_cl = true;
		},(this.start_anim.delay || 0.01) + this.start_anim.duration);
		
		if(this.autoHide){
			clearTimeout(this.hto);
			this.hto = setTimeout(function(){that.hide();} , that.end_anim.time );
		}
	};
	
	p.hide = function(){
		this.isShowing = false;
		
		// reads css value form LayerEffects
		var effect_css = MSLayerEffects[this.end_anim.eff_name].apply(null , this._parseEffParams(this.end_anim.eff_params));
		
		for(key in effect_css){
			
			if(this._checkPosKey(key , effect_css)) continue;
			
			if( key === window._jcsspfx + 'TransformOrigin' ){
				this.$element.css(key , effect_css[key]);
			}

			if(key in this.baseStyle){
				effect_css[key] = this.baseStyle[key] + parseFloat(effect_css[key]) +  'px';
			}
				
		}
		
		this.__playAnimation(this.end_anim , effect_css);
		
		clearTimeout(this.to);
		clearTimeout(this.hto);		
		clearTimeout(this.cl_to);		
	};
	
	p.reset = function(){
		this.isShowing = false;
		//this.$element.css(window._csspfx + 'animation-name', ''	);
		this.$element[0].style.display = 'none';
		this.$element.css('opacity', '100');
		this.$element[0].style['transitionDuration'] = '0ms';
		
		if(this.show_tween)
			this.show_tween.stop(true);
		
		clearTimeout(this.to);
		clearTimeout(this.hto);
	};
		
	p.destroy = function(){
		this.reset();
		this.$element.remove();
		this.$cont.remove();
	};
	
	p.visible = function(value){
		if(this.isVisible == value) return;
		
		this.isVisible = value;
		
		this.$element.css('display' , (value ? '' : 'none'));		
	};
	
})(jQuery);
//dev\slider\controls\ImageLayerElement.js 
 
;(function($){
	
	window.MSImageLayerElement = function(){
		MSLayerElement.call(this);
		this.needPreload = true;
		
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			'left'			,       'right'			, 
			'top'			,       'bottom'		,
			'width'			,		'height'
		];
		
	};
	
	MSImageLayerElement.extend(MSLayerElement);
	
	var p = MSImageLayerElement.prototype;
	var _super = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.create = function(){
		
		if(this.link){
			var p = this.$element.parent();
			p.append(this.link);
			this.link.append(this.$element);
			this.link.removeClass('ms-layer');
			this.$element.addClass('ms-layer');
			p = null;
		}

		_super.create.call(this);
		
		if(this.$element.data('src') != undefined){
			this.img_src = this.$element.data('src');
			this.$element.removeAttr('data-src');
		}else{
			var that = this;
			this.$element.on('load', function(event){
				that.slide.preloadCount--;
				if(that.slide.preloadCount === 0)
					that.slide.___onlayersReady();
			}).each($.jqLoadFix);
		}
		
		if($.browser.msie)
			this.$element.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging
	};
	
	p.loadImage = function(){
		var that = this;
		this.$element.preloadImg(this.img_src , function(event){
			that.slide.preloadCount--;
			if(that.slide.preloadCount === 0) that.slide.___onlayersReady();
		});
	};
	
})(jQuery);
//dev\slider\controls\VideoLayerElement.js 
 
;(function($){
	
	window.MSVideoLayerElement = function(){
		MSLayerElement.call(this);
		/*
		this.__cssConfig.push(
			'width'			,		'height'
		);*/
	};
	
	MSVideoLayerElement.extend(MSLayerElement);
	
	var p  = MSVideoLayerElement.prototype;
	var _super  = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	p.__playVideo = function(){
		if(this.img)CTween.fadeOut(this.img , 500 , false);
		CTween.fadeOut(this.video_btn , 500 , false);
		this.video_frame.attr('src' , 'about:blank').css('display' , 'block');
		if(this.video_url.indexOf('?') == -1) this.video_url += '?';
		this.video_frame.attr('src' , this.video_url + '&autoplay=1');
	};

	p.reset = function(){
		_super.reset.call(this);
		
		if(this.needPreload || this.$element.data('btn')){
			this.video_btn.css('opacity' , 1);
			this.video_frame.attr('src' , 'about:blank').css('display' , 'none');
		}
		
		if(this.needPreload){
			this.img.css('opacity' , 1);	
			return;
		}
		
		this.video_frame.attr('src' , this.video_url);
	};

	p.create = function(){
		_super.create.call(this);

		this.video_frame = this.$element.find('iframe').css({width:'100%' , height:'100%'});
		this.video_url   = this.video_frame.attr('src');
		
		var has_img = this.$element.has('img').length != 0;
		
		if(!has_img && !this.$element.data('btn')) return;
		
		this.video_frame.attr('src' , 'about:blank').css('display' , 'none');
		
		var that = this;
		
		this.video_btn = $('<div></div>').appendTo(this.$element).addClass('ms-video-btn').click(function() {
			that.__playVideo();
		});
		
		//this.video_frame.attr('src' , 'about:blank');
		
		if(!has_img) return;
		
		this.needPreload = true;
		this.img = this.$element.find('img:first').addClass('ms-video-img');
		
		if(this.img.data('src') !== undefined){
			this.img_src = this.img.data('src');
			this.img.removeAttr('data-src');
		}else{
			var that = this;
			this.img.attr('src' , this.img_src).on('load', function(event) {
				that.slide.preloadCount--;
				if(that.slide.preloadCount == 0)
					that.slide.___onlayersReady();
			}).each($.jqLoadFix);
		}
		
		if($.browser.msie)
			this.img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
	};
	
	p.loadImage = function(){
		var that = this;
		this.img.preloadImg(this.img_src, function(event) {
			that.slide.preloadCount--;
			if(that.slide.preloadCount == 0) that.slide.___onlayersReady();
		});
	};
	
})(jQuery);
//dev\slider\controls\HotspotLayer.js 
 
;(function($){

	"use strict";
	
	window.MSHotspotLayer = function(){
		MSLayerElement.call(this);
		
		this.__cssConfig = [
			'margin-top' 	,      'padding-top'	,
			'margin-bottom'	,      'padding-left'	,
			'margin-right'	,      'padding-right'	,
			'margin-left'	,      'padding-bottom' ,
			
			'left'			,       'right'			, 
			'top'			,       'bottom'		
		];
		
		
		this.ease = 'Expo'; 
		
	};
	
	MSHotspotLayer.extend(MSLayerElement);
	
	var p = MSHotspotLayer.prototype;
	var _super = MSLayerElement.prototype;
	
	/*-------------- METHODS --------------*/
	
	p._showTT = function(){
		if(!this.show_cl)  return;
		this.align = this._orgAlign;
		this._locateTT();
		
		//clearTimeout(this.hto);
		this.hide_start = false;
		
		if(this._tween)	this._tween.stop(true);
		
		this.tt.css({display:'block'});
		this._tween = CTween.animate(this.tt , 900 , this.to , {ease:'easeOut'+this.ease});
	};
	
	p._hideTT = function(){
		if(!this.show_cl)  return;
		if(this._tween)	this._tween.stop(true);
		
		var that = this;
		this._tween = CTween.animate(this.tt , 900 , this.from , {ease:'easeOut'+this.ease , complete:function(){that.tt.css('display' , 'none');}} );
		
		//clearTimeout(this.hto);
		//this.hto = setTimeout(function(){that.hide_start = true;} , 200);
	};
	
	p._updateClassName = function(name){
		if(this._lastClass)	this.tt.removeClass(this._lastClass);
		this.tt.addClass(name);
		this._lastClass = name;
	}
	
	p._alignPolicy = function(){
		var h = this.tt.outerHeight(),
		    w = Math.max(this.tt.outerWidth() , parseInt(this.tt.css('max-width'))),
		 	ww = window.innerWidth,
		 	wh = window.innerHeight;
		 	
		switch(this.align){
			case 'top':
				if(this.base_t < 0 )
					return 'bottom';
			break;
			case 'right':
				if(this.base_l + w > ww || this.base_t < 0)
					return 'bottom';
			break;
			case 'left':
				if(this.base_l < 0 || this.base_t < 0)
					return 'bottom';
			break;
		}
		
		return null;	
	};
		
	p._locateTT = function(){
		var os = this.$element.offset(),
		os2 = this.slide.slider.$element.offset();
		
		var dist = 50,
			space = 15 //* this.factor;
		
		this.pos_x = os.left - os2.left - this.slide.slider.$element.scrollLeft();
		this.pos_y = os.top - os2.top - this.slide.slider.$element.scrollTop();
		
		this.from = {opacity:0};
		this.to = {opacity:1};
		
		this._updateClassName('ms-tooltip-'+this.align);
		this.tt_arrow.css('margin-left' , '');
		
		var arrow_w = 15,//parseInt(this.tt_arrow.css('border-left')) + parseInt(this.tt_arrow.css('border-right')),
			arrow_h = 15;//parseInt(this.tt_arrow.css('border-top'))  + parseInt(this.tt_arrow.css('border-bottom'));
			
			//console.log(arrow_h,arrow_w);
		//
		switch(this.align){
			case 'top':
				var w = Math.max(this.tt.outerWidth() , parseInt(this.tt.css('max-width')));
				this.base_t = this.pos_y - this.tt.outerHeight() - arrow_h - space;
				this.base_l = this.pos_x - w/2;
				
				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}
				
				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth() / 2 + 'px');
				}
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform']   = '';
				}else{	
					this.from.top = (this.base_t - dist) + 'px';
					this.to.top = this.base_t + 'px';
				}

			break;
			case 'bottom':
				var w = Math.max(this.tt.outerWidth() , parseInt(this.tt.css('max-width')));
				
				this.base_t = this.pos_y + arrow_h + space;
				this.base_l = this.pos_x - w/2;
				
				if(this.base_l + w > window.innerWidth){
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.base_l + w -window.innerWidth + 'px');
					this.base_l = window.innerWidth - w;
				}
				
				if(this.base_l < 0){
					this.base_l = 0;
					this.tt_arrow.css('margin-left' , -arrow_w/2 + this.pos_x - this.tt.outerWidth() / 2 + 'px');
				}
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateY('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.top = (this.base_t + dist) + 'px';
					this.to.top = this.base_t + 'px';
				}
				
			break;
			case 'right':
				this.base_l = this.pos_x + arrow_w + space;
				this.base_t = this.pos_y - this.tt.outerHeight() / 2;
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX('+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l + dist) + 'px';
					this.to.left = this.base_l + 'px';
				}
				
			break;
			case 'left':
				this.base_l = this.pos_x - arrow_w - this.tt.outerWidth() - space;
				this.base_t = this.pos_y - this.tt.outerHeight() / 2;
				
				if(window._css3d){
					this.from[window._jcsspfx+'Transform'] = 'translateX(-'+dist+'px)';
					this.to[window._jcsspfx+'Transform'] = '';
				}else{
					this.from.left = (this.base_l - dist) + 'px';
					this.to.left = this.base_l + 'px';
				}
				
			break;
		}
		
		
		
		var policyAlign = this._alignPolicy();
		if(policyAlign !== null){
			this.align = policyAlign;
			this._locateTT();
			return;
		}
		
		this.tt.css('top'  ,parseInt(this.base_t)+'px').
				css('left' ,parseInt(this.base_l)+'px');
		
		this.tt.css(this.from);		
		
		
	};
	
	p.start = function(){
		_super.start.call(this);
		this.tt.appendTo(this.slide.slider.$element);
		//this._locateTT();
		this.tt.css('display' , 'none');
	};
	
	p.reset = function(){
		_super.reset.call(this);
		this.tt.detach();
	};
	
	p.create = function(){
		var that = this;
		
		_super.create.call(this);
		
		this._orgAlign = this.align = this.$element.data('align') !== undefined ? this.$element.data('align') : 'top';
		
		this.data = this.$element.html();
		
		this.$element.html('').on('mouseenter' , function(){that._showTT();}).on('mouseleave',function(){that._hideTT();});
		
		this.point = $('<div><div class="ms-point-center"></div><div class="ms-point-border"></div></div>')
					.addClass('ms-tooltip-point')
					.appendTo(this.$element);

		var link = this.$element.data('link'),
			target = this.$element.data('target');

		if( link ){
			this.point.on('click', function(){window.open(link , target || '_self');});
		}

		this.tt =  $('<div></div>')
					.addClass('ms-tooltip')
					//.addClass('ms-tooltip-'+this.align)
					.css('display','hidden')
					.css('opacity' , 0);
		
		this.tt_arrow = $('<div></div>')
						.addClass('ms-tooltip-arrow')
						.appendTo(this.tt);
		
		this._updateClassName('ms-tooltip-'+this.align);
		
		this.ttcont = $('<div></div>')
					  .addClass('ms-tooltip-cont')
					  .html(this.data)
					  .appendTo(this.tt); 

		//this.tt.on('mouseenter' , function(){if(!that.hide_start)that._showTT();}).on('mouseleave',function(){if(!that.hide_start)that._hideTT();});
	};

	
})(jQuery);
//dev\slider\SliderEvent.js 
 
window.MSSliderEvent = function (type){
	this.type = type;
};

MSSliderEvent.CHANGE_START      	= 'changeStart';
MSSliderEvent.CHANGE_END       		= 'changeEnd';
MSSliderEvent.WATING		      	= 'wating';
MSSliderEvent.AUTOPLAY_CHANGE   	= 'autoplayChange';
MSSliderEvent.VIDEO_PLAY		   	= 'videoPlay';
MSSliderEvent.VIDEO_CLOSE		   	= 'videoClose';
MSSliderEvent.INIT					= 'init';
MSSliderEvent.RESIZE				= 'resize';
MSSliderEvent.RESERVED_SPACE_CHANGE = 'rsc'; // internal use//dev\slider\Slide.js 
 
;(function($){
	
	"use strict";
	
	window.MSSlide = function(){
		
		this.$element = null;
		
		this.$loading = $('<div></div>').addClass('ms-slide-loading');
		
		this.layers = [];
		
		this.view 		= null;
		this.index 		= -1;
		
		this.__width 	= 0;
		this.__height 	= 0;
		
		this.preloadCount = 0;
		
		this.fillMode = 'fill'; // fill , fit , stretch , tile , center
		
		this.selected = false;
		this.pselected = false;
		this.autoAppend = true;
		
		this.moz = $.browser.mozilla;
	};
	
	var p = MSSlide.prototype;
		
	/*-------------- METHODS --------------*/
	
	
	/* -----------------------------------------------------
	 * 				Slide Swipe Reaction
	 -----------------------------------------------------*/
	p.onSwipeStart = function(){
		//this.$layers.css(window._csspfx + 'transition-duration' , '0ms');
		if(this.link)  this.linkdis = true;
		if(this.video) this.videodis = true;
	};
		
	p.onSwipeCancel = function(){
		if(this.link) this.linkdis = false;
		if(this.video) this.videodis = false;
		//this.$layers.css(window._csspfx + 'transition-duration' , this.view.__slideDuration + 'ms');
	};

	/* -----------------------------------------------------
	 * 					Slide Layers
	 -----------------------------------------------------*/
	
	p.addLayer = function(layer){
		if(!this.hasLayers)
			this.$layers  = $('<div></div>').addClass('ms-slide-layers');
		
		this.hasLayers = true;
		
		this.$layers.append(layer.$element);
		this.layers.push(layer);
		layer.slide = this;
		layer.create();
		
		if(layer.needPreload) this.preloadCount ++;		
	};
	
	// This method will be called by the last layer after loading all of layers.
	p.___onlayersReady = function(){
		this.ready = true;
		this.slider.api._startTimer();
		
		if(this.selected){
			/*this.initLayers();
			this.locateLayers();
			this.startLayers();*/

			this.showLayers();

			if(this.vinit){
				this.bgvideo.play();
				if(!this.autoPauseBgVid) 
					this.bgvideo.currentTime = 0;
			}

		}		

		if(!this.isSleeping)
			this.setup();

		CTween.fadeOut(this.$loading , 300 , true);
		
		//sequence loading
		if((this.slider.options.preload === 0 || this.slider.options.preload === 'all') && this.index < this.view.slideList.length - 1)
			this.view.slideList[this.index + 1].loadImages();
		else if(this.slider.options.preload === 'all' && this.index === this.view.slideList.length - 1)
			this.slider._removeLoading();
		
	};
	/*
	p.updateLayers = function(){
		if(!this.hasLayers) return;
		
		var value = -parseInt(this.$element.css('left')) - this.view.__contPos;
		
		this.$layers[0].style.opacity = (1 - Math.abs(value / this.__width));
		//this.$layers.css('opacity' ,  1 - Math.abs(value / this.__width));
	};
	*/
	p.startLayers = function(){
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].start();
	};
	
	p.initLayers = function(force){
		if(this.init && !force || this.slider.init_safemode) return;
		this.init = true;
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].init();
	};
	
	p.locateLayers = function(){
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].locate();
	};
	
	p.resetLayers = function(){
		this.$layers.css('display' , 'none');
		this.$layers.css('opacity' ,  1);
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].reset();
	};
	
	p.hideLayers = function(){
		if(this.preloadCount !== 0) return;
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].hide();
	};

	p.showLayers = function(){
		if(!this.hasLayers) return;

		if(this.lht){
			if(this.lht.reset)
				this.lht.reset();
			else
				this.lht.stop('true');
		}
		

		this.resetLayers();
		this.$layers.css('opacity' ,  1)
					.css('display' , '');
		

		if(this.preloadCount === 0){
			this.initLayers();
			this.locateLayers();
			this.startLayers();
		} 
	}
	
	/* -----------------------------------------------------*/
	
	p.setBG = function(img){
		this.hasBG = true;	
		var that = this;
		
		this.$imgcont = $('<div></div>').addClass('ms-slide-bgcont');
		
		this.$element.append(this.$loading)
			   		 .append(this.$imgcont);
		
		this.$bg_img = $(img).css('visibility' , 'hidden');
		this.$imgcont.append(this.$bg_img);
		
		this.bgAligner = new MSAligner(that.fillMode , that.$imgcont, that.$bg_img );
		this.bgAligner.widthOnly = this.slider.options.autoHeight;
			
		if(that.slider.options.autoHeight && (that.pselected || that.selected))
			 that.slider.setHeight(that.slider.options.height);
		
		if(this.$bg_img.data('src') !== undefined){
			this.bg_src = this.$bg_img.data('src');
			this.$bg_img.removeAttr('data-src');
		}else{
			this.$bg_img.one('load', function(event) {that._onBGLoad(event);})
						.each($.jqLoadFix);
		}
		
		this.preloadCount++;	
	};
	
	p._onBGLoad = function(event){
		this.bgNatrualWidth = event.width;
		this.bgNatrualHeight = event.height;

		this.bgLoaded = true;
		
		if($.browser.msie)
			this.$bg_img.on('dragstart', function(event) { event.preventDefault(); }); // disables native dragging
		
		this.preloadCount--;
		if(this.preloadCount === 0)
			this.___onlayersReady();
	};
	
	p.loadImages = function(){
		if(this.ls)return;
		this.ls = true;
		
		if(this.hasBG && this.bg_src){
			var that = this;
			this.$bg_img.preloadImg(this.bg_src , function(event) {that._onBGLoad(event);});
			//console.log('var a = ' + this.$bg_img, this.$bg_img.width(),this.$bg_img.height());
		}
		
		for(var i = 0 , l = this.layers.length; i < l; ++i){
			if(this.layers[i].needPreload)this.layers[i].loadImage();
		}

		if(this.bgvideo)
			this.bgvideo.load();
	};
	
	/* -----------------------------------------------------*/

	p.setBGVideo = function($video){
		if(!$video[0].play) return;

		// disables video in mobile devices
		if(window._mobile){
			$video.remove();
			return;
		}

		this.bgvideo  = $video[0];
		var that = this;

		$video.addClass('ms-slide-bgvideo');
		
		if($video.data('loop') !== false){
			this.bgvideo.addEventListener('ended' , function(){
				//that.bgvideo.currentTime = -1;
				that.bgvideo.play();
			});
		}	

		if($video.data('mute') !== false)
			this.bgvideo.muted = true;

		if($video.data('autopause') === true)
			this.autoPauseBgVid = true;

		this.bgvideo_fillmode = $video.data('fill-mode') || 'fill'; // fill , fit , none
		
		if(this.bgvideo_fillmode !== 'none') {
			this.bgVideoAligner = new MSAligner(this.bgvideo_fillmode , this.$element, $video );
			
			this.bgvideo.addEventListener('loadedmetadata' , function(){
				if(that.vinit) return;

				that.vinit = true;
				that.video_aspect = that.bgVideoAligner.baseHeight/that.bgVideoAligner.baseWidth;
				that.bgVideoAligner.init(that.bgvideo.videoWidth , that.bgvideo.videoHeight);

				//alert(that.bgvideo.videoWidth + ' ' + that.selected)
				that._alignBGVideo();
				CTween.fadeIn($(that.bgvideo) , 200);
				if(that.selected)
					that.bgvideo.play();
			});
		}

		$video.css('opacity' , 0);

		this.$bgvideocont = $('<div></div>').addClass('ms-slide-bgvideocont').append($video);

		if(this.hasBG)
			this.$imgcont.before(this.$bgvideocont);
		else
			this.$bgvideocont.appendTo(this.$element);
	};

	p._alignBGVideo = function(){
		if(!this.bgvideo_fillmode || this.bgvideo_fillmode === 'none') return;
		this.bgVideoAligner.align();
	};

	/* -----------------------------------------------------*/
	
	p.setSize = function(width , height , hard){
		
		this.__width  = width;
		
		if(this.slider.options.autoHeight){
			if(this.bgLoaded){
				this.ratio = this.__width / this.bgWidth;
				height = Math.floor(this.ratio * this.bgHeight);
				this.$imgcont.height(height);
			}else{
				this.ratio = width / this.slider.options.width;
				height = this.slider.options.height * this.ratio;
			}
		}
	
		this.__height = height;
		this.$element.width(width).height(height);
			

		if(this.hasBG && this.bgLoaded)this.bgAligner.align();
		this._alignBGVideo();
		
		if(hard && this.selected) this.initLayers(hard);
		if(this.selected) this.locateLayers();
		
		if(this.hasLayers){
			if(this.slider.options.autoHeight){
				this.$layers[0].style.height = this.getHeight() + 'px';
			}
			
			if(this.slider.options.layersMode == 'center') 
				this.$layers[0].style.left = Math.max( 0 ,  (this.__width - this.slider.options.width) / 2 ) + 'px';
		}
	};

	
	p.getHeight = function(){
		if(this.bgLoaded) return this.bgHeight * this.ratio;
		return Math.max(this.$element[0].clientHeight, this.slider.options.height * this.ratio);
	};

	/* -----------------------------------------------------*/

	p.__playVideo = function(){
		if(this.vplayed || this.videodis) return;
		this.vplayed = true;
		if(!this.slider.api.paused){
			this.slider.api.pause();
			this.roc = true; // resume on close;
		}
		this.vcbtn.css('display' , '');
		CTween.fadeOut(this.vpbtn 	, 500 , false);
		CTween.fadeIn(this.vcbtn 	, 500);
		CTween.fadeIn(this.vframe 	, 500);
		this.vframe.css('display' , 'block').attr('src' , this.video + '&autoplay=1');
		this.view.$element.addClass('ms-def-cursor');
		this.view.swipeControl.disable();
		
		this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_PLAY));
	};
	
	p.__closeVideo = function(){
		if(!this.vplayed) return;
		this.vplayed = false;
		if(this.roc)
			this.slider.api.resume();
		var that = this;
		
		CTween.fadeIn(this.vpbtn	, 500);
		CTween.animate(this.vcbtn   , 500 , {opacity:0} , {complete:function(){	that.vcbtn.css  ('display'  , 'none'); }});
		CTween.animate(this.vframe  , 500 , {opacity:0} , {complete:function(){	that.vframe.attr('src'  , 'about:blank').css('display'  , 'none');}});
		
		this.view.swipeControl.enable();
		this.view.$element.removeClass('ms-def-cursor');
		this.slider.slideController.dispatchEvent(new MSSliderEvent(MSSliderEvent.VIDEO_CLOSE));
	};

	/* -----------------------------------------------------*/

	p.create = function(){
		var that = this;
		if(this.hasLayers){			
			this.$element.append(this.$layers);
			
			if(this.slider.options.layersMode == 'center')
				this.$layers.css('max-width' , this.slider.options.width + 'px');
		}

		if(this.link){
			this.$element.css('cursor' , 'pointer')
						 .click(function(){ if(!that.linkdis) window.open(that.link , that.link_targ || '_self'); });
		}
		
		if(this.video){

			if(this.video.indexOf('?') === -1) this.video += '?';
			this.vframe = $('<iframe></iframe>')
						  .addClass('ms-slide-video')
						  .css({width:'100%' , height:'100%' , display:'none'})
						  .attr('src' , 'about:blank')
						  .appendTo(this.$element);
			
			this.vpbtn = $('<div></div>')
						.addClass('ms-slide-vpbtn')
						.click(function(){that.__playVideo();})
						.appendTo(this.$element);	
			
			this.vcbtn = $('<div></div>')
						.addClass('ms-slide-vcbtn')
						.click(function(){that.__closeVideo();})
						.appendTo(this.$element)
						.css('display','none');

			if(window._touch){
				this.vcbtn.removeClass('ms-slide-vcbtn')
						  .addClass('ms-slide-vcbtn-mobile')
						  .append('<div class="ms-vcbtn-txt">Close video</div>')
						  .appendTo(this.view.$element.parent());
			}
		}	
		
		if(!this.slider.options.autoHeight && this.hasBG){
			this.$imgcont.css('height' , '100%');
			
			if(this.fillMode === 'center' || this.fillMode === 'stretch')
				this.fillMode = 'fill';		
		}

		this.sleep();
	};
	
	
	p.destroy = function(){
		for(var i = 0 , l = this.layers.length; i < l; ++i)
			this.layers[i].$element.stop(true).remove();
		this.$element.remove();
		this.$element = null;
	};
	
	p.setup = function(){

		//if(this.isSettedup) return;
		//this.isSettedup = true;

		if(!this.initBG && this.bgLoaded){
			this.initBG = true;
			this.$bg_img.css('visibility' , '');
			this.bgWidth  = this.bgNatrualWidth  || this.$bg_img.width();
			this.bgHeight = this.bgNatrualHeight || this.$bg_img.height();

			CTween.fadeIn(this.$imgcont , 300);	

			if(this.slider.options.autoHeight)
			this.$imgcont.height(this.bgHeight * this.ratio);
			
			this.bgAligner.init(this.bgWidth  , this.bgHeight );
			this.setSize(this.__width , this.__height);
			
			if(this.slider.options.autoHeight && (this.pselected || this.selected))
			 	this.slider.setHeight(this.getHeight());
		}

	};

	p.prepareToSelect = function(){
		if(this.pselected || this.selected) return;
		this.pselected = true;		
		
		if(this.link || this.video){
			this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);
			this.view.addEventListener(MSViewEvents.SWIPE_CANCEL , this.onSwipeCancel , this);
		}

		this.loadImages();
			
		if(this.preloadCount === 0){
			if( this.bgvideo ){
				this.bgvideo.play();
			}

			if( this.slider.options.instantStartLayers){
				this.showLayers();
			}
		}

		if(this.moz)
			this.$element.css('margin-top' , '');
	};
	
	/*p.prepareToUnselect = function(){
		if(!this.pselected || !this.selected) return;
		
		this.pselected = false;
		
	};*/
	
	p.select = function(){
		if(this.selected) return;
		this.selected = true;
		this.pselected = false;
				
		this.$element.addClass('ms-sl-selected');
		
		if(this.hasLayers){
			if(this.slider.options.autoHeight)
				this.$layers[0].style.height = this.getHeight() + 'px';
			
			if( !this.slider.options.instantStartLayers ) {
				this.showLayers();
			}

			//this.view.addEventListener(MSViewEvents.SCROLL 		, this.updateLayers  , this)
		} 	

		if(this.preloadCount === 0 && this.bgvideo)
			this.bgvideo.play();
	};
	
	p.unselect = function(){
		this.pselected = false;

		if(this.moz)
			this.$element.css('margin-top' , '0.1px');

		if(this.link || this.video){
			this.view.removeEventListener(MSViewEvents.SWIPE_START 	, this.onSwipeStart  , this);
			this.view.removeEventListener(MSViewEvents.SWIPE_CANCEL  , this.onSwipeCancel , this);
		}

		if(this.bgvideo){
			this.bgvideo.pause();
			if(!this.autoPauseBgVid && this.vinit)
				this.bgvideo.currentTime = 0;
		}

		if(!this.selected) return;
		this.selected = false;

		this.$element.removeClass('ms-sl-selected');		
		
		if(this.hasLayers){
			var that = this;
			that.lht = CTween.animate(this.$layers ,500 , {opacity:0} , {complete:function(){	that.resetLayers();	}});
			//this.view.removeEventListener(MSViewEvents.SCROLL 		, this.updateLayers  , this);
		}
			
		if(this.video && this.vplayed){
			this.__closeVideo();
			this.roc = false;
		}	
	};	

	p.sleep = function(){
		if(this.isSleeping) return;
		this.isSleeping = true;
		if(this.autoAppend)
			this.$element.detach();
	};
	
	p.wakeup = function(){
		if(!this.isSleeping) return;
		this.isSleeping = false;
		
		if(this.autoAppend)
			this.view.$slideCont.append(this.$element);

		if(this.moz)
			this.$element.css('margin-top' , '0.1px');
		
		this.setup();

		// aling bg
		if(this.hasBG)
			this.bgAligner.align();
	};

})(jQuery);//dev\slider\SlideController.js 
 
;(function($){
	
	"use strict";
	
	var SliderViewList = {};
	
	window.MSSlideController = function(slider){
		
		this._delayProgress		= 0;
		
		this._timer 			= new averta.Timer(100);
		this._timer.onTimer 	= this.onTimer;
		this._timer.refrence 	= this;
		
		this.currentSlide		= null;
		
		this.slider 	= slider;
		this.so 		= slider.options;
		
		
		
		averta.EventDispatcher.call(this);
		
	};
	
	MSSlideController.registerView = function(name , _class){
		if(name in SliderViewList){
			 throw new Error( name + ', is already registered.');
			 return;
		}
		
		SliderViewList[name] = _class;
	};
	
	MSSlideController.SliderControlList = {};
	MSSlideController.registerControl = function(name , _class){
		if(name in MSSlideController.SliderControlList){
			 throw new Error( name + ', is already registered.');
			 return;
		}
		
		MSSlideController.SliderControlList[name] = _class;
	};	
	
	var p = MSSlideController.prototype;
	
	/*-------------- METHODS --------------*/
	

	p.setupView = function(){

		var that = this;
		this.resize_listener = function(){that.__resize();};
		
		// in @version 1.5.7 it will be added in Masterslider.js _setupSliderLayout function
		//$(window).bind('resize', this.resize_listener);
		
		//if(this.so.smoothHeight) this.so.autoHeight = true;
	
		var viewOptions = {
			spacing: 		this.so.space,
			mouseSwipe:		this.so.mouse,
			loop:			this.so.loop,
			autoHeight:		this.so.autoHeight,
			swipe:			this.so.swipe,
			speed:			this.so.speed,
			dir:			this.so.dir,
			viewNum: 		this.so.inView,
			critMargin: 	this.so.critMargin  	
		};	
		
		if(this.so.viewOptions)
			$.extend(viewOptions , this.so.viewOptions);
				
		if(this.so.autoHeight) this.so.heightLimit = false;
	
		//this.view.slideDuration = this.so.duration;

		var viewClass = SliderViewList[this.slider.options.view] || MSBasicView;
		if(viewClass._3dreq && (!window._css3d || $.browser.msie) ) viewClass = viewClass._fallback || MSBasicView;
		
		this.view = new viewClass(viewOptions);

		if(this.so.overPause){
			var that = this;
			this.slider.$element.mouseenter(function(){
				that.is_over = true;
				that._stopTimer();
			}).mouseleave(function(){
				that.is_over = false;
				that._startTimer();
			});
		}

	};

	p.onChangeStart = function(){
		
		this.change_started = true;

		if(this.currentSlide) this.currentSlide.unselect();
		this.currentSlide = this.view.currentSlide;
		this.currentSlide.prepareToSelect();
		//this.__appendSlides();
		if(this.so.endPause && this.currentSlide.index === this.slider.slides.length - 1){
			this.pause();
			//this._timer.reset();
			this.skipTimer();
		}
		
		if(this.so.autoHeight){
			this.slider.setHeight(this.currentSlide.getHeight());
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_START));
	};
	
	p.onChangeEnd = function(){
		//if(!this.currentSlide.selected)
		//	this._timer.reset();
		this.change_started = false;
		
		this._startTimer();
		this.currentSlide.select();

		
		
		if(this.so.preload > 1){
			var loc ,i , l = this.so.preload - 1;
			
			// next slides
			for(i=1;i<=l;++i){
				loc = this.view.index + i;
				
				if(loc >= this.view.slideList.length) {
					if(this.so.loop){
						loc = loc - this.view.slideList.length;
					}else{
						i = l; 
						continue;
					}
				}
				this.view.slideList[loc].loadImages();
			}
			
			// previous slides
			if(l > this.view.slideList.length/2) 
				l = Math.floor(this.view.slideList.length/2);
			
			for(i=1;i<=l;++i){
				
				loc = this.view.index - i;
				
				if(loc < 0){
					if(this.so.loop){
						loc = this.view.slideList.length + loc;
					}else{
						i = l;
						continue;
					}
				} 
				this.view.slideList[loc].loadImages();
			}
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.CHANGE_END));
		
	};
		
	p.onSwipeStart = function(){
		//this._timer.reset();
		this.skipTimer();
	};
	
	p.skipTimer = function(){
		this._timer.reset();
		this._delayProgress  = 0;
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WATING));
	};

	p.onTimer = function(time) {
		
		if(this._timer.getTime() >= this.view.currentSlide.delay * 1000){
			//this._timer.reset();
			this.skipTimer();
			this.view.next();
			this.hideCalled = false;
		}
		this._delayProgress = this._timer.getTime() / (this.view.currentSlide.delay * 10);
		
		if(this.so.hideLayers && !this.hideCalled && this.view.currentSlide.delay * 1000 - this._timer.getTime() <= 300){
			this.view.currentSlide.hideLayers();
			this.hideCalled = true;
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.WATING));
	};
	
	p._stopTimer = function(){
		if(this._timer)
			this._timer.stop();
	};
	
	p._startTimer = function(){
		if(!this.paused && !this.is_over && this.currentSlide && this.currentSlide.ready && !this.change_started)
			this._timer.start();
	};

	p.__appendSlides = function(){
		var slide , loc , i = 0 , l = this.view.slideList.length -1;

		// detach all
		for ( i ; i < l ; ++i){
			slide = this.view.slideList[i];
			if(!slide.detached){
			 	slide.$element.detach();
			 	slide.detached = true;
			}
		}

		// append current slide
		this.view.appendSlide(this.view.slideList[this.view.index]);

		l = 3;

		// next slides
		for(i=1;i<=l;++i){
			loc = this.view.index + i;
			
			if(loc >= this.view.slideList.length) {
				if(this.so.loop){
					loc = loc - this.view.slideList.length;
				}else{
					i = l; 
					continue;
				}
			}

			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);

		}
		
		// previous slides
		if(l > this.view.slideList.length/2) 
			l = Math.floor(this.view.slideList.length/2);
		
		for(i=1;i<=l;++i){
			
			loc = this.view.index - i;
			
			if(loc < 0){
				if(this.so.loop){
					loc = this.view.slideList.length + loc;
				}else{
					i = l;
					continue;
				}
			} 
			
			slide = this.view.slideList[loc];
			slide.detached = false;
			this.view.appendSlide(slide);
		}

	}

	p.__resize = function(hard){
		if(!this.created) return;

		this.width = this.slider.$element[0].clientWidth || this.so.width;
		
		if(!this.so.fullwidth){ 
			this.width = Math.min(this.width , this.so.width);
			//this.view.$element.css('left' , (this.slider.$element[0].clientWidth - this.width) / 2 + 'px');
		}
		
		if(!this.so.fullheight)
			this.height = this.width / this.slider.aspect;
		else{
			this.so.heightLimit = false;
			this.so.autoHeight = false;
			this.height = this.slider.$element[0].clientHeight;
		}
		
		if(!this.so.autoHeight)
			this.view.setSize(this.width , (this.so.heightLimit ? Math.min(this.height , this.so.height) : this.height) , hard);
		else{
			this.currentSlide.setSize(this.width , null , hard);
			this.view.setSize(this.width , this.currentSlide.getHeight() , hard);
		}
		
		if(this.slider.$controlsCont){
			if(this.so.centerControls && this.so.fullwidth) {
				this.view.$element.css('left' , Math.min(0,-(this.slider.$element[0].clientWidth - this.so.width) / 2) + 'px');
			}
		}
		
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESIZE));
	};

	p.__dispatchInit = function(){
		this.dispatchEvent(new MSSliderEvent(MSSliderEvent.INIT));
	};
		
	p.setup = function(){
		
		this.created = true;
		this.paused = !this.so.autoplay;

		//this.slider.$element.append(this.view.$element);
		this.view.addEventListener(MSViewEvents.CHANGE_START , this.onChangeStart , this);
		this.view.addEventListener(MSViewEvents.CHANGE_END   , this.onChangeEnd   , this);
		this.view.addEventListener(MSViewEvents.SWIPE_START  , this.onSwipeStart  , this);	
		
		this.currentSlide = this.view.slides[this.so.start - 1];
		this.__resize();
		this.view.create(this.so.start - 1);
		
		if(this.so.preload === 0)
			this.view.slides[0].loadImages();
			
		this.scroller = this.view.controller;

		if(this.so.wheel){
			var that = this;
			var last_time = new Date().getTime();
			this.wheellistener = function(event){
				var current_time = new Date().getTime();
				if(current_time - last_time < 350) return;
				last_time = current_time;
				var e = window.event || event.orginalEvent || event;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				if(delta < 0)		that.next();
				else if(delta > 0)	that.previous();
				return false;
			};
			
			if($.browser.mozilla) this.slider.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.bind('mousewheel', this.wheellistener);
		}

		if(this.slider.$element[0].clientWidth === 0)
			this.slider.init_safemode = true;

		this.__resize();
	};
	
	p.index = function(){
		return this.view.index;
	};
	
	p.count = function(){
		return this.view.slidesCount;
	};
	
	p.next = function(){
		this.skipTimer();
		this.view.next();
	};
	
	p.previous = function(){
		this.skipTimer();
		this.view.previous();
	};
	
	p.gotoSlide = function(index) { 
		this.skipTimer();
		this.view.gotoSlide(index);
	};

	p.destroy = function(reset){
		this.slider.destroy(reset);
	};

	p._destroy = function(){
		this._timer.reset();
		this._timer = null;
		
		$(window).unbind('resize', this.resize_listener);
		this.view.destroy();
		this.view = null;
		
		if(this.so.wheel){
			if($.browser.mozilla) this.slider.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.slider.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}
			
		this.so = null;
	};

	p.update = function(hard){
		if(this.slider.init_safemode && hard)
			this.slider.init_safemode = false;
		this.__resize(hard);
	}
		
	p.locate = function(){
		this.__resize();
	};
	
	p.resume = function(){
		if(!this.paused) return;
		this.paused = false;
		this._startTimer();
	};
	
	p.pause = function(){
		if(this.paused) return;
		this.paused = true;
		this._stopTimer();
	};

	p.currentTime = function(){
		return this._delayProgress;
	};
	
	averta.EventDispatcher.extend(p);
})(jQuery);
//dev\slider\MasterSlider.js 
 
/**
 * Master Slider Main JavaScript File
 * @version 1.5.7
 * @author Averta Ltd.
 */

;(function($){
	
	"use strict";
	
	var LayerTypes = {
		'image' 	: MSImageLayerElement,
		'text'  	: MSLayerElement,
		'video' 	: MSVideoLayerElement,
		'hotspot'	: MSHotspotLayer
	};
	
	window.MasterSlider = function(){
		
		// Default Options
		this.options = {
			autoplay 		: false,      // Enables the autoplay slideshow.
			loop 			: false,	  // Enables the continuous sliding mode.
			mouse			: true,		  // Whether the user can use mouse drag navigation.
			swipe			: true,		  // Whether the drag/swipe navigation is enabled.
			grabCursor		: true,		  // Whether the slider uses grab mouse cursor.
			space  			: 0,		  // The spacing value between slides in pixels.
			fillMode		: 'fill',  	  // Specifies the slide background scaling method. Its acceptable values are "fill", "fit", "stretch", "center" and "tile". 
			start			: 1,		  // The slider starting slide number.
			view			: 'basic',	  // The slide changing transition. 
			width			: 300,		  // The base width of slides. It helps the slider to resize in correct ratio.
			height			: 150,		  // The base height of slides, It helps the slider to resize in correct ratio.
			inView			: 15, 		  // Specifies number of slides which will be added at a same time in DOM.
			critMargin		: 1,		  // 
			heightLimit		: true,		  // It force the slide to use max height value as its base specified height value.
			smoothHeight	: true,		  // Whether the slider uses smooth animation while its height changes.
			autoHeight		: false,      // Whether the slider adapts its height to each slide height or not. It overrides heightLimit option.
			fullwidth		: false,	  // It enables the slider to adapt width to its parent element. It's very useful for creating full-width sliders. In default it takes max width as its base width value.
			fullheight		: false,	  // It enables the slider to adapt height to its parent element.
			autofill		: false,	  // It enables the slider to adapt width and height to its parent element, It's very useful for creating fullscreen or fullwindow slider.
			layersMode		: 'center',	  // It accepts two values "center" and "full". The "center" value indicates that the slider aligns layers to the center. This option is only effective in full width mode.
			hideLayers		: false,	  // Whether the slider hides all layers before changing slide.
			endPause		: false,	  // Whether the slider pauses slideshow when it stays at the last slide.
			centerControls 	: true,		  // Whether the slider aligns UI controls to center. This option is only effective in full width mode.
			overPause		: true,		  // Whether the slider pauses slideshow on hover.
			shuffle			: false,	  // Enables the shuffle slide order.
			speed			: 17, 		  // Specifies slide changing speed. It accepts float values between 0 and 100.
			dir				: 'h',		  // Specifies slide changing direction. It accepts two values "h" (horizontal) and "v" (vertical).
			preload			: 0,		  // Specifies number of slides which will be loaded by slider. 0 value means the slider loads slides in sequence.
			wheel			: false,	  // Whether slider uses mouse wheel for navigation.
			layout			: 'boxed',	  // It accepts 'fullwidth', 'fullscreen', 'fillwidth', 'autofill', 'partialview', 'boxed'. It overrides 'fullwidth' and 'autofill' (added in v1.5.6)
			fullscreenMargin: 0,
			instantStartLayers: false
		};
		
		this.slides = [];		
		this.$element = null;

		// used by new layout method. to force fullwidth or fullscreen
		this.lastMargin = 0; 

		// Reserved side spaces of slider
		this.leftSpace = 0;
		this.topSpace = 0;
		this.rightSpace = 0;
		this.bottomSpace = 0;

		var that = this;
		this.resize_listener = function(){that._resize();};
		$(window).bind('resize', this.resize_listener);
				
	};
	
	MasterSlider.author  		= 'Averta Ltd. (www.averta.net)';
	MasterSlider.version 		= '1.5.7';
	MasterSlider.releaseDate 	= 'March 2014';
	
	var p = MasterSlider.prototype;
	
	/*-------------- METHODS --------------*/

	/**
	 * create one slide object for each slide and add it to slide controller
	 * @since 1.0
	 * @private
	 */
	p.__setupSlides = function(){
		var that = this,
			new_slide,
			ind = 0;
		
		this.$element.children('.ms-slide').each(function(index) {
			
			var $slide_ele = $(this);
			
			new_slide 			= new MSSlide();
			new_slide.$element 	= $slide_ele;
			new_slide.slider 	= that;
			new_slide.delay  	= $slide_ele.data('delay') 		!== undefined ? $slide_ele.data('delay') 		: 3;
			new_slide.fillMode 	= $slide_ele.data('fill-mode')	!== undefined ? $slide_ele.data('fill-mode') 	: that.options.fillMode;
			new_slide.index 	= ind++;

			// Slide Background Image
			var slide_img = $slide_ele.children('img');
			if(slide_img.length > 0 ) new_slide.setBG(slide_img[0]);
			
			// Slide Video Background
			var slide_video = $slide_ele.children('video');
			if(slide_video.length > 0) new_slide.setBGVideo(slide_video);

			// controls
			if(that.controls){
				for(var i = 0 , l = that.controls.length; i<l ; ++i)
					that.controls[i].slideAction(new_slide);
			}
			
			// Slide Link and Video
			var slide_link = $slide_ele.children('a').each(function(index) {
			  var $this = $(this);
			  if(this.getAttribute('data-type') === 'video'){
			  	new_slide.video = this.getAttribute('href');
			  	$this.remove();
			  }else if(!$this.hasClass('ms-layer')) {
			  	new_slide.link  = this.getAttribute('href');
			  	new_slide.link_targ = this.getAttribute('target');
			  	$this.remove();
			  }
			});//.remove();
			
			// Slide Layers
			that.__createSlideLayers(new_slide , $slide_ele.find('.ms-layer'));
			
			that.slides.push(new_slide);
			that.slideController.view.addSlide(new_slide);

		});
	};
	
	/**
	 * Creates layers of specified layer
	 * @param  {MSSlide} slide  
	 * @param  {Array} layers
	 * @since 1.0
	 * @private
	 */
	p.__createSlideLayers = function(slide , layers) {
		if(layers.length == 0) return;
		
		layers.each(function(index , domEle){
			var $layer_element,
				$parent_ele;
			
			if (domEle.nodeName === 'A'){
				$parent_ele = $(this);
				$layer_element = $parent_ele.find('img');
			}else{
				$layer_element = $(this);
			} 
			
			var layer = new (LayerTypes[$layer_element.data('type') || 'text']) ();
			
			layer.$element = $layer_element;
			
			layer.link = $parent_ele;
			
			var eff_parameters = {},
				end_eff_parameters = {};
		
			if($layer_element.data('effect')	!== undefined)		eff_parameters.name 			= $layer_element.data('effect');
			if($layer_element.data('ease')		!== undefined) 		eff_parameters.ease 			= $layer_element.data('ease');
			if($layer_element.data('duration')  !== undefined)  	eff_parameters.duration 		= $layer_element.data('duration');
			if($layer_element.data('delay')   	!== undefined)   	eff_parameters.delay			= $layer_element.data('delay');

			if($layer_element.data('hide-effect'))		    		end_eff_parameters.name 		= $layer_element.data('hide-effect');
			if($layer_element.data('hide-ease'))		   			end_eff_parameters.ease 		= $layer_element.data('hide-ease');
			if($layer_element.data('hide-duration') !== undefined)  end_eff_parameters.duration		= $layer_element.data('hide-duration');
			if($layer_element.data('hide-time') 	!== undefined)  end_eff_parameters.time 		= $layer_element.data('hide-time');
			
			if($layer_element.data('resize')   !== undefined) 		layer.resizable					= $layer_element.data('resize');
			if($layer_element.data('swipe')	   !== undefined)  		layer.swipe						= $layer_element.data('swipe');
					
			if($layer_element.data('widthlimit') !== undefined) 	layer.minWidth					= $layer_element.data('widthlimit');
			
			layer.setStartAnim(eff_parameters);
			layer.setEndAnim(end_eff_parameters);
			
			slide.addLayer(layer);
			
		});
		
	};
	
	/**
	 * remove slider initialize loading
	 * @since 1.0
	 * @private
	 */
	p._removeLoading = function(){
		$(window).unbind('resize', this.resize_listener);
		this.$element = $('#' + this.id).removeClass('before-init')
										.css('visibility', 'visible')
										.css('height','')
										.css('opacity' , 0);
		CTween.fadeIn(this.$element);
		this.$loading.remove();

		if(this.slideController)
			this.slideController.__resize();
	};
	
	/**
	 * resize listener, it only used for aligning slider loading and after slider init it will be removed
	 * @param  {Event} e
	 * @since 1.0
	 * @private
	 */
	p._resize = function(e){
		if(this.$loading){
			var h = this.$loading[0].clientWidth / this.aspect;
			h = this.options.heightLimit ? Math.min(h , this.options.height) : h;
			
			this.$loading.height(h);
			this.$element.height(h);		
		}
	};
	
	/**
	 * changes the order of slides element before setup slides
	 * @since 1.0
	 * @private
	 */
	p._shuffleSlides = function(){
		var slides = this.$element.children('.ms-slide') , r;

		for(var i = 0 , l = slides.length; i < l ; ++i){
			r = Math.floor(Math.random() * (l - 1));
			if(i != r){
				this.$element[0].insertBefore(slides[i] , slides[r]);
				slides = this.$element.children('.ms-slide');
			}
		}
	};

	/**
	 * New method of setting up the layout of slider
	 * @since 1.5.6 
	 */
	p._setupSliderLayout = function(){

		// create side spaces
		this._updateSideMargins();
		this.lastMargin = this.leftSpace;
		
		var lo = this.options.layout;

		if( lo !== 'boxed' && lo !== 'partialview' ){
			this.options.fullwidth = true;  // enable slider fullscreen for fullwidth, fillwidth, autofill and fullscreen layouts.
		} 

		if( lo === 'fullscreen' || lo === 'autofill' ){
			this.options.fullheight = true;
		}

		// partial view 
		if ( lo === 'partialview' ){
			this.$element.addClass('ms-layout-partialview');
		}

		if( lo === 'fullscreen' ||  lo === 'fullwidth' ){
			$(window).bind('resize', {that:this}, this._updateLayout);
			this._updateLayout();
		}

		// bind resize handler of slidecontroller __resize 
		$(window).bind('resize', this.slideController.resize_listener);
	};

	/**
	 * updates layout of slider based on window size
	 * @param  {Event} event
	 * @since 1.5.6
	 */
	p._updateLayout = function(event){
		var that = event? event.data.that : this,
			lo = that.options.layout,
			$element = that.$element;

		// width 
		$element.width($('body').innerWidth() - that.leftSpace - that.rightSpace);
		var margin = -$element.offset().left + that.leftSpace + that.lastMargin;
		$element.css('margin-left', margin );
		that.lastMargin = margin;

		// height
		if( lo === 'fullscreen' ){
			$element.height(window.innerHeight - that.options.fullscreenMargin - that.topSpace - that.bottomSpace);
		}
	};


	/**
	 * initialize the slider, called by document ready
	 * <code>preventInit</code> property prevents auto initialize slider after document ready it used by plugins of slider like Flickr
	 * @since 1.0
	 * @protected
	 */
	p._init = function(){

		if(this.preventInit) return;
		
		this.initialized = true;

		if(this.options.preload !== 'all')
			this._removeLoading();
		//else
		//	this.$element.css('width' , this.$loading[0].clientWidth);
		
		if(this.options.shuffle) 	this._shuffleSlides();

		MSLayerEffects.setup();

		this.slideController.setupView();
		this.view = this.slideController.view;

		if(this.controls){		
			this.$controlsCont = $('<div></div>').addClass('ms-container').appendTo(this.$element);
			if(this.options.centerControls)
				this.$controlsCont.css('max-width' , this.options.width + 'px');
				
			for(var i = 0 , l = this.controls.length; i<l ; ++i){
				this.controls[i].setup();
			}
			
			this.$controlsCont.prepend(this.view.$element);
		}else{
			this.$element.append(this.view.$element);
		}

		this._setupSliderLayout();
		this.__setupSlides();
		this.slideController.setup();
		
		if(this.controls){
			for(i = 0 , l = this.controls.length; i<l ; ++i)
				this.controls[i].create();
		}
		
		if(this.options.autoHeight){
			this.slideController.view.$element.height(this.slideController.currentSlide.getHeight());
		}
			
		// add grab cursor
		if(this.options.swipe && !window._touch && this.options.grabCursor && this.options.mouse){
			var $view = this.view.$element;
			
			$view.mousedown(function(){
				$view.removeClass('ms-grab-cursor');
				$view.addClass('ms-grabbing-cursor');
			}).addClass('ms-grab-cursor');
			
			$(document).mouseup(function(){
				$view.removeClass('ms-grabbing-cursor');
				$view.addClass('ms-grab-cursor');
			});
		}

		this.slideController.__dispatchInit();
		
	};
	
	/**
	 * changes the height of slider, it used in autoheight slider
	 * @param {Number} value
	 * @since 1.0
	 * @public
	 */
	p.setHeight = function(value){
		if(this.options.smoothHeight){
			if(this.htween){
				if(this.htween.reset)this.htween.reset();
				else	 			 this.htween.stop(true);
			} 
			this.htween = CTween.animate(this.slideController.view.$element , 500 , {height:value} , {ease:'easeOutQuart'});
		}else
			this.slideController.view.$element.height(value);
	};
	
	/**
	 * reserves white space in sides of slider, it used by controls
	 * @param  {String} side  left|right|top|bottom
	 * @param  {Number} space 
	 * @returns {Number} start position in space.
	 * @since 1.5.7
	 * @public
	 */
	p.reserveSpace = function(side, space){
		var sideSpace = side+'Space',
			pos = this[sideSpace];

		this[sideSpace] += space;
		
		this._updateSideMargins();

		return pos;
	};

	/**
	 * returns the reserved space, it used by controls and called when aligned control hides
	 * @param  {String} side  
	 * @param  {Number} space 
	 * @since 1.5.7
	 * @public 
	 */
	/*p.returnSpace = function(side, space){
		var sideSpace = side+'Space';
		this[sideSpace] = Math.max(0 , this[sideSpace] - space);

		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
		this._updateSideMargins();
	};*/

	p._updateSideMargins = function(){
		this.$element.css('margin', this.topSpace + 'px ' + this.rightSpace + 'px ' + this.bottomSpace + 'px ' + this.leftSpace + 'px');
	}

	p._realignControls = function(){
		this.rightSpace = this.leftSpace = this.topSpace = this.bottomSpace = 0;
		this._updateSideMargins();
		this.api.dispatchEvent(new MSSliderEvent(MSSliderEvent.RESERVED_SPACE_CHANGE));
	};

	/*------------------------- Public Methods -----------------------*/

	/**
	 * Adds new control to the slider
	 * @param  {String} control
	 * @param  {Object} options [description]
	 * @since 1.0
	 * @public
	 */
	p.control = function(control , options){
		if(!(control in MSSlideController.SliderControlList)) return;
		if(!this.controls) this.controls = [];
		var ins = new MSSlideController.SliderControlList[control](options);
		ins.slider = this;
		this.controls.push(ins);
		
		return this;
	};
	
	/**
	 * setup slider
	 * @param  {String|jQuery object} id
	 * @param  {Object} options 
	 * @since 1.0
	 * @public
	 */
	p.setup = function(id , options){
		this.id = id;
		if(typeof id === 'string')
			this.$element = $('#' + id);
		else 
			this.$element = id.eq(0);

		//create a copy from slider markup, it will be used in destroy method.
		this.setupMarkup = this.$element.html();

		if(this.$element.length === 0){
			if(console) console.log('Master Slider Error: #'+id+' not found.');
			return;
		}

		this.$element.addClass('master-slider').addClass('before-init');

		// IE prefix class
		if($.browser.msie){
			this.$element.addClass('ms-ie')
						 .addClass('ms-ie' + $.browser.version.slice(0 , $.browser.version.indexOf('.')));
		}
		
		// Android prefix class
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;
		if(isAndroid) {
		  this.$element.addClass('ms-android');
		}

		var that = this;
		$.extend(this.options, options);
		
		this.aspect = this.options.width / this.options.height;
		
		this.$loading = $('<div></div>').
						addClass('ms-loading-container').
						insertBefore(this.$element).
						append($('<div></div>').addClass('ms-loading'));

		this.$loading.parent().css('position' , 'relative');
		
		
		// old methods 
		if(this.options.autofill){
			this.options.fullwidth = true;
			this.options.fullheight = true;
		}
		
		if(this.options.fullheight){
			this.$element.addClass('ms-fullheight');
		}

		//this._setupSliderLayout();	
		this._resize();
		
		// define slide controller and api
		this.slideController = new MSSlideController(this);
		this.api = this.slideController;

		$(document).ready(function(){that._init();});

		return this;
	};
	
	/**
	 * destroy the slider instance 
	 * @param  {Boolean} insertMarkup	 whether add slider markup after destroy.
	 * @since 1.4
	 * @public
	 */
	p.destroy = function(insertMarkup){
		
		if(this.controls){
			for(var i = 0 , l = this.controls.length; i!==l ; i++)
				this.controls[i].destroy();
		}
		
		if(this.slideController) this.slideController._destroy();

		if(this.$loading) this.$loading.remove();

		if(insertMarkup) 
			this.$element.html(this.setupMarkup).css('visibility' , 'hidden');
		else    		 
			this.$element.remove();

		var lo = this.options.layout;
		if( lo === 'fullscreen' ||  lo === 'fullwidth' ){
			$(window).unbind('resize', this._updateLayout);
		}
	};
		
})(jQuery);
//dev\slider\views\ViewEvents.js 
 
window.MSViewEvents = function (type){
	this.type = type;
};

MSViewEvents.SWIPE_START      = 'swipeStart';
MSViewEvents.SWIPE_END        = 'swipeEnd';
MSViewEvents.SWIPE_MOVE		 = 'swipeMove';
MSViewEvents.SWIPE_CANCEL   	 = 'swipeCancel';
MSViewEvents.SCROLL 			 = 'scoll';
MSViewEvents.CHANGE_START     = 'slideChangeStart';
MSViewEvents.CHANGE_END	     = 'slideChangeEnd';

//dev\slider\views\BasicView.js 
 
;(function($){
	
	"use strict";
	
	window.MSBasicView = function(options){
		
		this.options = {
			loop 			: false,
			dir  			: 'h',
			autoHeight 		: false,
			spacing			: 5,
			mouseSwipe		: true,
			swipe			: true,
			speed			: 17,
			minSlideSpeed	: 2,

			viewNum			: 20,
			critMargin		: 1
		};
		
		$.extend(this.options , options);
		
		this.dir		= this.options.dir;
		this.loop   	= this.options.loop;
		this.spacing	= this.options.spacing;
		
		this.__width  = 0;
		this.__height = 0;

		this.__cssProb 		= this.dir === 'h' ? 'left'    : 'top';
		this.__offset 		= this.dir === 'h' ? 'offsetLeft' : 'offsetTop';
		this.__dimension    = this.dir === 'h' ? '__width' : '__height';

		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';

		this.$slideCont	= $('<div></div>').addClass('ms-slide-container');
		this.$element 	= $('<div></div>').addClass('ms-view').addClass('ms-basic-view').append(this.$slideCont);
	
		this.currentSlide 	= null;
		this.index 			= -1;
		this.slidesCount	= 0;

		this.slides			= [];
		this.slideList		= []; // All of slides with added priority sort;
		this.viewSlidesList = []; 
			
		this.css3 			= window._cssanim;
		this.start_buffer = 0;
		this.firstslide_snap = 0;
		
		this.controller 	 = new Controller(0 , 0 , {
			snapping	     : true,
			snapsize		 : 100,
			paging			 : true,
			snappingMinSpeed : this.options.minSlideSpeed,
			friction		 : (100 - this.options.speed * 0.5) / 100,
			endless			 : this.loop
		});
		
		this.controller.renderCallback(this.dir === 'h'? this._horizUpdate : this._vertiUpdate , this);
		this.controller.snappingCallback(this.__snapUpdate , this);
		this.controller.snapCompleteCallback(this.__snapCompelet , this);
		
		averta.EventDispatcher.call(this);
	};
	
	var p = MSBasicView.prototype;
		
	/*-------------- METHODS --------------*/
	
	p.__snapCompelet = function(snap , type){
		// if(this.loop && Math.abs(this.__contPos) > 20000){
		// 	this.__locateSlides();
		// 	this.gotoSlide(this.index , true);
		// }

		this.__locateSlides();
		this.start_buffer = 0;
	
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));	
	};
	
	p.__snapUpdate = function(controller , snap , change){

		if(this.loop){
			var target_index = this.index + change;
			this.updateLoop(target_index);

			if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
			if(target_index <  0)					target_index = this.slidesCount + target_index;
		
			this.index = target_index;
		}else{
			if(snap < 0 ||  snap >= this.slidesCount) return
			this.index = snap;
		}
		
		this._checkCritMargins();

		if($.browser.mozilla){
			this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';
			if(this.currentSlide){
				this.currentSlide.$element[0].style.marginTop 	= '';
			}
		}

		var new_slide = this.slideList[this.index];
		if(new_slide === this.currentSlide)return;
		
		this.currentSlide = new_slide;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));	
	};


	p._checkCritMargins = function(){
		if(this.normalMode) return;

		var hlf 	= Math.floor(this.options.viewNum / 2),
			inView 	= this.viewSlidesList.indexOf(this.slideList[this.index]),
			size 	= (this[this.__dimension] + this.spacing),
			cm 		= this.options.critMargin;

		if(this.loop){
			if(inView <= cm || inView >= this.viewSlidesList.length - cm){
				size *= (inView - hlf);
				this.__locateSlides(false ,  size + this.start_buffer );
				this.start_buffer += size;
			}	

			return;
		}

		if( (inView < cm && this.index >= cm ) || (inView >= this.viewSlidesList.length - cm && this.index < this.slidesCount - cm)){
			this.__locateSlides(false);
		}

	};


	p._vertiUpdate = function(controller , value){
		
		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));
		
		if(this.css3){
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)' + this.__translate_end;
			return;
		}

		this.$slideCont[0].style.top = -value + 'px';
		
	};
	
	p._horizUpdate = function(controller , value){

		this.__contPos = value;
		this.dispatchEvent(new MSViewEvents(MSViewEvents.SCROLL));
		
		if(this.css3) {
			this.$slideCont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}
		
		this.$slideCont[0].style.left = -value + 'px';
		
	};


	p.__updateViewList = function(){

		if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list 
		this.viewSlidesList = [];	
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);	
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++)
			if( this.viewSlidesList.indexOf(temp[i]) === -1)
				temp[i].sleep();

		temp = null;
	};
	
	p.__locateSlides = function(move , start){

		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		// old method
		/*for(i = 0; i < this.slidesCount ; ++i){
			var pos =  i * (this[this.__dimension] + this.spacing);
			
			this.slides[i].position = pos;
			this.slides[i].$element[0].style[this.__cssProb] =  pos + 'px';
		}*/

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
			slide.$element[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
		
	p.__createLoopList = function(){ 
		var return_arr = [];
		var i = 0,
			count = this.slidesCount / 2;
		
		var before_count  = (this.slidesCount % 2 === 0)? count - 1	: Math.floor(count);
		var after_count	  = (this.slidesCount % 2 === 0)? count 	: Math.floor(count);
		
		this.currentSlideLoc = before_count;

		// before
		for(i = 1 ; i <= before_count ; ++i)
			return_arr.unshift(this.slideList[(this.index - i < 0)? this.slidesCount -  i + this.index: this.index - i]);
		
		// current
		return_arr.push(this.slideList[this.index]);
		
		// after
		for(i = 1; i <= after_count; ++i)
			return_arr.push(this.slideList[(this.index + i >= this.slidesCount)? this.index + i - this.slidesCount : this.index + i]);
		
		return return_arr;
		
	};
	
	/*
	 * Calculate shortest distance from index to target.
	 * It will used in loop gesture.
	 * 
	 * Negative values means left direction.
	 */
	
	p.__getSteps = function(index , target){ 
		var right = (target < index)?  this.slidesCount - index + target : target - index;
		var left  = Math.abs(this.slidesCount - right);
		
		return (right < left)? right : -left;		
	};
	
	p.__pushEnd = function(){ 
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		
		this.slides.push(first_slide);
		
		if(!this.normalMode) return;

		var pos = last_slide.$element[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$element[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};
	
	p.__pushStart = function(){ 
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		
		this.slides.unshift(last_slide);

		if(!this.normalMode) return;

		var pos = first_slide.$element[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$element[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};
	
	p.addSlide = function(slide){ 
		slide.view = this;

		//this.$slideCont.append(slide.$element);

		this.slides.push(slide);
		this.slideList.push(slide);
		
		this.slidesCount++;
	};
	
	p.appendSlide = function(slide){
		this.$slideCont.append(slide.$element);
	};

	p.updateLoop = function(index){
		if(this.loop){
			var steps = this.__getSteps(this.index , index);
			
			for(var i = 0 , l = Math.abs(steps) ; i < l ; ++ i){
				if(steps < 0) 	this.__pushStart();
				else			this.__pushEnd();
			}
		}
	};
	
	p.gotoSlide = function(index , fast){
		this.updateLoop(index);

		// is in critical margin ?
		this.index = index;
		
		var target_slide = this.slideList[this.index];

		this._checkCritMargins();

		//this.controller.changeTo( target_slide.$element[0][this.__offset] , !fast , null , null , false);
		this.controller.changeTo( target_slide.position , !fast , null , null , false);
		if(target_slide === this.currentSlide) return;
		
		//if(this.currentSlide) this.currentSlide.unselect();
		
		this.currentSlide = target_slide;
		
		this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));
		if(fast)this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_END));	
	}; 
	
	p.next = function(){ 
		this.gotoSlide((this.index + 1 >= this.slidesCount)? 0 : this.index + 1);
	};
	
	p.previous = function(){ 
		this.gotoSlide((this.index - 1 < 0)? this.slidesCount - 1 : this.index - 1);
	};
	
	/* --------------- Swipe control ------------------*/	
	
	p.setupSwipe = function(){ 
		
		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.dir === 'h'? 'horizontal' : 'vertical';
		var that = this;
		
		if(this.dir === 'h'){
			this.swipeControl.onSwipe = function(status){
				that.horizSwipeMove(status);
			};
		}else{
			this.swipeControl.onSwipe = function(status){
				that.vertSwipeMove(status);
			};
		}
		
	};
	
	p.vertSwipeMove = function(status){
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START));		
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveY ) < this.cont_size / 2)){
			this.controller.drag(status.moveY);
		}else if(phase === 'end' || phase === 'cancel'){
			
			var speed = status.distanceY / status.duration * 50/3;
			
			if(Math.abs(speed) > 0.1){
				this.controller.push(-speed);
				if(speed > this.controller.options.snappingMinSpeed)
					this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END));
			}else{
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL));
			}
			
		}
	};
	
	p.horizSwipeMove = function(status){	
		var phase = status.phase;
		//console.log(this.loop)
		if(phase === 'start'){
			this.controller.stop();
			this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_START));		
		}else if(phase === 'move' && (!this.loop || Math.abs(this.currentSlide.position - this.controller.value + status.moveX ) < this.cont_size / 2)){
			this.controller.drag(status.moveX);
		}else if(phase === 'end' || phase === 'cancel'){
			
			var speed = status.distanceX / status.duration * 50/3;
			
			if(Math.abs(speed) > 0.1){
				this.controller.push(-speed );
				if(speed > this.controller.options.snappingMinSpeed)
					this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_END));
			}else{
				this.controller.cancel();
				this.dispatchEvent(new MSViewEvents(MSViewEvents.SWIPE_CANCEL));
			}
			
		}
	};
		
	/* ------------------------------------------------*/	
	
	p.setSize = function(width , height , hard){
		if(this.lastWidth === width && height === this.lastHeight && !hard) return;

		this.$element.width(width).height(height);
		
		for(var i = 0; i < this.slidesCount ; ++i)
				this.slides[i].setSize(width , height , hard);
				
		this.__width 	= width;
		this.__height 	= height;
			
		if(this.__created){	
			this.__locateSlides();
			
			this.cont_size = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);
			if(!this.loop) 	this.controller._max_value = this.cont_size;
				
			this.controller.options.snapsize = this[this.__dimension] + this.spacing;
			this.controller.changeTo(this.currentSlide.position , false , null , null , false );
			this.controller.cancel();
			
			this.lastWidth = width;
			this.lastHeight = height;
		}
	};
	
	p.create = function(index){
		
		this.__created = true;
		
		this.index = Math.min((index || 0), this.slidesCount - 1);

		if(this.loop)
			this.slides = this.__createLoopList();

		this.normalMode = this.slidesCount <= this.options.viewNum;

		this.__locateSlides();
				
		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].create();
			
		this.controller.options.snapsize = this[this.__dimension] + this.spacing;		
		if(!this.loop)	this.controller._max_value = (this.slidesCount - 1) * (this[this.__dimension] + this.spacing);
		
		this.gotoSlide(this.index , true);
		
		if(this.options.swipe && (window._touch || this.options.mouseSwipe))
			this.setupSwipe();

	};
	
	p.destroy = function(){
		if(!this.__created) return;
		
		for(var i = 0; i < this.slidesCount ; ++i)
			this.slides[i].destroy();
			
		this.slides = null;
		this.slideList = null;
		this.$element.remove();
		
		this.controller.destroy();
		this.controller = null;
	};
	
	averta.EventDispatcher.extend(p);
	
	MSSlideController.registerView('basic' , MSBasicView);
	
})(jQuery);
//dev\slider\views\WaveView.js 
 
;(function($){
	
	"use strict";
	
	window.MSWaveView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-wave-view');
		this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');
	};
	
	MSWaveView.extend(MSBasicView);
	MSWaveView._3dreq = true;
	MSWaveView._fallback = MSBasicView;
	
	var p  = MSWaveView.prototype;
	var _super  = MSBasicView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	/*p.__setSlideTransDuration = function(value){
		for(var i=0; i<this.slidesCount; ++i)
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , value + 'ms');
	};*/
	
	p._horizUpdate = function(controller , value){
		
		_super._horizUpdate.call(this, controller , value);
		
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesHoriz(slide , distance);
		}
		
	};
	
	p._vertiUpdate = function(controller , value){
		
		_super._vertiUpdate.call(this, controller , value);
		
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			//slide_pos = parseInt(slide.$element.css('left'));
			distance = -cont_scroll - slide.position;
			this.__updateSlidesVertic(slide , distance);
		}
		
	};
	
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		//var value2 = Math.min(value , 100);
	//	var sp = Math.min(100 , )
		//slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg)'/* translateX('+(distance < 0 ? 1 : -1) * -value * 5+'px)'*/);
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	/*
	p.swipeMove = function(status){
		
		if(status.phase == 'start'){
			this.__setSlideTransDuration(0);
		}else if(status.phase == 'end'){
			this.__setSlideTransDuration(this.__slideDuration);
		}
		
		_super.swipeMove.call(this , status);
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		
		for(var i = 0; i<this.slidesCount ; ++i){
			this.slides[i].$element.css(window._csspfx + 'transition-property' , window._csspfx 		+ 'transform');
			this.slides[i].$element.css(window._csspfx + 'transition-duration' , this.slideDuration + 'ms');
		}
	};
	*/
	MSSlideController.registerView('wave' , MSWaveView);
})(jQuery);

//dev\slider\views\FadeBasicView.js 
 
/**
 * Master Slider Fade Basic view
 * @author averta
 * @version 1.1
 * @package MS
 */

;(function(){
	
	window.MSFadeBasicView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-basic-view');
	};
	
	MSFadeBasicView.extend(MSWaveView);
	
	var p = MSFadeBasicView.prototype;
	var _super = MSFadeBasicView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 0.6 / this.__width);
		value = 1 - Math.min(value , 0.6);
		slide.$element.css('opacity' , value);
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	MSSlideController.registerView('fadeBasic' , MSFadeBasicView);
	MSWaveView._fallback = MSFadeBasicView;
})();//dev\slider\views\FadeWaveView.js 
 
/**
 * Master Slider Fade Wave View
 * @author averta
 * @version 1.0
 * @extends {MSWaveView}
 */
;(function(){
	
	window.MSFadeWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-wave-view');
	};
	
	MSFadeWaveView.extend(MSWaveView);
	MSFadeWaveView._3dreq = true;
	MSFadeWaveView._fallback = MSFadeBasicView;
	
	var p = MSFadeWaveView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		 value = Math.min(value , 100);
		slide.$element.css('opacity' , 1-value/300);
		slide.$element.css(window._csspfx + 'transform' , 'scale('+ (1 - value/800) +') rotateY(0.01deg) ');
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		this.__updateSlidesHoriz(slide , distance);
	};
	
	MSSlideController.registerView('fadeWave' , MSFadeWaveView);
	
})();//dev\slider\views\FlowView.js 
 
;(function($){
	
	"use strict";
	
	window.MSFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-flow-view');
		//this.$slideCont.css(window._csspfx + 'transform-style' , 'preserve-3d');
	};
	
	MSFlowView.extend(MSWaveView);
	MSFlowView._3dreq = true;
	MSFlowView._fallback = MSFadeBasicView;
	
	var p  = MSFlowView.prototype;
	var _super  = MSWaveView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateY(' + rvalue + 'deg) ';
	};
	
	p.__updateSlidesVertic  = function(slide , distance){
		var value  =  Math.abs(distance * 100 / this.__width);
		var rvalue =  Math.min(value * 0.3 , 30) * (distance < 0 ? -1 : 1);
		var zvalue = value * 1.2;
		slide.$element[0].style[window._jcsspfx + 'Transform'] = 'translateZ('+ -zvalue*5 +'px) rotateX(' + -rvalue + 'deg) ';
	};
	
	
	MSSlideController.registerView('flow' , MSFlowView);
})(jQuery);

//dev\slider\views\FadeFlowView.js 
 
/**
 * Master Slider Fade Flow View
 * @author averta
 * @extends {MSWaveView}
 * @version 1.0
 */
;(function(){
	
	window.MSFadeFlowView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-fade-flow-view');
	};
	
	MSFadeFlowView.extend(MSWaveView);
	MSFadeFlowView._3dreq = true;

	var p = MSFadeFlowView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__calculate = function(distance){
		var value = Math.min(Math.abs(distance * 100 / this.__width) , 100);
		var rvalue =  Math.min(value * 0.5 , 50) * (distance < 0 ? -1 : 1);
		return {value: value, rvalue: rvalue};
	};

	p.__updateSlidesHoriz = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		slide.$element[0].style[window._csspfx + 'transform'] = 'translateZ('+ -clc.value +'px) rotateY(' + clc.rvalue + 'deg) ';
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var clc = this.__calculate(distance);
		slide.$element.css('opacity' , 1-clc.value/300);
		slide.$element[0].style[window._csspfx + 'transform'] = 'translateZ('+ -clc.value +'px) rotateX(' + -clc.rvalue + 'deg) ';
	};
	
	MSSlideController.registerView('fadeFlow' , MSFadeFlowView);
	
})();//dev\slider\views\MaskView.js 
 
;(function($){
	
	"use strict";
	
	window.MSMaskView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-mask-view');
		
	};
	
	MSMaskView.extend(MSBasicView);
	
	var p  = MSMaskView.prototype;
	var _super  = MSBasicView.prototype;
		
	/*-------------- METHODS --------------*/
	
	p.addSlide = function(slide){ // OK
		slide.view = this;
		
		slide.$frame = $('<div></div>').addClass('ms-mask-frame').append(slide.$element);
		slide.$element[0].style.position = 'relative';
		//this.$slideCont.append(slide.$frame);
		slide.autoAppend = false;

		this.slides.push(slide);
		this.slideList.push(slide);
		
		this.slidesCount++;
	};
	
	p.setSize = function(width , height){
		var slider = this.slides[0].slider;
		
		for(var i = 0; i < this.slidesCount ; ++i){
			this.slides[i].$frame[0].style.width  = width  + 'px';
			if(!slider.options.autoHeight)
				this.slides[i].$frame[0].style.height = height + 'px';
		}
		
		_super.setSize.call(this , width , height);
	};
	
	// p.__snapUpdate = function(controller , snap , change){
		
	// 	if(this.loop){
	// 		var target_index = this.index + change;
	// 		this.updateLoop(target_index);

	// 		if(target_index >= this.slidesCount)	target_index = target_index - this.slidesCount;
	// 		if(target_index <  0)					target_index = this.slidesCount + target_index;
		
	// 		this.index = target_index;
	// 	}else{
	// 		if(snap < 0 ||  snap >= this.slidesCount) return
	// 		this.index = snap;
	// 	}
		
		
	// 	this._checkCritMargins();

	// 	if($.browser.mozilla){
			
	// 		this.slideList[this.index].$frame[0].style.marginTop 	= '0.1px';
	// 		this.slideList[this.index].$element[0].style.marginTop 	= '0.1px';
			
	// 		if(this.currentSlide){
	// 			this.currentSlide.$frame[0].style.marginTop 	= '';
	// 			this.currentSlide.$element[0].style.marginTop 	= '';
	// 		}
	// 	}
		
	// 		var new_slide = this.slideList[this.index];
	// 	if(new_slide === this.currentSlide)return;
		
	// 	this.currentSlide = new_slide;
	// 	this.dispatchEvent(new MSViewEvents(MSViewEvents.CHANGE_START));		
	// };
	
	p._horizUpdate = function(controller , value){
		
		_super._horizUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateX('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.left = (value - this.slideList[i].position) + 'px';	
		}
			
	};
	
	p._vertiUpdate = function(controller , value){
		
		_super._vertiUpdate.call(this , controller , value);
		
		var i = 0;
		
		if(this.css3) {
			for(i = 0 ; i < this.slidesCount ; ++i){
				this.slideList[i].$element[0].style[window._jcsspfx + 'Transform'] = 'translateY('+(value - this.slideList[i].position)+'px)'+ this.__translate_end;
			}
			return;
		}
		
		for(i = 0 ; i < this.slidesCount ; ++i){
			this.slideList[i].$element[0].style.top = (value - this.slideList[i].position) + 'px';	
		}
			
	};
	
	p.__pushEnd = function(){ // OK
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		
		this.slides.push(first_slide);
		if(!this.normalMode) return;

		var pos = last_slide.$frame[0][this.__offset] + this.spacing + this[this.__dimension];
		first_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		first_slide.position = pos;
	};
	
	p.__pushStart = function(){ // OK
		
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		
		this.slides.unshift(last_slide);
		
		if(!this.normalMode) return;
		
		var pos = first_slide.$frame[0][this.__offset] - this.spacing - this[this.__dimension];
		last_slide.$frame[0].style[this.__cssProb] = pos + 'px';
		last_slide.position = pos;
	};
	
	p.__updateViewList = function(){

			if(this.normalMode) {
			this.viewSlidesList = this.slides;
			return;
		}

		var temp = this.viewSlidesList.slice();

		// update view list 
		this.viewSlidesList = [];	
		var i = 0 , hlf = Math.floor(this.options.viewNum / 2) , l;

		if(this.loop){
			for(; i !== this.options.viewNum ; i++)
				this.viewSlidesList.push(this.slides[this.currentSlideLoc - hlf + i]);
		}else{
			// before
			for(i = 0 ; i !== hlf && this.index - i !== -1 ; i++)
				this.viewSlidesList.unshift(this.slideList[this.index - i]);	
			// after
			for(i = 1; i !== hlf && this.index + i !== this.slidesCount; i++)
				this.viewSlidesList.push(this.slideList[this.index + i]);
		}

		for (i = 0 , l = temp.length ; i !== l ; i++){
			if( this.viewSlidesList.indexOf(temp[i]) === -1){
				temp[i].sleep();
				temp[i].$frame.detach();
			}
		}

		temp = null;
	};


	p.__locateSlides = function(move , start){ // OK
		this.__updateViewList();

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	var pos =  i * (this[this.__dimension] + this.spacing);
			
		// 	this.slides[i].position = pos;
		// 	this.slides[i].$frame[0].style[this.__cssProb] =  pos + 'px';
		// }

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * (this[this.__dimension] + this.spacing );
			slide = this.viewSlidesList[i];

			this.$slideCont.append(slide.$frame);
			slide.wakeup(false);
			slide.position = pos;
			slide.$frame[0].style[this.__cssProb] =  pos + 'px';
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
	
	MSSlideController.registerView('mask' , MSMaskView);
})(jQuery);
//dev\slider\views\FadeView.js 
 
;(function($){
	
	"use strict";
	
	window.MSFadeView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-fade-view');
		this.controller.renderCallback(this.__update , this);
	};
	
	MSFadeView.extend(MSBasicView);
	
	var p  = MSFadeView.prototype;
	var _super  = MSBasicView.prototype;
	 
	/*-------------- METHODS --------------*/
	
	p.__update = function(controller , value){
		var cont_scroll = -value;
		var slide_pos , slide , distance;
		
		for(var i = 0; i < this.slidesCount; ++i){
			slide = this.slideList[i];
			distance = -cont_scroll - slide.position;
			this.__updateSlides(slide , distance);
		}
	};
	
	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]);
		if(1 - value <= 0){
			slide.$element.fadeTo(0 , 0).css('visibility' , 'hidden');	
		}else{
			slide.$element.fadeTo(0 , 1 - value).css('visibility' , '');
		}
	};
	
	p.__locateSlides = function(move , start){

		this.__updateViewList();

		// Old method
		// for(var i = 0; i < this.slidesCount ; ++i){
		// 	this.slides[i].position = i * this[this.__dimension];
		// }

		start = !this.loop ? this.slides.indexOf(this.viewSlidesList[0]) * (this[this.__dimension] + this.spacing ) : start || 0; 

		var l = this.viewSlidesList.length , slide;
		
		for(var i = 0; i !== l ; i++){
			var pos =  start + i * this[this.__dimension];
			slide = this.viewSlidesList[i];
			slide.wakeup();
			slide.position = pos;
		}

		if(move !== false)this.controller.changeTo( this.slideList[this.index].position , false , null , null , false);

	};
	
	p.__pushEnd = function(){
		var first_slide = this.slides.shift();
		var last_slide = this.slides[this.slidesCount - 2];
		this.slides.push(first_slide);
		first_slide.position = last_slide.position + this[this.__dimension];
	};
	
	p.__pushStart = function(){
		var last_slide =  this.slides.pop();
		var first_slide = this.slides[0];
		this.slides.unshift(last_slide);		
		last_slide.position = first_slide.position - this[this.__dimension];
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		this.spacing = 0;
		this.controller.options.minValidDist = 10;
	};
	
	MSSlideController.registerView('fade' , MSFadeView);
})(jQuery);//dev\slider\views\ScaleView.js 
 
;(function($){
	
	"use strict";
	
	window.MSScaleView = function(options){
		MSBasicView.call(this , options);
		this.$element.removeClass('ms-basic-view').addClass('ms-scale-view');
		this.controller.renderCallback(this.__update , this);
	};
	
	MSScaleView.extend(MSFadeView);
	
	var p  = MSScaleView.prototype;
	var _super  = MSFadeView.prototype;
	 
	/*-------------- METHODS --------------*/

	p.__updateSlides = function(slide , distance){
		var value =  Math.abs(distance / this[this.__dimension]);
		if(1 - value <= 0){
			slide.$element.fadeTo(0 , 0).css('visibility' , 'hidden');	
		}else{
			slide.$element.fadeTo(0 , 1 - value).css('visibility' , '').css(window._jcsspfx + 'Transform' , 'perspective(2000px) translateZ('+(value* (distance < 0 ? -0.5 : 0.5)) * 300+'px)');
		}
	};
	
	p.create = function(index){
		_super.create.call(this , index);
		this.controller.options.minValidDist = 0.03;
	};
	
	MSSlideController.registerView('scale' , MSScaleView);
})(jQuery);//dev\slider\views\FocusView.js 
 
/**
 * Master Slider Focus View
 * @version 1.1
 * @author averta
 * @package MS
 * @extends {MSFadeBasicView}
 */

;(function(){

	'use strict';
	
	var perspective = 2000;

	window.MSFocusView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-focus-view');
		this.options.centerSpace = this.options.centerSpace  || 1;
	};
	
	MSFocusView.extend(MSWaveView);
	MSFocusView._3dreq = true;
	MSFocusView._fallback = MSFadeBasicView;
	
	var p = MSFocusView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__calcview = function(z , w){
		var a =  w / 2 * z / (z + perspective); 
		return a * (z + perspective) / perspective;
	};
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ value  +'px) rotateY(0.01deg) translateX('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		value = -Math.min(value , 100)* 15;
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ value  +'px) rotateY(0.01deg) translateY('+ (distance < 0 ? 1 : -1) * (-this.__calcview(value, this.__width) * this.options.centerSpace )+'px)');
	};
	
	MSSlideController.registerView('focus' , MSFocusView);
	
})();//dev\slider\views\PartialWaveView.js 
 
/**
 * Master Slider Partial Wave View
 * @version 1.0
 * @author averta
 * @extends {MSWaveView}
 */

;(function(){
	
	window.MSPartialWaveView = function(options){
		MSWaveView.call(this , options);
		this.$element.removeClass('ms-wave-view').addClass('ms-partial-wave-view');
	};
	
	MSPartialWaveView.extend(MSWaveView);
	MSPartialWaveView._3dreq = true;
	MSPartialWaveView._fallback = MSFadeBasicView;
	
	var p = MSPartialWaveView.prototype;
	var _super = MSWaveView.prototype;
	
	/*-------------- METHODS --------------*/
	
	p.__updateSlidesHoriz = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateX('+distance*0.75+'px)');
	};
	
	p.__updateSlidesVertic = function(slide , distance){
		var value =  Math.abs(distance * 100 / this.__width);
		slide.$bg_img.css('opacity' , (100 -  Math.abs(distance * 120 / this.__width / 3)) / 100);
		slide.$element.css(window._csspfx + 'transform' , 'translateZ('+ -value * 3 +'px) rotateY(0.01deg) translateY('+distance*0.75+'px)');
	};
	
	MSSlideController.registerView('partialWave' , MSPartialWaveView);
	
})();//dev\slider\uicontrols\BaseControl.js 
 
;(function($){
	
	"use strict";
	
	var BaseControl = function(){
		this.options = {
			prefix:'ms-',
			autohide:true,
			overVideo:true	
		};
	};
	
	var p = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.slideAction = function(slide){

	};
	
	p.setup = function(){		
		this.cont = this.options.insertTo ? $(this.options.insertTo) : this.slider.$controlsCont;
		if(!this.options.overVideo) this._hideOnvideoStarts();

		if(this.options.hideUnder){
			//this.slider.api.addEventListener(MSSliderEvent.RESIZE, this.onSliderResize, this);
			$(window).bind('resize', {that:this}, this.onResize);
			this.onResize();
		}
	};

	/**
	 * hide control if width of slider changes to lower that specified value [hideUnder]
	 * @since 1.5.7
	 * @protected
	 */
	p.onResize = function(event){
		var that = (event && event.data.that) || this;
		var w = window.innerWidth;
		if( w <= that.options.hideUnder && !that.detached ){
			that.$element.css('display', 'none');
			that.detached = true;
			if( that.onDetach ){
				that.onDetach();
			}
		}else if( w >= that.options.hideUnder && that.detached ){
			that.detached = false;
			that.$element.css('display', '');
			that.visible();
			if( that.onAppend ){
				that.onAppend();
			}
		}
	};
	
	p.create = function(){
		var that = this;
		if(this.options.autohide && !window._touch){
			
			this.hide(true);
			
			this.slider.$controlsCont.mouseenter(function(){
				if(!that._disableAH && !that.mdown)that.visible();
				that.mleave = false;
			}).mouseleave(function(){
				that.mleave = true;
				if(!that.mdown)that.hide();
			}).mousedown(function(){
				that.mdown = true;
			});
			
			$(document).mouseup(function(){
				if(that.mdown && that.mleave)that.hide();
				that.mdown = false;
			});
		}

	};
	
	p._hideOnvideoStarts = function(){
		var that = this;
		slider.api.addEventListener(MSSliderEvent.VIDEO_PLAY , function(){
   			 that._disableAH = true;
   			 that.hide();
		});
		 
		slider.api.addEventListener(MSSliderEvent.VIDEO_CLOSE , function(){
		     that._disableAH = false;
   			 that.visible();
		});
	};
	
	p.hide = function(fast){
		if(fast) this.$element.css('opacity' , 0);
		else	 CTween.fadeOut(this.$element , 400 , false);
		
		this.$element.addClass('ms-ctrl-hide');
	};
	
	p.visible = function(){
		if(this.detached) return;
		CTween.fadeIn(this.$element , 400 );
		this.$element.removeClass('ms-ctrl-hide');
	};
	

	
	p.destroy = function(){
		if(this.options.hideUnder){
			//this.slider.api.removeEventListener(MSSliderEvent.RESIZE, this.onResize, this);
			$(window).unbind('resize', this.onResize);
		}
	};
	
	window.BaseControl = BaseControl;
	
})(jQuery);
//dev\slider\uicontrols\Arrows.js 
 
;(function($){
	
	"use strict";
	
	var MSArrows = function(options){
		BaseControl.call(this);
		$.extend(this.options , options);
	};
	
	MSArrows.extend(BaseControl);
	
	var p = MSArrows.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		_super.setup.call(this);
		
		this.$next = $('<div></div>')
					.addClass(this.options.prefix + 'nav-next')
					.appendTo(this.cont)
					.bind('click' , function(){
						if(!that.slider.options.loop && that.slider.api.index() === that.slider.api.count() - 1)
							that.slider.view.controller.bounce(10);
						else
							that.slider.api.next();
					});
				
		
		this.$prev = $('<div></div>')
					.addClass(this.options.prefix + 'nav-prev')
					.appendTo(this.cont)
					.bind('click' , function(){
						if(!that.slider.options.loop && that.slider.api.index() === 0)
							that.slider.view.controller.bounce(-10);
						else
							that.slider.api.previous();
					});
		
	};
	
	p.hide = function(fast){
		if(fast){
			this.$prev.css('opacity' , 0);
			this.$next.css('opacity' , 0);
			return;
		}
		//RK added to disable fade in on mouseover control
	  if(this.options.dontFade){
			this.$prev.css('opacity' , 0);
			this.$next.css('opacity' , 0);
		} else {
			CTween.fadeOut(this.$prev , 400 , false);
			CTween.fadeOut(this.$next , 400 , false);
		}

		
		this.$prev.addClass('ms-ctrl-hide');
		this.$next.addClass('ms-ctrl-hide');
	};
	
	p.visible = function(){
		//RK added to disable fade in on mouseover control
		if(this.options.dontFade){
			this.$prev.css('opacity' , 1);
			this.$next.css('opacity' , 1);
		} else {
			CTween.fadeIn(this.$prev , 400 );
			CTween.fadeIn(this.$next , 400 );
		}

		this.$prev.removeClass('ms-ctrl-hide');
		this.$next.removeClass('ms-ctrl-hide');
	};
	
	p.destroy = function(){
		this.$next.remove();
		this.$prev.remove();
	};
	
	window.MSArrows = MSArrows;
	MSSlideController.registerControl('arrows' , MSArrows);
})(jQuery);
//dev\slider\uicontrols\Thumblist.js 
 
;(function($){
	
	"use strict";
	
	var MSThumblist = function(options){
		BaseControl.call(this);
		
		// default options
		this.options.dir 	= 'h';
		this.options.wheel	= options.dir === 'v';
		this.options.arrows = true;
		this.options.speed  = 17;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.space = 10;
		this.options.width = 100;
		this.options.height = 100;
		this.options.type = 'thumbs'; // tabs
		
		
		$.extend(this.options , options);
		
		this.thumbs = [];
		this.index_count = 0;
		
		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__alignsize 		= this.options.dir === 'h' ? 'height' : 'width';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';		
		
		this.click_enable = true;

	};
	
	MSThumblist.extend(BaseControl);
	
	var p = MSThumblist.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'thumb-list');

		if(this.options.type === 'tabs'){
			this.$element.addClass(this.options.prefix + 'tabs');
		}
		
		this.$element.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);	


		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}
						
		this.$thumbscont = $('<div></div>')
						.addClass('ms-thumbs-cont')
						.appendTo(this.$element);
		
		if(this.options.arrows){
			var that = this;
			this.$fwd = $('<div></div>').addClass('ms-thumblist-fwd').appendTo(this.$element).click(function(){that.controller.push(-15);});
			this.$bwd = $('<div></div>').addClass('ms-thumblist-bwd').appendTo(this.$element).click(function(){that.controller.push(15);});
		}

		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.width);
			}else{
				this.$element.height(this.options.height);
			}
		}
	
	};
	
	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options[this.__alignsize] + this.options.margin * 2);
		this.$element.css(align, -pos - this.options[this.__alignsize] - this.options.margin);
	};

	p.slideAction = function(slide){
		var thumb_ele = $(slide.$element.find('.ms-thumb'));
		var that = this;
		var thumb_frame = $('<div></div>')
					.addClass('ms-thumb-frame')
					.append(thumb_ele)
					.append($('<div class="ms-thumb-ol"></div>'))
					.bind('click' , function(){that.changeSlide(thumb_frame);});

		if( this.options.align ){
			thumb_frame.width(this.options.width)
					.height(this.options.height)
					.css('margin-'+(this.options.dir === 'v' ? 'bottom' : 'right'), this.options.space); 
		}			
					
		thumb_frame[0].index =  this.index_count ++;
		
		this.$thumbscont.append(thumb_frame);
		if($.browser.msie)
				thumb_ele.on('dragstart', function(event) { event.preventDefault(); }); // disable native dragging
				
		this.thumbs.push(thumb_frame);
	};
	
	p.create = function(){
		_super.create.call(this);
		
		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.controller 	 = new Controller(0 , 0 , {
			//snapping	     : true,
			snappingMinSpeed : 2,
			friction		 : (100 - this.options.speed * 0.5) / 100
		});
				
		this.controller.renderCallback(this.options.dir === 'h'? this._hMove : this._vMove , this);
		//this.controller.snappingCallback(this.__snapUpdate , this);
		//this.controller.snapCompleteCallback(this.__snapCompelet , this);
		
		var that = this;
		this.resize_listener = function(){that.__resize();};
		$(window).bind('resize', this.resize_listener);
		
		this.thumbSize = this.thumbs[0][this.__jdimen](true);
		
		this.setupSwipe();
		this.__resize();
		
		var that = this;
		if(this.options.wheel){
			
			this.wheellistener = function(event){
				var e = window.event || event.orginalEvent || event;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				that.controller.push(-delta*10);
				return false;
			};
			
			if($.browser.mozilla) this.$element[0].addEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.bind('mousewheel', this.wheellistener);
		}
		
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		this.select(this.thumbs[this.cindex]);
		
		
	};
	
	p._hMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateX('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.left = -value + 'px';
	};
	
	p._vMove = function(controller , value){
		this.__contPos = value;
		if(window._cssanim) {
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = 'translateY('+-value+'px)'+ this.__translate_end;
			return;
		}
		this.$thumbscont[0].style.top = -value + 'px';
	};
	
	p.setupSwipe = function(){ 
		this.swipeControl = new averta.TouchSwipe(this.$element);
		this.swipeControl.swipeType = this.options.dir === 'h'? 'horizontal' : 'vertical';
		
		var that = this;
		if(this.options.dir === 'h')
			this.swipeControl.onSwipe = function(status){that.horizSwipeMove(status);};
		else
			this.swipeControl.onSwipe = function(status){that.vertSwipeMove(status);};
	};
	
	p.vertSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start')
			this.controller.stop();	
		else if(phase === 'move')
			this.controller.drag(status.moveY);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceY / status.duration * 50/3);
			if(speed > 0.1){
				this.controller.push(-status.distanceY / status.duration * 50/3 );
			}else{
				this.click_enable = true;
				this.controller.cancel();
			} 
		}
	};
	
	p.horizSwipeMove = function(status){
		if(this.dTouch) return;
		var phase = status.phase;
		if(phase === 'start'){
			this.controller.stop();	
			this.click_enable = false;
		}else if(phase === 'move')
			this.controller.drag(status.moveX);
		else if(phase === 'end' || phase === 'cancel'){
			var speed = Math.abs(status.distanceX / status.duration * 50/3);
			if(speed > 0.1){
				 this.controller.push(-status.distanceX / status.duration * 50/3 );
			}else {
				this.click_enable = true;
				this.controller.cancel();
			}
		}
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;
		
		if(this.cindex != null)this.unselect(this.thumbs[this.cindex]);
		this.cindex = nindex;
		this.select(this.thumbs[this.cindex]);
	
		if(!this.dTouch)this.updateThumbscroll();
	};

	p.updateThumbscroll = function(){
		var thumb_size;
		
		var pos = this.thumbSize * this.cindex;
		
		if(this.controller.value == NaN) this.controller.value = 0;
		
		if(pos -  this.controller.value < 0){
			this.controller.gotoSnap(this.cindex , true);
			return;
		}
				
		if(pos + this.thumbSize - this.controller.value > this.$element[this.__dimen]()){
			var first_snap = this.cindex - Math.floor(this.$element[this.__dimen]() / this.thumbSize) + 1;
			this.controller.gotoSnap(first_snap , true);
			return;
		}
	};

	p.changeSlide = function(thumb){
		if(!this.click_enable || this.cindex === thumb[0].index) return;
		this.slider.api.gotoSlide(thumb[0].index);
	};
	
	p.unselect = function(ele){
		ele.removeClass('ms-thumb-frame-selected');
	};
	
	p.select = function(ele){
		ele.addClass('ms-thumb-frame-selected');
	};
	
	p.__resize = function(){
		var size = this.$element[this.__dimen]();

		if(this.ls === size) return;
		
		this.ls = size;
		
		this.thumbSize = this.thumbs[0][this.__jdimen](true);
		var len = this.slider.api.count() * this.thumbSize;
		this.$thumbscont[0].style[this.__dimen] = len + 'px';
		
		if(len <= size){
			this.dTouch = true;
			this.controller.stop();
			this.$thumbscont[0].style[this.__pos] = (size - len)*.5 + 'px';
			this.$thumbscont[0].style[window._jcsspfx + 'Transform'] = '';			
		}else{
			this.dTouch = false;
			this.click_enable = true;
			this.$thumbscont[0].style[this.__pos] = '';
			this.controller._max_value = len - size;
			this.controller.options.snapsize = this.thumbSize;
			this.updateThumbscroll();
		}
		
	};
	
	p.destroy = function(){
		if(this.options.wheel){
			if($.browser.mozilla) this.$element[0].removeEventListener('DOMMouseScroll' , this.wheellistener);
			else this.$element.unbind('mousewheel', this.wheellistener);
			this.wheellistener = null;
		}		
		
		$(window).unbind('resize', this.resize_listener);

		this.$element.remove();

		this.slider.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);

		_super.destroy();
	};
	
	window.MSThumblist = MSThumblist;
	MSSlideController.registerControl('thumblist' , MSThumblist);
	
})(jQuery);
//dev\slider\uicontrols\Bullets.js 
 
;(function($){
	
	"use strict";
	
	var MSBulltes = function(options){
		BaseControl.call(this);
		
		this.options.dir 	= 'h';
		this.options.inset  = true;
		this.options.margin = 10;
		

		$.extend(this.options , options);
		
		this.bullets = [];
		
	};
	
	MSBulltes.extend(BaseControl);
	
	var p = MSBulltes.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'bullets')
						.addClass('ms-dir-' + this.options.dir)
						.appendTo(this.cont);
		
		this.$bullet_cont = $('<div></div>')
						.addClass('ms-bullets-count')
						.appendTo(this.$element);
		

		
		if( !this.options.insetTo && this.options.align ){
			// reset old styles
			this.$element.css({
				top:'auto',
				bottom:'auto'
			})

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}
		}

	};
	
	p.create = function(){
		_super.create.call(this);
		var that = this;
									
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		for(var i = 0; i < this.slider.api.count(); ++i){
			var bullet = $('<div></div>').addClass('ms-bullet');
			bullet[0].index = i;
			bullet.on('click', function(){that.changeSlide(this.index);});
			this.$bullet_cont.append(bullet);
			this.bullets.push(bullet);
		}
		
		if(this.options.dir === 'h') 
			this.$element.width(bullet.outerWidth(true) * this.slider.api.count());
		
		this.select(this.bullets[this.cindex]);
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		if(this.cindex === nindex) return;
		
		if(this.cindex != null)this.unselect(this.bullets[this.cindex]);
		this.cindex = nindex;
		this.select(this.bullets[this.cindex]);
	};
	
	p.changeSlide = function(index){
		if(this.cindex === index) return;
		this.slider.api.gotoSlide(index);
	};
	
	p.unselect = function(ele){
		ele.removeClass('ms-bullet-selected');
	};
	
	p.select = function(ele){
		ele.addClass('ms-bullet-selected');
	};
	
	p.destroy = function(){
		this.$element.remove();
	};
	
	window.MSBulltes = MSBulltes;
	
	MSSlideController.registerControl('bullets' , MSBulltes);
	
})(jQuery);
//dev\slider\uicontrols\Scrollbar.js 
 
;(function($){
	
	"use strict";
	
	var MSScrollbar = function(options){
		BaseControl.call(this);
		
		this.options.dir 		= 'h';
		this.options.autohide	= true;
		this.options.width 		= 4;
		this.options.color 		= '#3D3D3D';
		this.options.margin		= 10;
		
		$.extend(this.options , options);
		this.__dimen    		= this.options.dir === 'h' ? 'width' : 'height';
		this.__jdimen    		= this.options.dir === 'h' ? 'outerWidth' : 'outerHeight';
		this.__pos				= this.options.dir === 'h' ? 'left'	 : 'top';
		this.__translate_end	= window._css3d ? ' translateZ(0px)' : '';
		this.__translate_start	= this.options.dir === 'h' ? ' translateX(' : 'translateY(';
	};
	
	MSScrollbar.extend(BaseControl);
	
	var p = MSScrollbar.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'sbar')
						.addClass('ms-dir-' + this.options.dir);
						
		_super.setup.call(this);
	
		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass(this.options.prefix + 'bar')
					.appendTo(this.$element);
					
		if(this.slider.options.loop){
			console.log('WARNING, MSScrollbar cannot work with looped slider.');
			this.disable = true;
			this.$element.remove();
		}
		
		/**
		 * align control
		 * @since 1.5.7
		 */
		// change width 
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);

		if( !this.options.insetTo && this.options.align ){
			
			// reset old versions styles
			if( this.options.dir === 'v' ){
				this.$element.css({
					right:'auto',
					left:'auto',
				});
			} else {
				this.$element.css({
					top:'auto',
					bottom:'auto',
				});
			}

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};
	
	p.create = function(){
		
		if(this.disable) return;
		
		//_super.create.call(this);
		var that = this;
		
		this.scroller = this.slider.api.scroller;
		
		this.slider.api.view.addEventListener(MSViewEvents.SCROLL , this._update , this);		
		this.slider.api.addEventListener(MSSliderEvent.RESIZE , this._resize , this);
		
		this._resize();
		
		if(this.options.autohide){
			this.$bar.css('opacity' , '0');
		}
	};
	
	p._resize = function(){
		this.vdimen = this.$element[this.__dimen]();
		this.bar_dimen = this.slider.api.view[ '__' + this.__dimen] * this.vdimen / this.scroller._max_value; 
		this.$bar[this.__dimen](this.bar_dimen );
	};
	
	p._update = function(){
		var value = this.scroller.value * (this.vdimen - this.bar_dimen) / this.scroller._max_value;
		if(this.lvalue === value) return;
		this.lvalue = value;
		
		if(this.options.autohide){
			clearTimeout(this.hto);
			this.$bar.css('opacity' , '1');
			
			var that = this;
			this.hto = setTimeout(function(){
				//if(!that.slider.api.view.swipeControl.touchStarted)
				that.$bar.css('opacity' , '0');
			} , 150);
		}
		
		if(value < 0){
			this.$bar[0].style[this.__dimen] = this.bar_dimen + value + 'px';
			return;
		}
		
		if(value > this.vdimen - this.bar_dimen)
			this.$bar[0].style[this.__dimen] = this.vdimen - value + 'px';

		if(window._cssanim) {
			this.$bar[0].style[window._jcsspfx + 'Transform'] = this.__translate_start +value+'px)'+ this.__translate_end;
			return;
		}
		
		this.$bar[0].style[this.__pos] = value + 'px';
		
	};
	
	p.destroy = function(){
		this.slider.api.view.removeEventListener(MSViewEvents.SCROLL , this._update , this);		
		this.slider.api.removeEventListener(MSSliderEvent.RESIZE , this._resize , this);
		this.slider.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);

		this.$element.remove();
		_super.destroy();
	};
	
	window.MSScrollbar = MSScrollbar;
	MSSlideController.registerControl('scrollbar' , MSScrollbar);
})(jQuery);
//dev\slider\uicontrols\Timebar.js 
 
;(function($){
	
	"use strict";
	
	var MSTimerbar = function(options){
		BaseControl.call(this);

		this.options.autohide = false;
		this.options.width 		= 4;
		this.options.color 		= '#FFFFFF';
		this.options.inset 		= true;

		$.extend(this.options , options);
	};
	
	MSTimerbar.extend(BaseControl);
	
	var p = MSTimerbar.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		_super.setup.call(this);
		
		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'timerbar');
		
		_super.setup.call(this);
	
		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}

		this.$bar = $('<div></div>')
					.addClass('ms-time-bar')
					.appendTo(this.$element);

		// change width 
		if( this.options.dir === 'v' ){
			this.$bar.width(this.options.width);
		} else {
			this.$bar.height(this.options.width);
		}

		// change color
		this.$bar.css('background-color', this.options.color);
		
		if( !this.options.insetTo && this.options.align ){
			
			this.$element.css({
				top:'auto',
				bottom:'auto',
			});

			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}
		}
		
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}

		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.margin * 2 + this.options.width);
		this.$element.css(align, -pos - this.options.margin - this.options.width);
	};
	
	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WATING , this._update , this);
		this._update();
	};
	
	p._update = function(){
		this.$bar[0].style.width = this.slider.api._delayProgress  + '%';
	};
	
	p.destroy = function(){
		this.slider.api.removeEventListener(MSSliderEvent.WATING , this._update , this);
		this.$element.remove();
	};
	
	window.MSTimerbar = MSTimerbar;
	MSSlideController.registerControl('timebar' , MSTimerbar);
})(jQuery);
//dev\slider\uicontrols\CircleTimer.js 
 
;(function($){
	
	"use strict";
	
	var MSCircleTimer = function(options){
		BaseControl.call(this);
		
		this.options.color 	= '#A2A2A2';
		this.options.stroke = 10;
		this.options.radius	= 4;
		
		this.options.autohide = false;
		$.extend(this.options , options);
	};
	
	MSCircleTimer.extend(BaseControl);
	
	var p = MSCircleTimer.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		_super.setup.call(this);
		
		this.$element = $('<div></div>')
					.addClass(this.options.prefix + 'ctimer')
					.appendTo(this.cont);
					
		this.$canvas = 	$('<canvas></canvas>')
					.addClass('ms-ctimer-canvas')
					.appendTo(this.$element);		
		
		this.$bar = $('<div></div>')
					.addClass('ms-ctimer-bullet')
					.appendTo(this.$element);
		
		if(!this.$canvas[0].getContext){
			this.destroy();
			this.disable = true;
			return;
		}
		
		
		this.ctx		= this.$canvas[0].getContext('2d');
		this.prog		= 0;
		
		this.__w = (this.options.radius + this.options.stroke/2) * 2;
		this.$canvas[0].width  = this.__w;
		this.$canvas[0].height = this.__w;
	};
	
	p.create = function(){
		if(this.disable) return;
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.WATING , this._update , this);
		
		var that = this;
		this.$element.click(function(){
			if(that.slider.api.paused)
				that.slider.api.resume();
			else
				that.slider.api.pause();
		});
		
		this._update();
	};
	
	p._update = function(){
		var that = this;
		$(this).stop(true).animate({prog:this.slider.api._delayProgress * 0.01} ,
					 	{duration:200 , step:function(){that._draw();}});
		//this.$bar[0].style.width = this.slider.api._delayProgress/100 * this.$element.width() + 'px';
	};
	
	p._draw = function(){
		this.ctx.clearRect(0 , 0,  this.__w ,  this.__w);
		this.ctx.beginPath(); 
		this.ctx.arc(this.__w * .5 , this.__w * .5 ,this.options.radius , Math.PI * 1.5 , Math.PI * 1.5 + 2 * Math.PI * this.prog, false);
		this.ctx.strokeStyle = this.options.color;
		this.ctx.lineWidth = this.options.stroke;
		this.ctx.stroke();
	};
	
	p.destroy = function(){
		if(this.disable) return;
		$(this).stop(true);
		this.slider.api.removeEventListener(MSSliderEvent.WATING , this._update , this);
		this.$element.remove();
	};
	
	window.MSCircleTimer = MSCircleTimer;
		MSSlideController.registerControl('circletimer' , MSCircleTimer);
})(jQuery);
//dev\slider\uicontrols\Lightbox.js 
 
;(function($){
	
	"use strict";
	
	window.MSLightbox = function(options){
		BaseControl.call(this , options);
		
		this.options.autohide	= false;
		$.extend(this.options , options);

		this.data_list = [];
	};
	MSLightbox.fadeDuratation = 400;
	MSLightbox.extend(BaseControl);
	
	var p = MSLightbox.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */	
		p.setup = function(){
		_super.setup.call(this);

		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(this.cont);
		
	};
	
	p.slideAction = function(slide){
		 $('<div></div>')
						.addClass(this.options.prefix + 'lightbox-btn')
						.appendTo(slide.$element)
						.append($(slide.$element.find('.ms-lightbox')));
	
	};
	
	p.create = function(){
		_super.create.call(this);
	
	};
	

	MSSlideController.registerControl('lightbox' , MSLightbox);
})(jQuery);
//dev\slider\uicontrols\SlideInfo.js 
 
;(function($){
	
	"use strict";
	
	window.MSSlideInfo = function(options){
		BaseControl.call(this , options);
		
		this.options.autohide	= false;
		this.options.align  = null;
		this.options.inset = false;
		this.options.margin = 10;
		this.options.size = 100;
		this.options.dir = 'h';

		$.extend(this.options , options);

		this.data_list = [];
	};
	MSSlideInfo.fadeDuratation = 400;
	MSSlideInfo.extend(BaseControl);
	
	var p = MSSlideInfo.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */	
	p.setup = function(){
		this.$element = $('<div></div>')
						.addClass(this.options.prefix + 'slide-info')
						.addClass('ms-dir-' + this.options.dir);

		_super.setup.call(this);	

		if( this.slider.$controlsCont === this.cont ){
			this.$element.appendTo(this.slider.$element);
		}else{
			this.$element.appendTo(this.cont);
		}
		
		// align control
		if( !this.options.insetTo && this.options.align ){
			var align = this.options.align;
			if( this.options.inset ){
				this.$element.css(align, this.options.margin );
			}else{
				this.slider.api.addEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
				this.align();
			}

			if( this.options.dir === 'v' ){
				this.$element.width(this.options.size);
			}else{
				this.$element.css('min-height', this.options.size);
			}
		}

	};


	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onAppend = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by the parent class [MSBaseControl] when the control element visibles [hideUnder option]
	 * @since 1.5.7
	 */
	p.onDetach = function(){
		if( !this.options.insetTo && this.options.align && !this.options.inset ){
			this.slider._realignControls();
		}
	};

	/**
	 * calls by "RESERVED_SPACE_CHGANE" realigns the control in slider
	 * @since 1.5.7
	 */
	p.align = function(event){
		if( this.detached ){
			return;
		}
		var align = this.options.align;
		var pos = this.slider.reserveSpace(align, this.options.size + this.options.margin * 2);
		this.$element.css(align, -pos - this.options.size - this.options.margin);
	};
	
	p.slideAction = function(slide){
		var info_ele = $(slide.$element.find('.ms-info'));
		var that = this;
		info_ele.detach();
		
		this.data_list[slide.index] = info_ele;
	};
	
	p.create = function(){
		_super.create.call(this);
		this.slider.api.addEventListener(MSSliderEvent.CHANGE_START , this.update , this);
		this.cindex =  this.slider.api.index();
		this.switchEle(this.data_list[this.cindex]);
	};
	
	p.update = function(){
		var nindex = this.slider.api.index();
		this.switchEle(this.data_list[nindex]);
		this.cindex = nindex;
	};
	
	p.switchEle = function(ele){
		if(this.current_ele){
			var that = this;
			
			if(this.current_ele[0].tween)this.current_ele[0].tween.stop(true);
			this.current_ele[0].tween = CTween.animate(this.current_ele , MSSlideInfo.fadeDuratation  , {opacity:0} , {complete:function(){this.detach(); this[0].tween = null;} , target:this.current_ele });
			
			clearTimeout(this.tou);
			this.tou = setTimeout(function(){that.__show(ele);} , MSSlideInfo.fadeDuratation+200 );
			
			return;
		}
		this.__show(ele);
	};
	
	p.__show = function(ele){
		ele.appendTo(this.$element).css('opacity','0');
		CTween.fadeIn(ele , MSSlideInfo.fadeDuratation );
		if(ele[0].tween)ele[0].tween.stop(true);
		this.current_ele = ele;
	};

	p.destroy = function(){
		clearTimeout(this.tou);
		if(this.current_ele){
			this.current_ele[0].tween.stop('true');
		}
		this.$element.remove();
		this.slider.removeEventListener(MSSliderEvent.RESERVED_SPACE_CHANGE, this.align, this);
	};
	
	MSSlideController.registerControl('slideinfo' , MSSlideInfo);
})(jQuery);
//dev\slider\plugins\MSGallery.js 
 
/**
 *	Master Slider, Gallery Template v1.0
 * 	@author: Averta Ltd.
 */

;(function(){
	
	window.MSGallery = function(id , slider){
		this.id = id;
		this.slider = slider;
		
		this.telement = $('#'+id);
		
		this.botcont = $('<div></div>').addClass('ms-gallery-botcont').appendTo(this.telement);
		this.thumbcont = $('<div></div>').addClass('ms-gal-thumbcont hide-thumbs').appendTo(this.botcont);
		this.playbtn  = $('<div></div>').addClass('ms-gal-playbtn').appendTo(this.botcont);
		this.thumbtoggle  = $('<div></div>').addClass('ms-gal-thumbtoggle').appendTo(this.botcont);
		
		// adds required controls to slider
		slider.control('thumblist' , {insertTo:this.thumbcont , autohide:false , dir:'h'});
		slider.control('slidenum'  , {insertTo:this.botcont , autohide:false});
		slider.control('slideinfo' , {insertTo:this.botcont , autohide:false});		
		slider.control('timebar'   , {insertTo:this.botcont , autohide:false});		
		slider.control('bullets'   , {insertTo:this.botcont , autohide:false});		
	};
	
	var p = MSGallery.prototype;
	
	p._init = function(){
		var that = this;
		
		if(!this.slider.api.paused)
			 this.playbtn.addClass('btn-pause');
		 
		this.playbtn.click(function(){
			if(that.slider.api.paused){
				 that.slider.api.resume();
				 that.playbtn.addClass('btn-pause');
			}else{
				 that.slider.api.pause();
				 that.playbtn.removeClass('btn-pause');
			}
		});
		
		
		this.thumbtoggle.click(function(){
			
			if(that.vthumbs){
				//that.hideThumbs();
				that.thumbtoggle.removeClass('btn-hide');
				that.vthumbs = false;
				that.thumbcont.addClass('hide-thumbs');
			}else{
				//that.showThumbs();
				that.thumbtoggle.addClass('btn-hide');
				that.thumbcont.removeClass('hide-thumbs');
				that.vthumbs = true;
			}
		});
		
	};
	
	p.setup = function(){
		var that = this;
		$(document).ready(function(){that._init();});
	};
	
	
})();
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
(function(){/*
 OverlappingMarkerSpiderfier
https://github.com/jawj/OverlappingMarkerSpiderfier
Copyright (c) 2011 - 2012 George MacKerron
Released under the MIT licence: http://opensource.org/licenses/mit-license
Note: The Google Maps API v3 must be included *before* this code
*/
var h=!0,i=null,n=!1,p,q={}.hasOwnProperty,s=[].slice;
if(((p=this.google)!=i?p.maps:void 0)!=i){var u=function(b,c){var a,e,d,f,g=this;this.map=b;c==i&&(c={});for(a in c)q.call(c,a)&&(e=c[a],this[a]=e);this.e=new this.constructor.g(this.map);this.n();this.b={};f=["click","zoom_changed","maptypeid_changed"];e=0;for(d=f.length;e<d;e++)a=f[e],t.addListener(this.map,a,function(){return g.unspiderfy()})},t,v,w,x,y,z,A;z=u.prototype;z.VERSION="0.3";v=google.maps;t=v.event;y=v.MapTypeId;A=2*Math.PI;z.keepSpiderfied=n;z.markersWontHide=n;z.markersWontMove=n;
z.nearbyDistance=20;z.circleSpiralSwitchover=9;z.circleFootSeparation=23;z.circleStartAngle=A/12;z.spiralFootSeparation=26;z.spiralLengthStart=11;z.spiralLengthFactor=4;z.spiderfiedZIndex=1E3;z.usualLegZIndex=10;z.highlightedLegZIndex=20;z.legWeight=1.5;z.legColors={usual:{},highlighted:{}};x=z.legColors.usual;w=z.legColors.highlighted;x[y.HYBRID]=x[y.SATELLITE]="#fff";w[y.HYBRID]=w[y.SATELLITE]="#f00";x[y.TERRAIN]=x[y.ROADMAP]="#444";w[y.TERRAIN]=w[y.ROADMAP]="#f00";z.n=function(){this.a=[];this.j=
[]};z.addMarker=function(b){var c,a=this;if(b._oms!=i)return this;b._oms=h;c=[t.addListener(b,"click",function(){return a.F(b)})];this.markersWontHide||c.push(t.addListener(b,"visible_changed",function(){return a.o(b,n)}));this.markersWontMove||c.push(t.addListener(b,"position_changed",function(){return a.o(b,h)}));this.j.push(c);this.a.push(b);return this};z.o=function(b,c){if(b._omsData!=i&&(c||!b.getVisible())&&!(this.s!=i||this.t!=i))return this.H(c?b:i)};z.getMarkers=function(){return this.a.slice(0)};
z.removeMarker=function(b){var c,a,e,d,f;b._omsData!=i&&this.unspiderfy();c=this.m(this.a,b);if(0>c)return this;e=this.j.splice(c,1)[0];d=0;for(f=e.length;d<f;d++)a=e[d],t.removeListener(a);delete b._oms;this.a.splice(c,1);return this};z.clearMarkers=function(){var b,c,a,e,d,f,g,j;this.unspiderfy();j=this.a;b=e=0;for(f=j.length;e<f;b=++e){a=j[b];c=this.j[b];d=0;for(g=c.length;d<g;d++)b=c[d],t.removeListener(b);delete a._oms}this.n();return this};z.addListener=function(b,c){var a,e;((e=(a=this.b)[b])!=
i?e:a[b]=[]).push(c);return this};z.removeListener=function(b,c){var a;a=this.m(this.b[b],c);0>a||this.b[b].splice(a,1);return this};z.clearListeners=function(b){this.b[b]=[];return this};z.trigger=function(){var b,c,a,e,d,f;c=arguments[0];b=2<=arguments.length?s.call(arguments,1):[];c=(a=this.b[c])!=i?a:[];f=[];e=0;for(d=c.length;e<d;e++)a=c[e],f.push(a.apply(i,b));return f};z.u=function(b,c){var a,e,d,f,g;d=this.circleFootSeparation*(2+b)/A;e=A/b;g=[];for(a=f=0;0<=b?f<b:f>b;a=0<=b?++f:--f)a=this.circleStartAngle+
a*e,g.push(new v.Point(c.x+d*Math.cos(a),c.y+d*Math.sin(a)));return g};z.v=function(b,c){var a,e,d,f,g;d=this.spiralLengthStart;a=0;g=[];for(e=f=0;0<=b?f<b:f>b;e=0<=b?++f:--f)a+=this.spiralFootSeparation/d+5E-4*e,e=new v.Point(c.x+d*Math.cos(a),c.y+d*Math.sin(a)),d+=A*this.spiralLengthFactor/a,g.push(e);return g};z.F=function(b){var c,a,e,d,f,g,j,k,m;d=b._omsData!=i;(!d||!this.keepSpiderfied)&&this.unspiderfy();if(d||this.map.getStreetView().getVisible())return this.trigger("click",b);d=[];f=[];c=
this.nearbyDistance;g=c*c;e=this.c(b.position);m=this.a;j=0;for(k=m.length;j<k;j++)c=m[j],c.map!=i&&c.getVisible()&&(a=this.c(c.position),this.f(a,e)<g?d.push({A:c,p:a}):f.push(c));return 1===d.length?this.trigger("click",b):this.G(d,f)};z.markersNearMarker=function(b,c){var a,e,d,f,g,j,k,m,l,r;c==i&&(c=n);if(this.e.getProjection()==i)throw"Must wait for 'idle' event on map before calling markersNearMarker";a=this.nearbyDistance;g=a*a;d=this.c(b.position);f=[];m=this.a;j=0;for(k=m.length;j<k;j++)if(a=
m[j],!(a===b||a.map==i||!a.getVisible()))if(e=this.c((l=(r=a._omsData)!=i?r.l:void 0)!=i?l:a.position),this.f(e,d)<g&&(f.push(a),c))break;return f};z.markersNearAnyOtherMarker=function(){var b,c,a,e,d,f,g,j,k,m,l,r;if(this.e.getProjection()==i)throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";f=this.nearbyDistance;b=f*f;e=this.a;f=[];l=0;for(a=e.length;l<a;l++)c=e[l],f.push({q:this.c((g=(k=c._omsData)!=i?k.l:void 0)!=i?g:c.position),d:n});l=this.a;c=g=0;for(k=l.length;g<
k;c=++g)if(a=l[c],a.map!=i&&a.getVisible()&&(e=f[c],!e.d)){r=this.a;a=j=0;for(m=r.length;j<m;a=++j)if(d=r[a],a!==c&&(d.map!=i&&d.getVisible())&&(d=f[a],(!(a<c)||d.d)&&this.f(e.q,d.q)<b)){e.d=d.d=h;break}}l=this.a;a=[];b=g=0;for(k=l.length;g<k;b=++g)c=l[b],f[b].d&&a.push(c);return a};z.z=function(b){var c=this;return{h:function(){return b._omsData.i.setOptions({strokeColor:c.legColors.highlighted[c.map.mapTypeId],zIndex:c.highlightedLegZIndex})},k:function(){return b._omsData.i.setOptions({strokeColor:c.legColors.usual[c.map.mapTypeId],
zIndex:c.usualLegZIndex})}}};z.G=function(b,c){var a,e,d,f,g,j;this.s=h;d=b.length;a=this.C(function(){var a,c,d;d=[];a=0;for(c=b.length;a<c;a++)j=b[a],d.push(j.p);return d}());d=d>=this.circleSpiralSwitchover?this.v(d,a).reverse():this.u(d,a);var k,m,l,r=this;l=[];k=0;for(m=d.length;k<m;k++)e=d[k],a=this.D(e),g=this.B(b,function(a){return r.f(a.p,e)}),g=g.A,f=new v.Polyline({map:this.map,path:[g.position,a],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),
g._omsData={l:g.position,i:f},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(f=this.z(g),g._omsData.w={h:t.addListener(g,"mouseover",f.h),k:t.addListener(g,"mouseout",f.k)}),g.setPosition(a),g.setZIndex(Math.round(this.spiderfiedZIndex+e.y)),l.push(g);delete this.s;this.r=h;return this.trigger("spiderfy",l,c)};z.unspiderfy=function(b){var c,a,e,d,f,g,j;b==i&&(b=i);if(this.r==i)return this;this.t=h;d=[];e=[];j=this.a;f=0;for(g=j.length;f<g;f++)a=j[f],a._omsData!=
i?(a._omsData.i.setMap(i),a!==b&&a.setPosition(a._omsData.l),a.setZIndex(i),c=a._omsData.w,c!=i&&(t.removeListener(c.h),t.removeListener(c.k)),delete a._omsData,d.push(a)):e.push(a);delete this.t;delete this.r;this.trigger("unspiderfy",d,e);return this};z.f=function(b,c){var a,e;a=b.x-c.x;e=b.y-c.y;return a*a+e*e};z.C=function(b){var c,a,e,d,f;d=a=e=0;for(f=b.length;d<f;d++)c=b[d],a+=c.x,e+=c.y;b=b.length;return new v.Point(a/b,e/b)};z.c=function(b){return this.e.getProjection().fromLatLngToDivPixel(b)};
z.D=function(b){return this.e.getProjection().fromDivPixelToLatLng(b)};z.B=function(b,c){var a,e,d,f,g,j;d=g=0;for(j=b.length;g<j;d=++g)if(f=b[d],f=c(f),!("undefined"!==typeof a&&a!==i)||f<e)e=f,a=d;return b.splice(a,1)[0]};z.m=function(b,c){var a,e,d,f;if(b.indexOf!=i)return b.indexOf(c);a=d=0;for(f=b.length;d<f;a=++d)if(e=b[a],e===c)return a;return-1};u.g=function(b){return this.setMap(b)};u.g.prototype=new v.OverlayView;u.g.prototype.draw=function(){};this.OverlappingMarkerSpiderfier=u};}).call(this);
/* Mon 7 Jan 2013 18:10:52 GMT */
;
/*! Picturefill - v2.1.0-beta - 2014-06-03
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */

window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b){"use strict";function c(a){var b,c,d,f,g,h;a=a||{},b=a.elements||e.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.nodeName.toUpperCase(),f=void 0,g=void 0,h=void 0,c[e.ns]||(c[e.ns]={}),a.reevaluate||!c[e.ns].evaluated){if("PICTURE"===d){if(e.removeVideoShim(c),f=e.getMatch(c),f===!1)continue;h=c.getElementsByTagName("img")[0]}else f=void 0,h=c;h&&(h[e.ns]||(h[e.ns]={}),h.srcset&&("PICTURE"===d||h.getAttribute("sizes"))&&e.dodgeSrcset(h),f?(g=e.processSourceSet(f),e.applyBestCandidate(g,h)):(g=e.processSourceSet(h),(void 0===h.srcset||h[e.ns].srcset)&&e.applyBestCandidate(g,h)),c[e.ns].evaluated=!0)}}function d(){c();var d=setInterval(function(){return c(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(d):void 0},250);if(a.addEventListener){var e;a.addEventListener("resize",function(){a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(e),e=a.setTimeout(function(){c({reevaluate:!0}),a._picturefillWorking=!1},60))},!1)}}if(!a.HTMLPictureElement){b.createElement("picture");var e={};e.ns="picturefill",e.srcsetSupported=void 0!==(new a.Image).srcset,e.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},e.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},e.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},e.getDpr=function(){return a.devicePixelRatio||1},e.getWidthFromLength=function(a){return a=a&&parseFloat(a)>0?a:"100vw",a=a.replace("vw","%"),e.lengthEl||(e.lengthEl=b.createElement("div"),b.documentElement.insertBefore(e.lengthEl,b.documentElement.firstChild)),e.lengthEl.style.cssText="position: absolute; left: 0; width: "+a+";",e.lengthEl.offsetWidth},e.types={},e.types["image/jpeg"]=!0,e.types["image/gif"]=!0,e.types["image/png"]=!0,e.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),e.types["image/webp"]=function(){var b=new a.Image,d="image/webp";b.onerror=function(){e.types[d]=!1,c()},b.onload=function(){e.types[d]=1===b.width,c()},b.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},e.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof e.types[b]?(e.types[b](),"pending"):e.types[b]},e.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},e.findWidthFromSourceSize=function(a){for(var b,c=e.trim(a).split(/\s*,\s*/),d=0,f=c.length;f>d;d++){var g=c[d],h=e.parseSize(g),i=h.length,j=h.media;if(i&&(!j||e.matchesMedia(j))){b=i;break}}return e.getWidthFromLength(b)},e.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c[c.length-1];if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},e.parseDescriptor=function(a,b){var c,d=a&&a.replace(/(^\s+|\s+$)/g,""),f=b?e.findWidthFromSourceSize(b):"100%";if(d)for(var g=d.split(" "),h=g.length+1;h>=0;h--){var i=g[h],j=i&&i.slice(i.length-1);if(("w"===j||"x"===j)&&(c=i),b&&c)c=parseFloat(parseInt(i,10)/f);else{var k=i&&parseFloat(i,10);c=k&&!isNaN(k)&&"x"===j||"w"===j?k:1}}else c=1;return c},e.getCandidatesFromSourceSet=function(a,b){for(var c=e.parseSrcset(a),d=[],f=0,g=c.length;g>f;f++){var h=c[f];d.push({url:h.url,resolution:e.parseDescriptor(h.descriptor,b)})}return d},e.dodgeSrcset=function(a){a.srcset&&(a[e.ns].srcset=a.srcset,a.removeAttribute("srcset"))},e.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[e.ns]&&a[e.ns].srcset&&(b=a[e.ns].srcset),b&&(d=e.getCandidatesFromSourceSet(b,c)),d},e.applyBestCandidate=function(a,b){var c,d,f;a.sort(e.ascendingSort),d=a.length,f=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=e.getDpr()){f=c;break}e.endsWith(b.src,f.url)||(b.src=f.url,b.currentSrc=b.src)},e.ascendingSort=function(a,b){return a.resolution-b.resolution},e.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},e.getAllElements=function(){for(var a=b.getElementsByTagName("picture"),c=[],d=b.getElementsByTagName("img"),f=0,g=a.length+d.length;g>f;f++)if(f<a.length)c[f]=a[f];else{var h=d[f-a.length];"PICTURE"!==h.parentNode.nodeName.toUpperCase()&&(e.srcsetSupported&&h.getAttribute("sizes")||null!==h.getAttribute("srcset"))&&c.push(h)}return c},e.getMatch=function(a){for(var b,c=a.childNodes,d=0,f=c.length;f>d;d++){var g=c[d];if(1===g.nodeType){if("IMG"===g.nodeName.toUpperCase())return b;if("SOURCE"===g.nodeName.toUpperCase()){var h=g.getAttribute("media");if(g.getAttribute("srcset")&&(!h||e.matchesMedia(h))){var i=e.verifyTypeSupport(g);if(i===!0){b=g;break}if("pending"===i)return!1}}}}return b},d(),c._=e,"object"==typeof module&&"object"==typeof module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof a&&(a.picturefill=c)}}(this,this.document);
(function($, self){

if(!$ || !self) {
	return;
}

for(var i=0; i<self.properties.length; i++) {
	var property = self.properties[i],
		camelCased = StyleFix.camelCase(property),
		PrefixCamelCased = self.prefixProperty(property, true);
	
	$.cssProps[camelCased] = PrefixCamelCased;
}

})(window.jQuery, window.PrefixFree);
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\//.test(n)?'url("'+s+n+'")':/^\//.test(n)?'url("'+o+n+'")':/^\?/.test(n)?'url("'+u+n+'")':'url("'+i+n+'")'});var r=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");n=n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var l=document.createElement("style");l.textContent=n;l.media=t.media;l.disabled=t.disabled;l.setAttribute("data-href",t.getAttribute("href"));a.insertBefore(l,t);a.removeChild(t);l.media=t.media}};try{f.open("GET",r);f.send(null)}catch(n){if(typeof XDomainRequest!="undefined"){f=new XDomainRequest;f.onerror=f.onprogress=function(){};f.onload=l;f.open("GET",r);f.send(null)}}t.setAttribute("data-inprogress","")},styleElement:function(t){if(t.hasAttribute("data-noprefix"))return;var n=t.disabled;t.textContent=e.fix(t.textContent,!0,t);t.disabled=n},styleAttribute:function(t){var n=t.getAttribute("style");n=e.fix(n,!1,t);t.setAttribute("style",n)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);t("style").forEach(StyleFix.styleElement);t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,n){(e.fixers=e.fixers||[]).splice(n===undefined?e.fixers.length:n,0,t)},fix:function(t,n,r){for(var i=0;i<e.fixers.length;i++)t=e.fixers[i](t,n,r)||t;return t},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};(function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()})();(function(e){function t(e,t,r,i,s){e=n[e];if(e.length){var o=RegExp(t+"("+e.join("|")+")"+r,"gi");s=s.replace(o,i)}return s}if(!window.StyleFix||!window.getComputedStyle)return;var n=window.PrefixFree={prefixCSS:function(e,r,i){var s=n.prefix;n.functions.indexOf("linear-gradient")>-1&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(e,t,n,r){return t+(n||"")+"linear-gradient("+(90-r)+"deg"}));e=t("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",e);e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",e);e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",e);if(n.properties.length){var o=RegExp("\\b("+n.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,s+"$1")},e)}if(r){e=t("selectors","","\\b",n.prefixSelector,e);e=t("atrules","@","\\b","@"+s+"$1",e)}e=e.replace(RegExp("-"+s,"g"),"-");e=e.replace(/-\*-(?=[a-z]+)/gi,n.prefix);return e},property:function(e){return(n.properties.indexOf(e)?n.prefix:"")+e},value:function(e,r){e=t("functions","(^|\\s|,)","\\s*\\(","$1"+n.prefix+"$2(",e);e=t("keywords","(^|\\s)","(\\s|$)","$1"+n.prefix+"$2$3",e);return e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+n.prefix})},prefixProperty:function(e,t){var r=n.prefix+e;return t?StyleFix.camelCase(r):r}};(function(){var e={},t=[],r={},i=getComputedStyle(document.documentElement,null),s=document.createElement("div").style,o=function(n){if(n.charAt(0)==="-"){t.push(n);var r=n.split("-"),i=r[1];e[i]=++e[i]||1;while(r.length>3){r.pop();var s=r.join("-");u(s)&&t.indexOf(s)===-1&&t.push(s)}}},u=function(e){return StyleFix.camelCase(e)in s};if(i.length>0)for(var a=0;a<i.length;a++)o(i[a]);else for(var f in i)o(StyleFix.deCamelCase(f));var l={uses:0};for(var c in e){var h=e[c];l.uses<h&&(l={prefix:c,uses:h})}n.prefix="-"+l.prefix+"-";n.Prefix=StyleFix.camelCase(n.prefix);n.properties=[];for(var a=0;a<t.length;a++){var f=t[a];if(f.indexOf(n.prefix)===0){var p=f.slice(n.prefix.length);u(p)||n.properties.push(p)}}n.Prefix=="Ms"&&!("transform"in s)&&!("MsTransform"in s)&&"msTransform"in s&&n.properties.push("transform","transform-origin");n.properties.sort()})();(function(){function i(e,t){r[t]="";r[t]=e;return!!r[t]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"];var t={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"};n.functions=[];n.keywords=[];var r=document.createElement("div").style;for(var s in e){var o=e[s],u=o.property,a=s+"("+o.params+")";!i(a,u)&&i(n.prefix+a,u)&&n.functions.push(s)}for(var f in t){var u=t[f];!i(f,u)&&i(n.prefix+f,u)&&n.keywords.push(f)}})();(function(){function s(e){i.textContent=e+"{}";return!!i.sheet.cssRules.length}var t={":read-only":null,":read-write":null,":any-link":null,"::selection":null},r={keyframes:"name",viewport:null,document:'regexp(".")'};n.selectors=[];n.atrules=[];var i=e.appendChild(document.createElement("style"));for(var o in t){var u=o+(t[o]?"("+t[o]+")":"");!s(u)&&s(n.prefixSelector(u))&&n.selectors.push(o)}for(var a in r){var u=a+" "+(r[a]||"");!s("@"+u)&&s("@"+n.prefix+u)&&n.atrules.push(a)}e.removeChild(i)})();n.valueProperties=["transition","transition-property"];e.className+=" "+n.prefix;StyleFix.register(n.prefixCSS)})(document.documentElement);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
/*
 * Salvattore 1.0.5 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */

!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define("salvattore",[],b):a.salvattore=b()}(this,function(){window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var a=window.matchMedia,b=a("only all").matches,c=!1,d=0,e=[],f=function(){clearTimeout(d),d=setTimeout(function(){for(var b=0,c=e.length;c>b;b++){var d=e[b].mql,f=e[b].listeners||[],g=a(d.media).matches;if(g!==d.matches){d.matches=g;for(var h=0,i=f.length;i>h;h++)f[h].call(window,d)}}},30)};window.matchMedia=function(d){var g=a(d),h=[],i=0;return g.addListener=function(a){b&&(c||(c=!0,window.addEventListener("resize",f,!0)),0===i&&(i=e.push({mql:g,listeners:h})),h.push(a))},g.removeListener=function(a){for(var b=0,c=h.length;c>b;b++)h[b]===a&&h.splice(b,1)},g}}(),function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();var a=function(a,b){"use strict";var c={},d=[],e=function(a,b,c){a.dataset?a.dataset[b]=c:a.setAttribute("data-"+b,c)};return c.obtain_grid_settings=function(b){var c,d,e=a.getComputedStyle(b,":before"),f=e.getPropertyValue("content").slice(1,-1),g=f.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/);return g?(c=g[1],d=g[2],d=d?d.split("."):["column"]):(g=f.match(/^\s*\.(.+)\s+(\d+)\s*$/),d=g[1],c=g[2],c&&(c=c.split("."))),{numberOfColumns:c,columnClasses:d}},c.add_columns=function(a,d){for(var f,g=c.obtain_grid_settings(a),h=g.numberOfColumns,i=g.columnClasses,j=new Array(+h),k=b.createDocumentFragment(),l=h;0!==l--;)f="[data-columns] > *:nth-child("+h+"n-"+l+")",j.push(d.querySelectorAll(f));j.forEach(function(a){var c=b.createElement("div"),d=b.createDocumentFragment();c.className=i.join(" "),Array.prototype.forEach.call(a,function(a){d.appendChild(a)}),c.appendChild(d),k.appendChild(c)}),a.appendChild(k),e(a,"columns",h)},c.remove_columns=function(c){var d=b.createRange();d.selectNodeContents(c);var f=Array.prototype.filter.call(d.extractContents().childNodes,function(b){return b instanceof a.HTMLElement}),g=f.length,h=f[0].childNodes.length,i=new Array(h*g);Array.prototype.forEach.call(f,function(a,b){Array.prototype.forEach.call(a.children,function(a,c){i[c*g+b]=a})});var j=b.createElement("div");return e(j,"columns",0),i.filter(function(a){return!!a}).forEach(function(a){j.appendChild(a)}),j},c.recreate_columns=function(b){a.requestAnimationFrame(function(){c.add_columns(b,c.remove_columns(b))})},c.media_query_change=function(a){a.matches&&Array.prototype.forEach.call(d,c.recreate_columns)},c.get_css_rules=function(a){var b;try{b=a.sheet.cssRules||a.sheet.rules}catch(c){return[]}return b||[]},c.get_stylesheets=function(){return Array.prototype.concat.call(Array.prototype.slice.call(b.querySelectorAll("style[type='text/css']")),Array.prototype.slice.call(b.querySelectorAll("link[rel='stylesheet']")))},c.media_rule_has_columns_selector=function(a){for(var b,c=a.length;c--;)if(b=a[c],b.selectorText&&b.selectorText.match(/\[data-columns\](.*)::?before$/))return!0;return!1},c.scan_media_queries=function(){var b=[];a.matchMedia&&(c.get_stylesheets().forEach(function(d){Array.prototype.forEach.call(c.get_css_rules(d),function(d){d.media&&c.media_rule_has_columns_selector(d.cssRules)&&b.push(a.matchMedia(d.media.mediaText))})}),b.forEach(function(a){a.addListener(c.media_query_change)}))},c.next_element_column_index=function(a,b){var c,d,e,f=a.children,g=f.length,h=0,i=0;for(e=0;g>e;e++)c=f[e],d=c.children.length+b[e].children.length,0===h&&(h=d),h>d&&(i=e,h=d);return i},c.create_list_of_fragments=function(a){for(var c=new Array(a),d=0;d!==a;)c[d]=b.createDocumentFragment(),d++;return c},c.append_elements=function(a,b){var d=a.children,e=d.length,f=c.create_list_of_fragments(e);b.forEach(function(b){var d=c.next_element_column_index(a,f);f[d].appendChild(b)}),Array.prototype.forEach.call(d,function(a,b){a.appendChild(f[b])})},c.prepend_elements=function(a,d){var e=a.children,f=e.length,g=c.create_list_of_fragments(f),h=f-1;d.forEach(function(a){var b=g[h];b.insertBefore(a,b.firstChild),0===h?h=f-1:h--}),Array.prototype.forEach.call(e,function(a,b){a.insertBefore(g[b],a.firstChild)});for(var i=b.createDocumentFragment(),j=d.length%f;0!==j--;)i.appendChild(a.lastChild);a.insertBefore(i,a.firstChild)},c.register_grid=function(f){if("none"!==a.getComputedStyle(f).display){var g=b.createRange();g.selectNodeContents(f);var h=b.createElement("div");h.appendChild(g.extractContents()),e(h,"columns",0),c.add_columns(f,h),d.push(f)}},c.init=function(){var a=b.createElement("style");a.innerHTML="[data-columns]::before{visibility:hidden;position:absolute;font-size:1px;}",b.head.appendChild(a);var d=b.querySelectorAll("[data-columns]");Array.prototype.forEach.call(d,c.register_grid),c.scan_media_queries()},c.init(),{append_elements:c.append_elements,prepend_elements:c.prepend_elements,register_grid:c.register_grid}}(window,window.document);return a});
//SPIN.js
(function(a,b,c){function O(a){H(arguments,function(b,d){a[b]===c&&(a[b]=d)});return a}function N(a){H(arguments,function(b,c){a[m][M(a,b)||b]=c});return a}function M(a,b){var d=a[m],f,g;if(d[b]!==c){return b}b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<E[e];g++){f=E[g]+b;if(d[f]!==c){return f}}}function L(a,b){var c=[j,b,~~(a*100)].join("-"),d="{"+j+":"+a+"}",f;if(!F[c]){for(f=0;f<E[e];f++){try{K.insertRule("@"+(E[f]&&"-"+E[f].toLowerCase()+"-"||"")+"keyframes "+c+"{0%{"+j+":1}"+b+"%"+d+"to"+d+"}",K.cssRules[e])}catch(g){}}F[c]=1}return c}function J(a,b,c){c&&!c[t]&&J(a,c),a.insertBefore(b,c||null);return a}function I(a){var c=b.createElement(a||"div");H(arguments,function(a,b){c[a]=b});return c}function H(a,b){var c=~~((a[e]-1)/2);for(var d=1;d<=c;d++){b(a[d*2-1],a[d*2])}}var d="width",e="length",f="radius",g="lines",h="trail",i="color",j="opacity",k="speed",l="shadow",m="style",n="height",o="left",p="top",q="px",r="childNodes",s="firstChild",t="parentNode",u="position",v="relative",w="absolute",x="animation",y="transform",z="Origin",A="Timeout",B="coord",C="#000",D=m+"Sheets",E="webkit0Moz0ms0O".split(0),F={},G;J(b.getElementsByTagName("head")[0],I(m));var K=b[D][b[D][e]-1],P=function(a){this.opts=O(a||{},g,12,h,100,e,7,d,5,f,10,i,C,j,0.25,k,1)},Q=P.prototype={spin:function(b){var c=this,d=c.el=c[g](c.opts);b&&J(b,N(d,o,~~(b.offsetWidth/2)+q,p,~~(b.offsetHeight/2)+q),b[s]);if(!G){var e=c.opts,f=0,i=20/e[k],l=(1-e[j])/(i*e[h]/100),m=i/e[g];(function n(){f++;for(var b=e[g];b;b--){var h=Math.max(1-(f+b*m)%i*l,e[j]);c[j](d,e[g]-b,h,e)}c[A]=c.el&&a["set"+A](n,50)})()}return c},stop:function(){var b=this,d=b.el;a["clear"+A](b[A]),d&&d[t]&&d[t].removeChild(d),b.el=c;return b}};Q[g]=function(a){function s(b,c){return N(I(),u,w,d,a[e]+a[d]+q,n,a[d]+q,"background",b,"boxShadow",c,y+z,o,y,"rotate("+~~(360/a[g]*m)+"deg) translate("+a[f]+q+",0)","borderRadius","100em")}var b=N(I(),u,v),c=L(a[j],a[h]),m=0,r;for(;m<a[g];m++){r=N(I(),u,w,p,1+~(a[d]/2)+q,y,"translate3d(0,0,0)",x,c+" "+1/a[k]+"s linear infinite "+(1/a[g]/a[k]*m-1/a[k])+"s"),a[l]&&J(r,N(s(C,"0 0 4px "+C),p,2+q)),J(b,J(r,s(a[i],"0 0 1px rgba(0,0,0,.1)")))}return b},Q[j]=function(a,b,c){a[r][b][m][j]=c};var R="behavior",S="url(#default#VML)",T="group0roundrect0fill0stroke".split(0);(function(){var a=N(I(T[0]),R,S),b;if(!M(a,y)&&a.adj){for(b=0;b<T[e];b++){K.addRule(T[b],R+":"+S)}Q[g]=function(){function s(c,e,l){J(k,J(N(h(),"rotation",360/a[g]*c+"deg",o,~~e),J(N(I(T[1],"arcsize",1),d,b,n,a[d],o,a[f],p,-a[d]/2,"filter",l),I(T[2],i,a[i],j,a[j]),I(T[3],j,0))))}function h(){return N(I(T[0],B+"size",c+" "+c,B+z,-b+" "+-b),d,c,n,c)}var a=this.opts,b=a[e]+a[d],c=2*b,k=h(),m=~(a[e]+a[f]+a[d])+q,r;if(a[l]){for(r=1;r<=a[g];r++){s(r,-2,"progid:DXImage"+y+".Microsoft.Blur(pixel"+f+"=2,make"+l+"=1,"+l+j+"=.3)")}}for(r=1;r<=a[g];r++){s(r)}return J(N(I(),"margin",m+" 0 0 "+m,u,v),k)},Q[j]=function(a,b,c,d){d=d[l]&&d[g]||0,a[s][r][b+d][s][s][j]=c}}else{G=M(a,x)}})(),a.Spinner=P})(window,document);
/* tooltipsy by Brian Cray
 * Lincensed under GPL2 - http://www.gnu.org/licenses/gpl-2.0.html
 * Option quick reference:
 * - alignTo: "element" or "cursor" (Defaults to "element")
 * - offset: Tooltipsy distance from element or mouse cursor, dependent on alignTo setting. Set as array [x, y] (Defaults to [0, -1])
 * - content: HTML or text content of tooltip. Defaults to "" (empty string), which pulls content from target element's title attribute
 * - show: function(event, tooltip) to show the tooltip. Defaults to a show(100) effect
 * - hide: function(event, tooltip) to hide the tooltip. Defaults to a fadeOut(100) effect
 * - delay: A delay in milliseconds before showing a tooltip. Set to 0 for no delay. Defaults to 200
 * - css: object containing CSS properties and values. Defaults to {} to use stylesheet for styles
 * - className: DOM class for styling tooltips with CSS. Defaults to "tooltipsy"
 * - showEvent: Set a custom event to bind the show function. Defaults to mouseenter
 * - hideEvent: Set a custom event to bind the show function. Defaults to mouseleave
 * Method quick reference:
 * - $('element').data('tooltipsy').show(): Force the tooltip to show
 * - $('element').data('tooltipsy').hide(): Force the tooltip to hide
 * - $('element').data('tooltipsy').destroy(): Remove tooltip from DOM
 * More information visit http://tooltipsy.com/
 */

;(function(a){a.tooltipsy=function(c,b){this.options=b;this.$el=a(c);this.title=this.$el.attr("title")||"";this.$el.attr("title","");this.random=parseInt(Math.random()*10000);this.ready=false;this.shown=false;this.width=0;this.height=0;this.delaytimer=null;this.$el.data("tooltipsy",this);this.init()};a.tooltipsy.prototype={init:function(){var e=this,d,b=e.$el,c=b[0];e.settings=d=a.extend({},e.defaults,e.options);d.delay=+d.delay;if(typeof d.content==="function"){e.readify()}if(d.showEvent===d.hideEvent&&d.showEvent==="click"){b.toggle(function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()}if(d.delay>0){e.delaytimer=window.setTimeout(function(){e.show(f)},d.delay)}else{e.show(f)}},function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()}window.clearTimeout(e.delaytimer);e.delaytimer=null;e.hide(f)})}else{b.bind(d.showEvent,function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()}e.delaytimer=window.setTimeout(function(){e.show(f)},d.delay||0)}).bind(d.hideEvent,function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()}window.clearTimeout(e.delaytimer);e.delaytimer=null;e.hide(f)})}},show:function(i){if(this.ready===false){this.readify()}var b=this,f=b.settings,h=b.$tipsy,k=b.$el,d=k[0],g=b.offset(d);if(b.shown===false){if((function(m){var l=0,e;for(e in m){if(m.hasOwnProperty(e)){l++}}return l})(f.css)>0){b.$tip.css(f.css)}b.width=h.outerWidth();b.height=h.outerHeight()}if(f.alignTo==="cursor"&&i){var j=[i.clientX+f.offset[0],i.clientY+f.offset[1]];if(j[0]+b.width>a(window).width()){var c={top:j[1]+"px",right:j[0]+"px",left:"auto"}}else{var c={top:j[1]+"px",left:j[0]+"px",right:"auto"}}}else{var j=[(function(){if(f.offset[0]<0){return g.left-Math.abs(f.offset[0])-b.width}else{if(f.offset[0]===0){return g.left-((b.width-k.outerWidth())/2)}else{return g.left+k.outerWidth()+f.offset[0]}}})(),(function(){if(f.offset[1]<0){return g.top-Math.abs(f.offset[1])-b.height}else{if(f.offset[1]===0){return g.top-((b.height-b.$el.outerHeight())/2)}else{return g.top+b.$el.outerHeight()+f.offset[1]}}})()]}h.css({top:j[1]+"px",left:j[0]+"px"});b.settings.show(i,h.stop(true,true))},hide:function(c){var b=this;if(b.ready===false){return}if(c&&c.relatedTarget===b.$tip[0]){b.$tip.bind("mouseleave",function(d){if(d.relatedTarget===b.$el[0]){return}b.settings.hide(d,b.$tipsy.stop(true,true))});return}b.settings.hide(c,b.$tipsy.stop(true,true))},readify:function(){this.ready=true;this.$tipsy=a('<div id="tooltipsy'+this.random+'" style="position:fixed;z-index:2147483647;display:none">').appendTo("body");this.$tip=a('<div class="'+this.settings.className+'">').appendTo(this.$tipsy);this.$tip.data("rootel",this.$el);var c=this.$el;var b=this.$tip;this.$tip.html(this.settings.content!=""?(typeof this.settings.content=="string"?this.settings.content:this.settings.content(c,b)):this.title)},offset:function(b){return this.$el[0].getBoundingClientRect()},destroy:function(){if(this.$tipsy){this.$tipsy.remove();a.removeData(this.$el,"tooltipsy")}},defaults:{alignTo:"element",offset:[0,-1],content:"",show:function(c,b){b.fadeIn(100)},hide:function(c,b){b.fadeOut(100)},css:{},className:"tooltipsy",delay:200,showEvent:"mouseenter",hideEvent:"mouseleave"}};a.fn.tooltipsy=function(b){return this.each(function(){new a.tooltipsy(this,b)})}})(jQuery);
//     Underscore.js 1.2.1
//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore
(function(){function C(e,t,n){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e._chain&&(e=e._wrapped),t._chain&&(t=t._wrapped);if(S.isFunction(e.isEqual))return e.isEqual(t);if(S.isFunction(t.isEqual))return t.isEqual(e);var r=typeof e;if(r!=typeof t)return!1;if(!e!=!t)return!1;if(S.isNaN(e))return S.isNaN(t);var i=S.isString(e),s=S.isString(t);if(i||s)return i&&s&&String(e)==String(t);var o=S.isNumber(e),u=S.isNumber(t);if(o||u)return o&&u&&+e==+t;var a=S.isBoolean(e),l=S.isBoolean(t);if(a||l)return a&&l&&+e==+t;var c=S.isDate(e),h=S.isDate(t);if(c||h)return c&&h&&e.getTime()==t.getTime();var p=S.isRegExp(e),d=S.isRegExp(t);if(p||d)return p&&d&&e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase;if(r!="object")return!1;if(e.length!==t.length)return!1;if(e.constructor!==t.constructor)return!1;var v=n.length;while(v--)if(n[v]==e)return!0;n.push(e);var m=0,g=!0;for(var y in e)if(f.call(e,y)){m++;if(!(g=f.call(t,y)&&C(e[y],t[y],n)))break}if(g){for(y in t)if(f.call(t,y)&&!(m--))break;g=!m}return n.pop(),g}var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.slice,u=r.unshift,a=i.toString,f=i.hasOwnProperty,l=r.forEach,c=r.map,h=r.reduce,p=r.reduceRight,d=r.filter,v=r.every,m=r.some,g=r.indexOf,y=r.lastIndexOf,b=Array.isArray,w=Object.keys,E=s.bind,S=function(e){return new L(e)};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=S),exports._=S):typeof define=="function"&&define.amd?define("underscore",function(){return S}):e._=S,S.VERSION="1.2.1";var x=S.each=S.forEach=function(e,t,r){if(e==null)return;if(l&&e.forEach===l)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(i in e&&t.call(r,e[i],i,e)===n)return}else for(var o in e)if(f.call(e,o)&&t.call(r,e[o],o,e)===n)return};S.map=function(e,t,n){var r=[];return e==null?r:c&&e.map===c?e.map(t,n):(x(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)},S.reduce=S.foldl=S.inject=function(e,t,n,r){var i=n!==void 0;e==null&&(e=[]);if(h&&e.reduce===h)return r&&(t=S.bind(t,r)),i?e.reduce(t,n):e.reduce(t);x(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},S.reduceRight=S.foldr=function(e,t,n,r){e==null&&(e=[]);if(p&&e.reduceRight===p)return r&&(t=S.bind(t,r)),n!==void 0?e.reduceRight(t,n):e.reduceRight(t);var i=(S.isArray(e)?e.slice():S.toArray(e)).reverse();return S.reduce(i,t,n,r)},S.find=S.detect=function(e,t,n){var r;return T(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},S.filter=S.select=function(e,t,n){var r=[];return e==null?r:d&&e.filter===d?e.filter(t,n):(x(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},S.reject=function(e,t,n){var r=[];return e==null?r:(x(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},S.every=S.all=function(e,t,r){var i=!0;return e==null?i:v&&e.every===v?e.every(t,r):(x(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),i)};var T=S.some=S.any=function(e,t,r){t=t||S.identity;var i=!1;return e==null?i:m&&e.some===m?e.some(t,r):(x(e,function(e,s,o){if(i|=t.call(r,e,s,o))return n}),!!i)};S.include=S.contains=function(e,t){var n=!1;return e==null?n:g&&e.indexOf===g?e.indexOf(t)!=-1:(n=T(e,function(e){if(e===t)return!0}),n)},S.invoke=function(e,t){var n=o.call(arguments,2);return S.map(e,function(e){return(t.call?t||e:e[t]).apply(e,n)})},S.pluck=function(e,t){return S.map(e,function(e){return e[t]})},S.max=function(e,t,n){if(!t&&S.isArray(e))return Math.max.apply(Math,e);if(!t&&S.isEmpty(e))return-Infinity;var r={computed:-Infinity};return x(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},S.min=function(e,t,n){if(!t&&S.isArray(e))return Math.min.apply(Math,e);if(!t&&S.isEmpty(e))return Infinity;var r={computed:Infinity};return x(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},S.shuffle=function(e){var t=[],n;return x(e,function(e,r,i){r==0?t[0]=e:(n=Math.floor(Math.random()*(r+1)),t[r]=t[n],t[n]=e)}),t},S.sortBy=function(e,t,n){return S.pluck(S.map(e,function(e,r,i){return{value:e,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;return n<r?-1:n>r?1:0}),"value")},S.groupBy=function(e,t){var n={},r=S.isFunction(t)?t:function(e){return e[t]};return x(e,function(e,t){var i=r(e,t);(n[i]||(n[i]=[])).push(e)}),n},S.sortedIndex=function(e,t,n){n||(n=S.identity);var r=0,i=e.length;while(r<i){var s=r+i>>1;n(e[s])<n(t)?r=s+1:i=s}return r},S.toArray=function(e){return e?e.toArray?e.toArray():S.isArray(e)?o.call(e):S.isArguments(e)?o.call(e):S.values(e):[]},S.size=function(e){return S.toArray(e).length},S.first=S.head=function(e,t,n){return t!=null&&!n?o.call(e,0,t):e[0]},S.initial=function(e,t,n){return o.call(e,0,e.length-(t==null||n?1:t))},S.last=function(e,t,n){return t!=null&&!n?o.call(e,e.length-t):e[e.length-1]},S.rest=S.tail=function(e,t,n){return o.call(e,t==null||n?1:t)},S.compact=function(e){return S.filter(e,function(e){return!!e})},S.flatten=function(e,t){return S.reduce(e,function(e,n){return S.isArray(n)?e.concat(t?n:S.flatten(n)):(e[e.length]=n,e)},[])},S.without=function(e){return S.difference(e,o.call(arguments,1))},S.uniq=S.unique=function(e,t,n){var r=n?S.map(e,n):e,i=[];return S.reduce(r,function(n,r,s){if(0==s||(t===!0?S.last(n)!=r:!S.include(n,r)))n[n.length]=r,i[i.length]=e[s];return n},[]),i},S.union=function(){return S.uniq(S.flatten(arguments,!0))},S.intersection=S.intersect=function(e){var t=o.call(arguments,1);return S.filter(S.uniq(e),function(e){return S.every(t,function(t){return S.indexOf(t,e)>=0})})},S.difference=function(e,t){return S.filter(e,function(e){return!S.include(t,e)})},S.zip=function(){var e=o.call(arguments),t=S.max(S.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=S.pluck(e,""+r);return n},S.indexOf=function(e,t,n){if(e==null)return-1;var r,i;if(n)return r=S.sortedIndex(e,t),e[r]===t?r:-1;if(g&&e.indexOf===g)return e.indexOf(t);for(r=0,i=e.length;r<i;r++)if(e[r]===t)return r;return-1},S.lastIndexOf=function(e,t){if(e==null)return-1;if(y&&e.lastIndexOf===y)return e.lastIndexOf(t);var n=e.length;while(n--)if(e[n]===t)return n;return-1},S.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var N=function(){};S.bind=function(t,n){var r,i;if(t.bind===E&&E)return E.apply(t,o.call(arguments,1));if(!S.isFunction(t))throw new TypeError;return i=o.call(arguments,2),r=function(){if(this instanceof r){N.prototype=t.prototype;var e=new N,s=t.apply(e,i.concat(o.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(o.call(arguments)))}},S.bindAll=function(e){var t=o.call(arguments,1);return t.length==0&&(t=S.functions(e)),x(t,function(t){e[t]=S.bind(e[t],e)}),e},S.memoize=function(e,t){var n={};return t||(t=S.identity),function(){var r=t.apply(this,arguments);return f.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},S.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(e,n)},t)},S.defer=function(e){return S.delay.apply(S,[e,1].concat(o.call(arguments,1)))},S.throttle=function(e,t){var n,r,i,s,o;return o=S.debounce(function(){s=!1},t),function(){r=this,i=arguments;var u=function(){n=null,e.apply(r,i),o()};n||(n=setTimeout(u,t)),s||e.apply(r,i),o&&o(),s=!0}},S.debounce=function(e,t){var n;return function(){var r=this,i=arguments,s=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(s,t)}},S.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments))}},S.wrap=function(e,t){return function(){var n=[e].concat(o.call(arguments));return t.apply(this,n)}},S.compose=function(){var e=o.call(arguments);return function(){var t=o.call(arguments);for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},S.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},S.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)f.call(e,n)&&(t[t.length]=n);return t},S.values=function(e){return S.map(e,S.identity)},S.functions=S.methods=function(e){var t=[];for(var n in e)S.isFunction(e[n])&&t.push(n);return t.sort()},S.extend=function(e){return x(o.call(arguments,1),function(t){for(var n in t)t[n]!==void 0&&(e[n]=t[n])}),e},S.defaults=function(e){return x(o.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},S.clone=function(e){return S.isObject(e)?S.isArray(e)?e.slice():S.extend({},e):e},S.tap=function(e,t){return t(e),e},S.isEqual=function(e,t){return C(e,t,[])},S.isEmpty=function(e){if(S.isArray(e)||S.isString(e))return e.length===0;for(var t in e)if(f.call(e,t))return!1;return!0},S.isElement=function(e){return!!e&&e.nodeType==1},S.isArray=b||function(e){return a.call(e)=="[object Array]"},S.isObject=function(e){return e===Object(e)},a.call(arguments)=="[object Arguments]"?S.isArguments=function(e){return a.call(e)=="[object Arguments]"}:S.isArguments=function(e){return!!e&&!!f.call(e,"callee")},S.isFunction=function(e){return a.call(e)=="[object Function]"},S.isString=function(e){return a.call(e)=="[object String]"},S.isNumber=function(e){return a.call(e)=="[object Number]"},S.isNaN=function(e){return e!==e},S.isBoolean=function(e){return e===!0||e===!1||a.call(e)=="[object Boolean]"},S.isDate=function(e){return a.call(e)=="[object Date]"},S.isRegExp=function(e){return a.call(e)=="[object RegExp]"},S.isNull=function(e){return e===null},S.isUndefined=function(e){return e===void 0},S.noConflict=function(){return e._=t,this},S.identity=function(e){return e},S.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},S.escape=function(e){return(""+e).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},S.mixin=function(e){x(S.functions(e),function(t){O(t,S[t]=e[t])})};var k=0;S.uniqueId=function(e){var t=k++;return e?e+t:t},S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},S.template=function(e,t){var n=S.templateSettings,r="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(n.escape,function(e,t){return"',_.escape("+t.replace(/\\'/g,"'")+"),'"}).replace(n.interpolate,function(e,t){return"',"+t.replace(/\\'/g,"'")+",'"}).replace(n.evaluate||null,function(e,t){return"');"+t.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",i=new Function("obj",r);return t?i(t):i};var L=function(e){this._wrapped=e};S.prototype=L.prototype;var A=function(e,t){return t?S(e).chain():e},O=function(e,t){L.prototype[e]=function(){var e=o.call(arguments);return u.call(e,this._wrapped),A(t.apply(S,e),this._chain)}};S.mixin(S),x(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];L.prototype[e]=function(){return t.apply(this._wrapped,arguments),A(this._wrapped,this._chain)}}),x(["concat","join","slice"],function(e){var t=r[e];L.prototype[e]=function(){return A(t.apply(this._wrapped,arguments),this._chain)}}),L.prototype.chain=function(){return this._chain=!0,this},L.prototype.value=function(){return this._wrapped}})();
/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */

(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

