(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=n("ae40"),c=i("filter"),l=o("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),o=n("50c4"),c=n("a691"),l=n("1d80"),u=n("8aa5"),d=n("14c3"),s=Math.max,f=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,x=b?"$":"$0";return[function(n,r){var a=l(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!b&&m||"string"===typeof r&&-1===r.indexOf(x)){var i=n(t,e,this,r);if(i.done)return i.value}var l=a(e),p=String(this),g="function"===typeof r;g||(r=String(r));var v=l.global;if(v){var E=l.unicode;l.lastIndex=0}var y=[];while(1){var R=d(l,p);if(null===R)break;if(y.push(R),!v)break;var A=String(R[0]);""===A&&(l.lastIndex=u(p,o(l.lastIndex),E))}for(var C="",S=0,k=0;k<y.length;k++){R=y[k];for(var w=String(R[0]),U=s(f(c(R.index),p.length),0),_=[],T=1;T<R.length;T++)_.push(h(R[T]));var L=R.groups;if(g){var O=[w].concat(_,U,p);void 0!==L&&O.push(L);var $=String(r.apply(void 0,O))}else $=I(w,p,U,_,L,r);U>=S&&(C+=p.slice(S,U)+$,S=U+w.length)}return C+p.slice(S)}];function I(e,n,r,a,o,c){var l=r+e.length,u=a.length,d=v;return void 0!==o&&(o=i(o),d=g),t.call(c,d,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":c=o[i.slice(1,-1)];break;default:var d=+i;if(0===d)return t;if(d>u){var s=p(d/10);return 0===s?t:s<=u?void 0===a[s-1]?i.charAt(1):a[s-1]+i.charAt(1):t}c=a[d-1]}return void 0===c?"":c}))}}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"91aa":function(e,t,n){},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],s=l||d||u;s&&(c=function(e){var t,n,a,c,s=this,f=u&&s.sticky,p=r.call(s),g=s.source,v=0,h=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),d&&(n=new RegExp("^"+g+"$(?!\\s)",p)),l&&(t=s.lastIndex),a=i.call(f?n:s,h),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=s.lastIndex,s.lastIndex+=a[0].length):s.lastIndex=0:l&&a&&(s.lastIndex=s.global?a.index+a[0].length:t),d&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},baa5:function(e,t,n){var r=n("23e7"),a=n("e58c");r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),l=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),s=i("replace"),f=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,s){var g=i(e),v=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=v&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!v||!h||"replace"===e&&(!u||!d||f)||"split"===e&&!p){var b=/./[g],m=n(g,""[e],(function(e,t,n,r,a){return t.exec===o?v&&!a?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=m[0],I=m[1];r(String.prototype,e,x),r(RegExp.prototype,g,2==t?function(e,t){return I.call(e,this,t)}:function(e){return I.call(e,this)})}s&&c(RegExp.prototype[g],"sham",!0)}},e58c:function(e,t,n){"use strict";var r=n("fc6a"),a=n("a691"),i=n("50c4"),o=n("a640"),c=n("ae40"),l=Math.min,u=[].lastIndexOf,d=!!u&&1/[1].lastIndexOf(1,-0)<0,s=o("lastIndexOf"),f=c("indexOf",{ACCESSORS:!0,1:0}),p=d||!s||!f;e.exports=p?function(e){if(d)return u.apply(this,arguments)||0;var t=r(this),n=i(t.length),o=n-1;for(arguments.length>1&&(o=l(o,a(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:u},e76e:function(e,t,n){"use strict";var r=n("91aa"),a=n.n(r);a.a},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about"}},[n("b-container",{staticClass:"aboutContainer"},[n("b-row",[n("b-col",[n("b-card",{staticClass:"cv",attrs:{title:"Serkan Özel"}},[n("b-card-text",[e._v("I am a computer engineering senior who loves his profession. During my education, I worked with a lot of extra things that you can find below. I have a personal career goal of being a backend web developer. I am a strong English communicator due to English education and my background and I am open to work in abroad in big tech companies in the future.")]),n("div",{staticClass:"LI-profile-badge d-flex justify-content-center align-items-center",attrs:{"data-version":"v1","data-size":"large","data-locale":"tr_TR","data-type":"vertical","data-theme":"dark","data-vanity":"srknzl"}},[n("a",{staticClass:"LI-simple-link",attrs:{href:"https://tr.linkedin.com/in/srknzl?trk=profile-badge"}},[e._v("Serkan Özel")])])],1)],1)],1),n("b-row",[n("b-col")],1)],1)],1)},a=[],i=(n("99af"),n("4de4"),n("a15b"),n("baa5"),n("d81d"),n("fb6a"),n("b0c0"),n("ac1f"),n("5319"),{mounted:function(){(function(e){e.LIRenderAll=function(){function t(e){return Array.prototype.slice.call(e.attributes).filter((function(e){return-1!==e.name.lastIndexOf("data-key-",0)})).map((function(e){return encodeURIComponent(e.name.replace("data-","").toLowerCase())+"="+encodeURIComponent(e.value)}))}function n(e){var n=e.getAttribute("data-size"),r=e.getAttribute("data-locale"),a=e.getAttribute("data-type"),i=e.getAttribute("data-theme"),o=e.getAttribute("data-vanity"),c=e.getAttribute("data-version"),l=e.getAttribute("data-ei"),u=e.getAttribute("data-entity"),d=e.getAttribute("data-iscreate"),s=Math.round(1e6*Math.random());l=l?"https://badges.linkedin-ei.com/":"https://badges.linkedin.com/",r=["locale="+encodeURIComponent(r),"badgetype="+encodeURIComponent(a),"badgetheme="+encodeURIComponent(i),"uid="+encodeURIComponent(s),"version="+encodeURIComponent(c)];"v2"===c?(l+="view",r.push("badgesize="+encodeURIComponent(n)),r.push("entity="+encodeURIComponent(u)),r=r.concat(t(e))):(l+="profile",r.push("maxsize="+encodeURIComponent(n)),r.push("trk="+encodeURIComponent("profile-badge")),r.push("vanityname="+encodeURIComponent(o))),d&&r.push("fromCreate=true"),n=l+"?"+r.join("&"),e.setAttribute("data-uid",s),e=document.createElement("script"),e.src=n,f.push(e),document.body.appendChild(e)}function r(e,t){if("SCRIPT"!==e.tagName||p[e.src]||t&&(!t||e.getAttribute("data-isartdeco")))for(var n=0,i=e.childNodes;n<i.length;)r(i[n++],t);else e.parentNode.replaceChild(a(e),e),p[e.src]=!0;return e}function a(e){for(var t=document.createElement("script"),n=e.attributes.length-1;0<=n;n--)t.setAttribute(e.attributes[n].name,e.attributes[n].value);return t}function i(){(d>=s&&0<s||d>=g.length)&&(delete e.LIBadgeCallback,f.map((function(e){document.body.removeChild(e)})))}var o,c,l,u,d=0,s=0,f=[],p={},g=Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge"));for(o=0,c=g.length;o<c;o++)l=g[o],u=l.getAttribute("data-rendered"),u||(s++,l.setAttribute("data-rendered",!0),n(l));e.LIBadgeCallback=function(e,t){var n,a,o,l;for(d++,n=0,c=g.length;n<c;n++)a=g[n],l=a.getAttribute("data-iscreate"),o=parseInt(a.getAttribute("data-uid"),10),o===t&&(o=document.createElement("div"),o.innerHTML=e,a.appendChild(o),r(a,l));i()}},"complete"===document.readyState?e.LIRenderAll():e.addEventListener("load",e.LIRenderAll,!1)})(window)}}),o=i,c=(n("e76e"),n("2877")),l=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=about.37367a74.js.map