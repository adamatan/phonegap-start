(function(){function f(d,a,b){return g(d,a,b,!1)}function g(d,a,b,f){a&&!m(a)&&(b=a,a=void 0);a=a||new Date;b=b||n;b.formats=b.formats||{};var h=0;f&&(h=(a.getTimezoneOffset()||0)*6E4,a=new Date(a.getTime()+h));return d.replace(/%([-_0]?.)/g,function(d,i){var c;if(i.length==2){c=i[0];if(c=="-")c="";else if(c=="_")c=" ";else if(c=="0")c="0";else return d;i=i[1]}switch(i){case "A":return b.days[a.getDay()];case "a":return b.shortDays[a.getDay()];case "B":return b.months[a.getMonth()];case "b":return b.shortMonths[a.getMonth()];
case "C":return e(Math.floor(a.getFullYear()/100),c);case "D":return g(b.formats.D||"%m/%d/%y",a,b);case "d":return e(a.getDate(),c);case "e":return a.getDate();case "F":return g(b.formats.F||"%Y-%m-%d",a,b);case "H":return e(a.getHours(),c);case "h":return b.shortMonths[a.getMonth()];case "I":return e(j(a),c);case "j":return c=new Date(a.getFullYear(),0,1),c=Math.ceil((a.getTime()-c.getTime())/864E5),e(c,3);case "k":return e(a.getHours(),c==null?" ":c);case "L":return e(Math.floor(a.getTime()%1E3),
3);case "l":return e(j(a),c==null?" ":c);case "M":return e(a.getMinutes(),c);case "m":return e(a.getMonth()+1,c);case "n":return"\n";case "o":return String(a.getDate())+o(a.getDate());case "P":return a.getHours()<12?b.am:b.pm;case "p":return a.getHours()<12?b.AM:b.PM;case "R":return g(b.formats.R||"%H:%M",a,b);case "r":return g(b.formats.r||"%I:%M:%S %p",a,b);case "S":return e(a.getSeconds(),c);case "s":return Math.floor((a.getTime()-h)/1E3);case "T":return g(b.formats.T||"%H:%M:%S",a,b);case "t":return"\t";
case "U":return e(k(a,"sunday"),c);case "u":return c=a.getDay(),c==0?7:c;case "v":return g(b.formats.v||"%e-%b-%Y",a,b);case "W":return e(k(a,"monday"),c);case "w":return a.getDay();case "Y":return a.getFullYear();case "y":return c=String(a.getFullYear()),c.slice(c.length-2);case "Z":return f?"GMT":(c=a.toString().match(/\((\w+)\)/))&&c[1]||"";case "z":return f?"+0000":(c=a.getTimezoneOffset(),(c<0?"+":"-")+e(Math.abs(c/60))+e(c%60));default:return i}})}function m(d){for(var a=0,b=l.length,a=0;a<
b;++a)if(typeof d[l[a]]!="function")return!1;return!0}function e(d,a,b){typeof a==="number"&&(b=a,a="0");a==null&&(a="0");b=b||2;d=String(d);if(a)for(;d.length<b;)d=a+d;return d}function j(d){d=d.getHours();d==0?d=12:d>12&&(d-=12);return d}function o(d){var a=d%10;d%=100;if(d>=11&&d<=13||a===0||a>=4)return"th";switch(a){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function k(d,a){var a=a||"sunday",b=d.getDay();a=="monday"&&(b==0?b=6:b--);var e=new Date(d.getFullYear(),0,1);return Math.floor(((d-
e)/864E5+7-b)/7)}var h;h=typeof module!=="undefined"?module.exports=f:function(){return this||(0,eval)("this")}();h.strftime=f;h.strftimeUTC=f.strftimeUTC=function(d,a,b){return g(d,a,b,!0)};h.localizedStrftime=f.localizedStrftime=function(d){return function(a,b){return f(a,b,d)}};var n={days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm"},l=["getTime","getTimezoneOffset","getDay","getDate","getMonth","getFullYear","getYear","getHours","getMinutes","getSeconds"]})();
